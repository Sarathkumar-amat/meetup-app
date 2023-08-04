import { useContext } from "react"
import { MeetUpsContext } from "../context/MeetUpsProvider"
import { useNavigate } from "react-router-dom";

export function NavBar()
{
    const {searchText,setSearchText} = useContext(MeetUpsContext);
    const navigate = useNavigate();


    return (<div style={{padding:"20px"}}>
        
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <header onClick={()=>navigate("/")} className="meet-header">
                Meetup
            </header>
            <input onChange={(e)=>setSearchText(e.target.value)} type="text" placeholder="search by tile or tags" />
        </div>
        <hr />
    </div>)
}