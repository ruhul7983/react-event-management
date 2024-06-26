import { MdOutlineDateRange } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import bg from "../../assets/bg.jpg";
import { Link } from "react-router-dom";

const RecentCard = ({recent}) => {
    const {title,event_date,event_visitors,image,id} =recent;
    return (
        <Link to={`/recent/${id}`} className="w-64 mt-12">
            <img className="w-64 h-52" src={image} alt="" />
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                    <MdOutlineDateRange />
                    <p>{event_date}</p>
                </div>
                <div className="flex items-center gap-x-2">
                    <IoEye />
                    <p>{event_visitors}</p>
                </div>
            </div>
        </Link>
    );
};

export default RecentCard;