const background = document.getElementById('background');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    background.style.background = `linear-gradient(${x * 360}deg, #26495e, #91abbd)`;
});

