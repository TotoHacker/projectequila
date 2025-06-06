import { useState, useRef } from 'react';
import img1 from '../../assets/Images/Comida1.gif';
import img2 from '../../assets/Images/agave.gif';
import img3 from '../../assets/Images/paisaje.gif';
import img4 from '../../assets/Images/calles.gif';
import img5 from '../../assets/Images/tren.gif';

const images = [img1, img2, img3, img4, img5];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);


  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) return;
    if (newIndex >= images.length) return;
    setCurrentIndex(newIndex);
  };

  // --- Eventos táctiles ---
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = false;
  };

  const handleTouchMove = () => {
    isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current || startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      updateIndex(currentIndex + 1);
    } else if (diff < -50) {
      updateIndex(currentIndex - 1);
    }

    startX.current = null;
    isDragging.current = false;
  };

  // --- Eventos mouse ---
  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = false;

    window.addEventListener('mouseup', handleMouseUpGlobal);
    window.addEventListener('mousemove', handleMouseMoveGlobal);
  };

  const handleMouseMoveGlobal = () => {
    if (startX.current === null) return;
    isDragging.current = true;
  };

  const handleMouseUpGlobal = (e: MouseEvent) => {
    if (!isDragging.current || startX.current === null) {
      cleanUpMouseEvents();
      return;
    }

    const endX = e.clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      updateIndex(currentIndex + 1);
    } else if (diff < -50) {
      updateIndex(currentIndex - 1);
    }

    startX.current = null;
    isDragging.current = false;
    cleanUpMouseEvents();
  };

  const cleanUpMouseEvents = () => {
    window.removeEventListener('mouseup', handleMouseUpGlobal);
    window.removeEventListener('mousemove', handleMouseMoveGlobal);
  };

  return (
    <div
      className="w-full overflow-hidden select-none mt-10 mb-10 flex justify-center items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 90}%)`,
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`img-${idx}`}
            draggable={false}
            className="h-130 object-cover flex-shrink-0 "

          />
        ))}
      </div>
    </div>
  );
}