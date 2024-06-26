import Navbar from "../Shared/Navbar/Navbar";
import bg from "../../assets/bg.jpg";
import { Link, useLoaderData } from "react-router-dom";
import RecentCard from "./RecentCard";
import { useState } from "react";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
    const recentAll = useLoaderData();
    const [seeAll, setSeeAll] = useState(false);
    return (
        <div>

            {/* Home Page View */}
            <div
                className="hero min-h-screen relative"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>
                <div className="absolute top-0 left-0 right-0">
                    <Navbar></Navbar>
                </div>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">Unforgettable Events, Seamless Planning</h1>
                        <p className="mb-5 max-w-md mx-auto">
                            Expert event management services for weddings, corporate functions, and celebrations. We handle every detail for your perfect event.
                        </p>
                    </div>
                </div>
            </div>
            {/* Our Portfolio */}

            <div className="my-9 max-w-5xl items-center mx-auto">
                <h1 className="text-4xl text-center">Our Recent Event</h1>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {seeAll
                        ? recentAll.map(recent => (
                            <RecentCard key={recent.id} recent={recent}></RecentCard>
                        ))
                        : recentAll.slice(0, 6).map(recent => (
                            <RecentCard key={recent.id} recent={recent}></RecentCard>
                        ))}
                </div>
                <div className="flex justify-center mt-4">
                    {
                        seeAll?<p></p>:<button onClick={() => setSeeAll(true)} className="btn btn-primary">See All</button>
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;