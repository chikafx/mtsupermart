import { useEffect, useState } from 'react'

const banners = [
  {
    eyebrow: 'New season, softer days',
    title: 'Sweet layers for little adventures.',
    copy: 'Fresh cotton pieces and tiny comforts made for everyday magic.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1400&q=85',
    accent: 'Blush edit',
  },
  {
    eyebrow: 'The thoughtful gift guide',
    title: 'Little gifts, big little smiles.',
    copy: 'Find something lovely for baby showers, birthdays and first hellos.',
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=1400&q=85',
    accent: 'Curated for you',
  },
  {
    eyebrow: 'Sunny days are coming',
    title: 'Playtime starts here.',
    copy: 'Easy essentials for tiny explorers, from morning cuddles to park days.',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1400&q=85',
    accent: 'Made to move',
  },
]

const categories = [
  { label: 'All picks', value: 'all', icon: '✦' },
  { label: 'Clothing', value: 'clothing', icon: '◌' },
  { label: 'Nursery', value: 'nursery', icon: '⌂' },
  { label: 'Bath & care', value: 'care', icon: '◒' },
  { label: 'Gifting', value: 'gifting', icon: '♡' },
]

const shopCategories = [
  { label: 'Baby Clothing', description: 'Dresses, shirts, trousers', icon: '👕', type: 'clothing', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85' },
  { label: 'Newborn Essentials', description: 'Everything for newborns', icon: '👶', type: 'nursery', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=85' },
  { label: 'Feeding', description: 'Bottles and accessories', icon: '🍼', type: 'care', image: 'https://images.unsplash.com/photo-1604917621956-10dfa7b6f883?auto=format&fit=crop&w=700&q=85' },
  { label: 'Toys', description: 'Fun and educational toys', icon: '🧸', type: 'toys', image: 'https://images.unsplash.com/photo-1594784051379-1a9c3e9d1b04?auto=format&fit=crop&w=700&q=85' },
  { label: 'Baby Footwear', description: 'Shoes and sandals', icon: '👟', type: 'footwear', image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=700&q=85' },
  { label: 'Nursery', description: 'Baby comfort essentials', icon: '🛏️', type: 'nursery', image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=700&q=85' },
  { label: 'School Essentials', description: 'Bags and more', icon: '🎒', type: 'school', image: 'https://images.unsplash.com/photo-1575480103135-3d0e3a1f2a83?auto=format&fit=crop&w=700&q=85' },
  { label: 'Gift Items', description: 'Perfect baby gifts', icon: '🎁', type: 'gifting', image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=700&q=85' },
]

const ageOptions = [
  { label: 'Newborn', range: '0–3 Months', value: 'newborn', icon: '👶' },
  { label: 'Baby', range: '3–12 Months', value: 'baby', icon: '🍼' },
  { label: 'Toddler', range: '1–3 Years', value: 'toddler', icon: '🚶' },
  { label: 'Kids', range: '3+ Years', value: 'kids', icon: '🧒' },
]

const products = [
  { name: 'Cloud-soft ribbed set', type: 'clothing', ages: ['newborn', 'baby'], price: '₦18,500', tag: 'Best seller', image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=85' },
  { name: 'Bunny cuddle blanket', type: 'nursery', ages: ['newborn', 'baby'], price: '₦22,000', tag: 'New in', image: 'https://images.unsplash.com/photo-1604917018618-4eab7aa2f4c4?auto=format&fit=crop&w=700&q=85' },
  { name: 'Mealtime starter set', type: 'care', ages: ['baby', 'toddler'], price: '₦14,800', tag: 'Everyday fave', image: 'https://images.unsplash.com/photo-1604917621956-10dfa7b6f883?auto=format&fit=crop&w=700&q=85' },
  { name: 'The little welcome box', type: 'gifting', ages: ['newborn', 'baby'], price: '₦38,000', tag: 'Gift ready', image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=700&q=85' },
  { name: 'Tiny explorer trainers', type: 'footwear', ages: ['toddler', 'kids'], price: '₦24,000', tag: 'New in', image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=700&q=85' },
  { name: 'First day activity kit', type: 'toys', ages: ['toddler', 'kids'], price: '₦16,500', tag: 'Play pick', image: 'https://images.unsplash.com/photo-1594784051379-1a9c3e9d1b04?auto=format&fit=crop&w=700&q=85' },
  { name: 'Happy little backpack', type: 'school', ages: ['kids'], price: '₦29,500', tag: 'Ready for school', image: 'https://images.unsplash.com/photo-1575480103135-3d0e3a1f2a83?auto=format&fit=crop&w=700&q=85' },
  { name: 'Everyday cotton dress', type: 'clothing', ages: ['toddler', 'kids'], price: '₦21,000', tag: 'Easy favourite', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85' },
]

function App() {
  const [activeBanner, setActiveBanner] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeAge, setActiveAge] = useState('all')
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const banner = banners[activeBanner]
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.type === activeCategory
    const matchesAge = activeAge === 'all' || product.ages.includes(activeAge)
    return matchesCategory && matchesAge
  })

  const selectCategory = (type) => {
    setActiveCategory(type)
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((current) => (current + 1) % banners.length), 6000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="app-shell">
      <div className="topline">Free delivery on orders over ₦50,000 <span>♡</span> Thoughtful things for little ones</div>
      <header className="site-header">
        <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
        <a className="logo" href="#top" aria-label="M and T Super Mart home"><span>M & T</span><small>SUPER MART</small></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#shop">Shop</a><a href="#gifts">Gift ideas</a><a href="#story">Our story</a>
        </nav>
        <div className="header-actions"><button className="icon-button" aria-label="Search">⌕</button><button className="bag-button" aria-label={`Shopping bag with ${cartCount} items`} onClick={() => setCartCount((count) => count + 1)}><span>Bag</span><b>{cartCount}</b></button></div>
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(43, 27, 37, .66) 0%, rgba(43, 27, 37, .18) 66%), url(${banner.image})` }}>
          <div className="hero-copy">
            <p className="eyebrow">{banner.eyebrow}</p>
            <h1>{banner.title}</h1>
            <p className="hero-description">{banner.copy}</p>
            <div className="hero-actions"><a className="primary-button" href="#shop">Shop now <span>↗</span></a><a className="text-button" href="#gifts">Explore gift ideas <span>↗</span></a></div>
          </div>
          <div className="hero-footer"><span>{banner.accent}</span><div className="slider-controls"><button aria-label="Previous banner" onClick={() => setActiveBanner((activeBanner + banners.length - 1) % banners.length)}>←</button>{banners.map((item, index) => <button key={item.title} className={index === activeBanner ? 'active' : ''} aria-label={`Show banner ${index + 1}`} onClick={() => setActiveBanner(index)}>{String(index + 1).padStart(2, '0')}</button>)}<button aria-label="Next banner" onClick={() => setActiveBanner((activeBanner + 1) % banners.length)}>→</button></div></div>
        </section>

        <section className="category-showcase" id="shop"><div className="section-heading"><div><p className="eyebrow dark">Find their happy</p><h2>Shop by category</h2></div><p className="section-note">Lovely little things, organised for easier browsing.</p></div><div className="category-card-grid">{shopCategories.map((category) => <button className="category-card" key={category.label} onClick={() => selectCategory(category.type)}><img src={category.image} alt="" /><span className="category-card-shade"></span><span className="category-card-icon">{category.icon}</span><span className="category-card-copy"><strong>{category.label}</strong><small>{category.description}</small></span><span className="category-card-arrow">↗</span></button>)}</div></section>

        <section className="category-strip"><div className="section-kicker"><span>Shop the edit</span><h2>Everything in one happy place.</h2></div><div className="category-list">{categories.map((category) => <button key={category.value} className={activeCategory === category.value ? 'category active' : 'category'} onClick={() => setActiveCategory(category.value)}><i>{category.icon}</i><span>{category.label}</span></button>)}</div></section>

        <section className="age-section"><div className="age-intro"><p className="eyebrow dark">A little help, right when you need it</p><h2>Shop by age</h2><p>Choose their age and we’ll show you pieces that fit their stage, size and everyday adventures.</p></div><div className="age-options"><button className={activeAge === 'all' ? 'age-option active' : 'age-option'} onClick={() => setActiveAge('all')}><span className="age-icon">✦</span><strong>All ages</strong><small>Show everything</small></button>{ageOptions.map((age) => <button key={age.value} className={activeAge === age.value ? 'age-option active' : 'age-option'} onClick={() => setActiveAge(age.value)}><span className="age-icon">{age.icon}</span><strong>{age.label}</strong><small>{age.range}</small></button>)}</div></section>

        <section className="product-section" id="products"><div className="section-heading"><div><p className="eyebrow dark">Picked for {activeAge === 'all' ? 'every little one' : ageOptions.find((age) => age.value === activeAge)?.label}</p><h2>Parents' favourites</h2></div><a className="outline-button" href="#shop">View all <span>↗</span></a></div>{filteredProducts.length > 0 ? <div className="product-grid">{filteredProducts.map((product) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><span>{product.tag}</span><button aria-label={`Add ${product.name} to bag`} onClick={() => setCartCount((count) => count + 1)}>＋</button></div><div className="product-meta"><div><h3>{product.name}</h3><p>Soft, useful and made for keeps.</p></div><strong>{product.price}</strong></div></article>)}</div> : <p className="empty-results">We’re adding more lovely pieces for this combination soon. Try another age or category.</p>}</section>

        <section className="promise-band" id="gifts"><div className="promise-intro"><p className="eyebrow dark">Made for real life</p><h2>Good things for growing families.</h2></div><div className="promise-items"><div><span>01</span><h3>Soft on little skin</h3><p>Thoughtful fabrics and fuss-free pieces.</p></div><div><span>02</span><h3>Easy to love</h3><p>Gifts they will reach for every day.</p></div><div><span>03</span><h3>Here when you need us</h3><p>Quick delivery, warm human service.</p></div></div></section>
      </main>
      <footer id="story"><div className="footer-logo">M & T <span>SUPER MART</span></div><p>Little things, lovely beginnings.</p><span>© 2026 M & T Super Mart</span></footer>
    </div>
  )
}

export default App
