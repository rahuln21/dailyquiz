(function() 
 {
  var allQuestions = [{
    question: "Which of the following State featured the bottom the India child well being index 2019?",
    options: ["Tamil Nadu", "Meghalaya", "Assam", "Gujarat"],
    answer: 1
  }, {
    question: "Which of the following State topped the India child well being index 2019?",
    options: ["Maharastra", "Haryana", "Kerala", "Telangana"],
    answer: 2
  }, {
    question: "Who is the Present Home Minister of India ?",
    options: ["Shri.Amit Shah", "Shri.Rajnath Singh", "Shri.Harshavardhan","Shri.Nirmala Sitharaman"],
    answer: 0
  },{
    question: "Where is the headquarters of Indian Bank?",
    options: ["Chennai", "Hyderabad", "Ahmedabad", "Mumbai"],
    answer: 0
  }, {
    question: "China and _________began joint exercise Shaheen-VIII near Ladakh",
    options: ["Nepal", "Pakistan", "Bhutan", "Russia"],
    answer: 1
  },{
    question: "What is the name of the mobile application launched for locating outlets and searching Generic medicine",
    options: ["Digicop", "Janaushadhi Sugam", "Fit India", "Digi Health"],
    answer: 1
  },{
    question: "Which Union Territory stands first in the second Round of Composite Water Management Index (CWMI 2.0) among the UTs?",
    options: ["Chandigarh", "New Delhi", "Puducherry", "Daman Diu"],
    answer: 2
  },{
    question: "Which state topped the second Round of Composite Water Management Index (CWMI 2.0) ?",
    options: ["Bihar", "Tamil Nadu", "Telangana", "Gujarat"],
    answer: 3
  },{
    question: "Where is the headquarters of Amazon located?",
    options: ["Sydney,Australia", "Luanda, Angola", "Seattle, Washington, United States", "Amazon,Venezuela"],
    answer: 2
  },{
    question: "What is the capital of Bahrain?",
    options: ["Al Baharain", "Manama", "Kuwait", "Riffa"],
    answer: 1
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        if(correct>5){
        score.append('Congatulations ! '+'You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
        }
        else{
            score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
            
        }
       
  }
})();