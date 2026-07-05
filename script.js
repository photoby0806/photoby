// ==========================================
// 🎨 我的作品清單
// ==========================================
const myWorks = [
    { 
        type: 'painting', 
        src: 'painting1.png', 
        label: 'View Painting' 
    },
    { 
        type: 'video',    
        src: 'https://www.w3schools.com/html/mov_bbb.mp4', 
        label: 'Play Video' 
    }
];

// ==========================================
// 🚀 自動網格渲染系統
// ==========================================
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = myWorks.map(work => {
        if (work.type === 'painting') {
            return `
                <div class="gallery-item" data-category="painting" onclick="openLightbox('image', '${work.src}')">
                    <img src="${work.src}" alt="Toby Lam Artwork">
                    <div class="preview-overlay">🔍 ${work.label}</div>
                </div>
            `;
        } else if (work.type === 'video') {
            return `
                <div class="gallery-item" data-category="video" onclick="openLightbox('video', '${work.src}')">
                    <video src="${work.src}" muted loop onmouseover="this.play()" onmouseout="this.pause()"></video>
                    <div class="play-icon">▶</div>
                    <div class="preview-overlay">▶ ${work.label}</div>
                </div>
            `;
        }
    }).join('');
}

// ==========================================
// 🔍 燈箱彈出功能
// ==========================================
function openLightbox(type, source) {
    const lightbox = document.getElementById('lightbox');
    const contentBox = document.getElementById('lightbox-content');
    contentBox.innerHTML = '';
    
    if (type === 'image') {
        const img = document.createElement('img');
        img.src = source;
        contentBox.appendChild(img);
    } else if (type === 'video') {
        const video = document.createElement('video');
        video.src = source;
        video.controls = true;
        video.autoplay = true;
        contentBox.appendChild(video);
    }
    lightbox.classList.add('lightbox-active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const contentBox = document.getElementById('lightbox-content');
    const video = contentBox.querySelector('video');
    if (video) video.pause();
    lightbox.classList.remove('lightbox-active');
}

// ==========================================
// 🎛️ 分類篩選按鈕功能
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const target = button.getAttribute('data-target');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (target === 'all' || category === target) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
