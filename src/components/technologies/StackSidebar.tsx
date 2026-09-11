import type { ITechnologyType } from "../../types/TechnologyType";
import YourStackCard from "./YourStackCard";

export interface StackSidebarProps {
  YourStack: ITechnologyType[];
}

const StackSidebar = ({ YourStack  }: StackSidebarProps) => {
  return (
    <div className="sticky mt-[84px] top-20 hidden w-80 shrink-0 rounded-lg border border-gray-200 bg-white p-6 lg:block">
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
          <YourStackCard stack={YourStack} />
        )
      }
      
    </div>
  )
}

export default StackSidebar
