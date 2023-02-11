import React from 'react'
import Navbar from './Navbar'
import home from "../../Assets/jaundice.svg"
import dirtyhand from "../../Assets/dirtyhand.svg"
import gptrn from "../../Assets/greenptrnbg.svg"
import paisa from "../../Assets/paisa.svg"
import FYC from "../../Assets/FindYourCrop.svg"
function HomeComponent() {
    return (
        <div>
            <Navbar className="fixed" />
            <div className=' w-[100vw] h-[100vh] bg-no-repeat bg-center'
                style={{
                    backgroundSize: "cover"
                }}

            >
                <img src={home} className="object-contain mx-auto w-full px-2 py-2" />
                <button className="bg-white text-black font-bold font-ss py-2 px-4 rounded-xl absolute w-[16vw] h-[7vh]" style={{
                    left: "4vw",
                    top: "66vh"
                }}>
                    Try Now
                </button>
            </div>
            <div>
                <div className="flex flex-col items-start justify-center   bg-white p-16">
                    <p className="text-4xl font-bold font-ss text-[#57AC49] justify-start">Services</p>
                    <div className='flex align-center justify-center'>
                        <div className="flex flex-row items-center gap-12 justify-center h-[80vh] bg-white">
                            <img src={FYC} alt="" />
                            <img src={FYC} alt="" />
                            <img src={FYC} alt="" />
                            <img src={FYC} alt="" />
                            <img src={FYC} alt="" />
                            <img src={FYC} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between w-full h-[80vh] bg-wfptrn ">
                <img src={dirtyhand} alt="" className="w-[50vw]" />
                <div className="flex flex-col  gap-16  h-[80vh] ">
                    <p className="text-4xl font-[700] font-ss text-[#57AC49] justify-start text-left w-[40vw]">Maximize Your Farming Success with GPS-Based Crop Recommendations</p>
                    <p className="text-2xl font-[400] font-ss text-[#57AC49] justify-start text-left w-[40vw]">A Step-by-Step Guide to Selecting the Right Crop for Your Land and Climate Conditions</p>
                    <button className="bg-[#57AC49] text-white font-bold font-ss py-2 px-4 rounded-xl w-[16vw] h-[7vh] hover:bg-white hover:text-[#57AC49]">Try Now</button>
                </div>
            </div>
            <div className="flex items-center justify-between  w-full h-[80vh] bg-no-repeat rounded-[5vh] m-2" style={{ background: `url(${gptrn}), #57AC49` }}>
                <img src={paisa} alt="" className="w-[40vw]" />
                <div className="flex flex-col  gap-16  mr-10">
                    <p className="text-4xl font-[700] font-ss text-white justify-start text-left w-[40vw]">Stay Ahead of the Game: Stay Informed About Government Schemes and Programs for Farmers</p>
                    <p className="text-2xl font-[400] font-ss text-white justify-start text-left w-[40vw]">A Comprehensive Guide to Available Support from Central and State Governments</p>
                    <button className="bg-white text-[#57AC49] font-bold font-ss py-2 px-4 rounded-xl w-[16vw] h-[7vh] hover:bg-white hover:text-[#57AC49]">Inform Aid Programs</button>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent