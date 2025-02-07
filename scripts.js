// 获取按钮和覆盖页面
const overlay = document.querySelector(".overlay");
const toggleBtn = document.querySelector(".toggle-overlay-btn");
const closeBtn = document.querySelector(".close-overlay-btn");

// 打开覆盖页面
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        overlay.style.display = "flex";
    });
}

// 关闭覆盖页面
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
    });
}
