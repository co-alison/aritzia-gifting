import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';

const First = ({data, setData}) => {
    const { step1 } = data;

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);

        setData({
            ...data,
            step1: e.target.value,
        })
    }
    return (
        <div>
        <ProgressBar animated now={25} />
        <h2>Step 1</h2>
        <h3>Who are you buying for?</h3>
        <Form.Group controlId="step1">
            {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option) => (
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

export default First;