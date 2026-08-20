import { Star, Users, Clock, Award, ChevronRight, CalendarDays } from 'lucide-react'
import CTAButton from './CTAButton'

function StarRow({ rating }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={i <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-500'}
        />
      ))}
    </span>
  )
}

function Hero({ onReserve }) {
  return (
    <section id="top" className="relative overflow-hidden bg-gray-900 text-white">
      {/* AI + tech wallpaper layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_82%_24%,rgba(168,85,247,0.16),transparent_34%),radial-gradient(circle_at_50%_88%,rgba(16,185,129,0.14),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full border border-indigo-400/30" />
        <div className="absolute right-[-5rem] top-10 h-72 w-72 rounded-full border border-cyan-300/25" />
        <div className="absolute bottom-12 left-1/3 h-48 w-48 rounded-full border border-emerald-300/20" />
      </div>

      <div className="relative page-shell py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">

          {/* LEFT: course information */}
          <div className="flex flex-1 flex-col gap-5 lg:max-w-2xl lg:justify-center">
            {/* breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="rounded bg-indigo-500/20 px-2 py-0.5 font-bold uppercase text-indigo-300">Complete Training Portal</span>
              <ChevronRight size={11} />
              <span>Starts 1st September 2026</span>
              <ChevronRight size={11} />
              <span className="text-cyan-300">Flutter & Dart Hybrid Mobile App Dev</span>
            </nav>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Flutter Hybrid Mobile App Development
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              Master cross-platform mobile application development from Dart fundamentals to advanced state management, REST APIs, and Firebase Cloud Backend. Build real-world Android & iOS apps with live capstone projects!
            </p>

            {/* target group badge */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded bg-emerald-500/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-emerald-400 border border-emerald-500/30">
                Course Starts: 1st September 2026
              </span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-amber-400">4.9</span>
                <StarRow rating={4.9} />
                <span className="text-gray-400">(1500+ Students Trained)</span>
              </div>
            </div>

            {/* meta */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-gray-300">
              <span>
                Instructor:{' '}
                <a href="#instructor" className="font-semibold text-indigo-400 underline underline-offset-2">
                  Pankaj Kapoor (Beta-Labs)
                </a>
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} /> 6 Modules + Compulsory Final Project
              </span>
              <span className="flex items-center gap-1">
                <Award size={13} /> Official Industrial Training Certificate
              </span>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-2">
              {['Dart OOP & Advanced', 'Responsive UI & Layouts', 'Forms & State Management', 'REST API Integration', 'Firebase Auth & Firestore', 'Compulsory Final Project'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-indigo-500/40 bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* reservation note */}
            <div className="w-full rounded-xl border border-red-400/70 bg-gradient-to-r from-red-600 to-rose-600 px-5 py-3.5 text-left shadow-[0_0_28px_rgba(239,68,68,0.45)] lg:max-w-xl">
              <p className="text-sm leading-relaxed text-white sm:text-[15px]">
                <span className="font-bold text-white">🔥 Special Discounted Admission Offer: Enroll for Rs 7,500/- Only!</span>{' '}
                <span className="block mt-0.5 text-xs text-rose-100">Course Starts from 1st September 2026. (Actual Price: <span className="line-through text-amber-200">Rs 35,000/-</span>)</span>
              </p>
            </div>

            {/* mobile CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2 lg:hidden">
              <div>
                <p className="text-3xl font-extrabold text-white">Rs 7,500/-</p>
                <p className="text-sm text-gray-400 line-through">Rs 35,000/-</p>
              </div>
              <CTAButton label="Enroll Now — Rs 7,500" onClick={onReserve} className="px-8 py-3.5 text-base" />
            </div>
          </div>

          {/* RIGHT: pricing card — desktop only */}
          <div className="hidden w-full max-w-sm shrink-0 lg:block">
            <div className="overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 card-shadow">
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-3xl font-extrabold text-white">Rs 7,500/-</p>
                    <p className="mt-0.5 text-sm text-gray-400 line-through">Rs 35,000/-</p>
                    <span className="mt-1.5 inline-block rounded bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-400">
                      Limited Seats — Discounted Price
                    </span>
                  </div>

                  <div className="shrink-0 rounded-xl border border-indigo-300/45 bg-gradient-to-br from-indigo-500/18 via-slate-900/55 to-cyan-400/18 px-3.5 py-2.5 backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.28),inset_0_0_0_1px_rgba(191,219,254,0.12)]">
                    <p className="flex items-center justify-end gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-100">
                      <CalendarDays className="h-3.5 w-3.5 text-cyan-200" />
                      Batch Starts
                    </p>
                    <p className="mt-1 text-sm font-extrabold leading-none text-white">1st Sept 2026</p>
                  </div>
                </div>

                {/* reservation note */}
                <div className="rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2.5">
                  <p className="text-xs leading-relaxed text-amber-300">
                    <span className="font-bold">Pay Rs 7,500/- now</span> to secure your seat for the batch starting 1st September 2026.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onReserve}
                  className="w-full rounded-lg bg-indigo-600 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-700 shadow-lg shadow-indigo-600/30"
                >
                  Enroll Now — Rs 7,500/-
                </button>
                <p className="text-center text-xs text-gray-400">Complete Training + Capstone Project + Certification</p>

                <div className="space-y-2 border-t border-gray-700 pt-4">
                  {[
                    '6 Comprehensive Training Modules',
                    'Dart OOP, Custom Widgets & Responsive Design',
                    'State Management & Local Storage (SQLite/SharedPref)',
                    'REST API Integration & Modern JSON Models',
                    'Firebase Authentication, Firestore & Cloud',
                    'FINAL COMPULSORY CAPSTONE PROJECT',
                    'Official Beta-Labs Training Certificate',
                  ].map((item) => (
                    <p key={item} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="font-bold text-indigo-400">✓</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
