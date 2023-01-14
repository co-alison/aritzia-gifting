import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';

const FirstA = ({data, setData, backendData, setBackendData}) => {
    const { step1 } = backendData;

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);
        setData({
            ...data,
            step1: e.target.value
        })
        if (e.target.value === "Myself") {
            let filteredData = backendData.filter((item) => item.recipient === e.target.value); 
            console.log(filteredData)
            return setBackendData(filteredData)
        }
    }
    return (
        <div>
        <ProgressBar animated now={25} />
        <h2>Step 1</h2>
        <h3>Who are you buying for?</h3>
        <Form.Group controlId="step1">
            {['Myself', 'Someone Else'].map((option) => (
                <div key={option}>
                    <Form.Check
                        value={option}
                        type="radio"
                        id={option}
                        label={option}
                        onChange={handleChange}
                        checked={step1 === option}
                    />
                </div>
            ))}
        </Form.Group>
        </div>
    )
}

export default FirstA;