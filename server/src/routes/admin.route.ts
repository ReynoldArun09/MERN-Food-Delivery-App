import { Router } from "express";
import * as admin from "../controllers/admin.controller";
import { AdminMiddleware, AuthMiddleware } from "../middleware";

export const AdminRoute = Router();

AdminRoute.get('/get-users', admin.GetAllCustomersList)
AdminRoute.get('/get-products', admin.GetAllProductsList)
AdminRoute.put('/enable-disable/:productId', admin.EnableDisableProduct)
AdminRoute.delete('/delete/:productId', admin.DeleteProduct)
AdminRoute.delete('/user-delete/:userId', admin.DeleteUser)
AdminRoute.put('/block-unblock-user/:userId', admin.BlockUnBlockUser)
AdminRoute.get('/verifyAdminApi', AuthMiddleware, AdminMiddleware, admin.VerifyAdmin)