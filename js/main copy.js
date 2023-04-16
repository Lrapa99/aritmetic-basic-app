
// variables
let table = $("#table")
let message = $("#message")
let opctionTable = $("#options-table")
let btnShowTable = $("#show-table")
let btn5en5 = $("#btn-5-en-5")
let btn2en2 = $("#btn-2-en-2")
let numTable = $("#num-table")
let lenghtTable = $("#lenght-table")
let myNumber = $("#my-number")[0]
let tbody = $("tbody")
let checkInput = $(".form-check-input")


table.hide()
opctionTable.hide()

function multiply(nTable, x = 1) {


  // variables
  let result;
  let rows = "";
  let limit;
  $(checkInput).each(function () {

    if ($(this)[0].checked) {
      return limit = $(this)[0].value
    }
  });

  if (x === 1) {
    for (let i = 1; i <= limit; i++) {
      result = nTable * i;

      rows += `<tr><td>${nTable}</td><td>x</td><td>${i}</td><th>=</th><th>${result}</th></tr>`
    }
  }
  if (x === 2) {

    for (let i = 1; i <= limit; i++) {
      result = nTable * (i * 2);

      rows += `<tr><td>${nTable}</td><td>x</td><td>${i * 2}</td><th>=</th><th>${result}</th></tr>`
    }
  }
  if (x === 5) {
    for (let i = 1; i <= limit; i++) {
      result = nTable * (i * 5);

      rows += `<tr><td>${nTable}</td><td>x</td><td>${i * 5}</td><th>=</th><th>${result}</th></tr>`
    }
  }

  return tbody.append(rows)


}



var gNumber;


btnShowTable.click(function (e) {

  if (myNumber.value) {
    e.preventDefault()

    gNumber = myNumber.value

    tbody.html('')
    opctionTable.fadeIn().show()
    table.fadeIn().show()
    message.fadeOut().hide()
    numTable.text(gNumber)
    multiply(gNumber)
    lenghtTable.text(tbody.children().length)
    myNumber.value = ''
  }

})



btn2en2.click(function () {

  tbody.html('')
  multiply(gNumber, 2)
})


btn5en5.click(function () {

  tbody.html('')
  multiply(gNumber, 5)
})
