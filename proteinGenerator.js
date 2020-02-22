// This definetely needs some improvement. Or maybe not. IDK man.
// Maybe we can control the location.
// This creates protein everywhere. Look at the random( , ) values.
function proteinGenerator(frequency, spwnnumber) {
  if (((60 + frequency) > frameRate() && frameRate() > (60 - frequency)) || (frequency == 555)) {
    for (var i = 0; i < spwnnumber; i++) {
        proteins.push(new c3(-10, random(0,canvasHeight), random(10,20), random(10,20), random(0,255)));
    }
  }
}