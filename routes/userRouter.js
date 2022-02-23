const router = require('express').Router();
const { User } = require('../db/models');
const { noSessionChecker, haveSession } = require('../middlewares/auth');

// Регистрация
router
  .route('/signup')
  .get(haveSession, (req, res) => {
    res.render('signup', { title: 'РЕГИСТРАЦИЯ' });
  })
  .post(haveSession, async (req, res) => {
    const {
      name, email, password, phone,
    } = req.body;

    // Проверка есть ли такой юзер в БД
    let userFound = await User.findOne({ where: { email } });

    // Если юзер не найден, создаем его в БД и присваиваем сессию
    if (!userFound) {
      userFound = await User.create({
        name, email, password, phone,
      });
      req.session.login = email; // устанавливаем сессию, привязанную к значению email
      res.locals.login = userFound.email; // устанавливем значение для hbs
      res.redirect('/');
    }
  });

// Авторизация
router
  .route('/signin')
  .get(haveSession, (req, res) => {
    res.render('signin', { title: 'АВТОРИЗАЦИЯ' });
  })
  .post(haveSession, async (req, res) => {
    const { name, password } = req.body;

    // Проверка есть ли такой юзер в БД
    const userFound = await User.findOne({ name });

    // Если юзер не найден, отправляем ошибку
    if (!userFound) {
      return res.sendStatus(401).json();
    }

    // Проверяем верный пароль ввел юзер или нет
    if (userFound.password === password) {
      req.session.login = userFound.email; // устанавливаем сессию, привязанную к значению email (именно в этот момент создаются куки)
      res.locals.login = userFound.email; // устанавливем значение для hbs
      return res.sendStatus(200).json();
    }

    // Иначе отправляем ошибку
    return res.sendStatus(401).json();
  });

// Выход из учетной записи
router
  .route('/logout')
  .get(noSessionChecker, async (req, res) => {
    // console.log('noSessionChecker>>>')

    await req.session.destroy(); // удаляем сессию
    if (req.cookies.myCookie) {
      res.clearCookie('myCookie'); // удаляем куки
    }
    res.redirect('/'); // FIXME: Если нет кук и перейти по ссылке логаута, то будет большая ошибка в терминале
  });

module.exports = router;
