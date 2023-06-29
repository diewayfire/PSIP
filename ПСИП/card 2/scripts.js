setTimeout(function() {
    let link = document.querySelector("a").href;
    console.log(link);
  }, 5000);

  const sibling1 = document.getElementById('sibling1');
  const sibling2 = document.getElementById('sibling2');
  const sibling3 = document.getElementById('sibling3');
  
  // Обработчик клика на элементе 3
  sibling3.addEventListener('click', function() {
    const parent = sibling1.parentNode;
    parent.insertBefore(sibling3, sibling2); // Поменять элементы 2 и 3 местами
  });


const button = document.querySelector('button');

button.addEventListener('click', function() {
  sibling1.style.backgroundColor = 'red';
  sibling1.style.color = 'blue';
  sibling1.style.position = 'fixed';
  sibling1.style.bottom = '0';
  sibling1.style.right = '0';
});

const browserInfo = navigator.userAgent;
const windowFeatures = 'width=500,height=300,scrollbars,titlebar';

const newWindow = window.open('about:blank', 'newWindow', windowFeatures);
newWindow.document.write(`<p>${browserInfo}</p>`);
newWindow.document.title = '14 Феклин Алексей Андреевич';