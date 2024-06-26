import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNowDetails = () => {
    const handleBookNow = (e) => {
        e.preventDefault();
        toast("Booking Successful we will contact you shortly");
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleBookNow}>

                <div className="mt-16 text-center max-w-lg mx-auto px-8 pb-14 bg-gray-600 rounded">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Enter your details for bookings</h2>
                    <div className="text-left">
                        <h2 className="font-semibold mt-9">Your Name</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="name" id="" required placeholder="Enter you name" />
                    </div>
                    <div className="text-left">
                        <h2 className="font-semibold ">Enter your event Location</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="photoUrl" id="" placeholder="Event Location" />
                    </div>
                    <div className="text-left ">
                        <h2 className="font-semibold">Your Mobile Number</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="number" name="password" id="" required placeholder="Enter your Phone Number" />
                    </div>
                    <div className="text-left ">
                        <h2 className="font-semibold">Your Event Date</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="date" name="" id="" required/>
                    </div>
                    <button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Book Now</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default BookNowDetails;