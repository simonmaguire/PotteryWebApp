const GalleryHeader = () => {
  return (
    <div id="gallery-header" className="pot-row" aria-label="pot-row">
      <div id="pot-row-attributes">
        <p>
          <strong>Name</strong>
        </p>
        <p>
          <strong>Category</strong>
        </p>
        <p>
          <strong>Stage</strong>
        </p>
        <p>
          <strong>Clay</strong>
        </p>
      </div>
      <div id="pot-row-actions">
        <strong>Actions</strong>
      </div>
    </div>
  );
};

export default GalleryHeader;
