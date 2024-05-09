const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");


form.addEventListener('input', (event) => {
    const inputElement = event.target;
    if (inputElement.name === 'email') {
        formData.email = inputElement.value.trim();
    } else if (inputElement.name === 'message') {
        formData.message = inputElement.value.trim();
    }
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formData.email.trim() === "" || formData.message.trim() === "") {
        console.log("Please fill in all fields.");
        return; 
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    console.log(formData);

    form.reset();
});

window.addEventListener("load", () => {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }
});


console.log(window.localStorage);
console.log(localStorage);
