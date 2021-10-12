import styled from 'styled-components'

export const Checkbox = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;

    label {
        margin-left: 8px;
        color: #0005;
    }

    input[type='checkbox']:checked + label {
        color: #000;
    }
`
