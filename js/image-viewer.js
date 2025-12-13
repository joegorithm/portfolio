/**
 * Custom image viewer modal with robust pan and zoom functionality.
 * Vibe coded with Github Copilot :)
 */

let imageUrl = ""; // Variable to hold the image URL

// Load image viewer modal
document.querySelector("#image-viewer-modal").innerHTML = `
  <form method="dialog">
    <div class="image-viewer-modal-header">
      <h2 class="image-viewer-modal-title" id="image-viewer-modal-title">View Image</h2>
      <button type="button" class="image-viewer-modal-close-button" aria-label="Close dialog" onClick="closeImageViewerDialog()">
        <svg class="image-viewer-modal-close-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
        </svg>
      </button>
    </div>
    <div class="image-viewer-modal-body">
      <div id="image-zoom-container">
        <img id="image-viewer-image" class="image-viewer-modal-image" alt="Image" />
      </div>
    </div>
    <div class="image-viewer-modal-footer">
      <input type="range" id="image-zoom-slider" min="1" max="5" step="0.01" value="1" style="width: 100%;" />
      <label style="color: white;" for="image-zoom-slider">Zoom: <span id="image-zoom-value">100%</span></label>
    </div>
  </form>
`;

// Prevent touch scrolling
function preventTouchScroll(e) {
  e.preventDefault(); // stop scrolling
}

// Open the image viewer dialog
function openImageViewerDialog(src, label) {
  imageUrl = src;
  const dialog = document.getElementById("image-viewer-modal");
  const image = dialog.querySelector("#image-viewer-image");
  const title = dialog.querySelector("#image-viewer-modal-title");
  const slider = dialog.querySelector('#image-zoom-slider');
  title.textContent = label;
  if (image) {
    image.src = imageUrl;
    resetPanZoom();
  }
  if (slider) slider.value = 1;
  dialog.showModal();
  requestAnimationFrame(() => dialog.classList.add("showing"));
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
  document.body.addEventListener('touchmove', preventTouchScroll, { passive: false }); // Prevent touch scrolling
}

// Close the image viewer dialog
function closeImageViewerDialog() {
    const dialog = document.getElementById("image-viewer-modal");
    dialog.classList.remove("showing");
    dialog.addEventListener("transitionend", () => dialog.close(), { once: true });
    document.body.style.overflow = ''; // Restore background scrolling
    document.body.removeEventListener('touchmove', preventTouchScroll); // Restore touch scrolling
}

// If mouse is clicked outside of the modal, close the modal
document.addEventListener("click", (event) => {
    const dialog = document.getElementById("image-viewer-modal");
    if (dialog.classList.contains("showing") && (event.clientX < dialog.offsetLeft || event.clientX > dialog.offsetLeft + dialog.offsetWidth || event.clientY < dialog.offsetTop || event.clientY > dialog.offsetTop + dialog.offsetHeight)) {
        closeImageViewerDialog();
    }
});





// --- Robust Pan & Zoom Logic ---

const container = document.querySelector('#image-zoom-container');
const img = document.querySelector('#image-viewer-image');
const slider = document.getElementById('image-zoom-slider');

let zoom = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let panStartX = 0;
let panStartY = 0;

function updateTransform() {
  if (!img) return;
  const scale = getAppliedScale(zoom);
  img.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;

  // update zoom percentage label (shows visual/applied scale as percentage)
  const zoomLabel = document.getElementById('image-zoom-value');
  if (zoomLabel) {
    zoomLabel.textContent = `${Math.round(scale * 100)}%`;
  }
}

const LOGICAL_ZOOM_MIN = 1;
const LOGICAL_ZOOM_MAX = 5;
const MIN_APPLIED_SCALE = 5 / 8;
const EPS = 1e-9;

// Map logical zoom -> applied scale. S(z) = (3/8) * z^2 + 5/8
function getAppliedScale(logicalZoom) {
  const z = Math.min(Math.max(LOGICAL_ZOOM_MIN, logicalZoom), LOGICAL_ZOOM_MAX);
  return (3 / 8) * z * z + 5 / 8;
}

