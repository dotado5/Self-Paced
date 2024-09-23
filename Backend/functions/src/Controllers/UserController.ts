import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { firestoreDb } from "../firebase";
import { Response } from "express";
import { User, Register, Login, EnrollUser, UserCoursesRequest } from "../Types/userType";
import { EnrolledCourse } from "../Types/courseType";
// import bcrypt from "bcryptjs";
import { generateAccessToken } from '../modules';
const bcrypt = require('bcryptjs')


const createUserAccount = async (req: Register, res: Response) => {
    // const data: Register = {
    //     firstName: "Emmanuel",
    //     middleName: "Ebunoluwa",
    //     lastName: "Oguntola",
    //     email: "oguntolagifted@gmail.com",
    //     password: "Ebunoluwa",
    //     // enrolledCourses: [],
    // };

    try {
        // Step 1: Check if the email already exists
        const emailQuery = query(collection(firestoreDb, "Users"), where("email", "==", req.email));
        const querySnapshot = await getDocs(emailQuery);

        if (!querySnapshot.empty) {
            return res.status(400).send({
                status: "Error",
                message: "Email already exists",
            });
        }

        // Step 2: Add the document to the collection
        const docRef = await addDoc(collection(firestoreDb, "Users"), req);

        // Step 3: Get the ID of the newly created document
        const userId = docRef.id;

        // Step 4: Update the document with the ID
        await updateDoc(doc(firestoreDb, "Users", userId), {
            userId: userId,
        });

        return res.status(200).send({
            status: "Success",
            message: "User account Created Successfully",
            userId: userId,
        });
    } catch (error) {
        console.log("upload error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

const getAllUsers = async (res: Response) => {
    try {
        const collectionRef = collection(firestoreDb, "Users");
        let users: any[] = [];
        const q = query(collectionRef);

        const docSnap = await getDocs(q);

        docSnap.forEach((doc) => {
            users.push(doc.data());
        });

        return res.status(200).send({
            status: "Success",
            message: "All users loaded successfully",
            data: users,
        });
    } catch (error) {
        console.log("fetch error", error);
        return;
    }
};

const getUserById = async (req: UserCoursesRequest, res: Response) => {
    // const id = "7N8QMl2zM1AJ9F62ez7V";
    const { userId } = req


    try {
        const docRef = doc(firestoreDb, "Users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return res.status(200).send({
                status: "Success",
                message: `User with ID ${userId} loaded successfully`,
                data: docSnap.data(),
            });
        } else {
            return res.status(404).send({
                status: "Error",
                message: `User with ID ${userId} not found`,
            });
        }
    } catch (error) {
        console.log("fetch error", error);
        return res.status(500).send({
            status: "Error",
            message: "Failed to load user",
            error: error,
        });
    }
};

const getUserByField = async (req: Login, res: Response) => {
    let token: string;

    try {
        const q = query(
            collection(firestoreDb, "Users"),
            where("email", "==", req.email)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return res.status(404).send({
                status: "Failure",
                message: "User not found or incorrect credentials",
            });
        }

        const userDoc = querySnapshot.docs[0];
        const userData = await userDoc.data();

        // console.log(req.password, userData.password);


        // Compare the incoming password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(
            req.password,
            userData.password
        );

        // console.log(isPasswordValid);


        if (!isPasswordValid) {
            return res.status(403).send({
                status: "Failure",
                message: "Incorrect password",
            });
        } else {
            token = generateAccessToken(userData);
        }

        // console.log(userData);


        const firstNameFirstLetter = userData.firstName.charAt(0);
        const lastNameFirstLetter = userData.lastName.charAt(0);


        return res.status(200).send({
            status: "Success",
            message: "User account found",
            user: userData,
            accessToken: token,
            initials: `${firstNameFirstLetter}${lastNameFirstLetter}`,
        });
    } catch (error) {
        console.log("fetch error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

const updateUserById = async (req: User, res: Response) => {
    // const Id = "7N8QMl2zM1AJ9F62ez7V";
    const { email, enrolledCourses, firstName, lastName, password, userId, middleName } = req
    const hashedPassword = await bcrypt.hash(password, 10);


    const updatedData = {
        userId: userId,
        email: email,
        enrolledCourses: enrolledCourses,
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        password: hashedPassword
    };

    try {
        const courseDoc = doc(firestoreDb, "Users", userId);
        await updateDoc(courseDoc, updatedData);

        return res.status(200).send({
            status: "Success",
            message: "User updated successfully",
        });
    } catch (error) {
        console.log("update error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

const deleteUserById = async (req: UserCoursesRequest, res: Response) => {
    const { userId } = req
    try {
        // Fetch all users
        const usersCollection = collection(firestoreDb, "Users");
        const q = query(usersCollection, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return res.status(404).send({
                status: "Error",
                message: "User not found",
            });
        }

        // Delete the user document
        querySnapshot.forEach(async (docSnapshot) => {
            await deleteDoc(docSnapshot.ref);
        });

        return res.status(200).send({
            status: "Success",
            message: "User deleted successfully",
        });
    } catch (error) {
        console.log("delete error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

const enrollUserIntoCourse = async (req: EnrollUser, res: Response) => {
    const course: EnrolledCourse = {
        courseId: req.courseId,
        progress: [],
    };

    try {
        await updateDoc(doc(firestoreDb, "Users", req.userId), {
            enrolledCourses: [course],
        });

        return res.status(200).send({
            status: "Success",
            message: "User updated successfully",
        });
    } catch (error) {
        console.log("update error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

const getAllUserCoursesByUserId = async ({ userId }: UserCoursesRequest, res: Response) => {
    // const id = "7N8QMl2zM1AJ9F62ez7V";

    try {
        const docRef = doc(firestoreDb, "Users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return res.status(200).send({
                status: "Success",
                message: `User's courses loaded successfully`,
                data: docSnap.data().enrolledCourses,
            });
        } else {
            return res.status(404).send({
                status: "Error",
                message: `User courses empty`,
            });
        }
    } catch (error) {
        console.log("fetch error", error);
        return res.status(500).send({
            status: "Error",
            message: "Failed to load user",
        });
    }
};

export {
    createUserAccount,
    getAllUsers,
    getUserById,
    getUserByField,
    updateUserById,
    deleteUserById,
    enrollUserIntoCourse,
    getAllUserCoursesByUserId
};
