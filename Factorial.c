#include<stdio.h>

int main () {

    int n, fact = 1, i;
    printf("Enter a number: \n");
    scanf("%d", &n);
    for (i = n; i > 0; i--) {
        fact*=i;
    }
    printf("Factorial of %d is %d", n, fact);
    return 0;
}
