import { useEffect, useState } from "react";

const GoldenSprinkles = () => {
  const [sprinkles, setSprinkles] = useState([]);

  useEffect(() => {
    // Generate sprinkles
    const temp = [];
    for (let i = 0; i < 30; i++) {
      temp.push({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 5 + 3, // 3–8s
        size: Math.random() * 6 + 4, // 4px–10px
      });
    }
    setSprinkles(temp);

    // Remove sprinkles after 5 seconds
    const timer = setTimeout(() => setSprinkles([]), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-50">
      {sprinkles.map((sprinkle) => (
        <div
          key={sprinkle.id}
          style={{
            position: "absolute",
            top: "-10px",
            left: `${sprinkle.left}vw`,
            width: `${sprinkle.size}px`,
            height: `${sprinkle.size}px`,
            backgroundColor: "gold",
            borderRadius: "50%",
            opacity: 0.8,
            animation: `fall ${sprinkle.duration}s linear`,
          }}
        />
      ))}

      <style>{`
        @keyframes fall {
          0% { transform: translateY(0); opacity: 0.9; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default GoldenSprinkles;
