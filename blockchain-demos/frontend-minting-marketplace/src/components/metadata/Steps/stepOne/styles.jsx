import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 50px;
`;

export const ColOrRow = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : 'auto'};
    margin: auto;
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    margin-top: ${props => props.top ? props.top : '0px'};
    border: ${props => props.dashed ? props.dashed : 'none'};
    border-radius: ${props => props.radius ? props.radius : '0px'};
`;

export const Button = styled.button`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '48px'};
    color: ${props => props.color ? props.color : '#fff'};
    background: ${props => props.bg ? props.bg : '#E882D5'};
    border-radius: 16px;
    border: ${props => props.border ? props.border : 'none'};
    outline: none;
    font-weight: 400;
    font-size: 20px;
    margin-left: ${props => props.left ? props.left : '0px'};
`;

export const ContentInput = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: ${props => props.left ? props.left : '0px'};
    cursor: ${props => props.cursor && 'pointer'};
    margin-top: ${props => props.top ? props.top : '0px'};
`;

export const Icon = styled.i`
    position: relative;
    top: ${props => props.top ? props.top : '-38px'};
    left: ${props => props.left ? props.left : '0px'};
    color: ${props => props.color ? props.color : '#7A797A'};
    font-size: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.bg ? props.bg : '#6380E3'};
    margin: auto;
    padding-top: 5px;
`

export const Label = styled.label`
    color: #A7A6A6;
    font-size: 16px;
    text-align: start;
`;

export const Input = styled.input`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '48px'};
    border-radius: 16px;
    border-top-color: #806bdf99;
    border-bottom-color: #886bd699;
    border-left-color: rgba(175,111,216,.6);
    border-right-color: rgba(140,99,218,.8);
    background: #383637;
    outline: none;
    margin-top: ${props => props.top ? props.top : '0px'};
    padding-left: ${props => props.pleft ? props.pleft : '10px'};
`;