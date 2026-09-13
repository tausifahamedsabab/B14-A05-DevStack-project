import type { ITechnology } from "../types/technologyType";

interface TechnologyCardProps {
  technology: ITechnology;
}

const TechnologyCard = ({
  technology,
}: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border p-5">
      <div className="text-3xl">{technology.icon}</div>

      <h3 className="mt-3 text-xl font-bold">
        {technology.name}
      </h3>

      <p className="text-gray-500">
        {technology.category}
      </p>
    </div>
  );
};

export default TechnologyCard;