import type { CategoryTile } from '../types/agent.types';

export const CATEGORIES: CategoryTile[] = [
//   {
//     id: 1,
//     name: 'sdlc',
//     displayName: 'SDLC',
//     description: 'Software Development Life Cycle management and automation',
//     icon: '🔄',
//     route: '/sdlc'
//   },
  {
    id: 4,
    name: 'telecom',
    displayName: 'Telecom',
    description: 'Telecommunications infrastructure and network management',
    icon: '📡',
    route: '/telecom'
  },
//   {
//     id: 3,
//     name: 'healthcare',
//     displayName: 'Healthcare',
//     description: 'Healthcare systems and patient data management',
//     icon: '🏥',
//     route: '/healthcare'
//   },
//   {
//     id: 4,
//     name: 'hr',
//     displayName: 'Human Resources',
//     description: 'HR operations and employee management solutions',
//     icon: '👥',
//     route: '/hr'
//   }
];

export const API_CONFIG = {
  BASE_URL: 'https://agent-na-dev.api.iinerds.com/api/v1',
  ENDPOINTS: {
    AGENTS: '/agent/'
  },
  DEFAULT_PARAMS: {
    limit: 10,
    offset: 0,
    sort_by: 'id',
    sort_order: 'asc',
    show_null_clientid: true,
    fetchkbsummary: false
  }
};