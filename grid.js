// Get the modal and modal image elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// Get all images inside the grid
const images = document.querySelectorAll('.image-item img');

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('open'); // Show modal
        modalImage.src = image.src;  // Set modal image source to clicked image
    });
});
// ปิด modal เมื่อคลิกที่ภาพ
modal.addEventListener('click', () => {
    modal.classList.remove('open');
});