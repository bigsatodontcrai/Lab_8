document.addEventListener('DOMContentLoaded', () => {
    const arrayOfImages = ["ichigo_1.jpeg", "Ichigo_2.png", "Ichigo_3.jpeg", "Ichigo_4.jpg", "Ichigo_5.jpeg"];
    let index = 0;
    
    let nextBtn = document.getElementById('next');
    let prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', () => {
        let place;
        index++;
        console.log(index % 5);
        if (index % 5 > 0) {
            place = index % 5;
        } else if (index % 5 == 0) {
            place = 0;
        } else {
            place = 5 - Math.abs(index % 5);
        }
        document.getElementById('thisImage').src = arrayOfImages[place];
    });

    prevBtn.addEventListener('click', () => {
        
        index--;
        console.log(index % 5)
        if (index % 5 > 0) {
            place = index % 5;
        } else if(index % 5 == 0){
            place = 0;
        } else {
            place = 5 - Math.abs(index % 5);
        }
        document.getElementById('thisImage').src = arrayOfImages[place];
    })
});