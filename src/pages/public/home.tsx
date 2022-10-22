import { StateProps } from "@types";
import { Builder, Controls, Total, TotalMobile } from "components";
import { useSelector } from "react-redux";

export const Home = () => {
  const { ingredients } = useSelector(
    (state: StateProps | any) => state.ingredients
  );

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
