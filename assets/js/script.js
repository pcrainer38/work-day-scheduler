
var dateDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');
var newTask = $('.description');
var schedHour = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17']


function displayDate() {
    var today = dayjs().format('dddd, MMMM D, YYYY');
    dateDisplayEl.text(today);
}

var now = dayjs().hour();
console.log(now);

function timeBlockColor() {
    var hour = dayjs().hour();
    
    $(".time-block").each(function() {
        var schedHour = parseInt($(this).attr('id').split('-')[1]);
        
        if (schedHour < now) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else if (schedHour === now) {
            $(this).addClass('present');
            $(this).removeClass('past');
            $(this).removeClass('future');
        } else {
            $(this).addClass('future');
        }
    })
}

function readTasksFromStorage() {
    $(".time-block").each(function() {
        console.log(this.id)
        // $(this) = the div parent element

        // var task = localStorage.getItem(this.id);
        var task = localStorage.getItem($(this).attr("id"))

        console.log(task);

        // var textArea = this.children[1];
        var textArea = $(this).children("textarea")

        console.log(textArea)

        // textArea.value = task
        textArea.val(task)
        
    })

}

$(saveBtn).click(function(event) {
    // var textArea = event.currentTarget.previousElementSibling;
    // var task = textArea.value;

    var textArea = $(event.currentTarget).siblings("textarea")
    var task = textArea.val()
    
    // var parent = event.currentTarget.parentElement;
    // var key = parent.id;

    var parent = $(event.currentTarget).parent();
    var key = parent.attr("id")

    event.preventDefault();
    localStorage.setItem(key, task);
    
    
})


readTasksFromStorage();
timeBlockColor();
displayDate();


// $(function () {
       

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
 
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  
//   });


  
