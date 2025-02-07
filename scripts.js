document.addEventListener("DOMContentLoaded", function () {
    // 加载导航栏
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            setupOverlayEvents();
        });

    // 加载 Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
    
    // 获取滚动容器
    const scrollContainer = document.querySelector('.horizontal-scroll');
    const images = document.querySelectorAll(".image-track img")
    let imageWidth = images[0].offsetWidth + 10;

    // 添加鼠标滚轮和触摸板事件监听
    scrollContainer.addEventListener('wheel', (event) => {
        event.preventDefault(); // 阻止默认垂直滚动
        scrollContainer.scrollLeft += event.deltaY > 0 ? imageWidth : -imageWidth; // 根据滚轮方向滚动
    });

    //键盘左右键监听
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            scrollContainer.scrollLeft += imageWidth; 
        } else if (event.key === "ArrowLeft") {
            scrollContainer.scrollLeft -= imageWidth; 
        }

        // 窗口调整时重新计算图片宽度
        window.addEventListener("resize", () => {
            imageWidth = images[0].offsetWidth + 10;
        });


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

