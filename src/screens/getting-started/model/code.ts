export const MerelyProviderCode = `import { MerelyProvider } from "@merely-ui/react"

// Do this at the root of your application
ReactDOM.createRoot(document.getElementById('root')!).render(
 <StrictMode>
   <MerelyProvider>
     <App />
   </MerelyProvider>
 </StrictMode>
)`

export const InstallationCode = `# with Yarn
$ yarn add @merely-ui/react

# with npm
$ npm i @merely-ui/react

# with pnpm
$ pnpm add @merely-ui/react

# with Bun
$ bun add @merely-ui/react`
