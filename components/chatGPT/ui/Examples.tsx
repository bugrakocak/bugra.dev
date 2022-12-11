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
          <span className="mr-1">&quot;{example}&quot;</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.20493 2.30512C7.4783 2.03176 7.92151 2.03176 8.19488 2.30512L12.3949 6.50512C12.6682 6.77849 12.6682 7.22171 12.3949 7.49507L8.19488 11.6951C7.92151 11.9684 7.4783 11.9684 7.20493 11.6951C6.93156 11.4217 6.93156 10.9785 7.20493 10.7051L10.21 7.7001L2.0999 7.7001C1.7133 7.7001 1.3999 7.3867 1.3999 7.0001C1.3999 6.6135 1.7133 6.3001 2.0999 6.3001H10.21L7.20493 3.29507C6.93156 3.02171 6.93156 2.57849 7.20493 2.30512Z"
              fill="#D1D5DB"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
