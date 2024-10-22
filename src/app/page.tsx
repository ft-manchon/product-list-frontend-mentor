import ItemCard from "./ui/item-card";
import Cart from "./ui/cart";

export default function Home() {
  return (
    <main className="min-h-screen sm:flex flex-wrap lg:flex-nowrap items-center first:items-start p-8 sm:p-16 bg-rose100 gap-8">
      <div className="w-full lg:w-2/3">
        <h1 className="text-4xl text-rose900 font-extrabold text-start pb-6">Desserts</h1>
        <div className="flex flex-wrap justify-between items-center gap-7">
          <ItemCard />
        </div>
      </div>
      <div className="w-full lg:w-1/3 pt-6 lg:pt-0 flex item justify-center">
        <Cart />
      </div>
    </main>
  );
}