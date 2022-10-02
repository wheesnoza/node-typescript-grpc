import { Product, ProductRequest } from "../proto/product_pb"
import { client } from "./utils";

export const findProduct = (id: string) => {
    return new Promise<Product>((resolve, reject) => {
        const request = new ProductRequest();
        request.setProductId(id);

        client.findProduct(request, (error, product) => {
            if (error) reject(error);
            else resolve(product);
        })
    })
}

export default findProduct;