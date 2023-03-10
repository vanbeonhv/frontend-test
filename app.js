// --Check valid email input--
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailInput = document.querySelector('.contact__content--input');
const sendBtn = document.querySelector('.contact__content--btn');
const checkValue = () => {
  if (emailInput.value.match(emailRegex)) {
    sendBtn.classList.remove('disabled-btn');
    sendBtn.removeAttribute('disabled');
  } else {
    sendBtn.classList.add('disabled-btn');
    sendBtn.setAttribute('disabled', '');
  }
};

// --Responsive--
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav__links');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const linksList = document.querySelectorAll('.nav__links li a');

menuBtn.onclick = () => {
  const isClose = nav.clientHeight === 0;
  if (isClose) {
    nav.style.display = 'block';
    openIcon.style.display = 'none';
    closeIcon.style.display = 'inline';
  } else {
    nav.style.display = 'none';
    openIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  }
};
console.log(nav.clientHeight);
if (nav.clientHeight !== 52 && nav.clientHeight !== 53) {
  for (let i = 0; i < linksList.length; i++) {
    linksList[i].onclick = () => {
      nav.style.display = 'none';
      openIcon.style.display = 'inline';
      closeIcon.style.display = 'none';
    };
  }
}
