"use client"; // For Next.js Client Component

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext"; // Access the cart from context
import {
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems } = useCart(); // Get the cart items from context

    // Calculate the total quantity of items in the cart
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">ShopEase</Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="text-gray-700 hover:text-black">
                        Home
                    </Link>
                    <Link href="/products" className="text-gray-700 hover:text-black">
                        Products
                    </Link>
                    <Link href="/cart" className="relative">
                        <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-black" />
                        {/* Display the cart item count on desktop */}
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link href="/" className="block text-gray-700">
                        Home
                    </Link>
                    <Link href="/products" className="block text-gray-700">
                        Products
                    </Link>
                    <Link href="/cart" className="relative">
                        <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-black" />
                        {/* Display the cart item count on mobile */}
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
