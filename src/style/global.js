import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


main{
    background-image: linear-gradient(to bottom right,green,white);
    display: flex;
    gap: 20px;
    padding: 15px 15px;

    @media (max-width: 550px) {
            flex-wrap: wrap-reverse;
            gap: 3px;
        }   
    
    @media (max-width: 300px) {  
            width: 290px;
        }  
      
}

`