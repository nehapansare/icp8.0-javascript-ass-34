const value=[22,120,30,400,200]
let largest =value[0]
for(let i=0;i<=value.length;i++)
{
    if(value[i]>largest)
    {
    largest = value[i]
    }
}
console.log(largest)

const num=[2,7,13,4,3,9,16]
let sum=0;
for(let i=0;i<num.length;i++)
{
    if(num[i]%2!==0)
    {
            sum=sum+num[i];
    }
}
console.log(`sum of odd number is:${sum}`)

const student=["neha","nirmal","nilam","rushda","siddhi","sharon","sayali"];
for(const stud of student)
{
    console.log(`Hello guys ${stud}`)
}