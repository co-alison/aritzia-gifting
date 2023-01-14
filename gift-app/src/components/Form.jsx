import First from "./First";
import Fourth from "./Fourth";
import Second from "./Second";
import Start from "./Start";
import Third from "./Third";
import { useState } from "react";

const Form = ({ page, setPage }) => {
    const component = () => {
        switch (page) {
            case 0:
                return <Start />
            case 1:
                return <First data={data} setData={setData}/>
            case 2:
                return <Second data={data} setData={setData}/>
            case 3:
                return <Third data={data} setData={setData}/>
            case 4:
                return <Fourth data={data} setData={setData}/>
            default:
                return <Start />
        }
    }

    const [data, setData] = useState({
        step1: '', // who are you buying for (radio)
        step2: '', // occasion/event (radio)
        step3: [], // colour (checkbox)
        step4: '' // type of clothing (checkbox) -> size
    })

    const handleSubmit = () => {
        if (page < 4) {
            setPage(page + 1);
        } else {
            // submit form
        }
    }

    return (
        <>
            {component()}
            {
                page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>
            }
            <button onClick={handleSubmit}>
                { page === 4 ? "Submit" : "Next "}
            </button>
        </>
    )
}

export default Form;