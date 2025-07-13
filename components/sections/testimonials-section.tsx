import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="leading-relaxed mb-6">
                Winpoint helped us recover $2.3M in deals we had written off. Their systematic approach revealed patterns we
                never saw coming.
              </p>
              <a className="inline-flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  SC
                </div>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Sarah Chen</span>
                  <span className="text-gray-500 text-sm">VP Sales, TechFlow</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="leading-relaxed mb-6">
                The recovery blueprint was incredibly detailed. We went from 15% recovery rate to 47% in just two quarters.
                Game-changing.
              </p>
              <a className="inline-flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  MR
                </div>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Marcus Rodriguez</span>
                  <span className="text-gray-500 text-sm">Sales Director, CloudScale</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="leading-relaxed mb-6">
                Finally, a data-driven approach to deal recovery. No more guessing why deals fail or sending random follow-ups
                into the void.
              </p>
              <a className="inline-flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JW
                </div>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Jennifer Walsh</span>
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
