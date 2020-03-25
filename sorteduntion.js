//set arrays in one to loop through
//create empty array (results) and push results into it

function sortArr(arr) {

  let newArr = [...arguments];
  let results = [];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (results.indexOf(newArr[i][j]) == -1) {
        results.push(newArr[i][j]);
      }
    }
  }
  return results;
}
