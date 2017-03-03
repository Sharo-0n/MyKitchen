(function() {
	// Initialize Firebase
	const config = {
	    apiKey: "AIzaSyABE3E7LlaDh_X09Gv9D9lL_WUEjOM9wdM",
	    authDomain: "mykitchen-f804d.firebaseapp.com",
	    databaseURL: "https://mykitchen-f804d.firebaseio.com",
	    storageBucket: "mykitchen-f804d.appspot.com",
	    messagingSenderId: "282462903013"
	};
	firebase.initializeApp(config);

	//get elements
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');

	//add login event
	btnLogin.addEventListener('click', e => {
		//get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();

		//sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});

	//add sign up event
	btnSignUp.addEventListener('click', e => {
		//get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();

		//sign in
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});

	//add logout
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});

	// realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
		}
	});



}());



/*
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   $('b').text(sometext);
});
*/
