

//nav bar icons
const menuIconEl = document.getElementById('menuIcon');
const calculatorTypeHeadingEl = document.getElementById('calculatorTypeHeading');
const pipIconEl = document.getElementById('pipIcon');
const historyIconEl = document.getElementById('historyIcon');


//Answer block elements
let calculatedAnswerEl = document.getElementById('calculatedAnswer');
let userInputEl = document.getElementById('userInput');


//calculator special function buttons
const mcButtonEl = document.getElementById('mcButton');
const mrButtonEl = document.getElementById('mrButton');
const mPlusButtonEl = document.getElementById('mPlusButton');
const mMinusButtonEl = document.getElementById('mMinusButton');
const msButtonEl = document.getElementById('msButton');

//calculator buttonsContainer
const buttonContainerEl = document.getElementById('buttonContainer');

//calculator Numbers buttons
const decimalPointEl = document.getElementById('decimalPoint');
const numZeroEl = document.getElementById("numZero")
const numOneEl = document.getElementById('numOne')
const numTwoEl = document.getElementById('numTwo');
const numThreeEl = document.getElementById('numThree');
const numFourEl = document.getElementById('numFour');
const numFiveEl = document.getElementById('numFive');
const numSixEl = document.getElementById('numSix');
const numSevenEl = document.getElementById('numSeven')
const numEightEl = document.getElementById('numEight');
const numNineEl = document.getElementById('numNine');


//calculator Operator buttons
const percentButtonEl = document.getElementById('percentButton');
const ceButtonEl = document.getElementById('ceButton');
const cButtonEl = document.getElementById('cButton');
const rightClearButtonEl = document.getElementById("rightClearButton");
const oneDivideXbuttonEl = document.getElementById("oneDivideXbutton");
const xSquareButtonEl = document.getElementById('xSquareButton');
const twoRootXButtonEl = document.getElementById('twoRootXButton')
const divideButtonEl = document.getElementById('divideButton');
const multiplyButtonEl = document.getElementById('multiplyButton');
const subtractButtonEl = document.getElementById('subtractButton');
const additionButtonEl = document.getElementById('additionButton');
const plusMinusButtonEl = document.getElementById('plusMinusButton');
const equalButtonEl = document.getElementById('equalButton');

//calculator large devices History Memory elements
const historyButtonEl = document.getElementById('historyButton');
const historyIndicatorButtonEl = document.getElementById('historyIndicatorButton');
const calculatorHistoryAreaEl = document.getElementById('calculatorHistoryArea');
const noHistoryErrorEl = document.getElementById('noHistoryError')

const memoryButtonEl = document.getElementById('memoryButton');
const memoryIndicatorButtonEl = document.getElementById('memoryIndicatorButton')
const calculatorMemoryAreaEl = document.getElementById('calculatorMemoryArea');
const noMemoryErrorEl = document.getElementById('noMemoryError');


//This function is used to check, if we imported all the DOM Elements from HTML to JS Successfully.
//If there is any problem while importing DOM Elements, this function would print the error DOM element variable

