import {Router} from 'express';
import { registerUser,loginUser,logoutUser,refreshAccessToken,getCurrentUser } from '../controllers/user.controller.js';
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/refresh-token").post(refreshAccessToken);

// secure route
router.route("/logout").post(verifyJWT,logoutUser);

router.route("/current-user").get(verifyJWT,getCurrentUser);



export default router;