'use strict';

$(window).on('load',function(){
	
	console.log("Document loaded");
	let check='';
	//assuming an email containing charcters : a-z , A-Z, 0-9 and underscore. And from either a .com or .net account
	const regex = /\w+@\w+\.{1}(com|net){1}/;
	
	/*
	document.querySelector('#check-mobile-input').addEventListener('click',function(){
		console.log('button is clicked');
		event.preventDefault();
		
		const width = window.innerWidth;
		
		
		if(width < 1400){
			//to store input vale
			const email_input_el = document.getElementById("email-2");
			//get message to user output element
		    let cue_2 = document.getElementById('cue-2');
			//get error icon element
			let err = document.querySelector('#mobile-form .error');
			console.log(err);
			
		    //get email entered by user input value
			const val = email_input_el.value;
			console.log('val:',val);
			//check to see if it validates 
			check = regex.test(val);
			console.log(check);
			if(check === false){ 
			    cue_2.textContent="Please enter the correct email";
				$(err).css('display','block');
				
			}
			if(check){
		        cue_2.textContent = "Thank you!";
				$(err).css('display','none');
	        }
		
		}
	});
	
	
	document.querySelector('#check-desktop-input').addEventListener('click',function(){
		console.log('button is clicked');
		event.preventDefault();
		
		const width = window.innerWidth;
		
		
		if(width >= 1400){
			//to store input vale
			const email_input_el = document.getElementById("email-1");
			//get message to user output element
		    let cue_1 = document.getElementById('cue-1');
			//get error icon element
			let err = document.querySelector('.error');
			console.log(err);
			
		    //get email entered by user input value
			const val = email_input_el.value;
			console.log('val:',val);
			//check to see if it validates 
			check = regex.test(val);
			
			if(check === false){ 
			    cue_1.textContent="Please enter the correct email";
				$(err).css('display','block');
			}
			if(check){
		        cue_1.textContent = "Thank you!";
				$(err).css('display','none');
	        }
		}
	});
	*/

	[...document.querySelectorAll('.check-input')].forEach(function(item) {item.addEventListener('click', function() {
		console.log('button is clicked');
		event.preventDefault();
		let email_input_el;
		let cue; let err;
		
		const width = window.innerWidth;
		if(width < 1400){
		    //to store input value
		    email_input_el = document.querySelector('#mobile-form .input');
		    //get message to user output element
		    cue = document.querySelector('#mobile-form .cue');
	        //get error icon element
		    err = document.querySelector('#mobile-form .error');
		    console.log(err);
		}else {
			//to store input value
		    email_input_el = document.querySelector('.input');
		    //get message to user output element
		    cue = document.querySelector('.cue');
	        //get error icon element
		    err = document.querySelector('.error');
		    console.log(err);
			
		}
		
		//get email entered by user input value
		const val = email_input_el.value;
		console.log('val:',val);
			
		//check to see if it validates 
		check = regex.test(val);
			
		if(check === false){ 
		    //use jquery for styling
		    $(cue).css('color','hsl(0, 93%, 68%)');
			$(email_input_el).css('border','2px solid hsl(0,93%,68%)');
			$(err).css('display','block');
			//back to js
			cue.textContent="Please provide a valid email";
			
		}
		if(check){
			//use Jquery for styling
			$(cue).css('color','#000');
			$(err).css('display','none');
			$(email_input_el).css('border','2px solid #000');
			//back to js
		    cue.textContent = "Thank you!";
			//reset both desktop form and mobile form
			const form_mobile = document.querySelector('form#mobile-form');
		    const form_desk = document.querySelector('form');
			form_mobile.reset();
			form_desk.reset();
	    }
	});
	});
});