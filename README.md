# Hacker News List

This is a website to show top stories of Hacker news with infinite loading.

- Demo(Vercel): https://hackernews-list.vercel.app/
- Storybook(Chromatic): https://main--63d7085a4e0601fbed480dd5.chromatic.com/

[<img width="600" alt="Screenshot 2023-01-29 at 7 47 25 PM" src="https://user-images.githubusercontent.com/43656115/215383547-06b81ebb-f5af-4f32-96ce-84e73d3de1ed.png">](https://hackernews-list.vercel.app/)

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

## Folder Structure
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

## Accessibility

I checked these points to improve a11y:
- Added `aria-` and `role` attributes where necessary as well as using HTML tags properly. (e.g. Added `aria-hidden="true"` for the Skeleton nodes. Add `role="status"` to the parent Skeleton component)
- Used `getByRole` as possible in tests instead of using `data-testid` and `getByTestId`. So that the unit tests can check a11y as well as the component behavior.


## Fetching
Since Hacker news doesn't provide an API to fetch multiple news at once, I had to call the endpoint for each news. But to reduce the number of endpoint calls from the client side as possible, I implemented to fetch top story ids on the server side. (This `fetchTopStoryIds` is executed on the sever side since it is under app directory) 
Other endpoint calls are executed on the client side because the stories data is dynamic.

<img width="859" alt="Screenshot 2023-01-29 at 7 41 37 PM" src="https://user-images.githubusercontent.com/43656115/215382907-7b13ade3-9e44-46b1-9a16-79982ba955f9.png">


