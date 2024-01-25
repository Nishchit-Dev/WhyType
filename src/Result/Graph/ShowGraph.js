import { useDispatch, useSelector } from "react-redux";
import {
  CartesianGrid,
  LineChart,
  YAxis,
  Tooltip,
  XAxis,
  Legend,
  Line,
  Brush,
} from "recharts";
import { calculateTimeDifferences } from "../calc/calculateResult";
import { setTimeDifferenceArray } from "../../Store/Slices/TypingSenSlice";
import { useEffect, useState } from "react";

export const ScoreGraph = () => {
  const Seocnds = useSelector((states) => {
    return states.TypedSentence.SecondsWhenPress;
  });
  const chars = useSelector((states) => {
    return states.TypedSentence.TypedLetter;
  });
  const [finalChars, setFinalChars] = useState([]);
  const [finalTime, setFinalTime] = useState([]);
  useEffect(() => {
    let _finalTime = calculateTimeDifferences(Seocnds);
    console.log(_finalTime);

    let _finalChars = chars.map((items,i) =>(
     {
      data: items,
      time:_finalTime[i]
    }))
    setFinalChars([..._finalChars]);
    setFinalTime([..._finalTime]);
    console.log(finalTime);
    console.log(_finalChars);

  }, []);

  return (
    <>
      <LineChart
        width={900}
        height={300}
        data={finalChars}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data"  />
        <YAxis dataKey="time"/>
        <Tooltip />
        <Legend />
        <Brush endIndex={25}/>
        <Line type="monotone" dataKey="time" stroke="#FFA447" strokeWidth={2} />
      </LineChart>
    </>
  );
};
