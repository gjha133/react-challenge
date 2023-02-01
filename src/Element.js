
import { useState } from "react";

const Element = ({item}) => {
    const [isShowing, setIsShowing] = useState(false)
    const toggleShow = () => setIsShowing(() => !isShowing)

    const { 
        name, 
        username, 
        email, 
        address : {
            street, suite, city, zipcode
        },
        phone,
        website,
        company,
} = item

    let buttonText = isShowing ? "Hide Details" : "View Details"

    return (
        <>
            <div className='card'>
                <div className="company-name">
                    <strong>{company.name}</strong>
                </div>
                <div className="double">
                    <div className="upper">CONTACT</div>
                    <div className="info">{name}</div>
                </div>
                <div className="double">
                    <div className="upper">STREET</div>
                    <div className="info">{street}</div>
                </div>
                <div className="double">
                    <div className="upper">CITY</div>
                    <div className="info">{city}</div>
                </div>
                <button onClick={toggleShow}>{buttonText}</button>
            </div>
            {
                isShowing &&
                <div className="hidden">
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            {company.catchPhrase}
                        </p>
                        <p>
                            {company.bs}
                        </p>
                    </div>
                    <div className="otherDetails">
                        <div className="col1">
                            <h3>Contact Person</h3>
                            <p>{name}</p>
                            <h3>Username</h3>
                            <p>{username}</p>
                            <h3>Website</h3>
                            <p>{website}</p>
                            <h3>Emails</h3>
                            <p>{email}</p>
                            
                        </div>
                        <div className="col2">
                            <h3>Phone</h3>
                            <p>{phone}</p>
                            <h3>Address</h3>
                            <p>{suite}, {street}, {city}, {zipcode}</p>
                            <h3>Street</h3>
                            <p>{street}</p>
                            <h3>City</h3>
                            <p>{city}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Element;