const btnSwitch = document.querySelector('#toggle');

btnSwitch.addEventListener('click', () => {
    if (!btnSwitch.classList.contains('activo')) {
        document.body.setAttribute('data-theme', 'dark');
        btnSwitch.classList.add('activo');
    } else {
        document.body.removeAttribute('data-theme', 'dark');
        btnSwitch.classList.remove('activo');
    }
})