import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Third = ({data, setData}) => {
    const [checked, setChecked] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
    })

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);
        console.log(e.target.checked);

        if (e.target.value === "Option 1") {
            setChecked({
                ...checked,
                option1: e.target.checked
            })
        } else if (e.target.value === "Option 2") {
            setChecked({
                ...checked,
                option2: e.target.checked
            })
        } else if (e.target.value === "Option 3") {
            setChecked({
                ...checked,
                option3: e.target.checked
            })
        } else if (e.target.value === "Option 4") {
            setChecked({
                ...checked,
                option4: e.target.checked
            })
        }

        setData({
            ...data,
            step3: checked
        })
    }
    return (
        <div>
            <ProgressBar animated now={75} />
            <h2>Step 3</h2>
            <h3>Favourite colours?</h3>
            <Form.Group controlId="step3">
            {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option) => (
                <div key={option} className="mb-3">
                    <Form.Check
                        value={option}
                        type="checkbox"
                        id={option}
                        label={option}
                        onChange={handleChange}
                    />
                </div>
            ))}
            </Form.Group>
        </div>
    )
}

export default Third;