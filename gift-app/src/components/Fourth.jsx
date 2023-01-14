import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Fourth = ({ data, setData, backendData, setBackendData}) => {

    const { step4 } = backendData;

    const handleChange = (e) => {
        e.persist();
        console.log(e.target.value);

        let filteredData = backendData.filter((item) => item.recipient === e.target.value); 
        console.log(filteredData)
        setData({
            ...data,
            step4: e.target.value
        })
        return setBackendData(filteredData)
    }

    const handleSelect = (e) => {
        console.log(e.target.text);
        let filteredData = backendData.filter((item) => item.size === e.target.text); 
        console.log(filteredData)
        setData({
            ...data,
            step5: e.target.value
        })
        return setBackendData(filteredData)
    }

    const topSizes = ["Small", "Medium", "Large"];

    const getDropdown = () => {
        switch (data.step4) {
            case "Top":
                return (
                    <DropdownButton id="dropdown-basic-button" title="Pick a size">
                        {
                        topSizes.map((s) => (
                            <Dropdown.Item value={s} key={s} onClick={handleSelect}>{s}</Dropdown.Item>
                        ))
                        }
                    </DropdownButton>
                )
            case "Pants":
                return (
                    <DropdownButton id="dropdown-basic-button" title="Pick a size">
                        {/* map over sizes */}
                    </DropdownButton>
                )
            case "Dress":
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
            {['Top', 'Pants', 'Dress'].map((option) => (
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