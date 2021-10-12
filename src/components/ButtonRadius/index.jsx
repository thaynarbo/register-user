import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

const ButonRadius = ({ icon, ...props }) => {
    return <Container {...props}>{icon}</Container>
}

ButonRadius.propTypes = {
    props: PropTypes.any,
    variant: PropTypes.string,
    icon: PropTypes.node.isRequired,
    outline: PropTypes.bool,
}

export default ButonRadius
