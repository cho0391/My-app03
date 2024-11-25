import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json";

function DayList(props) {
  // console.log(dummy)
  // const [days, setDays] = useState([]);

  const days = useFetch('http://localhost:3001/days');

  // useEffect(()=>{
  //   fetch('http://localhost:3001/days')
  //   .then(res=>{
  //     return res.json()
  //   })
  //   .then(data => {
  //     setDays(data);
  //   })
  //   .catch((error)=>{
  //     return console.error("Error : ", error)
  //   })
  // },[]);
  return (
    <div>
        <ul className="list_day">
            {/* A 리스트니까 map을 사용하자 */} {/* A map 쓸 땐 무조건 키 사용 */}
            {days.map((k)=>{ 
                return <li key={k.id}> 
                {/* A 백틱을 사용해서 day별로 구분해 데이터를 넘겨 주자 */}
                <Link to={`/day/${k.day}`}> Day {k.day} </Link> {/* A 넘어가기 위해 Link 컴포넌트 사용 */}
                </li> 
            })}
        </ul>
    </div>
);

}

export default DayList;