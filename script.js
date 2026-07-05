// ==========================================
// 🎨 我的作品清單：以後新增內容「只需要改這裡」！
// ==========================================
const myWorks = [
    { type: 'painting', src: 'painting1.png', label: 'View Painting' },
    { type: 'video',    src: 'https://www.w3schools.com/html/mov_bbb.mp4', label: 'Play Video' },
    
    // 👇 以後有新作品，直接複製下面這一行，貼在括號內，改掉檔名即可！
    // { type: 'painting', src: '你的新畫作.jpg', label: 'View Painting' },
];

// ==========================================
// 🚀 自動渲染系統（自動幫你寫 HTML）
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

// 網頁載入時立刻執行自動裝潢
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    // 你原本寫在 DOMContentLoaded 裡面的「分類按鈕點擊事件」也可以繼續放在這裡面...
});
// 分類篩選邏輯
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 切換按鈕的 active 狀態
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const targetCategory = button.getAttribute('data-target');

        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (targetCategory === 'all' || itemCategory === targetCategory) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});
