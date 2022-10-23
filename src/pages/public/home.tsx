import { Builder, Controls, Total, TotalMobile } from "components";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";

export const Home = () => {
  const { ingredients } = useSelector((state: AnyAction) => state.ingredients);

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
