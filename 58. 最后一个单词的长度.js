function lengthOfLastWord(s) {
  return s.trim().split(/\s+/).at(-1).length;
}
s = "David take me   fly   to   the moon  ";
console.log(lengthOfLastWord(s));
