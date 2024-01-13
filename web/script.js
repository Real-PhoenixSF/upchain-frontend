document.addEventListener("DOMContentLoaded", function() {
    const dotContainer = document.getElementById("dots-container");
    const dotCount = 100;

    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dotContainer.appendChild(dot);

        const size = Math.random() * 5 + 1;
        const left = Math.random() * window.innerWidth + "px";
        const top = Math.random() * window.innerHeight + "px";
        const animationDuration = (Math.random() * 4 + 2) + "s";

        dot.style.width = size + "px";
        dot.style.height = size + "px";
        dot.style.left = left;
        dot.style.top = top;
				dot.style.animationDuration = animationDuration;
        dot.style.zIndex = "-999";
    }
});
