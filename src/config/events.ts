export interface Event {
  name: string;
  organization: string;
  date: string; // ex: 'nov 2017'
  hoursCompleted: number;
  certificateUrl: string;
  description?: string;
}

const eventsPT: Event[] = [
  {
    name: 'GDG Manaus DevFest \'17',
    organization: 'GDG Manaus',
    date: 'nov 2017',
    hoursCompleted: 9,
    certificateUrl: '/documents/certificates/gdg-manaus-devfest-2017.pdf',
    description: 'Certificado de participação e troca de conhecimentos no GDG Manaus DevFest\'17',
  },
  {
    name: 'GDG DevFest Norte 2016',
    organization: 'GDG Manaus',
    date: 'out 2016',
    hoursCompleted: 8,
    certificateUrl: '/documents/certificates/gdg-devfest-norte-2016.pdf',
    description: 'Certificado de participação e troca de conhecimentos no GDG DevFest Norte 2016',
  },
  {
    name: 'Introdução aos Óculos VR',
    organization: 'UEA & Samsung Ocean',
    date: 'nov 2015',
    hoursCompleted: 4,
    certificateUrl: '/documents/certificates/uea-samsung-ocean-vr-2015.pdf',
    description: 'Certificado de participação em curso de desenvolvimento com realidade virtual (VR)',
  },
];

const eventsEN: Event[] = [
  {
    name: 'GDG Manaus DevFest \'17',
    organization: 'GDG Manaus',
    date: 'Nov 2017',
    hoursCompleted: 9,
    certificateUrl: '/documents/certificates/gdg-manaus-devfest-2017.pdf',
    description: 'Certificate of participation and knowledge exchange at GDG Manaus DevFest\'17',
  },
  {
    name: 'GDG DevFest Norte 2016',
    organization: 'GDG Manaus',
    date: 'Oct 2016',
    hoursCompleted: 8,
    certificateUrl: '/documents/certificates/gdg-devfest-norte-2016.pdf',
    description: 'Certificate of participation and knowledge exchange at GDG DevFest Norte 2016',
  },
  {
    name: 'Introduction to VR Glasses',
    organization: 'UEA & Samsung Ocean',
    date: 'Nov 2015',
    hoursCompleted: 4,
    certificateUrl: '/documents/certificates/uea-samsung-ocean-vr-2015.pdf',
    description: 'Certificate of participation in virtual reality (VR) development course',
  },
];

export function getEvents(lang: 'pt' | 'en'): Event[] {
  return lang === 'pt' ? eventsPT : eventsEN;
}
