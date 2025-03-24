document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("hiTag");
    const postButton = document.getElementById("postButton");

    function checkForm() {
        const inputs = form.querySelectorAll("input, textarea, select");
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute("required") && !input.value.trim()) {
                isValid = false;
            }
        });

        postButton.disabled = !isValid;
    }

    form.addEventListener("input", checkForm);

    // Initial check in case fields are pre-filled
    checkForm();

    postButton.addEventListener("click", function () {
        if (!postButton.disabled) {
            window.location.href = "p5.html";
        }
    });
});
