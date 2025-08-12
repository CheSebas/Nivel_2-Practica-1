import ThemeToggle from "./components/ThemeToggle";
import TeamList from "./components/TeamList";
import { teamData } from "./data/teamData";

function App() {
  return (
    <div
      className="px-6 py-12 bg-white dark:bg-gray-900"
      style={{ minHeight: "100vh" }}
    >
      <ThemeToggle />

      <header className="mb-16">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
          <h1 className="text-4xl font-bold sm:text-5xl text-gray-900 dark:text-white">
            The creative crew
          </h1>
          <div style={{ maxWidth: "400px" }}>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Who we are
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We are team of creatively diverse, driven, innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </div>
      </header>

      <TeamList members={teamData} />

      <div style={{ marginTop: "64px", textAlign: "center" }}>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          created by <span style={{ fontWeight: "bold" }}>CheSebas</span> -
          devChallenges.io
        </p>
      </div>
    </div>
  );
}

export default App;
