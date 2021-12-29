// Selectors
const smallStarbucks = document.querySelectorAll('.thumb');
const mainImg = document.querySelector('.cofay');
const circle = document.querySelector('.circle');
let currentImg = 'img1';
const accordion = document.querySelectorAll('.accordion');
const barz = document.querySelector('.bars');
const screen = document.querySelector('.full-screen');
const cross = document.querySelector('#cross');

// Functions
changeImg = (sumthin) => {
    document.querySelector('.cofay').src = sumthin;
}

smallStarbucks.forEach((each) => {
    each.addEventListener('click', (e) => {
        console.log(e.target.src);
        console.log(e.target.className);
        changeImg(`imgs/${e.target.className}.png`);
        if (e.target.className == 'img1') {
            currentImg = 'img1';
            circle.style.backgroundColor = 'white';
            mainImg.style.bottom = '0em';
            if (window.outerWidth > 968) {
                circle.style.backgroundColor = 'tomato';
            }
        }
        else if (e.target.className == 'img2') {
            currentImg = 'img2';
            circle.style.backgroundColor = 'white';
            if (window.outerWidth > 968) {
                circle.style.backgroundColor = 'pink';
            }
        }
        else if (e.target.className == 'img3') {
            currentImg = 'img3';
            mainImg.style.bottom = '1em';
            circle.style.backgroundColor = 'white';
            if (window.outerWidth > 968) {
                circle.style.backgroundColor = 'skyblue';
            }

        }
        else {
            currentImg = 'img1';
            changeImg(`imgs/img1.png`);
            circle.style.backgroundColor = 'white';
        }
    })
})

window.addEventListener('resize', (e) => {
    console.log(window.outerWidth);
    if (window.outerWidth < 1010) {
        circle.style.backgroundColor = 'white';
    }
    else {
        if (currentImg == 'img1') {
            circle.style.backgroundColor = 'tomato';
        }
        else if (currentImg == 'img2') {
            circle.style.backgroundColor = 'pink';
        }
        else {
            circle.style.backgroundColor = 'skyblue';
        }
    }

})


accordion.forEach((each) => {
    each.addEventListener('click', () => {
        let next = each.nextElementSibling;
        console.log(next);

        if (!next.style.maxHeight) {
            next.style.maxHeight = `${next.scrollHeight}px`;
        }
        else {
            next.style.maxHeight = null;
        }
    })
})

barz.addEventListener('click', (e) => {
    screen.classList.toggle('show');
    if (screen.classList.contains('show')) {
        document.querySelector('.fas.fa-times').style.display = 'none';
        document.querySelector('.fas.fa-bars').style.display = 'inline-block';
    }
    else {
        document.querySelector('.fas.fa-times').style.display = 'inline-block';
        document.querySelector('.fas.fa-bars').style.display = 'none';

    }
})