
import { Request, Response } from "express";
import {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourseById,
} from "./Controllers/CourseController";
import {
    createUserAccount,
    deleteUserById,
    enrollUserIntoCourse,
    getAllUserCoursesByUserId,
    getAllUsers,
    getUserByField,
    getUserById,
    updateUserById,
} from "./Controllers/UserController";
import { Register } from "./Types/userType";
import { authenticateToken } from "./modules";
// import { getCourse } from "./Types/courseType";
// import functions from 'firebase-functions'
const functions = require('firebase-functions')
const express = require('express')
const bcrypt = require('bcryptjs')
const app = express();
const port = 3000;

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./Swagger/swagger');


// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(express.json());

/**
 * @swagger
 * /home:
 *   get:
 *     summary: Contact
 *     description: Make contact with backend.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
app.get("/home", (req: any, res: { send: (arg0: string) => void; }) => {
    res.send("Hello, world!");
});

// course controller functions
/**
 * @swagger
 * /createCourse:
 *   post:
 *     summary: Create Course endpoint
 *     description: Add new course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: object
 *                 properties:
 *                   colored:
 *                     type: string
 *                     example: "Colored Title"
 *                   plain:
 *                     type: string
 *                     example: "Plain Title"
 *               about:
 *                 type: string
 *                 example: "About the content"
 *               description:
 *                 type: string
 *                 example: "Detailed description"
 *               modules:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     moduleName:
 *                       type: string
 *                       example: "Module Name"
 *                     moduleContent:
 *                       type: string
 *                       example: "Module Content"
 *               category:
 *                 type: string
 *                 enum: [ 'engineering', 'design', 'business & marketing', 'data science', 'IT security' ]
 *                 example: 'engineering'
 *               imgUrlNo:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123456"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/createCourse", async (req: Request, res: Response) => {

    const { body } = req
    try {
        const response = await createCourse(res, body);
        return response;
        // res.status(200).send("Data uploaded successfully");
    } catch (error) {
        res.status(500).send("Error uploading data");
        return;
    }


});

/**
 * @swagger
 * /getAllCourses:
 *   get:
 *     summary: All Courses
 *     description: Fetch all courses in the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of courses.
 */
app.get("/getAllCourses", async (req: any, res: Response<any>) => {
    try {
        const response = await getAllCourses(res);
        return response;
    } catch (error) {
        res.status(500).send("Error uploading data");
        return;
    }
});

