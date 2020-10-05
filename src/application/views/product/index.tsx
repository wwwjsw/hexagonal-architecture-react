import React from "react"
import {ProductModel} from "../../models"

interface IProps {
    product: ProductModel
}

export const ProductView = ({ product }: IProps) => (
    <a href={`/product/${product.id}`} key={product.id} className={"product-item"}>
        <div className="product-details">
            <img src={product.avatar} alt={product.title} />
            <div>{product.body}</div>
        </div>
    </a>
)