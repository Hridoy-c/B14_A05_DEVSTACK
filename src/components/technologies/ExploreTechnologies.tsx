import { use, useState } from "react";
import type { ITechnologyType } from "../../types/TechnologyType";
import StackSidebar from "./StackSidebar";
import TechnologyGrid from "./TechnologyGrid";
import { Bounce, toast } from "react-toastify/unstyled";

interface ExploreTechnologiesProps {
  TechnologyPromise: Promise<ITechnologyType[]>;
}

const ExploreTechnologies = ({
  TechnologyPromise,
}: ExploreTechnologiesProps) => {

  const [YourStack, setYourStack] = useState<ITechnologyType[]>([]);
  
  
   


  

  const handleRemoveOne = (technologyId: string) => {
    const removeTechnology = YourStack.filter(
      (technology) => technology.id !== technologyId,
    );
    setYourStack(removeTechnology);
    toast.info("remove", {
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

  const handleRemoveAll = () => {
    setYourStack([]);
    toast.info("remove all", {
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

  const Technologies = use(TechnologyPromise);
  return (
    <div className="container mx-auto px-4 py-10 sm:px-6">
      <div className="flex flex-col   gap-8 lg:flex-row lg:items-start">
        <div className="flex-1  ">
          <TechnologyGrid
            Technologies={Technologies}
            YourStack={YourStack}
            setYourStack={setYourStack}
            
             
            
          />
        </div>

        <StackSidebar YourStack={YourStack} onRemoveOne={handleRemoveOne} onRemoveAll={handleRemoveAll}  />
      </div>
    </div>
  );
};

export default ExploreTechnologies;
