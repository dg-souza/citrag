import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
padding: 10px;

.item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

        img {
            max-width: 70px;
        }

        &-info {
            display: flex;
            flex-direction: column;
            margin-left: 5px;
            align-items: center;

            h1 {
                margin: 0;
                font-size: 26px;
                font-weight: normal;
            }

            span{
                margin: 5px 0;
            }
        }
    }

    .line {
        height: 1px;
        background: #d1dde4;
    }
`