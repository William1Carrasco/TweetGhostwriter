function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Always keep", "The sun shines on", "You must not forget", "Lending a hand to"];
  var body = ["your heart on a sleve", "your true love", "those who give so freely";
  "those close to you", "those you love"];
  var end = ["at the end of the day", "when the sunsets"];
  randIndex = randomUpTo((intro.length-1));
  sentence = intro[randIndex];
  randIndex = randomUpTo((body.length-1));
  sentence = sentence+" "+body[randIndex];
  randIndex = randomUpTo((end.length-1));
  sentence = sentence+" "+end[randIndex];
  document.getElementById("tweet").innerHTML=sentence;
}






//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
