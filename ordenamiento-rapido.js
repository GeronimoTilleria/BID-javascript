function quicksort(array) {
    if(array.length < 1) {
        return [];
    }

    const idxPivot = Math.round((array.length - 1) / 2);

    let left = [];
    let right = [];

    let i = 0;
    let j = array.length - 1;
    const pivot = array[idxPivot]

    while(i != j) {
        while(array[i] < pivot) {
            left.push(array[i]);
            i++;
        }

        while(array[j] > pivot) {
            right.push(array[j]);
            j--;
        }

        const aux = array[i];
        array[i] = array[j];
        array[j] = aux;
    }

    return [].concat(quicksort(left), [pivot], quicksort(right));
}

console.log(quicksort([1, 4, 2, 8, 11, 7, 15, 3]));

//Complejidad Big O = O(n^2)
//Complejidad Big Omega = O(n*log(n))
//Complejidad Big Theta = O(n*log(n))