// returns boolean whether string contains only unique chars
function isUnique(str) {
  // assuming ascii and 128 chars
  if (str.length > 128) return false;

  const charSet = new Array(128);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    if (charSet[str.charCodeAt(i)]) return false;
    charSet[str.charCodeAt(i)] = true;
  }

  return true;
}

// if we cant use addtl DS - we can do it in o(n^2) by comparing each letter
// we can do it in o(nlogn) if allowed to sort string

// returns true if one str is a permutation of the other
// permutation = same characters but jumbled around
function isPermutation(str1, str2) {
  // option 1: o(n^2) by comparing each char in both str
  // option 2: 2 separate hash maps
  if (str1.length !== str2.length) return false;

  let charSet = new Array(128).fill(0);

  for (let i = 0; i < str1.length; i++) {
    charSet[str1.charCodeAt(i)]++;
  }

  for (let i = 0; i < str2.length; i++) {
    charSet[str2.charCodeAt(i)]--;

    if (charSet[str2.charCodeAt(i)] < 0) return false;
  }
  return true;
  // option 3: we can sort the strings and iterate through them both at once - less space
}

function isPalPermutation(str) {
  let N = str.length;

  const map = new Map();

  for (let i = 0; i < N; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  let hasOdd = false;

  for (let [key, value] of map) {
    if (N % 2 === 1) {
      if (value === 1 || value % 2 === 1) {
        if (hasOdd) return false;
        else hasOdd = true;
      }
    } else {
      if (value % 2 === 1 || value === 1) {
        return false;
      }
    }
  }
  return true;
}

function oneAway(str1, str2) {
  function checkMissing(longer, shorter) {
    let hasAdj = false;
    let i = 0,
      j = 0;

    while (longer[i] && shorter[j]) {
      if (longer[i] !== shorter[j]) {
        if (hasAdj) {
          return false;
        } else {
          i++;
          continue;
        }
      }
      i++;
      j++;
    }
    return true;
  }

  if (str1.length !== str2.length) {
    let shorter = str1.length > str2.length ? str2 : str1;
    let longer = str1.length > str2.length ? str1 : str2;
    return checkMissing(longer, shorter);
  } else {
    let N = str1.length;
    let hasReplaced = false;
    for (let i = 0; i < N; i++) {
      if (str1[i] !== str2[i]) {
        if (hasReplaced) return false;
        else {
          hasReplaced = true;
        }
      }
    }
    return true;
  }
}

function strCompression(str) {
  let result = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      count++;
      continue;
    }
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += `${str[i - 1]}${count}`;
      count = 1;
    }
    if (i === str.length - 1) {
      result += `${str[i]}${count}`;
    }
  }
  return result.length < str.length ? result : str;
}

function rotateMatrix(matrix) {
  const N = matrix.length;
  // swap i an j diagonally
  for (let i = 0; i < N / 2; i++) {
    for (let j = i; j < N; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < N; i++) {
    let start = 0;
    end = N - 1;

    let half = Math.floor(N / 2);

    while (start < half) {
      let temp = matrix[i][start];
      matrix[i][start] = matrix[i][end];
      matrix[i][end] = temp;
      start++;
      end--;
    }
  }
  return matrix;
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
