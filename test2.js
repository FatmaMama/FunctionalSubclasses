var Van = function(loc) {
  var obj = { loc: loc };
  obj.move = function() {
    obj.loc++;
  };
  obj.grap = function() {
    console.log("grap");
  };
  return obj;
};
var Cop = function(loc) {
  var obj = { loc: loc };
  obj.move = function() {
    obj.loc++;
  };
  obj.call = function() {
    console.log("call");
  };
  return obj;
};

var ben = Van(9);
ben.grap();
var cal = Cop(9);
cal.call();