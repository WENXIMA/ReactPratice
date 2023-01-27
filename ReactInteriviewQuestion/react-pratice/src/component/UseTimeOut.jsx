
import { useEffect,useState } from "react";
const UseTimeOut = () => {
    const day = new Date();
    const hour = day.getHours();
    const mins = day.getMinutes();
    const seconds = day.getSeconds();
    const dayTime = [hour,mins,seconds]
    const [time,setTime] = useState(dayTime);
    useEffect(() => {
      setTime(time => dayTime)
    },[seconds])
    return(
        <h2>{dayTime}</h2>
    )
};

export default UseTimeOut;