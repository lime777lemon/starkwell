import React, { useState } from 'react'
import Header from '../components/Header'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { supabase } from '../lib/supabase'

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      first_name: formData.get('firstName') as string,
      last_name: formData.get('lastName') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([data]);

      if (error) throw error;

      setSubmitStatus('success');
      e.currentTarget.reset(); // フォームをリセット
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header navigationItems={[]} />
      
      <main className="flex-grow bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {t.contact.title}
            </h1>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                {t.contact.successMessage}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                {t.contact.errorMessage}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.firstName}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.lastName}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-colors
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                >
                  {isSubmitting ? t.contact.sending : t.contact.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Starkwell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 