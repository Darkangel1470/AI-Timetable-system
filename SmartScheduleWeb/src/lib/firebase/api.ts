import { INewUser, IUser } from '@/types';
import { auth, db } from './firebaseConfig';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { addDoc, arrayUnion, collection, doc, getCountFromServer, getDocs, updateDoc } from 'firebase/firestore';

export async function createUser(user: INewUser) {
	try {
		let newUser;
		await createUserWithEmailAndPassword(auth, user.email, user.password)
			.then((userCredentials) => {
				newUser = userCredentials.user;
				console.log('user.email :>> ', newUser.email);
			})
			.catch((error) => {
				console.log(error.message);
			});
		return newUser;
	} catch (err) {
		console.log(err);
		return err;
	}
}
export async function signinUser(user: IUser) {
	let result;
	try {
		await signInWithEmailAndPassword(auth, user.email, user.password)
			.then((userCredentials) => {
				const usr = userCredentials.user;
				result = usr.email;
				console.log('usr :>> ', usr);
			})
			.catch((err) => {
				console.log('err :>> ', err);
			});
		console.log('user :>> ', result);
		return result;
	} catch (error) {
		console.log('error :>> ', error);
	}
}
export async function logout() {
	let result:boolean = false;
	try {
		await signOut(auth)
			.then(() => {
				result = true;
			})
			.catch(() => {
				result = false;
			});
	} catch (err) {
		console.log('err :>> ', err);
	}
	return result;
}
// manage teachers functions
export async function createTeacher(value: { name: string; }){
	console.log('value.name :>> ', value.typeof);
	const docRef = await addDoc(collection(db, 'teachers'),{
		name: value.name
	})
}
export async function deleteTeacher(value: { name: string; }){
	console.log('value.name :>> ', value.name);
	const docRef = await addDoc(collection(db, 'teachers'),{
		name: value.name
	})
}

// manage batches functions
export async function createBatch(value: { name: string; }){
	console.log('value.name :>> ', value.name);
	const docRef = await addDoc(collection(db, 'batches'),{
		name: value.name
	})
}

// manage subjects functions
export async function createSubject(value: { name: string; batch: string; teacher: string; frequency: number; }){
	console.log('value.name :>> ', value.name);
	const docRef = await addDoc(collection(db, 'subjects'),value)
	addSubtoBatchlist(value,docRef.id)

}
// subjectname to batchlist
export async function addSubtoBatchlist(value: { batch: string; name: unknown; }, id:number){
	await updateDoc(doc(db,"batches",value.batch),{
		subList: arrayUnion(value.name),
		subidList: arrayUnion(id)
	})

}

export async function getCount(collectionName:string){
	const ss = await getCountFromServer(collection(db, collectionName));
	console.log('ss.data().count :>> ', ss.data().count);
	return ss.data().count;
}


//algorithm function
export async function getAllBatches() {
	const batchList: { id: string; }[] = []
	const ss = await getDocs(collection(db, "batches"));
	ss.forEach(doc =>{
		batchList.push({...doc.data(),id:doc.id})
	})
	return batchList;
}

export async function getSubjectList(subIdList: unknown[]){
	const subjectList = [];
	subIdList.forEach(id => {
		console.log('id :>> ', id);
	})
}