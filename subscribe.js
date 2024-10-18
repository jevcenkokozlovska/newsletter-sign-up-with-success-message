function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const emailInput = document.getElementById('email');
  const form = document.getElementById('subscribe-form');
  const dismiss = document.getElementById('dismiss-btn');
  
  function handleSubmit(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
      document.getElementById('signup-container').style.display = 'none';
      document.getElementById('success-container').style.display = 'grid';
      document.getElementsByClassName('confirmed')[0].innerHTML = email;
    } else {
      document.getElementById('alert').style.display = 'block';
      emailInput.classList.add('signup__form--error');
    }
  }
  
  form.addEventListener('submit', handleSubmit);

  dismiss.addEventListener('click', function() {
    emailInput.classList.remove('signup__form--error');
    location.reload();
  });

  emailInput.addEventListener('focus', function(){
    document.getElementById('alert').style.display = 'none';
    emailInput.classList.remove('signup__form--error');
  });