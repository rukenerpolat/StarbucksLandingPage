const imgSlider = (anything) => {
    const starbucksImg = document.querySelector('.starbucks');
    starbucksImg.src = anything;
}

const changeCircleColor = (color) => {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

const toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}