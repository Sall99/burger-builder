import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  } as { [key: string]: number },
};

const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    addIngredients(state, action) {
      const { payload } = action;
      state.ingredients[payload] += 1;

      return state;
    },
    removeIngredients(state, action) {
      const { payload } = action;
      state.ingredients[payload] -= 1;

      return state;
    },
  },
});

export const ingredientsReducer = ingredientSlice.reducer;

export const { addIngredients, removeIngredients } = ingredientSlice.actions;
