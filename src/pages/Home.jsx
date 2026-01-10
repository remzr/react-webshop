import Header from "../components/Header"
import Button from "../components/Button";

function Home({cartContent}) {

  return (
    <>
    <Header cartContent={cartContent} />
    <main className="bg-zinc-900">
      <div className="p-25 min-h-[calc(100dvh-98px)] bg-[url(/src/assets/bg-crypt.jpg)] bg-left bg-emerald-900 bg-blend-overlay">
        <h1 className="pb-8 font-default text-zinc-200 text-6xl font-bold">
          Welcome to the Crypt
        </h1>
        
        <p className="mb-12 text-zinc-200 text-2xl">
          Relics beyond time. Curiosities stolen from history itself.
          <br/>
          Browse the Infinite Collection — claim eternity before its sealed away.
        </p>
        
        <Button navPath={"/shop"} callToAction={"Collect the goods"}></Button>
      </div>
    </main>
    </>
  )
}

export default Home
