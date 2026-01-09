import Header from "../components/Header"

function Home() {

  return (
    <>
    <Header />
    <main className="p-25 min-h-screen bg-[url(/src/assets/bg-crypt.jpg)] bg-left">
      <h1 className="pb-8 font-default text-zinc-200 text-6xl font-bold">
        Welcome to the crypt
      </h1>
      <p className="text-zinc-200 text-2xl">
        Relics beyond time. Curiosities stolen from history itself.<br />Browse the Infinite Collection — claim eternity before its sealed away.
      </p>
      <button className="text-zinc-200 font-default text-xl bg-emerald-600 px-8 py-4 mt-8 rounded-lg">Check the goods</button>
    </main>
    </>
  )
}

export default Home
