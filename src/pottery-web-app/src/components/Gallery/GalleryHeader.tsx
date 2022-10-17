import React from "react";

const GalleryHeader: React.FC = () => {
  return (
    <div id="gallery-header" className="pot-row" aria-label="pot-row">
      <div id="pot-row-attributes">
        <p>Name</p>
        <p>Category</p>
        <p>Stage</p>
        <p>Clay</p>
      </div>
      <div id="pot-row-actions">Actions</div>
    </div>
  );
};

export default GalleryHeader;
