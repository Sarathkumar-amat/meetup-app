export function RSVPModal({setRsvp})
{

    return (<div className="rsvp-overlay" ref={setRsvp}>

        <div className="rsvp-container">
        <i onClick={()=>setRsvp(false)} class="fa-solid fa-xmark"></i>
            <div className="rsvp-header">
                <h2>Complete Your RSVP</h2>
            </div>
            
        <form className="rsvp-form">
            <label>Name: </label>
            <input type="text" />
            <label>Email: </label>
            <input type="email" />
            <p>* You have to make the payment at the venue.</p>
            <button>RSVP</button>
        </form> 
        </div>
    </div>)
}