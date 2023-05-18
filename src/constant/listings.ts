export interface IConditions {
  condition: string;
  expected: string;
}

export interface ListingData {
  id: string;
  image: string;
  position: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  salaryUSD: number;
  location: string;
  locationFull: string;
  saved: boolean;
  company: string;
  employees: number;
  conditions: IConditions[];
  tags: string[];
  [key: string]: string | number | boolean | { condition: string; expected: string }[] | string[];
}

export const listingsData: ListingData[] = [
  {
    id: '1',
    image: '/png/Frame 47.png',
    position: 'Software Developer',
    description:'Develop and maintain web applications using modern frameworks.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 6000,
    location: 'LA',
    locationFull: 'Los Angeles',
    saved: true,
    company: 'NexaTech Solutions',
    employees: 100,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $6000',
      },
    ],
    tags: [
      'Los Angeles',
      'Company Name',
    ],
  },
  {
    id: '2',
    image: '/png/company2.png',
    position: 'Frontend Developer',
    description: 'Create visually appealing and responsive web interfaces.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 5500,
    location: 'HCMC',
    locationFull: 'Ho Chi Minh City',
    saved: false,
    company: 'Innovatix Labs',
    employees: 150,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $5500',
      },
    ],
    tags: [
      'Ho Chi Minh City',
      'Company Name',
    ],
  },
  {
    id: '3',
    image: '/png/company3.png',
    position: 'Backend Developer',
    description: 'Design and implement efficient server-side solutions.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 6500,
    location: 'NYC',
    locationFull: 'New York',
    saved: false,
    company: 'Skyward Systems',
    employees: 300,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $6500',
      },
    ],
    tags: [
      'New York',
      'Company Name',
    ],
  },
  {
    id: '4',
    image: '/png/company4.png',
    position: 'Data Scientist',
    description: 'Analyze data, develop models, and improve decision-making.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 7000,
    location: 'SF',
    locationFull: 'San Fransisco',
    saved: false,
    company: 'QuantumLeap Technologies',
    employees: 170,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $7000',
      },
    ],
    tags: [
      'San Fransisco',
      'Company Name',
    ],
  },
  {
    id: '5',
    image: '/png/company5.png',
    position: 'DevOps Engineer',
    description: 'Manage infrastructure, automate processes, and ensure reliability.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 6200,
    location: 'LA',
    locationFull: 'Los Angeles',
    saved: false,
    company: 'NeuralSync AI',
    employees: 250,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $6200',
      },
    ],
    tags: [
      'Los Angeles',
      'Company Name',
    ],
  },
  {
    id: '6',
    image: '/png/company6.png',
    position: 'UI/UX Designer',
    description: 'Craft intuitive user experiences and visually engaging designs.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 5000,
    location: 'HCMC',
    locationFull: 'Ho Chi Minh City',
    saved: false,
    company: 'VirtuScape Networks',
    employees: 400,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $5000',
      },
    ],
    tags: [
      'Ho Chi Minh City',
      'Company Name',
    ],
  },
  {
    id: '7',
    image: '/png/company7.png',
    position: 'Product Manager',
    description: 'Oversee product development, define vision, and prioritize features.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 8000,
    location: 'NYC',
    locationFull: 'New York',
    saved: false,
    company: 'HyperCore Software',
    employees: 55,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $8000',
      },
    ],
    tags: [
      'New York',
      'Company Name',
    ],
  },
  {
    id: '8',
    image: '/png/company7.png',
    position: 'Product Manager',
    description: 'Oversee product development, define vision, and prioritize features.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 8000,
    location: 'NYC',
    locationFull: 'New York',
    saved: false,
    company: 'FusionSphere Technologies',
    employees: 90,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $8000',
      },
    ],
    tags: [
      'New York',
      'Company Name',
    ],
  },
  {
    id: '9',
    image: '/png/company3.png',
    position: 'UI/UX Designer',
    description: 'Craft intuitive user experiences and visually engaging designs.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 5000,
    location: 'HCMC',
    locationFull: 'Ho Chi Minh City',
    saved: false,
    company: 'StratoLink Systems',
    employees: 22,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $5000',
      },
    ],
    tags: [
      'Ho Chi Minh City',
      'Company Name',
    ],
  },
  {
    id: '10',
    image: '/png/company6.png',
    position: 'UI/UX Designer',
    description: 'Craft intuitive user experiences and visually engaging designs.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 5000,
    location: 'HCMC',
    locationFull: 'Ho Chi Minh City',
    saved: false,
    company: 'VirtuScape Networks',
    employees: 400,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $5000',
      },
    ],
    tags: [
      'Ho Chi Minh City',
      'Company Name',
    ],
  },
  {
    id: '11',
    image: '/png/company7.png',
    position: 'Product Manager',
    description: 'Oversee product development, define vision, and prioritize features.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 8000,
    location: 'NYC',
    locationFull: 'New York',
    saved: false,
    company: 'HyperCore Software',
    employees: 55,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $8000',
      },
    ],
    tags: [
      'New York',
      'Company Name',
    ],
  },
  {
    id: '12',
    image: '/png/company7.png',
    position: 'Product Manager',
    description: 'Oversee product development, define vision, and prioritize features.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 8000,
    location: 'NYC',
    locationFull: 'New York',
    saved: false,
    company: 'FusionSphere Technologies',
    employees: 90,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $8000',
      },
    ],
    tags: [
      'New York',
      'Company Name',
    ],
  },
  {
    id: '13',
    image: '/png/company3.png',
    position: 'UI/UX Designer',
    description: 'Craft intuitive user experiences and visually engaging designs.',
    dateStart: '27/3',
    dateEnd: '30/4/2023',
    salaryUSD: 5000,
    location: 'HCMC',
    locationFull: 'Ho Chi Minh City',
    saved: false,
    company: 'StratoLink Systems',
    employees: 22,
    conditions: [
      {
        condition: 'Level',
        expected: '3 Years',
      },
      {
        condition: 'Job function',
        expected: '3 Years',
      },
      {
        condition: 'Industry',
        expected: 'Full time',
      },
      {
        condition: 'Salary range',
        expected: 'Up to $5000',
      },
    ],
    tags: [
      'Ho Chi Minh City',
      'Company Name',
    ],
  },
];
