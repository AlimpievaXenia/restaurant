const noCall = document.querySelector('.noCall');
console.log(noCall);
const call = document.querySelector('.operatorCall');
noCall.addEventListener('click', () => {
  call.checked = false;
});
call.addEventListener('click', () => {
  noCall.checked = false;
});
