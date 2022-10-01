import { useState } from "react";

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  return (
    <>
      <tr className={isDone ? "off" : ""}>
        <td>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => setIsDone(!isDone)}
          ></input>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button className="normal" onClick={() => setIsShow(!isShow)}>
            뜻 보기
          </button>
          <button className="danger" onClick={() => {}}>
            삭제
          </button>
        </td>
      </tr>
    </>
  );
};

export default Word;
