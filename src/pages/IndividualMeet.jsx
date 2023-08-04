import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { MeetUpsContext } from "../context/MeetUpsProvider";
import dateFormat from "dateformat";
import { RSVPModal } from "../components/RSVPModal";

export function IndividualMeet()
{
    const {meetId} = useParams();
    
    const {meetUps} = useContext(MeetUpsContext);
    const [rsvp,setRsvp] = useState(false);
    const event = meetUps?.find(({id})=>id===meetId);
    // const {additionalInformation} = event;
    // const rsvpRef = useRef();
    const checkDateRange=(dateString)=>{
        const currentDate = new Date();
        const givenDate = new Date(dateString);
        return currentDate<givenDate;
    }
    console.log(meetId);
    console.log(event);

    const additionalInfoKeys = (eventInfoObj)=>{
        console.log(Object.keys(eventInfoObj));
       return Object.keys(eventInfoObj);
    }
    const changeCaptital = (string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }

    const parseDate = (dateString)=>{
        const reqdDate = new Date(dateString);
        const newDate = dateFormat(reqdDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        return newDate;
    }
    return (<div className="event-detail-container">

        {rsvp && <RSVPModal setRsvp={setRsvp}/>}
        <div className="event-info">
            <h3>{event?.title}</h3>
            <p><div style={{fontWeight:"bold"}}>Hosted By:</div>
             {event?.hostedBy}</p>
            <img className="event-thumbnail" src={event?.eventThumbnail} alt="event-thumbnail" />
            <p><div style={{fontWeight:"bold"}}>Details: </div>{event.eventDescription}</p>
            {event?.additionalInformation && <p><div style={{fontWeight:"bold"}}>Additional information:</div> {

            additionalInfoKeys(event?.additionalInformation)?.map(element=>
                <div style={{display:"flex"}}>
                 <p className="additional-info"> <span style={{fontWeight: "bold"}}>{changeCaptital(element)}: </span> {event?.additionalInformation[element]}</p>

                </div>
                
                )


            } </p>}
            <div>
                <p>Event Tags</p>
               <div style={{display:"flex"}}> {event?.eventTags.map(element=>
               <div style={{padding:"5px",background:"#f55759",color:"white",margin:"5px",borderRadius:"4px"}}>
                    {element}
                </div>)}</div>
            </div>
        </div>
        <div>
            <div className="location-time-fee">
           
                <p style={{display:"flex"}}>
                    <i class="fa-regular fa-clock"></i>
                    <div>{parseDate(event?.eventStartTime)} to <br />
                    {parseDate(event?.eventEndTime)}</div>
                </p>
                
                <p style={{display:"flex"}}>
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                        {event?.location}, {event?.address}
                    </div>
                </p>
                <p style={{display:"flex"}}>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <div>Rs. {event?.price}</div>
                </p>
            </div>
            <div>
                <h3>Speakers: ({event?.speakers.length})</h3>
                <div className="speaker-container">
                    {event?.speakers.map(({name,image,designation})=><div className="speaker-card">
                        <img className="speaker-img" src={image} alt="speaker-image" />
                        <div className="speaker-name">{name}</div>
                        <div className="designation">{designation}</div>

                    </div>)}
                </div>
            </div>
            {checkDateRange(event?.eventEndTime) && <div className="rsvp-button-container">
                <button onClick={()=>setRsvp(true)} className="rsvp-button">RSVP</button>
            </div>}
        </div>


    </div>)
}