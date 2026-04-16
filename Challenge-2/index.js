const data = [
    "4556364607935616",
    "64607935616",
    "1",
    "",
    "Skippy",
    "Nananananananananananananananana Batman!"
]

function maskString(string) {
    if(string.length < 4) return string;

    return '#'.repeat(string.length - 4) + string.slice(-4);
}

data.map(string =>{
   console.log(maskString(string));
});
