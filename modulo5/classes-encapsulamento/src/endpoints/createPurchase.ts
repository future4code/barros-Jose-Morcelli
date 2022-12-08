import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Product } from "../class/Product"
import { ProductDataBase } from "../class/ProductDataBase"
import { Purchase } from "../class/Purchase"
import { UserDataBase } from "../class/UserDataBase"
import { PurchaseDataBase } from "../class/PurchaseDataBase"
import { users } from "../database/data"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const userDB = new UserDataBase(connection);
        const findUser = await userDB.getUsers();
        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        };

        const productDB = new ProductDataBase(connection);
        const findProduct = await productDB.getProductId(productId);
        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        };
        const product = new Product(findProduct[0].id,findProduct[0].name,findProduct[0].price);

        const totalPrice = product.getPrice() * quantity;
        const purchaseId = Date.now().toString();
        const newPurchase = new Purchase(purchaseId,userId,productId,quantity,totalPrice);

        const purchaseDB = new PurchaseDataBase(connection);
        await purchaseDB.insertPurchase(newPurchase.getAllValues())

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error})
    }
}