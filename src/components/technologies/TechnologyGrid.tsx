import type { ITechnologyType } from "../../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
  Technologies: ITechnologyType[]
}

const TechnologyGrid = ({ Technologies }: TechnologyGridProps) => {
  return (
    <div className="  ">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Explore the <span className="text-pink-600">Technologies</span>
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Technologies.map((technology) => (<TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;
