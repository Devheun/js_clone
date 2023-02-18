const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm= document.querySelector("#logout-form");


const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username=loginInput.value;
	localStorage.setItem(USERNAME_KEY,username);
	paintGreetings(username);
}


function onLogoutSubmit(){
	// 로그아웃 시 localStorage 내의 데이터 지우기
	localStorage.removeItem(USERNAME_KEY);
}

function paintGreetings(username){
	greeting.innerText= `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	
	// 로그인 성공 시 로그아웃 가능하게 logout button 제작
	const logoutButton=document.createElement("button");
	logoutButton.innerText="logout";
	logoutForm.classList.remove(HIDDEN_CLASSNAME);
	logoutForm.appendChild(logoutButton); 
	logoutForm.addEventListener("click",onLogoutSubmit);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){ //show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit",onLoginSubmit);
}else{ //show the greeting
	paintGreetings(savedUsername);
}