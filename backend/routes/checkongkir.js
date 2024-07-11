// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// const apiClient = axios.create({
//   baseURL: 'https://api.rajaongkir.com/starter',
//   headers: {
//     'key': process.env.RAJAONGKIR_API_KEY,
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// });

// // Rute untuk mengambil data kota
// router.get('/kota', async (req, res) => {
//   try {
//     const response = await apiClient.get('/city');
//     console.log('Response from /city:', response.data);
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching data from RajaOngkir API:', error.message);
//     console.error('Error details:', error.response ? error.response.data : 'No response data');
//     res.status(500).json({ error: 'Failed to fetch data from RajaOngkir API' });
//   }
// });

// // Rute untuk cek ongkir
// router.post('/cek-ongkir', async (req, res) => {
//   const { origin, destination, weight, courier } = req.body;

//   try {
//     const response = await apiClient.post(
//       '/cost',
//       new URLSearchParams({
//         origin,
//         destination,
//         weight,
//         courier,
//       })
//     );
//     console.log('Response from /cost:', response.data);
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching data from RajaOngkir API:', error.message);
//     console.error('Error details:', error.response ? error.response.data : 'No response data');
//     res.status(500).json({ error: 'Failed to fetch data from RajaOngkir API' });
//   }
// });

// module.exports = router;
