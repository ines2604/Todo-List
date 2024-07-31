const login = document.getElementById("login");
const signup = document.getElementById("signup");
const button = document.getElementById("a");

function change() {
    const text = button.textContent;
    if (text === "Login") {
        signup.classList.add('hidden');
        login.classList.remove('hidden');
        button.textContent = "Signup"; // Changer le texte du bouton pour l'option suivante
    } else {
        signup.classList.remove('hidden');
        login.classList.add('hidden');
        button.textContent = "Login"; // Changer le texte du bouton pour l'option suivante
    }
}

button.onclick = change;