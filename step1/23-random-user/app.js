/* 페이지가 로드될 때와 btn 클래스가 있는 요소를 클릭할 때마다 API에서 유저 정보를 가져와 화면에 표시하는 기능을 수행한다. */

import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btn = get(".btn");

//getUser함수를 호출하여 API로부터 유저 정보를 가져온다.
const showUser = async () => {
    //await 키워드를 사용하여 getUser 함수가 끝날 때까지 기다인 다음
    const person = await getUser();
    //displayUser함수를 호출하여 가져온 유저 정보를 화면에 표시한다.
    displayUser(person);

    // display user
};

//window 객체에서 addEventListener 함수를 호출하여 DOMContentLoaded 이벤트를 대기하고, 이벤트가 발생하며 showUser 함수를 호출한다.
window.addEventListener("DOMContentLoaded", showUser);
//btn 요소에서 addEventListener 함수를 호출하여 click 이벤트를 대기하고, 이벤트가 발생하면 showUser 함수를 호출한다.
btn.addEventListener("click", showUser);


