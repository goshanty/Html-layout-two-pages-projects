(function () {
    document.querySelectorAll('.tabs__item').forEach(el => {
        el.addEventListener('click', (e) => {
            document.querySelectorAll('.tabs__item').forEach(el=> el.classList.remove('is-active'));
            e.target.closest('.tabs__item').classList.add('is-active')
        })
    })
})()
