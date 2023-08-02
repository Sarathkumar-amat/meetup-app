import { createContext, useState } from "react"
import { meetups } from "../data/JsonData";

export const MeetUpsContext = createContext();
export function MeetUpsProvider({children})
{
    const [meetUps,setMeetUps] = useState(meetups);
    const [searchText,setSearchText] = useState("");
    return (<div>
        <MeetUpsContext.Provider value={{meetUps,setMeetUps,searchText,setSearchText}}>
            {children}
        </MeetUpsContext.Provider>
    </div>)
}