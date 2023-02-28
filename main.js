let row = Number(prompt("Enter rows or columns for print hollow square"));

for(i=1; i<=row; i++){
     for(j=1; j<=row; j++){
	     if(i == 1 || i ==row || j==row || j==1){
		   document.write("*" + " ");
		}
		else{
		    document.write("&nbsp&nbsp&nbsp");
		}
	}
	document.write("<br>");
}