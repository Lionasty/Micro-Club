var arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var i, j, n;
for (n = 0; n < arr.length-1; n++) {
    j = n;
    for (i = n + 1; i < arr.length; i++) {
        if (arr[i] < arr[j]) {
            j = i;
        }
        if (arr[n] > arr[j]) {
            arr[n] = arr[n] + arr[j];
            arr[j] = arr[n] - arr[j];
            arr[n] = arr[n] - arr[j];
        }
    }
}
console.log(arr);