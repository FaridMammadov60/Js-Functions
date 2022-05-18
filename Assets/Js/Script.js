//Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
function CutNumber([]) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            sum = sum + arr[index];
        }
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(CutNumber(arr));

//Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
let a = 22;
function Method(a) {

    if (a % 7 == 0 && a % 3 == 0) {
        console.log("ədəd 3-ə və 7-ə bölünür");
    }
    else if(a % 7 == 0){
        console.log("ədəd 7-ə bölünür");
    }
    else if(a % 3 == 0){
        console.log("ədəd 3-ə bölünür");
    }
    else{
        console.log("bölünmür");
    }
}

Method(a);
