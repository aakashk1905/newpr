import React from 'react';
import emergencyProcedure from "../../../Assests/emergencyProcedure.png"
import AppointmentModal from '../../AppointmentModal';

const EmergencyProcedures = () => {

    return (
        <div className='bg-[#FFF] flex flex-col items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-4 border-b w-[90%] md:w-[88%] lg:w-4/5'>
            <div>
                <h1 className='text-2xl font-semibold text-[#17324A] mb-6'>Emergency Procedures</h1>
                <p className='text-sm mb-6 text-gray-900'>In case of an emergency, follow these steps:</p>
                <ul className='list-inside list-disc mb-10'>
                    <li className='mb-3 text-[#17324A] text-lg'>Stay Calm and Assess the Situation</li>
                    <li className='mb-3 text-[#17324A] text-lg'>Call Emergency Services Immediately</li>
                    <li className='mb-3 text-[#17324A] text-lg'>Provide Necessary Information to the Operator</li>
                    <li className='mb-3 text-[#17324A] text-lg'>Follow Dispatcher's Instructions</li>
                    <li className='text-gray-800'>Wait for Emergency Services and Provide Assistance if Safe</li>
                </ul>

                <div className="flex flex-col xl:flex-row gap-3 w-full">
          <button className="w-full md:w-4/5 h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
         <div className='w-full'>
         <AppointmentModal className="w-full md:w-4/5 h-[64px]" text={"Book Your Appointment"}></AppointmentModal>
         </div>
        </div>
            </div>

            <div className='p-4 rounded-md flex justify-center items-center'>
                <img className='' src={emergencyProcedure} alt="" />
            </div>
        </div>
        </div>
    );
};

export default EmergencyProcedures;