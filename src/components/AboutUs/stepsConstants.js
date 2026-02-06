import { 
    Code2, 
    Palette, 
    Bug, 
    KanbanSquare, 
    HeadphonesIcon, 
    Building2 
  } from 'lucide-react';
  
  export const STEPS = [
    {
      id: 'dev',
      role: 'Developers',
      title: 'Implementation & Build',
      description: 'Writing scalable code, integrating APIs, and building the core infrastructure of the product.',
      icon: Code2,
      color: 'cyan'
    },
    {
      id: 'design',
      role: 'Designers',
      title: 'UX/UI & Prototyping',
      description: 'Crafting user-centric interfaces and ensuring a seamless, intuitive user experience.',
      icon: Palette,
      color: 'purple'
    },
    {
      id: 'qa',
      role: 'Quality Assurance',
      title: 'Testing & Validation',
      description: 'Rigorous automated and manual testing to ensure stability and catch bugs before release.',
      icon: Bug,
      color: 'indigo'
    },
    {
      id: 'pm',
      role: 'Project Managers',
      title: 'Planning & Sprinting',
      description: 'Orchestrating the workflow, managing timelines, and ensuring team alignment with business goals.',
      icon: KanbanSquare,
      color: 'cyan'
    },
    {
      id: 'support',
      role: 'Customer Support',
      title: 'Feedback Loop',
      description: 'Direct engagement with end-users to resolve issues and gather insights for future iterations.',
      icon: HeadphonesIcon,
      color: 'purple'
    },
    {
      id: 'backoffice',
      role: 'Back Office',
      title: 'Operations & HR',
      description: 'Supporting the team with resources, compliance, and operational efficiency.',
      icon: Building2,
      color: 'indigo'
    },
  ];
  