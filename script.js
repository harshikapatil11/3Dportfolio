
    const container = document.querySelector('.bubble-container');

    function createBubble() {
        const bubble = document.createElement('div');
        const size = Math.random() * 100 + 50; // 50px to 150px
        bubble.classList.add('bubble');
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * window.innerWidth}px`;
        bubble.style.top = `${window.innerHeight + size}px`;
        bubble.speed = Math.random() * 1 + 0.5; // speed in px/frame
        container.appendChild(bubble);
        return bubble;
    }

    const bubbles = [];
    for (let i = 0; i < 6; i++) { // number of bubbles
        bubbles.push(createBubble());
    }

    function animateBubbles() {
        bubbles.forEach(bubble => {
            let top = parseFloat(bubble.style.top);
            top -= bubble.speed;
            if (top + bubble.offsetHeight < 0) {
                top = window.innerHeight + bubble.offsetHeight;
                bubble.style.left = `${Math.random() * window.innerWidth}px`;
            }
            bubble.style.top = `${top}px`;
        });
        requestAnimationFrame(animateBubbles);
    }

    animateBubbles();

