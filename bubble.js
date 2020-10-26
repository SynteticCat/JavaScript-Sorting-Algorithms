const clothes = [
	{ kind: 'sweater', sex: 'female' },
	{ kind: 'sweater', sex: 'male' },
	{ kind: 'jeans', sex: 'female' },
	{ kind: 'sweater', sex: 'male' },
	{ kind: 'jeans', sex: 'male' },
];

const comparation = (clother1, clother2) => {
  return clother1.sex === 'male' ? true : false;
};

const bubbleSort = (arr, comparation) =>
{                                      
   const n = arr.length;
   for (let i = 0; i < n-1; i++) { 
       for (let j = 0; j < n-1-i; j++) { 
           // сравниваем элементы
           if (comparation(arr[j], arr[j+1])) { 
               // делаем обмен элементов
               let temp = arr[j+1]; 
               arr[j+1] = arr[j]; 
               arr[j] = temp; 
           }
       }
   }                    
}

bubbleSort(clothes, comparation);  // сортируем по полю sex (сначала женская одежда, потом мужская)
console.log(clothes);
