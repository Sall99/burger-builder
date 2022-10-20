import { useState } from "react";
import { Builder, Controls, Total } from "components";
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
      <section className="flex px-8 sm:px-16">
        <Total />
        <Builder ingredients={ingredients} />
      </section>
      <section className="px-8 sm:px-16">
        <Controls />
      </section>
    </>
  );
};
