import Counter from '@/components/counter/Counter'

export default function CounterPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Counter Components</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Counter</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Counter />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Counter with Custom Initial Value</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Counter initialValue={10} />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Counter with Step</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Counter initialValue={0} step={5} />
          </div>
        </section>
      </div>
    </div>
  )
}

