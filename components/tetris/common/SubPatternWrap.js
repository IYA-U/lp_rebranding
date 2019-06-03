import styled from 'styled-components';

export default styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  position: relative;
  &:after {
    background-color: #ccc;
    border-radius: 0px 0px 3px 0px;
    content: ${({ name }) => `"${name}"`};
    display: block;
    font-size: 12px;
    left: 0;
    line-height: 1;
    padding: 4px;
    position: absolute;
    top: 0;
  }
`;
