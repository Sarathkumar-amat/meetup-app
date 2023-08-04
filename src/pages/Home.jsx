import { useContext, useState } from "react"
import { MeetUpsContext } from "../context/MeetUpsProvider"
import { MeetUpCard } from "../components/MeetUpCard";

export function Home()
{
    const {meetUps,searchText,setSearchText} = useContext(MeetUpsContext);
    const [type,setEventType]=useState("Both");
    let meetUpsDisplay = meetUps;
    if(type!=="Both")
    {
        meetUpsDisplay = meetUpsDisplay.filter(({eventType})=>eventType===type);
    }
    if(searchText!=="")
    {
        let newText = searchText.toUpperCase();
        meetUpsDisplay = meetUpsDisplay.filter(({title,eventTags})=>title.toUpperCase().includes(newText) || eventTags?.map(str=>str.toUpperCase()).includes(newText))
    }

    return (<div>
        <h1>Meetup Events</h1>
        <select onChange={(e)=>setEventType(e.target.value)}>
            <option value="Both">Select event type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
        </select>
        <div className="meets-container">
            {meetUpsDisplay?.map(meet=><div>
                <MeetUpCard meetObj={meet} />
            </div>)}
        </div>
    </div>)
}