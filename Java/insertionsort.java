package Sorting_techniques;

import java.util.Arrays;

public class mergesort {
    public static void main(String[] args) {
        int [] arr = {5,4,6,7,2,3,1};
       arr = mergesort(arr);
        System.out.println(Arrays.toString(arr));

        int[] arr2 = {3,4,2,1,6,7,84,};
        mergesortinplace(arr2, 0, arr2.length -1);
        System.out.println(Arrays.toString(arr2));
    }

//    divide array into two parts
    //sort both part individually via recursion
    //merge both sorted  parts
//complexity of O(nlogn)
    static int[] mergesort(int [] arr ){

        if(arr.length == 1){
            return arr;
        }
        int mid = arr.length/2;

        int [] left = mergesort(Arrays.copyOfRange(arr, 0 ,mid));
        int [] right = mergesort(Arrays.copyOfRange(arr, mid, arr.length));

         return merge(left, right);
    }

    private static int[] merge(int[] first, int[] second) {

        int [] mix = new int [first.length + second.length];

        int i =0;
        int j=0;
        int k=0;

        while (i < first.length && j <second.length){
            if(first[i] < second[j]){
                mix[k] = first[i];
                i++;
            }else{
                mix[k] = second[j];
                j++;
            }
            k++;
        }

        //it may be possible one of array is not complete and has some remaining items
            while (i < first.length){
                mix[k] = first[i];
                i++;
                k++;
            }

            while (j< second.length){
                mix[k] = second[j];
                j++;
                k++;
            }

        return mix;

    }









    static void mergesortinplace(int [] arr, int s, int e ){

        if(e-s == 1){
            return ;
        }
        int mid = (s+e)/2;

         mergesortinplace(arr, s ,mid);
         mergesortinplace(arr, mid, e);

          mergeinplace(arr, s, mid, e);
    }

    private static void mergeinplace(int[] arr, int s, int m, int e) {

        int [] mix = new int [e -s];

        int i =s;
        int j=m;
        int k=0;

        while (i < m && j <e){
            if(arr[i] < arr[j]){
                mix[k] = arr[i];
                i++;
            }else{
                mix[k] = arr[j];
                j++;
            }
            k++;
        }

        //it may be possible one of array is not complete and has some remaining items
        while (i < m){
            mix[k] = arr[i];
            i++;
            k++;
        }

        while (j< e){
            mix[k] = arr[j];
            j++;
            k++;
        }

       for (int l =0; l< mix.length; l++){
           arr[s+l] = mix[l];
       }

    }

}
