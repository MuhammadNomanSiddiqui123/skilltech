document.addEventListener('DOMContentLoaded', function() {
  const quizForm = document.getElementById('quizForm');
  const resultDiv = document.getElementById('result');

  const answers = {
    q1: 'B',
    q2: 'B',
    q3: 'A',
    q4: 'D',
    q5: 'A',
    q6: 'B',
    q7: 'A',
    q8: 'A',
    q9: 'A',
    q10:'A'
  };

  quizForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;

    for (let q in answers) {
      const options = quizForm.elements[q];
      const optionsArr = Array.from(options);

      optionsArr.forEach(option => {
        option.parentElement.style.background = '';
        option.parentElement.style.color = 'white';
        if(option.checked){
          if(option.value === answers[q]){
            score++;
            option.parentElement.style.background = 'green';
          } else {
            option.parentElement.style.background = 'red';
          }
          option.parentElement.style.color = 'white';
        }
      });
    }

    const total = Object.keys(answers).length;
    const percentage = (score / total) * 100;
    const passFail = percentage >= 60 ? 'You Passed!' : 'You Failed!';

    resultDiv.innerHTML = `Score: ${score} / ${total} (${Math.round(percentage)}%)<br><strong>${passFail}</strong>`;

    if(!document.getElementById('retryBtn')){
      const retryBtn = document.createElement('button');
      retryBtn.id = 'retryBtn';
      retryBtn.textContent = 'Retry Quiz';
      retryBtn.className = 'btn btn-orange mt-3';
      retryBtn.addEventListener('click', function(){
        quizForm.reset();
        resultDiv.textContent = '';
        document.querySelectorAll('.question div').forEach(div => {
          div.style.background = '';
          div.style.color = 'white';
        });
        retryBtn.remove();
      });
      resultDiv.appendChild(retryBtn);
    }
  });
});