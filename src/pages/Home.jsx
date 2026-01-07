import Header from "../components/Header"

function Home() {

  return (
    <>
    <Header />
    <main>
      <h1 className="text-3x1 font-bold underline">
        Welcome to the fancy shop
      </h1>
      <p className="text-3x1">
        This is some text that describes a bit furthers about what you might find in this shop.
      </p>
      <button>This is a call to action</button>
    </main>
    </>
  )
}

export default Home
