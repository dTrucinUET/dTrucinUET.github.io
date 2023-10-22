const animatedElements = document.querySelectorAll('.animated-element');
animatedElements.forEach(element => {
    element.addEventListener('click', () => {
        element.style.transform = 'scale(1.5)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 1000);
    });
});

const block1 = document.getElementById('block-1');
const block2 = document.getElementById('block-2');
const block3 = document.getElementById('block-3');

block1.addEventListener('click', () => {
    const info = block1.querySelector('.animated-element').getAttribute('data-info');
    showInfo(info);
});

block2.addEventListener('click', () => {
    const info = block2.querySelector('.animated-element').getAttribute('data-info');
    showInfo(info);
});

function showInfo(info) {
    block3.innerHTML = `<p>${info}</p>`;
    block3.style.display = 'block';
}

