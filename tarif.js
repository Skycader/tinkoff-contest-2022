//В полученном массиве надо найти наибольшие числа,
//стоящие на нечетных местах и поменять местами,
//если рядом есть число, меньше чем оно само

//На место убытка нужно поставить наибольшую прибыль
let arr = [1,2,3,12,5,1,8]
let max = 0
let index = 0
for (let i=0; i<arr.length; i++) {
    if ((i % 2 == 1)&&(arr[i]>max)) {
        max=arr[i];
        index=i
    }
}
let replace = (arr[index-1]>arr[index+1]) ? arr[index-1] : arr[index+1]

arr[index] = replace


console.log(max,index,replace)