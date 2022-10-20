import { BuilderProps } from "@types";
import { FC } from "react";
import { BurgerIngredients } from "../ingredients";

export const Builder: FC<BuilderProps> = ({ ingredients }) => {
  const arrayIngredients = Object.keys(ingredients)
    .map((igkey) => {
      return [...Array(ingredients[igkey])].map((a, i) => {
        return <BurgerIngredients key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, currVal) => {
      return arr.concat(currVal);
    }, []);

  return (
    <div className="burger-builder mt-16 sm:mt-1">
      <BurgerIngredients type="BreadTop" />
      {arrayIngredients.length === 0 && (
        <div className="flex items-center flex-col">
          <img src="/img/burger-empy.png" alt="" className="w-20" />
          <h1 className=" text-primary-200 mt-1">Add some ingredients !</h1>
        </div>
      )}
      {arrayIngredients.length > 0 && arrayIngredients}
      <BurgerIngredients type="BreadBottom" />
    </div>
  );
};
