import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  isUnsupportedDimensions: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      isUnsupportedDimensions: window.innerWidth < 300,
    };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true, isUnsupportedDimensions: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleResize = () => {
    this.setState({
      isUnsupportedDimensions: window.innerWidth < 300,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render(): ReactNode {
    if (this.state.hasError || this.state.isUnsupportedDimensions) {
      return (
        <div className="flex justify-center items-center p-8 text-center">
          <p className="text-red-500 mt-4">
            These dimensions are not supported.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
