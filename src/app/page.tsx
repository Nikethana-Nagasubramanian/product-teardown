import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-12">
      <div className="bg-white border border-[#EAECF0] rounded-[24px] shadow-sm max-w-2xl w-full p-10 md:p-16">

        {/* Header Section */}
        <header className="mb-12">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6 shadow-md">
            PT
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#101828] mb-4">
            Product Teardowns
          </h1>
        </header>

        {/* Content Sections */}
        <div className="space-y-10">

          <section>
            <h2 className="text-[12px] font-bold text-[#101828] uppercase tracking-widest mb-4">
              Who am I
            </h2>
            <p className="text-[#475467] text-[16px] leading-relaxed">
              I&apos;m a designer & developer who picks apart real AI products, rebuilds their interfaces,
              and shows my work — from rationale to prototype.
            </p>
          </section>

          <section>
            <h2 className="text-[12px] font-bold text-[#101828] uppercase tracking-widest mb-4">
              What I do
            </h2>
            <p className="text-[#475467] text-[16px] leading-relaxed">
              I take products with real UX problems — confusing dashboards, buried insights,
              clunky flows — and redesign them from scratch. Every teardown includes an
              interactive prototype, a design rationale, and honest critique.
            </p>
          </section>

          <section>
            <h2 className="text-[12px] font-bold text-[#101828] uppercase tracking-widest mb-4">
              Why it matters
            </h2>
            <p className="text-[#475467] text-[16px] leading-relaxed">
              Good design at a startup isn&apos;t about aesthetics — it&apos;s about making the product make sense.
              I think in systems, build in code, and care about the gap between how something
              works and how it feels to use.
            </p>
          </section>

        </div>

        {/* Footer Link */}
        <div className="mt-16 pt-8 border-t border-[#EAECF0] flex items-center justify-between">
          <a
            href="https://itsmenike.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#101828] font-semibold text-[15px] hover:underline underline-offset-4 flex items-center gap-2 group"
          >
            More of my work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <Link
            href="/cursor-redesign"
            className="bg-[#101828] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-[#333] transition-all shadow-sm"
          >
            View Latest Teardown
          </Link>
        </div>

      </div>
    </div>
  )
}
