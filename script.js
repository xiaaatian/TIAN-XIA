// 图片列表
const images = [
    "images/plantasia1.jpg",
    "images/plantasia2.jpg",
    "images/plantasia3.jpg",
    "images/plantasia4.jpg"
];

// 当前显示的图片索引
let currentIndex = 0;

// 获取图片元素
const galleryImage = document.getElementById("gallery-image");

// 切换图片函数
function changeImage(direction) {
    // 更新索引
    currentIndex += direction;

    // 循环图片索引
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // 回到最后一张
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // 回到第一张
    }

    // 更新图片 src
    galleryImage.src = images[currentIndex];
}
