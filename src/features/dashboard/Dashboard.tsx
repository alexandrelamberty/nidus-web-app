import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { widgets } from "./WidgetList";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Dashboard = () => {
  return (
    <div>
      <ul className="m-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {widgets.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex shadow-sm rounded-md h-36"
          >
            <div
              className={classNames(
                project.bgColor,
                "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
              )}
            >
              {project.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href={project.href}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {project.name}
                </a>
                <p className="text-gray-500">{project.value} C°</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
        {/* */}
        <button
          type="button"
          className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg h-36 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
            />
          </svg>
          <span className="mt-2 block text-sm font-medium text-gray-900">
            Add widget
          </span>
        </button>
      </ul>
    </div>
  );
};
