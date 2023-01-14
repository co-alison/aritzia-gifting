import First from "./First";
import Fourth from "./Fourth";
import Second from "./Second";
import Start from "./Start";
import Third from "./Third";

const Form = ({ page, setPage }) => {
    const component = () => {
        switch (page) {
            case 0:
                return <Start />
            case 1:
                return <First />
            case 2:
                return <Second />
            case 3:
                return <Third />
            case 4:
                return <Fourth />
            default:
                return <Start />
        }
    }

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