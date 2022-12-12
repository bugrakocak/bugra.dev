import cx from "classnames";
import TextareaAutosize from "react-textarea-autosize";

import { ChangeEvent, KeyboardEvent, RefObject, useRef } from "react";

interface FormProps {
  className?: string;
  value: string;
  disabled: boolean;
  inputRef: RefObject<HTMLTextAreaElement>;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: any) => void;
}

export default function Form({
  className,
  value,
  disabled,
  inputRef,
  placeholder,
  onChange,
  onSubmit,
}: FormProps): JSX.Element {
  const myFormRef = useRef<HTMLFormElement>(null);

  const handlePress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <form
      ref={myFormRef}
      onSubmit={onSubmit}
      className={cx(
        "relative flex items-center justify-between pt-3 pr-7 pb-3 pl-4 rounded-md bg-[#40414f] border border-[#20212380] text-white",
        className
      )}
    >
      <TextareaAutosize
        className="w-full max-h-[200px] bg-transparent outline-none resize-none"
        value={value}
        placeholder={placeholder || "Ask anything..."}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={handlePress}
        ref={inputRef}
      ></TextareaAutosize>
      <button
        type="submit"
        className="absolute p-1 rounded-md text-gray-500 bottom-2.5 right-2 hover:bg-[#202123]"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          className="w-4 h-4 rotate-90"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
      </button>
    </form>
  );
}
