import React from 'react';
import {
  TreasureChest,
  TreasureMap,
  GlobalSearch,
  Survey,
  Trivia,
  Exhibitor,
  SocialVote,
  SessionScanner,
  Speakers,
  GalleryPost,
  SocialPhotoPost,
  ActiveUser,
  SponsorScanner,
  ExhibitorsDeal,
  Sponsor,
  SocialPost,
  Session
} from './components/icons';
import './App.css'

const icons = [
  { name: 'TreasureChest', component: TreasureChest },
  { name: 'TreasureMap', component: TreasureMap },
  { name: 'GlobalSearch', component: GlobalSearch },
  { name: 'Survey', component: Survey },
  { name: 'Trivia', component: Trivia },
  { name: 'Exhibitor', component: Exhibitor },
  { name: 'SocialVote', component: SocialVote },
  { name: 'SessionScanner', component: SessionScanner },
  { name: 'Speakers', component: Speakers },
  { name: 'GalleryPost', component: GalleryPost },
  { name: 'SocialPhotoPost', component: SocialPhotoPost },
  { name: 'ActiveUser', component: ActiveUser },
  { name: 'SponsorScanner', component: SponsorScanner },
  { name: 'ExhibitorsDeal', component: ExhibitorsDeal },
  { name: 'Sponsor', component: Sponsor },
  { name: 'SocialPost', component: SocialPost },
  { name: 'Session', component: Session }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">React Gamification Icons</h1>
        <p className="text-lg text-gray-600 mb-8">
          A collection of gamification icons for React applications
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Icon Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {icons.map(({ name, component: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Icon className="w-12 h-12 text-gray-700 mb-2" />
                <span className="text-sm text-gray-600 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Usage</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="text-sm text-gray-800 overflow-x-auto">
              {`import { IconName } from 'react-gamification-icons';

// Use the icon component
<IconName className="w-6 h-6" />`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 