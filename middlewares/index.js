/* eslint-disable global-require */
module.exports = function (app) {
  const express = require('express');
  const cookieParser = require('cookie-parser');
  const session = require('express-session');
  const morgan = require('morgan');
  const path = require('path');
  const hbs = require('hbs');
  const FileStore = require('session-file-store')(session);

  app.use(morgan('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // создаем сессии и записываем в БД

  app.use(
    session({
      store: new FileStore(),
      secret: process.env.SECRET ?? 'test',
      resave: true,
      saveUninitialized: false,
      name: 'myCookie', // указываем название наших куки
      cookie: { httpOnly: true, maxAge: 60000000 },
    }),
  );

  // Передаем сессии на все hbs
  app.use((req, res, next) => {
    res.locals.login = req.session?.login;
    next();
  });

  // Подключаем статику для фронтенда
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // Подключаем views(hbs) и partials
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'hbs');
  hbs.registerPartials(path.join(__dirname, '..', 'views', 'partials'));
};
