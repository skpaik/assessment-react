export default function sortBy(array, key, descending = false) {
    array.sort((a, b) => a[key] - b[key]);

    return descending ? array.reverse() : array;
}
