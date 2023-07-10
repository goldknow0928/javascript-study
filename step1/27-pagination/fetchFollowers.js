const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => { //async 함수로 정의
    const response = await fetch(url); //fetch 함수를 사용하여 URL에서 데이터를 가져온다.
    const data = await response.json(); //이후 response 객체의 json 메소드를 사용하여 데이터를 파싱하여 자바스크립트 객체로 변환한다.
    return data; //마지막으로 변환된 데이터를 반환한다.
};

export default fetchFollowers;