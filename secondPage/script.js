alert('Hello PotterHeads!');
userInput=prompt('who is you favourite character on Hogwarts?');

if(userInput == null || userInput==""){
alert('umm... I guess you are not a Potter Head!');
alert('OK ... I need from you to choose any of theese characters.');
  userInput=prompt('1-Harrypotter\r\n 2-Severus Snape \r\n 3-voldemort\r\n 4-Draco Malfoy \r\n 5-harmonie');
}
while(userInput == null || userInput==""){
  alert('sorry but you must choose!');
    userInput=prompt('1-Harrypotter\r\n 2-Severus Snape \r\n 3-voldemort\r\n 4-Draco Malfoy \r\n 5-harmonie');
}
if(userInput ==='Harrypotter' || userInput ==='harrypotter'){
      


   document.write('<h1 class="center">Harrypotter Fan!</h1>');
  document.write('</br>');
  alert('Message from Harry To you!\r\n \r\nIf Harry is your favorite character, you are an empathetic person who craves action. You are also the type of person who is good to their core, but knows how to break the rules. You have figured out how to do the right amount of wrong and you cherish your friendships and family above all else.');

 
document.write('<img class="center" style="width:400px; height:400px;" src="./hogwarts/gryfndor.png">');
document.write('</br>');
}
else if(userInput ==='Severus Snape' || userInput ==='severus Snape'){

   document.write('<h1 class="center">Snape Fan!</h1>');
  document.write('</br>');
   alert('Message from Snape To you!\r\n \r\n  you are a complex person who sees the best in people. You believe people can change and deserve second chances. You take people at their word, but you also live for drama and love to stir the pot. And your favorite color is probably black.');
  

  document.write('<img class="center" style="width:400px; height:400px;" src="./hogwarts/mothereyes.png">');
document.write('</br>');

}
else if(userInput ==='Voldemort' || userInput ==='voldemort'){
 
   document.write('<h1 class="center">Voldemort Fan!</h1>');
  document.write('</br>');
    alert('message from voldemort to you! \r\n die Potter  😂😂😂😂😂😂😂!');
 
  document.write('<img class="center" style="width:400px; height:400px;" src="./hogwarts/volquote.png">');
  document.write('<br>');

}
else if(userInput ==='Draco Malfoy ' || userInput ==='draco malfoy'){

   document.write('<h1 class="center">Draco Fan!</h1>');
  document.write('</br>');
   alert('A message from Darco to you! \r\n you see the best in people, but once you have your eyes on the prize, you will stop at nothing to succeed')
 
  document.write('<img class="center" style="width:400px; height:400px;;" src="./hogwarts/slythrin.png">');
  document.write('<br>');

}
else if(userInput ==='harmonie' || userInput ==='harmonie'){

   document.write('<h1 class="center">Harmonie Fan!</h1>');
  document.write('</br>');
alert('A message from hermonie to you! you are definitely very smart and driven. You have a tight-knit friend group and your confidence is resounding, due to your general wit. You are a rule follower, but when you break a rule, you do it with conviction')


  document.write('<img class="center" style="width:400px; height:400px;" src="./hogwarts/gryfndor.png">');
  document.write('<br>');

}
else{
  alert('sorry but you must choose!');
    userInput=prompt('1-Harrypotter\r\n 2-Severus Snape \r\n 3-voldemort\r\n 4-Draco Malfoy \r\n 5-harmonie');
}

//user input number of pics

if(userInput =="harrypotter" || userInput==="Harrypotter" ){
var count =prompt('how namy images do you want to see for'+" "+userInput+"\r\n \r\n you must choose from 1-5");
  if(count>5){
      userInput=prompt('how namy images do you want to see for '+" "+userInput+"\r\n \r\n you must choose from 1-5");
      }
}
else{
  var count =prompt('how namy images do you want to see for'+" "+userInput+"\r\n \r\n you must choose from 1-4");
  if(count>4){
      userInput=prompt('how namy images do you want to see for '+" "+userInput+"\r\n \r\n you must choose from 1-4");
      }
}
   

for(var i=1; i<=count ;i++){
if(userInput ==='Harrypotter' || userInput ==='harrypotter'){
  
document.write('<img class="center" style="width:400px; height:300px;" src="./hogwarts/harry'+(i)+'.png">');
document.write('</br>');

}
else if(userInput ==='Severus Snape' || userInput ==='severus Snape'){
 
  document.write('<img class="center" style="width:400px; height:400px;" src="./hogwarts/sev'+(i)+'.png">');
  document.write('</br>');

}
else if(userInput ==='Voldemort' || userInput ==='voldemort'){

  document.write('<img class="center" style="width:400px; height:400px;" src="./hogwarts/vol'+(i)+'.png">');
  document.write('</br>');

}
else if(userInput ==='Draco Malfoy ' || userInput ==='draco malfoy'){
 
  document.write('<img  class="center" style="width:400px; height:400px;" src="./hogwarts/draco'+(i)+'.png">');
  document.write('<br>');

}
else if(userInput ==='harmonie' || userInput ==='harmonie'){
   document.write('<h1 class="center">Harmonie Fan!</h1>');
  document.write('</br>');
  document.write('<img class="center" style="width:400px; height:400px;" src="./hogwarts/harmonie'+(i)+'.png">');
  document.write('<br>');

}


}





