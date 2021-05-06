import { FiHeadphones } from 'react-icons/fi';
import { BsBook, BsPencil,BsGraphUp } from 'react-icons/bs';
import { AiOutlineAudio, AiOutlineYoutube } from 'react-icons/ai';
import { RiTodoLine } from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Listening',
    link: '/ielts-listening',
    icon: <FiHeadphones />,
  },
  {
    title: 'Reading',
    link: '/ielts-reading',
    icon: <BsBook />,
  },
  {
    title: 'Writing',
    link: '/ielts-writing',
    icon: <BsPencil />,
  },
  {
    title: 'Speaking',
    link: '/ielts-speaking',
    icon: <AiOutlineAudio />,
  },
  {
    title: 'Mini-Youtube',
    link: '/mini-youtube',
    icon: <AiOutlineYoutube />,
  },
  {
    title: 'Result',
    link: '/ielts-result',
    icon: <BsGraphUp />
  }
];
