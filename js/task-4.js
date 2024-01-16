const form = document.querySelector('form');

let user = {
  email: "",
  password: "",
};


form.addEventListener("submit", event => {
    event.preventDefault();
    const forma = event.target;
    const email = forma.elements.email.value;
    const password = forma.elements.value;

    if (email === "" || password === "" ){
        return alert('All form fields must be filled in');
    }
    else{
        user.email = email;
        user.password = password;
        console.log(user);

    }
    form.reset();
})
