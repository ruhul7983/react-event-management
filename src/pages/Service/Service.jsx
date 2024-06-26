import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import service1 from "../../assets/Wedding-service.jpg";
import service2 from "../../assets/Wedding-service2.jpg";
import { Link } from "react-router-dom";
const Service = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto mt-7 text-center">
                <h1 className="text-4xl font-bold mb-4">Premier Luxury Wedding Planning in Chicago and Exotic Destinations Worldwide</h1>
                <p>At Event Management, our full-service wedding planning offers a luxurious and personalized experience for both local and destination weddings. We specialize in creating elegant weddings that embody luxury and personalization. Our services cover all aspects of planning, from selecting the perfect venue to managing intricate details. Whether it's a vibrant cityscape or a tranquil beachfront, our team ensures every element of your wedding is meticulously styled to create a sophisticated ambiance. With our global expertise, we promise a journey of elegance, style, and unforgettable memories, making your wedding day truly exceptional.</p>
            </div>
            <h1 className="text-4xl font-bold text-center mt-7 mb-5">Our Services</h1>

            <div className="grid grid-cols-2  items-center mb-24 gap-x-3 bg-gray-800 py-10 px-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold -mt-9 my-16">Full-Service Wedding Planning: Personalized Planning: Tailored to Your Love Story!</h1>
                    <p>Our full-service planning approach is the epitome of elegance and precision, tailored to bring your unique love story to life. Our expertise lies not just in meticulous planning and styling for wedding celebration but also in crafting unforgettable experiences in any destination. From scouting the perfect venue, whether it's in the bustling heart of a city or a serene beachfront, to assembling a team of the finest creative partners, we manage every intricate detail. Our dedicated  team meticulously styles each element of your event, creating an enchanting ambiance that resonates with sophistication.

                        With Kesh Events, experience the pinnacle of luxury in wedding planning, both locally and globally, and embark on a journey filled with elegance, style, and unforgettable memories. Our commitment is to provide an unmatched full-service wedding planning experience, making your wedding an elegant, stylish, and unforgettable celebration.</p>
                    <button className="mt-3 btn btn-primary"><Link to={'/service/book-now'}>Book Now</Link></button>
                </div>
                <div>
                    <img className="" src={service1} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-2  items-center mb-24 gap-x-3 bg-gray-800 py-10 px-10">
                <div>
                    <img className="w-full" src={service2} alt="" />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold -mt-9 my-16">Destination Wedding Planning: Celebrate Anywhere in the World!</h1>
                    <p>Embrace the extraordinary with our full service destination wedding planning. At Kesh Events, our luxury destination weddings are more than just events; they are immersive experiences that capture the beauty and romance of the world's most stunning locations. With our global reach, we bring your wedding dreams to life in the most enchanting locations around the world. From historic European castles to tropical beachfronts, our destination weddings are a blend of local charm and Kesh Events' signature elegance. We expertly navigate the logistics of destination weddings, ensuring your celebration is not just an event, but a once-in-a-lifetime experience.</p>
                    <button className="mt-3 btn btn-primary"><Link to={'/service/book-now'}>Book Now</Link></button>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;