function* fibonacci() {
    let a = 0,
        b = 1;
    for (let i=3;; i++){
        let c = a+b;
        a = b;
        b = c;
        yield a;
    }
}
// let arr=[];

const result = fibonacci();
for (let i=0;i<10;i++){
    console.log(result.next());
    // arr.push(result.next())
}
// console.log(arr[5]);