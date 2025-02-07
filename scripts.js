document.addEventListener("DOMContentLoaded", function () {
    // 🎯 加载导航栏
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            setupOverlayEvents();
        });

    // 🎯 加载 Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);

    // 🎯 处理滚动交互
    setupScrolling();

    // 🎯 鼠标悬停时显示封面图片
    setupProjectHoverEffect();
});

/** 🌟 处理半透明覆盖页面的显示与隐藏 */
function setupOverlayEvents() {
    const overlay = document.querySelector(".overlay");
    const toggleBtn = document.querySelector(".toggle-overlay-btn");
    const closeBtn = document.querySelector(".close-overlay-btn");

    if (toggleBtn && closeBtn && overlay) {
        toggleBtn.addEventListener("click", () => {
            overlay.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
        });
    }
}

/** 🌟 让鼠标、键盘、滚轮、触控板控制滚动 */
function setupScrolling() {
    const scrollContainer = document.querySelector(".horizontal-scroll");
    if (!scrollContainer) return;

    const images = document.querySelectorAll(".image-track img");
    let imageWidth = images[0]?.offsetWidth + 10 || 300; // 预防错误，默认宽度300px

    // 🎯 鼠标点击左右翻页
    scrollContainer.addEventListener("click", (event) => {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;

        if (clickX < screenWidth / 2) {
            scrollContainer.scrollLeft -= imageWidth; // 左侧点击，向左翻页
        } else {
            scrollContainer.scrollLeft += imageWidth; // 右侧点击，向右翻页
        }
    });

    // 🎯 鼠标滚轮（上下滚动控制左右移动）
    scrollContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY > 0 ? imageWidth : -imageWidth;
    });

    // 🎯 键盘方向键控制滚动
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            scrollContainer.scrollLeft += imageWidth;
        } else if (event.key === "ArrowLeft") {
            scrollContainer.scrollLeft -= imageWidth;
        }
    });

    // 🎯 触控板支持横向滑动
    let touchStartX = 0;
    scrollContainer.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
    });

    scrollContainer.addEventListener("touchmove", (event) => {
        const touchEndX = event.touches[0].clientX;
        const distance = touchStartX - touchEndX;
        scrollContainer.scrollLeft += distance * 0.5;
        touchStartX = touchEndX;
    });

    // 🎯 窗口调整时重新计算图片宽度
    window.addEventListener("resize", () => {
        imageWidth = images[0]?.offsetWidth + 10 || 300;
    });
}

/** 🌟 处理鼠标悬停时显示封面图片 */
function setupProjectHoverEffect() {
    const projectTitles = document.querySelectorAll(".project-title");
    const hoverImage = document.querySelector(".project-hover-image");

    if (!hoverImage) return;

    projectTitles.forEach(title => {
        title.addEventListener("mouseenter", () => {
            const imageUrl = title.getAttribute("data-image");
            if (imageUrl) {
                hoverImage.style.display = "block";
                hoverImage.style.background = `url('${imageUrl}') no-repeat center center / cover`;
            }
        });

        title.addEventListener("mouseleave", () => {
            hoverImage.style.display = "none";
        });
    });
}

