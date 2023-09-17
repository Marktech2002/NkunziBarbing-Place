 export const calculate = ( a : number , b : number ) => {
     let total : number ;
     total = a + b ;
     return total ;
 }
// class HelloWorld {
//     static Integer binary_search (int[] arry, int num) {
//         int lower_bound = 0 ;
//         int upper_bound = arry.length - 1 ;
//         for (int i = 0; i < arry.length - 1; i++) {
//            int midpoint = (lower_bound + upper_bound) / 2 ;
//            int value_at_middle = arry[midpoint] ; 
//            if ( num == value_at_middle) {
//                return midpoint ;
//            }
//            else if ( num < value_at_middle ) {
//                 upper_bound = midpoint - 1 ;
//            }
//            else if (num > value_at_middle ) {
//               lower_bound = midpoint + 1 ;
//            };
//         }
//         return null ;
//         };
    
//     public static void main(String[] args) {
//         int[] myarray = {3, 17, 75, 80, 202};
//         int mynum = 22;
//         Integer result = binary_search(myarray, mynum);
        
//         if (result != null) {
//             System.out.println("Found: " + result);
//         } else {
//             System.out.println("Not found");
//         }
//     }
// }
