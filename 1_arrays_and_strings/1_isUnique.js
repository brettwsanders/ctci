/*
 * Implement an algorithm to determine if a string has all unique characters.
 *
 * Additional Req:
 * What if you cannot use additional data structures?
 *
 * Input: assume always get a string
 * Output: bool
 * Complexity: return as soon as know its not unique
 * Edge Cases: really long string, empty string, wrong type
 * */

const isUnique1 = string => {
  const charHash = {};
  const charArray = string.split("");
  let index = 0;
  while (charArray[index] !== undefined) {
    const char = charArray[index];
    if (charHash[char]) {
      return false;
    }
    charHash[char] = true;
    index++;
  }
  return true;
};

const isUnique2 = string => {
  while (string.length > 0) {
    const char = string.slice(0, 1);
    string = string.slice(1);
    for (index = 0; index < string.length; index++) {
      if (char === string[index]) {
        return false;
      }
    }
  }
  return true;
};


// Test Cases
const unique1 = 'asdfhjk12347890 -+=/;';
const unique2 = '';
const unique3 = '1';
const notUnique1 = 'asljlk12346789 -+/a';
const notUnique2 = 'asljlk12346789 -+//';
const notUnique3 = '  4';
const notUnique4 = 'aalksajfdl;jasldkfjal;ksjdasdkjfhkasgdfhaskjdhfkahsdfkhalskjhdfoqiwueyroqiuwyeroiuqyweoiruyqiowuyeriuqwyeoriyqwoieuryqoiwueyroiqyweoiruyqioweyroiquwyeriuyqwieryoiqwyeroiqywoeiruyqoiwueyrioquwyeriuqywoeriuqywoeiryqoiweuyroiqwuyeroiquyweriuqywoeiryqoiuweyroiquweyroiuqyweiruyqoiweyroiqwyerioyqweiryoiqweyroqiweyriuqwyeriuoqywoieuryqoiwueyrioquwyeroiuqyweoiruyqowieuryqoiuweyroiquwyeroiquwyeroiquyweroiuqyweioruyqwoiueryoqiuweyroiuqyweoriuyqwioeuryqoiwueyrioquwyreoiuqwyeroiuyqweoiruyqowiueryqoiuwyreuiqyweoiryqower';

console.log(isUnique1(unique1), 'should be true');
console.log(isUnique1(unique2), 'should be true');
console.log(isUnique1(unique3), 'should be true');
console.log(isUnique1(notUnique1), 'should be false');
console.log(isUnique1(notUnique2), 'should be false');
console.log(isUnique1(notUnique3), 'should be false');
console.log(isUnique1(notUnique4), 'should be false');

console.log(isUnique2(unique1), 'should be true');
console.log(isUnique2(unique2), 'should be true');
console.log(isUnique2(unique3), 'should be true');
console.log(isUnique2(notUnique1), 'should be false');
console.log(isUnique2(notUnique2), 'should be false');
console.log(isUnique2(notUnique3), 'should be false');
console.log(isUnique2(notUnique4), 'should be false');
