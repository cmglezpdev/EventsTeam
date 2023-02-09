import { BigCardEvent, NavBar, SearchInput } from "@/components";
import { AppLayout } from "@/layouts/AppLayout";

export default function Home() {
  return (
    <AppLayout
      title="EventsTeam - Your Events"
      pageDescription="EventsTeam is a platform to create events and share them with your friends"
    >
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
    </AppLayout>
  )
}
