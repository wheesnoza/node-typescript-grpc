import { Product, ProductRequest } from "../proto/product_pb";
import { ServerUnaryCall, sendUnaryData, ServiceError, Metadata, ServerWritableStream, ServerReadableStream } from "@grpc/grpc-js";
import { products } from "./data";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

export const ProductsServer = {
    findProduct: (call: ServerUnaryCall<ProductRequest, Product>, callback: sendUnaryData<Product>): void => {
        const productId = call.request.getProductId();

        const product = products.find((product) => product.getId() === productId);

        if (!product) {
            const error = {
                name: "Product Missing",
                message: `Product with id ${productId} does not exist.`,
            };
            callback(error, null);
            return;
        }

        console.log(`findProduct: returning ${product.getName()} (id: ${product.getId()})`);
        callback(null, product);
    },
    getProducts: (call: ServerWritableStream<Empty, Product>): void => {
        console.log("getProducts: streaming all products.");

        for (const product of products) call.write(product);

        call.end();
    },
    createProducts: (call: ServerReadableStream<Empty, Product>, callback: sendUnaryData<Empty>): void => {
        console.log("createProducts: creating new products from stream");

        let count = 0;

        call.on("data", (product) => {
            count++;
            products.push(product)
        });

        call.on("end", () => {
            console.log(`Create ${count} new product(s).`);
            callback(null, new Empty())
        });
    }
}

export default ProductsServer;