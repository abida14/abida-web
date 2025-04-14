'use client';

import React, { useState } from 'react';

const ProductSearch = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Search Products
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search for a product..."
          className="w-full sm:w-96 border border-gray-300 px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center p-4"
            >
              {/* Small Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded mb-3"
              />

              <h3 className="text-md font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-blue-600 font-bold text-sm mb-3">${product.price.toFixed(2)}</p>

              {/* Nice Add to Cart Button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-black text-sm px-4 py-2 rounded-md transition">
                🛍 Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
