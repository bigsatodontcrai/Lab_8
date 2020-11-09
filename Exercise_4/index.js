document.addEventListener('DOMContentLoaded', () => {
    let theBtn = document.getElementById('btn');
    let bob = document.getElementById('bob');
    
    theBtn.addEventListener('click', () => {
        let BGArray = [];
        let BRArray = [];
        let BGvalArray = [];
        let BRvalArray = [];
        BGArray.push(document.getElementById('Background Red'));
        BGArray.push(document.getElementById('Background Blue'));
        BGArray.push(document.getElementById('Background Green'));
        BGArray.push(document.getElementById('Background Width'));
        
        BRArray.push(document.getElementById('Border Red'));
        BRArray.push(document.getElementById('Border Blue'));
        BRArray.push(document.getElementById('Border Green'));
        BRArray.push(document.getElementById('Background Width'));
        console.log(BGArray);
        console.log(BRArray);

        BGArray.forEach(bg =>{
            BGvalArray.push(bg.value);
        });

        BRArray.forEach(br => {
            BRvalArray.push(br.value);
        })

        console.log(BGvalArray);
        console.log(BRvalArray);

        bob.style.width = BGvalArray[3];
        bob.style.backgroundColor = '#' + BGvalArray[0] + BGvalArray[1] + BGvalArray[2];
        bob.style.borderWidth = BRvalArray[3];
        bob.style.borderColor = '#' + BRvalArray[0] + BRvalArray[1] + BRvalArray[2];

        
    });
});