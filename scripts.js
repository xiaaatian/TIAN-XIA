document.addEventListener("DOMContentLoaded", function () {
    // 加载导航栏
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            setupOverlayEvents();
        });
    
    // 获取滚动容器
    const scrollContainer = document.querySelector('.horizontal-scroll');
    const images = document.querySelectorAll(".image-track img")
    let imageWidth = images[0].offsetWidth + 10;

    document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".horizontal-scroll"); // 选取滚动容器
    const images = document.querySelectorAll(".image-track img"); // 获取所有图片
    let imageWidth = images[0].offsetWidth + 10; // 计算每张图片的宽度（包含间距）

    // 🎯 鼠标点击翻页（左侧区域向左，右侧区域向右）
    scrollContainer.addEventListener("click", (event) => {
        const clickX = event.clientX; // 获取点击位置
        const screenWidth = window.innerWidth; // 获取屏幕宽度

        if (clickX < screenWidth / 2) {
            // 点击左侧 → 向左翻页
            scrollContainer.scrollLeft -= imageWidth;
        } else {
            // 点击右侧 → 向右翻页
            scrollContainer.scrollLeft += imageWidth;
        }
    });

    // 🎯 鼠标滚轮（上下滚动控制左右移动）
    scrollContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY > 0 ? imageWidth : -imageWidth;
    });

    // 🎯 键盘左右键控制
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            scrollContainer.scrollLeft += imageWidth; // 右箭头，向右移动一张图
        } else if (event.key === "ArrowLeft") {
            scrollContainer.scrollLeft -= imageWidth; // 左箭头，向左移动一张图
        }
    });

    // 🎯 窗口调整时重新计算图片宽度
    window.addEventListener("resize", () => {
        imageWidth = images[0].offsetWidth + 10;
    });
});


    // 加载 Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
        
    // 鼠标悬停时显示封面图片
    const projectTitles = document.querySelectorAll(".project-title");
    const hoverImage = document.querySelector(".project-hover-image");

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

    // 处理半透明覆盖页面的显示与隐藏
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
});