function DOMElementsChecker(){
    let DOMElementsArray = [];

    //adding navbar elements to the array
    DOMElementsArray.push(menuIconEl);
    DOMElementsArray.push(calculatorTypeHeadingEl);
    DOMElementsArray.push(pipIconEl);
    DOMElementsArray.push(historyIconEl);

    //adding Answer block elements
    DOMElementsArray.push(calculatedAnswerEl);
    DOMElementsArray.push(userInputEl);

    //adding calculator special functions buttons
    DOMElementsArray.push(mcButtonEl);
    DOMElementsArray.push(mrButtonEl);
    DOMElementsArray.push(mPlusButtonEl);
    DOMElementsArray.push(mMinusButtonEl);
    DOMElementsArray.push(msButtonEl);

    //adding calculator number buttons
    DOMElementsArray.push(decimalPointEl);
    DOMElementsArray.push(numZeroEl);
    DOMElementsArray.push(numOneEl);
    DOMElementsArray.push(numTwoEl);
    DOMElementsArray.push(numThreeEl);
    DOMElementsArray.push(numFourEl);
    DOMElementsArray.push(numFiveEl);
    DOMElementsArray.push(numSixEl);
    DOMElementsArray.push(numSevenEl);
    DOMElementsArray.push(numEightEl);
    DOMElementsArray.push(numNineEl);

    //adding calculator Operators
    DOMElementsArray.push(percentButtonEl);
    DOMElementsArray.push(ceButtonEl);
    DOMElementsArray.push(cButtonEl);
    DOMElementsArray.push(rightClearButtonEl);
    DOMElementsArray.push(oneDivideXbuttonEl);
    DOMElementsArray.push(xSquareButtonEl);
    DOMElementsArray.push(twoRootXButtonEl);
    DOMElementsArray.push(divideButtonEl);
    DOMElementsArray.push(multiplyButtonEl);
    DOMElementsArray.push(subtractButtonEl);
    DOMElementsArray.push(additionButtonEl);
    DOMElementsArray.push(plusMinusButtonEl);
    DOMElementsArray.push(equalButtonEl);

    //adding History Memory Elements for large devices
    DOMElementsArray.push(historyButtonEl);
    DOMElementsArray.push(historyIndicatorButtonEl);
    DOMElementsArray.push(calculatorHistoryAreaEl);
    DOMElementsArray.push(noHistoryErrorEl);
    DOMElementsArray.push(memoryButtonEl);
    DOMElementsArray.push(memoryIndicatorButtonEl);
    DOMElementsArray.push(calculatorMemoryAreaEl);
    DOMElementsArray.push(noMemoryErrorEl);


    let totalElements = DOMElementsArray.length;
    let elementsThatAreNull = DOMElementsArray.filter((eachArrayItem, index, arr)=>{
        if(eachArrayItem === null){
            return eachArrayItem
        }
    })
    if(elementsThatAreNull.length === 0){
        console.log('All the DOM elements are loaded to JS')
    }else{
        console.log('There seems to be an error while getting DOM Elements')
        console.log(elementsThatAreNull);
    } 
}

//called the function to check, if all the DOM Elements are loaded
DOMElementsChecker()

//This function logs the number input on the userInputEl, if the user cliks on number buttons or the user enters keys on keyborad
function inputLoger(event){
    //logs numbers when user clicks on the numbers
    if(event.type === 'click'){
        if (userInputEl.textContent.length < 16){
            calculatorObject.expression += event.target.textContent;
            calculatorObject.showExpressionOnUserInput();
            calculatorObject.calculateExpression();
            calculatorObject.loadAnswerOnCalculateAnswer();
        }
    }
    //logs only numbers when user types numbers on the keyborad
    else if (event.type === 'keyup'){
        let possibleValuesToBeAccepted = ["0","1","2","3","4","5","6","7","8","9"]
        let enteredKey = event.key;
        let isEnteredValueOneAmongPossibleValues = possibleValuesToBeAccepted.some((everyValue)=>{
           if(everyValue === enteredKey){
                return true; 
           }
        })
        if (isEnteredValueOneAmongPossibleValues){
            if (userInputEl.textContent.length < 16){
                calculatorObject.expression += enteredKey;
                calculatorObject.showExpressionOnUserInput();
                calculatorObject.calculateExpression();
                calculatorObject.loadAnswerOnCalculateAnswer();
            }
        }
    }
    
}


//This function would be called, whenever the user clicks or types operators(+,-,*,/,.,backspace)
function whenOperatorClicked(event){
    
    let currentTextOnUserInputEl = userInputEl.textContent; //always refers to the value on userinputElement. 
    //when user clicks the operator buttons this if block would work
    if (event.type === 'click'){    
        //if the last enterd value is NaN when converted to integed, it means that the previously entered value is operator and we should not allow more than one operator.
        //This would not allow any operator next to decimal point
        if (isNaN(parseInt(currentTextOnUserInputEl[(currentTextOnUserInputEl.length)-1])) === false){
            calculatorObject.expression += event.target.textContent;  //adds operator to the expression property of calculator Object
            calculatorObject.showExpressionOnUserInput();             //shows the value of expression propery value on userInput
            calculatorObject.calculateExpression();                   //Evaluates the expression  
            calculatorObject.loadAnswerOnCalculateAnswer();           //shows output on the userInputEl.
        }
        else{
            let previouslyEnteredOperator = userInputEl.textContent[userInputEl.textContent.length-1]
            let currentOperator = event.target.textContent;
            if (previouslyEnteredOperator!=currentOperator){
                let currentExpressionWithoutOperator = calculatorObject.expression.slice(0, calculatorObject.expression.length-1)
                let expressionWithNewOperator = currentExpressionWithoutOperator+currentOperator;
                calculatorObject.expression = expressionWithNewOperator;
                calculatorObject.showExpressionOnUserInput();
            }
        }
    }
    else if((event.type === 'keyup') && ((event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '.'))){    
        if (isNaN(parseInt(currentTextOnUserInputEl[(currentTextOnUserInputEl.length)-1])) === false){
                calculatorObject.expression += event.key;
                calculatorObject.showExpressionOnUserInput();
                calculatorObject.calculateExpression();
                calculatorObject.loadAnswerOnCalculateAnswer();
        }
        else{
            let previouslyEnteredOperatorWhenKeyUp = userInputEl.textContent[userInputEl.textContent.length-1]
            let currentOperatorWhenKeyUp = event.key;
            if (previouslyEnteredOperatorWhenKeyUp !== currentOperatorWhenKeyUp){
                let currentExpressionWithoutOperatorWhenKeyUp = calculatorObject.expression.slice(0, calculatorObject.expression.length-1)
                let expressionWithNewOperatorWhenKeyUp = currentExpressionWithoutOperatorWhenKeyUp+currentOperatorWhenKeyUp;
                calculatorObject.expression = expressionWithNewOperatorWhenKeyUp;
                calculatorObject.showExpressionOnUserInput();
            }
        }

        
    }    
}    

