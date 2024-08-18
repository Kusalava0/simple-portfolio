// dialog.tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
//   DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/core/dialog';
import { PlusIcon, Github, ExternalLink } from 'lucide-react';

// Import your images here
import IMG0 from '../assets/portfolio0.jpg';
import IMG1 from '../assets/portfolio1.jpg';
import IMG2 from '../assets/portfolio2.png';
import IMG3 from '../assets/portfolio3.png';
import IMG4 from '../assets/portfolio4.png';
import IMG5 from '../assets/portfolio5.png';
import IMG6 from '../assets/portfolio6.png';

interface ProjectData {
    id: number;
    image: string;
    title: string;
    github: string;
    demo: string;
    description: string;
}

const data = [
  {
    id: 0,
    image: IMG0,
    title: "Symplify",
    github: 'https://github.com/Kusalava0/Symplify-scheduler',
    demo: 'https://www.loom.com/share/8af37faa13794766ba1f517354cf1c30?sid=136b35e0-629a-4c2d-844e-5dc5d0ac0bb9',
    description: "A free lance project which is a comprehensive React-based clinic management system, handling appointments, patient data, employee management, and financial operations."
  },
  {
    id: 1,
    image: IMG1,
    title: "Wildlife Conservation",
    github: 'https://github.com/Kusalava0/Wildlife-Conservation',
    demo: 'https://drive.google.com/file/d/1S8TOoh9hTh7WAUCdIvk-cJzlFV27jHjn/view?usp=sharing',
    description: "A 36-hour Hackathon winning project for detecting endangered species and sending real-time alerts to prevent poaching."
  },
  {
    id: 2,
    image: IMG2,
    title: "Todo App With Auth",
    github: 'https://github.com/Kusalava0/TodoList-with-Auth',
    demo: 'https://todo-list-with-auth-7nb2.vercel.app/login',
    description: "A robust TODO application leveraging React for the frontend, Fast API for the backend, and MongoDB for data storage."
  },
  {
    id: 3,
    image: IMG3,
    title: "Video Streaming and Processing",
    github: 'https://github.com/Kusalava0/URecipe',
    demo: 'https://drive.google.com/file/d/193OrAIlPPxmpMT3PaxJNVBHfQ3BqpCV9/view?usp=sharing',
    description: "A project for streaming and processing video content utilizing the websockets."
  },
  {
    id: 4,
    image: IMG4,
    title: "Users Dashboard with CRUD (React Table)",
    github: 'https://github.com/Kusalava0/techwondoe-frontend',
    demo: 'https://techwondoe-frontend-nnppizrol-kusalava0.vercel.app/',
    description: "A user dashboard with CRUD operations using React Table data store locally and operations are performed in real time."
  },
  {
    id: 5,
    image: IMG6,
    title: "Facial Recognition Attendance",
    github: 'https://github.com/Kusalava0/Attendance_Prjct',
    demo: '',
    description: "An attendance system using facial recognition technology."
  },
  {
    id: 6,
    image: IMG5,
    title: "URecipe",
    github: 'https://github.com/Kusalava0/URecipe',
    demo: '',
    description: "A recipe application to share and post your recipes online for eveyone to see."
  },
];

export function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((project) => (
        <ProjectDialog key={project.id} project={project} />
      ))}
    </div>
  );
}

interface ProjectDialogProps {
    project: ProjectData;
}

function ProjectDialog({ project }: ProjectDialogProps) {
  return (
    <Dialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border-2 border-zinc-950/10 bg-black border-gray-800 text-white shadow-lg shadow-gray-900 dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <DialogImage
          src={project.image}
          alt={project.title}
          className='h-48 w-full object-cover'
        />
        <div className='flex flex-grow flex-row items-end justify-between p-2'>
          <div>
            <DialogTitle className='dark:text-zinc-50'>
              {project.title}
            </DialogTitle>
          </div>
          <button
            type='button'
            className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-label='Open dialog'
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-black dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
        >
          <DialogImage
            src={project.image}
            alt={project.title}
            className='h-64 w-full object-cover'
          />
          <div className='p-6'>
            <DialogTitle className='text-2xl text-white dark:text-zinc-50'>
              {project.title}
            </DialogTitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                {project.description}
              </p>
              <div className='mt-4 flex space-x-4'>
                <a
                  className='inline-flex items-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    className='inline-flex items-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </DialogDescription>
          </div>
          <DialogClose className='text-zinc-50' />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}