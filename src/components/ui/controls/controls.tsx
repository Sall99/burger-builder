import { useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { addIngredients, removeIngredients } from "services";

export const Controls = () => {
  const dispatch = useDispatch();
  const controls = [
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Salad", type: "salad" },
  ];

  return (
    <div className="build-controls">
      <div className="controls">
        {controls.map((ctrl) => {
          return (
            <div key={ctrl.label}>
              <p className="label">{ctrl.label}</p>
              <div className="ctrl">
                <div>
                  <MdAdd onClick={() => dispatch(addIngredients(ctrl.type))} />
                </div>
                <div>
                  <AiOutlineMinus
                    onClick={() => dispatch(removeIngredients(ctrl.type))}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
