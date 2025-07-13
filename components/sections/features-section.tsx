export function FeaturesSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2>Our Recovery Analysis Method</h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A systematic, data-driven approach to identifying and recovering your most valuable lost opportunities.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="flex-grow">
                <h3>Pattern Recognition</h3>
                <p className="leading-relaxed text-base">
                  We examine your last 50 losses and group them by failure type. Pricing objections cluster differently than timing issues. Budget freezes look different from stakeholder changes.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="flex-grow">
                <h3>Recovery Probability Scoring</h3>
                <p className="leading-relaxed text-base">
                  Not all deals are worth pursuing. We rank each opportunity using 12 factors including time since last contact, stakeholder engagement level, and competitive landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="flex-grow">
                <h3>Failure Point Mapping</h3>
                <p className="leading-relaxed text-base">
                  For each recoverable deal, we identify the exact moment it died. Was it after the demo? During contract review? The recovery strategy depends on where it broke.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="flex-grow">
                <h3>Systematic Re-engagement</h3>
                <p className="leading-relaxed text-base">
                  We create specific messaging for each failure pattern. Budget timing gets different treatment than stakeholder buy-in issues. Feature gaps need different approaches than pricing concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
