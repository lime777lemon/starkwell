import { ServiceTranslation } from '../data';

export type Language = 'en' | 'ja';

export interface ServiceTranslations {
  title: string;
  providers: ServiceTranslation;
  payers: ServiceTranslation;
  employers: ServiceTranslation;
  lifeSciences: ServiceTranslation;
}

export interface Translations {
  services: ServiceTranslations;
  contact: {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    cta: string;
  };
  features: {
    searchCare: {
      title: string;
      point1: string;
      point2: string;
      point3: string;
    };
    compare: {
      title: string;
      point1: string;
      point2: string;
      point3: string;
    };
    estimate: {
      title: string;
      point1: string;
      point2: string;
      point3: string;
    };
  };
  readyToStart: {
    title: string;
    button: string;
  };
  comingSoon: {
    title: string;
    description: string;
  };
  header: {
    contact: string;
    search: string;
    resources: string;
    platform: string;
    login: string;
    signup: string;
  };
}

export { translations } from './data'; 