import logo from './tutedude.png';
import profile from './profile.png';
import arrow from './arrow.png';
import arrowwhite from './arrowwhite.png';
import user from './user.png';
import wallet from './wallet.png';
import perct from './perct.png';
import rupee from './rupee.png';
import tag from './tag.png';


const offerData = [
  {
    title: 'Invite your Friends',
    desc: 'Share the link tutedude.com with your friends',
    img: user
  },
  {
    title: 'Friend purchases any course',
    desc: 'Using your REFERRAL CODE in the payemnts page',
    img: tag
  },
  {
    title: 'You get ₹ 200 as referral money',
    desc: 'On total purchase the friend makes, into your wallet',
    img: rupee
  },
  {
    title: 'Your Friend gets ₹ 200 Off ',
    desc: 'On his overall fee on successful purchase using your referral code ',
    img: perct
  },
  {
    title: 'Transfer money from wallet',
    desc: 'When the wallet balance reaches ₹200 or more, you can withdraw it',
    img: wallet
  },
]

const friendReffered = [
  {
    name: 'Dhiraj Saxsena',
    date: '14 Sep, 2022',
    enr: 6,
    skill: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'Java'],
    amount: 185
  },
  {
    name: 'Subhash Mishra',
    date: '15 Sep, 2022',
    enr: 23,
    skill: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'Java', 'C++'],
    amount: 485
  },
  {
    name: 'Prafull Kumar',
    date: '15 Sep, 2022',
    enr: 14,
    skill: ['DSA', 'ReactJs', 'Nodejs', 'Python', 'MERN', 'Java', 'C++'],
    amount: 320
  },
]




export { logo, profile, arrow, arrowwhite, user, wallet, perct, rupee, tag, offerData, friendReffered }