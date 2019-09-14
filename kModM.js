/**
 * *You don't need to write code for the following two drills. 
 * use any drawing app or simple pen and paper *

1) Show your hash map after the insertion of keys 
10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length m = 11 
using open addressing and a hash function k mod m.

2) Show your hash map after the insertion of the keys 
5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map 
with collisions resolved by separate chaining. 
Let the hash table have a length m = 9, 
and let the hash function be k mod m.
 */

//wrote the numbers down to represent the indexes (0 based)
//[0-22,1-88,2,3,4-4,5-15,6-28,7-17,8-59,9-31,10-10]
//10 % 11 = 10 ; 10 will take the index 10
//22 % 11 = 0 ; 22 will take index 0
//31  % 11 = 9
//4 % 11 =4 
//15 % 11 = 4 , cannot use 4, use 5 instead 
//28%11 = 6 
//17 % 11 = 6  use 7 instead
//88%11 = 0 use 1 instead
//59%11 = 4 use 8 instead
//------ look for 17 ; 17%11 = 6 look from 6 and up found at 17

/**
 * [ 
 *   0,
 *   1 - 28 -> 19 -> 10,
 *   2 - 20,
 *   3 - 12,
 *   4,
 *   5 - 11 ,
 *   6 - 15 -> 33,
 *   7,
 *   8 -17
 * ]
 * 
 * 5 % 9 = 5
 * 28 % 9 =1 
 * 19 % 9 =1 second link
 * 15 % 9 = 6
 * 20 % 9 = 2
 * 33  % 9 = 6 second link
 * 12 % 9 =3 
 * 17 % 9 = 8
 * 10 % 9 = 1 third link
 * /

