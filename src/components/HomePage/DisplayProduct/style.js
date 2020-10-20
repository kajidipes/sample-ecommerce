import styled from "styled-components";

export const DisplayWrapper = styled.div`
    .zoom {
        transition: transform .3s;        
    }

    .zoom:hover {
        -ms-transform: scale(1.1); /* IE 9 */
        -webkit-transform: scale(1.1); /* Safari 3-8 */
        transform: scale(1.1); 
    }
`;