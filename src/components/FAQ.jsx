import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'When does the Flutter Hybrid Mobile App Development course start?',
    a: 'The batch starts on 1st September 2026. All enrolled students will receive complete timetable and batch joining details via email/WhatsApp.',
  },
  {
    q: 'What is the course fee and what payment options are available?',
    a: 'The reduced admission price is Rs 7,500/- (Actual Standard Price is Rs 35,000/-). You can enroll securely using credit/debit cards, UPI, net banking, or Razorpay payment options.',
  },
  {
    q: 'What modules are covered in this complete training program?',
    a: 'The program includes 6 structured modules covering Dart Programming, Flutter Core Widgets & Responsive Layouts, Navigation & State Management, Lists & Local Storage (SQLite/SharedPref), REST API Integration & Models, and Firebase Auth & Firestore, culminating in a compulsory final capstone project.',
  },
  {
    q: 'Is the Final Project compulsory for certificate issuance?',
    a: 'Yes, completing the Final Capstone Project is compulsory. It ensures you have hands-on practical experience and a verified portfolio project to show prospective employers.',
  },
  {
    q: 'Will I receive a certificate upon completion?',
    a: 'Yes! Upon successful completion of the training modules and compulsory capstone project, you will receive an official Certificate of Completion from Beta-Labs.',
  },
]

function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section id="faq" className="py-16">
      <div className="page-shell max-w-3xl">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-gray-200 card card-shadow">
          {faqs.map((item, idx) => {
            const isOpen = active === idx
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-gray-50"
                >
                  <span className="pr-4 text-sm font-semibold text-gray-900">{item.q}</span>
                  {isOpen
                    ? <ChevronUp size={17} className="shrink-0 text-indigo-500" />
                    : <ChevronDown size={17} className="shrink-0 text-gray-400" />
                  }
                </button>
                {isOpen && (
                  <p className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-gray-600">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
