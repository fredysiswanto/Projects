const contentBox = document.querySelector('.content-box');

contentBox.addEventListener('click', () => {
  contentBox.classList.add('flip');
  setTimeout(() => contentBox.classList.remove('flip'), 2000);
  contentBox.innerHTML = '<h2>cendol</h2>';
});
