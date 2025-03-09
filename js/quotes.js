const quotes = [
  {
    quote: "악이란 무엇인가, 나약함이 원인이 된 모든 행동이다.",
    author: "-프리드리히 니체-",
  },
  {
    quote: "재능을 숨기는 데에도 탁월한 재능이 필요하다.",
    author: "-프랑수아 드 라로슈푸코-",
  },
  {
    quote:
      "인간은 거래를 하는 유일한 동물이다, 개는 다른 개와 뼈를 교환하지 않는다.",
    author: "-애덤 스미스-",
  },
  {
    quote:
      "타인이 진실을 은폐하는 것에 대해 분노해선 안 된다, 왜냐하면 우리도 자신에게서 진실을 은폐하기 때문이다.",
    author: "-프랑수아 드 라로슈푸코-",
  },
  {
    quote: "지옥, 그것은 타인이다.",
    author: "-장 폴 사르트르-",
  },
  {
    quote:
      "거짓말에는 두 가지 종류가 있다, 과거 사실에 대한 거짓말과 미래에 관련된 거짓말이다.",
    author: "-장 자크 루소-",
  },
  {
    quote: "무지한 벗만큼 위험한 것은 없다, 현명한 적이 차라리 낫다.",
    author: "-장 드 라 퐁텐-",
  },
  {
    quote: "인간은 자유라는 형벌을 받고 있다.",
    author: "-장 폴 사르트르-",
  },
  {
    quote:
      "배신자 중 가장 위험한 배신자는 모든 인간이 자신의 마음속에 숨긴 그것이다.",
    author: "-쇠렌 키르케고르-",
  },
  {
    quote: "천재란, 광기보다 딱 한 층 위에 사는 자를 말한다.",
    author: "-아르투어 쇼펜하우어-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
