export const API_CONFIG = {
  BASE_URL: 'https://agent-na-dev.api.iinerds.com/api/v1',
  AUTH_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY0NDYyNjQwLTVkZWQtNDE3Ni1hYTEyLWI4MGI5MWNiZmUxZiIsImVtYWlsIjoiYWRtaW5AbmVyZGFnZW50LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MTg5MTQxMCwiZXhwIjoxNzYxOTc3ODEwfQ.3Kso3A1XwSL8WEQJgw8n6OhbIZA2qAd3M-1-EylWQcs',
  ENDPOINTS: {
    CATEGORIES: '/category/',
    AGENTS: '/agent/',
  },
  DEFAULT_PARAMS: {
    LIMIT: 100,
    OFFSET: 0,
  },
} as const;
