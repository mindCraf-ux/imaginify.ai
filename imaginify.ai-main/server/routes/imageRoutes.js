import express from 'express';
import {generateImage} from '../controllers/imageController.js';
import userAuth from '../middlewares/auth.js';
 // making a router for image
const imageRouter = express.Router();
// POST route to generate image
imageRouter.post('/generate-image', userAuth, generateImage)
//http://localhost:4000/api/image/generate-image
// Export the image router
export default imageRouter;
