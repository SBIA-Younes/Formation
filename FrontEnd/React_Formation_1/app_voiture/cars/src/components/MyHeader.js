const MyHeader = ({ children }) => (
  <h1 style={{ color: children.color }}>{children.title}</h1>
);

export default MyHeader;
