// // WORD HIGHLIGHTING CODE
// const button = document.getElementById("highlightBtn");
// const paragraph = document.getElementById("mongoDb_para");
// const searchInput = document.getElementById("searchInput");

// button.addEventListener("click", () => {
//   const wordArr = paragraph.innerText.split(' ');
// console.log(wordArr);

//   for (let i = 0; i < wordArr.length; i++) {
//     if (wordArr[i].length > 8) {
//       const highlightWord = document.createElement("span");
//       highlightWord.classList.add("highlight");

//       highlightWord.innerHTML = wordArr[i];
//       highlightWord.style.backgroundColor = "yellow";
//       highlightWord.style.color = "black"
//       wordArr[i] = highlightWord.outerHTML;
//       // <span class="highlight"> wordArr[i] </span>
//     }
//   }
//   paragraph.innerHTML = wordArr.join(' ');
// });

// // ++++++++++++++++++++++++++++++++++++
// // SEARCHING WORD CODE 
// searchInput.addEventListener("input", () => {
//   const searchValue = searchInput.value.toLowerCase();
//   const wordArr = paragraph.innerText.split(' ');

//   for (let i = 0; i < wordArr.length; i++) {
//     const word = wordArr[i].toLowerCase();
//     const highlightWord = document.createElement("span");
//     highlightWord.classList.add("highlight");
//     highlightWord.innerHTML = wordArr[i];
  
//     if(searchValue !== "" && word.includes(searchValue)){
//       highlightWord.style.backgroundColor = "aqua";      
//       highlightWord.style.color = "black";      
//     }else{
//       highlightWord.style.backgroundColor = "transparent";
//     }
//     wordArr[i] = highlightWord.outerHTML;
//   }
//   paragraph.innerHTML = wordArr.join(' ');
// });




const button = document.getElementById("highlightBtn");
const paragraph = document.getElementById("mongoDb_para");
const searchInput = document.getElementById("searchInput");
let isHighlighting;

function highlightWords() {
  const searchValue = searchInput.value.toLowerCase();
  const wordArr = paragraph.innerText.split(' ');

  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i].toLowerCase();
    const highlightWord = document.createElement("span");
    highlightWord.classList.add("highlight");
    highlightWord.innerHTML = wordArr[i];
  
    if (isHighlighting && wordArr[i].length > 8) {
      highlightWord.style.backgroundColor = "yellow";
      highlightWord.style.color = "black";
    } else if (!isHighlighting && searchValue !== "" && word.includes(searchValue)) {
      highlightWord.style.backgroundColor = "aqua";
      highlightWord.style.color = "black";
    } else {
      highlightWord.style.backgroundColor = "transparent";
    }
    
    wordArr[i] = highlightWord.outerHTML;
  }
  
  paragraph.innerHTML = wordArr.join(' ');
}

button.addEventListener("click", () => {
  isHighlighting = true;
  highlightWords();
});

searchInput.addEventListener("input", () => {
  isHighlighting = false;
  highlightWords();
});
