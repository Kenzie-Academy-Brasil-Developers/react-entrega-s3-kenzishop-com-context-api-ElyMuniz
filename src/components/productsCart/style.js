import styled from "styled-components"

export const Ulcarrinho = styled.ul`
    width: 100%;
    padding: 10px 10px 10px 10px;
    border-radius: 4%;
    text-align: center;
    color:greenyellow;
    font-size: 16px;

li{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 25px;
    padding: 10px 10px 10px 10px;
    margin-top: 10px;
    border-radius: 8%;
    color: white;
    background: green;
    
    img{
        width: 30px;
        height: 30px;
    }   
    button{
        height: 30px;
        background: none;
        color: greenyellow;
        border-style: none;
    }
    p{
        font-size: 11px;
    }

}
`