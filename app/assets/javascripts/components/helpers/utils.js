flatten = function(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};

compact = function(arr) {
  var reals = [];
  for (var elem of arr){
    if(elem){reals.push(elem)}
  }
  return reals
};

titleize = function(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1)).split('_').join(' ');
};

arr_diff = function(a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
};
