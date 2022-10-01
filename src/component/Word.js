import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Word = ({ word: w }) => {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const onHandleToggle = (e) => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT", // 또는 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setIsDone(!isDone);
          console.log("성공:");
        }
      })
      .catch((error) => {
        console.error("실패:", error);
      });
  };

  const onHandleDelete = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            setWord({ id: 0 });
            console.log("삭제완료");
          }
        })
        .catch((error) => {
          console.error("실패:", error);
        });
    }
  };

  return word.id === 0 ? null : (
    <>
      <tr className={isDone ? "off" : ""}>
        <td>
          <input
            type="checkbox"
            checked={isDone}
            onChange={onHandleToggle}
          ></input>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button className="normal" onClick={() => setIsShow(!isShow)}>
            뜻 보기
          </button>
          <button className="danger" onClick={onHandleDelete}>
            삭제
          </button>
        </td>
      </tr>
    </>
  );
};

export default Word;
