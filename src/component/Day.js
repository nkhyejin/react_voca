import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        const json = res.json();
        console.log(res.json());
        return json;
      })
      .then((data) => setWords(data));
  }, [day]);

  const wordList = words.filter((word) => word.day === Number(day));
  console.log(wordList);
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word key={word.id} word={word}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
