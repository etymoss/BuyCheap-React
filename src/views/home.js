import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import TestimonialCard1 from '../components/testimonial-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>BuyCheap</title>
        <meta name="description" content="online shop\n" />
        <meta property="og:title" content="BuyCheap" />
        <meta property="og:description" content="online shop\n" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <Player
          src="https://lottie.host/cab78fe2-4f9e-4225-b17f-b0049bf19bf0/JJJeJKGmHd.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="home-lottie-node"
        ></Player>
        <h1 className="home-text">
          <span>BuyCheap</span>
          <br></br>
        </h1>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <nav className="home-nav">
            <div className="home-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
          </nav>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon02">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon04">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon06">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-banner">
        <img
          alt="image"
          src="https://cdn.discordapp.com/attachments/542775226971324417/1132290279882375178/376-e1504055980893.png"
          className="home-image1"
        />
        <div className="home-container02">
          <h1 className="home-text03">Derby Chips</h1>
          <select className="home-select">
            <option value="1 stück">1 stück = 0.50€ (50g)</option>
            <option value="5 stück">5 sück = 2.50€ (250g)</option>
            <option value="8 stück">8 stück = 4€ ( 400g )</option>
          </select>
          <div className="home-container03">
            <Link to="/buy-page" className="home-navlink button">
              <span>
                <span className="home-text05">Kaufen</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-banner1">
        <img
          alt="image"
          src="https://cdn.discordapp.com/attachments/1048744593065250826/1132621714434568272/balaji-chatka-pataka-flaming-hot-65gm.png"
          className="home-image2"
        />
        <div className="home-container04">
          <h1 className="home-text07">CHATAKA PATAKA</h1>
          <select className="home-select1">
            <option value="1 packung ">1 stück = 0.50€</option>
            <option value="5 packung(en)">5 packung = 7.50€ (280g)</option>
            <option value="8 packung(en)">8 packung(en) = 12€ (448g)</option>
          </select>
          <div className="home-container05">
            <button className="home-button button">Kaufen</button>
          </div>
        </div>
      </div>
      <div className="home-banner2">
        <img
          alt="image"
          src="https://cdn.discordapp.com/attachments/542775226971324417/1132698895802191933/image.png"
          className="home-image3"
        />
        <div className="home-container06">
          <h1 className="home-text08">Kosmetikspiegel</h1>
          <select className="home-select2">
            <option
              value="1 Stück                                       "
              selected
            >
              1 Stück = 5.99€
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </option>
          </select>
          <div className="home-container07">
            <Link to="/buy-page" className="home-navlink1 button">
              Kaufen
            </Link>
          </div>
        </div>
      </div>
      <div className="home-banner3">
        <img
          alt="image"
          src="https://cdn.discordapp.com/attachments/542775226971324417/1132704754330513470/image.png"
          className="home-image4"
        />
        <div className="home-container08">
          <h1 className="home-text09">Hipster mit Spitze</h1>
          <select className="home-select3">
            <option
              value="Größen S-XL | 2 Stück | Verschiedene Farben                              "
              selected
            >
              2 Stück = 4.99€
            </option>
          </select>
          <div className="home-container09">
            <Link to="/buy-page" className="home-navlink2 button">
              Kaufen
            </Link>
          </div>
        </div>
      </div>
      <div className="home-banner4">
        <img
          alt="image"
          src="https://cdn.discordapp.com/attachments/1048744593065250826/1132625088034897980/IMG_3840.png"
          className="home-image5"
        />
        <div className="home-container10">
          <h1 className="home-text10">
            <span className="home-text11">Wasserpistole</span>
            <br></br>
          </h1>
          <select className="home-select4">
            <option value="1 stück = 0.50€" selected>
              4 Stück = 1.99€
            </option>
          </select>
          <div className="home-container11">
            <Link to="/buy-page" className="home-navlink3 button">
              Kaufen
            </Link>
          </div>
        </div>
      </div>
      <div className="home-testimonial">
        <div className="home-container12">
          <h1 className="home-text13">
            <span>Team</span>
            <br></br>
          </h1>
          <span className="home-text16">
            <span className="home-text17">
              Der Shop &quot;BuyCheap&quot; wurde nur von
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text18">3 Personen</span>
            <span className="home-text19"> erstellt</span>
            <br></br>
          </span>
          <div className="home-container13">
            <a
              href="https://instagram.com/meinnameisteinfach?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer noopener"
            >
              <TestimonialCard1
                name="Micky"
                role="Website CEO"
                picture_src="https://cdn.discordapp.com/attachments/542775226971324417/1132301151589646407/IMG_7340.jpg"
                rootClassName="rootClassName2"
                className="home-component1"
              ></TestimonialCard1>
            </a>
            <a
              href="https://instagram.com/y.nka9?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer noopener"
            >
              <TestimonialCard1
                role="Manager"
                picture_src="https://cdn.discordapp.com/attachments/542775226971324417/1132303819812913232/5696115b-9f9d-4957-b295-04421c88c717.jpg"
                rootClassName="rootClassName"
                className="home-component2"
              ></TestimonialCard1>
            </a>
            <a
              href="https://instagram.com/fxnny.scb?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer noopener"
            >
              <TestimonialCard1
                name="Finnley"
                role="Shop ceo"
                picture_src="https://cdn.discordapp.com/attachments/542775226971324417/1132303162280247407/IMG_7414.png"
                rootClassName="rootClassName1"
                className="home-component3"
              ></TestimonialCard1>
            </a>
          </div>
        </div>
      </div>
      <div className="home-social-bar">
        <a
          href="https://twitter.com/BuyCheapzz"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link3"
        >
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </a>
        <a
          href="https://instagram.com/buycheapz?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noreferrer noopener"
          className="home-link4"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@BuySheapz"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link5"
        >
          <svg viewBox="0 0 1024 1024" className="home-icon12">
            <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Home
