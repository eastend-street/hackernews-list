# Hacker News List

This is a website to show top stories of Hacker news with infinite loading.

- Demo(Vercel): https://hackernews-list.vercel.app/
- Storybook(Chromatic): https://main--63d7085a4e0601fbed480dd5.chromatic.com/


## Prerequisites
- node >= v18.x
- npm >= v8.x


## Technologies used

- Languages & Frameworks
  - Next.js 13 (App Directory)
  - TypeScript
  - JavaScript
  
- Styles
  - Tailwind CSS
  
- Tests
  - Jest
  - React Testing Library
  - Storybook
  - Chromatic (Snapshot testing)

- Formatting
  - Prettier
  - ESLint
  - husky 
  - cz-conventional-changelog (To format commit messages)
  

## Setup

- Run server
```
npm install
npm run dev // http://localhost:3000
```

- Run tests
```
npm run test
```

- Run storybook
```
npm run storybook
```

# Folder Structure
```
/app
  layout.tsx -- Entry point
  page.tsx -- Home page component
  globals.css -- To import Tailwind
  /components -- Commom component such as Header, News
    /COMPONENT_NAME
      index.ts
      COMPONENT_NAME.tsx
      COMPONENT_NAME.test.tsx
      COMPONENT_NAME.stories.tsx
      /__snapshots__
  /constants -- e.g. API URL
  /types
/mocks -- mock files for Jest
```
