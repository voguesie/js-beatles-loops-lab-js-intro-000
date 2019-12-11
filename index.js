// add solution here
// Function theBeatlesPlay accepts arrays "musicians" and "instruments", and returns an array of sentences stating what instrument each musician plays.

function theBeatlesPlay(musicians, instruments) {
  var whatDoTheyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    whatDoTheyPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return whatDoTheyPlay
}


// Function johnLennonFacts accepts an array "facts" and returns a new array with !!! at the end of each fact.

function johnLennonFacts(facts) {
  var counter = facts.length;
  while (counter >= 0) {
    facts[--counter] = facts[--counter] + "!!!";
  }
  return facts
}
