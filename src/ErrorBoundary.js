import React from 'react';
import { useErrorBoundary } from './ErrorBoundaryContext';

const ErrorBoundary = ({ children }) => {
    const { hasError, error, setHasError, setError } = useErrorBoundary();

    const resetErrorBoundary = () => {
        setHasError(false);
        setError(null);
    };

    if (hasError) {
        return (
            <div>
                <div className = 'display-error'><h2>{error}</h2></div>
                <input type='button' value='Reset' onClick={resetErrorBoundary} />
            </div>
        )
    }

    return children;
};

export default ErrorBoundary;