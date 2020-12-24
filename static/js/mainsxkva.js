if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;

        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

(function () {
    const inputs = document.querySelectorAll('.registration-page .inputs input');
    inputs.forEach(function(el, idx) {
        el.addEventListener('input', function(e) {
            if (e.inputType !== "deleteContentBackward" && inputs.length - 1 !== idx) {
                inputs[idx + 1].focus();
            }
            if (e.inputType === "deleteContentBackward") {
                inputs[idx - 1].focus();
            }
        });
        el.addEventListener('keydown', function(e) {
            if (e.key === "Backspace" && el.value === "") {
                inputs[idx].value = "";
                inputs[idx - 1].focus();
            }
            if (e.key !== "Backspace" && el.value !== "") {
                inputs[idx + 1].focus();
            }
        })
    });
})();

(function () {
    document.querySelectorAll('.tabs__item').forEach(function (el, idx) {
        el.addEventListener('click', function(e) {
            document.querySelectorAll('.tabs__item').forEach(function(el) {
                el.classList.remove('is-active')
            });
            e.target.closest('.tabs__item').classList.add('is-active');

            const blockWrapper = document.querySelector('.tabs');
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
