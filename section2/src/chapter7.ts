//void -> 공허 -> 아무것도 없음을 의미한다

//반환값이 문자열
function func1(): string {
  return "hello";
}

//반환값이 없을때 (출력값만 존재)
//리턴문을 사용하고 싶지 않을때의 타입을 정의 (null과 undefined 와의 차이점 )
function func2(): void {
  console.log("hello");
}

//never -> 존재하지 않는 -> 불가능한 타입

//무한루프를 도는 타입
function func3(): never {
  while (true) {}
}

//에러를 발생시키는 경우
function func4(): never {
  throw new Error();
}
