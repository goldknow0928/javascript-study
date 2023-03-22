const URL = "https://randomuser.me/api/";

const getUser = async () => {
    //fetcc(URL) 메소드를 사용하여 API 엔드포인트에 HTTP 요청을 보낸다. 이후에 response 변수에 반환된 HTTP 응답 객체를 할당한다.
    const response = await fetch(URL);
    const data = await response.json();
    //객체 비구조화 할당(Destructuring Assignment)을 사용하여 data 객체에서 person 객체를 추출한다.
    const person = data.results[0];
    //person 객체에서 phone과 email 속성을 추출하여 각각 phone과 email변수에 할당한다.
    const { phone, email } = person;
    //person.picture 객체에서 large 속성을 추출하여 image 변수에 할당한다.
    const { large: image } = person.picture;
    //person.login 객체에서 password 속성을 추출하여 password 변수에 할당한다.
    const { password } = person.login;
    //person.name 객체에서 first와 last 속성을 추출하여 name 변수에 할당한다.
    const { first, last } = person.name;
    //person.dob 객체에서 age 속성을 추출하여 age 변수에 할당한다.
    const { dob: { age } } = person;
    //person.location 객체에서 street 객체를 추출하여 그 객체에서 number와 name 속성을 추출하고, street 문자열에 할당한다.
    const { street: { number, name } } = person.location;

    //아래 객체 반환
    return {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
    };
};

//모듈로 내보내진다.
export default getUser;

/*
랜덤 유저 정보를 가져오는 API를 호출하여 해당 유저의 정보를 추출하는 함수인 getUser를 정의하는 코드이다.
*/