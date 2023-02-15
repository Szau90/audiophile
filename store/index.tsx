import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui-slice'
import addToCartSlice from './cart-slice';

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: addToCartSlice }
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch