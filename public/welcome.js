const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get('firstName');
const lastName = urlParams.get('lastName');
document.getElementById('output').innerText = `First Name: ${firstName}, Last Name: ${lastName}`;