var number = function(busStops){
  return busStops.reduce((total, thisStop) => total + thisStop[0] - thisStop[1], 0);
}
