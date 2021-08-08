import React from 'react'
import Block from "../components/Home_Block"

function Homepage() {
 return (
  <>
   <section className="screen-1" style={{ backgroundImage: 'url(http://localhost:4000/images/home_page.jpg)' }}>
    <div className='filter'></div>
    <div className='content'>
     <h1>Unlimited movies, TV shows, and more.</h1>
     <h2>Watch anywhere. Cancel anytime.</h2>
     <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
     <section className="sign">
      <input type='email' placeholder="Email adress" />
      <button type='button' id="submit">Get Started</button>
     </section>
    </div>
   </section>
   <section className="block-1 block" style={{flexDirection:"row"}}>
    <Block
     heading="Enjoy on your TV."
     content="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
     image="http://localhost:4000/images/tv.png"
    />
   </section>
   <section className="block-2 block" style={{flexDirection:"row-reverse"}}>
    <Block
     heading="Download your shows to watch offline."
     content="Save your favorites easily and always have something to watch."
     image="http://localhost:4000/images/mobile.jpg"
     />
   </section>
   <section className="block-3 block" style={{ flexDirection: "row" }}>
    <Block
     heading="Watch everywhere."
     content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
     image="http://localhost:4000/images/device-pile.png"
     />
   </section>
   <section className="block-4 block" style={{ flexDirection: "row-reverse" }}>
    <Block
     heading="Create profiles for kids."
     content="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
     image="http://localhost:4000/images/kids.png"
     />
   </section>
  </>
 )
}

export default Homepage