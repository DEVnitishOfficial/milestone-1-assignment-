

const addItemBtn = document.getElementById('listButton')
const listContainer = document.getElementById('listOutput')
let currentListItemIndex = 0;
const audio = new Audio(`./voice.mp3`);
 

addItemBtn.addEventListener('click', () => {
  if (currentListItemIndex < listItem.length) {
    const newList = document.createElement(`li`)
    newList.textContent = listItem[currentListItemIndex]
    listContainer.appendChild(newList)
    currentListItemIndex++;
 } 
 else {
    audio.play();
    alert('all item have been added, \n  in the provided list !!!')

  }
});

const listItem = [
  `HTML and Semantics`,
  'Starting with CSS',
  ` Working Template`,
  ` Mobile responsive webpages`,
  `Grid and Flex-box in CSS`,
  `Projects using HTML & CSS`,
  `Version Control and Git`,
  `Getting Started with JavaScript`,
  `Advance JavaScript`,
  `Working with DOM`,
  `Making Projects using HTML CSS and JavaScript`,
  `Understanding Fundamental of Computer Science`,
  `Getting Started with Database`,
  `Understanding the Database`,
  `Starting with NodeJS and Express`,
  `Understanding React and its Fundamentals`,
  `Understanding Hooks and Routers`,
  `Starting and Completing Full Fledge Projects`
]
