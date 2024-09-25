"use client"
import React, {useState} from 'react';
import {ESSIEUU} from "@/app/models/enregistrement";
import {fakedata} from "@/app/models/data";
import {bgEA, bgEI, bgEpaisseur, bgHauteur, bgQR} from "@/app/componants/uril";






    const Tableau = () => {

    const [enregistrementApresCalculEA, setEnregistrementApresCalculEA] = useState(
        fakedata.map((item:ESSIEUU) => ({
            ...item,
            ea: item.ei + item.eg.epaisseur + item.ed.epaisseur,
        }))
    );

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        property: string
    ) => {
        const updatedEnregistrement = [...enregistrementApresCalculEA];

        // Split property string into object path segments
        const [propertyName, subPropertyName] = property.split('.');

        // Option 1: Dot Notation (Recommended)
        if (propertyName === 'eg') {
            updatedEnregistrement[index].eg[subPropertyName] = event.target.valueAsNumber;
        } else if (propertyName === 'ed') {
            updatedEnregistrement[index].ed[subPropertyName] = event.target.valueAsNumber;
        } else {
            updatedEnregistrement[index].ei=event.target.valueAsNumber
        }



        // Recalculate ea for the modified record
        updatedEnregistrement[index].ea =
            updatedEnregistrement[index].ei +
            updatedEnregistrement[index].eg.epaisseur +
            updatedEnregistrement[index].ed.epaisseur;

        setEnregistrementApresCalculEA(updatedEnregistrement);
        console.log(updatedEnregistrement[0]);
        console.log(
            `Value of ${property} for index ${index} changed to:`,
            updatedEnregistrement[index][propertyName][subPropertyName]
        );
    };


    return (



        <div className="relative overflow-x-auto  ">
        <table className=" m-auto text-sm text-center   text-black md:text-lg bg-slate-100 border-separate border-spacing-4 border border-slate-500 ">
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
    <tbody className="text-center" >
    <tr className=" my-4  ">
    <th scope="row" className=" text-xl text-black  dark:text-white">
        Diametre
        </th>
    {enregistrementApresCalculEA.map((item, index) => (
        <React.Fragment key={index}>
        <td className=" rounded-lg  hover:bg-white focus:bg-white min-w-20  ">
        <input
            type="number"
        name={`eg.diametre-${index}`} // Add unique name for clarity
        defaultValue={item.eg.diametre} // Use state for controlled input
        onBlur={(event) => handleInputChange(event, index, 'eg.diametre')}
        className="bg-gray-50 border border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
        required
        />
        </td>
        <td className=" rounded-lg hover:bg-white focus:bg-white min-w-20  ">
    <input
        type="number"
        name={`ed.diametre-${index}`} // Add unique name for clarity
        defaultValue={item.ed.diametre} // Use state for controlled input
        onBlur={(event) => handleInputChange(event, index, 'ed.diametre')}
        className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
        required
        />
        </td>

        </React.Fragment>
    ))}


    </tr>
    <tr className=" my-4 ">
    <th scope="row" className="px-6 py-4 text-xl text-black whitespace-nowrap dark:text-white">
        Epaisseur
        </th>
    {enregistrementApresCalculEA.map((item, index) => (
        <React.Fragment key={index}>
        <td className={`rounded-lg  ${bgEpaisseur(item.eg.epaisseur)} min-w-20` }>

        <input type="number" defaultValue={item.eg.epaisseur}
        name={`eg.epaisseur-${index}`}
        onBlur={(event) => handleInputChange(event, index, 'eg.epaisseur')}
        className=" bg-transparent  text-gray-900 text-center  rounded-lg  block w-full p-2.5 "
        required/>
        </td>
        <td className={`rounded-lg  ${bgEpaisseur(item.ed.epaisseur)} min-w-20` }>
        <input type="number" defaultValue={item.ed.epaisseur}
        name={`ed.epaisseur-${index}`}
        onBlur={(event) => handleInputChange(event, index, 'ed.epaisseur')}
        className=" bg-transparent  text-gray-900 text-center  rounded-lg  block w-full p-2.5 "
        required/>
        </td>
        </React.Fragment>
    ))}


    </tr>
    <tr className=" my-4 text-center">
    <th scope="row" className="px-6 py-4 text-xl text-black whitespace-nowrap dark:text-white">
        QR
        </th>
    {enregistrementApresCalculEA.map((item, index) => (
        <React.Fragment key={index}>
        <td  className={`rounded-lg  ${bgQR(item.eg.qr)} min-w-20` }>

        <input type="number"  defaultValue={item.eg.qr}
        name={`eg.qr-${index}`}
        onBlur={(event) => handleInputChange(event, index, 'eg.qr')}
        className=" bg-transparent  text-gray-900 text-center  rounded-lg  block w-full p-2.5 "
        required/>
        </td>
        <td  className={`rounded-lg  ${bgQR(item.ed.qr)} min-w-20` }>

        <input type="number"  defaultValue={item.ed.qr}
        name={`ed.qr-${index}`}
        onBlur={(event) => handleInputChange(event, index, 'ed.qr')}
        className=" bg-transparent  text-gray-900 text-center  rounded-lg  block w-full p-2.5 "
        required/>
        </td>
        </React.Fragment>
    ))}


    </tr>
    <tr className=" my-4 text-center">
    <th scope="row" className="px-6 py-4 text-xl text-black whitespace-nowrap dark:text-white">
        Hauteur
        </th>
    {enregistrementApresCalculEA.map((item, index) => (
        <React.Fragment key={index}>
        <td className={`rounded-lg  ${bgHauteur(item.eg.heauteur)} min-w-20` }>

        <input type="number"
        name={`eg.heauteur-${index}`}
        defaultValue={item.eg.heauteur}
        onBlur={(event) => handleInputChange(event, index, 'eg.heauteur')}
        className=" bg-transparent  text-gray-900 text-center  rounded-lg  block w-full p-2.5 "
        required/>
        </td>
        <td  className={`rounded-lg  ${bgHauteur(item.ed.heauteur)} min-w-20` }>

        <input type="number"
        name={`ed.hauteur-${index}`}
        defaultValue={item.ed.heauteur}
        onBlur={(event) => handleInputChange(event, index, 'ed.heauteur')}
        className=" bg-transparent  text-gray-900 text-center  rounded-lg  block w-full p-2.5 "
        required/>
        </td>
        </React.Fragment>
    ))}


    </tr>
    <tr className=" my-4 text-center">
    <th scope="row" className="px-6 py-4   text-black text-xl whitespace-nowrap dark:text-white">
        EI
        </th>
    {enregistrementApresCalculEA.map((item, index) => (

        <td colSpan={2} key={index}  className={`rounded-lg  ${bgEI(item.ei)} min-w-20` }>

        <input type="number" defaultValue={item.ei}
        name={`ei-${index}`}
        onBlur={(event) => handleInputChange(event, index, 'ei')}
        className=" bg-transparent  text-gray-900 text-center  rounded-lg  block w-full p-2.5 "
        required/>
        </td>

    ))}


    </tr>
    <tr className=" my-4 text-center">
    <th scope="row" className="px-6 py-4   text-black text-xl whitespace-nowrap dark:text-white">
        EA
        </th>
    {enregistrementApresCalculEA.map((item, index) => (

        <td colSpan={2} key={index}  className={`rounded-lg  ${bgEA(item.ea)} min-w-20` }>
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
