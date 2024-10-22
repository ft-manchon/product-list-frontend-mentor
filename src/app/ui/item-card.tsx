import Image from "next/image";
import { products } from "../lib/data";
import BtnAddToCart from "./btn-add";

export default async function ItemCard() {
    let productsList = products.map((product) => {
        const key = product.id;
        const image = product.image.tablet;
        const name = product.name;
        const category = product.category;
        const price = product.price.toFixed(2);

        return (
            <div className="flex flex-col gap-8" key={key}>
                <div className="relative">
                    <div className="">
                        <Image
                            src={image}
                            alt={name}
                            width={425}
                            height={425}
                            className="w-full rounded-lg max-w-64"
                        >
                        </Image>
                    </div>
                    <BtnAddToCart/>
                </div>
                <div>
                    <h2 className="text-rose400 text-sm font-semibold">{category}</h2>
                    <h3 className="text-rose900 font-bold">{name}</h3>
                    <p className="text-red font-semibold">${price}</p>
                </div>

            </div>
        )
    })
    return (
        <>
            {productsList}
        </>
    )
}