//when crossButton is clicked or when the backspace button typed it clears out the elements starting from right
function whenCrossButtonClicked(event){
    if ((event.type === 'click' && event.target.id === 'rightClearButton')||(event.type==='keyup' && event.key === 'Backspace')){
        console.log('Cross button clicked or backspace typed. just Clear one character from right and perform calculation if the expression is non empty. If the expression is empty, show zero on userInput element and clear the calculatedAnswer element ')
        calculatorObject.clearElementsFromRightAndShowExpressionOnInput();
        if (calculatorObject.expression !== ""){
            calculatorObject.calculateExpression();
            calculatorObject.loadAnswerOnCalculateAnswer()
        }else{
            calculatorObject.showZeroOnUserInputEl()
            calculatorObject.showEmptyStringOnCalculateAnswer();
        }
    }
}   

function whenCButtonClicked(event){
    if (event.target.id === "cButton"){
        console.log('C button clicked. Just show zero on userinput element and clear expression of Calculator Object')
        calculatorObject.showZeroOnUserInputEl();
        calculatorObject.clearExpressionPropertyValue();
    }
}

function whenCEbuttonClicked(event){
    if ((event.type === 'click' && event.target.id === 'ceButton')||(event.type === 'keyup' && event.key==='Escape')){
        console.log("ce button clicked or Escape pressed on key board. Just show zero on userInput element. Empty the calculatedAnswer element. Clear expression of calculatorObject")
        calculatorObject.showZeroOnUserInputEl();
        calculatorObject.showEmptyStringOnCalculateAnswer();
        calculatorObject.clearExpressionPropertyValue();
    }
}

function whenEqualButtonClicked(event){
    if((event.type==='click' && event.target.id==="equalButton")||(event.type==='keyup' && event.key==='Enter')){
        console.log("Equal button clicked or Enter pressed. Just perform Equals To Operation, if expression is non empty and last character of expression is not operator")
        if ((calculatorObject.expression !== "") && (isNaN(parseInt(calculatorObject.expression[calculatorObject.expression.length-1])) === false)){
            calculatorObject.equalFunctionality();
        }
    }
}



