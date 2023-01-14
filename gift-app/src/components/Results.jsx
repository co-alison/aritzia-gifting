const Results = ({data}) => {

    const backendData = [
        { title: "Alchemy Dress", recipient: "Partner", event: "Party", size: "Small", type: "Dress" },
        { title: "Cozy Fleece Mega Sweatpant", recipient: "Myself", event: "Seasonal Specials", size: "Medium", type: "Pants" },
        { title: "Pleated Pant", recipient: "Family", event: "Professional ", size: "Large", type: "Pants" },
    
        { title: "Program Pant", recipient: "Family", event: "Professional", size: "Small", type: "Pants" },
        { title: "The Super Puff™    ", recipient: "Myself", event: "Professional", size: "Medium", type: "Top" },
        { title: "Saturn Longsleeve Midi Dress", recipient: "Friend", event: "Party ", size: "Large", type: "Dress" },
    
        { title: "Cozy Fleece Boyfriend Crew Sweatshirt", recipient: "Family", event: "Casual", size: "Small", type: "Top" },
        { title: "Tabloid Trench Coat", recipient: "Myself", event: "Professional", size: "Medium", type: "Top" },
        { title: "Weatherford Sweater", recipient: "Friend", event: "Casual ", size: "Large", type: "Top" },
    
        { title: "Terry Fleece Boyfriend Zip Hoodie", recipient: "Partner", event: "Seasonal Specials", size: "Small", type: "Top" },
        { title: "Grey SweatPants", recipient: "Myself", event: "Seasonal Specials", size: "Medium", type: "Pants" },
        { title: "Memories Blazer", recipient: "Friend", event: "Professional ", size: "Large", type: "Top" },
    ]    

    const filterRecipient = (item) => {
        if (item.recipient === data.step1) {
            return true;
        } else {
            return false;
        }
    }

    const getResults = () => {
        // step 1
        let filteredData = backendData;
        filteredData.filter(filterRecipient);
        console.log(filteredData);
        console.log(data.step1);
    }

    return (
        <div>
            <h1>Results</h1>
            {getResults()}
        </div>
    )
}

export default Results; 