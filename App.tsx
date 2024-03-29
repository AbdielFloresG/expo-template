import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import Navigation from './app/navigation/NavigationContainer'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </>
  )
}
