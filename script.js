function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('open'); // Toggle dropdown visibility
}

function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.classList.add('open'); // Show modal
    modalImage.src = src;  // Set modal image source to clicked image
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('open'); // Hide modal
}


document.querySelectorAll('.sub-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // ป้องกันการนำทาง
        
        // ลบคลาส selected จากลิงก์ทั้งหมด
        document.querySelectorAll('.link').forEach(link => {
            link.classList.remove('selected');
        });

        // เพิ่มคลาส selected ให้กับ Continent และ Asia
        document.getElementById('continent-link').parentElement.classList.add('selected');
        document.getElementById('asia-link').parentElement.classList.add('selected');
    });
});
