import styled from 'styled-components';

export default styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:after {
    display: block;
    font-size: 12px;
    padding: 4px;
    line-height: 1;
    border-radius: 0px 0px 3px 0px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ccc;
    content: ${({ name }) => `"${name}"`};
    
  }
`;
