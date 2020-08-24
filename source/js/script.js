// $(".list").click(function(){
//     // If this isn't already active
//     if (!$(this).hasClass("active")) {
//       // Remove the class from anything that is active
//       $("li.active").removeClass("active");
//       // And make this active
//       $(this).addClass("active");
//     }
//   });

var deleteClass = document.querySelector('.graph__button--delete');
var addClass = document.querySelector('.graph__button--confirm');
var elements = document.querySelectorAll('.list');

console.log(elements);

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', changeColor);
}
function changeColor(){
    if(this.classList.contains('active')){
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}

deleteClass.addEventListener('click', function () {
    console.log(deleteClass);
    Array.from(elements).forEach(function (element) {
        if(element.classList.contains('active')) {
            element.classList.remove('active');
        }
    });
  });

addClass.addEventListener('click', function () {
    console.log(addClass);
    Array.from(elements).forEach(function (element) {
        element.classList.add('active');

    });
});


