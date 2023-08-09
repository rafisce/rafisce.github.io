import  { useEffect } from "react";

const conf =
  "xs:!origin-[center_center_25px] md:!origin-[center_center_65px] xs:text-[7.5vw] sm:text-[7.5vw] md:text-[7.5vw] lg:text-[5rem]";


const TextAnimation = ({ texts, color }) => {
  useEffect(() => {
    let words = document.querySelectorAll(".word");
    words.forEach((word) => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.className =
          `letter ${conf}`
        span.innerHTML = letter === " " ? "&nbsp;":letter;
        word.append(span);
      });
    });
    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let changeText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = `letter out ${conf}`;
        }, i * 80);
      });

      nextWord.style.opacity = "1";

      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = `letter behind ${conf}`;
        setTimeout(() => {
          letter.className = `letter in ${conf}`;
        }, 340 + i * 80);
      });
      currentWordIndex =
            currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
       
    };
    changeText();
    setInterval(changeText, 3000);
  }, []);
  return (
    <div className="min-[1350px]:absolute min-[1350px]:inline-block w-[300px] xs:block xs:static xs:h-[70px] sm:mb-[1.5rem] md:mb-[3rem]">
      {texts.map((word, index) => (
        <span
          key={index}
          className="word flex absolute opacity-0"
          style={{ color: color }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;
