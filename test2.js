var Van = function(loc) {
  var obj = { loc: loc };
  obj.move = function() {
    obj.loc++;
  };
  return obj;
};
var Cop = function(loc) {
  var obj = { loc: loc };
  obj.move = function() {
    obj.loc++;
  };
  return obj;
};