// Inverse mapping: applied scale -> logical zoom
// z = sqrt((S - 5/8) * (8/3))
function appliedScaleToLogical(scale) {
  if (typeof scale !== 'number' || scale <= MIN_APPLIED_SCALE + EPS) return LOGICAL_ZOOM_MIN;
  const z = Math.sqrt((scale - MIN_APPLIED_SCALE) * (8 / 3));
  return Math.min(Math.max(LOGICAL_ZOOM_MIN, z), LOGICAL_ZOOM_MAX);
}

function clampPan() {
  if (!container || !img) return;
  const containerRect = container.getBoundingClientRect();
  const containerW = containerRect.width;
  const containerH = containerRect.height;
  let imgW, imgH;
  const naturalW = img.naturalWidth || 0;
  const naturalH = img.naturalHeight || 0;
  if (naturalW > 0 && naturalH > 0) {
    const fitScale = Math.min(containerW / naturalW, containerH / naturalH);
    const baseW = naturalW * fitScale;
    const baseH = naturalH * fitScale;
    const applied = getAppliedScale(zoom);
    imgW = baseW * applied;
    imgH = baseH * applied;
  } else {
    // Fallback to measured size (may include transforms)
    const rect = img.getBoundingClientRect();
    imgW = rect.width;
    imgH = rect.height;
  }
  // Clamp so image never leaves the container on any side
  let minX = containerW - imgW;
  let maxX = 0;
  let minY = containerH - imgH;
  let maxY = 0;
  // If image is smaller than container, center it
  if (imgW <= containerW) {
    minX = maxX = Math.round((containerW - imgW) / 2);
  }
  if (imgH <= containerH) {
    minY = maxY = Math.round((containerH - imgH) / 2);
  }
  panX = Math.max(minX, Math.min(maxX, panX));
  panY = Math.max(minY, Math.min(maxY, panY));
}

// Clamp pan after image loads (for initial centering)
if (img) {
  img.addEventListener('load', () => {
    // When the image finishes loading, ensure the image is centered and clamped
    // Reset transform-origin to top-left for our translate-based math
    img.style.transformOrigin = '0 0';
    // Make the container aspect-ratio reflect the natural image aspect ratio
    try {
      const containerEl = container;
      if (containerEl && img.naturalWidth && img.naturalHeight) {
        // Set inline aspect-ratio so different image shapes display nicely
        containerEl.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
      }
    } catch (_) {
      // no-op
    }
    clampPan();
    updateTransform();
  });
}

