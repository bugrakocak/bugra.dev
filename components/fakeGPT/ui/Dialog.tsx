import cx from "classnames";

import { PropsWithChildren } from "react";
import LazyTyper from "./FakeStreaming";

type Persona = "user" | "ai";

interface DialogProps {
  className?: string;
  question: string;
  answer: string;
  onCompleted: () => void;
  onType: () => void;
}

interface DialogItemProps {
  className?: string;
  persona: Persona;
}

interface AvatarProps {
  className?: string;
  persona: Persona;
}

const Avatar = ({ persona, className }: AvatarProps) => (
  <div
    className={cx(
      "w-[30px] h-[30px] rounded-sm bg-[#10a37f] flex items-center justify-center text-white",
      persona === "ai" ? "bg-[#10a37f]" : "bg-[#004d3f]",
      className
    )}
  >
    {persona === "user" ? "U" : "AI"}
  </div>
);

function DialogItem({
  className,
  persona,
  children,
}: PropsWithChildren<DialogItemProps>): JSX.Element {
  return (
    <div
      className={cx(
        "py-6",
        persona === "user" ? "bg-[#343541]" : "bg-[#444654]",
        className
      )}
    >
      <div className="w-4/5 mx-auto max-w-2xl flex gap-6">
        <Avatar className="self-start flex-shrink-0" persona={persona} />
        <div
          className={persona === "user" ? "text-[#ececf1]" : "text-[#d1d5db]"}
        >
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
  onType,
}: DialogProps): JSX.Element {
  return (
    <>
      <DialogItem persona="user">{question}</DialogItem>
      <DialogItem persona="ai">
        <LazyTyper text={answer} onCompleted={onCompleted} onType={onType} />
      </DialogItem>
    </>
  );
}
