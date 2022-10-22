export interface IngredientTypes {
  [key: string]: string | number;
}
export interface BuilderProps {
  ingredients: IngredientTypes;
}

export interface StateProps {
  ingredients: {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
  };
}
