import { useNavigate } from "react-router-dom";

const Review = ({data}) => {

    let navigate = useNavigate()
    const navResults = () => {
        const path = '/results'
        navigate(path)
    }

    return (
        <div>
            <h1>Review</h1>
            <h2>Here's what you selected:</h2>
            <ol>
                <li>Who are you buying for? <b>{data.step1}</b></li>
                <li>Are you shopping for an occasion or event? <b>{data.step2}</b></li>
                <li>Favourite colours? <b>{data.step3}</b></li>
                <li>What kind of item are you looking for? <b>{data.step4}</b></li>
                <li>Size: <b>{data.step5}</b></li>
            </ol>
            <button onClick={navResults}>Submit</button>
        </div>
    )
}

export default Review;