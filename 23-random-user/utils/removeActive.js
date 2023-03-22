//items 배열의 모든 요소에서 active 클래스를 제거하는 역할을 한다.
export default function removeActive(items) {
    items.forEach((btn) => btn.classList.remove("active"));
}

/*
export default는 이 함수를 모듈의 기본 내보내기로 설정한다. 
즉, 이 함수가 다른 파일에서 불러와 사용될 수 있도록 한다.

items 배열의 각 요소에 대해 지정된 콜백 함수를 실행한다.

(btn) => btn.classList.remove("active") 는 콜백 함수로, 
각각의 btn 요소에서 classList 속성을 이용해서 active 클래스를 제거한다.

*/