const febHolidays = [
  "Dear XYZ",
  "I am in LOVE with you",
  "And our age gap is kind of Small gap",
  "I just want to share 42 reason of love bcz 42 is the opposite of ur b'day which is my life ",
  "So here are 42 reasons why i love you",
  "I love your appreciation of art",
  "I love your laugh",
  "I love how you respect me",
  "I love when you call me baby",
  "I love how you trust me",
  "I love how cutee your are",
  "I love when you talk about me to others",
  "I love how paitent you are with me",
  "I love how you make me laugh",
  "I love how you make me feel happier",
  "I love how you take care of yourself",
  "i love your heart",
  "I love when you listen to me rant",
  "I love your advice",
  "I love thw ay how u slept on me",
  "I love how you make me blush",
  "I love how you ecourage me to do things",
  "I love when you text me",
  "I love your voice",
  "I love that your waiting for me",
  "I love when you get jealous",
  "I love how you make me feel close even when your far",
  "I love how honest you are with me",
  "I love how you understand me even when im talking nonsense",
  "I love how you talk when your sleepy",
  "I love how you stay up with me even when your sleepy",
  "I love how you remember the little things i say",
  "I love how your stayed up with me when i was having pains",
  "I love how you support me",
  "I love to listening your every sharing thing ",
  "I love when you call me ' Babunuuu",
  "I love your nose",
  "I love how your a nerd",
  "i love when you say my name",
  "I love your hair",
  "I love how you make me look forward to the future",
  "I love when you laugh at my jokes",
  "I love that your a nerd",
  "I love your soul",
  "I love when you ask me if im yours",
  "I love when you 'hm' multiple times waiting for me to say your name",
  "I love how you love me",
  "I love you in all that you are and will be in the future"
];
const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
      idx + 1
    }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
