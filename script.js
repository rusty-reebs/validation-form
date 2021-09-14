// renderForm IIFE

const renderForm = (() => {
  const content = document.querySelector(".content");
  const form = document.createElement("form");
  form.noValidate = true;
  content.appendChild(form);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  const emailSpan = document.createElement("span");
  emailSpan.textContent = "Email Address: ";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.required = true;
  const emailErrorSpan = document.createElement("span");
  emailErrorSpan.classList.add("error");
  emailErrorSpan.setAttribute("aria-live", "polite");
  form.appendChild(emailLabel);
  emailLabel.appendChild(emailSpan);
  emailLabel.appendChild(emailInput);
  emailLabel.appendChild(emailErrorSpan);

  const countryLabel = document.createElement("label");
  countryLabel.setAttribute("for", "country");
  const countrySpan = document.createElement("span");
  countrySpan.textContent = "Country: ";
  const countryInput = document.createElement("input");
  countryInput.name = "country";
  countryInput.type = "text";
  countryInput.id = "country";
  countryInput.placeholder = "Canada";
  countryInput.setAttribute("required", "true");
  countryInput.setAttribute("pattern", "[Cc]anada");
  const countryErrorSpan = document.createElement("span");
  countryErrorSpan.classList.add("error");
  countryErrorSpan.setAttribute("aria-live", "polite");
  form.appendChild(countryLabel);
  countryLabel.appendChild(countrySpan);
  countryLabel.appendChild(countryInput);
  countryLabel.appendChild(countryErrorSpan);

  const postcodeLabel = document.createElement("label");
  postcodeLabel.setAttribute("for", "postcode");
  const postcodeSpan = document.createElement("span");
  postcodeSpan.textContent = "Postal Code: ";
  const postcodeInput = document.createElement("input");
  postcodeInput.setAttribute("name", "postcode");
  postcodeInput.required = true;
  form.appendChild(postcodeLabel);
  postcodeLabel.appendChild(postcodeSpan);
  postcodeLabel.appendChild(postcodeInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "password");
  const passwordSpan = document.createElement("span");
  passwordSpan.textContent = "New Password: ";
  const passwordInput = document.createElement("input");
  passwordInput.setAttribute("name", "password");
  passwordInput.setAttribute("type", "text");
  passwordInput.required = true;
  form.appendChild(passwordLabel);
  passwordLabel.appendChild(passwordSpan);
  passwordLabel.appendChild(passwordInput);

  const passwordConfirmLabel = document.createElement("label");
  passwordConfirmLabel.setAttribute("for", "passwordconfirm");
  const passwordConfirmSpan = document.createElement("span");
  passwordConfirmSpan.textContent = "Confirm Password: ";
  const passwordConfirmInput = document.createElement("input");
  passwordConfirmInput.setAttribute("name", "passwordconfirm");
  passwordConfirmInput.setAttribute("type", "text");
  passwordConfirmInput.required = true;
  form.appendChild(passwordConfirmLabel);
  passwordConfirmLabel.appendChild(passwordConfirmSpan);
  passwordConfirmLabel.appendChild(passwordConfirmInput);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.className = "submitbutton";
  submitButton.innerHTML = "SUBMIT";
  form.appendChild(submitButton);

  return {
    form,
    emailInput,
    countryInput,
    postcodeInput,
    passwordInput,
    passwordConfirmInput,
    submitButton,
    emailErrorSpan,
    countryErrorSpan,
  };
})();

const emailError = document.querySelector("#email + span.error");

renderForm.emailInput.addEventListener("input", () => {
  if (renderForm.emailInput.validity.valid) {
    renderForm.emailErrorSpan.textContent = "";
    renderForm.emailErrorSpan.className = "error";
  } else {
    showError();
  }
});

const countryError = document.querySelector("#country + span.error");

renderForm.countryInput.addEventListener("input", () => {
  if (renderForm.countryInput.validity.valid) {
    renderForm.countryErrorSpan.textContent = "";
    renderForm.countryErrorSpan.className = "error";
  } else {
    showError();
  }
});
renderForm.form.addEventListener("submit", (e) => {
  if (
    !renderForm.emailInput.validity.valid ||
    !renderForm.countryInput.validity.valid
  ) {
    showError();
    e.preventDefault();
  }
});

const showError = () => {
  if (renderForm.emailInput.validity.valueMissing) {
    renderForm.emailErrorSpan.textContent =
      "You need to enter an email address";
  } else if (renderForm.emailInput.validity.typeMismatch) {
    renderForm.emailErrorSpan.textContent =
      "Entered value needs to be an email address";
  } else if (renderForm.countryInput.validity.valueMissing) {
    renderForm.countryErrorSpan.textContent = "You need to enter a country";
  } else if (renderForm.countryInput.validity.patternMismatch) {
    renderForm.countryErrorSpan.textContent = "Country must be Canada";
  }
  renderForm.emailErrorSpan.className = "error active";
};
