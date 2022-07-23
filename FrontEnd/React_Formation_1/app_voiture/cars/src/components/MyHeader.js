import Wrapper from "./Wrapper";

const MyHeader = ({ myStyle, children }) => (
  <Wrapper>
    <h1 style={{ color: myStyle }}>{children}</h1>
  </Wrapper>
);

export default MyHeader;
