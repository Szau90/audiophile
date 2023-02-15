import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    showModal: false,
    showItems: false,
    cashOnDelivery: false,
    navbarOpen: false,
  },
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toogleModal(state) {
      state.showModal = !state.showModal;
    },
    toogleItems(state) {
      state.showItems = !state.showItems;
    },
    toogleCash(state) {
      state.cashOnDelivery = !state.cashOnDelivery;
    },
    toogleNavbar(state) {
        state.navbarOpen = !state.navbarOpen
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
