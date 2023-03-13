import styled from "styled-components";

import color from "../../assets/color.svg";

export const Container = styled.div`
    .btn-color{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        
        button, input{
            height: 24px;

            margin: 0 5px;

            border: none;
            outline: none;
        }

        input{
	        border: none;

            border-radius: 180px;

            cursor: url('${color}') 6 18, auto !important;

            width: 26px;

            &::-webkit-color-swatch-wrapper {
                padding: 0; 
            }
            
            &::-webkit-color-swatch {
                border: none;

                border-radius: 180px;
            }
        }
    }
`