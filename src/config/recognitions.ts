export interface Recognition {
  type: 'inpi' | 'patent' | 'award';
  title: string;
  subtitle: string;
  processNumber: string;
  issuer: string;
  issuerUrl?: string;
  holder: string;
  createdAt: string;
  issuedAt: string;
  validity: string;
  languages: string[];
  role: string;
  authorsCount: number;
  description: string;
  certificateUrl: string;
  searchUrl?: string;
}

const recognitionsPT: Recognition[] = [
  {
    type: 'inpi',
    title: 'SIGEAM 2.0',
    subtitle: 'Registro de Programa de Computador no INPI',
    processNumber: 'BR512025004389-9',
    issuer: 'INPI — Instituto Nacional da Propriedade Industrial',
    issuerUrl: 'https://www.gov.br/inpi/pt-br',
    holder: 'PROCESSAMENTO DE DADOS AMAZONAS S.A (Prodam)',
    createdAt: '01/09/2025',
    issuedAt: '30/09/2025',
    validity: '50 anos (Lei 9.609/1998)',
    languages: ['JavaScript', 'PHP'],
    role: 'Coautor',
    authorsCount: 22,
    description:
      'Sistema desenvolvido pela equipe da Prodam-AM e registrado oficialmente como propriedade intelectual junto ao Instituto Nacional da Propriedade Industrial. Reconhecimento legal de autoria de software com vigência de 50 anos.',
    certificateUrl: '/documents/certificates/inpi-sigeam-2.0.pdf',
    searchUrl: 'https://busca.inpi.gov.br/pePI/jsp/programa/PesquisaProgramaComputador.jsp',
  },
];

const recognitionsEN: Recognition[] = [
  {
    type: 'inpi',
    title: 'SIGEAM 2.0',
    subtitle: 'Software Registration at INPI (Brazilian Patent Office)',
    processNumber: 'BR512025004389-9',
    issuer: 'INPI — National Institute of Industrial Property (Brazil)',
    issuerUrl: 'https://www.gov.br/inpi/pt-br',
    holder: 'PROCESSAMENTO DE DADOS AMAZONAS S.A (Prodam)',
    createdAt: '09/01/2025',
    issuedAt: '09/30/2025',
    validity: '50 years (Brazilian Law 9.609/1998)',
    languages: ['JavaScript', 'PHP'],
    role: 'Co-author',
    authorsCount: 22,
    description:
      'System developed by the Prodam-AM team and officially registered as intellectual property with the Brazilian National Institute of Industrial Property. Legal recognition of software authorship valid for 50 years.',
    certificateUrl: '/documents/certificates/inpi-sigeam-2.0.pdf',
    searchUrl: 'https://busca.inpi.gov.br/pePI/jsp/programa/PesquisaProgramaComputador.jsp',
  },
];

export function getRecognitions(lang: 'pt' | 'en'): Recognition[] {
  return lang === 'pt' ? recognitionsPT : recognitionsEN;
}
