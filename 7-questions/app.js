const questions = document.querySelectorAll(".question");
console.log(questions);

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            // console.log(item);
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});


/**
 * querySelectorAll
 * --> 선택된 선택자 그룹에 일치하는 document의 엘리먼트 리스트를 나타내는 NodeList를 반환한다
 * 
 * 
 * NodeList
 * --> element.childNodes 속성과 document.querySelectorAll 메소드에 의해 반환되는 콜렉션
 * --> 배열은 아니지만 for, for... of, forEach를 반복할 수 있다
 * 
 * 
 * NodeList롸 배열의 차이점
 * --> NodeList는 브라우저가 제공하는 API로서 언어에 구애받지 않는 객체이며, 배열은 요소의 콜렉션으로 사용되는 자바스크립트 객체다
 * 
 * 
 * forEach
 * --> 배열에 활용이 가능한 메서드로, 파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드이다
 * --> map() 메서드와 거의 비슷하지만 차이점은 따로 return 하는 값이 없다는 점이다
 *     때문에 메서드를 호출한 코드를 함수에 할당하면 undefined가 할당된다
 * --> forEach 메서드는 변수에 할당하기 보다는 반복문이나 조건문과 같이 그냥 바로 호출되는 것이 일반적이다
 */