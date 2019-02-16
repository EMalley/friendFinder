$("#submit").on('click', function (event) {
    event.preventDefault();
    // look for selected values in the questions
    var q1 = parseInt($('input[name="q1"]:checked').val() + 1);
    var q2 = parseInt($('input[name="q2"]:checked').val() + 2);
    var q3 = parseInt($('input[name="q3"]:checked').val() + 3);
    var q4 = parseInt($('input[name="q4"]:checked').val() + 4);
    var q5 = parseInt($('input[name="q5"]:checked').val() + 5);

    
})
