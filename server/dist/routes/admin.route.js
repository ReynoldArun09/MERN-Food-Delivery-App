"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoute = void 0;
const express_1 = require("express");
const admin = __importStar(require("../controllers/admin.controller"));
const middleware_1 = require("../middleware");
exports.AdminRoute = (0, express_1.Router)();
exports.AdminRoute.get('/get-users', admin.GetAllCustomersList);
exports.AdminRoute.get('/get-products', admin.GetAllProductsList);
exports.AdminRoute.put('/enable-disable/:productId', admin.EnableDisableProduct);
exports.AdminRoute.delete('/delete/:productId', admin.DeleteProduct);
exports.AdminRoute.delete('/user-delete/:userId', admin.DeleteUser);
exports.AdminRoute.put('/block-unblock-user/:userId', admin.BlockUnBlockUser);
exports.AdminRoute.get('/verifyAdminApi', middleware_1.AuthMiddleware, middleware_1.AdminMiddleware, admin.VerifyAdmin);
