var BlinkyDancer = function(top, left, timeBetweenSteps){
// <<<<<<< HEAD

  Dancer.apply(this, arguments);


  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

};


BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);


  //Dancer.call(this, step);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

};

// =======
//   // var BlinkyDancer = new Dancer(top, left, timeBetweenSteps);
//   // var oldStep = blinkyDancer.step;

//   Dancer.apply(this, arguments);  
//   this.timeBetweenSteps = timeBetweenSteps;
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
// }

// BlinkyDancer.prototype = Object.create(Dancer.prototype);
// BlinkyDancer.prototype.constructor = BlinkyDancer;

//   BlinkyDancer.prototype.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     Dancer.prototype.step.call(this);
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     this.$node.toggle();
//   };
// >>>>>>> 7/26changesAfterCurriculumSaved
