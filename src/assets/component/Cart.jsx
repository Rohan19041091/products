import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, totalAmount, removeItem } = useCart();

  const handleRemoveFromCart = (index) => {
    removeItem(index);
  };

  return (
    <div className='fixed top-0 right-0 h-full w-1/4 bg-gray-100 p-4 overflow-y-auto'>
      <h2 className='text-xl font-semibold mb-4'>Cart</h2>
      <p className='mb-2'>Number of items: {cart.length}</p>
      <ul className='mb-4'>
        {cart.map((item, index) => (
          <li key={index} className='mb-2 flex justify-between'>
            <div>{item.name} - ${item.price}</div>
            <button
              onClick={() => handleRemoveFromCart(index)}
              className='text-red-500'
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className='font-semibold'>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default Cart;
