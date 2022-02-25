const signupForm = document.querySelector('.singnupForm');

if (signupForm) {
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-input').value;
    const email = document.querySelector('#email-input').value;
    const password = document.querySelector('#password-input').value;

    // console.log(username, email, password);

    const res = await ('/user/signup', {
      method: 'POST',
      credentials: 'include',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (res.status === 200) {
      alert('Вы успешно зарегистрировались и сейчас будете перенаправлены на главную');
      window.location = '/';
    } else {
      alert('Ошибка регистрации, на указанный email уже зарегистрирован аккаунт.');
    }
  });
}
