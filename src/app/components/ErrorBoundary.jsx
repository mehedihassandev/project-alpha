import React from "react";
import PropTypes from "prop-types";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "", errorInfo: null, errorStack: "", errorLocation: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.toString(), errorStack: error.stack };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    const logErrorToMyService = (error, errorInfo) => {
      // Implement your error logging logic here
      console.error("Logged error:", error, errorInfo);
    };

    logErrorToMyService(error, errorInfo);

    // Extract file name and line number from the error stack
    const errorLocation = this.extractErrorLocation(error.stack);

    // Update state with error info
    this.setState({ errorInfo, errorLocation });
  }

  extractErrorLocation(stack) {
    if (!stack) return "";

    const lines = stack.split("\n");
    for (let line of lines) {
      const match = line.match(/\((.*):(\d+):(\d+)\)/);
      if (match) {
        return `File: ${match[1]}, Line: ${match[2]}, Column: ${match[3]}`;
      }
    }
    return "";
  }

  render() {
    if (this.state.hasError) {
      // Render the error message and component stack trace in the fallback UI
      return (
        <div style={{ padding: "20px", border: "1px solid red", backgroundColor: "#fdd" }}>
          <h1>Something went wrong.</h1>
          <p style={{ color: "red" }}>{this.state.errorMessage}</p>
          {this.state.errorLocation && (
            <p style={{ color: "red" }}>{this.state.errorLocation}</p>
          )}
          <details style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
            <summary>Error Stack Trace</summary>
            <pre style={{ color: "red" }}>{this.state.errorStack}</pre>
          </details>
          {this.state.errorInfo && (
            <details style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
              <summary>Component Stack Trace</summary>
              <pre style={{ color: "red" }}>{this.state.errorInfo.componentStack}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
