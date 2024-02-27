# Quiz app
## Purpose
- For utility methods used in the classroom:
1. To create a **quiz** (pair up students and let them discuss answers to questions)
  - The quiz can be created from a json file with an object with 2 propterties:
    - name
    - data: an array of objects with 2 properties:
      - question
      - answer
  - In the src/quizzes folder, there are a network.json file.
  - The file is read in main.jsx and the data object is passed to the Quizzes component and further by Outlet properties to the QuizDetails component.
2. To create groupes from students in the classroom
  - The list of students i pasted into the text area and the number of students per group is entered in the drop down.
3. To have a Break timer for the classroom
  - The timer can be set to 5, 10 or 15 minutes.
  - Run down to 0 and break time is over.

## Steps to transform vite react js project to ts
- `npm install -D typescript @types/react @types/react-dom`
- rename the `vite.config.js` file to `vite.config.ts`
- Create file: vite-env.d.ts: `/// <reference types="vite/client" />`
- in index.html change the script tag to: `<script type="module" src="/src/main.tsx"></script>`
- Change the file extension of main.jsx to main.tsx (and all other jsx files to tsx)
- Change content of tsconfig.json:
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
- Add file: tsconfig.node.json:
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```
- In package.json change the build script to: `"build": "tsc && vite build"`
