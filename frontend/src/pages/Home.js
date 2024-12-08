import React from "react";
import "./Home.css";

const Home = () => (
  <div class="parent-container">
    <div class="home-container">
      <div class="text-container">
        <h1>Welcome to Sweet Treats Bakery</h1>
        <p>Your one-stop destination for delicious cakes, cookies, and more!</p>
      </div>
    </div>
    <section id="menu-container">
      <div class="menu-text-container">
        <h1>What can we get for you?</h1>
        <p>
          Whole cakes, cake slices, small treats, donuts, cookies one of the
          best selection in town — please let us know if there are too many
          options! 😉
        </p>
        <h4>
          NO MATTER WHAT DAY OR TIME IT IS AND WHAT YOU’RE CRAVING FOR, WE HAVE
          SOMETHING IN STORE FOR YOU!
        </h4>
      </div>
      <h2>Our Goodies</h2>
      <div class="menu-item-container">
        <div class="menu-item">
          <a href="file:///Users/pranavsharma/Desktop/Frontend%20Projects/bakery_test/menu.html">
            <img
              src="/images/Cake Slice/BelgianChocolateMousse.jpg"
              alt="Cake Slices"
            />
            <div class="menu_item_description">
              <h3>Cake Slices</h3>
            </div>
          </a>
        </div>
        <div class="menu-item">
          <a href="file:///Users/pranavsharma/Desktop/Frontend%20Projects/bakery_test/menu.html">
            <img
              src="/images/Whole Cake/ChocolateMousse.jpg"
              alt="Whole Cakes"
            />
            <div class="menu_item_description">
              <h3>Whole Cakes</h3>
            </div>
          </a>
        </div>
        <div class="menu-item">
          <a href="file:///Users/pranavsharma/Desktop/Frontend%20Projects/bakery_test/menu.html">
            <img
              src="/images/Small Treats/ChocolateAlmondCroissant.jpg"
              alt="Small Treats"
            />
            <div class="menu_item_description">
              <h3>Small Treats</h3>
            </div>
          </a>
        </div>
        <div class="menu-item">
          <a href="file:///Users/pranavsharma/Desktop/Frontend%20Projects/bakery_test/menu.html">
            <img src="/images/Donuts/AppleFritter.jpg" alt="Donuts" />
            <div class="menu_item_description">
              <h3>Donuts</h3>
            </div>
          </a>
        </div>
        <div class="menu-item">
          <a href="file:///Users/pranavsharma/Desktop/Frontend%20Projects/bakery_test/menu.html">
            <img src="images/Cookies//Kuffle.jpg" alt="Cookies" />
            <div class="menu_item_description">
              <h3>Cookies</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section id="custom-container">
      <h2>Custom & Special Orders</h2>
      <p>
        Whether you're planning a company meeting, family gathering, birthday
        party, or any other special event, we offer a variety of both sweet and
        savoury pastries and treats to pick up at one of our bakery locations in
        Whistler, Squamish and Vancouver. Contact us for menus and more
        information.
      </p>
      <button>Contact Us</button>
    </section>
    <section id="about-container">
      <h2>About Sweet Treats Bakery</h2>
      <p>
        Welcome to Sweet Treats Bakery, where every bite is a moment of joy!
        Nestled in the heart of Vancouver, our bakery is a haven for dessert
        lovers, offering an irresistible array of handcrafted delights. From
        buttery pastries and decadent cakes to cookies that melt in your mouth,
        we create sweets that bring people together and make every day a little
        sweeter. At Sweet Treats Bakery, quality is at the heart of everything
        we do. We use only the finest ingredients, from farm-fresh eggs to
        premium chocolates, ensuring every treat is as delightful as it is
        memorable. Our team of passionate bakers and confectioners pour love and
        creativity into every recipe, blending tradition with a dash of
        innovation to surprise and delight your taste buds. Whether you’re
        celebrating a special occasion or simply indulging your sweet tooth,
        Sweet Treats Bakery is here to make life delicious. Stop by for a warm,
        welcoming experience, or let us customize something extraordinary for
        your next event. Because life is better with a little sweetness! 🧁
      </p>
      <button>Order Online for pickup(48 hours advance)</button>
    </section>
  </div>
);
export default Home;
