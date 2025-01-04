import { GraduationCap, Code2, BookOpen, Calculator } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="divider max-w-xs mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* University Logo Card */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              {/* Placeholder for university logo - replace src with actual logo */}
              <img
                src="https://i.ibb.co.com/3NYF3XK/Logo-of-Comilla-University.png"
                alt="Comilla University Logo"
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold">Comilla University</h3>
              <p className="text-base-content/80">Established 2006</p>
              <div className="badge bg-default text-white mt-2">
                Current Institution
              </div>
            </div>
          </div>

          {/* Education Details Card */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Current Academic Pursuit
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Major in Mathematics</h4>
                    <p className="text-base-content/80">
                      Pursuing BSc (Honours) with a focus on pure and applied
                      mathematics. The program covers advanced mathematical
                      concepts, theoretical frameworks, and their practical
                      applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Minor Studies</h4>
                    <p className="text-base-content/80">
                      Complementing my mathematics major with minors in:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-base-content/80">
                      <li>
                        Physics: Understanding physical phenomena through
                        mathematical models
                      </li>
                      <li>
                        Statistics: Data analysis and statistical modeling
                      </li>
                      <li>
                        Computer Science: Computational methods and programming
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Programming Background</h4>
                    <p className="text-base-content/80">
                      Through my academic coursework, I've gained proficiency in
                      scientific programming languages:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-base-content/80">
                      <li>
                        C: Fundamental programming concepts and algorithms
                      </li>
                      <li>
                        Fortran: Scientific computing and numerical analysis
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-base-300 rounded-lg">
                <p className="text-sm text-base-content/80">
                  Currently advancing through my degree program, combining
                  theoretical mathematical knowledge with practical programming
                  skills to solve complex problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
