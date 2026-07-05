const myWorks = [
    {
        title: "作品名稱 A",
        cover: "painting1.png",
        description: "這是作品的詳細介紹文字，可以放很長，寫關於創作的故事..."
    },
    {
        title: "作品名稱 B",
        cover: "video-thumb.jpg", // 影片的封面圖
        description: "這是影片作品的介紹，說明這部短片的理念。"
    }
];

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = myWorks.map((work, index) => `
        <div class="grid-item" onclick="openModal(${index})">
            <img src="${work.cover}" alt="${work.title}">
            <div class="overlay">${work.title}</div>
        </div>
    `).join('');
}

function openModal(index) {
    const work = myWorks[index];
    const modal = document.getElementById('artwork-modal');
    document.getElementById('modal-body').innerHTML = `
        <h2>${work.title}</h2>
        <img src="${work.cover}" style="width:100%">
        <p>${work.description}</p>
    `;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('artwork-modal').style.display = "none";
}

document.addEventListener('DOMContentLoaded', renderGallery);
