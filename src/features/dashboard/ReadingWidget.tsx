import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export type ReadingWidgetProps = {
    name: string;
    bgColor:string;
    initials:string
    href:string;
    value:number;
}

export const ReadingWidget = (props : ReadingWidgetProps ) => {
  return (
    <li
      key={props.name}
      className="col-span-1 flex shadow-sm rounded-md h-36"
    >
      <div
        className={classNames(
          props.bgColor,
          "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
        )}
      >
        {props.initials}
      </div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <a
            href={props.href}
            className="text-gray-900 font-medium hover:text-gray-600"
          >
            {props.name}
          </a>
          <p className="text-gray-500">{props.value} C°</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            type="button"
            className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </li>
  );
};
