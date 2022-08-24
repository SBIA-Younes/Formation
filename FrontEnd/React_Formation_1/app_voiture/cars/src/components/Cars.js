const Car = ({ children, color, year }) => {
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
        <p>Marque: {children}</p>
        <p>Age: {year}</p>
        <p>Couleur: {color ? color : "Néant"}</p>
      </div>
    );
  }

  // return null // ce return est Facultatif
};

export default Car;
