import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
`;

export const Indicator = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

export const Label = styled.span`
  font-size: 1rem;
`;

interface CurrentExpirenceProps {
  width: string;
  label: string;
}

export const CurrentExpirence = styled.div<CurrentExpirenceProps>`
  height: 4px;
  border-radius: 4px;
  background: var(--green);
  width: ${(props) => `${props.width}%`};

  &::after {
    content: "${(props) => props.label}";
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
    height: 40px;
    left: ${(props) => `${props.width}%`};
  }
`;
