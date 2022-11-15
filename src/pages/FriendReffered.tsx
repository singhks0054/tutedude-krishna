import FriendCard from '../components/FriendCard';
import { friendReffered } from '../images/index';
export default function FriendReffered() {
  return (
    <main className='text-purple mx-8 sm:mx-12 lg:mx-40 my-4'>
      <section className='flex  justify-between  mt-12 items-center  '>
        <div className=''>
          <h1 className=' tracking-wider'>Your Referral Code</h1>
          <p className=' border-2 tracking-[0.5rem] sm:tracking-[1.5rem] mt-2 sm:mt-4 py-2 px-2 sm:px-8 font-semibold text-black rounded-lg inline-block text-center'>
            EDCH54
          </p>
        </div>
        <div className='drop-shadow-xl p-3 rounded-2xl  bg-white '>
          <h1 className=''> Wallet Balance</h1>
          <h1 className='text-xl text-black font-semibold mt-2'> ₹ 500 </h1>
        </div>
      </section>
      <h1 className='text-lg font-semibold tracking-wider mt-8'>
        Friends who enrolled <span className='text-black font-normal'>(3)</span>
      </h1>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 '>
        {friendReffered.map((val, i) => (
          <FriendCard
            key={i}
            name={val.name}
            date={val.date}
            enr={val.enr}
            // @ts-ignore
            skill={val.skill}
            amount={val.amount}
          />
        ))}
      </div>

      <h1 className=' font-semibold tracking-wider mt-8'>Terms & Conditions</h1>
    </main>
  );
}
