// 타입별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterwood",
  birth: "1997.01.07",
};

//인덱스 시그니처
type ContryCodes = {
  [key: string]: string;
};

let contryCodes: ContryCodes = {
  Korean: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

let contryNumberCodes = {
    
}