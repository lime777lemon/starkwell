import * as React from "react";
import { GetStaticProps } from 'next';
import { builder } from '@builder.io/react';
import Header from '../components/Header';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data';
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import Image from 'next/image';

interface HomePageProps {
  builderContent: unknown;
}

// Builder.ioの初期化
if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  const renderServices = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {services.map((service) => {
        const serviceTranslation = t.services[service.key];
        return (
          <div key={service.key} className="flex flex-col bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-sky-100">
              <Image
                src={service.icon}
                alt={serviceTranslation.title}
                width={32}
                height={32}
                className="text-sky-600"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {serviceTranslation.title}
            </h3>
            <p className="text-gray-600">
              {serviceTranslation.description}
            </p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col shadow-sm min-w-[390px]">
      <Header navigationItems={[]} />

      <main role="main">
        {/* Hero Section */}
        <section 
          className="relative flex flex-col items-center justify-center px-8 py-32 text-white bg-cover bg-center" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/Container1.jpg")',
            minHeight: '80vh'
          }}
          aria-label="Hero"
        >
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <h2 className="text-4xl font-semibold mb-6">
              {t.hero.subtitle}
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              {t.hero.description1}
            </p>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t.hero.description2}
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              {t.hero.description3}
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                {t.hero.cta}
              </button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50" aria-label="Services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {t.services.title}
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                医療費用の透明性を実現する、各ステークホルダー向けのソリューション
              </p>
            </div>
            {renderServices()}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50" aria-label="Features">
          <div className="container mx-auto px-8">
            <div className="flex flex-col space-y-16">
              {/* Search Care */}
              <div className="flex flex-row items-start max-w-4xl mx-auto w-full">
                <Image 
                  src="/images/doctor.jpg"
                  alt="Doctor using smartphone" 
                  width={400}
                  height={256}
                  className="w-1/2 h-64 object-cover rounded-lg mr-6"
                />
                <div className="w-1/2">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    {t.features.searchCare.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.searchCare.point1}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.searchCare.point2}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.searchCare.point3}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Compare Important Points */}
              <div className="flex flex-row items-start max-w-4xl mx-auto w-full">
                <div className="w-1/2">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    {t.features.compare.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.compare.point1}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.compare.point2}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.compare.point3}
                    </li>
                  </ul>
                </div>
                <Image 
                  src="/images/doctoers.jpg"
                  alt="Medical team in surgical attire" 
                  width={400}
                  height={256}
                  className="w-1/2 h-64 object-cover rounded-lg ml-6"
                />
              </div>

              {/* Calculate Costs */}
              <div className="flex flex-row items-start max-w-4xl mx-auto w-full">
                <Image 
                  src="/images/money.jpg"
                  alt="Money and cost calculation" 
                  width={400}
                  height={256}
                  className="w-1/2 h-64 object-cover rounded-lg mr-6"
                />
                <div className="w-1/2">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    {t.features.estimate.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.estimate.point1}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.estimate.point2}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.features.estimate.point3}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-20 bg-gray-50" aria-label="Contact">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">
              {t.readyToStart.title}
            </h2>
            <Link href="/contact">
              <button className="bg-sky-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-sky-700 transition-colors">
                {t.readyToStart.button}
              </button>
            </Link>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-white" aria-label="Coming Soon">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.comingSoon.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.comingSoon.description}
              </p>
            </div>
          </div>
        </section>

        
      </main>

      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-8">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const builderContent = await builder
      .get('page', {
        userAttributes: {
          urlPath: '/'
        }
      })
      .promise();

    return {
      props: {
        builderContent: builderContent || null,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Builder.io content fetch error:', error);
    return {
      props: {
        builderContent: null,
      },
      revalidate: 60,
    };
  }
}
