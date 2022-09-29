
    window.onload = function(){
        calculator.init();
    };
    let calculator = {
        buttons: undefined,
        input: undefined,

        init: function () {
            this.buttons = document.querySelectorAll(".numbers button, operators button");
            this.input = document.getElementById("input");

            for(let i=0; i<this.buttons.length; i++){
                let el= this.buttons[i];
                el.addEventListener("click",this.buttonClick);
            }
        },
        buttonClick :function(e){
           let divHTMLText = e.target.innerHTML;
           console.log(divHTMLText);

            switch(divHTMLText){
                case"=":
                calculator.evaluate();
                break;
                case"=":
                calculator.clear();
                break;
                case"9":
                case"8":
                case"7":
                case"6":
                case"5":
                case"4":
                case"3":
                case"2":
                case"1":
                case"0":
                case"00":
                case".":
                case"+":
                case"-":
                case"*":
                case"/":
                calculator.addToInput(divHTMLText);
                break;
            }

           calculator.addToInput(divHTMLText);

        },
        addToInput: function(str){
            this.input.value += str;
        },
        evaluate: function(){
            let result = math.evaluate(calculator.input.value);
            calculator.setInput(result);
        },
        clear: function(){
            calculator.setInput("");
        },
        setInput: function(str){
            calculator.input.value = str;
        }
    };
   
