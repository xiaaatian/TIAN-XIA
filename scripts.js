document.addEventListener("DOMContentLoaded", function () {
    // 加载导航栏
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            setupOverlayEvents();
        });

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
