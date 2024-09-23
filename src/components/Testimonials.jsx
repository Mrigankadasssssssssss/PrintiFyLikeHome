import  { useRef } from 'react'

import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    content: "This platform has revolutionized my online business. It's so easy to create and sell custom products!",
    author: 'Sarah Johnson',
    role: 'Entrepreneur',
  },
  {
    content: "I've tried other print-on-demand services, but this one stands out for its quality and customer service.",
    author: 'Michael Chen',
    role: 'E-commerce Store Owner',
  },
  {
    content: 'The design tools are intuitive, and the product range is impressive. Highly recommended!',
    author: 'Emily Rodriguez',
    role: 'Graphic Designer',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <motion.div 
            className="flex space-x-4 overflow-x-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="text-center text-2xl leading-9 font-medium text-gray-900">
                  <p>&ldquo;{testimonial.content}&rdquo;</p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <img
                        className="mx-auto h-10 w-10 rounded-full"
                        src="/placeholder.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                      <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>
                      <div className="text-base font-medium text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </footer>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}