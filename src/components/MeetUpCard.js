import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";

export function MeetUpCard({meetObj})
{
    const navigate = useNavigate();
    const parseDate = (dateString)=>{
        const reqdDate = new Date(dateString);
        const newDate = dateFormat(reqdDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        return newDate;
    }

    return (<div onClick={()=>navigate(`/individualMeet/${meetObj?.id}`)} className="meet-card"> 
        <img className="eventCard-thumbnail" src={meetObj?.eventThumbnail} alt="event thumbnail" />
        <div className="event-type-card">{meetObj?.eventType} Event</div>
        <p className="event-card-startDate">{parseDate(meetObj?.eventStartTime)} IST</p>
        <h4 className="meet-card-title">{meetObj?.title}</h4>
    </div>)
}