import { Server, ServerCredentials } from "@grpc/grpc-js";
import { ProductsService } from "../proto/product_grpc_pb";
import ProductsServer from "./services";

const server = new Server();

server.addService(ProductsService, ProductsServer);

const port = 3000;
const uri = `localhost:${port}`;

server.bindAsync(uri, ServerCredentials.createInsecure(), (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on ${uri}`);

    server.start();
});
