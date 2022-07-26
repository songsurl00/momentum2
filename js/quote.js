const quotes = [
    {
      quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라",
      author: "제임스틴",
    },
    {
      quote: "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
      author: "벤 스타인",
    },
    {
      quote:
        "\"지금이 최악\"이라고 말 할 힘이 있다면 아직은 최악이 아니다.",
      author: "윌리엄 셰익스피어",
    },
    {
      quote: "긴 인생은 충분히 좋지 않을 수도 있다. 그러나 좋은 인생은 충분히 길다.",
      author: "벤자민 프랭클린",
    },
    {
      quote: "나는 신발이 없음을 한탄했는데, 거리에서 발이 없는 사람을 만났다.",
      author: "데일 카네기",
    },
    {
      quote: "우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다워지는 것이다.",
      author: "린홀",
    },
    {
      quote: "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안된다.",
      author: "하버트 개서",
    },
    {
      quote: "너 자신이 돼라. 다른 사람은 이미 있으니까.",
      author: "오스카 와일드",
    },
    {
      quote: "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
      author: "J.하비스",
    },
    {
      quote: "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
      author: "기시미 이치로",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = chosenQuote.quote;
author.innerText = `-${chosenQuote.author}-`;