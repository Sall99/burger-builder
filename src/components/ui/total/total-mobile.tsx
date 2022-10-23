import { BiDollar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";
import { totalFormatter } from "utils";

export const TotalMobile = () => {
  const { totalPrice } = useSelector((state: AnyAction) => state.ingredients);
  return (
    <div className="md:hidden mb-4">
      <h1 className="text-2xl flex items-center text-primary-200">
        <span>{totalFormatter.format(totalPrice)}</span>
        <BiDollar />
      </h1>
    </div>
  );
};
