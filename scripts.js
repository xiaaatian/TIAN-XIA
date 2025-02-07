document.addEventListener("DOMContentLoaded", function () {
    // 加载导航栏
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            setupOverlayEvents(); // 确保 overlay 事件绑定
        })
        .catch(error => console.error("Error loading navbar:", error));

    // 加载 Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));

    // 设置 Overlay 按钮的点击事件
    function setupOverlayEvents() {
        setTimeout(() => {
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
        }, 100); // 加入延迟，确保元素已经加载到 DOM
    }
});
