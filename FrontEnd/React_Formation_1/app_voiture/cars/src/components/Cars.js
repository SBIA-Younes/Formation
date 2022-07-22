import Wrapper from "./Wrapper";

const Car = ({ children, color, year }) => {
  if (children) {
    return (
      <Wrapper>
        <p>Marque : {children}</p>
        <p>Age : {year + " ans"}</p>
        <p>Couleur : {color ? color : "white"}</p>
      </Wrapper>
    );
  }
};

export default Car;
