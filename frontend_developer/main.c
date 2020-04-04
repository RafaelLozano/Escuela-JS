#include<stdio.h>
#include <string.h>

int numJewelsInStones(char *J) ;

int main()
{
    numJewelsInStones("aA");
    return 0;
}
int numJewelsInStones(char *J)
{
    int jsize = strlen(J);
        printf("%d", jsize);
}
