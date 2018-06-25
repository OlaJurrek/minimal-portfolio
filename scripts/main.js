

var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu');

hamburger.onclick = function() {
	if (menu.className == 'hide') {
		menu.className = menu.className.replace('hide', 'show');
		hamburger.className += 'showMenu';
	} else {
		menu.className = menu.className.replace('show', 'hide');
		hamburger.className = hamburger.className.replace('showMenu', '');
	}
};

// Firtst slideshow
//var i = 0;
//var images = [];
//var time = 3000;
// 
//images[0] = "https://picsum.photos/g/950/350?image=987";
//images[1] = "https://picsum.photos/g/950/350?image=167";
//images[2] = "https://picsum.photos/g/950/350?image=344";
//
//
//
//function slideShow() {
//	document.slide.src = images[i];
//	if (i < images.length - 1) {
//		i++;
//	} else {
//		i = 0;
//	}	
//	setTimeout("slideShow()", time);
//}
//
//window.onload = slideShow;

//next attempt!

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var numbers = document.getElementsByClassName("caption");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < numbers.length; i++) {
        numbers[i].className = numbers[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    numbers[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}