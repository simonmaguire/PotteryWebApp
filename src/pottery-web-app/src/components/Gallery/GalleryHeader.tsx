import React from "react";

const GalleryHeader: React.FC = () => {
  return (
    <div id="gallery-header" className="pot-row" aria-label="pot-row">
      <p>Name</p>
      <p>Category</p>
      <p>Stage</p>
      <p>Clay</p>
      <div>Actions</div>
    </div>
  );
};

export default GalleryHeader;
