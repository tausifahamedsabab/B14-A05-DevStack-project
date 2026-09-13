import type { ITechnology } from "../types/technologyType";

interface TechnologyCardProps {
  technology: ITechnology;
  isAdded: boolean;
  onAddToStack: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAddToStack,
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Icon and Badge */}
      <div className="mb-4 flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-slate-900">{technology.name}</h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Category and Difficulty */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
          {technology.category}
        </span>

        <span className="text-slate-500">{technology.difficulty}</span>

        <span className="font-semibold text-slate-700">
          <span className="text-yellow-500">★</span> {technology.rating}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-green-100 text-green-700"
            : "bg-slate-900 text-white hover:bg-blue-600"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
