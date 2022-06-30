import styled from "styled-components"

export const Produtos = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
   
ul{
    display: flex;
    flex-wrap: wrap;
    gap:15px;
}

input, button{
    font-family: Inter;
}

h1, h2, h3{
    font-family: Inter;
    font-size: 20px;
    color: green;
}

p{
    font-family: Inter;
    font-size: 14px;
    color: green;
}

li{
    background: white;
    width: 200px;
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-style: groove;
    border-radius: 6%;

    img{
        width: 90px;
        height: 90px;
    }
    
    button{
    width: 50%;
    font-family: Inter;
    font-size: 12px;
    height: 30px;
    background: green;
    border-radius: 4px;
    color: white;
    cursor: pointer;

}
a {
    text-decoration: none;
}
}
        
` 