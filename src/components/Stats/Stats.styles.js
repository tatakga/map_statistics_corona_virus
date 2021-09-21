import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0f0326;
  padding: 1rem;
  color: #ffffff;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.75rem;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 0.5rem;
  }
`;
