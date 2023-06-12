// Home page text to type out
const intro = 'Hi there and welcome! My name is Amanda Yee. <br>\
I am a data scientist, BU graduate student, and aspiring web developer. <br>\
Currently based in Brooklyn, New York.'

// Function to create type writer effect on sentence
const typeSentence = (divId, sentence, speed = 25) => {
    let index = 0;
    let element = document.getElementById(divId);
    
    let timer = setInterval(function() {
      const char = sentence[index];
      
      if (char === '<') {
        index = sentence.indexOf('>', index);  // skip to greater-than
      }
      
      element.innerHTML = sentence.slice(0, index);
      
      if (++index === (sentence.length + 1)) {
        clearInterval(timer);
      }
    }, speed);
  } 
  
typeSentence('home-intro', intro);