import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // प्रत्येक वेळी route बदलला की top वर नेतो
  }, [pathname]);

  return null;
}

export default ScrollToTop;
