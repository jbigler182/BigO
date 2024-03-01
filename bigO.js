// Introduction to Big-O Notation


//Both do the same thing? Which is better? Which is faster?
    //This is where Big-O comes in 
    function reverse(str){
        let result = "";
        for(let i = str.length -1; i>=0; i--){
            result+=str[i]
        }
        return result;
    }
    function reverse2(str){
        return str.split('').reverse().join('')
    }


    //Example: Calculate sum of numbers from 1 up to some number n

// sumAll() vs AddUpTo()

//Faster?
//Less memory-intensive?
//More readable?
//Let's focus on speed!!!

function sumAll(n){
    let total = 0; 
    for(let i = 0; i<=n; i++){
        total += i;    //UNK SIMPLE OPERATIONS, DEPENDS HOW BIG THE INPUT IS...
    }
    return total; 
}
function addUpTo(n){    //THIS ONE IS BETTER
    return n*(n+1)/2;  //THREE SIMPLE OPERATIONS NO MATTER WHAT
}

//The problem with times...with fast algorithsm, speed measurement may not be precise enough
// different machines can record different times
//THE SAME MACHINE CAN RECORD DIFFERENT TIMES

//SO INSTEAD we count the number of simple operations the computer hast to perform!

//INDRODUCTING...BIG O
// it's a system used to assign a rough performance values
// It's concerned with how the runtime of algorithm grows as inputs grows
// so we don't care about details only the trend. How does it perform as algorithm input grows?

//Big O Definiton               ENGLISH
//An algorith is to be O(f(n)) [Big O of f of n] if 
//number of simple operations is eventually less than a
//constant time f(n), as n increases
//Below are matchmatical equations that represent the trend line
//f(n) could be linear (f(n)=n) is steady growth. Time grows at same rate as input increase
//f(n) could be quadratic (f(n) = n2). The time grows much faster then the input increases
//f(n) could be constant (f(n)=1) addUpTo() is O(1), constant time, as n grows the number of simple operators is less then 1 (always going to be the same number of operations)
                                  // sumAll() the number of operations is bounded by a multiple of n (say 10n). This algorithm "runs in" O(n), linear time.
                                  //can have O(n) inside of an O(n)   // quadratic time. n squared n2
                                    //function pringAllParis(n){
                                        //for(var i = 0; i < n; i++){
                                    //         //for(var j = 0; j < n; j++);
                                    //         console.log(i, j);
                                    //     }
                                    // 

        //Time complexity 
//Notation that describing the relationship between the input size and the time that function takes to finish
    //common times, must knows
//quadratic time O(nsquared) as n grows the output time grows expentially (n2) 
//linear time  O(n)       as n grow the output time grows equally
//constant time O(1)      as n grows the output time stays the same
                //Big O of 1, Big O of n, Big O of n squred is how its said in english
//Over time i'll learn to assign a big O notation to a function based off hints
//when assigning Big O we only care about the absolute worst case seneniro!

// simplifying Big O expressions
    //constants do not matter O(5n) O(25n+7) doesn't matter. If it doesn't change it just O(1)
    //smaller terms dont matter n squred and n squred + n is just n squred
    //arithmatic opeartions / * - + all have constant time
    //variable assignment is also constant time 
    //Accessing element in array (by index) or object (by key is) are constant time
    //Loops: length of the loop times the completeyof what happen in the loop NOT CONSTANT TIME
        function doublesquareAll(arr){
            for(let i = 0; i<arr.length; i++){  //O(n)
                return arr[i]*arr[i]
            }
        }
// Big O and log. What is a log? 
        //log 2 8 = 3  (how many times does 2 have to multiply by itself to get 8, 3)
        // O(logn) The logarithm of a number roughtly measures the number of times you can devide that numbe by 2 before you get a value that's less then or equal to one

        //Best runtime for sorting is O(n*log2n)

        //space complexity is not all that common we will come back to it and focus on time complexity
//Big O notation can also be expressed in SPACE COMPLEXITY - how much memory or storage space is needed 
//Most primitives: constant space
//Strings: O(n) as the string grows the amount needed to store it grow
//reference types: O(n)





