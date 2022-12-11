import { useEffect, useState } from "react";

interface LazyTyperProps {
  text?: string;
  onCompleted: () => void;
  onLazyType: () => void;
}

export default function LazyTyper({
  text,
  onLazyType,
  onCompleted,
}: LazyTyperProps): JSX.Element {
  const [words, setWords] = useState<string[]>(text?.split(" ") ?? []);
  const [typedWords, setTypedWords] = useState<string[]>([]);

  useEffect(() => {
    if (words.length === 0) {
      return onCompleted?.();
    }

    const waitTime = typedWords.length === 0 ? 2000 : 75;

    const timeout = setTimeout(() => {
      setTypedWords((prev) => {
        const newTypedWords = [...prev];
        newTypedWords.push(words[0]);

        return newTypedWords;
      });
      setWords((prev) => prev.slice(1));
      onLazyType();
    }, waitTime);

    return () => clearTimeout(timeout);
  }, [onCompleted, typedWords, words]);

  return (
    <>
      {typedWords.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </>
  );
}
