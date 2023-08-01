const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

//비동기 함수로, await 키워드를 사용하여 API호출과 JSON응답 데이터를 처리한다.
async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    //fetch 함수를 사용하여 URL에 GET 요청을 보낸다. 두 번째 인자로 config 객체를 전달하여 요청 헤더를 설정한다.
    const res = await fetch("https://icanhazdadjoke.com", config);
    //응답 데이터를 JSON 형식으로 파싱한다.
    const data = await res.json();

    jokeEl.innerText = data.joke;
}
