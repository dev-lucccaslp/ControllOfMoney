import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem ;

    div{
        background: var(--shape) ;
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }
    .highlight-background{
            background: var(--green);
            color: #FFF;
        }
`;

export const Icon0 = styled.h5`
    font-size: 22px;
    color: green;
`
export const Icon1 = styled.h5`
    font-size: 22px;
    color: red;
`
export const Icon2 = styled.h6`
    font-size: 22px;
    color: #FFF;
`