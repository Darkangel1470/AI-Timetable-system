import { INewUser, IUser } from '@/types';
import { auth, db } from './firebaseConfig';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { addDoc, arrayUnion, collection, doc, getCountFromServer, updateDoc } from 'firebase/firestore';

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
export async function createTeacher(value){
	console.log('value.name :>> ', value.typeof);
	const docRef = await addDoc(collection(db, 'teachers'),{
		name: value.name
	})
}
export async function deleteTeacher(value){
	console.log('value.name :>> ', value.name);
	const docRef = await addDoc(collection(db, 'teachers'),{
		name: value.name
	})
}

// manage batches functions
export async function createBatch(value){
	console.log('value.name :>> ', value.name);
	const docRef = await addDoc(collection(db, 'batches'),{
		name: value.name
	})
}

// manage subjects functions
export async function createSubject(value){
	console.log('value.name :>> ', value.name);
	const docRef = await addDoc(collection(db, 'subjects'),value)
	addSubtoBatchlist(value,docRef.id)

}
// subjectname to batchlist
export async function addSubtoBatchlist(value, id){
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