//by: lrapa99 


// variables
let table = $("#table")
let message = $("#message")
let opctionTable = $("#options-table")
let btnShowTable = $("#show-table")
let btnResetAll = $("#reset-all")
let btnReset = $("#reset")
let btn5en5 = $("#btn-5-en-5")
let btn2en2 = $("#btn-2-en-2")
let numTable = $("#num-table")
let lenghtTable = $("#lenght-table")
let myNumber = $("#my-number")[0]
let tbody = $("tbody")
let checkInput = $(".form-check-input")


// init hide
table.hide()
opctionTable.hide()


// function of logic for multiply
function multiply(nTable, x = 1) {

  // variables
  let result;
  let rows = "";
  let limit;


  // check for limit 
  $(checkInput).each(function () {

    if ($(this)[0].checked) {
      return limit = $(this)[0].value
    }
  });

  // loop
  for (let i = 1; i <= limit; i++) {
    result = nTable * (x > 1 ? (i * x) : i);

    rows += `
            <tr>
            <td><em>${nTable}</em></td>
            <td>x</td>
            <td><em>${x > 1 ? (i * x) : i}</em></td>
            <th class="text-primary opacity-75" >=</th>
            <th>${result}</th>
            </tr>
            `
  }


  // rows for table
  return tbody.append(rows)


}


// function reset all

function resetAll() {

  tbody.html('')
  table.fadeOut()
  message.fadeIn()
  opctionTable.fadeOut()
  lenghtTable.text(0)
  checkInput[0].checked = true

  btnReset.addClass('disabled')
}


// btn reset all
btnResetAll.click(function (e) {
  e.preventDefault()

  resetAll()

})



// glogal number of input 
var gNumber;



// btn show table
btnShowTable.click(function (e) {

  if (myNumber.value) {
    e.preventDefault()

    gNumber = myNumber.value

    tbody.html('')
    opctionTable.fadeIn()
    table.fadeIn()
    message.hide()
    numTable.text(gNumber)
    multiply(gNumber)
    lenghtTable.text(tbody.children().length)
    myNumber.value = ''

    btnReset.removeClass('disabled')
  }

})



// btn multiply of 2 in 2
btn2en2.click(function () {

  tbody.html('')
  multiply(gNumber, 2)
})


// btn multiply of 5 in 5
btn5en5.click(function () {

  tbody.html('')
  multiply(gNumber, 5)
})
