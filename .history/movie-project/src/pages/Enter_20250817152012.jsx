import { useNavigate } from "react-router-dom";

const Enter = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#E50914]  ">
      <h1 className=" italic text-[rgb(248,199,76)] text-4xl md:text-4xl font-semibold mb-6 font-serif">
      <img src='icon.png'className='w-60 h-full ml-3' />  CineStream
      </h1>
      <button
        onClick={() => navigate("/home")}
        className="px-6 py-3 bg-[#d9e416] hover:bg-yellow-700 text-red-500 rounded-2xl text-lg font-semibold shadow-lg"
      >
        Enter Home
      </button>
    </div>
  );
};

export default Enter;
