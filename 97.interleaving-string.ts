/*
 * @lc app=leetcode.cn id=97 lang=typescript
 *
 * [97] Interleaving String
 */

// @lc code=start
type STRID = 1 | 2

class Char {
  value: string
  strID: STRID
  visitedBy: number[]
  constructor(value: string, strID: STRID, visitedBy: number[] = []) {
    this.value = value
    this.strID = strID
    this.visitedBy = visitedBy
  } 
}

class CharArray {
  charArray: Char[] | []
  constructor(str: string, strID: STRID) {
    this.charArray = str.split('').map(char => new Char(char, strID))
  }
}


function mergeOnce(
  charArr1: Char[], charArr2: Char[], s3: string,
  p1: number, p2: number, p3: number,
  childStack: Array<Char | undefined>
): [number, number, number] {
  // 前进一步
  if (charArr1[p1]?.value === s3[p3] && !charArr1[p1].visitedBy.includes(p3)) {
    charArr1[p1].visitedBy.push(p3)
    childStack.push(charArr1[p1])
    return [p1 + 1, p2, p3 + 1]
  } else if (charArr2[p2]?.value === s3[p3] && !charArr2[p2].visitedBy.includes(p3)) {
    charArr2[p2].visitedBy.push(p3)
    childStack.push(charArr2[p2])
    return [p1, p2 + 1, p3 + 1]
  // 后退一步
  } else {
    const topChar = childStack.pop() || null
    if (!topChar) return [p1, p2, p3 - 1]
    if (topChar.strID === 1) return [p1 - 1, p2, p3 - 1]
    if (topChar.strID === 2) return [p1, p2 - 1, p3 - 1]
    
    // no execution just for type check
    return [p1, p2, p3]
  }
}


function isInterleave(s1: string, s2: string, s3: string): boolean {
  const charArr1 = new CharArray(s1, 1).charArray
  const charArr2 = new CharArray(s2, 2).charArray
  let p1 = 0, p2 = 0, p3 = 0

  const childStack = []

  while(p3 >= 0 && p3 < s3.length) {
    [p1, p2, p3] = mergeOnce(charArr1, charArr2, s3, p1, p2, p3, childStack)
  }

  if (
    p1 === s1.length &&
    p2 === s2.length &&
    p3 === s3.length
  ) {
    return true
  }

  return false
};
// @lc code=end

