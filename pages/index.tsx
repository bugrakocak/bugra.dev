import Head from "next/head";
import cx from "classnames";
import { useState } from "react";

import ChatGpt from "../components/chatGPT";
import Contact from "../components/Contact";

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div>
      <Head>
        <title>Buğra Koçak</title>
        <meta name="description" content="Personal website of Buğra Koçak" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <div
          className={cx(
            "h-[20px] mb-8 transition-opacity duration-[2000ms] delay-[2000ms] ease-in-out",
            questionIndex >= 2 ? "opacity-100" : "opacity-0"
          )}
        >
          <Contact />
        </div>
        <ChatGpt
          questionIndex={questionIndex}
          setQuestionIndex={(i) => setQuestionIndex(i)}
        />
      </main>
    </div>
  );
}
