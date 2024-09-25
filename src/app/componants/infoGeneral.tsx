import React from 'react';

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();


    return `${day}-${month}-${year}`;
}
const Header = () => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    return (
        <div className="flex flex-col gap-5 py-5  ">

            <div className=" flex flex-row justify-between items-center mx-2  md:mx-5 ">

                <div className="flex flex-col md:gap-3 gap-1">
                    <h1 className="md:text-xl font-bold">Relevé N</h1>
                    <input className="border-2 border-black" type="text "/>
                </div>
                <h1 className="text-xl font-bold">Date: {formattedDate}</h1>
            </div>

            <div className=" flex flex-col items-start mx-3 md:flex-row  md:justify-around md:items-center md:mx-5 ">

                <div className="flex flex-col   gap-3">
                    <h1 className="text-xl font-bold">N Bogie I</h1>
                    <input className="border-2 border-black text-center"  type="text "/>
                </div>

                <div className="flex flex-col   gap-3">
                    <h1 className="text-xl font-bold">N Bogie II</h1>
                    <input className="border-2 border-black text-center" type="text "/>
                </div>

                <div className="flex flex-col   gap-3">
                    <h1 className="text-xl font-bold">Nature</h1>
                    <input className="border-2 border-black text-center" type="text "/>
                </div>

                <div className="flex flex-col   gap-3">
                    <h1 className="text-xl font-bold">Index KM</h1>
                    <input className="border-2 border-black text-center" type="text "/>

                </div>
            </div>
            <div className=" flex flex-col  items-start  gap-4 mx-5 ">
                <label htmlFor="Observation" className="text-xl text-black font-bold">Observation:</label>

                <textarea id="Observation" name="Observation" className="w-full md:w-1/2 h-auto border border-3 border-black">

                </textarea>
            </div>

        </div>
    );
};

export default Header;
