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
    
    // 让鼠标滚轮可以横向滚动
    const scrollContainer = document.querySelector(".horizontal-scroll-container");

    if (scrollContainer) {
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY * 1.2; // 控制滚动速度
        });
    }

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

