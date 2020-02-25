var first="";
var second="";
var operator="";
var op="false";
function clicked(val)
{	
	if(val=="+" || val=="-" || val=="*" || val=="/" || val=="%" )  // check if any operator is pressed
		{
			if(op=="false")   //avoids retyping of operator
				{
					document.getElementById("text").value+=val;
					operator=val;
		    		op="true";
		    	}
	    }

	else   // value other than operator
		{
			if(val=="0" && document.getElementById("text").value=="")  // avoids retyping of 0 at the beginning
				{}
			else
			{
				document.getElementById("text").value+=val; 
				if(op=="false")
					first+=val;
				else
					second+=val;
			}
		}
	

	if(val=="=")    // evaluates the result when = is pressed
	{
		var result = solve(first,second,operator);
		document.getElementById("text").value=result;
		first=result;
		second="";
		operator="";
		op="false";
	}
}

// function to solve the operations
function solve(first, second, operator)
{
	switch(operator)
	{
		case '+' : return parseFloat(first)+parseFloat(second);
		case '-' : return  parseFloat(first)-parseFloat(second);
		case '*' : return  parseFloat(first)*parseFloat(second);
		case '/' : return  parseFloat(first)/parseFloat(second);
		case '%' : return  parseFloat(first)%parseFloat(second);
	}
}
//this function resets the calculator
function clr()
{
	  document.getElementById("text").value="";
		first="";
		second="";
		operator="";
		op="false";
}