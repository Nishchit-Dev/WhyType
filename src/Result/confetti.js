
import Confetti from "react-confetti";

export const ShowConfetti = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return <Confetti width={width} height={height} tweenDuration={5000} recycle={false} style={{zIndex:9999}}/>;
};
