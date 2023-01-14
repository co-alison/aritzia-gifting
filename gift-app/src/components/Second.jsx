import ProgressBar from 'react-bootstrap/ProgressBar'
import Form from 'react-bootstrap/Form'

const Second = ({ data, setData, backendData, setBackendData}) => {

    const { step2 } = backendData;

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);

        let filteredData = backendData.filter((item) => item.event === e.target.value); 
        console.log(filteredData)
        setData({
            ...data,
            step2: e.target.value
        })
        return setBackendData(filteredData)
    }

    return (
        <div>
        <ProgressBar animated now={50} />
        <h2>Step 2</h2>
        <h3>Are you shopping for an occasion or event?</h3>
        <Form.Group controlId="step2">
            {['Party', 'Everyday', 'Professional', 'Seasonal Specials'].map((option) => (
                <div key={option}>
                    <Form.Check
                        value={option}
                        type="radio"
                        id={option}
                        label={option}
                        onChange={handleChange}
                        checked={step2 === option}
                    />
                </div>
            ))}
        </Form.Group>
        </div>
    )
}

export default Second;