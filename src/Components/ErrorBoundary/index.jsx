import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    // update state when an error is thrown
    static getDerivedStateFromError(error) {
        console.error(error);
        
        return { hasError: true }
        
    }

    // log the error
    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
        
    }

    render() {
        if (this.state.hasError) {
            // render fallback UI when error occurs
            // what could this be instead? Something more creative
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }

}
ErrorBoundary.propTypes = {
    children: PropTypes.node
};

export default ErrorBoundary