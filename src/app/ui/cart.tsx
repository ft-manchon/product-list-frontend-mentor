import Image from "next/image";
import BtnConfirm from "./btn-confirm";
import TagCarbonNeutral from "./tag-carbon-neutral";

export default function Cart() {
  return (
    <div className="bg-white w-full max-w-96 min-h-64 p-6 rounded-xl">
      <h1 className="text-xl text-red font-extrabold pb-6">Your Cart (0)</h1>
      <div className="flex flex-col items-center justify-between gap-4">
        <Image
          src={"/assets/images/illustration-empty-cart.svg"}
          alt="Waffle"
          width={100}
          height={100}
          className="rounded-lg max-w-64"
        >
        </Image>
        <p className="text-xs font-">Your added items will appear here</p>
        <TagCarbonNeutral />
        <BtnConfirm />
      </div>
    </div>
  )
}