const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition">

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h3 className="text-2xl font-semibold mt-2">
        {value}
      </h3>

    </div>
  );
};

export default StatCard;