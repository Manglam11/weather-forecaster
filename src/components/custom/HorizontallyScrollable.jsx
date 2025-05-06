import React, { useRef } from "react";

const HorizontallyScrollable = ({ children }) => {
  const scrollRef = useRef();

  const handleMouseDown = (evt) => {
    const oldX = evt.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (evt) => {
      const newX = evt.pageX;
      const offset = newX - oldX;
      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      className="flex overflow-x-auto space-x-4 scrollbar-hidden px-2 py-2 scrollbar-thin scrollbar-thumb-gray-400 hover:cursor-pointer active:cursor-grab "
    >
      {children}
    </div>
  );
};

export default HorizontallyScrollable;
