import './App.css';
import { useState } from "react";
import { add } from './addNumbers';
import { useErrorBoundary } from './ErrorBoundaryContext';

function StringCalculator() {
    const [textNumbers, setTextNumbers] = useState('');
    const [numbersTotal, setNumbersTotal] = useState(0);
    const { setHasError, setError } = useErrorBoundary();

    const handleChange = (e) => {
        const { value } = e.target;
        setTextNumbers(value);
    };

    const calculateSum = (e) => {
        try {
            const result = add(textNumbers);
            setNumbersTotal(result);
         } catch(error) {
             setHasError(true);
             setError(error?.message);
         }
    };

  return (
      <div>
          <div className="content">
              <h3>Please enter numbers in the input field and submit to calculate the sum:</h3>
          </div>
          <div className="content">
              <p>Instructions on the input, you can enter:</p>
          </div>
          <div className="content">
              <ul>
                  <li>A positive number</li>
                  <li>Positive numbers separated by comma(,)</li>
                  <li>Positive numbers separated by new line(\n)</li>
                  <li>Positive numbers with different delimiters followed by //</li>
              </ul>
          </div>
          <div className="content">
              <input type='text' placeholder='Numbers' value={textNumbers} onChange={handleChange}/>
          </div>
          <div className="content">
              <input type='button' value='Calculate' onClick={calculateSum}/>
          </div>
          {textNumbers && <div className="content">
              <h3>Number's total value: {numbersTotal}</h3>
          </div>}
      </div>
  );
}

export default StringCalculator;
