'use client'

import Image from "next/image";
import { useState } from "react";

export default function BtnAddToCart() {
  const [qttCart, setQttCart] = useState(0);
  const increaseQtt = () => {
    setQttCart(qttCart + 1);
  }
  const decreaseQtt = () => {
    setQttCart(qttCart - 1);
  }

  return (
    <div>
      {(qttCart >= 1) && (
        <div className="flex items-center justify-between py-2 px-4 bg-red rounded-full absolute -bottom-5 left-16 w-full max-w-32 text-white">
          <button onClick={decreaseQtt} className="rounded-full border border-white w-5 h-5 text-sx flex items-center justify-center ">-</button>
          <p className="text-xs">{qttCart}</p>
          <button onClick={increaseQtt} className="rounded-full border border-white w-5 h-5 text-sx flex items-center justify-center ">+</button>
        </div>
      )}
      {(qttCart < 1) && (
        <div>
          <button className="bg-white py-2 px-4 rounded-3xl border border-rose500 flex gap-1 absolute -bottom-5 left-16 items-center font-semibold text-xs max-w-32"
            onClick={increaseQtt}
          >
            <Image
              src={"/assets/images/icon-add-to-cart.svg"}
              alt="Waffle"
              width={22}
              height={22}
              className="rounded-lg max-w-64">
            </Image>
            <p>Add to Cart</p>
          </button>
        </div>
      )}
    </div>
  )
}