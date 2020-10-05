const themeToggle = document.getElementById('theme-switcher');

themeToggle.onchange = handleThemeToggle;
handleThemeToggle();

function handleThemeToggle() {
    if ( themeToggle.checked ) {
        document.body.classList.add('lightmode')
    } else {
        document.body.classList.remove('lightmode')
    }
}


const animatedNumbers = [];
const increaseNumbers = document.querySelectorAll('.card__new-stats span');
increaseNumbers.forEach(function(el) {
    animatedNumbers.push({
        el: el,
        target: parseInt(el.innerText),
        val: 0
    })
})

const animate = setInterval(function() {
    if (animatedNumbers.length < 1) {
        clearInterval(animate)
    }
    for (n in animatedNumbers) {
        const number = animatedNumbers[n]
        number.val = Math.ceil( number.val + (number.target - number.val) * 0.15)
        number.el.innerText = number.val
        if (number.val == number.target) {
            animatedNumbers.splice(n,1)
        }
    }
},30)