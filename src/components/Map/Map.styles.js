import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 350px;
  gap: 6px;
  background-color: #0f0326;
  padding: 0.5rem;
  flex-direction: column;
  color: #fff;
`;

export const HeadingPopup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
`;

export const Text = styled.p`
  margin: 0 !important;
  font-size: 14px;
`;

export const Flag = styled.img`
  max-width: 30px;
  height: 16px;
  object-fit: cover;
`;