function whenPlusMinusButtonClicked(){
    console.log("Plus minus button is clicked. Perform plus minus operation if expression of Calculator Object is not 0")
    if (calculatorObject.expression !== ''){
        console.log('No empty expression')
        const indexOfLastOperator = calculatorObject.getLastOperatorIndex(); //gets the last operators index
        if (indexOfLastOperator === -1 && userInputEl.textContent!=="0"){
            console.log('No Operator Present')
            console.log('Multiply expression with -1')
            calculatorObject.expression = ""+-1*parseInt(calculatorObject.expression)
            calculatorObject.showExpressionOnUserInput();
            calculatorObject.calculateExpression();
            calculatorObject.loadAnswerOnCalculateAnswer();
        }
        else{
            console.log('Operator present')
            console.log(indexOfLastOperator)
            let lastOperator = calculatorObject.expression[indexOfLastOperator]
            let characterBeforeLastOperator = calculatorObject.expression[indexOfLastOperator-1]
            switch (lastOperator){
                case "-":
                    if  (indexOfLastOperator === 0){
                        console.log('Only one number entered with negative sign. Multiply with -1')
                        calculatorObject.expression = ""+-1*parseInt(calculatorObject.expression)
                        calculatorObject.showExpressionOnUserInput();
                        calculatorObject.calculateExpression();
                        calculatorObject.loadAnswerOnCalculateAnswer();
                    }
                    else{
                        if (characterBeforeLastOperator !== "*" && characterBeforeLastOperator !== "/"){
                            console.log('previous character is not an operator. current last operator is - just change it to +')
                            calculatorObject.changeLastOperator(indexOfLastOperator, "+")
                            calculatorObject.showExpressionOnUserInput();
                            calculatorObject.calculateExpression();
                            calculatorObject.loadAnswerOnCalculateAnswer();        
                        }else{
                            console.log('Previous character is * or / and current character is "-". just make the current operator as empty string')
                            calculatorObject.changeLastOperator(indexOfLastOperator, "")
                            calculatorObject.showExpressionOnUserInput();
                            calculatorObject.calculateExpression();
                            calculatorObject.loadAnswerOnCalculateAnswer();
                        }
                    }
                    break;
                case "+":
                    console.log("Last operator is '+' just change it as -")
                    calculatorObject.changeLastOperator(indexOfLastOperator, "-")
                    calculatorObject.showExpressionOnUserInput();
                    calculatorObject.calculateExpression();
                    calculatorObject.loadAnswerOnCalculateAnswer();
                    break;
                case "*":
                    console.log("Last operator is '*' just change it as '*-'")
                    calculatorObject.changeLastOperator(indexOfLastOperator, "*-")
                    calculatorObject.showExpressionOnUserInput();
                    calculatorObject.calculateExpression();
                    calculatorObject.loadAnswerOnCalculateAnswer();
                    break;
                case "/":
                    console.log("Last operator is '/' just change it as '/-'")
                    calculatorObject.changeLastOperator(indexOfLastOperator, "/-")
                    calculatorObject.showExpressionOnUserInput();
                    calculatorObject.calculateExpression();
                    calculatorObject.loadAnswerOnCalculateAnswer();
                    break;  
                default :
                    calculatorObject.showZeroOnUserInputEl();
                    calculatorObject.showEmptyStringOnCalculateAnswer();
                    calculatorObject.clearExpressionPropertyValue();
                   break; 
            }
        } 
    }
    
}


function whenPercentButtonClicked (){
    if(calculatorObject.expression !== ""){
        console.log("expression on calculator is not empty")
        if (calculatorObject.getLastOperatorIndex()!==-1){
            console.log("Operator present")
            let lastOperatorIndex = calculatorObject.getLastOperatorIndex()
            let lastOperator = calculatorObject.expression[lastOperatorIndex];
            let lefthandSideElements = calculatorObject.expression.slice(0, lastOperatorIndex)
            let rightHandSideElements = calculatorObject.expression.slice(lastOperatorIndex+1, (calculatorObject.lengthOfExpression())+1)
            
            let answerTillLastOperator = math.evaluate(lefthandSideElements)
            
            if (isNaN(parseInt(calculatorObject.expression[calculatorObject.expression.length-1]))){
                console.log('last value is a NaN value no action can be performed')
            }else{
                console.log("We have to calculate the percent lhs + lhs*rhs%")
                let percentValue = answerTillLastOperator * parseInt(rightHandSideElements)/100
                calculatorObject.expression = lefthandSideElements + lastOperator + percentValue
                calculatorObject.showExpressionOnUserInput()
                calculatorObject.calculateExpression()
                calculatorObject.loadAnswerOnCalculateAnswer()
            }
        }else{
            console.log('There is no operator just calculate the expression divided by 100')
            calculatorObject.expression = (calculatorObject.expression)/100
            calculatorObject.showExpressionOnUserInput()
            calculatedAnswerEl.textContent = calculatorObject.expression;
        }
    }
}

