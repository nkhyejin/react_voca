import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  const navigate = useNavigate();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  const days = useFetch("http://localhost:3001/days");
  const [current, setCurrent] = useState(day);

  const wordList = words.filter((word) => word.day === Number(day));

  const onHandlePrev = (e) => {
    const prev_day = current - 1;

    if (prev_day >= 1) {
      navigate(`/day/${prev_day}`);
      setCurrent(prev_day);
    } else {
      navigate(`/day/${days.length}`);
      setCurrent(days.length);
    }
  };
  const onHandleNext = (e) => {
    const next_day = current + 1;

    if (next_day <= days.length) {
      navigate(`/day/${next_day}`);
      setCurrent(next_day);
    } else {
      navigate(`/day/1`);
      setCurrent(1);
    }
  };

  return (
    <>
      <h2>Day {day}</h2>
      <div className="handle-container">
        <button onClick={onHandlePrev}>{"<<"}</button>
        <button onClick={onHandleNext}>{">>"}</button>
      </div>
      {words.length === 0 ? (
        <div>단어를 추가주세요.</div>
      ) : wordList.length === 0 ? (
        <div>Loading ...</div>
      ) : (
        <table>
          <tbody>
            {wordList.map((word) => (
              <Word key={word.id} word={word}></Word>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Day;
