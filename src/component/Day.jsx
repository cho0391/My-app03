import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";

function Day(props) {
  // const day = 1;

  // url에 포함된 day값을 가져오기 위해서 useParams()을 사용
  const day = useParams().day;
  const wordList = dummy.words.filter((k)=>{
    return k.day === Number(day);
  })
  return (
    <table>
      <tbody>
        {/* {dummy.words.map((k)=>{ */}
        {wordList.map((k)=>{
          return <Word key={k.id} word={k}/>
        })}
      </tbody>
    </table>
  );
}

export default Day;