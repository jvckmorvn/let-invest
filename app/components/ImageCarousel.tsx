export default function ImageCarousel({ images }: { images: string[] }) {
  // TODO: Change carouselId to not use Math.random()
  const carouselId = Math.random();

  const handleNavigation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("data-target");

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ block: "nearest", inline: "center" });
      }
    }
  };

  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={index}
          id={`${carouselId}-${index + 1}`}
          className="carousel-item relative w-full h-72"
        >
          <img src={image} alt={`Property ${index + 1}`} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
            <button
              data-target={`${carouselId}-${
                index === 0 ? images.length : index
              }`}
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❮
            </button>
            <button
              data-target={`${carouselId}-${
                (index + 2) % images.length || images.length
              }`}
              className="btn btn-circle"
              onClick={handleNavigation}
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
