import { BiDollar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Button } from "../button";

export const Total = () => {
  const { ingredients } = useSelector((state: any) => state.ingredients);
  const { totalPrice } = useSelector((state: any) => state.ingredients);
  const { meat, salad, bacon, cheese } = ingredients;

  return (
    <div className="total-order absolute left-16 top-0 hidden md:block">
      <table>
        <thead>
          <tr>
            <th>Ingredients</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Meat</td>
            <td>{meat}</td>
          </tr>
          <tr>
            <td>Salad</td>
            <td>{salad}</td>
          </tr>
          <tr>
            <td>Bacon</td>
            <td>{bacon}</td>
          </tr>
          <tr>
            <td>Cheese</td>
            <td>{cheese}</td>
          </tr>
          <tr>
            <td className="price py-5">Total</td>
            <td className="price flex items-center gap-1 py-5">
              <span>{totalPrice}</span> <BiDollar />
            </td>
          </tr>
          <tr>
            <td>
              <Button label="Order" className="w-20 h-8" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
