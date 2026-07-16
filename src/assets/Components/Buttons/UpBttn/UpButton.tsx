import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const UpButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition-all duration-300 hover:bg-yellow-600 ${
        show ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-75"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default UpButton;