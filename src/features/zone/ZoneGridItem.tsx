
//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type ZoneGridItemProps = {
  id: string;
  name: string;
  floor: string;
};

export default function ZoneGridItem(props: ZoneGridItemProps) {
  return (
    <li key={props.name} className="col-span-1 flex shadow-sm rounded-md h-36">
      <div
        className={classNames(
          "bg-purple-600",
          "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
        )}
      ></div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <p className="text-gray-900 font-medium text-lg hover:text-gray-600">
            {props.name}
          </p>
          {/* <p className="text-gray-500">{props.value} C°</p> */}
        </div>
      </div>
    </li>
  );
}
