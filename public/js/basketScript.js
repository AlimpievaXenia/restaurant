const mealUls = document.querySelectorAll('.meal-ul');
console.log(mealUls);

mealUls.forEach((meal) => {
  meal.addEventListener('click', async (e) => {
    if (e.target.className === 'btnClass') {
      console.log(e.target);

      const mealDiv = e.target.closest('[data-itemid]');
      console.log(mealDiv);

      const id = e.target.closest('[data-itemid]').dataset.itemid;
      console.log(id);

      const liPrice = e.target.parentNode.previousElementSibling;
      console.log(liPrice);

      const itemPrice = liPrice.innerText;
      console.log(itemPrice);

      const mealUl = liPrice.parentNode;
      console.log(mealUl);

      const liButton = e.target.parentNode;
      console.log(liButton);

      let jsonRes;
      try {
        const response = await fetch('/addToBasket', {
          method: 'POST',
          credentials: 'include',
          mode: 'same-origin',
          body: JSON.stringify({ id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        jsonRes = await response.json();
      } catch (error) {
        console.log('Error:', error.message);
      }
      console.log(jsonRes);

      if (jsonRes) {
        liPrice.parentNode.removeChild(liButton);
        liPrice.parentNode.removeChild(liPrice);

        const minusBtn = document.createElement('button');
        minusBtn.innerHTML = '-';
        const plusBtn = document.createElement('button');
        plusBtn.innerHTML = '+';
        const price = document.createElement('span');
        price.innerText = itemPrice;
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
              body: JSON.stringify({ id: jsonRes.basketItem.id }),
              headers: {
                'Content-Type': 'application/json',
              },
            });

            jsonAnswer = await res.json();
          } catch (error) {
            console.log('Error:', error.message);
          }

          if (jsonAnswer) {
            console.log(jsonAnswer.deleted);
          }
        });

        plusBtn.addEventListener('click', async (event) => {
          event.stopImmediatePropagation();

          let answer;
          try {
            const response = await fetch('/addToBasket', {
              method: 'POST',
              credentials: 'include',
              mode: 'same-origin',
              body: JSON.stringify({ id }),
              headers: {
                'Content-Type': 'application/json',
              },
            });

            answer = await response.json();
          } catch (error) {
            console.log('Error:', error.message);
          }
          console.log(answer);
        });
      }
    }
  });
});