if (container && img) {
  // Mouse wheel: zoom with Ctrl/Cmd + scroll (cursor-centered), otherwise use scroll/trackpad to pan
  container.addEventListener('wheel', e => {
    // If Ctrl/Cmd pressed -> zoom around mouse
    if (e.ctrlKey || e.metaKey) {
      preventTouchScroll(e);
      // Always use transform-origin (0,0)
      img.style.transformOrigin = '0 0';
      // Mouse position relative to container
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      // Mouse position in image coordinates (before transform) using applied scale
      const prevScale = getAppliedScale(zoom);
      const imgX = (mouseX - panX) / prevScale;
      const imgY = (mouseY - panY) / prevScale;
      const prevZoom = zoom;
      let newZoom = zoom + e.deltaY * -0.01;
      newZoom = Math.min(Math.max(1, newZoom), 5);
      const newScale = getAppliedScale(newZoom);
      // Adjust pan so the point under the mouse stays under the mouse
      panX = mouseX - imgX * newScale;
      panY = mouseY - imgY * newScale;
      zoom = newZoom;
      clampPan();
      updateTransform();
      if (slider) slider.value = zoom;
      return;
    }

    // Otherwise interpret wheel/trackpad scroll as panning (equivalent to dragging)
    // Prevent page scroll while the modal is open
    e.preventDefault();
    const containerRect = container.getBoundingClientRect();

    // Normalize delta depending on deltaMode
    let deltaX = e.deltaX;
    let deltaY = e.deltaY;
    if (e.deltaMode === 1) { // lines
      const LINE_HEIGHT = 16;
      deltaX *= LINE_HEIGHT;
      deltaY *= LINE_HEIGHT;
    } else if (e.deltaMode === 2) { // pages
      const PAGE_HEIGHT = containerRect.height || 800;
      deltaX *= PAGE_HEIGHT;
      deltaY *= PAGE_HEIGHT;
    }

    // If the user holds Shift, treat vertical scroll as horizontal pan (common UX)
    if (e.shiftKey && Math.abs(deltaY) > 0 && Math.abs(deltaX) === 0) {
      deltaX = deltaY;
      deltaY = 0;
    }

  // Apply deltas to pan (match drag direction so scroll moves the image in the same direction)
  // Invert deltas so scrolling direction matches dragging direction
  panX -= deltaX;
  panY -= deltaY;
    clampPan();
    updateTransform();
  }, { passive: false });

  // Slider zoom (centered on container center)
  if (slider) {
    slider.addEventListener('input', e => {
  const prevZoom = zoom;
  const prevScale = getAppliedScale(prevZoom);
  let newZoom = parseFloat(slider.value);
  newZoom = Math.min(Math.max(1, newZoom), 5);
  const newScale = getAppliedScale(newZoom);
      // If image natural size isn't ready yet, don't run clamp/maths that rely on natural sizes.
      // Instead, wait for load and re-apply the slider change once.
      if (!img.naturalWidth || !img.naturalHeight) {
        const onLoadOnce = () => {
          img.removeEventListener('load', onLoadOnce);
          // Re-run the slider logic now that sizes are available
          // Use container-local center coordinates (not page coordinates)
          const containerRect = container.getBoundingClientRect();
          const centerLocalX = containerRect.width / 2;
          const centerLocalY = containerRect.height / 2;
          const imgX = (centerLocalX - panX) / prevScale;
          const imgY = (centerLocalY - panY) / prevScale;
          panX = centerLocalX - imgX * newScale;
          panY = centerLocalY - imgY * newScale;
          zoom = newZoom;
          clampPan();
          updateTransform();
        };
        img.addEventListener('load', onLoadOnce);
        // Don't try to clamp/update now; wait until we have sizes
        return;
      }
      // Zoom around container center (use local coords)
      const containerRect = container.getBoundingClientRect();
      const centerLocalX = containerRect.width / 2;
      const centerLocalY = containerRect.height / 2;
      // Convert center to image coordinates before transform (use applied scale)
      const prevScale2 = getAppliedScale(prevZoom);
      const imgX = (centerLocalX - panX) / prevScale2;
      const imgY = (centerLocalY - panY) / prevScale2;
      const newScale2 = getAppliedScale(newZoom);
      panX = centerLocalX - imgX * newScale2;
      panY = centerLocalY - imgY * newScale2;
      zoom = newZoom;
  clampPan();
  updateTransform();
      if (slider) slider.value = Math.round(zoom * 100) / 100;
    });
  }

  // Mouse drag pan
  container.addEventListener('mousedown', e => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    panStartX = panX;
    panStartY = panY;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'auto';
  });

  container.addEventListener('mousemove', e => {
    if (!isDragging) return;
    e.preventDefault();
    panX = panStartX + (e.clientX - dragStartX);
    panY = panStartY + (e.clientY - dragStartY);
    clampPan();
    updateTransform();
  });
}



// Reset pan/zoom when opening a new image
function resetPanZoom() {
  zoom = 1;
  panX = 0;
  panY = 0;
  if (slider) slider.value = 1;
  if (img) img.style.transformOrigin = '0 0';
  // Reset container inline sizing so next image can set its own aspect ratio
  if (container) {
    container.style.aspectRatio = '';
    container.style.maxHeight = '';
  }
  requestAnimationFrame(() => {
    clampPan();
    updateTransform();
  });
}

// Optionally, call resetPanZoom() in openImageViewerDialog after setting image.src