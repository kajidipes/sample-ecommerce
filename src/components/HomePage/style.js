import styled from "styled-components";

export const HomeWrapper = styled.div`
    form {
        display: flex;
        align-items: center;
        margin: auto;
        width: 60%;
        // margin-left: 60px;
        // margin-right: 60px;
    }
  
    input {
        width: 100%;
        box-sizing: border-box;
        border: 2px solid #f5f5f5;
        border-radius: 0px;
        font-size: 16px;
        background-color: #f5f5f5;
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        padding: 12px 20px 12px 18px;
        outline: none;  
    }
    button {
        // background-image: '../../../image/search.jpg';
        padding: 12px 20px 12px 18px;
        background : #f57224;
        border: 2px solid #f57224;
        outline: none;
    }

    .fa{
        color: #FFF;
    }
`;