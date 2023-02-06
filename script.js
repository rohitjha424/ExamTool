// Page 1


const form = document.querySelector("#exam-form");

const correctAnswers = {
  'question1': "C",
  'question2': "B",
  'question3': "A",
  'question4': "C",
  'question5': "D",
  'question6': "D",
  'question7': "D",
  'question8': "A",
  'question9': "D",
  'question10': "A",
  'question11': "A",
  'question12': "C",
  'question13': "D",
  'question14': "B",
  'question15': "B",
  'question16': "B",
  'question17': "D",
  'question18': "B",
  'question19': "A",
  'question20': "B",
  'question21': "A",
  'question22': "D",
  'question23': "D",
  'question24': "A",
  'question25': "A",
  'question26': "C",
  'question27': "A",
  'question28': "B",
  'question29': "A",
  'question30': "B",
  'question31': "A",
  'question32': "C",
  'question33': "A",
  'question34': "C",
  'question35': "B",
  'question36': "C",
  'question37': "D",
  'question38': "B",
  'question39': "B",
  'question40': "A",
  'question41': "B",
  'question42': "B",
  'question43': "D",
  'question44': "C",
  'question45': "C",
  'question46': "D",
  'question47': "A",
  'question48': "C",
  'question49': "D",
  'question50': "A",
  
};

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let correct = 0;
  let incorrect = 0;

  const questionContainers = document.querySelectorAll(".question-container");
  questionContainers.forEach(container => {
    const question = container.querySelector("input[type='radio']:checked");
    if(question==null){
      alert("Please Attempt All Questions ")
    }
    const key = question.name;
    const questionNumber = container.querySelector("p").textContent.split(" ")[1];
    const resultContainer = container.querySelector(".result");

    if (!question) {
      resultContainer.innerHTML = `<p style="color: red;">Please select an answer for question ${questionNumber}</p>`;
    } else if (question.value == correctAnswers[key.toString()]) {
      resultContainer.innerHTML = `<p style="color: green;">Correct!</p>`;
      correct++;
    } else {
      resultContainer.innerHTML = '<p style="color: red;">Incorrect. The correct answer was ' + correctAnswers[key.toString()] + '</p>';
      incorrect++;
    }
  });

  document.querySelector(".correct").innerHTML = `Correct: ${correct}`;
  document.querySelector(".incorrect").innerHTML = `Incorrect: ${incorrect}`;
});


