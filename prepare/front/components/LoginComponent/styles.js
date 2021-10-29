import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  .ant-btn-primary {
    border-color: #f89828;
    background: #f89828;  
    height: 40px;
    font-weight: bold;
  }

  .ant-btn-primary:hover {
    border-color: #ff790c;
    background: #ff790c;
  }

  .ant-btn-primary:focus {
    border-color: #ff790c;
    background: #ff790c;
  }

  .ant-form-item-label > label {
    font-weight: bold;
    color: #fff;
  }
`;
