import LogoComponent from './LogoComponent';
import DirectLogoComponent from './DirectLogoComponent';
import { LOGOS } from '../utils/logoUtils';

export default function LogoTest() {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Logo Test Component</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Light Theme Test */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Light Theme (File-based)</h3>
          <LogoComponent
            isDark={false}
            alt="Planfirma Light Logo"
            className="h-12 w-auto"
            loading="eager"
          />
          <p className="text-sm text-gray-600 mt-2">
            Path: {LOGOS.light}
          </p>
          <h4 className="text-md font-semibold mt-4 mb-2">Direct SVG</h4>
          <DirectLogoComponent
            isDark={false}
            alt="Planfirma Light Logo Direct"
            className="h-12 w-auto"
          />
        </div>
        
        {/* Dark Theme Test */}
        <div className="bg-black p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-white">Dark Theme (File-based)</h3>
          <LogoComponent
            isDark={true}
            alt="Planfirma Dark Logo"
            className="h-12 w-auto"
            loading="eager"
          />
          <p className="text-sm text-gray-400 mt-2">
            Path: {LOGOS.dark}
          </p>
          <h4 className="text-md font-semibold mt-4 mb-2 text-white">Direct SVG</h4>
          <DirectLogoComponent
            isDark={true}
            alt="Planfirma Dark Logo Direct"
            className="h-12 w-auto"
          />
        </div>
      </div>
      
      {/* Direct Image Tests */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Direct Image Tests</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border">
            <p className="text-sm font-medium mb-2">Light Logo (Direct)</p>
            <img 
              src={LOGOS.light} 
              alt="Light Logo Direct" 
              className="h-10 w-auto"
              onError={(e) => console.error('Direct light logo failed:', e)}
              onLoad={() => console.log('Direct light logo loaded successfully')}
            />
          </div>
          <div className="bg-black p-4 rounded border">
            <p className="text-sm font-medium mb-2 text-white">Dark Logo (Direct)</p>
            <img 
              src={LOGOS.dark} 
              alt="Dark Logo Direct" 
              className="h-10 w-auto"
              onError={(e) => console.error('Direct dark logo failed:', e)}
              onLoad={() => console.log('Direct dark logo loaded successfully')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}