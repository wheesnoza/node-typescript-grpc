import { Product, ProductStatus } from "../proto/product_pb";
import createProducts from "./createProducts";
import findProduct from "./findProduct";
import getProducts from "./getProducts";

const run = async () => {
    const product = await findProduct('1');
    console.log(product.toString());

    const creationProduct = new Product().setId("3").setName("test3").setDescription("test3").setPrice(2000).setStatus(ProductStatus.AVAILABLE);

    await createProducts([creationProduct]);
    
    console.log(`Created product ${creationProduct.toString()}`);

    const products = await getProducts();
    for (const product of products) {
        console.log(product.toString());
    }
}

run();