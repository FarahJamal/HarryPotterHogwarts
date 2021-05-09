
// Array for messages.
var msg=['Message from Harry To you!\r\n \r\nIf Harry is your favorite character, you are an empathetic person who craves action. You are also the type of person who is good to their core, but knows how to break the rules. You have figured out how to do the right amount of wrong and you cherish your friendships and family above all else.','Message from Snape To you!\r\n \r\n  you are a complex person who sees the best in people. You believe people can change and deserve second chances. You take people at their word, but you also live for drama and love to stir the pot. And your favorite color is probably black.','message from voldemort to you! \r\n die Potter  😂😂😂😂😂😂😂!',
'A message from Darco to you! \r\n you see the best in people, but once you have your eyes on the prize, you will stop at nothing to succeed',"A message from hermonie to you! you are definitely very smart and driven. You have a tight-knit friend group and your confidence is resounding, due to your general wit. You are a rule follower, but when you break a rule, you do it with conviction"];

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

//show the static pic for every character at the top!
if(userInput ==='Harrypotter' || userInput ==='harrypotter'){
        stretchGoal(userInput);

message(msg[0],userInput,'gryfndor.png');


}
else if(userInput ==='Severus Snape' || userInput ==='severus Snape'){
  stretchGoal(userInput);

message(msg[1],userInput,'mothereyes.png');
   

}
else if(userInput ==='Voldemort' || userInput ==='voldemort'){
   stretchGoal(userInput);

message(msg[2],userInput,"volquote.png");
}
else if(userInput ==='Draco Malfoy ' || userInput ==='draco malfoy'){
    stretchGoal(userInput);

message(msg[3],userInput,'slythrin.png');

}
else if(userInput ==='harmonie' || userInput ==='harmonie'){
    stretchGoal(userInput);


  message(msg[4],userInput,"gryfndor.png");

}
else{
  alert('sorry but you must choose!');
    userInput=prompt('1-Harrypotter\r\n 2-Severus Snape \r\n 3-voldemort\r\n 4-Draco Malfoy \r\n 5-harmonie');
}

//user input number of pics

if(userInput =="harrypotter" || userInput==="Harrypotter" ){
var count =prompt('how namy images do you want to see for'+" "+userInput+"\r\n \r\n you must choose from 1-5");
  while(count>5){
      count=prompt('how namy images do you want to see for '+" "+userInput+"\r\n \r\n you must choose from 1-5");
      }
}
else{
  var count =prompt('how namy images do you want to see for'+" "+userInput+"\r\n \r\n you must choose from 1-4");
  while(count>4){
      count=prompt('how namy images do you want to see for '+" "+userInput+"\r\n \r\n you must choose from 1-4");
      }
}
   
 

for(var i=1; i<=count ;i++){
if(userInput ==='Harrypotter' || userInput ==='harrypotter'){
picsNo('harry');

}
else if(userInput ==='Severus Snape' || userInput ==='severus snape'){
 
  picsNo('sev');


}
else if(userInput ==='Voldemort' || userInput ==='voldemort'){

picsNo('vol');


}
else if(userInput ==='Draco Malfoy ' || userInput ==='draco malfoy'){
 
picsNo('draco');

}
else if(userInput ==='harmonie' || userInput ==='harmonie'){
 picsNo('harmonie');


}


}
// function section

  function picsNo(picsName){
 
document.write('<img class="center" style="width:400px; height:300px;" src="./hogwarts/'+picsName+''+(i)+'.png">');
document.write('</br>');
   }

function message(message,inputUser, housePng ){
  document.write('<h1 class="center">'+inputUser+' Fan!</h1>');
  document.write('</br>');
  alert(message);
  document.write('<img class="center" style="width:400px; height:400px;" src="./hogwarts/'+housePng+'">');
document.write('</br>');
}

function stretchGoal(userChar)
{
 alert('So you\'ve choose'+" "+userChar);
 var spell= prompt('Do you know what is the spell most used by'+ " "+userChar);
 document.write('<h1 class="center">alright!'+userChar+" "+'most used spell is :'+" "+'<span class="spell">'+spell+'</span>'+'</h1>');
}

