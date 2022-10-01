import dummy from "../db/data.json";

const Day = () => {
  const day = 4;
  const wordList = dummy.words.filter((word) => word.day === day);
  return (
    <>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
