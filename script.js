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