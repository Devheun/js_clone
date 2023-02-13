# js_clone
javascript clone coding (with nomad coder)

<h3>A brief summary of the lecture</h3>

- document의 body, head, title 등 이런 것들은 중요하기때문에 document.body.~ 이런 식이 되지만 div나 h1 등의 태그는 document로
바로 호출이 안됨.

- 나머지 element들은 querySelector나 getElementById 등의 함수로 불러와야 한다.

- title.onClick = handleMouseEnter; 와 title.addEventListener("mouseenter",handleMouseEnter); 는 동일하지만
addEventListener가 더 선호된다 (removeEventListener로 event listener를 제거할 수 있기 때문에)

- window object는 기본적으로 제공된다.

- raw string이 반복되면 const를 이용해 상수로 만들어주기

- className은 이전 class 상관하지 않고 모든걸 바꿔버림

- 위와 같은 상황을 막고자 classList를 통해 class들의 목록으로 작업할 수 있게끔.

- contains()는 우리가 명시한 class가 html element의 class에 포함되어 있는 지 말해줌.

- toggle()은 토큰이 존재하면 토큰 제거, 토큰이 존재하지 않으면 토큰 추가

- html에서 form 태그 안에 input태그를 넣어야 작동한다.

```
function onLoginSubmit(event){
  event.preventDefault(); // preventDefault() 함수는 브라우저가 기본 동작을 실행하지 못하게 막는다
  //event object는 preventDefault 함수를 기본적으로 가지고 있다.
}

loginForm.addEventListener("submit", onLoginSubmit);
```

- form을 submit 하면 브라우저는 기본적으로 페이지를 새로고침하도록 프로그래밍되어 있음.

- 그걸 방지하기 위해 위의 코드처럼 preventDefault()함수를 적용. (우리가 원하는 건 새로고침하는게 아니니까)

- preventDefault()는 EventListener 함수의 첫번째 argument (방금 막 벌어진 event들에 대한 정보)안에 있는 함수

- 관습 : string만 포함된 변수는 대문자로 작성

- 입력값을 저장하기 위해서 사용하는 localStorage (미니 DB 느낌)

- localStorage.setItem(), localStorage.getItem(), localStorage.removeItem() 등의 함수가 있음.
