import React from 'react'

interface ComparisonCardProps {
  title: string
  price: string
  features: string[]
  isPopular?: boolean
}

export function ComparisonCard({ title, price, features, isPopular }: ComparisonCardProps) {
  return (
    <div className={`
      bg-white p-6 rounded-lg shadow-md relative
      ${isPopular ? 'border-2 border-blue-500' : ''}
    `}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
          人気
        </div>
      )}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-3xl font-bold mb-6">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
} 