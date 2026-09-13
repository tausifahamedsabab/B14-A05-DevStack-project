import { technologies } from "../data/technologies";
import TechnologyCard from "./TechnologyCard";

const Technologies = () => {
  return (
    <section className="px-6 py-10">
      <h2 className="mb-6 text-3xl font-bold">
        Technologies
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;