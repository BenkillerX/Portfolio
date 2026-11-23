import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        className="backToTop"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth", })
        }
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default BackToTop;