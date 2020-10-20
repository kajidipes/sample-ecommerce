import styled from "styled-components";

export const ProductDetailWrapper = styled.div`
    background-color: #d3d3d3;

    h2{
        color: red;
    }

    .relative {
        background-color: #ffffff;
        margin-left: 80px;
        margin-top: 20px;
        margin-bottom: 30px;
        position: relative;
        width: 700px;
        height: 400px;
        border-style: none;
      } 

    img{
        position: relative;
        float: left;
        top: 10px;
        width: 350px;
        height: 350px;
        //border: 3px solid #73AD21;
      }
    // h4{
    //     position: relative;
    //     top: 30px;
        
    // }

    button {
        background-color: #e7e7e7;
        border: none;
        color: #D0D0D0;
        padding: 6px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 8px 10px;
        cursor: pointer;
        outline: none;
      }

      button:hover{
        background-color: 	#D0D0D0;
        color: white;
      }

      .disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      
`;