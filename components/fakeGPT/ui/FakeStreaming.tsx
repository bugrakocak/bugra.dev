import { useEffect, useState } from "react";

interface FakeStreamingProps {
  text?: string;
  onCompleted: () => void;
  onType: () => void;
}

export default function FakeStreaming({
  text,
  onType,
  onCompleted,
}: FakeStreamingProps): JSX.Element {
  const [words, setWords] = useState<string[]>(text?.split(" ") ?? []);
  const [typedWords, setTypedWords] = useState<string[]>([]);

  useEffect(() => {
    if (words.length === 0) {
      return onCompleted?.();
    }

    const waitTime = typedWords.length === 0 ? 1200 : 40;

    const timeout = setTimeout(() => {
      setTypedWords((prev) => {
        const newTypedWords = [...prev];
        newTypedWords.push(words[0]);

        return newTypedWords;
      });
      setWords((prev) => prev.slice(1));
      onType();
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
