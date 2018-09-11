/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0, arr = [];
  for (var i = 0; i < preferences.length; i++) {
  	if ( (preferences[i] != i + 1) && (arr.indexOf(i + 1) == -1) && (preferences[preferences[i]-1] != i + 1) && (preferences[preferences[preferences[i]-1]-1] == i + 1) ) {
  		count++;
  		arr.push(preferences[i], preferences[preferences[i]-1]);
  	}
  	arr.push(i + 1); 
  }
  return count;
};
