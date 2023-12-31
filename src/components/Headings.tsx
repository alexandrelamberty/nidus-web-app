/* This example requires Tailwind CSS v2.0+ */

type HeadingsProp = {
  title: string;
};
export default function Headings({ title }: HeadingsProp) {
  return (
    <div className="bg-indigo-600 py-4">
      <div className="h-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="pl-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {title}
        </h2>
      </div>
    </div>
  );
}
