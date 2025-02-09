
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
