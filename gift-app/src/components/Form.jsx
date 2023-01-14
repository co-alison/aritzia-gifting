import FirstA from "./FirstA";
import FirstB from "./FirstB";
import Fourth from "./Fourth";
import Second from "./Second";
import Start from "./Start";
import Third from "./Third";
import Review from "./Review";
import { useEffect } from "react";

 

const Form = ({ page, setPage, data, setData, backendData, setBackendData }) => {
    useEffect(() => {
        console.log(backendData)
    }, [])


    const component = () => {
        switch (page) {
            case 0:
                return <Start />
            case 1:
                return <FirstA data={data} setData={setData} backendData={backendData} setBackendData={setBackendData} />
            case 2:
                return <FirstB data={data} setData={setData} backendData={backendData} setBackendData={setBackendData} />
            case 3:
                return <Second data={data} setData={setData} backendData={backendData} setBackendData={setBackendData}/>
            case 4:
                return <Third data={data} setData={setData} backendData={backendData} setBackendData={setBackendData}/>
            case 5:
                return <Fourth data={data} setData={setData} backendData={backendData} setBackendData={setBackendData}/>
            case 6:
                return <Review data={data}/>
            default:
                return <Start />
        }
    }

    const handleSubmit = () => {
        if (page === 1 && data.step1 === "Myself") {
            setPage(3);
        } else if (page < 5) {
            setPage(page + 1);
        } else {
            setPage(6)
;        }
    }

    const handleBack = () => {
        if (page === 3) {
            setPage(1);
        } else {
            setPage(page - 1);
        }
    }

    return (
        <>
            {component()}
            {
                page > 0 && <button onClick={handleBack}>Back</button>
            }
            {
                page < 6 &&
                <button onClick={handleSubmit}>
                    { page === 0 ? "Get Started" : "Next"}
                </button>
            }
        </>
    )
}

export default Form;