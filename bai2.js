let soThuc = [10 , -3, -4, -6, -8, -10, -12];

for (let i =0 ; i < soThuc.length; i++){
    if(soThuc[i] < 0){
        soThuc[i] = soThuc[i] * -1;
    }
}
console.log(soThuc);