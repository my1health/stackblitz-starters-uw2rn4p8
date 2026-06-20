export default function Home() {
  const menuItems = [
    {
      name: 'Jollof Rice',
      price: '₦5,000',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    },
    {
      name: 'Grilled Chicken',
      price: '₦8,000',
      image:
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800',
    },
    {
      name: 'Seafood Pasta',
      price: '₦12,000',
      image:
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
    },
    {name:"Burger Combo",price:"₦7,000",image:"..."},
    {name:"Pepper Soup",price:"₦4,500",image:"..."},
    {name:"Chocolate Cake",price:"₦3,500",image:"..."},
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="bg-black text-white flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold">The Olive Table</h1>

        <div className="space-x-6">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-xl">
          <h2 className="text-5xl font-bold mb-4">
            Delicious Food,
            <br />
            Amazing Experience
          </h2>

          <p className="text-xl mb-6">
            Fresh meals prepared by professional chefs
          </p>

          <button className="bg-orange-500 px-8 py-3 rounded-lg">
            Order Now
          </button>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Menu
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{item.name}</h3>

                <p className="text-orange-500 font-semibold mt-2">
                  {item.price}
                </p>

                <button className="mt-4 bg-black text-white px-5 py-2 rounded">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-gray-100 py-20 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Us</h2>

        <p className="max-w-3xl mx-auto text-lg">
          The Olive Table is a modern restaurant offering
          premium African and continental dishes made with
          fresh ingredients and served in an elegant
          atmosphere.
        </p>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow rounded-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Amazing food and excellent service.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              One of the best dining experiences in Lagos.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Beautiful environment and delicious meals.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-8 bg-gray-100">
  <h2 className="text-4xl font-bold text-center mb-10">
    Reserve a Table
  </h2>

  <form className="max-w-xl mx-auto space-y-4">
    <input
      type="text"
      placeholder="Full Name"
      className="w-full border p-3 rounded"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full border p-3 rounded"
    />

    <input
      type="date"
      className="w-full border p-3 rounded"
    />

    <input
      type="time"
      className="w-full border p-3 rounded"
    />

    <button className="bg-black text-white px-6 py-3 rounded">
      Reserve Table
    </button>
  </form>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-black text-white py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>

        <p>📍 Victoria Island, Lagos</p>
        <p>📞 +234 800 000 0000</p>
        <p>✉ hello@olivetable.com</p>

        <a
  href="https://wa.me/2348000000000?text=Hello%20I%20would%20like%20to%20place%20an%20order"
  target="_blank"
  className="inline-block mt-6 bg-green-600 px-6 py-3 rounded-lg"
>
  Order on WhatsApp
</a>
      </section>
    </main>
  );
}