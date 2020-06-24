import React from 'react';
import styled from 'styled-components';
import {BulbOutlined, LeftCircleFilled} from '@ant-design/icons';

const StyledSwitchWrapper = styled.div`
  position: relative;
  width: 75px;
`;
const StyledSwitchLabel = styled.label`
display: inline-block;
  position: absolute;
  left: 20px;
  float: left;
  width: 30px;
  height: 15px; 
  border-radius: 15px;
  background: #303030;
  cursor: pointer;
  border: 2px solid white;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 1px;
    background: #303030;
    border: solid white;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const StyledSwitch = styled.input`
display: inline-block;
  position: relative;
  display: block;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  border: 3px solid #303030;
  width: 30px;
  height: 15px;
  cursor: pointer;
  float: left;
  &:checked + ${StyledSwitchLabel} {
    background: white;
    border: solid;
    &::after {
      content: "";
      display: block;
      border: solid #303030;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin-left: 15px;
      margin: 1px 0 0 15px;
      transition: 0.2s;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2); 
    }
  }
`;

const Icon = {
  display: "inline-block",
    position: "relative",
    float: "left",
    color:` ${(props) => props.color}`,
    size: "15px"
}



  const lightSwitch = (props) => {
        return (
            <div>
                <BulbOutlined style={Icon} /> 
                <StyledSwitchWrapper>
                    <StyledSwitch type="checkbox"
                        onClick={props.clicked}/>
                    <StyledSwitchLabel htmlFor="checkbox"/>
                 </StyledSwitchWrapper>
            </div>
        );
    }


export default lightSwitch;