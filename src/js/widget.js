document.addEventListener;
export default class Widget {
  constructor(boxSelector) {
    this.box = document.querySelector(boxSelector);
  }

  boxShow() {
    const squareList = this.box.querySelectorAll('.square');
    const play = setInterval(() => {
      const activeSquare = squareList[Math.floor(Math.random() * squareList.length)];
      activeSquare.classList.add('img');
      setTimeout(() => {
        activeSquare.classList.remove('img');
      }, 500);
    }, 600);

    document.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        clearInterval(play);
        document.querySelector('span').textContent = 'Bye!';
      }
    });
  }
}
