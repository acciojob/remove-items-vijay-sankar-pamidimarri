//your JS code here. If required.
let arr=document.getElementById("colorSelect");
document.querySelector("input").addEventListener('click',()=>{   
    let val=document.querySelector("#colorSelect").value;
     for(let i=0;i<arr.options.length;i++){
		 if(arr[i].options[i].value===val){
			 arr.remove(i); 
		 }
	 }
})