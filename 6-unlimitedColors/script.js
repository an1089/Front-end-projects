const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const color = document.querySelector('#random');

start.addEventListener('click', () => {
    const interval = setInterval(() => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = '#' + randomColor;
        color.innerHTML = `The random Color is ${randomColor}`;
    }, 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    });
});
