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
exports.CartRoute = void 0;
const express_1 = require("express");
const cart = __importStar(require("../controllers/cart.controller"));
const middleware_1 = require("../middleware");
exports.CartRoute = (0, express_1.Router)();
exports.CartRoute.get('/user-cart', middleware_1.AuthMiddleware, cart.GetAllCartItems);
exports.CartRoute.post('/add-cart', middleware_1.AuthMiddleware, cart.CreateUserCart);
exports.CartRoute.delete('/remove-cart/:productId', middleware_1.AuthMiddleware, cart.RemoveFromCart);
exports.CartRoute.put('/update-cart/:productId', middleware_1.AuthMiddleware, cart.UpdateCartItem);
