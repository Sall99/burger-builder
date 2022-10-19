import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

export const Controls = () => {
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
                  <MdAdd />
                </div>
                <div>
                  <AiOutlineMinus />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
