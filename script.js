const darkBtn = document.querySelector('.dark-button');
const html = document.querySelector('html');
const devimg = document.querySelector('.dev-image');
const darksvgArray = document.querySelectorAll('.dark-svg');
const shadowToggle = document.querySelectorAll('.shadow-toggle');
const darkModeBtnImages = document.querySelectorAll('.dark-button-image');

const toggleDarkmode =()=>{
    html.classList.toggle('dark');
    // html.classList.contains('dark')
    // ? devimg.src = '../images/3323617_1.png'
    // : devimg.src = '../images/3323617.png';

    shadowToggle.forEach( section => {
        section.classList.toggle('shadow-dark');
        section.classList.toggle('shadow-lg');
    } )

    darkModeBtnImages.forEach( image => image.classList.toggle('hidden') );

    darksvgArray.forEach(svg => {
        svg.classList.toggle('dark-svg');
        svg.classList.toggle('light-svg');


});
}

darkBtn.addEventListener('click',toggleDarkmode)