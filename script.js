function myFunction() { 
	document.getElementById("mainFrameOne").style.display="none"; 
	document.getElementById("mainFrameTwo").style.display="block";
  displayQuestion() 
  currentIndex++
}

let currentIndex = 0;
let yesCount = 0;
let noCount = 0;


const questions = [
 { "id": 1, "qs": "Have you had enough sleep today?", "img": "moon.png"},
 { "id": 2, "qs": "Did you feed yourself well today?", "img": "food.png"},
 { "id": 3, "qs": "Did you feel others were friendly to you?", "img": "friends.png"},
 { "id": 4, "qs": "Are you proud of yourself today?", "img": "proud.png"},
 { "id": 5, "qs": "Did you express enough gratitude to others?", "img": "gratitude.png"},
 { "id": 6, "qs": "Were you able to easily get out of the bed this morning?", "img": "morning.png"},
 { "id": 7, "qs": "Are you looking forward to tomorrow?", "img": "tomorrow.png"},
]


const images = [
 { "id": 1, "img": "diamond.png"},
 { "id": 2, "img": "sapphire.png"},
 { "id": 3, "img": "topaz.png"},
 { "id": 4, "img": "garnet.png"},
 {"id": 5, "img": "opal.png"},
 {"id": 6, "img": "black_diamond.png"}
]

const results = [
  { "id": 1, "result": "diamond", "meaning": "Diamonds are the hardest minerals on Earth! It's luminous beauty and strength captivates people all around the globe. Seems like you had a day glistening like a diamond! Hope you have many more days ahead of you just as good as today :)"},
  { "id": 2, "result": "sapphire", "meaning": "Since ancient times, the colro blue was often associated with royalty and victory. Did you know that rubies and sapphires are actually formed from the same elements and crystal structure? Their only difference comes from the shade of light they reflect. Sounds like you had a pretty victorious day today! Keep up the good work and share the happiness with those around you."},
  { "id": 3, "result": "topaz", "meaning": "Ancient Romans believed this gem could cure illnesses. A symbol of hope and persistence, the color of this gem resembles the glowing warmth of the sun. While it may not have seemed like the most adventurous day, you’re definitely thriving like the steady warmth of the sun. Don’t let the warmth go out and continue to do your best in days to come :)"},
  { "id": 4, "result": "garnet", "meaning": "This beautiful deep-red gem symbolized truthfulness and friendship. Garnet crystals are known for withstanding high pressure and temperature in its natural state, thus maintaining its pure form in the ground. You seem to be little under the weather today, but remember to hold yourself together and remember there are always people that care about you :)"},
  { "id": 5, "result": "opal", "meaning": "Did you know that the beautiful rainbows insde an opal can only be maintained by regularly placing it in water? Just as this gem needs occasional rest, seems like you might also want to take some time to unwind and look after yourself. How about a nice warm bath to let yourself glow and shine at your very best?"},
  { "id": 6, "result": "black diamond", "meaning": "While it may not seem as lustrous compared to its clear counter part, carbonado crystals also known as black diamonds are the hardest and toughest forms of natural diamonds. It seems like you didn't have the best day of your life, but inside we believe you're truly a strong and determined person. Believe in  your strong inner-self that is stronger than anyone else in the world and make the best out of days to come."}
]

const questionCount = questions.length;
console.log("question count is " + questionCount)

function displayQuestion() {
  console.log(questions[currentIndex])
  var que = questions[currentIndex]
  document.getElementById("questionHeader").innerHTML = que.qs
  document.getElementById("image").src = que.img
}

function resultCounter() {
  console.log("is this being called")
  var resultIs = yesCount - noCount
  console.log("result is " + resultIs)
  var resultCalc = 0;
  if (resultIs >= 1 && resultIs <= 3) {
    resultCalc = 3;
  } else if (resultIs >= 4 && resultIs <= 6) {
    resultCalc = 2;
  } else if(resultIs == 7) {
    resultCalc = 1;
  } else if(resultIs >= -3 && resultIs <= -1) {
    resultCalc = 4;
  } else if (resultIs >= -6 && resultIs <= -4) {
    resultCalc = 5;
  } else if (resultIs == -7) {
    resultCalc = 6;
  }
  return resultCalc
}

function displayResult() {
  console.log(resultCounter())
  var resultComment = results[resultCounter() - 1]
  document.getElementById("questionHeader").innerHTML = resultComment.result
  document.getElementById("image").src = images[resultCounter() - 1].img
  document.getElementById("description").innerHTML = resultComment.meaning
  console.log("hello")
}

let clickCount = 0;
document.getElementById("next1").addEventListener("click", event => {
  if (clickCount < 7) {
  clickCount++
  yesCount++
  displayQuestion()
  currentIndex++
  console.log(currentIndex)
  console.log("Yes Count is " + yesCount)
  }
  if (clickCount >= 7) {
    console.log("8 clicks")
    displayResult()
  }
})

document.getElementById("next2").addEventListener("click", event => {
  if (clickCount < 7) {
  clickCount++;
  noCount++
  displayQuestion()
  currentIndex++
  console.log(currentIndex)
  console.log("No Count is " + noCount)
  }
  if (clickCount >= 7) {
    console.log("8 clicks")
    displayResult()
  }
})


