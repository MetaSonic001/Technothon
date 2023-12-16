// import React from 'react'

const About = () => {
    return (
        <div className="container">
            <h1 className="text-center mb-8 text-[#ee2a7b] font-bold text-5xl ">
                About
            </h1>
            <div className="content flex  items-center justify-center flex-col text-slate-100">
                <div className="md:w-[700px]  w-[100%]">

                    {/* block 1 */}
                    <span className="block my-2 text-lg">
                        Welcome to Technothon 2024 - A 24-hours Hackathon exclusively for Polytechnic Students. Building on the success of our inaugural event in 2023, Technothon continues to be the epicenter of innovation for the engineering community across Mumbai.
                    </span>

                    <span className="block my-2 text-lg">
                        In 2023, we witnessed remarkable creativity and problem-solving skills during our 24-hour nonstop hackathon. The overwhelming response fueled our commitment to providing an even more exhilarating experience in 2024.
                    </span>

                    <span className="block my-2 text-lg">
                        At Technothon, our aim is to provide a platform for students across the city to inculcate invaluable skills in product development. By building projects from scratch and competing with fellow mates, participants identify and hone their innovation and problem-solving skills.
                    </span>

                    <span className="block my-2 text-lg">
                        <strong>New in this edition: Blind Bet Registration</strong>
                        This year, we introduce an exciting addition - Blind Bet Registration. Teams can now register without knowing the specific problem statements. This innovative approach adds an element of surprise and challenge to the hackathon experience, encouraging teams to take a leap of faith during this unique registration phase.                </span>

                    <span className="block my-2 text-lg">
                        Continue reading to uncover how Blind Bet Registration brings a thrilling twist to Technothon 2024!
                    </span>

                </div>
            </div>
        </div>
    )
}

export default About