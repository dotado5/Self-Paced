import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { firestoreDb } from "../firebase";
import { CourseRequest, UpdateCourse, getCourse } from "../Types/courseType";
import { Response } from "express";
// req: CourseRequest,

const createCourse = async (res: Response, req: CourseRequest) => {
    // const module: Module[] = [
    //     { title: "Introduction to Elixir and Phoenix", content: "" },
    //     { title: "Getting Started with Elixir", content: "" },
    //     { title: "Phoenix Project Structure", content: "" },
    //     { title: "Web Development with Phoenix", content: "" },
    //     { title: "Working with Ecto (Phoenix’s Database Tool)", content: "" },
    // ];
    // const data: CourseRequest = {
    //     // id will be added after the document is created
    //     title: { colored: 'Elixir + Phoenix', plain: 'For Beginners' },
    //     about: 'This course aims to provide a solid foundation in Elixir programming and the Phoenix web framework, empowering students to embark on their journey in web application development with Elixir and Phoenix.',
    //     description: 'The course is designed to introduce individuals to the Elixir programming language and the Phoenix web framework, equipping them with the foundational knowledge and skills to build robust and scalable web applications. This course is ideal for beginners with little to no prior experience in Elixir or web development. Upon successful completion of the course, students will receive a certificate or acknowledgment of their achievement, indicating their proficiency in Elixir and Phoenix web development. Overall, the course aims to provide a solid foundation in Elixir programming and the Phoenix web framework, empowering students to embark on their journey in web application development with Elixir and Phoenix.',
    //     modules: module,
    //     imgUrlNo: 2,
    //     category: "engineering",
    // };


    try {
        console.log('req', req);

        // Step 1: Add the document to the collection
        const docRef = await addDoc(collection(firestoreDb, "Courses"), req);

        // Step 2: Get the ID of the newly created document
        const courseId = docRef.id;

        // Step 3: Update the document with the ID
        await updateDoc(doc(firestoreDb, "Courses", courseId), {
            courseId: courseId,
        });

        return res.status(200).send({
            status: "Success",
            message: "Course Created Successfully",
            courseId: courseId,
        });
    } catch (error) {
        console.log("upload error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

const getAllCourses = async (res: Response) => {
    try {
        const collectionRef = collection(firestoreDb, "Courses");
        let courses: any[] = [];
        const q = query(collectionRef);

        const docSnap = await getDocs(q);

        docSnap.forEach((doc) => {
            courses.push(doc.data());
        });

        return res.status(200).send({
            status: "Success",
            message: "All courses loaded successfully",
            data: courses,
        });
    } catch (error) {
        console.log("fetch error", error);
        return;
    }

};

const getCourseById = async ({ courseId }: getCourse, res: Response) => {
    // const id = "7N8QMl2zM1AJ9F62ez7V";

    try {
        const q = query(
            collection(firestoreDb, "Courses"),
            where("courseId", "==", courseId)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return res.status(404).send({
                status: "Failure",
                message: "Course not found or incorrect courseId",
            });
        }

        const courseData = querySnapshot.docs[0].data();

        return res.status(200).send({
            status: "Success",
            message: "Course found",
            course: courseData,
        });
    } catch (error) {
        console.log("fetch error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

const updateCourseById = async (req: UpdateCourse, res: Response) => {
    // const Id = "8Tss2V1fq2UeTbmT1PFc";
    const { courseId, title, about, category, description, imgUrlNo, modules } = req

    const updatedData = {
        title: { colored: title?.colored, plain: title?.plain },
        about: about,
        category: category,
        description: description,
        modules: modules,
        imgUrlNo: imgUrlNo,
    };

    try {
        const courseDoc = doc(firestoreDb, "Courses", courseId);
        await updateDoc(courseDoc, updatedData);

        return res.status(200).send({
            status: "Success",
            message: "Course updated successfully",
        });
    } catch (error) {
        console.log("update error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

const deleteCourseById = async (courseId: string, res: Response) => {
    try {
        const courseDoc = doc(firestoreDb, "Courses", courseId);
        await deleteDoc(courseDoc);

        return res.status(200).send({
            status: "Success",
            message: "Course deleted successfully",
        });
    } catch (error) {
        console.log("delete error", error);
        return res.status(500).send({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};

export {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById,
};
