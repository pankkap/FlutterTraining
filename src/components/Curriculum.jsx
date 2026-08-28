import { useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen, Laptop, CheckCircle2, Rocket, Code2, PlayCircle, Layers } from 'lucide-react'

const curriculumSections = [
  {
    id: 'module-1',
    sectionNumber: 'Section 1',
    badge: 'Module 1',
    title: 'Dart Programming & Flutter Foundations',
    lectures: '4 Lectures',
    duration: '8 Hrs',
    topics: [
      'Introduction to Flutter & Google ecosystem',
      'Flutter vs Native vs React Native',
      'Dart fundamentals: variables, loops, functions, OOP',
      'Dart advanced: classes, constructors, inheritance, collections',
      'Flutter architecture & project structure',
      'SDK installation, Android Studio, Emulators',
      'First Flutter App & hot reload',
    ],
    pedagogy: [
      'DartPad-based coding',
      'Mini console apps using OOP',
      'Hands-on creation of first Flutter application',
    ],
    outcomes: [
      'Apply Dart fundamentals to build mobile logic',
      'Understand Flutter environment & architecture',
    ],
  },
  {
    id: 'module-2',
    sectionNumber: 'Section 2',
    badge: 'Module 2',
    title: 'Flutter Widgets, UI Design & Responsive Layouts',
    lectures: '5 Lectures',
    duration: '10 Hrs',
    topics: [
      'Stateless & Stateful widgets',
      'Widget tree & build method',
      'Core UI widgets: Text, Image, Icon, Container, Row/Column',
      'Layouts: Expanded, Flexible, Stack, Positioned',
      'Responsive Design: MediaQuery, AspectRatio',
      'Intro to Material & Cupertino widgets',
      'Theme management (light/dark mode)',
    ],
    pedagogy: [
      'Profile UI design',
      'Multi-section dashboard UI',
      'Practice with layout-based challenges',
    ],
    outcomes: [
      'Build professional UI screens',
      'Implement responsive mobile layouts',
    ],
  },
  {
    id: 'module-3',
    sectionNumber: 'Section 3',
    badge: 'Module 3',
    title: 'Navigation, Forms & State Management',
    lectures: '4 Lectures',
    duration: '8 Hrs',
    topics: [
      'Navigation: push/pop, named routes, data passing',
      'Forms & input: TextFormField, validation, controllers',
      'Dropdown, Checkbox, Radio widgets',
      'State Management Basics: setState(), Lifting state up, Stateful widget lifecycle',
    ],
    pedagogy: [
      'Registration form with validation',
      'Multi-screen app with routing',
      'UI state-handling exercises',
    ],
    outcomes: [
      'Implement multi-screen navigation',
      'Build forms with validations',
      'Use basic state management efficiently',
    ],
  },
  {
    id: 'module-4',
    sectionNumber: 'Section 4',
    badge: 'Module 4',
    title: 'Lists, Animations & Local Storage',
    lectures: '4 Lectures',
    duration: '8 Hrs',
    topics: [
      'Lists & Scrolling Widgets: ListView, GridView, ListTile',
      'Custom list layouts',
      'Flutter animations: AnimatedContainer, Implicit animations, Hero animation',
      'Local Storage: SharedPreferences, Local JSON storage, SQLite basics (intro)',
    ],
    pedagogy: [
      'Product listing UI',
      'Animated login screen',
      'User settings storage assignment',
    ],
    outcomes: [
      'Create dynamic scrollable UI',
      'Apply animations for UX improvement',
      'Store and retrieve local user data',
    ],
  },
  {
    id: 'module-5',
    sectionNumber: 'Section 5',
    badge: 'Module 5',
    title: 'REST API Integration, JSON Models & Third-Party Packages',
    lectures: '4 Lectures',
    duration: '8 Hrs',
    topics: [
      'REST API concepts',
      'HTTP package: GET & POST',
      'JSON parsing',
      'Model classes & factory constructors',
      'Third-party packages & pub.dev usage',
    ],
    pedagogy: [
      'API fetch app',
      'JSON model mapping',
      'Real-time public API consumption',
    ],
    outcomes: [
      'Integrate APIs & map response models',
      'Use modern third-party Flutter packages',
    ],
  },
  {
    id: 'module-6',
    sectionNumber: 'Section 6',
    badge: 'Module 6',
    title: 'Firebase Authentication, Firestore & Cloud Services',
    lectures: '5 Lectures',
    duration: '10 Hrs',
    topics: [
      'Firebase introduction & project setup',
      'Firebase Authentication: Email / Password login, Signup & logout, Session handling',
      'Firestore Database: CRUD operations, Collections & documents, Real-time updates',
      'Firebase Storage (optional extension)',
    ],
    pedagogy: [
      'Build Authentication App',
      'Notes App using Firestore',
      'Real-time data sync activities',
    ],
    outcomes: [
      'Build cloud-connected mobile applications',
      'Implement secure authentication',
      'Use Firebase Firestore for real-time data',
    ],
  },
  {
    id: 'final-project',
    sectionNumber: 'FINAL PROJECT',
    badge: 'COMPULSORY',
    isCompulsory: true,
    title: 'Compulsory Capstone Project: End-to-End Hybrid App Deployment',
    lectures: 'Capstone Project',
    duration: 'Portfolio Build',
    topics: [
      'End-to-End Real-World Cross-Platform Mobile Application Development',
      'Architecting App Flow, State Management, Local Storage & Firebase Backend Integration',
      'Source Code Review, APK/IPA Build Generation & Release Optimization',
    ],
    pedagogy: [
      'Independent capstone project implementation under mentor guidance',
      'Code audit & 1-on-1 feedback session',
      'Production build generation & store deployment readiness testing',
    ],
    outcomes: [
      'Deploy a production-ready Flutter app to Android & iOS platforms',
      'Demonstrate end-to-end full-stack mobile development mastery for portfolio & interviews',
    ],
  },
]

