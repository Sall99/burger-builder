
import { BiDollar } from "react-icons/bi";
import { Button } from "../button";

export const Total = () => {
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
            <td></td>
          </tr>
          <tr>
            <td>Salad</td>
            <td></td>
          </tr>
          <tr>
            <td>Bacon</td>
            <td></td>
          </tr>
          <tr>
            <td>Cheese</td>
            <td></td>
          </tr>
          <tr>
            <td className="price"></td>
            <td className="price">
              <BiDollar />
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
