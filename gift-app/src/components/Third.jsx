import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';

const Third = ({ data, setData, backendData, setBackendData}) => {

    const { step3 } = backendData;
    
    const handleChange = (e) => {
        e.persist();
        console.log(e.target.value);

        let filteredData = backendData.filter((item) => item.recipient === e.target.value); 
        console.log(filteredData)
        setData({
            ...data,
            step3: e.target.value
        })
        return setBackendData(filteredData)
    }
    return (
        <div>
            <ProgressBar animated now={75} />
            <h2>Step 3</h2>
            <h3>What is their colour story?</h3>
            <Form.Group controlId="step3">
            {['Neutrals', 'Colours'].map((option) => (
                <div key={option}>
                    <Form.Check
                        value={option}
                        type="radio"
                        id={option}
                        label={option}
                        onChange={handleChange}
                        checked={step3 === option}
                    />
                </div>
            ))}
            </Form.Group>
        </div>
    )
}

export default Third;