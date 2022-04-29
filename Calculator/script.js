
let a;
let b;
let operationResult;
let operationName;



function calculation(a, b, operationName) {

       // prompt operationName (str 12-16)
	   do {
		operationName = prompt('Enter operator:  + , - , * ,  /  ')
	
      } while (!operationName  || operationName != `+` && operationName != `-` && operationName != `*` && operationName != `/`)
		
	
	    // prompt a (str 19-22)
         do {
		a = +prompt('Enter: a = ')
	
	 	} while (a === null || a === ""  || isNaN(a) )
      

	
	  // prompt b (str 28-31)
	   
	    do {
		b = +prompt('Enter: b = ')
          }
		 while (b === null || b === "" || isNaN(b) || (operationName === `/` && b === 0))
        
	   
	

    // check operationName (str 38-76)
	
	if (operationName === `+`) {
		  function sum(a, b) {
			        return +a + +b
		}

		operationResult = sum(`${a}`, `${b}`);
		
	
	}
		
	if (operationName === `-`) {
		   function subtract(a, b) {
		         	return a - b
		}

		operationResult = subtract(`${a}`, `${b}`);
		console.log(operationResult)

	}	

	if (operationName === `*`) {
	   	function multiply (a, b) {
			         return a * b
		}

		operationResult = multiply (`${a}`, `${b}`);
		console.log(operationResult)

	}	
			
   if (operationName === `/`) {
		   function division (a, b) {
		          	return a / b
		}

		operationResult = division (`${a}`, `${b}`);
		console.log(operationResult)

	}	

     //return for function calculation (str 80)
	
return `${a} ${operationName} ${b} = ${operationResult}`
	
	}


let newCalculation= calculation(`${a}`, `${b}`, `${operationName}`)
console.log(newCalculation);



