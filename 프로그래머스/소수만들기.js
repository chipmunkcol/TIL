function solution(nums) {
  //     소수 판단
  //     1과 자기 자신만을 약수로 가지는 수
  const numLength = nums.length;

  let count = 0;
  for (let i = 0; i < numLength; i++) {
    for (let j = i + 1; j < numLength; j++) {
      for (let k = i + 2; k < numLength; k++) {
        if (i < j && j < k) {
          const sum = nums[i] + nums[j] + nums[k];
          if (isPrime(sum)) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("🚀 ~ solution([1,2,3,4]):", solution([1, 2, 3, 4]));
