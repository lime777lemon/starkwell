import React from 'react'
import Image from 'next/image'

interface ServiceCardProps {
  key: string;
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 mb-4 text-blue-600">
        <img src={icon} alt={title} className="w-full h-full" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
} 