type propType = {
  name: String;
  date: String;
  enr: Number;
  skill: [String];
  amount: Number;
};

export default function FriendCard({
  name,
  date,
  enr,
  skill,
  amount,
}: propType) {
  return (
    <div className='abc rounded-2xl text-white p-4'>
      <div className='flex justify-between'>
        <h1 className='font-semibold'>{name}</h1>
        <p className='text-sm'>{date}</p>
      </div>
      <p className='font-thin text-sm mt-4'>Courses Enrolled({`${enr}`})</p>
      <div className='flex flex-wrap mt-4'>
        {skill.map((val, i) => (
          <p
            className='border border-white py-1 px-4 rounded-full mt-2 mr-2'
            key={i}
          >
            {val}
          </p>
        ))}
      </div>
      <p className='font-thin text-sm mt-4'>
        Referral Amount
        <span className='font-semibold text-xl ml-2'>{`₹ ${amount}`}</span>
      </p>
    </div>
  );
}
