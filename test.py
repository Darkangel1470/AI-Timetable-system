### Algorithm
# 1. List all teachers
teachers = {"vasundhara", "shital", "vimal", "sunita", "shruti", "shraddha"}

# 2. List all batches
batches = {"tysd"}

# 3. List all Subjects
subjects = {"DA", "RA", "MM", "ML", "BDA", "OT"}

# 4. List college hours or lecture slots
slots = {9, 10, 11, 12, 13, 14, 15}

# 5. Assign Teacher to subject
subjectTeacher = {
    "DA": "vasundhara",
    "RA": "shital",
    "MM": "vimal",
    "ML": "sunita",
    "BDA": "shruti",
    "OT": "shraddha",
}

lecturePerSubject = {
    "DA": 3,
    "RA": 3,
    "MM": 3,
    "ML": 3,
    "BDA":3,
    "OT": 3,
}

# MISSED: Assign subjects to batches
# subjectBatches = {
#     "wdp": "tysd",
#     "ai": "tysd",
#     "cog": "tyba",
#     "clinical": "tyba"
# }
batchsubject = {"tysd": {"DA", "RA", "MM", "ML", "BDA", "OT"}}

timetable = {
    # "tysd":{
    # },
    # "tyba":{
    # }
}

tt = {
    'tyba':{
        'day-1':{
            
        }
    },
}

# auto create empty tt for each batch
for batch in batches:
    timetable[batch] = dict()

teachertt = {
    #  "nihar":{},
}
# auto create empty tt for each teacher
for teacher in teachers:
    teachertt[teacher] = dict()


# 6. Assign lecture slot to subject
# batchwise tt algo

# loop through batches
for batch in batches:
    # loop through free slots for this batch
    for slot in slots:
        # loop though subjects for that batch
        for subject in batchsubject[batch]:
            print(batch, "=", subject, " by ", subjectTeacher[subject])

            if lecturePerSubject[subject] < 1:
                print("next subject")
                continue
            if slot in timetable[batch]:
                print(timetable[batch][slot])
            else:  # if false
                #           check if subject teacher is free
                if slot not in teachertt[subjectTeacher[subject]]:
                    # print(teachertt[subjectTeacher[subject]])
                    #               if yes then assign subject to the slot
                    timetable[batch][slot] = subject
                    #               and assign subject to teachertimetable
                    teachertt[subjectTeacher[subject]][slot] = subject
                    #               reduce lecturePerSubject for this subject
                    lecturePerSubject[subject] = lecturePerSubject[subject] - 1
                    continue


# print timetable
# loop through batchtimetable
print("----------batch timetable---------------")
for btt in timetable:
    # loop through slotAs and print
    print("----", btt, "----")
    for slot in timetable[btt]:
        print(
            slot,
            " : ",
            timetable[btt][slot],
            " by ",
            subjectTeacher[timetable[btt][slot]],
        )
# print teach tt
# loop through batchtimetable
print("----------Teachers---------------")
for teacher in teachertt:
    print("----", teacher, "----")
    # loop through slots and print
    for slot in teachertt[teacher]:
        batch = {b for b in batchsubject if teachertt[teacher][slot] in batchsubject[b]}
        print(slot, " : ", teachertt[teacher][slot], " at ", batch)
