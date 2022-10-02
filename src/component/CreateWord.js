import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {
  const navigate = useNavigate();

  const days = useFetch("http://localhost:3001/days");
  const onHandleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: Number(dayRef.current.value),
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("성공했습니다.");
          navigate(`/day/${dayRef.current.value}`);
          console.log("성공:");
        }
      })
      .catch((error) => {
        alert("실패했습니다.");
        console.error("실패:", error);
      });
  };
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <div className="input_area">
          <label>Eng </label>
          <input type="text" placeholder="computer" ref={engRef} />
        </div>
        <div className="input_area">
          <label>Kor </label>
          <input type="text" placeholder="컴퓨터" ref={korRef} />
        </div>
        <div className="input_area">
          <label>Day</label>
          <select ref={dayRef}>
            {/* <option value="">날짜를 선택해주세요.</option> */}
            {days.map((day) => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="저장" />
      </form>
    </>
  );
};

export default CreateWord;
