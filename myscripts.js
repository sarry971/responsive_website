var slideshow=document.getElementById('slideshow');
    var slides=slideshow.getElementsByTagName('img');
    var index=0;

    function nextSlide(){
      slides[index].classList.remove('active');
      index=(index + 1) % slides.length;
      return slides[index].classList.add('active');
    }
    function prevSlide(){
      slides[index].classList.remove('active');
      index=(index + slides.length -1) % slides.length;
      return slides[index].classList.add('active');
    }



    var slideshowText=document.getElementById('slideshowText');
    var slidesText=slideshowText.getElementsByTagName('div');
    var i=0;

    function prevSlideText(){
      slidesText[i].classList.remove('active');
      i=(i - 1 + slidesText.length) % slidesText.length;
      return slidesText[i].classList.add('active');
    }

    function nextSlideText(){
      slidesText[i].classList.remove('active');
      i=(i + 1) % slidesText.length;
      return slidesText[i].classList.add('active');
    }

    function menuToggle(){
        var nav=document.getElementById('navbar');
        return nav.classList.toggle('active');
    }
	
	
	var slideIndex,slide,dots;
	function intiGallery(){
		slideIndex=0;
		slide=document.getElementsByClassName('imgholder');
		slide[slideIndex].style.opacity=1;

		dots=[];
		var dotsContainer=document.getElementById("dotsContainer");
		
		for(var i=0;i<slide.length;i++)
		{
			var dot=document.createElement("span");
			dot.classList.add("dots");
			dot.setAttribute("onclick","moveSlide("+i+")");
			dotsContainer.append(dot);
			dots.push(dot);
		}
		dots[slideIndex].classList.add("active");
	}
	intiGallery();
	
	function plusSlides(n){
		moveSlide(slideIndex+n);
	}
	function moveSlide(n){
		var i, current, next;
		var moveSlideAnimClass={
			forCurrent:"",
			forNext:""
		}
		if(n>slideIndex){
			 if(n>=slide.length)(n=0)
			 moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
			 moveSlideAnimClass.forNext="moveLeftNextSlide";
		}
		else if(n<slideIndex){
			if(n<0){n=slide.length-1}
			moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
			moveSlideAnimClass.forNext="moveRightNextSlide";
		}
		if (n!=slideIndex){
			next=slide[n];
			current=slide[slideIndex];
			for(i=0;i<slide.length;i++)
			{
				slide[i].className="imgholder";
				slide[i].style.opacity=0;
				dots[i].classList.remove("active");
			}
			current.classList.add(moveSlideAnimClass.forCurrent);
			next.classList.add(moveSlideAnimClass.forNext);
			dots[n].classList.add("active");
			slideIndex=n;
		}
	}
	
	
	var timer=null;
	function setTimer(){
		timer=setInterval(function (){
			plusSlides(1);
		},2000)
	}
	
	setTimer();