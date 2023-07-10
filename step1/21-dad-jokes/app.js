const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
    fetchDadJoke();
});

const fetchDadJoke = async () => {
    // result 요소의 내용을 로딩... 으로 설정
    result.textContent = "Loading...";

    try {
        // fetch 함수를 사용하여 url에 GET 요청을 보낸다.
        const response = await fetch(url, {
            // 요청 헤더는 Accept와 User-Agent가 포함된다.
            headers: {
                Accept: "application/json",
                "User-Agent": "learning app",
            },
        });

        // 서버로부터 받은 응답이 정상이 아닐 경우, 에러를 던진다.
        if (!response.ok) {
            throw new Error("error");
        }

        // 받은 응답을 response.json() 함수를 사용하여 JSON 형태로 변환한다.
        const data = await response.json();

        // data.joke의 값을 result 요소의 내용으로 설정한다.
        result.textContent = data.joke;

    // 예외가 발생한 경우, 에러 메시지를 콘솔에 출력하고 result 요소의 내용을 ... 로 설정한다.
    } catch (error) {
        console.log(error.message);
        result.textContent = "There was an error...";
    }
};

fetchDadJoke();


/*

fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, 
Promise 타입의 객체를 반환한다. 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error)객체를 reject 한다.

fetch(url, options)
    .then((response) => console.log("response:", response))
    .catch((error) => console.log("error:", error));

옵션(options) 객체에는 HTTP 방식(method), HTTP 요청 헤더(headers), HTTP 요청 전문(body)등을 설정해줄 수 있습니다. 

-----------------------------------

try {
    // 코드
} catch (err) {
    // 에러 핸들링
}

1. try {...} 안의 코드가 실행된다.
2. 에러가 없다면 try 안의 마지막 줄까지 실행되고, catch 블록은 건너띈다.
3. 에러가 있다면 try 안 코드의 실행이 중단되고, catch(err) 블록으로 제어 흐름이 넘어간다.
    변수 err(아무 이름이나 사용 가능)는 무슨 일이 일어났는지에 대한 설명이 담긴 에러 객체를 포함한다.

try...catch는 유효한 코드에서 발생하는 에러만 처리할 수 있다. 이런 에러를 '런타임 에러' 혹은 '예외'라고 부른다.

try...catch는 동기적으로 동작한다. setTimeout처럼 스케줄 된 코드에서 발생한 예외는 try...catch에서 잡아낼 수 없다. setTimeout에 넘겨진 익명 함수는 엔진이 try...catch를 떠난 다음에서야 실행되기 때문이다. 스케줄 된 함수 내부의 예외를 잡으려면, try...catch를 반드시 함수 내부에 구현해야 한다.

*/