const quizDataSet=
 [  

    {
        question :"what is the currency of india",
        a : 'Dollar',
        b : 'pound',
        c : 'yen',
        d : 'Rupee',
        correct :'d'
    },
    {
        question: "What does CSS stands for?",
        a: "Career Student Service",
        b: "Jason Object Notation",
        c: "Cascading Style Sheet",
        d: "Syntactically Awesome Style Sheet",
        correct: "c"
    },
    
    {
    question:'Who is the President of US?' ,
    a:'Florin Pop',
    b: 'Joe Biden',
    c:'Ivan Saldano',
    d:'Mihai Andrei',
    correct:'b'
    },
    {
        question:'Which among the following is the major objective of NASA Kepler mission?',
         a:'To search for habitable planets',
         b:'To search for earth like planets',
         c:'To search for alien life',
         d:' To search for potentially dangerous objects in space',
         correct:'b'
    },
    {
         question:'What is the most used programming language in 2019?',
         a:'Java',
         b:'C',
         c:'Python',
         d:'JavaScript',
         correct:'d'
    },
    {
    question:'What does HTML stand for?',
    a:'Hypertext Markup Language',
    b:'Cascading Style Sheet',
    c:'Jason Object Notation',
    d:'Helicopters Terminals Motorboats Lamborginis',
    correct:'a'
    },

    
{
    question: "which country has the currency Sterling?",
    a: "USA",
    b: "UK",
    c: "Russia",
    d: "Australia",
    correct: "b"
},

{
   question:'Which one among the following radiations carries maximum energy?',

a:'Ultraviolet rays',
b:'Gamma rays',
c:'X- rays',
d:'Infra-red rays',
correct:'b',
   
},
{
    question:'The head quarters of world trade organization is in?',
    a:'Montreal',
    b:'Seattle',
    c:'Geneva',
    d:'the Hague',
    correct:'c',

},
{
    question:'Who is the father of geometry?',
    a:'Aristotle',
    b:' Euclid',
    c:'Pythagoras',
    d:' Kepler',
    correct:'b'

},
{ 
    
    question:'Nobel prize is awarded for which of the following disciplines:',
    a:'Literature, peace and economics',
    b:'Medicine or Physiology',
    c:'Chemistry and Physics',
    d:'All the above',
    correct:'d',
   
},
{
    
    question:' Who is popularly called as the Iron Man of India?',
    a:'Subhash Chandra Bose',
    b:'Sardar Vallabhbhai Patel',
    c:'Jawaharlal Nehru',
    d:'Govind Ballabh Pant',
    correct:'b',
},
{
    question:'The metal whose salts are sensitive to light is',
    a:'Silver',
    b:'Zinc',
    c:'Copper',
    d:'Gold',
    correct:'a',
   
},

{
    question:'The World Largest desert is ?',
    a:'Thar',
    b:'Kalahari',
    c:'Sahara',
    d:'Sonoran',
    correct:'c',
   
},

{
    question:'How long a person should have practiced in a High Court to be eligible to be apointed as a Judge of Supreme Court of India?',
    a:'10 Years',
    b:'12 Years',
    c:'15 Years',
    d:'20 Years',
    correct:'a',
   
},

   
];

 

const firstDiv=document.querySelector('.first');
const secondDiv=document.querySelector('.second');
const maxQuestions=document.querySelector('#maxQuestions');
 let  num;

maxQuestions.addEventListener('change',()=>{
   if(parseInt(maxQuestions.value)===0)
   {
    start.disabled=true;
   }
   else
   { num=parseInt(maxQuestions.value);
    start.disabled=false;
   }
})


const quiz = document.getElementById("quiz");
const a_text=document.querySelector('#a_text');
const b_text=document.querySelector('#b_text');
const c_text=document.querySelector('#c_text');
const d_text=document.querySelector('#d_text');

const question=document.querySelector('#question');
const subButton=document.querySelector('#answerSubmit');

const start=document.querySelector('#start');

start.addEventListener('click',()=>{
    firstDiv.classList.toggle('d-none');
    secondDiv.classList.toggle('d-none');
   

})



const options = document.querySelectorAll(".options");
const questionNumber=document.querySelector('#questionNumber');

let score=0;
let currentque=0;
let count=0;
const questionAray=[];

loadQuiz();

function loadQuiz(){
    count++;
 deselectAnswers();


  do
  { 
       currentque=Math.floor(Math.random()*15);
       
  } while(questionAray.includes(currentque));

  questionAray.push(currentque);

  
  
  questionNumber.innerText=questionAray.length;
  const questionData=quizDataSet[currentque];

  question.innerText=questionData.question;
  a_text.innerText=questionData.a;
  b_text.innerText=questionData.b;
  c_text.innerText=questionData.c;
  d_text.innerText=questionData.d;
  
}

function deselectAnswers() {
    options.forEach((el) => {
        el.checked = false;
    });
}

function optionSelected() {
    let answer = undefined;

    options.forEach((ele) => {
        if (ele.checked) {
            answer = ele.id;
        }
    });

    return answer;
}





subButton.addEventListener('click',()=> {
   
    const answer = optionSelected();
    
    if (answer) {
        if (answer === quizDataSet[currentque].correct) {
            score++;
        }
        console.log(score);
        
        if( count<num )
        {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${num} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    
    
    }


})

