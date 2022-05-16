import styled from "styled-components";
export const Container=styled.div`
header{
    background: ${props=>props.theme.colors.primary};
    height: 60px;
    display: flex;
    align-items: center;
}
.dsmovie-nav-content{
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: #fff;
}
.dsmovie-nav-a{
    margin: 0;
    font-weight: 700;
    font-size: 24px;
}
.dsmovie-contact-container{
    display: flex;
    align-items: center;
}
.dsmovie-contact-link{
    margin:0 0 0 10px;
    font-size: 12px;
}




`