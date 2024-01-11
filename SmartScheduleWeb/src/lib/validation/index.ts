import * as z from 'zod';

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message:"Password has to be atleast 8 characters"})
});

export const SignupValidation = z.object({
    name: z.string(). min(2, {message: "Too short"}),
    username: z.string().min(3,{
        message:"Username has to be atleast 3 letters"
    }).max(50),
    email: z.string().email(),
    password: z.string().min(8,{message:"Password has to be atleast 8 characters"})
});

export const TeacherValidation = z.object({
    name: z.string().min(2,{message:"Name can't be less than 2 letters"}).max(20,{message:"Name can't be more than 20 letters"})
})

export const BatchValidation = z.object({
    name: z.string().min(2,{message:"Name can't be less than 2 letters"}).max(20,{message:"Name can't be more than 20 letters"})
})

export const SubjectValidation = z.object({
    name: z.string().min(2,{message:"Name can't be less than 2 letters"}).max(30,{message:"Name can't be more than 30 letters"}),
    batch: z.string(),
    teacher: z.string(),
    frequency: z.coerce.number().min(1,{message:"Lecture frequency cant be less than 1 per week"}).max(20,{message:"Lecture frequency cant be greater than 20 per week"})
})

