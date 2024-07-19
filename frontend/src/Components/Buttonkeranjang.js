import React from 'react';
import { useCart } from '../contexts/cartContext';
import "../buttonkeranjang.css";

const ButtonKeranjang = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Product before adding to cart:", product); 
    const quantity = 1;
    addToCart(product, quantity);
    alert(`${product.name} berhasil ditambahkan ke keranjang.`);
  };

  return (
    <button className='button-keranjang' onClick={handleAddToCart}>
      Tambah ke Keranjang
    </button>
  );
};

export default ButtonKeranjang;
