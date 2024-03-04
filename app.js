const scriptURL = 'https://script.google.com/macros/s/AKfycby5esrvxpVZQZg6zy4F4TgfwQq9dNWvtnCz5kRaYpjB7W9GECfHQPJgWDaKhdixw1GCAw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("MERCI! VOTRE FORMULAIRE A ETE SOUMIS AVEC SUCCES." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})