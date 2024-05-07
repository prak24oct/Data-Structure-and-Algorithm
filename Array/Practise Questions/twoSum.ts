// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    for (let j = i+1; j < nums.length; j++) {
      let sum = temp + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// function optimzedTwoSum(nums: number[], target: number): number[] {

//   let map:{[key:number, value:number]} = {}
 
//   for(let i =0; i< nums.length; i++){
//     let currentMapValue = map[nums[i]]


//   }

// }

// console.log(twoSum( [2,7,11,15] ,  9))
console.log(twoSum([3, 2, 4], 6));
