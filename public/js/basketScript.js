const mealUls = document.querySelectorAll('.meal-ul');

mealUls.forEach((meal) => {
  meal.addEventListener('click', async (e) => {
    if (e.target.className === 'btnClass') {
      const mealDiv = e.target.closest('.js-meal');
      const mealId = mealDiv.dataset.mealid;
      const liPrice = mealDiv.querySelector('.js-meal-price');
      const mealPrice = liPrice.innerText;
      const mealUl = mealDiv.querySelector('.meal-ul');
      const liButton = e.target.parentNode;

      let jsonRes;
      try {
        const response = await fetch('/addToBasket', {
          method: 'POST',
          credentials: 'include',
          mode: 'same-origin',
          body: JSON.stringify({
            itemId: mealId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        jsonRes = await response.json();
      } catch (error) {
        console.log('Error:', error.message);
      }
      console.log(jsonRes); // счетчик

      if (!jsonRes) {
        return;
      }

      mealUl.removeChild(liButton);
      mealUl.removeChild(liPrice);

      const minusBtn = document.createElement('button');
      minusBtn.innerHTML = '-';
      const plusBtn = document.createElement('button');
      plusBtn.innerHTML = '+';
      const price = document.createElement('span');
      price.innerText = mealPrice;
      const liMinusPricePlus = document.createElement('li');
      liMinusPricePlus.appendChild(minusBtn);
      liMinusPricePlus.appendChild(price);
      liMinusPricePlus.appendChild(plusBtn);
      mealUl.appendChild(liMinusPricePlus);

      minusBtn.addEventListener('click', async (ev) => {
        ev.stopImmediatePropagation();

        let jsonAnswer;
        try {
          const res = await fetch('/removeFrBasket', {
            method: 'DELETE',
            credentials: 'include',
            mode: 'same-origin',
            body: JSON.stringify({ id: mealId }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          jsonAnswer = await res.json();
        } catch (error) {
          console.log('Error:', error.message);
        }

        if (jsonAnswer) {
          console.log(jsonAnswer);
        }
      });

      plusBtn.addEventListener('click', async (event) => {
        event.stopImmediatePropagation();

        let answer;
        try {
          const response = await fetch('/basket/addOne', {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            body: JSON.stringify({
              id: mealId,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          answer = await response.json();
        } catch (error) {
          console.log('Error:', error.message);
        }
        console.log(answer); // счетчик
      });
    }
  });
});

// const itemDivs = document.querySelectorAll('.js-meal');

// itemDivs.forEach((div) => {
//   div.addEventListener('click', async (evnt) => {
//     evnt.stopPropagation();
//     const itemDiv = evnt.target.closest('.js-meal');
//     const itemId = itemDiv.dataset.mealid;

//     let jsonR;
//     try {
//       jsonR = await fetch(`/product/${itemId}`);
//     } catch (error) {
//       console.log('Error', error.message);
//     }
//   });
// });
