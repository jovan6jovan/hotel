import styled from "styled-components";

export const StyledHero = styled.header`
  min-height: calc(100vh - 129px);
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;