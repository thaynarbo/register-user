import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 95%;
    height: 100%;
    justify-content: center;
    .back {
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        p {
            margin-left: 8px;
            font-weight: bold;
        }
    }
    .button {
        width: 100%;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    height: 80%;
    margin-top: 16px;
    border-radius: 8px;
    justify-content: center;
`
