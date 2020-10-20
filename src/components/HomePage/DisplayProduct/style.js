import styled from "styled-components";

export const DisplayWrapper = styled.div`
    .zoom {
    transition: transform 0.3s;
  }

  .zoom img {
    padding: 25px;
  }
  .zoom:hover img {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1);
  }
`;
