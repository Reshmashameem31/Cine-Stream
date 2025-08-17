import { useEffect, useState } from "react";

const GoldenSprinkles = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000); // show only for 4s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{`
            position: "absolute",
            top: "-10px",
            left: ${Math.random() * 100}vw,
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "gold",
            opacity: 0.8,
            animation: fall ${3 + Math.random() * 2}s linear,
            animationDelay: ${Math.random() * 2}s,
          }}
        />
      ))}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-10px); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default GoldenSprinkles;