import React from 'react';
import { useCart } from './CartContext';

const Card = ({ name, description, price, discountPercentage, rating, stock, brand, category }) => {
  const { addToCart } = useCart();

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">${price}</p>
          <button onClick={() => addToCart({ name, price })} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        <p className="text-sm text-gray-500">Discount: {discountPercentage}%</p>
        <p className="text-sm text-gray-500">Rating: {rating}</p>
        <p className="text-sm text-gray-500">Stock: {stock}</p>
        <p className="text-sm text-gray-500">Brand: {brand}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
    </div>
  );
};

export default Card;
