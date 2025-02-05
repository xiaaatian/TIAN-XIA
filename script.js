// 图片数组
const images = [
    'images/plantasia1.jpg',
    'images/plantasia2.jpg',
    'images/plantasia3.jpg',
];

// 当前图片索引
let currentIndex = 0;

// 获取图片元素
const slideshowImage = document.getElementById('slideshow-image');

// 改变图片
function changeSlide(direction) {
    currentIndex += direction;

    // 循环显示图片
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // 更新图片源
    slideshowImage.src = images[currentIndex];
}
