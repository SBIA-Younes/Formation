export function wrapper(props) {
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "400px",
        padding: "10px",
        margin: "5px auto",
      }}
    >
      {props}
    </div>
  );
}
