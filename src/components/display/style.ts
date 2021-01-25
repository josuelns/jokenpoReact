import styled from 'styled-components'

export const StyledDisplay = styled.div`
    & {
        align-items: center;
        display: flex;
        margin: 25px auto;
    }

    img {
        margin: 5px 15px;
        padding: 5px;
        width: 155px;
        height: 155px;
        border: 3px solid #ccc;
        border-radius: 5px;
        background: rgb(204 204 204 / 65%);
        transition: 1s;    
    }

    &.Display_player img:hover {
        transform: rotate(5deg);
        background: rgb(204 204 204 / 85%);
        border: 3px solid #000;
        cursor: pointer;
    }

    .active{
        border-radius: 50px;
        background: white;
    }
`