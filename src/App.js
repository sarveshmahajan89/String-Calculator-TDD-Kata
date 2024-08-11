import ErrorBoundary from './ErrorBoundary';
import StringCalculator from './StringCalculator';

const App = () => {
    return (
        <div className="App">
            <header className="content">
                <h1>String Calculator TDD Kata App</h1>
            </header>
            <ErrorBoundary>
                <StringCalculator/>
            </ErrorBoundary>
        </div>
    );
};

export default App;