document.getElementById("goBackButton").addEventListener("click", goBack);

function goBack() {
  window.location.href = "../index.html";
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


document.getElementById("registrationForm").addEventListener("submit", triggerAlert);

function triggerAlert() {
  alert("Cadastro feito com sucesso");
}  

// FUNCAO PARA COLOCAR HEADER

function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(elmnt => {
      const file = elmnt.getAttribute('include-html');
      if (file) {
          fetch(file)
              .then(response => response.text())
              .then(data => {
                  elmnt.innerHTML = data;
                  elmnt.removeAttribute('include-html');
              })
              .catch(err => console.error('Error loading file:', err));
      }
  }); 
}