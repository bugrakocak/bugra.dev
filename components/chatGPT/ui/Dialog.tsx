import cx from "classnames";
import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";
import LazyTyper from "./LazyTyper";

type Who = "user" | "ai";

interface DialogProps {
  className?: string;
  question: string;
  answer: string;
  onCompleted: () => void;
  onLazyType: () => void;
}

interface DialogItemProps {
  className?: string;
  who: Who;
}

interface AvatarProps {
  className?: string;
  who: Who;
}

const Avatar = ({ who, className }: AvatarProps) => (
  <div
    className={cx(
      "w-[30px] h-[30px] rounded-sm bg-[#10a37f] flex items-center justify-center text-white",
      who === "ai" ? "bg-[#10a37f]" : "bg-[#004d3f]",
      className
    )}
  >
    {who === "user" ? "AI" : "U"}
  </div>
);

function DialogItem({
  className,
  who,
  children,
}: PropsWithChildren<DialogItemProps>): JSX.Element {
  return (
    <div
      className={cx(
        "py-6",
        who === "user" ? "bg-[#343541]" : "bg-[#444654]",
        className
      )}
    >
      <div className="w-4/5 mx-auto max-w-2xl flex gap-6">
        <Avatar className="self-start flex-shrink-0" who={who} />
        <div className={who === "user" ? "text-[#ececf1]" : "text-[#d1d5db]"}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Dialog({
  question,
  answer,
  onCompleted,
  onLazyType,
}: DialogProps): JSX.Element {
  return (
    <>
      <DialogItem who="user">{question}</DialogItem>
      <DialogItem who="ai">
        <LazyTyper
          text={answer}
          onCompleted={onCompleted}
          onLazyType={onLazyType}
        />
      </DialogItem>
    </>
  );
}
