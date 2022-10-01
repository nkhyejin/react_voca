import dummy from "../db/data.json";
import { Link } from "react-router-dom";

const DayList = () => {
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <Link to={`/day/${day.day}`}>
          <li key={day.id}>{`Day ${day.day}`}</li>
        </Link>
      ))}
    </ul>
  );
};

export default DayList;
