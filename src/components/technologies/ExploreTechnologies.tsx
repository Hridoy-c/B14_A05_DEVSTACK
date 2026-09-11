import { use } from "react";
import type { ITechnologyType } from "../../types/TechnologyType";
import StackSidebar from "./StackSidebar";
import TechnologyGrid from "./TechnologyGrid";


interface ExploreTechnologiesProps {
  TechnologyPromise: Promise<ITechnologyType[]>
}
 
const ExploreTechnologies = ({TechnologyPromise}: ExploreTechnologiesProps) => {
  const Technologies = use(TechnologyPromise);
  return (
    <div className="container mx-auto px-4 py-10 sm:px-6">
      <div className="flex flex-col   gap-8 lg:flex-row lg:items-start">
        <div className="flex-1  ">
          <TechnologyGrid Technologies={Technologies} />
        </div>
 
        <StackSidebar />
      </div>
    </div>
  );
};
 
export default ExploreTechnologies;
 