function whenOneDivideXButtonClicked (){
    if (calculatorObject.expression!==""){
        console.log("calculatorObject expression is non empty")
        if(calculatorObject.getLastOperatorIndex()!==-1){
            console.log('Operator present on the calculator object')
            let lastOperatorIndex = calculatorObject.getLastOperatorIndex();
            let lastOperator = calculatorObject.expression[lastOperatorIndex]
            let leftHandSideEquation = calculatorObject.expression.slice(0, lastOperatorIndex)
            let rightHandSideEquation = calculatorObject.expression.slice(lastOperatorIndex+1, calculatorObject.lengthOfExpression())
            console.log(leftHandSideEquation)
            console.log(rightHandSideEquation)

            rightHandSideEquation = "1/"+rightHandSideEquation


            calculatorObject.expression = leftHandSideEquation + lastOperator + rightHandSideEquation
            calculatorObject.showExpressionOnUserInput()
            calculatorObject.calculateExpression()
            calculatorObject.loadAnswerOnCalculateAnswer()

        }else{
            console.log('No operator present on the calculator object')
            calculatorObject.expression = "1/"+ calculatorObject.expression
            calculatorObject.showExpressionOnUserInput()
            calculatorObject.calculateExpression()
            calculatorObject.loadAnswerOnCalculateAnswer()
        }
    }
}

const calculatorObject = {
    expression:"",
    result:"",
    calculateExpression : function(){
        try{
        let answer = math.evaluate(this.expression);
        answer = answer.toLocaleString();
        this.result = answer;
        }catch{
            console.log('Problem with eval expression')
        }
    },
    loadAnswerOnCalculateAnswer : function(){   //loads the answer on the calculatedAnswer element
        calculatedAnswerEl.textContent = this.result;
    },
    showExpressionOnUserInput : function(){    //shows the expression on the userInput element
        userInputEl.textContent = this.expression;
    },
    showEmptyStringOnCalculateAnswer : function(){ //Empties the calculatedAnswer Element
        calculatedAnswerEl.textContent="";
    },
    showZeroOnUserInputEl : function(){  //shows zero on the userInput Element
        userInputEl.textContent = "0";
    },
    clearExpressionPropertyValue : function(){ //clears the expression of caluculatorObject
        this.expression = "";
    },
    lengthOfExpression : function(){   //gives the length of expression of calculatorObject
        return this.expression.length;
    },
    clearElementsFromRightAndShowExpressionOnInput : function(){ //Clears the last charater from right of the expression and shows the same on the userInput element
        let expressionLenght = this.lengthOfExpression();
        this.expression = this.expression.slice(0, expressionLenght-1)
        this.showExpressionOnUserInput();
    },
    equalFunctionality : function(){ //when this function is called, if shows result on the userInputElenet element and expression on the calculatedAnswer element with equalt to symbol and clears the expressoin of calculatorObject
        userInputEl.textContent = this.result;
        calculatedAnswerEl.textContent = this.expression + "="
        this.clearExpressionPropertyValue()
    },
    getLastOperatorIndex : function(){ //gives the last operator index
        let lastOperatorIndex = -1;
        let expressionInArrayFormat = this.expression.split("");
        expressionInArrayFormat.forEach((eachItem, index, arr)=>{
            if (eachItem!=="." && isNaN(parseInt(eachItem))){
                lastOperatorIndex = index
            }
        });
        return lastOperatorIndex
    },
    changeLastOperator : function(index, operator){ //changes last operator with given value
        let expressionInArrayFormat = this.expression.split("");
        expressionInArrayFormat[index] = operator;
        this.expression = expressionInArrayFormat.join("");
    }

}

document.addEventListener('keyup', inputLoger); //For getting number input while key press
document.addEventListener('keyup', whenOperatorClicked); //For getting operator input while key press

document.addEventListener('keyup', whenCrossButtonClicked); //when backspace pressed on key board
rightClearButtonEl.addEventListener('click', whenCrossButtonClicked)// when cross button pressed.

cButtonEl.addEventListener('click', whenCButtonClicked);//when c button clicked

ceButtonEl.addEventListener('click', whenCEbuttonClicked); //when ce button clicked
document.addEventListener('keyup', whenCEbuttonClicked); //when escape key pressed

equalButtonEl.addEventListener('click', whenEqualButtonClicked); //when equal button clicked
document.addEventListener('keyup', whenEqualButtonClicked); //when enter key pressed

plusMinusButtonEl.addEventListener('click', whenPlusMinusButtonClicked); //when plus minus button clicked
percentButtonEl.addEventListener('click', whenPercentButtonClicked)

oneDivideXbuttonEl.addEventListener('click', whenOneDivideXButtonClicked);

/* calculatorObject.expression='pow(4,2)'
calculatorObject.showExpressionOnUserInput()
calculatorObject.calculateExpression()
calculatorObject.loadAnswerOnCalculateAnswer(); */
