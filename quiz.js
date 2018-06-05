$(document).ready(function() {

  let quiz = [{
      question: "1.  Who is this that darkeneth counsel by words without knowledge?Elihu",
      answers: ["Billy Ocean", "Captain Jack Sparrow", "MJ", "Elihu"],
      correctAnswer: 3

    },
    {
      question: "2.  Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding?",
      answers: ["No understanding", "At home", "Europe", "I have understanding"],
      correctAnswer: 0

    },
    {
      question: "3.  Who hath laid the measures thereof, if thou knowest? or who hath stretched the line upon it?",
      answers: ["God", "He-man", "Thanos", "Budha"],
      correctAnswer: 0
    },
    {
      question: "4.  Whereupon are the foundations thereof fastened? or who laid the corner stone thereof When the morning stars sang together and all the sons of God shouted for joy?",
      answers: ["Perhaps Jason Borne", "No idea", "In the East Islands", "With flat earth society"],
      correctAnswer: 1
    },
    {
      question: "5.  Or who shut up the sea with doors, when it brake forth, as if it had issued out of the womb?",
      answers: ["Klaus", "Greta", "Hanz", "God"],
      correctAnswer: 3
    },
    {
      question: "6.  Hast thou entered into the springs of the sea? or hast thou walked in the search of the depth?",
      answers: ["Is this even real", "This is nonsense", "No", "Yes, on National Geographic"],
      correctAnswer: 2
    },
    {
      question: "7.  Have the gates of death been opened unto thee? or hast thou seen the doors of the shadow of death?",
      answers: ["No", "Gates of Hell, you fo real", "Im not interested", "What ever"],
      correctAnswer: 0
    },
    {
      question: "8.  Where is the way where light dwelleth? and as for darkness, where is the place thereof that thou shouldest take it to the bound thereof, and that thou shouldest know the paths to the house thereof?",
      answers: ["In my front yard", "With the Lord Jesus Christ of Lord and Savior, God", "My mommy", "I believe in a secular world"],
      correctAnswer: 1
    },
    {
      question: "9.  Hast thou entered into the treasures of the snow? or hast thou seen the treasures of the hail, Which I have reserved against the time of trouble, against the day of battle and war?",
      answers: ["Listen here God does not exist", "Kim Kardashian is my treasure", "Yes in Austria", "No"],
      correctAnswer: 3
    },
    {
      question: "10. By what way is the light parted, which scattereth the east wind upon the earth?",
      answers: ["Er I dont know", "It scattereth when light hits the atmosphere", "South Easterly wind", "Im tired of this quiz"],
      correctAnswer: 0
    },
    {
      question: "11. Out of whose womb came the ice? and the hoary frost of heaven, who hath gendered it?",
      answers: ["Ferdinand", "Big P", "Only you know God", "Sean John"],
      correctAnswer: 2
    },
    {
      question: "12. Canst thou bind the sweet influences of Pleiades, or loose the bands of Orion?",
      answers: ["Thanos", "Hades", "Only you know God", "Key and Peele"],
      correctAnswer: 2
    }

  ];


  let i = 0;


  for (object of quiz) {
    var questions = object.question;
    var multiAnswers = object.answers;

    $('#quiz').append('<h2>' + questions + '</h2>');

    let j = 0;

    for (answer of multiAnswers) {
      $('#quiz').append('<input type="radio" name="' + i + '" value="' + j + '">' + answer + '</input>');


      j++;

    }
    i++;



  }

  $('#smartness').submit(function(event) {

    event.preventDefault();
    let userData = $(this).serializeArray();

    console.log(userData);
    let k = 0;
    var finalScore = 0;

    for (returnedAnswer of userData) {


      if (returnedAnswer.value == quiz[k].correctAnswer) {


        finalScore++;

      };



      k++;
    }
    if (finalScore >= 12) {
      alert("You scored" + finalScore + "/12" )
    } else if (finalScore <= 7 && finalScore >= 10 ){
      alert("Not bad. You scored" + finalScore + "/12")
    } else if (finalScore <= 3 && finalScore >= 5) {
      alert("You scored" + finalScore + "/12")
    } else if (finalScore <= 2 ) {
      alert("You scored" + finalScore + "/12")
    };



  });


});
