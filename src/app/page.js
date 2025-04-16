"use client";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

import ProductSearch from '../components/ProductSearch';

import Image from "next/image";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "/d2.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    image: "/d3.webp",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 29.99,
    image: "/d4.jpg",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 75.99,
    image: "/d5.jpg",
  },


{
    id: 5,
    name: "laptop",
    price: 80.99,
    image: "/d6.jpg",
  },
  {
  id: 6 ,
  name: "washingmachine",
  price: 90.99,
  image: "/d7.jpg",
  },

  {
    id: 7 ,
    name: "ipad",
    price: 98.99,
    image: "/d8.jpg",
    },

    {
      id: 8 ,
      name: "iphone16 pro",
      price: 94.99,
      image: "/d9.jpg",
      }, 
      
      {
        id: 9 ,
        name: "oneplus buds pro",
        price: 85.99,
        image: "/d10.jpg",
        },     

];
export default function Home() {
  const { addToCart } = useCart();
  return (
    <div className="">
      <Navbar />
      
      <ProductSearch products={products} addToCart={addToCart} />;
      <Footer />
    </div>

  );
}
