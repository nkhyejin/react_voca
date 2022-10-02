import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const DayList = () => {
  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return (
      <return>
        {" "}
        <div>Loading...</div>
      </return>
    );
  }

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <Link key={day.id} to={`/day/${day.day}`}>
            <li>{`Day ${day.day}`}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default DayList;
