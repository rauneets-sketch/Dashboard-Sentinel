import React from 'react'
  import ReactDOM from 'react-dom/client'
  import './index.css'

  // App (Dashboard) Component
  const App: React.FC = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-orange-900 mb-2">Sentinel Dashboard</h1>
            <p className="text-orange-700">Test Automation Metrics &amp; Analytics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">145</div>
              <div className="text-gray-600">Total Tests</div>
              <div className="text-sm text-gray-500 mt-2">Desktop Platform</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">132</div>
              <div className="text-gray-600">Passed</div>
              <div className="text-sm text-gray-500 mt-2">91% Success Rate</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">8</div>
              <div className="text-gray-600">Failed</div>
              <div className="text-sm text-gray-500 mt-2">Needs Attention</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">20m</div>
              <div className="text-gray-600">Duration</div>
              <div className="text-sm text-gray-500 mt-2">Total Runtime</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Status</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-lg transition">
                <div className="text-lg font-semibold text-gray-800 mb-2">Desktop</div>
                <div className="text-2xl font-bold text-green-600">✓</div>
                <div className="text-sm text-gray-600 mt-2">145 tests</div>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-lg transition">
                <div className="text-lg font-semibold text-gray-800 mb-2">Mobile</div>
                <div className="text-2xl font-bold text-green-600">✓</div>
                <div className="text-sm text-gray-600 mt-2">138 tests</div>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-lg transition">
                <div className="text-lg font-semibold text-gray-800 mb-2">Android</div>
                <div className="text-2xl font-bold text-green-600">✓</div>
                <div className="text-sm text-gray-600 mt-2">142 tests</div>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-lg transition">
                <div className="text-lg font-semibold text-gray-800 mb-2">OMS</div>
                <div className="text-2xl font-bold text-green-600">✓</div>
                <div className="text-sm text-gray-600 mt-2">156 tests</div>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-lg transition opacity-50">
                <div className="text-lg font-semibold text-gray-800 mb-2">iOS</div>
                <div className="text-2xl font-bold text-gray-400">⏳</div>
                <div className="text-sm text-gray-600 mt-2">Coming Soon</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">System Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <span className="text-gray-700">Backend Connection</span>
                <span className="text-green-600 font-semibold">✓ Connected</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <span className="text-gray-700">Supabase Integration</span>
                <span className="text-green-600 font-semibold">✓ Active</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <span className="text-gray-700">API Endpoints</span>
                <span className="text-green-600 font-semibold">✓ Responding</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <span className="text-gray-700">Dashboard Status</span>
                <span className="text-green-600 font-semibold">✓ Live</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p>Dashboard Sentinel v1.0.0 | Deployed on Vercel</p>
            <p className="text-sm mt-2">Real-time Test Automation Metrics</p>
          </div>
        </div>
      </div>
    )
  }

  const rootEl = document.getElementById('root') as HTMLElement | null
  if (!rootEl) {
    throw new Error('Root element with id="root" not found')
  }

  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )

  // Optional named export if you want to unit test the component
  export { App }
