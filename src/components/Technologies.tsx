
import { useState } from "react";
import technologies from "../data/technologies.json";
import type { ITechnology } from "../types/technologyType";
import TechnologyCard from "../components/TechnologyCard";

const Technologies = () => {
  const [stack, setStack] = useState<ITechnology[]>([]);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore Technologies
          </h2>

          <p className="mt-3 text-slate-600">
            Discover the tools and technologies for your developer stack.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAddToStack={handleAddToStack}
            />
          ))}
        </div>

        {/* Stack Count */}
        <p className="mt-8 text-center text-sm text-slate-600">
          Technologies added to stack:{" "}
          <span className="font-bold text-slate-900">
            {stack.length}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Technologies;