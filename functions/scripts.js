/*
    find_chars(string1,string2) is use to find only the charaters found in the string1 
    and string2 in the order that they are found in string1 and return that string
*/

function find_chars(string1,string2){
	var string3="";

	      for (var j =0; j<=string1.length-1;  j++) {
		      	for (var i =0; i<=string2.length-1;  i++) {

		      		if (string1[j]==string2[i]){

		      			if (!include(string3,string1[j])){

		      				string3+=string1[j];
		      			}   
		      		}
		         }
	      }

	    return string3;
}


/*
This function is takes string and char, it found if the character is include in the string and return true
   if the char is not in this function return false. It work like the function includes() implemented in the classe String.
*/

function include(string,char){
	    	validation=false;
            for (var i =0; i<=string.length-1;  i++) {
		      		if (string[i]==char){
                        validation=true;
                        break;
		      		}
		         } 
		         return validation;  
	    }


/*
	  This function is use to rtate the array of integer by N position
*/

function rotating(array,pos){

		var aux=0,stop=0;

		posdupl=pos;

		for (var i = 1; i <= pos; i++) {

			aux=array[array.length-posdupl];
     
			for (var j = array.length-1-posdupl; j >= stop; j--) {

				array[j+1]=array[j];
			}
			
			array[stop]=aux;	stop++;	posdupl--;
		}
		
		return array;
}

/*
   This function is use to compact the array of integer
  */

function compaction(array){

	var pos=0;
	for (var i = 0; i < array.length-1; i++) {
		pos=i;
		
		while(pos!=array.length){

			if(array[i]==array[pos+1]){

				array=slice_array(array,0,pos+1) + slice_array(array,pos+2,array.length);
				--pos;
			}

			pos++;
		}	
	}

	return array;
}

 /*
	This function is use to slice array of caracters like slice() function
*/

function slice_array(string,start,end){

	var str="";
	for (var i = start; i < end; i++) {
		str+=string[i];
	};

	return str;
}

 /*
	This function is use to calculates the LCM of two integer
*/

function lcm_two_number(a,b){
	var val_a=a,val_b=b;
	if(a<b){
		temp=a;
		a=b;
		b=temp;
	}
	while(b>0){
		temp=b;
		b=a%b;
		a=temp;
	}
	return val_a*(val_b/a);
}



 /*
	This function is use to calculates the LCM of array of integer
*/

function lcm_array(array){
		lcm=array[0];
		for (var i = 1; i < array.length; i++) {
			lcm=lcm_two_number(lcm,array[i]);
		};

		return lcm;
}