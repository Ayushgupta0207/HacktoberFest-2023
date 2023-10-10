#include<iostream>
using namespace std;

int sol[100][100]={0};
bool ratInMaze(char maze[][100],int i,int j,int n,int m){
    //base case
    if(i==n-1 and j==m-1){
        sol[i][j]=1;
        //print the soln
        for(int k=0;k<n;k++){
            for(int l=0;l<m;l++){
                cout<< sol[k][l]<<" ";
            }
            cout<<endl;
        }
        cout<<endl;
        return true;
    }

    //rec case
    // assume i,j cell is part of the solution
    sol[i][j]=1;
    //lets check whether we can solve the maze from the right side
    if(j+1<m and maze[i][j+1]!='X'){
        bool isMazeSolvedfromRight = ratInMaze(maze,i,j+1,n,m);
        if(isMazeSolvedfromRight ==true){
            return true;
        }
        //lets check from down side
        if(i+1<n and maze[i+1][j]!='X'){
            bool isMazesolvedfromDOWN = ratInMaze(maze,i+1,j,n,m);
        }

        sol[i][j]=0;  // backtracking 
        return false;
    }

}
int main(){

    char maze[][100]={
        "0000",
        "00XX",
        "0000",
        "XX00"
    };
    ratInMaze(maze,0,0,4,4);

    return 0;
}
