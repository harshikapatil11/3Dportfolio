const container = document.querySelector('.bubble-container');

    function createBubble() {
        const bubble = document.createElement('div');
        const size = Math.random() * 100 + 50; // 50px to 150px
        bubble.classList.add('bubble');
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * window.innerWidth}px`;
        bubble.style.top = `${window.innerHeight + size}px`;
        bubble.dataset.speed = Math.random() * 1 + 0.5; // store speed as data
        container.appendChild(bubble);
        return bubble;
    }

    const bubbles = [];
    for (let i = 0; i < 10; i++) { // Increase number of bubbles if you want
        bubbles.push(createBubble());
    }

    function animateBubbles() {
        bubbles.forEach(bubble => {
            let top = parseFloat(bubble.style.top);
            let speed = parseFloat(bubble.dataset.speed);
            top -= speed;
            if (top + bubble.offsetHeight < 0) {
                top = window.innerHeight + bubble.offsetHeight;
                bubble.style.left = `${Math.random() * window.innerWidth}px`;
            }
            bubble.style.top = `${top}px`;
        });
        requestAnimationFrame(animateBubbles);
    }

    animateBubbles();