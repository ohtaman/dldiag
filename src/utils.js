export function times(n) {
    return [...Array(n)].map((_, i) => {return i;});
};