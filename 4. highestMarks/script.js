const studentMarksForm = document.querySelector(".studentForm");
const studentResult = document.querySelector("#blankContainer");

studentMarksForm.addEventListener('submit', function(event){
    event.preventDefault();


const marks = Array.from(this.elements['marks[]']).map(element => parseFloat(element.value));


    //  const marks = [
    //     parseInt(document.querySelector(`#Number1`).value),
    //     parseInt(document.querySelector(`#Number2`).value),
    //     parseInt(document.querySelector(`#Number3`).value),
    //     parseInt(document.querySelector(`#Number4`).value),
    //     parseInt(document.querySelector(`#Number5`).value)
    //  ];

    // const marks = [];
    // for (let i = 1; i <= 5; i++) {
    //     const mark = parseInt(document.querySelector(`#Number${i}`).value);
    //     marks.push(mark);
    // }
     const highestMarks = Math.max(...marks); //spread operator
     const  studentIndex = marks.findIndex(marks => marks === highestMarks) + 1;
     const studentName = `Student ${studentIndex}`;

     const result = isNaN(highestMarks) ? "Please enter valid marks for all students" : `${studentName} scored the highest marks: ${highestMarks}`;
     
     studentResult.innerText = result;
});


// following are the code which will run in console also here but running in console remove return;

// const marks = [65, 23, 21, 98, 45];
// const highestMarks = marks.length > 0 ? Math.max(...marks) : null;
// if (highestMarks !== null) {
//   console.log(`The highest marks scored by a student in the class is ${highestMarks}.`);
// } else {
//   console.log("No marks found.");
// }
// return highestMarks;