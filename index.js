module.exports = dateRangePartition;

function dateRangePartition(size, partitionHint) {
  var closest, count, distance, interval, intervalName, intervals, size, units, _ref;
  units = [
    ['s', 1000],
    ['m', 1000 * 60],
    ['h', 1000 * 60 * 60],
    ['d', 1000 * 60 * 60 * 24],
    ['wk', 1000 * 60 * 60 * 24 * 7],
    ['yr', 1000 * 60 * 60 * 24 * 365]
  ];
  intervals = [
    ['s', 1],
    ['s', 10],
    ['s', 15],
    ['s', 20],
    ['s', 30],
    
    ['m', 1],
    ['m', 10],
    ['m', 15],
    ['m', 20],
    ['m', 30],
    
    ['h', 1],
    ['h', 2],
    ['h', 4],
    ['h', 6],
    ['h', 12],
    
    ['d', 1],
    ['d', 2],
    ['d', 3],
    ['d', 4],
    ['d', 5],
    
    ['wk', 1]
  ];
  closest = Infinity;
  interval = null;
  distance = function(v) {
    return Math.abs(v - partitionHint);
  };
  intervals.map(function(_arg) {
    var factor, mult, unit, usize;
    unit = _arg[0], mult = _arg[1];
    usize = units.filter(function(u) {
      return u[0] === unit;
    })[0][1];
    factor = size / (mult * usize);

    if (distance(factor) < distance(closest)) {

      return (interval = [closest = factor, Math.floor(usize / 1000), mult + unit]);
    }
  });
  _ref = interval, count = _ref[0], interval = _ref[1], intervalName = _ref[2];
  return {
    count: count,
    interval: interval,
    intervalName: intervalName
  };
}