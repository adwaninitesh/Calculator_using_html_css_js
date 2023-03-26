let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button')
let outputValue = "";
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerHTML;
         
        if(buttonText == 'x'){
            buttonText = '*';
            outputValue += buttonText
            screen.value = outputValue;
        }
        else if(buttonText == 'AC'){
            outputValue = '';
            screen.value = outputValue;

        }
        else if(buttonText == 'C'){
            screen.value = outputValue;

            outputValue = outputValue.slice(0, -1);
        }
        else if(buttonText == '='){

            screen.value = eval(outputValue);

        }
        else{
            outputValue += buttonText
            screen.value = outputValue;
        }
    })
}