import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DayList = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((res) => res.json())
      .then((data) => setDays(data));
  }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <Link to={`/day/${day.day}`}>
          <li key={day.id}>{`Day ${day.day}`}</li>
        </Link>
      ))}
    </ul>
  );
};

export default DayList;
