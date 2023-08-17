const oneEdit = (primeiro:string, segundo:string):Boolean =>{

    if((segundo.length - primeiro.length)>1 || (segundo.length - primeiro.length)<-1){
       return false
    }
    let count = 0
    for (let i = 0; i < primeiro.length; i++) {
        if (primeiro[i] !== segundo[i]){
            count++
        } 
    }
    return count === 1

}

console.log(oneEdit("jose", "joe"))