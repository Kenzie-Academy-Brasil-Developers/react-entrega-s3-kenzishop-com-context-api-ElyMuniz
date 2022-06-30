import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    color: white;
    width: 100%;
    background-image: linear-gradient(to bottom right,green,white);
    

    @media (max-width: 750px) {
            flex-direction: column;
            gap: 3px;
           
        }   

        @media (max-width: 300px) {  
            width: 300px;
        }   
    
      

h1{
    width: 70%;
    font-size: 50px;
    text-align: center;
    background-image: linear-gradient(to bottom right,red,yellow);

    @media (max-width: 400px) {
        font-size: 35px;
        }   

}

img{
    width: 30%;
    padding-left: 10px;
    @media (max-width: 750px) {
        width: 200px;
        }
}
`