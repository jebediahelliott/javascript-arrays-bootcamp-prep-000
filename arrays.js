var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, string)
{
  var newArray = [string, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, string)
{
  array.unshift(string)
  return array
}
function addElementToEndOfArray(array, string)
{
  var newArray = [...array, string]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, string)
{
  array.push(string)
  return array
}
function accessElementInArray(array, index)
{
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array)
{
  var newArray = array.slice(1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}
function removeElementFromEndOfArray(array)
{
  var newArray = array.slice(0, array.length - 1)
  return newArray
}




