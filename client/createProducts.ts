import { Product } from "../proto/product_pb"
import { client } from "./utils"

export const createProducts = (products: Product[]) => {
    const stream = client.createProducts(() => {});

    for (const product of products) {
        stream.write(product);
    }
    stream.end();
}

export default createProducts;