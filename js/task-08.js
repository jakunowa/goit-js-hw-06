const form = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();
  console.log(event)

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Proszę uzupełnić wsystkie pola");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
};

form.addEventListener("submit", submitHandler);

