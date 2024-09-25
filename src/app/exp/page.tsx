import React from 'react';
import InfoGeneral from "@/app/componants/infoGeneral";
import Tableau from "@/app/componants/tableau";

const Page = () => {
    return (
        <div className="flex flex-col gap-5 py-5  ">
            <InfoGeneral></InfoGeneral>
            <Tableau></Tableau>

        </div>
    );
};

export default Page;
