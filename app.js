// Подключаем необходимые библиотеки и миддлвэры
require('dotenv').config();
const express = require('express');
const useMiddleware = require('./middlewares');
const useErrorHandlers = require('./middlewares/error-handlers');

// Подключаем миддлвэр и роуты
const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
const navRouter = require('./routes/navRouter');
const scroll = require('./routes/scroll');

// Запускаем экспресс и пропускаем через миддлвэры
const app = express();
useMiddleware(app);

// Подключаемся к БД
const { PORT } = process.env ?? 3000;
const checkDb = require('./helpers/checkDB');

// Используем роуты
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/nav', navRouter);
app.use('/', scroll);

// Если ни один из роутов не сработал, показываем ошибки
useErrorHandlers(app);

// Запускаем сервер
app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port', PORT);
  checkDb();
});
