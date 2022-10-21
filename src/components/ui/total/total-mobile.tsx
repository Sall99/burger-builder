import { BiDollar } from "react-icons/bi";
export const TotalMobile = () => {
  return (
    <div className="md:hidden mb-4">
      <h1 className="text-2xl flex items-center text-primary-200">
        <span>0</span>
        <BiDollar />
      </h1>
    </div>
  );
};
