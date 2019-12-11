// add solution here
// Function theBeatlesPlay accepts arrays "musicians" and "instruments", and returns an array of sentences stating what instrument each musician plays.

function theBeatlesPlay(musicians, instruments) {
  var whatDoTheyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    whatDoTheyPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return whatDoTheyPlay
}