function Curriculum() {
  // Array of expanded section indices
  const [expandedIndices, setExpandedIndices] = useState([0])

  const toggleSection = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const handleExpandAll = () => {
    if (expandedIndices.length === curriculumSections.length) {
      setExpandedIndices([])
    } else {
      setExpandedIndices(curriculumSections.map((_, i) => i))
    }
  }

  const allExpanded = expandedIndices.length === curriculumSections.length

  return (
    <section id="curriculum" className="py-16 bg-gray-50/70">
      <div className="page-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 uppercase tracking-widest">
              Course Syllabus & Curriculum
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Course Curriculum
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              6 Structured Training Modules &bull; 26+ Hands-on Lectures &bull; Compulsory Industry Capstone Project
            </p>
          </div>

          <button
            type="button"
            onClick={handleExpandAll}
            className="self-start md:self-auto rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-50 shadow-sm"
          >
            {allExpanded ? 'Collapse All Sections' : 'Expand All Sections'}
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white card-shadow">
          {curriculumSections.map((sec, index) => {
            const isOpen = expandedIndices.includes(index)
            return (
              <div key={sec.id} className="border-b border-gray-200 last:border-0">
                <button
                  type="button"
                  onClick={() => toggleSection(index)}
                  className={`flex w-full items-center justify-between px-6 py-4 text-left transition ${
                    isOpen ? 'bg-indigo-50/50' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`shrink-0 rounded px-2.5 py-1 text-xs font-extrabold uppercase ${
                        sec.isCompulsory
                          ? 'bg-rose-600 text-white'
                          : 'bg-indigo-600 text-white'
                      }`}
                    >
                      {sec.badge}
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900">
                        {sec.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-500 sm:hidden">
                        {sec.lectures} &bull; {sec.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden text-xs font-semibold text-gray-500 sm:inline-block">
                      {sec.lectures} &bull; {sec.duration}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={18} className="shrink-0 text-indigo-600" />
                    ) : (
                      <ChevronDown size={18} className="shrink-0 text-gray-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="space-y-5 bg-white px-6 py-5 border-t border-indigo-100/70">
                    {/* Topics Covered */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-indigo-900">
                        <BookOpen size={14} className="text-indigo-600" />
                        Topics & Concepts
                      </h4>
                      <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {sec.topics.map((topic) => (
                          <div key={topic} className="flex items-start gap-2 text-sm text-gray-700">
                            <PlayCircle size={14} className="mt-0.5 shrink-0 text-indigo-500" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pedagogical Approach */}
                    <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4">
                      <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-900">
                        <Laptop size={14} className="text-blue-600" />
                        Pedagogical Approach & Hands-on Activities
                      </h4>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {sec.pedagogy.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-900 shadow-sm"
                          >
                            <Code2 size={13} className="text-blue-600" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
                      <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        Learning Outcomes & Skills Acquired
                      </h4>
                      <ul className="mt-2.5 space-y-1">
                        {sec.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm font-medium text-emerald-900">
                            <Rocket size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Curriculum
