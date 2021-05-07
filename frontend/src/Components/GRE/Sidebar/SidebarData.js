import { CgMathPercent } from 'react-icons/cg';
import { BsPencil, BsBook } from 'react-icons/bs';
import { AiOutlineBulb, AiOutlineYoutube } from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Verbal',
    link: '/gre-verbal',
    icon: <BsBook />,
  },
  {
    title: 'Quantitative',
    link: '/gre-quantitative',
    icon: <CgMathPercent />,
  },
  {
    title: 'Analytical Writing',
    link: '/gre-awa',
    icon: <BsPencil />,
  },
  {
    title: 'Tips and Tricks',
    link: '/gre-tipsandtricks',
    icon: <AiOutlineBulb />,
  },
  {
    title: 'Mini-Youtube',
    link: '/mini-youtube',
    icon: <AiOutlineYoutube />,
  },
];
