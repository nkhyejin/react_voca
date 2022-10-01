import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));
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
