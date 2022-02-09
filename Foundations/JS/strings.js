// Basics of string manipulations 

// String length 
console.log('---String Manipulation!---')
let text = 'Hello World!';
console.log(`Text has a length of ${text.length}`); // display text length 

// String slicing 
let part = text.slice(0, 4); // slicing 
let part2 = text.slice(4); // slice the rest of the string
console.log(`${part}${part2}`);

// String replacement 
let newText = text.replace('World!', 'Internet!');
console.log(`\nReplaced text: ${newText}`);
let duplicatedText = 'Apples, apples, apples';
newText = duplicatedText.replace(/Apples/i, 'Oranges'); // case-insenstive modifier 
console.log(newText);
newText = newText.replace(/apples/g, 'Bananas'); // global modifier 
console.log(newText);

// Case Manipulation 
console.log(`\nUppercase: ${newText.toUpperCase()}`);
console.log(`Lowercase: ${newText.toLowerCase()}`);

// Concatenation 
console.log(newText + newText);
console.log('\nConcatenation: Hello'.concat(' World!'));

// Trimming and padding 
console.log(`\nSting padding: ${'   Hello world'.trim()}`);
let unpaddedText = 'Hello!';
console.log(unpaddedText.padStart(4));
console.log(unpaddedText.padEnd(4) + '!');

// String Extraction 
console.log(`\nUsing .charA()t: ${text.charAt(0)}`);
console.log(`Using .charCodeAt() ${text.charCodeAt(0)}`);
console.log(`Using property access: ${text[0]}`);

// Arrays 
console.log('Arrays: ', newText.split(', '));

// String comparions 
function isEqual(str1, str2) { 
    return str1.toUpperCase() == str2.toUpperCase();
}
a = 'Hello World!';
b = 'Hello Internet!';
console.log(`\nString Comparisons: 
            Checking if the strings ${a} and ${b} equal: ${isEqual(a, b)}`);

// Evaluating String Objects
let equation1 = '2 + 10';
console.log(`\nString Evaluation of ${equation1}: ${eval(equation1)}`)