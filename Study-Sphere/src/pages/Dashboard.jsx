import StatCard from "../components/Dashboard/StatCard";
import Layout from "../components/Layout/Layout";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* <Layout/> */}

      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>


      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <StatCard title="Study Hours Today" value="3h 20m" />

        <StatCard title="Focus Sessions" value="5" />

        <StatCard title="Tasks Completed" value="12" />

        <StatCard title="Study Streak" value="7 Days" />

      </div>



      {/* PRODUCTIVITY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Focus Timer Widget */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">

          <h2 className="text-lg font-semibold mb-4">
            Focus Timer
          </h2>

          <div className="flex flex-col items-center gap-4">

            <div className="text-4xl font-bold">
              25:00
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg">
                Start
              </button>

              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                Reset
              </button>
            </div>

          </div>

        </div>


        {/* Weekly Progress */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">

          <h2 className="text-lg font-semibold mb-4">
            Weekly Progress
          </h2>

          <div className="h-40 flex items-center justify-center text-gray-500">
            Chart Coming Soon
          </div>

        </div>

      </div>



      {/* ACTIVITY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">

          <h2 className="text-lg font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-sm">

            <li>✔ Completed "React Context API"</li>
            <li>✔ Finished DSA practice session</li>
            <li>✔ Added 3 new tasks to board</li>
            <li>✔ Studied System Design for 1 hour</li>

          </ul>

        </div>


        {/* Upcoming Tasks */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">

          <h2 className="text-lg font-semibold mb-4">
            Upcoming Tasks
          </h2>

          <ul className="space-y-3 text-sm">

            <li>📌 Complete React Project</li>
            <li>📌 Practice 5 LeetCode Problems</li>
            <li>📌 Revise DBMS Notes</li>

          </ul>

        </div>

      </div>


    </div>
  );
};

export default Dashboard;