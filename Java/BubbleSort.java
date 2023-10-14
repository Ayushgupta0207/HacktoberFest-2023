package Sorting_techniques.bubblesort;

import java.util.Arrays;

public class Bubblesort {
    public static void main(String[] args) {

        int nums[] = {23, 112,2,5,-1, -13, 45,78 ,-2, 64,53,25,};
      bubblesort(nums);
        System.out.println(Arrays.toString(nums));
    }
//in bubble sort an element is compared with adjacent element if it is smaller than left side element then swap (this is j loop)
//    for all elements we have used i loop
    static void bubblesort (int [] arr){

        for(int i=0;i< arr.length; i++){
            for(int j=1; j<arr.length - i; j++){

                if(arr[j-1] > arr[j]){
                    //swap
                    int temp = arr[j-1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}
