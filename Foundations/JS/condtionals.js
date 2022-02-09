// Conditional Statements 
let hour = 5;
if (hour < 10) { 
    console.log('Hour is less than 10!');
} else if (hour == 10){
    console.log('Hour is equal to 10.');
} else {
    console.log('Hour is equal to 10');
}

// Logical Operators 
let orExample = true || false;
let andExample = true && false;
console.log('|| returns the first true value:', 0 || 1);
console.log('&& returns the first false value:', 1 && 0);
console.log('! operator inverts truth and falsehood:', !true)

// Switch statements 
console.log('\nShowing the functionality of a switch statement!')
let choice = 0;
switch (choice) { 
    case 0: 
        console.log('First case!');
    case 1:
        console.log('Second case!');
    case 3:
        console.log('Third case!');
    default:
        console.log('Default value! Note that case statements require breaks!');
}

// Ternary operators
let today = 'Monday';
let greeting = (today == 'Monday') ? 'Happy Monday!' : 'Happy non-monday!';
console.log('\nDemonstrating ternary operators:', greeting)

// Multiple Ternary Operators 
greeting = (today == 'Saturday') ? 'Happy weekend!' : 
            (today == 'Sunday') ? 'Happy weekend!' : 
            'Looking ahead to the weekend!'
console.log('Showing multiple ternary operators:', greeting)