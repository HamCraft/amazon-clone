import Image from "next/image";
import Link from "next/link";


export default function page() {


  return (
    <div>
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo">

            </div>
          </div>

          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
             </svg>
             <p className="add-second">USA</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
                <option>All</option>
            </select>
            <input placeholder="Search Amazon" className="search-input"/>
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27c1.06-1.35 1.68-3.06 1.68-4.73 0-4.14-3.36-7.5-7.5-7.5S1.5 5.14 1.5 9.28 4.86 16.78 9 16.78c1.78 0 3.42-.65 4.73-1.68l.27.28v.79l5 4.99 1.5-1.5-4.99-5zM9 13.78c-2.59 0-4.72-2.13-4.72-4.72 0-2.59 2.13-4.72 4.72-4.72 2.59 0 4.72 2.13 4.72 4.72 0 2.59-2.13 4.72-4.72 4.72z"/>
            </svg>
            </div>
          </div>
        

          <div className="nav-signin border">
            <p><span>Hello, sign in</span></p>
            <p className="nav-second">Account & Lists</p>
          </div>

          <div className="nav-signin border">
            <p><span>Returns</span></p>
            <p className="nav-second">& Orders</p>
          </div>

          <div className="nav-cart border">
              <svg className="cart" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" viewBox="0 0 24 24">
              <path d="M7 4h14l1.14 9H8.86L7 4zm1.62 7h10.77L18.44 5H8.56l-.7 6zM6 1h3l2 4h8l2-4h3v2H6V1zM8.9 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm8.2 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>
              </svg>
              Cart
          </div>
        </div>


        <div className="panel">
       
          <div className="panel-all">
          <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="20" height="20"  stroke="white"  viewBox="0 0 24 24">
           <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
            All
          </div>
          <div className="panel-ops">
          <p>Today's Deals </p>
          <p>Customer Service </p>
          <p>Registry </p>
          <p>Gift Cards </p>
          <p>Sell</p>
          </div>
          <div className="panel-deals">
            Shop deals in Electronics
          </div>
        </div>
      </header>


<div className="hero-section">
  <div className="hero-msg">
    <p>buy millions of products and <Link href={"https://www.amazon.com"} target="_blank" className="click-amazon">Click here to go to Amazon.com </Link></p>
  </div> 
</div>


<div className="shop-section">
  <div className="box1 box">
    <div className="box-content">
      < h2>Health & Personal Care</h2>
      <Image src="/box1_image.jpg" alt="box 1" height={300} width={300}  />
      <p>See more</p>
    </div>
  </div>
  <div className="box2 box" >
    <div className="box-content">
      < h2>Clothes</h2>
      <Image src="/box2_image.jpg" alt="box 1" height={300} width={300}  />
      <p>See more</p>
    </div>
    </div>
  <div className="box3 box">
  <div className="box-content">
      < h2>Furniture</h2>
      <Image src="/box3_image.jpg" alt="box 1" height={300} width={300}  />
      <p>See more</p>
    </div>
  </div>
  <div className="box4 box">
  <div className="box-content">
      < h2>Electronics</h2>
      <Image src="/box4_image.jpg" alt="box 1" height={300} width={300}  />
      <p>See more</p>
    </div>
  </div>
  <div className="box5 box">
  <div className="box-content">
      < h2>Beauty & Makeup</h2>
      <Image src="/box5_image.jpg" alt="box 1" height={300} width={300}  />
      <p>See more</p>
    </div>
  </div>
  <div className="box6 box">
  <div className="box-content">
      < h2>Pets Items</h2>
      <Image src="/box6_image.jpg" alt="box 1" height={300} width={300}  />
      <p>See more</p>
    </div>
  </div>
  <div className="box7 box">
  <div className="box-content">
      < h2>Toys</h2>
      <Image src="/box7_image.jpg" alt="box 1" height={300} width={300}  />
      <p>See more</p>
      </div>
    </div>
  <div className="box8 box">
    <div className="box-content">
      < h2>Fashion Trends</h2>
      <Image src="/box8_image.jpg" alt="box 1" height={300} width={300}  />
      <p>See more</p>
    </div>
    </div>
</div>


<footer>
  <div className="foot-panel1">
    Back To Top
  </div>
<div className="foot-panel2">
    <ul>
      <p>Get To Know Us</p>
      <a>Careers</a>
      <a>Blog</a>
      <a>About Amazon</a>
      <a>Investor Relations</a>
      <a>Amazon Devices</a>
      <a>Amazon Science</a>
    </ul>
    <ul>
      <p>Get To Know Us</p>
      <a>Careers</a>
      <a>Blog</a>
      <a>About Amazon</a>
      <a>Investor Relations</a>
      <a>Amazon Devices</a>
      <a>Amazon Science</a>
    </ul>
    <ul>
      <p>Get To Know Us</p>
      <a>Careers</a>
      <a>Blog</a>
      <a>About Amazon</a>
      <a>Investor Relations</a>
      <a>Amazon Devices</a>
      <a>Amazon Science</a>
    </ul>
    <ul>
      <p>Get To Know Us</p>
      <a>Careers</a>
      <a>Blog</a>
      <a>About Amazon</a>
      <a>Investor Relations</a>
      <a>Amazon Devices</a>
      <a>Amazon Science</a>
    </ul>
</div>

<div className="foot-panel3">
  <div className="footer-logo"></div>
</div>

<div className="foot-panel4">
  <div className="pages">
    <a>Conditions Of Use</a>
    <a>Privacy Notices</a>
    <a>Your Ads Privacy Choices</a>
  </div>
  <div className="copyright">
  © 1996-2024, Amazon.com, Inc. or its affiliates
  </div>
</div>
</footer>


















































    </div>
  )
}
