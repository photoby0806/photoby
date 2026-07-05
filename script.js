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
