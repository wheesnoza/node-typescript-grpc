import { credentials } from "@grpc/grpc-js";
import { ProductsClient } from "../proto/product_grpc_pb";

const port = 3000;
const uri = `localhost:${port}`


export const client = new ProductsClient(uri, credentials.createInsecure());
