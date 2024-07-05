import React, { Component } from 'react';


class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {
        id: 1,
        name: 'Lamonde Palembang',
        address: 'Jl. Jenderal Sudirman No.158, RT.2/RW.1, Sekip Jaya, Kecamatan Palembang Selatan, Kota Palembang, Sumatera Selatan 30131',
        phone: '+62 711 461293',
        email: 'info@lamonde.com',
        website: 'https://www.lamonde.com/',
        description: 'Toko Lamonde Palembang menyediakan berbagai macam produk roti, kue, dan makanan ringan dengan kualitas terbaik. Kami juga melayani pemesanan untuk acara dan pesta.',
        products: [
          {
            id: 1,
            name: 'Roti Tawar',
            price: 15000,
            image: 'https://lamonde.com/wp-content/uploads/2023/06/Roti-Tawar-Lamonde.jpg',
          },
          {
            id: 2,
            name: 'Kue Soela Media',
            price: 44000,
            image: 'https://lamonde.com/wp-content/uploads/2023/06/Kue-Soela-Media-Lamonde.jpg',
          },
          {
            id: 3,
            name: 'Bolu Gulung',
            price: 25000,
            image: 'https://lamonde.com/wp-content/uploads/2023/06/Bolu-Gulung-Lamonde.jpg',
          },
        ],
      },
    };
  }

  render() {
    const { store } = this.state;
    return (
      <div className="store-page">
        <div className="store-header">
          <img src="https://lamonde.com/wp-content/uploads/2023/06/Lamonde-Palembang-Logo.png" alt="Lamonde Palembang Logo" />
          <h2>{store.name}</h2>
          <p>{store.address}</p>
          <p>{store.phone}</p>
          <p>{store.email}</p>
          <a href={store.website} target="_blank" rel="noopener noreferrer">Kunjungi Website</a>
        </div>

        <div className="store-description">
          <p>{store.description}</p>
        </div>

        <div className="store-products">
          <h2>Produk</h2>
          <div className="product-list">
            {store.products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Rp{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
