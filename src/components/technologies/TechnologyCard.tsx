import type { ITechnologyType } from "../../types/TechnologyType";
import { Bounce, toast } from "react-toastify/unstyled";

import type { Dispatch, SetStateAction } from "react";

export interface TechnologyCardProps {
  technology: ITechnologyType;
  YourStack: ITechnologyType[];
  setYourStack: Dispatch<SetStateAction<ITechnologyType[]>>;

}

const TechnologyCard = ({
  technology,
  YourStack,
  setYourStack,

}: TechnologyCardProps) => {
   const isInStack = YourStack.some((tech) => tech.id === technology.id);


  const handleAddToStack = () => {
    setYourStack([...YourStack, technology]);
    toast.success("add to stack", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <div
        className={`mx-auto w-full max-w-[320px] rounded-2xl border ${isInStack ? "border-fuchsia-500" : "border-gray-200"} bg-white p-4`}
      >
        <div className="flex items-start justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10"
          />
          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
            {technology.badge}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          {technology.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500 min-h-[3rem]">
          {technology.description}
        </p>

        <div className="mt-5 flex items-center gap-3 text-sm">
          <span className="rounded-md bg-gray-100 px-2.5 py-1 text-gray-600">
            {technology.category}
          </span>
          <span className="text-gray-500">{technology.difficulty}</span>
          <span className="ml-auto flex items-center gap-1 font-medium text-slate-900">
            <span className="text-amber-400">★</span>
            {technology.rating}
          </span>
        </div>

        <button
          onClick={() => handleAddToStack()}
          disabled={isInStack}
          className={`mt-5 w-full rounded-xl py-3 text-sm font-medium  transition ${
            isInStack
              ? "cursor-not-allowed bg-fuchsia-100 text-pink-600  "
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isInStack ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </>
  );
};

export default TechnologyCard;
