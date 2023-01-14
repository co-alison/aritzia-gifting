import ProgressBar from 'react-bootstrap/ProgressBar'
import Form from 'react-bootstrap/Form'

const Second = ({data, setData}) => {

    const { step2 } = data;

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);

        setData({
            ...data,
            step2: e.target.value,
        })
    }

    return (
        <div>
        <ProgressBar animated now={50} />
        <h2>Step 2</h2>
        <h3>Are you shopping for an occasion or event?</h3>
        <Form.Group controlId="step2">
            {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option) => (
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