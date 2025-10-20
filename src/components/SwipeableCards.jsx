"use client"

import React, { useState, useRef, useEffect } from "react";

// import { Card } from "./card-item"

const CARD_DATA = [
  {
    id: 1,
    name: "Alex Rivera",
    age: 28,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-portrait-person-casual-ydONC45Ij8txKVZPjnU4EMPL5Q0axz.jpg",
    bio: "Adventure seeker | Coffee enthusiast | Dog lover",
  },
  {
    id: 2,
    name: "Jordan Chen",
    age: 26,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-portrait-person-casual-ydONC45Ij8txKVZPjnU4EMPL5Q0axz.jpg",
    bio: "Artist | Traveler | Foodie",
  },
  {
    id: 3,
    name: "Sam Taylor",
    age: 30,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-portrait-person-casual-ydONC45Ij8txKVZPjnU4EMPL5Q0axz.jpg",
    bio: "Tech enthusiast | Gamer | Music lover",
  },
  {
    id: 4,
    name: "Morgan Lee",
    age: 27,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-portrait-person-casual-ydONC45Ij8txKVZPjnU4EMPL5Q0axz.jpg",
    bio: "Fitness junkie | Bookworm | Nature lover",
  },
  {
    id: 5,
    name: "Casey Brooks",
    age: 29,
    image: "/professional-portrait-person-stylish.jpg",
    bio: "Photographer | Dancer | Beach bum",
  },
]

export function SwipeableCards() {
  const [cards, setCards] = useState(CARD_DATA)
  const [nextId, setNextId] = useState(6)

  const handleSwipe = (id, direction) => {
    // Remove the swiped card
    setCards((prev) => prev.filter((card) => card.id !== id))

    // Add a new card to the bottom of the stack
    const newCard = {
      id: nextId,
      name: CARD_DATA[(nextId - 1) % CARD_DATA.length].name,
      age: CARD_DATA[(nextId - 1) % CARD_DATA.length].age,
      image: CARD_DATA[(nextId - 1) % CARD_DATA.length].image,
      bio: CARD_DATA[(nextId - 1) % CARD_DATA.length].bio,
    }

    setCards((prev) => [newCard, ...prev])
    setNextId((prev) => prev + 1)
  }

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative h-[600px]">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} totalCards={cards.length} onSwipe={handleSwipe} />
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={() => handleSwipe(cards[cards.length - 1].id, "left")}
          className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-sm border border-white/20"
          aria-label="Dislike"
        >
          <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button
          onClick={() => handleSwipe(cards[cards.length - 1].id, "right")}
          className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-sm border border-white/20"
          aria-label="Like"
        >
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}










export function Card({ card, index, totalCards, onSwipe }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const isTopCard = index === totalCards - 1;
  const cardPosition = totalCards - 1 - index; // 0 = bottom, 4 = top

  // Stacking configuration for 5 cards
  let offset = 0;
  let scale = 1;

  if (cardPosition === 0) {
    offset = 0;
    scale = 0.88;
  } else if (cardPosition === 1) {
    offset = 8;
    scale = 0.91;
  } else if (cardPosition === 2) {
    offset = 16;
    scale = 0.94;
  } else if (cardPosition === 3) {
    offset = 24;
    scale = 0.97;
  } else {
    offset = 32;
    scale = 1;
  }

  const handleStart = (clientX, clientY) => {
    if (!isTopCard) return;
    setIsDragging(true);
    setStartPos({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging || !isTopCard) return;
    const newX = clientX - startPos.x;
    const newY = clientY - startPos.y;
    setPosition({ x: newX, y: newY });
  };

  const handleEnd = () => {
    if (!isDragging || !isTopCard) return;
    setIsDragging(false);

    const threshold = 100;
    if (Math.abs(position.x) > threshold) {
      const direction = position.x > 0 ? "right" : "left";
      const exitX = position.x > 0 ? 1000 : -1000;
      setPosition({ x: exitX, y: position.y });
      setTimeout(() => {
        onSwipe(card.id, direction);
        setPosition({ x: 0, y: 0 });
      }, 300);
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  // Mouse events
  const handleMouseDown = (e) => handleStart(e.clientX, e.clientY);
  const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
  const handleMouseUp = () => handleEnd();

  // Touch events
  const handleTouchStart = (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
  const handleTouchEnd = () => handleEnd();

  // Global mouse move and up listeners
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const handleGlobalMouseUp = () => handleEnd();

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, startPos, position]);

  const rotation = position.x / 20;
  const opacity = Math.abs(position.x) / 100;

  return (
    <div
      ref={cardRef}
      className={`absolute inset-0 transition-all duration-300 ${
        isTopCard ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
      }`}
      style={{
        transform: isTopCard
          ? `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`
          : `translateY(${offset}px) scale(${scale})`,
        transition: isDragging ? "none" : "transform 0.3s ease-out",
        zIndex: index,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-card shadow-2xl border border-white/10">
        <img
          src={card.image || "/placeholder.svg"}
          alt={card.name}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Like/Nope indicators */}
        {isTopCard && (
          <>
            <div
              className="absolute top-8 right-8 px-6 py-3 border-4 border-green-400 text-green-400 text-2xl font-bold rounded-xl rotate-12 transition-opacity"
              style={{ opacity: position.x > 0 ? opacity : 0 }}
            >
              LIKE
            </div>
            <div
              className="absolute top-8 left-8 px-6 py-3 border-4 border-red-400 text-red-400 text-2xl font-bold rounded-xl -rotate-12 transition-opacity"
              style={{ opacity: position.x < 0 ? opacity : 0 }}
            >
              NOPE
            </div>
          </>
        )}

        {/* Card info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-1">
            {card.name}, {card.age}
          </h2>
          <p className="text-white/80 text-sm">{card.bio}</p>
        </div>
      </div>
    </div>
  );
}
