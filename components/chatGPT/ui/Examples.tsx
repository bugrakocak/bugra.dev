import cx from "classnames";

interface ExamplesProps {
  className?: string;
  examples: string[];
}

export default function Examples({
  className,
  examples,
}: ExamplesProps): JSX.Element {
  return (
    <div className={cx("text-[#D1D5DB] flex flex-col items-center", className)}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 3V4M12.5 20V21M21.5 12H20.5M4.5 12H3.5M18.864 18.364L18.1569 17.6569M6.84315 6.34315L6.13604 5.63604M18.864 5.63609L18.1569 6.3432M6.8432 17.6569L6.13609 18.364M16.5 12C16.5 14.2091 14.7091 16 12.5 16C10.2909 16 8.5 14.2091 8.5 12C8.5 9.79086 10.2909 8 12.5 8C14.7091 8 16.5 9.79086 16.5 12Z"
          stroke="#D1D5DB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h1 className="text-lg font-semibold">Examples</h1>
      {examples.map((example) => (
        <div
          key={example}
          className="bg-[#3E3F4B] rounded-md py-3 px-4 text-sm font-semibold w-[300px] mx-auto mt-4 flex items-center justify-between text-left"
        >
          &quot;{example}&quot;
        </div>
      ))}
    </div>
  );
}
