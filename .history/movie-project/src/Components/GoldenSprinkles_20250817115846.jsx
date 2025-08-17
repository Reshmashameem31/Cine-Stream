import { useEffect, useState } from "react";

const GoldenSprinkles = () => {
  const [sprinkles, setSprinkles] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 30; i++) {
      temp.push({
        id: i,
        left: Math.random() * 100 + "vw",
        duration: Math.random() * 5 + 5 + "s",
        size: Math.random() * 6 + 4 + "px",
      });
    }
    setSprinkles(temp);
    const timer=setTimeout(()=>{
        setSprinkles([])
    },3000)
    return()=>clearTimeout(timer)
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-50">
      {sprinkles.map((sprinkle) => (
        <span
          key={sprinkle.id}
          className="absolute bg-blue-00 rounded-full opacity-80"
          style={{
            left: sprinkle.left,
            width: sprinkle.size,
            height: sprinkle.size,
            animation: `fall ${sprinkle.duration} linear infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GoldenSprinkles;