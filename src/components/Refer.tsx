export default function Refer() {
  return (
    <section className='grid md:grid-cols-2 gap-8 lg:gap-16 mt-12  '>
      <div className='drop-shadow-2xl p-6 rounded-2xl  bg-white text-center'>
        <div className='flex items-start justify-between gap-4 lg:gap-8 text-start'>
          <div>
            <p> Referral Earning</p>
            <h1 className='text-xl text-black font-semibold mt-2'> ₹ 2,500 </h1>
          </div>
          <div>
            <p> Total Referrals</p>
            <h1 className='text-xl text-black font-semibold mt-2'> 7 </h1>
          </div>
          <div>
            <p> Wallet Balance</p>
            <h1 className='text-xl text-black font-semibold mt-2'> ₹ 500 </h1>
          </div>
        </div>
        <button className='bg-purple text-sm text-white rounded-full py-2 px-4 mt-8 '>
          Withdraw Balance
        </button>
      </div>
      <div className='md:p-2'>
        <h1 className='text-xl font-semibold tracking-wider'>
          Your Referral Code
        </h1>
        <p className=' border-2 tracking-[1.5rem] mt-6 py-2 px-8 font-semibold border-purple rounded-lg inline-block text-center'>
          EDCH54
        </p>
      </div>
    </section>
  );
}
