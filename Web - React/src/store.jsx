// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

import React, { useEffect } from 'react';

// Creamos un slice (rebanada) del estado
const counterSlice = createSlice({

  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Exportamos las acciones generadas automáticamente
export const { increment, decrement } = counterSlice.actions;

// Configuramos el store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
