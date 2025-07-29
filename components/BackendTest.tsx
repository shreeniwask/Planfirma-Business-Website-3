import { useState, useEffect } from 'react';
import { toast } from '../utils/toast';
import { healthCheck, getAnalytics, handleApiError } from '../utils/api';

export default function BackendTest() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [analytics, setAnalytics] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      setStatus('loading');
      
      // Test health endpoint
      const healthResult = await healthCheck();
      console.log('Health check result:', healthResult);
      
      // Test analytics endpoint
      const analyticsResult = await getAnalytics();
      console.log('Analytics result:', analyticsResult);
      
      if (healthResult.status === 'healthy') {
        setStatus('connected');
        setAnalytics(analyticsResult.analytics);
        toast.success('Backend connection successful!');
      } else {
        throw new Error('Health check failed');
      }
      
    } catch (error) {
      console.error('Backend test failed:', error);
      setStatus('error');
      setError(handleApiError(error));
      toast.error('Backend connection failed');
    }
  };

  return (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 border z-50 max-w-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-3 h-3 rounded-full ${
          status === 'connected' ? 'bg-green-500' : 
          status === 'error' ? 'bg-red-500' : 'bg-yellow-500'
        }`}></div>
        <span className="font-medium text-sm">Backend Status</span>
      </div>
      
      <div className="text-xs space-y-1">
        {status === 'loading' && <p>Testing connection...</p>}
        {status === 'connected' && (
          <div>
            <p className="text-green-600">✓ Connected</p>
            {analytics && (
              <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                <p>Leads: {analytics.totals?.leads || 0}</p>
                <p>Contacts: {analytics.totals?.contacts || 0}</p>
                <p>Subscribers: {analytics.totals?.subscribers || 0}</p>
              </div>
            )}
          </div>
        )}
        {status === 'error' && (
          <div>
            <p className="text-red-600">✗ Failed</p>
            <p className="text-red-500">{error}</p>
          </div>
        )}
      </div>
      
      <button
        onClick={testConnection}
        className="mt-2 bg-[#1f7a8c] text-white px-3 py-1 rounded text-xs hover:bg-[#1a6b7a] transition-colors"
      >
        Retry
      </button>
    </div>
  );
}