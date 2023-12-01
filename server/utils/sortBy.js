export default function sortBy(array, key, descending = false) {

    array.sort((a, b) => {
        if (a[key] > b[key]) return 1;

        if (a[key] < b[key]) return -1;

        return 0;
    });

    return descending ? array.reverse() : array;
}