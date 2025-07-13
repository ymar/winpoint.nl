import { TrendingUp, Target, Users } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2>Does this sound familiar?</h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            These scenarios happen to every sales team. The question is: what are you doing about it?
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3>Lost Revenue</h3>
                <p className="leading-relaxed text-base">
                  A promising deal goes dark after the proposal. You follow up twice, hear nothing, and move it to
                  &lsquo;Closed-Lost&rsquo;.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3>Market Share</h3>
                <p className="leading-relaxed text-base">
                  You lose a deal to a competitor you know has an inferior product, and you can&rsquo;t figure out why.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3>Efficiency</h3>
                <p className="leading-relaxed text-base">
                  Your team makes the same costly mistakes on deals, quarter after quarter, because there&rsquo;s no system
                  for analyzing losses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
