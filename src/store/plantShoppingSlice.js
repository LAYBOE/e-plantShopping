
// src/store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

import ArtificialAlocasiaPlant from '../assets/plant/product/ArtificialAlocasiaPlant.jpg'
import LavenderClaraRose from '../assets/plant/product/LavenderClaraRose.jpg'
import OXALISPLANTPOT from '../assets/plant/product/OXALISPLANTPOT.jpg'
import ROSEMIXINVASE from '../assets/plant/product/ROSEMIXINVASE.jpg'
import SINGLEORCHIDARRANGEMENT from '../assets/plant/product/SINGLEORCHIDARRANGEMENT.jpg'
import VANDERORCHIDFLORALARRANGEMENT from '../assets/plant/product/VANDERORCHIDFLORALARRANGEMENT.jpg'


import { v4 as uuidv4 } from 'uuid';

const initialState = {
  products: [
    { id:uuidv4(), imageUrl: ArtificialAlocasiaPlant, name: 'Artificial Alocasia Plant' , cost: 20, booking: 0, description: 'Produces oxygen at night, improving air quality' },
    { id:uuidv4(), imageUrl: LavenderClaraRose, name: 'Lavender Clara Rose' , cost: 35, booking: 0, description: 'Filters formaldeyde and xylene from the air' },
    { id:uuidv4(), imageUrl: OXALISPLANTPOT, name: 'Oxalis Plant Pot' , cost: 45, booking: 0, description: 'Removes moid spores and punties the air.' },
    { id:uuidv4(), imageUrl: ROSEMIXINVASE, name: 'Rose Mix Invase' , cost: 15, booking: 0, description: 'A funky, fresh piece for your home! . ' },
    { id:uuidv4(), imageUrl: SINGLEORCHIDARRANGEMENT, name: 'Single Orchaid Arrangement' , cost: 40, booking: 0, description: 'The Phalaenopsis Orchid Arrangement In Vase is a premium potted artificial plant.' },
    { id:uuidv4(), imageUrl: VANDERORCHIDFLORALARRANGEMENT, name: 'Vander Orchid floral Arrangement' , cost: 60, booking: 0, description: 'displayed in a glass vase with acrylic set in pebbles for a naturalistic, ' },
  ],

  carts: [],
  totalCartPrice: 0,
};

const calcuateTotalCartPrice = (carts) => {
  return carts.reduce(
          (sum, currentItem) => sum + (currentItem.cost * currentItem.booking), 
          0
        )
}

export const plantShoppingSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exists = state.carts.some(item => item.id === product.id);
      if (!exists) {
        state.carts.push({ ...product, booking: 1 }  );
        state.totalCartPrice = calcuateTotalCartPrice(state.carts)
      }
    },
    updateCartItem:(state, action) => {
      const { id, change } = action.payload;
  
      const cartItem = state.carts.find((r) => r.id === id) || [];
      if (cartItem) {
        if (change === -1 && cartItem.booking === 0) return; 
        cartItem.booking += change
        state.totalCartPrice = calcuateTotalCartPrice(state.carts)
      }
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload.id)
      state.totalCartPrice = calcuateTotalCartPrice(state.carts)

    }
  },
});

export const { addToCart, removeFromCart, updateCartItem} = plantShoppingSlice.actions;

export default plantShoppingSlice.reducer;
