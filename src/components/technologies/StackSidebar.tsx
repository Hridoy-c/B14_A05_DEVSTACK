import { useState } from "react";
import type { ITechnologyType } from "../../types/TechnologyType";
import YourStackCard from "./YourStackCard";

export interface StackSidebarProps {
  YourStack: ITechnologyType[];
  onRemoveOne: (technologyId: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ YourStack, onRemoveOne, onRemoveAll }: StackSidebarProps) => {

   


     

    
  return (
    <div className="mt-8 w-full rounded-lg border border-gray-200 bg-white p-6 lg:sticky lg:top-20 lg:mt-[84px] lg:w-80 lg:shrink-0">
      <h2 className="text-lg font-semibold text-slate-900">Your Stack</h2>
      {
        YourStack.length === 0 ? (
          <>
          <p className="mt-2 text-sm text-gray-500">
            No technologies selected yet.
          </p>
              <div className="mt-4 rounded-lg border border-dashed border-gray-200 py-6 text-center text-sm text-gray-400">
      Your stack is empty.
    </div>
          </>
          
        ) : (
          <YourStackCard YourStack={YourStack} onRemoveOne={onRemoveOne} onRemoveAll={onRemoveAll} />
        )
      }
      
    </div>
  )
}

export default StackSidebar
