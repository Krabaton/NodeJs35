const arr = [3, 4, 4, 3, 6, 3]
function remove(arr, indexes) {
  console.log('🚀 ~ file: test.js ~ line 4 ~ remove ~ arguments', arguments)
  var arrayOfIndexes = [].slice.call(arguments, 1)
  console.log(
    '🚀 ~ file: test.js ~ line 5 ~ remove ~ arrayOfIndexes',
    arrayOfIndexes,
  )
  return arr.filter(function (item, index) {
    return arrayOfIndexes.indexOf(index) === -1
  })
}

console.log(remove(arr, 0, 1, 3))
