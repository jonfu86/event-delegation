const container = document.getElementById('container');
const boxes = Array.from(document.getElementsByClassName('box'));
const Ps = Array.from(document.getElementsByTagName('p'));

const handleClick = (e) => {
  alert('container clicked');
  e.target.classList.toggle('red');
}

//WITH EVENT DELEGATION

// const handleClick = (e) => {
//   console.log(e.target);
//   const target = e.target;
//   if (target.tagName === 'P'){
//     target.classList.toggle('orange');
//     alert(`${target.innerHTML} clicked`);
//   }

//   if (target.tagName === 'DIV'){
//     if(target.classList.contains('box')){
//       target.classList.toggle('pink');
//       alert('box clicked');
//     }

//     if(target.classList.contains('container')) {
//       alert('container clicked');
//       target.classList.toggle('red');
//     }
//   }
// }

const handleBoxClick = (e) => {
  e.target.classList.toggle('pink');
  alert('box clicked');

}

const handlePClick = (e) => {
  e.target.classList.toggle('orange');
  alert(`${e.target.innerHTML} clicked`);
  e.stopPropagation();
  e.preventDefault();
}

container.addEventListener("click", handleClick);
//CAN COMMENT OUT BELOW CODE WHEN USING EVENT DELEGATION
boxes.forEach(box => {box.addEventListener('click', handleBoxClick)});
Ps.forEach(p => {p.addEventListener('click', handlePClick)});































// const handleClick = (e) => {
//   console.log(e.target);
//   const target = e.target;
//   if (target.tagName === 'P'){
//     target.classList.toggle('orange');
//     alert(`${target.innerHTML} clicked`);
//   }

//   if (target.tagName === 'DIV'){
//     if(target.classList.contains('box')){
//       target.classList.toggle('pink');
//       alert('box clicked');
//     }

//     if(target.classList.contains('container')) {
//       alert('container clicked');
//       target.classList.toggle('red');
//     }
//   }
// }