
#### Exercício 1

```
add(element:any) {
   this.queue.push(element);
}
remove() {
   if (this.isEmpty())
       return "Underflow";
   return this.queue.shift();
}
```
* R: Analisando os métodos apresentados, podemos inferir que a estrutura sendo representada é uma fila (`queue`). 


#### Exercício 2

```
add(value: any) {
  const node = new Node(value);
  if(!this.head){
    this.head = node;
  }else{
    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next=node;
  }
  this.size++;
}
remove(value:any){
  let current = this.head;
  let previous = null;
  while (current){
    if(current.value===value){
      if(!previous){
        this.head=current.next;
      }else{
        previous.next=current.next;
      }
      this.size--;
      return true;
    }
    previous=current;
    current=current.next;
  }
  return false;
}
```
* R: Os métodos apresentados definem uma estrutura de dados do tipo lista encadeada.


#### Exercício 3

```
add(element:any){
    this.stack.push(element);
}
remove(){
    if(this.isEmpty())
        return "Underflow";
    return this.stack.pop();
}
```

* R: Os métodos apresentados definem uma estrutura de dados do tipo pilha.