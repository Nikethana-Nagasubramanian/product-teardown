import ContactForm from '@/components/contact-form/ContactForm'

export default function ContactFormPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Form</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ContactForm />
      </div>
    </div>
  )
}

