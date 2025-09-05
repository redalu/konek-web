import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Konek</span>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105">
              Join Beta
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-12 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connect through 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500"> activities</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join sports, events, and social gatherings with like-minded people in your area. 
              Build connections that matter through shared experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Early Access
              </button>
              <button className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>

          {/* Download Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available on Beta</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg border border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900">iOS TestFlight</p>
                        <p className="text-sm text-gray-600">Beta testing for iPhone</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 p-6 rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg border border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.523 15.34c-.5 0-.96-.29-1.17-.75l-1.12-2.38c-.18-.39-.32-.51-.58-.51s-.4.12-.58.51l-1.12 2.38c-.21.46-.67.75-1.17.75-.91 0-1.52-.84-1.26-1.68l2.62-8.52c.35-1.15 1.41-1.95 2.6-1.95s2.25.8 2.6 1.95l2.62 8.52c.26.84-.35 1.68-1.26 1.68zm-10.9.01c-.67 0-1.22-.55-1.22-1.22V9.88c0-.67.55-1.22 1.22-1.22s1.22.55 1.22 1.22v4.21c0 .67-.55 1.22-1.22 1.22z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900">Android APK</p>
                        <p className="text-sm text-gray-600">Direct download</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Beta Access Required</p>
                    <p className="text-sm text-amber-700">
                      Contact our team for installation instructions and beta access codes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to <span className="text-emerald-500">connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover activities, meet people, and build lasting relationships in your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join Activities</h3>
              <p className="text-gray-600 leading-relaxed">Find and join activities that match your interests and skill level in your local area.</p>
            </div>
            
            <div className="group text-center p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Create Teams</h3>
              <p className="text-gray-600 leading-relaxed">Form teams and groups with people who share your passions and interests.</p>
            </div>
            
            <div className="group text-center p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Connections</h3>
              <p className="text-gray-600 leading-relaxed">Meet new people and build lasting friendships through shared experiences.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Konek</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2025 Konek. Connecting people through activities.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}