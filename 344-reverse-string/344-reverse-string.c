void swap(char *left, char *right)
{
    char temp;
    temp = *left;
    *left = *right;
    *right = temp;
}

void reverseString(char* s, int sSize){
    char *left = s;
    char *right = s + sSize - 1;
    
    while(left < right)
    {
        swap(left, right);
        left++;
        right--;
    }
}