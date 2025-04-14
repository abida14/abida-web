'use client'
import Link from 'next/link';
import { useState } from 'react';
import {
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">ShopEase</Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
                    <Link href="/products" className="text-gray-700 hover:text-black">Products</Link>
                    <Link href="/cart" className="relative">
                        <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-black" />
                        {/* Cart count (placeholder) */}
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                            3
                        </span>
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
                    <Link href="/" className="block text-gray-700">Home</Link>
                    <Link href="/products" className="block text-gray-700">Products</Link>
                    <Link href="/cart" className="block text-gray-700">Cart</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
