import { Router } from "express";


const router = Router();

router.post('/logout');

router.post('/register');

router.post('/login');

export const AuthRoutes = router;