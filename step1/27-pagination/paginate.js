const paginate = (followers) => { //followers 라는 배열을 인자로 받는다.
    const itemPerPage = 8; //페이지당 아이템 수
    const numberOfPages = Math.ceil(followers.length / itemPerPage); //전체 팔로워 수를 페이지당 아이템 수로 나누고 올림한 결과값으로 페이지 수를 계산한다.

    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => { //Array.from() 메소드를 사용하여 newFollowers 배열을 생성한다.
        //numberOfPages의 값을 이용하여 Array.from()메소드에 전달된 첫 번째 인자는 길이가 numberOfPages인 배열을 생성한다.
        //배열의 각 요소에 대해서 콜백함수가 호출되며, index값이 0부터 numberOfPaged -1 까지 증가한다.

        const start = index * itemPerPage; //페이지 번호(index)에 따라 해당 페이지에서 보여질 첫 번째 팔로워의 인덱스를 계산한다.

        return followers.slice(start, start + itemPerPage); //followers.slice() 메소드를 사용하여 start부터 start+itemPerPage까지의 팔로워 목록을 추출하여 newFollowers 배열에 추가한다.
    });

    return newFollowers; //newFollowers 배열 반환. 페이지별로 팔로워 목록을 분할하여 저장하고 있는 배열이다.
};

export default paginate;


/**
 * Array.from() 메소드는 유사 배열 객체(array-like object)나 이터러블(iterable)객체를 배열로 변환한다.
 * Array.from() 메소드의 두 번째 인자로 전달된 콜백 함수는 배열의 각 요소를 계산한다.
 */

/**
 * (_, index) 가 무엇인지..
 * Array.from() 메소드의 콜백 함수에서 사용된 (_, index)는 함수의 인자 옥록을 나타낸다.
 * 
 * 일반적으로 콜백 함수에서 사용하지 않는 척 번째 인자를 '_'(언더스코어) 로 표현한다.
 * 이것은 해당 인자를 무시하고 그 자리에 무엇이든 사용할 수 있다는 의미한다.
 * 여기서는 첫 번째 인자인 배열의 각 요소를 무시하고, 두 번째 인자 index를 사용하여 배열의 요소를 계산한다.
 * 
 * 즉, Array.from() 메소드를 사용할 때 첫 번째 인자인 유사 배열 객체나 이터러블 객체는 두 번째 인자인 콜백 함수에서 처리된다.
 * Array.from() 메소드에서는 첫 번째 인자를 두 번째 인자의 콜백 함수에서 처리하기 때문에 첫 번째 인자는 의미없는 값인 '_'(언더스코어)로 대체한것이다.
 */