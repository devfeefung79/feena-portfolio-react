import { mdiArrowUpThick } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect, useState } from "react";
import './custom.css';

const CustomScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      aria-label="Scroll to top"
    >
      <Icon path={mdiArrowUpThick} size={1}/>
    </button>
  );
};

export default CustomScrollToTopButton;