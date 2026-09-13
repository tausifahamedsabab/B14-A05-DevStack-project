
import type { ITechnology } from "../types/technologyType";

interface TechnologyCardProps {
  technology: ITechnology;
  onAddToStack: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Icon and Badge */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 p-3">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {technology.badge}
        </span>
      </div>

      {/* Name and Description */}
      <h3 className="mb-2 text-xl font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-6 text-slate-600">
        {technology.description}
      </p>

      {/* Category */}
      <div className="mb-4">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {technology.category}
        </span>
      </div>

      {/* Difficulty and Rating */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-slate-600">
          <span className="font-medium">Difficulty:</span>{" "}
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 font-semibold text-slate-800">
          <span className="text-yellow-500">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => onAddToStack(technology)}
        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;