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

const ipSlice = createSlice({
  name: 'ipData',
  initialState: {
    value: ''
  },
  reducers: {
    set: (state) => {
      state.value = localStorage.getItem("myIp")
    }
  }
})

// Exportamos las acciones generadas automáticamente
export const { increment, decrement } = counterSlice.actions;
export const {set} = ipSlice.actions

// Configuramos el store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    ipData: ipSlice.reducer
  },
});

export default store;
