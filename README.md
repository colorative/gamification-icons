# React Gamification Icons

A collection of beautiful SVG icons for gamification in React applications. Built with React and Tailwind CSS.

## Features

- 17+ gamification icons
- Fully customizable with Tailwind CSS
- TypeScript support
- Easy to use and integrate
- Responsive and accessible

## Installation

```bash
npm install react-gamification-icons
# or
yarn add react-gamification-icons
```

## Usage

```jsx
import { TreasureChest, TreasureMap, GlobalSearch } from 'react-gamification-icons';

function MyComponent() {
  return (
    <div>
      <TreasureChest className="w-6 h-6 text-blue-500" />
      <TreasureMap className="w-6 h-6 text-green-500" />
      <GlobalSearch className="w-6 h-6 text-purple-500" />
    </div>
  );
}
```

## Available Icons

- TreasureChest
- TreasureMap
- GlobalSearch
- Survey
- Trivia
- Exhibitor
- SocialVote
- SessionScanner
- Speakers
- GalleryPost
- SocialPhotoPost
- ActiveUser
- SponsorScanner
- ExhibitorsDeal
- Sponsor
- SocialPost
- Session

## Props

All icons accept the following props:

- `size`: number (default: 24)
- `className`: string (for Tailwind CSS classes)
- All standard SVG props

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## License

MIT 