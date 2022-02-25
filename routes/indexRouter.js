const express = require('express');
const { Item, Category, Photo } = require('../db/models/index');

const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await Category.findAll({ raw: true });
  let coldSnacks;
  try {
    coldSnacks = await Item.findAll({
      raw: true,
      include: [
        {
          model: Category,
          where: { title: 'Холодные закуски' },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });
  } catch (error) {
    res.status(503).render('error', { error: error.message });
  }
  // console.log(coldSnacks);

  let hotSnacks;
  try {
    hotSnacks = await Item.findAll({
      raw: true,
      include: [
        {
          model: Category,
          where: { title: 'Горячие закуски' },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });
  } catch (error) {
    res.status(503).render('error', { error: error.message });
  }
  // console.log(hotSnacks);

  let meatMeals;
  try {
    meatMeals = await Item.findAll({
      raw: true,
      include: [
        {
          model: Category,
          where: { title: 'Мясные блюда' },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });
  } catch (error) {
    res.status(503).render('error', { error: error.message });
  }
  // console.log(meatMeals);

  let soups;
  try {
    soups = await Item.findAll({
      raw: true,
      include: [
        {
          model: Category,
          where: { title: 'Супы' },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });
  } catch (error) {
    res.status(503).render('error', { error: error.message });
  }
  // console.log(soups);

  let fishMeals;
  try {
    fishMeals = await Item.findAll({
      raw: true,
      include: [
        {
          model: Category,
          where: { title: 'Рыбные блюда' },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });
  } catch (error) {
    res.status(503).render('error', { error: error.message });
  }
  // console.log(fishMeals);

  let bbqMeals;
  try {
    bbqMeals = await Item.findAll({
      raw: true,
      include: [
        {
          model: Category,
          where: { title: 'Гриль меню' },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });
  } catch (error) {
    res.status(503).render('error', { error: error.message });
  }
  // console.log(bbqMeals);

  let specialMeals;
  try {
    specialMeals = await Item.findAll({
      raw: true,
      include: [
        {
          model: Category,
          where: { title: 'Фирменные блюда' },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });
  } catch (error) {
    res.status(503).render('error', { error: error.message });
  }
  // console.log(specialMeals);

  let drinks;
  try {
    drinks = await Item.findAll({
      raw: true,
      include: [
        {
          model: Category,
          where: { title: 'Напитки' },
          required: true,
        },
        {
          model: Photo,
          required: true,
        },
      ],
    });
  } catch (error) {
    res.status(503).render('error', { error: error.message });
  }
  // console.log(drinks);

  res.render('index', {
    categories,
    coldSnacks,
    hotSnacks,
    meatMeals,
    soups,
    fishMeals,
    bbqMeals,
    specialMeals,
    drinks,
  });
});

module.exports = router;
