import React,{useState,useEffect} from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Software",
  "Python",
  "Django",
  "ReactJs",
  "JavaScript",
];

function colorchange() {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-pink-500",
    "text-purple-500",
    "text-orange-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}


function headerline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <h1 className="flex md:flex-col lg:flex-row gap-4 md:flex-none">
        <TextTransition className={colorchange()} springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
        <label htmlFor="">Developer</label>
      </h1>
    </>
  );
}

export default headerline;
