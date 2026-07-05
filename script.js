function openLightbox(type, source) {
    const lightbox = document.getElementById('lightbox');
    const contentBox = document.getElementById('lightbox-content');
    
    // 清空上一次的內容
    contentBox.innerHTML = ''; 

    if (type === 'image') {
        const img = document.createElement('img');
        img.src = source;
        contentBox.appendChild(img);
    } else if (type === 'video') {
        const video = document.createElement('video');
        video.src = source;
        video.controls = true; // 顯示播放進度條
        video.autoplay = true; // 打開自動播放
        contentBox.appendChild(video);
    }

    // 顯示燈箱
    lightbox.classList.add('lightbox-active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const contentBox = document.getElementById('lightbox-content');
    
    // 隱藏燈箱
    lightbox.classList.remove('lightbox-active');
    
    // 清空內容（如果是影片，這會停止播放背景聲音）
    contentBox.innerHTML = '';
}