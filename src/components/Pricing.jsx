import { CheckCircle2 } from 'lucide-react'
import CTAButton from './CTAButton'

const perks = [
  '6 Comprehensive Modules (Dart, Layouts, State, Storage, APIs & Firebase)',
  'Build real cross-platform mobile apps for Android & iOS',
  'REST API integration & Firebase Cloud Database',
  'FINAL COMPULSORY CAPSTONE PROJECT with 1-on-1 Code Review',
  'Downloadable Source Code Kits & Starter Boilerplates',
  'Official Beta-Labs Industrial Training Certificate of Completion',
]

function Pricing({ onReserve }) {
  return (
    <section id="pricing" className="bg-gray-50 py-16">
      <div className="page-shell">
        <div className="mx-auto max-w-xl overflow-hidden card card-shadow">
          {/* header */}
          <div className="bg-indigo-600 px-7 py-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200">Complete Training & Admission Portal</p>
            <h2 className="mt-1 text-2xl font-extrabold text-white">Flutter Hybrid Mobile App Development</h2>
            <p className="mt-1 text-xs font-medium text-cyan-200">Course Starts from 1st September 2026</p>
          </div>

          <div className="space-y-5 p-7">
            {/* price */}
            <div className="flex items-end gap-3">
              <p className="text-4xl font-extrabold text-gray-900">Rs 7,500/-</p>
              <p className="mb-1 text-lg font-medium text-gray-400 line-through">Rs 35,000/-</p>
              <span className="mb-1 rounded bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">
                Discounted Fee — Limited Seats
              </span>
            </div>

            {/* checklist */}
            <div className="space-y-2.5">
              {perks.map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500 mt-0.5" />
                  <p className="text-sm text-gray-700">{p}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-amber-400/30 bg-amber-50 px-4 py-3">
              <p className="text-center text-sm leading-relaxed text-amber-800">
                <span className="font-bold">Enroll now at Rs 7,500/-</span> to lock your seat for the batch starting <span className="font-bold">1st September 2026</span>.
                <span className="block mt-1 text-xs font-semibold text-amber-900">(Actual Standard Fee: Rs 35,000/-)</span>
              </p>
            </div>

            <CTAButton label="Enroll Now — Rs 7,500" onClick={onReserve} className="w-full py-4 text-base" />
            <p className="text-center text-xs text-gray-500">
              Limited Admission Batch • Complete Training & Certification
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
