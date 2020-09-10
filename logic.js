function slide (forward) {
     var present = document.querySelector('.slide.present');
     var past = present.previousElementSibling;
     var future = present.nextElementSibling;
 
     if(forward) {
         if(future) {
             present.classList.remove('present');
             present.classList.add('past');
             future.classList.remove('future');
             future.classList.add('present');
         }
     } else {
         if(past) {
             present.classList.remove('present');
             present.classList.add('future');
             past.classList.remove('past');
             past.classList.add('present');
        }
    }
}

function slide_homework (n) {
    var slides = document.querySelectorAll('.slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('past', 'present', 'future');
        if(i < n) {
            slides[i].classList.add('past');
        } else if (i > n) {
            slides[i].classList.add('future');
        } else {
            slides[i].classList.add('present');
        }
    }
}


function generateSlides () {
	var html = '';
	var time = '';
	var htmlN = '';
	for(var i = 0; i++ <= 19;) {
		if (i === 10) {
			time = 'present';
		} else if (i < 10){
			time = 'past';
		} else if(i > 10){
			time = 'future';
		}
		html += '<div class="slide '+ time +'">' + i +'</div>';
		htmlN += '<div class="num">' + i +'</div>';
	}
	var slider = document.querySelector('.slider');
	slider.innerHTML = '';
	slider.insertAdjacentHTML('afterbegin', html);

	var number = document.querySelector('.numbers');  
	number.innerHTML = '';
	number.insertAdjacentHTML('afterbegin', htmlN);
}


function bindUIActions () {
	var arr = document.getElementsByClassName('num');
	for (var i = 0; i < 20; i++) {
		arr[i].addEventListener('click',function (a) {
			console.log('click');
			console.log(a.currentTarget.innerHTML);
			slide_homework(a.currentTarget.innerHTML - 1);
		})
	}
	document.querySelector('.btn.prev').addEventListener('click',function () {
		console.log('click');
		slide(false);
	})
	document.querySelector('.btn.next').addEventListener('click',function () {
		console.log('click');
		slide(true);
	})

	window.addEventListener('keydown', function (a) { 
		console.log(a.which);
		if (a.which === 39) {
			slide(true);
		}else if (a.which === 37) {
			slide(false);
		}
	})
	

}

function change () {
	alert("Текст был изменён!");
}


window.onload = function () {
	console.log('hello');
	generateSlides();
	bindUIActions();
}