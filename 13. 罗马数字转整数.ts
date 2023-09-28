function romanToInt(s: string): number {
    let count = (s: string, ch: string) =>
        [...s].filter((c) => c === ch).length;
    let n1 = count(s, "I");
    let n2 = count(s, "V");
    let n3 = count(s, "X");
    let n4 = count(s, "L");
    let n5 = count(s, "C");
    let n6 = count(s, "D");
    let n7 = count(s, "M");
    let n8 = s.split("IV").length - 1
    let n9 = s.split("IX").length - 1
    let n10 = s.split("XL").length - 1
    let n11 = s.split("XC").length - 1
    let n12 = s.split("CD").length - 1
    let n13 = s.split("CM").length - 1
    let sum =
        n1 +
        5 * n2 +
        10 * n3 +
        50 * n4 +
        100 * n5 +
        500 * n6 +
        1000 * n7 -
        2 * (n8 + n9) -
        20 * (n10 + n11) -
        200 * (n12 + n13);
    return sum;
};