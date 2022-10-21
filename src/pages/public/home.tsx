import { useState } from "react";
import { Builder, Controls, Total, TotalMobile } from "components";
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
      <section className="flex flex-col items-center px-8 sm:px-16 justify-center relative">
        <Total />
        <Builder ingredients={ingredients} />
        <TotalMobile />
      </section>
      <section className="px-8 sm:px-16">
        <Controls />
      </section>
    </>
  );
};
