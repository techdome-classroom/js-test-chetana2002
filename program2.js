const decodeTheRing = function (s, p) {
  // Initialize two pointers, one for the secret message and one for the pattern
  let s_index = 0;
  let p_index = 0;

  // Iterate through the pattern
  while (p_index < p.length) {
      // If the current character in the pattern is a star symbol, skip over it
      if (p[p_index] === '*') {
          // Skip over consecutive star symbols
          while (p_index < p.length && p[p_index] === '*') {
              p_index++;
          }
          // If the pattern has been fully processed, return True
          if (p_index === p.length) {
              return true;
          }
          // Skip over characters in the secret message until a match is found
          while (s_index < s.length && (p_index === p.length || s[s_index] !== p[p_index])) {
              s_index++;
          }
      }
      // If the current character in the pattern is a question mark or matches the current character in the secret message, move to the next character
      else if (p[p_index] === '?' || s[s_index] === p[p_index]) {
          s_index++;
          p_index++;
      }
      // If the characters do not match, return False
      else {
          return false;
      }
  }

  // If the entire secret message has been processed, return True
  return s_index === s.length;
};

module.exports = decodeTheRing;
