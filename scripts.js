document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const toggleBtn = document.querySelector(".toggle-overlay-btn");
    const closeBtn = document.querySelector(".close-overlay-btn");

    if (toggleBtn && closeBtn && overlay) {
        // 打开覆盖页面
        toggleBtn.addEventListener("click", () => {
            overlay.style.display = "flex";
        });

        // 关闭覆盖页面
        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
        });
    }
});
