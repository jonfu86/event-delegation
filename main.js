const toggleOffInput = document.getElementById('radio-one');
const toggleOnInput = document.getElementById('radio-two');
const container = document.getElementById('container');
const boxes = Array.from(document.getElementsByClassName('box'));
const paragraphs = Array.from(document.getElementsByTagName('p'));

//WITHOUT EVENT DELEGATION
const handleNoDelegationClick = (e) => {
  console.log('container clicked');
  e.target.classList.toggle('red');
}

const handleBoxClick = (e) => {
  e.target.classList.toggle('pink');
  console.log('box clicked');

}

const handleParagraphClick = (e) => {
  e.target.classList.toggle('orange');
  console.log(`${e.target.innerHTML} clicked`);
}

//WITH EVENT DELEGATION
const handleDelegationClick = (e) => {
  const target = e.target;
  if (target.tagName === 'P'){
    target.classList.toggle('orange');
    console.log(`${target.innerHTML} clicked`);
  }

  if (target.tagName === 'DIV'){
    if(target.classList.contains('box')){
      target.classList.toggle('pink');
      console.log('box clicked');
    }

    if(target.classList.contains('container')) {
      console.log('container clicked');
      target.classList.toggle('red');
    }
  }
}


const updateEventListeners = (useDelegation) => {
  
  if(useDelegation) {
    //remove existing listeners
    container.removeEventListener("click", handleNoDelegationClick);
    boxes.forEach(box => {box.removeEventListener('click', handleBoxClick)});
    paragraphs.forEach(p => {p.removeEventListener('click', handleParagraphClick)});
    //add new listeners
    container.addEventListener("click", handleDelegationClick);
  } else {
    //remove existing listeners
    container.removeEventListener("click", handleDelegationClick);
    //add new listners
    container.addEventListener("click", handleNoDelegationClick)
    boxes.forEach(box => {box.addEventListener('click', handleBoxClick)});
    paragraphs.forEach(p => {p.addEventListener('click', handleParagraphClick)});
  }
  console.log("using delegation: ", useDelegation);
}

//TOGGLE LOGIC
toggleOnInput.addEventListener("click", () => {updateEventListeners(true)});
toggleOffInput.addEventListener("click", () => {updateEventListeners(false)});


updateEventListeners(false);





























// const handleClick = (e) => {
//   console.log(e.target);
//   const target = e.target;
//   if (target.tagName === 'P'){
//     target.classList.toggle('orange');
//     console.log(`${target.innerHTML} clicked`);
//   }

//   if (target.tagName === 'DIV'){
//     if(target.classList.contains('box')){
//       target.classList.toggle('pink');
//       console.log('box clicked');
//     }

//     if(target.classList.contains('container')) {
//       console.log('container clicked');
//       target.classList.toggle('red');
//     }
//   }
// }