import { BigCardEvent, NavBar, SearchInput } from "@/components";

export default function Home() {
  return (
    <main className="container px-4 m-auto">
      <NavBar />
      <div className="min-w-[384px] max-w-xl m-auto mt-5 mb-9">
        <SearchInput />              
      </div>
      <div className="flex w-full flex-wrap justify-center gap-5">
        <BigCardEvent />
        <BigCardEvent />
        <BigCardEvent />
        <BigCardEvent />
        <BigCardEvent />
        <BigCardEvent />
      </div>
    </main>
  )
}
