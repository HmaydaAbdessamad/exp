import React from 'react';
import {ESSIEUU} from "@/app/models/enregistrement";
import {fakedata} from "@/app/models/data";


const Tableau = () => {

    const enregistrementApresCalculEA:ESSIEUU[]=fakedata.map((item)=>(
        {...item,ea:item.ei+item.eg.epaisseur+item.ed.epaisseur as number}
    ))
    return (



    <div className="relative overflow-x-auto m-5 ">
        <table className="w-full m-auto text-sm text-center   text-black md:text-lg bg-slate-100 border-separate border-spacing-4 border border-slate-500 ">
            <thead className=" text-blue-800 uppercase  ">
            <tr>
                <th scope="col" className="px-6 py-3">

                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <th scope="col"  className=" px-6 py-3">E{index + 1}G</th>
                        <th>E{index + 1}D</th>
                    </React.Fragment>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4 text-xl text-blue-800 whitespace-nowrap dark:text-white">
                    Diametre
                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <td className=" rounded-lg  hover:bg-white focus:bg-white ">
                            {item.eg.diametre}
                        </td>
                        <td className=" rounded-lg hover:bg-white focus:bg-white">
                            {item.ed.diametre}
                        </td>
                    </React.Fragment>
                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4 text-xl text-blue-800 whitespace-nowrap dark:text-white">
                    Epaisseur
                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">
                            {item.eg.epaisseur}
                        </td>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">
                            {item.ed.epaisseur}
                        </td>
                    </React.Fragment>
                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4 text-xl text-blue-800 whitespace-nowrap dark:text-white">
                    QR
                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">
                            {item.eg.qr}
                        </td>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">
                            {item.ed.qr}
                        </td>
                    </React.Fragment>
                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4 text-xl text-blue-800 whitespace-nowrap dark:text-white">
                    Hauteur
                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">
                            {item.eg.heauteur}
                        </td>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">
                            {item.ed.heauteur}
                        </td>
                    </React.Fragment>
                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4   text-blue-800 text-xl whitespace-nowrap dark:text-white">
                    EI
                </th>
                {enregistrementApresCalculEA.map((item, index) => (

                    <td colSpan={2} key={index} className="rounded-lg bg-white hover:bg-white p-5 focus:bg-white ">
                        {item.ei}
                    </td>

                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4   text-blue-800 text-xl whitespace-nowrap dark:text-white">
                    EA
                </th>
                {enregistrementApresCalculEA.map((item, index) => (

                    <td colSpan={2} key={index} className="rounded-lg bg-white hover:bg-white p-5 focus:bg-white ">
                        {item.ea}
                    </td>

                ))}


            </tr>

            </tbody>
        </table>
    </div>

    );
};

export default Tableau;
