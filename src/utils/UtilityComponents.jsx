import { styles } from "./styles";

export const Header = ({ text, dark }) => {
  return (
    <div>
      <h2
        className={`${styles.sectionHeadText} ${
          dark ? " text-dark" : " text-day"
        } inline-block`}
      >
        {text}
      </h2>
    </div>
  );
};
