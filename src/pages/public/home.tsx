import { useState } from "react";
import { Builder } from "components";
import { IngredientTypes } from "@types";

export const Home = () => {
  const [ingredients] = useState<IngredientTypes>({
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0,
  });
  return (
    <>
      <section className="flex justify-center">
        <Builder ingredients={ingredients} />
      </section>
    </>
  );
};
