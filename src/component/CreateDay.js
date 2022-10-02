import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  const onHandleClick = (e) => {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("성공했습니다.");
          navigate("/");
        }
      })
      .catch((error) => {
        alert("실패했습니다.");
        console.error("실패:", error);
      });
  };

  return (
    <>
      <div>현재 날짜 수 : {days.length}일 </div>
      <button onClick={onHandleClick}> Day 추가 </button>
    </>
  );
};

export default CreateWord;
