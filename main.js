const container = document.getElementById('container');
const box1 = document.getElementById('box1');
const text1 = document.getElementById('text1');

const handleClick = (e) => {
  // console.log(e.target);
  console.log('container clicked');
  e.target.classList.toggle('red');

}

const handleBox1Click = (e) => {
  e.target.classList.toggle('pink');
  console.log('box 1 clicked');
}

const handleText1Click = (e) => {
  e.target.classList.toggle('orange');
  console.log('text 1 clicked');
  // e.stopPropagation();
}

container.addEventListener("click", handleClick);
box1.addEventListener('click', handleBox1Click);
text1.addEventListener('click', handleText1Click);