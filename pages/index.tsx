import { CardEvent, NavBar, SearchInput } from "@/components";

export default function Home() {
  return (
    <main>
      <NavBar />
      <SearchInput />              
      <div className="flex w-full justify-center gap-5">
        <CardEvent />
        <CardEvent />
      </div>
    </main>
  )
}

const SearchIcon = () => {
  return (
    <svg
      className="w-6 h-6 cursor-pointer" 
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}