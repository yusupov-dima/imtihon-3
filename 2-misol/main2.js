
// 2-misol
var arr = [15, 17, 22, 100, 300, 40, 78, 30, 4, 2]
var maxArr1 = arr[0]
var maxArr2 = arr[0]
var maxArr3 = arr[0]

for(let i=0; i < arr.length; i++){
    if(arr[i] > maxArr1){
        maxArr1 = arr[i]
    }
}

for(let i=0; i < arr.length; i++){
    if(arr[i] > maxArr2 && arr[i] < maxArr1){
        maxArr2 = arr[i]
    }
}

for(let i=0; i < arr.length; i++){
    if(arr[i] > maxArr3 && arr[i] < maxArr2){
        maxArr3 = arr[i]
    }
}

console.log(maxArr1)
console.log(maxArr2)
console.log(maxArr3)