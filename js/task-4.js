const form = document.querySelector('form');

let user = {
  email: "",
  password: "",
};

form.addEventListener("submit", event => {
  event.preventDefault();
  const forma = event.target;
  const email = forma.elements.email.value.trim();
  const password = forma.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert('All form fields must be filled in');
  } else {
    user.email = email;
    user.password = password;
    console.log(user);
  }
  form.reset();
});
