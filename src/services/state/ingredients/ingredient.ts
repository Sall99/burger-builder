import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  } as { [key: string]: number },
  prices: {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
  } as { [key: string]: number },
  totalPrice: 4,
};

const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    addIngredients(state, action) {
      const { payload } = action;
      state.ingredients[payload] += 1;
      state.totalPrice += state.prices[payload];

      return state;
    },
    removeIngredients(state, action) {
      const { payload } = action;
      if (state.ingredients[payload] > 0) {
        state.ingredients[payload] -= 1;
        state.totalPrice -= state.prices[payload];
      }

      return state;
    },
  },
});

export const ingredientsReducer = ingredientSlice.reducer;

export const { addIngredients, removeIngredients } = ingredientSlice.actions;
