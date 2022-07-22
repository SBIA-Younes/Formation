const Car = ({ children, color, year }) => {
  const colorInfo = color ? color : "white";

  if (children) {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p>Marque : {children}</p>
        <p>Age : {year + " ans"}</p>
        <p>Couleur : {colorInfo}</p>
      </div>
    );
  } else {
  }
};

export default Car;
