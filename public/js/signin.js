const signiForm = document.querySelector('.signinForm');

if (signiForm) {
  signiForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-input').value;
    const password = document.querySelector('#password-input').value;

    const res = await fetch('/user/signin', {
      method: 'POST',
      credentials: 'include',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 200) {
      alert('Вы успешно авторизовались на сайте и сейчас будете перенаправлены на главную');
      window.location = '/';
    } else {
      alert('Вы ввели не правильный логин или пароль. Попробуйте еще раз.');
    }
  });
}
