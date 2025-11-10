import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import EmployeeController from '../controllers/employeeController.js';
import RankController from '../controllers/rankController.js';

 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)

router.get('/employees', EmployeeController.index)
router.get('/employees/:id', EmployeeController.show)
router.post('/employees', EmployeeController.store)
router.put('/employees/:id', EmployeeController.update)
router.delete('/employees/:id', EmployeeController.destroy)

router.get('/ranks', RankController.index)
router.get('/ranks/:id', RankController.show)
router.post('/ranks', RankController.store)
router.put('/ranks/:id', RankController.update)
router.delete('/ranks/:id', RankController.destroy)


export default router
