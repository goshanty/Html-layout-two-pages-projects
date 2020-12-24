(function () {
    document.querySelectorAll('.tabs__item').forEach(function (el, idx) {
        el.addEventListener('click', function (e) {
            document.querySelectorAll('.tabs__item').forEach(function (el) {
                el.classList.remove('is-active')
            });
            e.target.closest('.tabs__item').classList.add('is-active');

            const blockWrapper = document.querySelector('.tabs');
            document.querySelectorAll('.table-wrapper ').forEach(function (el) {
                el.classList.remove('is-active')
            })
            document.querySelectorAll('.table-wrapper ')[idx].classList.add('is-active')
            if (idx === 0) {
                blockWrapper.classList.remove('tabs--light-blue')
                blockWrapper.classList.remove('tabs--blue')
            }
            if (idx === 1) {
                blockWrapper.classList.remove('tabs--blue')
                blockWrapper.classList.add('tabs--light-blue')
            }
            if (idx === 2) {
                blockWrapper.classList.add('tabs--blue')
                blockWrapper.classList.remove('tabs--light-blue')
            }
        })
    })
})();
