//객체 리터럴 타입

let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};


//값을 변환시키면 안되는 경우 readonly
let config: {
  readonly apiKey: string;
} = {
  apiKey: "my API key",
};
