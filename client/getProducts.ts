import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Product } from "../proto/product_pb"
import { client } from "./utils";

export const getProducts = () => {
    return new Promise<Product[]>((resolve, reject) => {
        const stream = client.getProducts(new Empty);
        const products: Product[] = [];
        stream.on("data", (product) => {
            products.push(product);
        })
        stream.on("error", reject);
        stream.on("end", () => resolve(products));
    });
}

export default getProducts;