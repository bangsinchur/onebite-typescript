//enum 타입 - 열거형 타입
//여러가지 값들의 각각 이름을 부여해 열거해두고 사용하는 타입

//숫자를 제거해도 0부터 자동 배치후 +1씩 증가
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

//문자 enum
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "아무개",
  role: Role.USER,
};
