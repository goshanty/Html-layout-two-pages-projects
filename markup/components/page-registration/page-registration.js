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
