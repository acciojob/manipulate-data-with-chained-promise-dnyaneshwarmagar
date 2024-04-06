//your JS code here. If required.

function promise1fn(){
	return new Promise((resolve,reject)=>{
		let array = [1,2,3,4];
			resolve(array)
		
	})
}

function promise2fn(array){
	return new Promise((resolve,reject)=>{
		
		setTimeout(()=>{
			resolve(array.filter((el)=>el%2 === 0))
		},1000);
	})
}

function promise3fn(array){
	return new Promise((resolve,reject)=>{
		array = array.map((el)=> el * 2)
		setTimeout(()=>{
			resolve(array.filter((el)=>el%2 === 0));
		},2000);
	})
}

promise1fn().then((array)=> {document.getElementById("output").textContent = "";return promise2fn(array)}).then((array)=>{document.getElementById("output").textContent = array.join(",");return promise3fn(array)}).then((array)=>{document.getElementById("output").textContent = array.join(",")})
