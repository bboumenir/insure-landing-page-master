
	let button = document.querySelector('#icon-menu');
	let menu = document.querySelector('#menu-mobile');

	button.addEventListener('click' , function(event) {

         
		if ( menu.style.display === "none") {
		menu.style.display = "inherit"
        button.src = "images/icon-close.svg";
		}else {
		menu.style.display = "none"	
		button.src = "images/icon-hamburger.svg";
		}
                	
})

