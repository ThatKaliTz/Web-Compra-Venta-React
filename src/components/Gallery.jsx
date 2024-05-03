import React, { useState } from "react";
import HeartButton from "./HeartButton";

function Gallery({ images, openListModal }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="p-6 lg:max-w-2xl max-w-xl mx-auto">
      <div
        className="px-4 py-12 md:py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        {selectedImage.endsWith(".mp4") ? (
          <video
            controls
            className="w-full h-auto max-w-full rounded object-cover max-h-80"
            style={{ objectFit: "contain" }}
          >
            <source src={selectedImage} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={selectedImage}
            alt="Image"
            className="w-full h-auto max-w-full rounded object-cover max-h-80"
            style={{ objectFit: "contain" }}
          />
        )}
        <div className="absolute top-4 right-4">
          <HeartButton onClick={openListModal} />
        </div>
      </div>

      <div className="h-28 mt-6 overflow-x-auto">
        <div className="flex justify-start gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className="rounded-xl p-2 md:p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer"
              style={{ flex: "0 0 auto" }}
            >
              {image.endsWith(".mp4") ? (
                <video className="w-16 items-center" muted>
                  <source src={image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={image} alt={`Image ${index + 1}`} className="w-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
