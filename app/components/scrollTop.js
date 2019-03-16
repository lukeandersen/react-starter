import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types'

class ScrollTop extends Component {
    componentDidUpdate(prevProps) {
        const { location } = this.props
        if (location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return null
    }
}

ScrollTop.propTypes = {
    location: PropTypes.object,
}

ScrollTop.defaultProps = {
    location: '/',
}

export default withRouter(ScrollTop)
