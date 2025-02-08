function buttonClick() :{
    alert('111222')
}
                

/** 🌟 确保 DOM 加载后再执行 JS 逻辑 */
document.addEventListener("DOMContentLoaded", function () {
    let navbarContainer = document.getElementById("navbar-placeholder");
    if (navbarContainer) {
        fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            setupOverlayEvents(); // 绑定半透明页面交互
        });
    } else {
        console.error("⚠️ Error: navbar-placeholder not found in home.html");
    }
});

    // 🎯 加载 Footer
    fetch("footer.html"){
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);

    // 🎯 初始化页面交互
    setupScrolling(); // 处理图片滚动交互
    setupProjectHoverEffect(); // 鼠标悬停显示封面
    setupSummaryTitleNavigation(); // 让 Summary 标题可跳转
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
    let imageWidth = images[0]?.offsetWidth + 10 || 300; // 防止获取不到宽度报错，默认300px

    // 🎯 确保图片加载后更新 imageWidth
    window.addEventListener("load", () => {
        imageWidth = images[0]?.offsetWidth + 10 || 300;
    });
}

    // 🎯 鼠标点击左右翻页
    scrollContainer.addEventListener("click", (event) => {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;
        scrollContainer.scrollLeft += (clickX < screenWidth / 2) ? -imageWidth : imageWidth;
    });

    /** 🌟 让鼠标、键盘、滚轮、触控板控制滚动 */
function setupScrolling() {
    const scrollContainer = document.querySelector(".horizontal-scroll");
    if (!scrollContainer) return;

    const images = document.querySelectorAll(".image-track img");
    let imageWidth = images[0]?.offsetWidth + 10 || 300; // 防止获取不到宽度报错，默认300px

    // 🎯 确保图片加载后更新 imageWidth
    window.addEventListener("load", () => {
        imageWidth = images[0]?.offsetWidth + 10 || 300;
    });

    // 🎯 鼠标滚轮 & Mac 触控板滑动
    scrollContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            scrollContainer.scrollLeft += event.deltaX; // ✅ Mac 触控板两指滑动
        } else {
            scrollContainer.scrollLeft += event.deltaY > 0 ? imageWidth : -imageWidth;
        }
    }, { passive: false });

    // 🎯 触摸屏支持手势滑动（优化）
    let touchStartX = 0;
    let touchScrollLeft = 0;

    scrollContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        touchScrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const touchMoveX = e.touches[0].clientX;
        const distance = touchMoveX - touchStartX;
        scrollContainer.scrollLeft = touchScrollLeft - distance * 1.5;
    }, { passive: false });

    // 🎯 让鼠标 **左键点击** ＝ 左翻，**右键点击** ＝ 右翻
    scrollContainer.addEventListener("mousedown", (event) => {
        if (event.button === 0) { // 左键点击
            scrollContainer.scrollLeft -= imageWidth;
        } else if (event.button === 2) { // 右键点击
            scrollContainer.scrollLeft += imageWidth;
        }
    });

    // 🎯 让键盘 **空格键** 也能翻页（向右）
    window.addEventListener("keydown", (event) => {
        if (event.key === " " || event.key === "Spacebar") {
            event.preventDefault();
            scrollContainer.scrollLeft += imageWidth;
        }
    }, { passive: false });


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

/** 🌟 让 Summary 标题可点击跳转回作品页面 */
function setupSummaryTitleNavigation() {
    const summaryTitle = document.querySelector(".summary-container h2 a");
    if (summaryTitle) {
        summaryTitle.style.cursor = "pointer";
        summaryTitle.addEventListener("click", () => {
            window.history.back(); // 让用户返回到上一页
        });
    }
}
