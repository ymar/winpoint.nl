import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-16 text-center tracking-tight">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="leading-relaxed mb-8 text-gray-600 text-lg">
                Winpoint helped us recover $2.3M in deals we had written off. Their systematic approach revealed patterns we
                never saw coming.
              </p>
              <a className="inline-flex items-center">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  SC
                </div>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-800">Sarah Chen</span>
                  <span className="text-gray-500 text-sm">VP Sales, TechFlow</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="leading-relaxed mb-8 text-gray-600 text-lg">
                The recovery blueprint was incredibly detailed. We went from 15% recovery rate to 47% in just two quarters.
                Game-changing.
              </p>
              <a className="inline-flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  MR
                </div>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-800">Marcus Rodriguez</span>
                  <span className="text-gray-500 text-sm">Sales Director, CloudScale</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="leading-relaxed mb-8 text-gray-600 text-lg">
                Finally, a data-driven approach to deal recovery. No more guessing why deals fail or sending random follow-ups
                into the void.
              </p>
              <a className="inline-flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JW
                </div>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-800">Jennifer Walsh</span>
                  <span className="text-gray-500 text-sm">CRO, DataVault</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
