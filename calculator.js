let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let sqr=document.querySelector(".sqr");

let string = "";
buttons.forEach(button => {
    button.addEventListener("click", (e) =>{

        
        if(e.target.innerHTML == '='){ 
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHTML=="SQR"){
           string=parseFloat(input.value)

           if(!isNaN(string))
            {
            string=string*string
            input.value=string;
        }
           else{input.value="Error"};
        }

        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }

        
    })
})