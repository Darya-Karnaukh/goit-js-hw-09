const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textArea = form.elements.message;

const localStorageKey = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
    const saveForm = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
    textArea.value = saveForm.message ?? '';
    input.value = saveForm.email ?? '';
});

form.addEventListener('input', (event) => {
    localStorage.setItem(localStorageKey, JSON.stringify({
        email: form.elements.email.value,
        message: form.elements.message.value,
    })
    );
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailForm = input.value.trim();
    const messageForm = textArea.value.trim();

    if (emailForm === '' || messageForm === '') {
    alert('Fill please all fields');
    return;
    }

    console.log({
    email: emailForm,
    message: messageForm,
    });
    localStorage.removeItem(localStorageKey);
        form.reset();
});