"use client";

export default function ImageCarousel({ images }: { images: string[] }) {
  const carouselId = Math.random();

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    if (targetId) {
      const targetElement = document.getElementById(targetId.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={index}
          id={`${carouselId}-${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img src={image} alt={`Property ${index + 1}`} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#${carouselId}-${index === 0 ? images.length : index}`}
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❮
            </a>
            <a
              href={`#${carouselId}-${
                (index + 2) % images.length || images.length
              }`}
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
