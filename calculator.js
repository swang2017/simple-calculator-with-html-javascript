var inPut1=document.getElementById("firstInput")
let operator = ""

  document.getElementById("addButton").addEventListener('click',function(){
    operator = "+"})
  document.getElementById("minusButton").addEventListener('click',function(){
    operator = "-"})
  document.getElementById("timeButton").addEventListener('click',function(){
    operator = "*"})
  document.getElementById("divideButton").addEventListener('click',function(){
    operator = "/"})

var inPut2=document.getElementById("secondInput")
var outputDiv = document.getElementById("outPutDiv")
document.getElementById("clear").addEventListener('click',function(){
      inPut1.value = ""
      inPut2.value= ""
      operator.value =""
    })
let equalToButton = document.getElementById("result")
equalToButton.addEventListener('click',function(){
  if (operator=="+"){
    let result = parseFloat(inPut1.value) + parseFloat(inPut2.value)
        outputDiv.innerHTML = result}
  else if (operator=="-"){
    let result = parseFloat(inPut1.value) - parseFloat(inPut2.value)
        outputDiv.innerHTML = result}
  else if (operator=="*"){
    let result = parseFloat(inPut1.value) * parseFloat(inPut2.value)
      outputDiv.innerHTML = result}
  else if (operator=="/"){
    let result =parseFloat(inPut1.value) / parseFloat(inPut2.value)
      outputDiv.innerHTML = result}
    })


// var outputDiv = document.getElementById("outPutDiv")
// console.log(outputDiv)
// //  document.getElementById("outPutDiv").innerHTML = getElementById("firstInput") + getElementById("secondInput") = getElementById("outPut")
//
// function Calculator(input1, input2){
//   this.input1=""
//   this.input2=""
//
//   this.add = function(input1,input2) {
//     return input1 + input2
// //   }
// //
//   this.add = function(input1,input2) {
//     return input1 + input2
//   }

//   this.add = function(input1,input2) {
//     return input1 + input2
//   }
//
//   this.add = function(input1,input2) {
//     return input1 + input2
//   }
// }
//
// let calc = new Calculator()
