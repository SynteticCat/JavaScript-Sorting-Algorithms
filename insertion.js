const clothes = [
	{ kind: 'sweater', price: 179 },
	{ kind: 'sweater', price: 149 },
	{ kind: 'jeans', price: 79 },
	{ kind: 'sweater', price: 249 },
	{ kind: 'jeans', price: 179 },
];

const comparation = (clother1, clother2) => {
  return clother1.price > clother2.price;
};
 
const insertionSort = (arr, comparation) => {
   for (let i = 1, l = arr.length; i < l; i++) {
       const current = arr[i];
       let j = i;

       while (j > 0 && comparation(arr[j - 1], current)) {
           arr[j] = arr[j - 1];
           j--;
       }
       arr[j] = current;
   }
}

insertionSort(clothes, comparation);  // сортируем по полю price
console.log(clothes); 
