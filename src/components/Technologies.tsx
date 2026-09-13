
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import technologiesData from "../data/technologies.json";
import type { ITechnology } from "../types/technologyType";
import TechnologyCard from "../components/TechnologyCard";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<ITechnology[]>([]);

  // Load technology data
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const data = await Promise.resolve(technologiesData);
        setTechnologies(data);
      } catch {
        toast.error("Failed to load technologies!");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack!");
  };

  // Loading state
  if (loading) {
    return (
      <section className="flex min-h-[300px] items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />

          <p className="mt-4 text-slate-500">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="bg-white px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore the{" "}
            <span className="brand-gradient">Technologies</span>
          </h2>

          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards and Sidebar */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAddToStack={handleAddToStack}
              />
            ))}
          </div>

          {/* Your Stack Sidebar */}
          <aside
            id="your-stack"
            className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-1"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-slate-900">
                Your Stack
              </h3>

              <span className="rounded-full bg-pink-100 px-2 py-1 text-xs font-semibold text-pink-600">
                {stack.length}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              {stack.length === 0 ? (
                "No technologies selected yet."
              ) : (
                <>
                  {stack.length}{" "}
                  {stack.length === 1
                    ? "Technology"
                    : "Technologies"}{" "}
                  Selected
                </>
              )}
            </p>

            {/* Empty State */}
            {stack.length === 0 ? (
              <div className="mt-5 rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
                Your stack is empty.
              </div>
            ) : (
              <>
                {/* Stack Items */}
                <div className="mt-5 flex flex-col gap-3">
                  {stack.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                    >
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-9 w-9 object-contain"
                      />

                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-slate-800">
                          {technology.name}
                        </h4>

                        <p className="text-xs text-slate-500">
                          {technology.category}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemove(technology.id)}
                        className="text-lg text-slate-400 transition hover:text-red-500"
                        aria-label={`Remove ${technology.name}`}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                {/* Remove All Button */}
                <button
                  type="button"
                  onClick={handleRemoveAll}
                  className="mt-5 w-full rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                >
                  Remove All
                </button>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technologies;