/**
 * @swagger
 * /getCourseById:
 *   post:
 *     summary: Get Course by Id endpoint
 *     description: Fetch course by courseId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *                 example: "1235ddfc"
 *     responses:
 *       200:
 *         description: Fetch Successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 course:
 *                   type: object
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/getCourseById", async (req: Request, res: Response<any>) => {
    const { body } = req
    try {
        const response = await getCourseById(body, res);
        return response;
    } catch (error) {
        res.status(500).send("Error uploading data");
        return;
    }
});

/**
 * @swagger
 * /updateCourse:
 *   post:
 *     summary: Update Course endpoint
 *     description: Update course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *                 example: "8Tss2V1fq2UeTbmT1PFc"
 *               title:
 *                 type: object
 *                 properties:
 *                   colored:
 *                     type: string
 *                     example: "Colored Title"
 *                   plain:
 *                     type: string
 *                     example: "Plain Title"
 *               about:
 *                 type: string
 *                 example: "About the content"
 *               description:
 *                 type: string
 *                 example: "Detailed description"
 *               modules:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     moduleName:
 *                       type: string
 *                       example: "Module Name"
 *                     moduleContent:
 *                       type: string
 *                       example: "Module Content"
 *               category:
 *                 type: string
 *                 enum: [ 'engineering', 'design', 'business & marketing', 'data science', 'IT security' ]
 *                 example: 'engineering'
 *               imgUrlNo:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Course Successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123456"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/updateCourse", async (req: Request, res: Response<any>) => {
    const { body } = req
    try {
        const response = await updateCourseById(body, res);
        return response;
    } catch (error) {
        res.status(500).send("Error uploading data");
        return;
    }
});

// user controller functions
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register user endpoint
 *     description: Create user account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "test@test.com"
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               password:
 *                 type: string
 *                 example: "********"
 *     responses:
 *       200:
 *         description: User account successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userid:
 *                   type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/register", async (req: Request, res: Response<any>) => {
    const { password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);

    // console.log(req.body);


    if (!req.body.email || !req.body.password) {
        return res.status(400).send('Email and password are required');
    }

    const userData: Register = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        enrolledCourses: []
    }

    try {
        const response = await createUserAccount(userData, res);
        return response;
        // res.status(200).send("Data uploaded successfully");
    } catch (error) {
        res.status(500).send(`Error Creating user ${error}`);
        return;
    }
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login endpoint
 *     description: Log user in by user credentials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "test@test.com"
 *               password:
 *                 type: string
 *                 example: "********"
 *     responses:
 *       200:
 *         description: User Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/login", async (req: Request, res: Response<any>) => {
    const { body } = req;

    try {
        const response = await getUserByField(body, res);

        return response;
    } catch (error) {
        res.status(500).send(`Error fetching user details ${error}`);
        return;
    }
});

/**
 * @swagger
 * /getAllUsers:
 *   get:
 *     summary: All Users
 *     description: Fetch all users in the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
app.get("/getAllUsers", async (req: any, res: Response<any>) => {
    try {
        const response = await getAllUsers(res);
        return response;
    } catch (error) {
        res.status(500).send("Error fetching data");
        return;
    }
});

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * security:
 *   - bearerAuth: []
 * /getUserById:
 *   post:
 *     summary: Get User endpoint
 *     description: Get user details
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "7N8QMl2zM1AJ9F62ez7V"
 *     responses:
 *       200:
 *         description: User Successfully loaded
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123456"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/getUserById", authenticateToken, async (req: Request, res: Response<any>) => {
    const { body } = req;

    // console.log(body);

    try {
        const response = await getUserById(body, res);
        return response;
    } catch (error) {
        res.status(500).send("Error fetching data");
        return;
    }
});

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * security:
 *   - bearerAuth: []
 * /updateUserById:
 *   post:
 *     summary: Update User endpoint
 *     description: Update user details
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "8Tss2V1fq2UeTbmT1PFc"
 *               email:
 *                 type: string
 *                 example: "test@test.com"
 *               enrolledCourses:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: []
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "saint"
 *               middleName:
 *                 type: string
 *                 example: "Joseph"
 *               password:
 *                 type: string
 *                 example: "********"
 *     responses:
 *       200:
 *         description: User Successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123456"
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/updateUserById", authenticateToken, async (req: Request, res: Response<any>) => {
    const { body } = req;

    try {
        const response = await updateUserById(body, res);
        return response;
    } catch (error) {
        res.status(500).send("Error fetching user details");
        return;
    }
});

/**
 * @swagger
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * security:
 *   - bearerAuth: []
 * /deleteUserById:
 *   post:
 *     summary: Delete User account endpoint
 *     description: Delete user account by userId
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "7N8QMl2zM1AJ9F62ez7V"
 *     responses:
 *       200:
 *         description: User Successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/deleteUserById", authenticateToken, async (req: Request, res: Response<any>) => {
    const { body } = req;

    try {
        const response = await deleteUserById(body, res);
        return response;
    } catch (error) {
        res.status(500).send("Error deleting user ");
        return;
    }
});

/**
 * @swagger
 * /enroll:
 *   post:
 *     summary: Enroll user endpoint
 *     description: Enroll user into a course.
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         schema:
 *           type: string
 *         description: User access token as Bearer token
 *         example: Bearer <token>
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "7N8QMl2zM1AJ9F62ez7V"
 *               courseId:
 *                 type: string
 *                 example: "7N8QMl2zM1AJ9F62ez7V"
 *     responses:
 *       200:
 *         description: User Successfully enrolled
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/enroll", authenticateToken, async (req: Request, res: Response<any>) => {
    const { body } = req;

    try {
        const response = await enrollUserIntoCourse(body, res);
        return response;
    } catch (error) {
        res.status(500).send("Error enrolling user ");
        return;
    }
});

/**
 * @swagger
 * /getUserCourses:
 *   post:
 *     summary: Get User's courses endpoint
 *     description: Fetch all course a user is enrolled in
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         schema:
 *           type: string
 *         description: User access token as Bearer token
 *         example: Bearer <token>
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "7N8QMl2zM1AJ9F62ez7V"
 *     responses:
 *       200:
 *         description: Fetch Successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 courseList:
 *                   type: list
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post("/getUserCourses", authenticateToken, async (req: Request, res: Response<any>) => {
    const { body } = req;

    try {
        const response = await getAllUserCoursesByUserId(body, res);
        return response;
    } catch (error) {
        res.status(500).send("Error enrolling user ");
        return;
    }
});

// Swagger JSON route
app.get('/swagger.json', (req: any, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

exports.api = functions.https.onRequest(app)

