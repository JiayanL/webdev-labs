let currentFont = 1.4;

const makeBigger = () => {
   alert('make bigger!');
   currentFont += 0.2;
   setFont();
};

const makeSmaller = () => {
   alert('make smaller!');
   currentFont -= .2;
   setFont();
};

const setFont = () => {
    document.querySelector('.content').style.fontSize = `${currentFont}em`;
    document.querySelector('h3').style.fontSize = `${currentFont + 0.5}em`;

};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

