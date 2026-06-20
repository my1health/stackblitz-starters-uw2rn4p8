export default function Home() {
  const menuItems = [
    {
      name: "Jollof Rice",
      price: "₦5,000",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    },
    {
      name: "Grilled Chicken",
      price: "₦8,000",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800",
    },
    {
      name: "Seafood Pasta",
      price: "₦12,000",
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="bg-black text-white flex justify-between items-center px-6 md:px-12 py-5 sticky top-0 z-50">

        <h1 className="text-2xl font-bold tracking-wide">
          The Olive Table
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#menu" className="hover:text-orange-500">
            Menu
          </a>

          <a href="#about" className="hover:text-orange-500">
            About
          </a>

          <a href="#reservation" className="hover:text-orange-500">
            Reservation
          </a>

          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </div>

      </nav>



      {/* HERO SECTION */}
      <section
        className="h-[85vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400')",
        }}
      >

        <div className="bg-black/60 p-8 md:p-12 rounded-2xl">

          <h2 className="text-4xl md:text-6xl font-bold mb-5">
            Delicious Food,
            <br />
            Amazing Experience
          </h2>


          <p className="text-lg md:text-xl mb-8">
            Fresh meals prepared by professional chefs
          </p>


          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold">
            Order Now
          </button>

        </div>

      </section>




      {/* MENU SECTION */}
      <section id="menu" className="py-20 px-6 md:px-12">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Menu
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {menuItems.map((item) => (

            <div
              key={item.name}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />


              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>


                <p className="text-orange-500 text-lg font-bold mt-3">
                  {item.price}
                </p>


                <button className="mt-5 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
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
        className="bg-gray-100 py-20 px-6 text-center"
      >

        <h2 className="text-4xl font-bold mb-6">
          About Us
        </h2>


        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          The Olive Table is a modern restaurant offering premium
          African and continental dishes made with fresh ingredients
          and served in an elegant atmosphere.
        </p>

      </section>





      {/* REVIEWS */}
      <section className="py-20 px-6 md:px-12">

        <h2 className="text-4xl font-bold text-center mb-12">
          Customer Reviews
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Amazing food and excellent service.",
            "One of the best dining experiences in Lagos.",
            "Beautiful environment and delicious meals.",
          ].map((review) => (

            <div
              key={review}
              className="p-6 shadow-lg rounded-xl"
            >

              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>


              <p className="mt-4">
                {review}
              </p>

            </div>

          ))}

        </div>

      </section>





      {/* RESERVATION */}
      <section
        id="reservation"
        className="bg-gray-100 py-20 px-6"
      >

        <h2 className="text-4xl font-bold text-center mb-10">
          Reserve a Table
        </h2>


        <form className="max-w-xl mx-auto space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-lg"
          />


          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-4 rounded-lg"
          />


          <input
            type="date"
            className="w-full border p-4 rounded-lg"
          />


          <input
            type="time"
            className="w-full border p-4 rounded-lg"
          />


          <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800">
            Reserve Table
          </button>

        </form>

      </section>





      {/* CONTACT */}
      <section
        id="contact"
        className="bg-black text-white py-20 text-center"
      >

        <h2 className="text-4xl font-bold mb-6">
          Contact Us
        </h2>


        <p className="mb-2">
          📍 Victoria Island, Lagos
        </p>


        <p className="mb-2">
          📞 +234 800 000 0000
        </p>


        <p>
          ✉ hello@olivetable.com
        </p>


        <a
          href="https://wa.me/2348000000000?text=Hello%20I%20would%20like%20to%20place%20an%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-green-600 px-8 py-3 rounded-lg hover:bg-green-700"
        >
          Order on WhatsApp
        </a>

      </section>


    </main>
  );
}
