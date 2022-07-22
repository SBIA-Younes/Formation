import { wrapper } from "./Wrapper";

const Car = ({ children, color, year }) => {
  if (children) {
    return wrapper(
      <div>
        <p>Marque : {children}</p>
        <p>Age : {year + " ans"}</p>
        <p>Couleur : {color ? color : "white"}</p>
      </div>
    );
  }
};

export default Car;
