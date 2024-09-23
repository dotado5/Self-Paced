const jwt = require('jsonwebtoken');

const SECRET_KEY = 'self-paced'; // Replace with your own secret key

const validateToken = (token: string) => {
    try {
        jwt.verify(token, SECRET_KEY);
        return { valid: true };
    } catch (err) {
        return { valid: false, error: err };
    }
};

// Function to generate access token
const generateAccessToken = (user: any) => {
    return jwt.sign({ id: user.userId, name: user.firstName }, SECRET_KEY, { expiresIn: '1h' });
};

// Middleware to authenticate token
const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).send({
            status: "Failure",
            message: "Unauthorized, invalid token",
        });;

    }
    const validationResponse = validateToken(token);
    if (!validationResponse.valid) {
        return res.status(407).send({
            status: "Failure",
            message: "Token expired",
        });;
    }


    // Optionally, you can still decode the token to attach the user details to the request
    req.user = jwt.decode(token);
    next();
};

export { validateToken, generateAccessToken, authenticateToken }
