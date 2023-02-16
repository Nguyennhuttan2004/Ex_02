let arrNumb = [2,3,-12,65,-89,32,69,-22,77,89,100,56,6,64]
console.log(arrNumb);

function isPrime(numb) {
    if (typeof numb != "number") return false
  if(numb<1) return false 
  if(numb%2==0 ) return false 
  for (let i=2 ;i<= Math.sqrt(numb);i+=1)
  {
    if(numb%i==0) return false 
  }
  return true 
    // return true/false;
}
//  let value = isPrime()
//  console.log(value);


function isPerfect(numb) {
    let sum=0
    if (typeof numb != "number") return false
   if(numb<1) return false 
   if(numb ==2) return true
   for(let i=1; i<numb;i++)
   if(numb%i==0)
   { sum= sum +i}
   if(sum== numb && numb!=0) return true 
   return false
}
    // return true/false;

// let value = isPerfect(34)
// console.log(value);


function isEvenNumb(numb) {
    if (typeof numb != "number") return false
if (numb %2 ==0) return true 
return false

    // return true/false;
}
// let value = isEvenNumb()
//  console.log(value);


function isOdd(numb) {
    if (typeof numb != "number") return false
if (numb %2!=0) return true
return false

    // return true/false;
}
// let value = isOdd()
//  console.log(value);
function findMax(arr) {
    // kiểu dữ liệu: string, number, boolean
    if(!Array.isArray(arr)) return 0

    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {  
        if(arr[i] >= max){
            max = arr[i]
        }
    }
    return max
        
}
//console.log(findMax(arrNumb));

function findMin(arr) {
    if(Array.isArray(arr)) return true

    let min = arr[0]
    for (let i=0;i< arr.length;i++)
    {
        if(arr[i]<min)
        min= arr[i]
    }
    return min;
    // return number
}
//console.log(findMin(arrNumb));


//----------------------------------Function------------------------------///

// Dếm số lượng phần tử có trong mảng
function countItemArr(arr){
    let count = 0;
    for(let  i = 0; i < arr.length; ++i){
      
            count++;
    }
    return count;
}
//console.log(countItemArr(arrNumb));

// 	1.1: Số lượng số nguyên tố
function countPrimeNumb(arr) {
    
    let count = 0;
     for(let  i = 0; i < arr.length; ++i){
   if(isPrime(arr[i]))
     {   count++;} 
    }
    return count ;
    // return number
}
//console.log(countPrimeNumb(arrNumb));

// 	1.2: Số lượng số hoàn thiện
function countPerfectNumb(arr) {
   let count=0;
   for(let i=0;i<arr.length;i++)
   {
    if(isPerfect(arr[i]))
    count ++
   }
   return count ;
   
   
    // return number
}
//console.log(countPerfectNumb(arrNumb));
// 	1.3: Số lượng số chẳn
function countEvenNumb(arr) {

    let count =0;
    for(i=0;i<arr.length;i++)
    {
        if(isEvenNumb(arr[i]))
        count++;
    }
    return count;
    // return number
}
//console.log(countEvenNumb(arrNumb));
function totalPositiveNumb(arr) {
    let sum =0;
    for(let i=0;i< arr.length;i++)
    {
        if(isEvenNumb(arr[i]))
        sum += arr[i];
    }
    return sum;

    // check for positive numbers
    // return total
}
//console.log(totalPositiveNumb(arrNumb));
function totalNagetiveNumb(arr) {
    let sum =0;
    for (let i=0 ; i<arr.length;i++)
    {
        if(isOdd(arr[i]))
        sum+= arr[i]
    }
    return sum;
    // check for negative number    
    // return total
}
//console.log(totalNagetiveNumb(arrNumb));
// 	2.2: Tính tổng trung bình mảng
function averageArr(arr) { 
    let average = 0;
    let sum=0;
    for(i=0 ; i<arr.length;i++)
    {
    sum+= arr[i];
    average= sum/countItemArr(arr)
    }
    return average;
    // return total
}
//console.log(averageArr(arrNumb));
// 	2.3: Tính tổng các số nguyên tố
function totalPrimeNumb(arr) {
let sum=0;
for(let i=0;i<arr.length;i++)
{
    if(isPrime(arr[i]))
    sum+= arr[i];
}
return sum;
    // check for prime number
    // return total
}
//console.log(totalPrimeNumb(arrNumb));
// 	2.4: Tính tổng các số hoàn thiện
function totaPerfectNumb(arr) {
    let sum=0;
    for(let i=0; i<arr.length;i++)
    if(isPerfect(arr[i]))
    sum+= arr[i]
    return sum;
    // check for negative number    
    // return total
}
//console.log(totaPerfectNumb(arrNumb));
// 3. Viết chương trình liệt kê các số chẵn, số lẻ
// 	3.1: Liệt kể số chẵn dương
function amountEvenPositive(arr) {
    if(!Array.isArray(arr)) return 0;
    let positiveArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 && arr[i] > 0){
            positiveArr.push(arr[i]);
        }
    }
    return 'Even number: '+ positiveArr.join('-')
}
//console.log(amountEvenPositive(arrNumb));

// 	3.2: Liệt kê số lẻ âm
// 	3.3: Liệt kê số nguyên tố
function amountPrimeNumber(arr) {
    if(!Array.isArray(arr)) return 0;
    let PrimeNumber= []
    for (let i=0;i<arr.length;i++)
   if(isPrime(arr[i]))
   { PrimeNumber.push(arr[i]);}
     return 'Prime number:  ' +  PrimeNumber.join(' | ')


    // check for prime number
    // return string
}
console.log(amountPrimeNumber(arrNumb));
// 	3.4: Liệt kê số hoàn thiện
function amountPerfectNumber(arr) {
    // check for perfect number
    // return string
}

// 5. Viết chương trình xuất ra số nguyên tố lớn nhất
function findMaxPrimeNumb(arr) {
    // return number
}
// 6. Viết chương trình xuất ra số hoàn thiện nhỏ nhất
function findMinPerfectNumb(arr) {
    // return number
}
// 7. So sánh số lượng số nguyên tố so với số lượng số hoàn thiện
function compareNumb(arr){
    // Arr contains isPrime number

    // Arr contains perfect number

    // Compare length prime vs length perfect

    // return string-compare
}
// 8. Viết chương trình xuất số nguyên tố xuất hiện đầu tiên trong mảng
// 9. Viết chương trình xuất số dương xuất hiện cuối trong mảng
// 10. Liệt kê các số nguyên tố nằm trong khoảng [50,100]



