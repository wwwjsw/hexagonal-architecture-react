import React from "react"

import "./index.scss"
import {ProductModel} from "../../models"
import {ProductView} from "../product"

interface IProps {
    products: Array<ProductModel>
}

export const ProductsListView = ({ products }: IProps) => (
    products.length > 0
        ? <ul className={"products-list"}>
            {products.map((product: ProductModel) => <ProductView key={product.id} product={product}/>)}
        </ul>
        : <div className={"products-list empty"}>
            Você ainda não tem produtos à serem mostrados
        </div>
)