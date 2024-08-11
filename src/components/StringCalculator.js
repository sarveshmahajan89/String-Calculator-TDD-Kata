import { useState } from "react";
import { add } from '../utility/addNumbers';
import { useErrorBoundary } from '../ErrorBoundaryContext';

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
      <div className="content-row">
          <div className="column">
              <h3>Please enter the numbers and click "Calculate" to find the sum</h3>

              <p>Feel free to input the necessary information as per the instructions:</p>

              <ul>
                  <li>Input a positive number.</li>
                  <li>Input positive numbers separated by commas (,).</li>
                  <li>Input positive numbers separated by new lines (\n).</li>
                  <li>Enter positive numbers followed by // and different delimiters.</li>
              </ul>
          </div>
          <div className="column">
              <div className="field-row">
                  <h4>Please enter the numbers into the input field</h4>
              </div>
              <div className="field-row">
                  <textarea placeholder='Numbers' value={textNumbers} onChange={handleChange}/>
              </div>
              <div className="field-row">
                  <input type='button' value='Calculate' onClick={calculateSum}/>
              </div>
              <div className="field-row">
                  <label> Total value of the number: {numbersTotal}</label>
              </div>
          </div>
      </div>
  );
}

export default StringCalculator;
