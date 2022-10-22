import { BiDollar } from "react-icons/bi";
import { useSelector } from "react-redux";
export const TotalMobile = () => {
  const { totalPrice } = useSelector((state: any) => state.ingredients);
  return (
    <div className="md:hidden mb-4">
      <h1 className="text-2xl flex items-center text-primary-200">
        <span>{totalPrice}</span>
        <BiDollar />
      </h1>
    </div>
  );
};
