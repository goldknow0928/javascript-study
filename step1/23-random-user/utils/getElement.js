//하나의 매개변수 selection을 받아서,
const getElement = (selection) => {
    //document.querySelector를 사용하여 해당 선택자에 해당하는 첫 번째 요소를 찾는다.
    const element = document.querySelector(selection);

    //element 변수가 존재하면 해당 변수를 반환한다.
    if (element) return element;

    //선택자에 해당하는 요소가 존재하지 않는 경우, 에러 발생
    throw new Error("error");
};

//getElement 함수를 모듈의 기본 내보내기로 설정하고 있다. 이를 통해 이 모듈이 다른 파일에서 가져와질 때,
//import getElement from './path/to/module' 형태로 가져올 수 있다.
export default getElement;

/*
자바스크립트의 모듈 시스템을 사용하면 코드를 작은 조각으로 분리하여 필요한 부분만 가져와서 사용할 수 있다.
*/
