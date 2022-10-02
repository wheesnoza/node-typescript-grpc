import {Product, ProductStatus} from "../proto/product_pb";

type ProductAdapterProps = {
    id: string;
    name: string;
    description: string;
    price: number;
    status: ProductStatus;
}

const productAdapter = ({id, name, description, price, status}: ProductAdapterProps) => {
    const product = new Product();
    product.setId(id);
    product.setName(name);
    product.setDescription(description);
    product.setPrice(price);
    product.setStatus(status);

    return product;
}

export const products: Product[] = [
    {id: "1", name: "test1", description: "test1", price: 100, status: ProductStatus.AVAILABLE},
    {id: "2", name: "test2", description: "test2", price: 200, status: ProductStatus.UNAVAIABLE}
].map(productAdapter)