var ages = [1, 23, 8, 12, 16]
var ratings = ['G', 'PG', 'M', 'MA']
var minAgeForRating = [0, 9, 12, 15]

var films = function (ages, ratings) {
  ages.forEach(function(age) {
    for (age >= 0;) {
      console.log("G")
    } else (age >= 9) {
      console.log("G and PG")
    } else  (age >= 12){
      console.log("G, PG and M")
    } else  (age >= 15){
      console.log("G, PG, M and MA")
    }
  };

/*ages.forEach(function (ratings) {
  function films(ages) {
    minAgeForRating

  }

})*/