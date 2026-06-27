
import './galleryModal.css'

function GalleryModal(){
    return(
    <div id="galleryModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeGallery()">&times;</span>
        <div class="gallery-image-container">
          <img id="galleryMainImage" src="" alt="Gallery" />
        </div>
        <div class="gallery-info-section">
          <h3 id="galleryTitle"></h3>
          <div id="galleryInfo" class="gallery-description"></div>
          <div class="gallery-meta" id="galleryMeta"></div>
          <div id="galleryTechnologies" class="gallery-technologies"></div>
          <div class="gallery-thumbnails" id="galleryThumbnails"></div>
          <div id="galleryActions" class="gallery-actions"></div>
        </div>
      </div>
    </div>
    );
}

export default GalleryModal