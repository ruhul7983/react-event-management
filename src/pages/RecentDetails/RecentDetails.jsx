import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const RecentDetails = () => {
    const {id} = useParams();
    const recentAll = useLoaderData();
    const idInt = parseInt(id);
    const recent = recentAll.find(recent=>recent.id===idInt);
   
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-4xl font-bold">{recent.title}</h1>
            <p className="text-xl">{recent.details}</p>
            <img className="w-96" src={recent.image} alt="" />
            <div className="flex">
                <h1>Event Date: </h1>
                <h1>{recent.event_date}</h1>
            </div>
            <div className="flex">
                <h1>Total Event Visitors:</h1>
                <h1>{recent.event_visitors}</h1>
            </div>
        </div>
    );
};

export default RecentDetails;