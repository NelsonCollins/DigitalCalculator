//Define all the needed variables
(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


// Retrieve data when a buttion is clicked

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

// Sum up values when clicked or prompt user to input value if empty

    equal.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value = "Please Enter a Value";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }

    });

// Clear the screen when the clear button is clicked

clear.addEventListener('click', function(e){
    screen.value = '';

})

})();
