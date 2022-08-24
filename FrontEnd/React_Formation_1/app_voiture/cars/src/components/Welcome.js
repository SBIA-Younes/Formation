const Welcome = () => {
  const fun_1 = () => {
    console.log("Bonjour!");
  };

  const fun_2 = (value) => console.log(value);

  return (
    <div>
      <button onClick={fun_1}>Invoquer une fonction</button>
      <button onClick={() => fun_2("Bonsoir")}>
        Invoquer une fonction avec arg "Binsoire"
      </button>
      <button onClick={() => console.log("Hello World!")}>
        Clg sur le bouton
      </button>
    </div>
  );
};

export default Welcome;
