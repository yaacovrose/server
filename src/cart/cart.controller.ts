import { Cart } from "../interface";
import cartService from "./cart.service";
import { Request, Response } from 'express'


const getCartById = async (req:Request, res:Response) => {
    try {
        const cart = await cartService.getCartById(req.params.id);
        if (cart)
            return res.status(200).send(cart)
        else {
            return res.status(404).json({ "message": "No cart" })
        }
    }
    catch (error) {
        console.error(error)
    }
}


const updateCart = (req:Request, res:Response) => {
        const {userName }= req.body
        console.log(userName,'ddd');
        const cart:Cart = req.body
    try{
        const update = cartService.updateCart(userName,cart)
        res.status(200).send(update)
    }
    catch (error) {
        console.error(error)
    }
}

const deleteCart = async (req:Request, res:Response) => {
    try {
        const cart = await cartService.deleteCart(req.params.id);
        if (cart)
            return res.status(200).send(cart)
        else {
            return res.status(404).json({ "message": "No userId" })
        }
    }
    catch (error) {
        console.error(error)
    }

}





const cartController = {
    getCartById,
    updateCart,
    deleteCart,
}

export default cartController
