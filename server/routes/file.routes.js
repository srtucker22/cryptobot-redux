import { Router } from 'express';
import {getRandomQuote} from '../controllers/file.controller';

const router = new Router();

// Get a random quote
router.route('/random').get(getRandomQuote);

export default router;
