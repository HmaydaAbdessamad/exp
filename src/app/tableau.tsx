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
            <thead className=" text-black uppercase  ">
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
                <th scope="row" className="px-6 py-4 text-xl text-black whitespace-nowrap dark:text-white">
                    Diametre
                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <td className=" rounded-lg  hover:bg-white focus:bg-white ">

                            <input type="number" name="eg.diametre" value= {item.eg.diametre}
                                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    required/>
                        </td>
                        <td className=" rounded-lg hover:bg-white focus:bg-white">
                            <input type="number" name="ed.diametre" value={item.ed.diametre}
                                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   required/>

                        </td>
                    </React.Fragment>
                ))}


            </tr>


            <tr className=" my-4">
                <th scope="row" className="px-6 py-4 text-xl text-black whitespace-nowrap dark:text-white">
                    Epaisseur
                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">

                            <input type="number" name="eg.epaisseur" value={item.eg.epaisseur}
                                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   required/>
                        </td>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">
                            <input type="number" name="ed.epaisseur" value={item.ed.epaisseur}
                                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   required/>
                        </td>
                    </React.Fragment>
                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4 text-xl text-black whitespace-nowrap dark:text-white">
                    QR
                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">

                            <input type="number" name="eg.qr" value={item.eg.qr}
                                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   required/>
                        </td>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">

                            <input type="number" name="ed.qr" value={item.ed.qr}
                                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   required/>
                        </td>
                    </React.Fragment>
                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4 text-xl text-black whitespace-nowrap dark:text-white">
                    Hauteur
                </th>
                {enregistrementApresCalculEA.map((item, index) => (
                    <React.Fragment key={index}>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">

                            <input type="number" name="eg.heauteur" value={item.eg.heauteur}
                                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   required/>
                        </td>
                        <td className="rounded-lg  hover:bg-white focus:bg-white">

                            <input type="number" name="ed.heauteur" value={item.ed.heauteur}
                                   className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                   required/>
                        </td>
                    </React.Fragment>
                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4   text-black text-xl whitespace-nowrap dark:text-white">
                    EI
                </th>
                {enregistrementApresCalculEA.map((item, index) => (

                    <td colSpan={2} key={index} className="  hover:bg-white p-5 focus:bg-white ">

                        <input type="number" name="ei" value={item.ei}
                               className="bg-gray-50 border border-gray-300 text-gray-900  w-auto text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                               required/>
                    </td>

                ))}


            </tr>
            <tr className=" my-4">
                <th scope="row" className="px-6 py-4   text-black text-xl whitespace-nowrap dark:text-white">
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
