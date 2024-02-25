import diagnostic from "../../../Assests/diagnostic.png"

const DiagnosticCenter = () => {
    return (
        <div className='mt-20'>
            <div className='bg-[#FFF] px-5 md:px-10 py-5'>
                <h1 className='text-2xl font-semibold text-[#17324A] mb-6 text-center'>Diagnostic Centers</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
                <p className='mb-3 text-[#17324A] text-lg'>Seamless access to certified diagnostic centers citywide, with hassle-free appointment booking for ultrasound, x-ray, MRI, and CT scans.</p>

                <p className='mb-7 text-[#17324A] text-lg'><span className="font-bold">Certifications:</span> Our partnered diagnostic centers hold key accreditations—ISO for international quality standards, NABL for stringent laboratory compliance, and NABH (for CT and MRI centers) for excellence in advanced imaging services.</p>

                <p className='mb-10 text-[#17324A] text-lg'>Committed to health excellence, our certified diagnostic partners ensure quality and precision.</p>

                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
          <button className="w-full md:w-[350px] h-[64px] bg-[#00a0aa] rounded-lg text-white border border-[#00a0aa]">
            Book Your Appoinment
          </button>
        </div>
            </div>

            <div className="flex justify-center lg:justify-end">
            <img className='w-full lg:w-2/3' src={diagnostic} alt="" />
            </div>
        </div>
        </div>
        </div>
    );
};

export default DiagnosticCenter;