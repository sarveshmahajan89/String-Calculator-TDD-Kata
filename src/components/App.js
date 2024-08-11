import ErrorBoundary from './ErrorBoundary';
import StringCalculator from './StringCalculator';
import '../css/App.css';

const App = () => {
    return (
        <div className="app">
            <div className="header">
                <h1>String Calculator TDD Kata App</h1>
            </div>
            <ErrorBoundary>
                <StringCalculator/>
            </ErrorBoundary>
        </div>
    );
};

export default App;