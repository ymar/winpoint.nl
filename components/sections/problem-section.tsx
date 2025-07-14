import { TrendingUp, Target, Users } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4 tracking-tight">Does this sound familiar?</h2>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            These scenarios happen to every sales team. The question is: what are you doing about it?
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border border-gray-200 rounded-lg overflow-hidden bg-white p-6">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium title-font text-gray-800 mb-3 tracking-tight">Lost Revenue</h3>
              <p className="leading-relaxed text-gray-600">
                A promising deal goes dark after the proposal. You follow up twice, hear nothing, and move it to
                &lsquo;Closed-Lost&rsquo;.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border border-gray-200 rounded-lg overflow-hidden bg-white p-6">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium title-font text-gray-800 mb-3 tracking-tight">Market Share</h3>
              <p className="leading-relaxed text-gray-600">
                You lose a deal to a competitor you know has an inferior product, and you can&rsquo;t figure out why.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border border-gray-200 rounded-lg overflow-hidden bg-white p-6">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium title-font text-gray-800 mb-3 tracking-tight">Efficiency</h3>
              <p className="leading-relaxed text-gray-600">
                Your team makes the same costly mistakes on deals, quarter after quarter, because there&rsquo;s no system
                for analyzing losses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
