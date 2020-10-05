import {IProductRepository} from "../domain/ports/secondaries"
import {Product} from "../domain/entities"

export class ProductRepository implements IProductRepository {
    async getProducts(): Promise<Array<Product>> {
        const res = await fetch("https://5f7a81224ebc4100161cada8.mockapi.io/api/v1/products")
        return res.json()
    }
}