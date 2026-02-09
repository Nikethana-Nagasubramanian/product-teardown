import Accordion from '@/components/accordion/Accordion'
import AccordionItem from '@/components/accordion/AccordionItem'

export default function AccordionPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Accordion Components</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Accordion</h2>
          <Accordion>
            <AccordionItem title="What is React?">
              <p className="text-gray-700">
                React is a JavaScript library for building user interfaces, particularly web applications.
                It allows developers to create reusable UI components.
              </p>
            </AccordionItem>
            <AccordionItem title="What is TypeScript?">
              <p className="text-gray-700">
                TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
                It adds static type definitions to JavaScript.
              </p>
            </AccordionItem>
            <AccordionItem title="What is Tailwind CSS?">
              <p className="text-gray-700">
                Tailwind CSS is a utility-first CSS framework that provides low-level utility classes
                to build custom designs without leaving your HTML.
              </p>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Multiple Open Items</h2>
          <Accordion allowMultiple>
            <AccordionItem title="First Item">
              <p className="text-gray-700">This is the first accordion item content.</p>
            </AccordionItem>
            <AccordionItem title="Second Item">
              <p className="text-gray-700">This is the second accordion item content.</p>
            </AccordionItem>
            <AccordionItem title="Third Item">
              <p className="text-gray-700">This is the third accordion item content.</p>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  )
}

