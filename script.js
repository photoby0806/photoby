// ==========================================
// 🎨 我的作品清單：以後新增圖片或影片「只需要改這裡」！
// ==========================================
const myWorks = [
    // 範例 1：這是一幅畫作 (圖片)
    { 
        type: 'painting', 
        src: 'painting1.png', 
        label: 'View Painting' 
    },
    
    // 範例 2：這是一部影片 (可以使用你上傳到 GitHub 的影片檔名，如 'my-video.mp4')
    { 
        type: 'video',    
        src: 'https://www.w3schools.com/html/mov_bbb.mp4', 
        label: 'Play Video' 
    },
    
    // 👇 以後有新的影片，直接複製下面這行，改掉 src 的檔名即可：
    // { type: 'video', src: 'your-new-animation.mp4', label: 'Play Video' },
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
// 🔍 燈箱彈出功能 (Lightbox)
// ==========================================
function openLightbox(type, source) {
    const lightbox = document.getElementById('lightbox');
    const contentBox = document.getElementById('lightbox-content');
    
    // 清空舊內容
    contentBox.innerHTML = '';
    
    if (type === 'image') {
        // 圖片與防盜遮罩
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';

        const img = document.createElement('img');
        img.src = source;
        wrapper.appendChild(img);

        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0'; overlay.style.left = '0';
        overlay.style.width = '100%'; overlay.style.height = '100%';
        overlay.style.backgroundColor = 'transparent';
        wrapper.appendChild(overlay);

        contentBox.appendChild(wrapper);
    } else if (type === 'video') {
        // 影片燈箱放大：自動播放、有關鍵控制列
        const video = document.createElement('video');
        video.src = source;
        video.controls = true;
        video.autoplay = true;
        video.style.maxWidth = '85vw';
        video.style.maxHeight = '85vh';
        contentBox.appendChild(video);
    }
    
    lightbox.classList.add('lightbox-active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const contentBox = document.getElementById('lightbox-content');
    
    // 關閉時停止影片播放
    const video = contentBox.querySelector('video');
    if (video) video.pause();
    
    lightbox.classList.remove('lightbox-active');
}

// ==========================================
// 🎛️ 分類篩選按鈕功能
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. 先繪製畫廊
    renderGallery();

    // 2. 綁定分類按鈕點擊事件
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 切換按鈕 active 樣式
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const target = button.getAttribute('data-target');

            // 隱藏或顯示對應分類
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
