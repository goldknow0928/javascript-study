const getElement = (selection) => { //getElement 함수 정의. selection이라는 매개변수를 받는다
    const element = document.querySelector(selection); //selection에 해당하는 문서 객체를 받는다. 없다면 null 반환한다.

    if (element) return element; //만약 element가 null이 아니라면, 해당 객체를 반환한다.

    throw new Error("no element selected"); //만약 element가 null이면 텍스트와 함께 error 객체를 던진다.
};

export default getElement; //getElement 함수를 모듈에서 내보낸다.