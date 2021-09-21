import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }

  & > div {
    flex: 1;
  }
`;
