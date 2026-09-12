// import { useState } from "react";
import type { ITechnologyType } from "../../types/TechnologyType";

interface YourStackCardProps {
 YourStack: ITechnologyType[];
    onRemoveOne: (technologyId: string) => void;
    onRemoveAll: () => void;


   
}

const YourStackCard = ({  YourStack, onRemoveOne, onRemoveAll }: YourStackCardProps) => {
    console.log(YourStack)



  
    


   
  return (
    <div className="w-full max-w-xs mt-4 rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="mt-1 text-sm text-gray-400">
        {YourStack.length} Technology Selected
      </p>

      <div className="mt-4 flex flex-col  gap-3">
        {YourStack.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center  justify-between rounded-xl border border-gray-200 px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8"
              />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {technology.name}
                </p>
                <p className="text-xs text-gray-400">{technology.category}</p>
              </div>
            </div>
              <button
                onClick={() => onRemoveOne(technology.id)}
              >
              <span className="text-lg text-gray-300 hover:text-gray-500">
                ✕
              </span>
              </button>
          </div>
        ))}
      </div>

      <button
        onClick={onRemoveAll}

       className="mt-6 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50">
        Remove All
      </button>
    </div>
  );
};

export default YourStackCard;