function lengthOfLastWord(s: string): number {
  return s.trim().split(/\s+/).at(-1).length;
}
