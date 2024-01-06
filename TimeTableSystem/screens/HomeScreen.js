import { useNavigation } from "@react-navigation/native"
import react, { useLayoutEffect } from "react"
import { StatusBar, StyleSheet,ScrollView, Text, View } from "react-native"
import SafeAndroidView from "../styles/SafeAndroidView";
import Colors from "../styles/Colors";

export default function HomeScreen() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    })

    return ( 
        <View style={[SafeAndroidView.AndroidSafeArea,ss.body]}>
            {/* Top Section */}
            <View style={[ss.top,ss.boxShadow]}>
                {/* Header */}
                <View style={ss.headerView}>
                    <Text style={ss.headerText}>Schedule</Text>
                </View>
                {/* Date timeline */}
                <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={ss.timelineView}>
                    {/* Date */}
                    <View style={ss.dateView}>
                        {/* day */} 
                        <Text style={ss.dayText}>Thur</Text>
                        {/* Date */}
                        <Text style={ss.dateText}>8</Text>
                    </View>
                    <View style={ss.dateView}>
                        {/* day */} 
                        <Text style={ss.dayText}>Thur</Text>
                        {/* Date */}
                        <Text style={ss.dateText}>9</Text>
                    </View>
                    <View style={ss.dateView}>
                        {/* day */} 
                        <Text style={ss.dayText}>Thur</Text>
                        {/* Date */}
                        <Text style={ss.dateText}>10</Text>
                    </View>
                    <View style={ss.dateView}>
                        {/* day */} 
                        <Text style={ss.dayText}>Thur</Text>
                        {/* Date */}
                        <Text style={ss.dateText}>11</Text>
                    </View>
                    <View style={ss.dateView}>
                        {/* day */} 
                        <Text style={ss.dayText}>Thur</Text>
                        {/* Date */}
                        <Text style={ss.dateText}>12</Text>
                    </View>
                </ScrollView>
            </View>
            {/* Timetable */}
            <View style={ss.timetableView}>
                {/* header */}
                <View><Text style={ss.timetableText}>Timetable</Text></View>
                {/* List of subjects */}
                <ScrollView>
                    {/* Slot  */}
                    <View style={ss.slotView}>
                        {/* Time Slot */}
                        <View style={ss.timeView}>
                            {/* Time */}
                            <Text style={ss.timeText}>09:00</Text>
                            {/* Duration */}
                            <Text style={ss.durationText}>60 min</Text>
                        </View>
                        {/* Subject details */}
                        <View style={ss.subjectDetails}>
                            {/* Subject name */}
                            <Text style={ss.subnameText}>Machine learning</Text>
                            {/* Teacher name */}
                            <Text style={ss.teacherText}>Sunita</Text>
                            {/* Classroom */}
                            <Text style={ss.classroomText}>508</Text>
                        </View>
                    </View>
                    <View style={ss.slotView}>
                        {/* Time Slot */}
                        <View style={ss.timeView}>
                            {/* Time */}
                            <Text style={ss.timeText}>09:00</Text>
                            {/* Duration */}
                            <Text style={ss.durationText}>60 min</Text>
                        </View>
                        {/* Subject details */}
                        <View style={ss.subjectDetails}>
                            {/* Subject name */}
                            <Text style={ss.subnameText}>Machine learning</Text>
                            {/* Teacher name */}
                            <Text style={ss.teacherText}>Sunita</Text>
                            {/* Classroom */}
                            <Text style={ss.classroomText}>508</Text>
                        </View>
                    </View>
                    <View style={ss.slotView}>
                        {/* Time Slot */}
                        <View style={ss.timeView}>
                            {/* Time */}
                            <Text style={ss.timeText}>09:00</Text>
                            {/* Duration */}
                            <Text style={ss.durationText}>60 min</Text>
                        </View>
                        {/* Subject details */}
                        <View style={ss.subjectDetails}>
                            {/* Subject name */}
                            <Text style={ss.subnameText}>Machine learning</Text>
                            {/* Teacher name */}
                            <Text style={ss.teacherText}>Sunita</Text>
                            {/* Classroom */}
                            <Text style={ss.classroomText}>508</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            {/* NavTab */}
        </View>
    )
}

const ss = StyleSheet.create({
    body:{
        backgroundColor: Colors.background,
    },
    container:{ 
        alignContent: 'center'
    },
    header:{
        fontSize:10
    },
    top:{
        backgroundColor: Colors.primaryWhite,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 8*22,
    },
    headerView:{
        // backgroundColor: '#f00',
        marginLeft: 8*4,
        marginTop: 8*4,
    },
    headerText:{
        fontSize:8*4,
        fontWeight: 'bold',
    },
    timelineView:{
        // backgroundColor: '#f00',
        height: 8*8,
        marginTop: 10,
        centerContent: true
    }
    ,dateView:{
        // backgroundColor: '#0f0',
        marginTop: 10,
        marginBottom: 10,
        width:8*10,
        alignItems: 'center',
    }
    ,dayText:{

        fontSize:8*2,
        fontWeight: 'bold',
        opacity: 0.2
    }
    ,dateText:{
        fontSize:8*3,
        fontWeight: 'bold',

    }
    ,timetableView:{
        marginLeft:8*3,
        marginRight: 8*3,
        marginTop: 8*3,
    }
    ,timetableText:{
        fontSize:8*2.5,
        fontWeight: 'bold',
    }
    ,slotView:{
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: Colors.primaryWhite,
        borderRadius: 5,
        padding: 8*2,
        marginTop:10,
        borderLeftColor: 'rgb(90,90,255)',
        borderLeftWidth: 10,

    }
    // css for time view
    ,timeView:{
        paddingRight: 8*2,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
    ,timeText:{
        fontSize:8*3,
        fontWeight: 'bold',
    }
    ,durationText:{
        fontSize:8*2,
    }
    // css for subject view
    ,subjectDetails:{

    }
    ,subnameText:{
        fontSize:8*2,
        fontWeight: 'bold',
    }
    ,teacherText:{
        fontSize:8*2,
        // fontWeight: 'bold',
    }
    ,classroomText:{
        fontSize:8*2,
        fontWeight: 'bold',
    }






    ,boxShadow:{
        shadowColor: '#ff0000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.5,
        shadowRadius: 20,
    }
})