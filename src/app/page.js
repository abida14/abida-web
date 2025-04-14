import Navbar from "@/components/Navbar";
import products from '@/ data/products';
import ProductSearch from '../components/ProductSearch';
import Image from "next/image";




export default function Home() {
  return (
    <div className="">
      <Navbar />
      <ProductSearch products={products} />;
    </div>

  );
}
