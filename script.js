//your JS code here. If required.
let arr=document.getElementById("colorSelect");
document.querySelector("input").addEventListener('click',()=>{   
    let val=document.querySelector("#colorSelect").value;
     for(let i=0;i<arr.length;i++){
		 if(arr[i].value===val){
			 arr.remove(i); 
		 }
	 }
})