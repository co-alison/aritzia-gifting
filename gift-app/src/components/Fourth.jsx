import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton'

const Fourth = ({data, setData}) => {

    const { step4 } = data;

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);

        setData({
            ...data,
            step4: e.target.value,
        })
    }

    const getDropdown = () => {
        switch (step4) {
            case "Option 1":
                return (
                    <DropdownButton id="dropdown-basic-button" title="Pick a size">
                        {/* map over sizes */}
                    </DropdownButton>
                )
            case "Option 2":
                return (
                    <DropdownButton id="dropdown-basic-button" title="Pick a size">
                        {/* map over sizes */}
                    </DropdownButton>
                )
            case "Option 3":
                return (
                    <DropdownButton id="dropdown-basic-button" title="Pick a size">
                        {/* map over sizes */}
                    </DropdownButton>
                )
            case "Option 4":
                return (
                    <DropdownButton id="dropdown-basic-button" title="Pick a size">
                        {/* map over sizes */}
                    </DropdownButton>
                )
            default:
                return
        }
    }
    return (
        <div>
        <ProgressBar animated now={100} />
        <h2>Step 4</h2>
        <h3>What kind of item are you looking for?</h3>
        <Form.Group controlId="step4">
            {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option) => (
                <div key={option}>
                    <Form.Check
                        value={option}
                        type="radio"
                        id={option}
                        label={option}
                        onChange={handleChange}
                        checked={step4 === option}
                    />
                </div>
            ))}
        </Form.Group>
        {getDropdown()}
        </div>
    )
}

export default Fourth;