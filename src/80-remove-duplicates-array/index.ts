export function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  let index = 2;

  for (let i = 2; i < n; i++) {
    if (nums[i] !== nums[index - 2]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

/**
 * MY SOLUTION!! (total trash)
 * function removeDuplicates(nums: number[]): number {
  let a = nums.length - 2;
  let b = nums.length - 1;

  while (a >= -1) {
    let dist;
    if (nums[a] !== nums[b]) {
      dist = b - a;
      if (dist > 2) {
        nums.splice(a + 1, dist - 2);
      }
      b = a;
    }
    a--;
  }

  return nums.length;
}

 */
