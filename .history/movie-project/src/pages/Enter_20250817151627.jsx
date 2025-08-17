import { useNavigate } from "react-router-dom";

const Enter = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#E50914] text-[rgb(248,199,76)] ">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
        
      </h1>
      <button
        onClick={() => navigate("/home")}
        className="px-6 py-3 bg-[#E50914] hover:bg-red-700 rounded-2xl text-lg font-semibold shadow-lg"
      >
        Enter Home
      </button>
    </div>
  );
};

export default Enter;
