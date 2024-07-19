// import React, { useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import { useNavigate, useLocation } from "react-router-dom";

// const ShippingPage = () => {
//   const location = useLocation();
//   const [address, setAddress] = useState(
//     location.state?.newAddress ||
//       "Jalan Masjid No. 8, Sokaraja, Purwokerto Timur, Purwokerto, Sokaraja, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53115"
//   );
//   const navigate = useNavigate();

//   const product = {
//     name: "New Lamonde Chocomaltine",
//     variant: "Chocomaltine",
//     price: 85000,
//     quantity: 1,
//     totalPrice: 149000,
//   };

//   const handleCheckoutClick = () => {
//     const phoneNumber = "6282133395550";
//     const message = `Halo, saya ingin memesan produk berikut:\n\nNama Produk: ${product.name}\nVarian: ${product.variant}\nJumlah: ${product.quantity}\nHarga Satuan: Rp ${product.price.toLocaleString()}\nTotal Harga: Rp ${product.totalPrice.toLocaleString()}\n\nAlamat Pengiriman:\n${address}`;

//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.location.href = whatsappUrl;
//   };

//   const handleEditAddressClick = () => {
//     navigate("/update-address");
//   };

//   return (
//     <div className="shipping-container">
//       <div className="shipping-main">
//         <h2>Pengiriman</h2>
//         <div className="address-section">
//           <h3>Alamat Pengiriman</h3>
//           <p>{address}</p>
//           <button className="edit-button" onClick={handleEditAddressClick}>
//             Ubah Alamat
//           </button>
//         </div>
//         <div className="order-section">
//           <h3>PESANAN 1</h3>
//           <div className="store-name">Nama Toko</div>
//           <div className="order-details">
//             <img
//               src="product-image-url"
//               alt="Product"
//               className="product-image"
//             />
//             <div className="product-info">
//               <h4>{product.name}</h4>
//               <p>Varian: {product.variant}</p>
//               <p>
//                 {product.quantity} x Rp {product.price.toLocaleString()}
//               </p>
//             </div>
//             <FaTrash className="delete-icon" />
//           </div>
//           <div className="shipping-check">
//             <input type="text" placeholder="Cek ongkir kamu disini" />
//             <button className="check-button">Cek ongkir kamu disini</button>
//           </div>
//         </div>
//       </div>
//       <div className="summary-section">
//         <h3>Ringkasan Belanja</h3>
//         <p>Total Item: {product.quantity}</p>
//         <p>Total Belanja: Rp {product.totalPrice.toLocaleString()}</p>
//         <p>
//           Catatan: Konfirmasi checkout produk dan nominal pengiriman akan
//           diarahkan melalui WhatsApp penjual
//         </p>
//         <button className="checkout-button" onClick={handleCheckoutClick}>
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShippingPage;
