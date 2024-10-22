import Image from "next/image";

export default function TagCarbonNeutral() {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-bold bg-rose100 py-4 px-2 rounded-xl w-full max-w-80">
      <Image
        src={"/assets/images/icon-carbon-neutral.svg"}
        alt="Icon green tree"
        width={25}
        height={25}
        className="rounded-lg"
      >
      </Image>
      <p className="w-fit ">This is a carbon-neutral delivery</p>
    </div>
  )
}