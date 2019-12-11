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
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!";
    counter++;
  }
  return facts
}

// Function iLoveTheBeatles acctepts a numerical parameter and returns a string with
// the number of "I love the Beatles!" strings as the difference between the number and 15.

function iLoveTheBeatles(numberLoves) {
  var loveBeatles = [];
  do {
    loveBeatles.push("I love the Beatles!");
    numberLoves++;
  }     while (numberLoves < 15)
  return loveBeatles
}
