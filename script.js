class Calender {
    constructor(){
        this.date = new Date();
        console.log(this.date);
    }

    
}

document.addEventListener("DOMContentLoaded", function () {
  new Calender();
});
