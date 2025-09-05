import { supabase } from '@/lib/supabase'

export default async function DebugPage() {
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('Supabase Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  
  try {
    // Test 1: Simple query to activities table
    const { data: activities, error: activitiesError } = await supabase
      .from('activities')
      .select('id, title')
      .limit(5)
    
    console.log('Activities query result:', { activities, activitiesError })

    // Test 2: Check if the specific activity exists
    const { data: specificActivity, error: specificError } = await supabase
      .from('activities')
      .select('id, title')
      .eq('id', '617f4f3a-b75c-4166-8bed-90c153694ec8')
      .single()
    
    console.log('Specific activity query result:', { specificActivity, specificError })

    // Test 3: Check table permissions
    const { data: tablesInfo, error: tablesError } = await supabase
      .from('activities')
      .select('count', { count: 'exact', head: true })
    
    console.log('Table count query result:', { tablesInfo, tablesError })

    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Debug Supabase Connection</h1>
        
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Environment Variables</h2>
            <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
            <p>Supabase Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Present' : 'Missing'}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Activities Query (first 5)</h2>
            {activitiesError ? (
              <p className="text-red-600">Error: {JSON.stringify(activitiesError)}</p>
            ) : (
              <pre className="text-sm">{JSON.stringify(activities, null, 2)}</pre>
            )}
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Specific Activity Query</h2>
            <p>Looking for ID: 617f4f3a-b75c-4166-8bed-90c153694ec8</p>
            {specificError ? (
              <p className="text-red-600">Error: {JSON.stringify(specificError)}</p>
            ) : (
              <pre className="text-sm">{JSON.stringify(specificActivity, null, 2)}</pre>
            )}
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Table Count</h2>
            {tablesError ? (
              <p className="text-red-600">Error: {JSON.stringify(tablesError)}</p>
            ) : (
              <p>Total activities: {tablesInfo}</p>
            )}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Debug page error:', error)
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Error in Debug Page</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }
}