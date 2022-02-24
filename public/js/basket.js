const minuses = document.querySelector('.minus');
const pluses = document.querySelectorAll('.plus');
const input = document.querySelector('.counter');
const price = document.querySelector('.price');

let itemCount = Number(input.value);

function calcFn(operator) {
  switch (operator) {
    case 'minus':
      if (itemCount > 0) {
        itemCount -= 1;
      }
      input.value = itemCount;
      break;
    case 'plus':
      itemCount += 1;
      input.value = itemCount;
      break;
    default:
  }
}

Array.from(pluses).forEach((plus) => {
  plus.addEventListener('click', (e) => {
    console.log(e);
    calcFn('plus');
  });
});

// minus.addEventListener('click', () => {
//   calcFn('minus');
// });

// plus.addEventListener('click', () => {
//   calcFn('plus');
// });
