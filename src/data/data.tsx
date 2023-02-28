
import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */

export const homePageMeta: HomepageMeta = {
  title: 'Luca Pavirani Portfolio',
  description: "Luca Pavirani's resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Luca Pavirani`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className='text-stone-100'>Biomedical Engineer</strong>, currently working at <strong className="text-stone-100">Houston Methodist</strong> developing a <strong className="text-stone-100">Deep Learning</strong> software for automatic bone stromal cells segmentation. 
        
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have good team-work skills and I always try to uplift the people I work with, constantly striving to obtain the best from the others but especially from me.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://github.com/LucaPavirani/CellHunter/blob/main/CellHunter/round_home_white_24dp.png',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I completed my Bachelor’s Degree in Biomedical Engineering at the University of
  Bologna and I then decided to continue my academic training at the Polytechnic University
  of Milan so as to be exposed to a more international-oriented environment. As a master’s
  student, I took part in different projects in which I often hold leadership roles. Thanks to
  my long-term vision and time management skills, I was able to guide my team to successful
  and performant results. During my second year of master’s studies, I was awarded a scholarship
  funded by Polytechnic of Milan to spend one semester at the Penn State University
  in Pennsylvania, USA. This program broadened my view on different learning styles and
  inspired me to possibly work internationally.
  As part of my master’s thesis curriculum, I am currently spending a 6-month internship
  at the Houston Methodist Research Institute, in Houston, TX with the Center for Precision
  Surgery. Within it, I have the opportunity to widen my knowledge in Artificial Intelligence
  and in particular in Deep Learning networks applied to medical images. This experience
  is also showing me that I thrive in a fast-paced and dynamic working environment. Additionally,
  this experience is also training me on the translational side of research projects,
  indeed my daily tasks involve working alongside a team of biologists at MD Anderson Cancer
  Center in order to integrate machine learning-based infrastructures with bone cancer
  microscopy images to create a robust pipeline to extract valuable information from large
  preclinical datasets. In summary, this internship is fostering me to collaborate both with
  fellow interns and navigated professionals in bioengineering and biological field and it is
  giving me the possibility to demonstrate my strong capabilities as a key team member.`,
  aboutItems: [
    {label: 'Location', text: 'Italy, Forlimpopoli', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Sports, Cooking, Photography', Icon: SparklesIcon},
    {label: 'Study', text: 'Politecnico di Milano', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Houston Methodist Research Institute', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Italian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Coding Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Matlab',
        level: 7,
      },
      {
        name: 'C++',
        level: 6,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Github',
        level: 9,
      },
      {
        name: 'EAGLE',
        level: 7,
      },
      {
        name: 'PSoC Creator',
        level: 7,
      },
      {
        name: 'Arduino',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'CellHunter: Deep Learning Models for Automatic Bone Stromal Cells Segmentation',
    description: 'Master Thesis Project in collaboration with MD Anderson Cancer Center. The goal is to automatically distinguish and segment stromal cells with a deep learning system. The neural network is additionally embedded in an executable software to make it user-friendly for the biologists.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2020 - May 2023',
    location: 'Politecnico di Milano',
    title: 'MSc in Biomedical Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'August 2021 - December 2021',
    location: 'Penn State University',
    title: 'College of Engineering',
    content: <p>Exchange student program for one semester</p>,
  },
  {
    date: 'September 2017 - July 2020',
    location: 'Università di Bologna',
    title: 'BSc in Biomedical Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2022 - Present',
    location: 'Houston Methodist Research Institute',
    title: 'Graduate Research Fellow',
    content: (
      <p>
        Development of the Master's thesis project.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Stefano Casarin',
      text: 'Mr. Pavirani has been working as a research fellow under my supervision in the Center for Precision Surgery at Houston Methodist Research Institute, Houston, TX.He is proving himself to be a talented, dedicated, committed, and innovative young research fellow.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Eleonora Dondossola',
      text: 'Luca possesses high-level coding skills, creativity, long-term vision, and great analytical skills, all dotes required to quickly assess programming options, forecast trouble spots, and resolve potential issues in formative stages. ',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Giorgio Allegri',
      text: 'Working with Luca is a pleasure - he is a true team player who brings a positive attitude and strong collaboration skills to every project.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are my contact details.',
  items: [
    {
      type: ContactType.Email,
      text: 'luca481998@gmail.com',
      href: 'mailto:luca481998@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Forlimpopoli, FC, Italy',
      href: 'https://www.google.com/maps/place/47034+Forlimpopoli+FC,+Italia/@44.1886336,12.1259142,14z/data=!3m1!4b1!4m6!3m5!1s0x132ca6368437e0f5:0x74959bc2e7c98af1!8m2!3d44.1879103!4d12.1285285!16zL20vMDQwNXdj',
    },
    {
      type: ContactType.Instagram,
      text: '@lucapavirani',
      href: 'https://www.instagram.com/lucapavirani/',
    },
    {
      type: ContactType.Github,
      text: 'lucapavirani',
      href: 'https://github.com/LucaPavirani',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/LucaPavirani'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/20532683/luca-pavirani'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/luca-pavirani/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/lucapavirani/'},
];
