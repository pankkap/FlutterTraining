import { Video, FileText, Download, Smartphone, Trophy, Layers } from 'lucide-react'

const includes = [
  { icon: Layers, text: '6 In-Depth Modules (Dart OOP to Cloud & Firebase)' },
  { icon: Video, text: 'Live Interactive Sessions & Hands-on Coding' },
  { icon: FileText, text: 'Compulsory Capstone Project with Code Audit' },
  { icon: Download, text: 'Downloadable App Source Code & Starter Kits' },
  { icon: Smartphone, text: 'Build Native Apps for Android & iOS' },
  { icon: Trophy, text: 'Beta-Labs Official Training Certificate of Completion' },
]

function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50 py-16">
      <div className="page-shell">
        <h2 className="section-heading">What You Get With Your Rs 7,500 Enrollment</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item) => (
            <div key={item.text} className="flex items-center gap-3 card card-shadow px-5 py-4">
              <item.icon className="h-5 w-5 shrink-0 text-indigo-500" />
              <p className="text-sm font-medium text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
