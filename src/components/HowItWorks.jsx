import { useRef } from 'react'
import { PenTool, ShoppingBag, Truck } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    name: 'Design',
    description: 'Create your custom product using our easy-to-use design tools.',
    icon: PenTool,
  },
  {
    name: 'Sell',
    description: 'List your products on your store or marketplace of choice.',
    icon: ShoppingBag,
  },
  {
    name: 'Ship',
    description: 'We handle printing and shipping directly to your customers.',
    icon: Truck,
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="py-12 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Three simple steps to start selling
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get started with custom product sales in no time with our easy-to-follow process.
          </p>
        </motion.div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.name} 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}