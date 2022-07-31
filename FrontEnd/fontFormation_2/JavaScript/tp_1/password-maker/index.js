const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é\"'((?:\\.|[^\\'])*)'@`~#{`+-|ù$!çà=è_ç";
const rangeValues = document.getElementById("password-length");
const outputPasswords = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (let i = 0; i < rangeValues.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  outputPasswords.value = password;

  outputPasswords.select();
  document.execCommand("copy", true);

  generateButton.textContent = "Copy !";
  setTimeout(function () {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
