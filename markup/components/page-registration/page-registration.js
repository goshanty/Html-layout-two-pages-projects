(function () {
    const inputs = document.querySelectorAll('.registration-page .inputs input');
    inputs.forEach((el, idx) => {
        el.addEventListener('input', (e) => {
            if (e.inputType !== "deleteContentBackward" && inputs.length - 1 !== idx) {
                inputs[idx + 1].focus();
            }
            if (e.inputType === "deleteContentBackward") {
                inputs[idx - 1].focus();
            }
        })
        el.addEventListener('keydown', (e) => {
            if (e.key === "Backspace" && el.value === "") {
                inputs[idx].value = "";
                inputs[idx - 1].focus();
            }
            if (e.key !== "Backspace" && el.value !== "") {
                inputs[idx + 1].focus();
            }
        })
    })
})()
