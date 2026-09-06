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

const shopperOptions = [
  { label: 'My Baby', description: 'Everyday essentials', value: 'baby', icon: '👶' },
  { label: 'A Gift', description: 'Something thoughtful', value: 'gift', icon: '🎁' },
  { label: 'An Expecting Mother', description: 'Ready for baby', value: 'expecting', icon: '🤰' },
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

const bundles = [
  { name: 'Newborn Starter Pack', description: 'The soft landing for those first precious days.', items: ['5 baby outfits', 'Feeding bottle', 'Baby blanket', 'Baby towel'], price: '₦58,000', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=85', tag: 'Most loved' },
  { name: 'First-Time Mum Package', description: 'A thoughtful little head start for mum and baby.', items: ['Baby essentials', 'Comforting care set', 'Keepsake gift'], price: '₦64,500', image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=900&q=85', tag: 'For new beginnings' },
  { name: 'Baby Shower Package', description: 'A ready-to-give bundle for the sweetest celebration.', items: ['Gift-ready clothes', 'Cuddle blanket', 'Welcome card'], price: '₦49,000', image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85', tag: 'Gift ready' },
  { name: 'Back-to-School Package', description: 'Little tools for big first-day confidence.', items: ['Happy backpack', 'Activity kit', 'Everyday outfit'], price: '₦61,000', image: 'https://images.unsplash.com/photo-1575480103135-3d0e3a1f2a83?auto=format&fit=crop&w=900&q=85', tag: 'School days' },
  { name: 'Birthday Gift Package', description: 'A joyful surprise for their next big milestone.', items: ['Playtime favourite', 'Special outfit', 'Gift wrap'], price: '₦45,500', image: 'https://images.unsplash.com/photo-1594784051379-1a9c3e9d1b04?auto=format&fit=crop&w=900&q=85', tag: 'Party pick' },
]

const whatsappNumber = '2348000000000'
const dashboardTabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Products', value: 'products' },
  { label: 'Orders', value: 'orders' },
  { label: 'Customers', value: 'customers' },
  { label: 'Bundles', value: 'bundles' },
]

function App() {
  const isAdminRoute = window.location.pathname === '/admin'
  const [activeBanner, setActiveBanner] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeAge, setActiveAge] = useState('all')
  const [shopperType, setShopperType] = useState('baby')
  const [helperAge, setHelperAge] = useState('baby')
  const [recommendationsShown, setRecommendationsShown] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlist, setWishlist] = useState([])
  const [registryName, setRegistryName] = useState('Baby David')
  const [registryCreated, setRegistryCreated] = useState(false)
  const [registryItems, setRegistryItems] = useState([])
  const [shareCopied, setShareCopied] = useState(false)
  const [adminTab, setAdminTab] = useState('overview')
  const [inventory, setInventory] = useState(products.map((product, index) => ({ ...product, id: index + 1, stock: index % 3 === 0 ? 8 : 24 })))
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', image: '' })
  const [adminCategories, setAdminCategories] = useState(['Baby Clothing', 'Nursery', 'Feeding', 'Toys'])
  const [categoryDraft, setCategoryDraft] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const banner = banners[activeBanner]
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.type === activeCategory
    const matchesAge = activeAge === 'all' || product.ages.includes(activeAge)
    return matchesCategory && matchesAge
  })
  const recommendedProducts = products.filter((product) => {
    const matchesAge = product.ages.includes(helperAge)
    if (shopperType === 'gift') return product.type === 'gifting' || product.type === 'toys' || product.type === 'clothing'
    if (shopperType === 'expecting') return product.type === 'nursery' || product.type === 'care' || product.type === 'gifting'
    return matchesAge
  }).slice(0, 4)

  const addBundle = () => setCartCount((count) => count + 1)

  const orderOnWhatsApp = (productName, price) => {
    const message = encodeURIComponent(`Hello M & T Super Mart, I would like to order: ${productName} (${price}). Please confirm availability and delivery.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  const addAdminProduct = (event) => {
    event.preventDefault()
    if (!newProduct.name || !newProduct.price) return
    setInventory((items) => [...items, { ...newProduct, id: Date.now(), type: 'clothing', ages: ['baby'], tag: 'New product', stock: Number(newProduct.stock) || 0, image: newProduct.image || products[0].image }])
    setNewProduct({ name: '', price: '', stock: '', image: '' })
  }

  const updateStock = (id, change) => setInventory((items) => items.map((item) => item.id === id ? { ...item, stock: Math.max(0, item.stock + change) } : item))

  const updatePrice = (id, price) => setInventory((items) => items.map((item) => item.id === id ? { ...item, price } : item))

  const addCategory = (event) => {
    event.preventDefault()
    if (categoryDraft && !adminCategories.includes(categoryDraft)) setAdminCategories((items) => [...items, categoryDraft])
    setCategoryDraft('')
  }

  const toggleWishlist = (productName) => {
    setWishlist((saved) => saved.includes(productName) ? saved.filter((name) => name !== productName) : [...saved, productName])
  }

  const createRegistry = () => {
    setRegistryCreated(true)
    setRegistryItems(wishlist)
  }

  const addWishlistToRegistry = () => setRegistryItems((saved) => [...new Set([...saved, ...wishlist])])

  const copyRegistryLink = async () => {
    const link = `${window.location.origin}/registry/${registryName.toLowerCase().replaceAll(' ', '-')}`
    try {
      await navigator.clipboard.writeText(link)
    } catch {
      window.prompt('Copy your registry link', link)
    }
    setShareCopied(true)
    window.setTimeout(() => setShareCopied(false), 2200)
  }

  const selectCategory = (type) => {
    setActiveCategory(type)
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((current) => (current + 1) % banners.length), 6000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className={isAdminRoute ? 'app-shell admin-route' : 'app-shell'}>
      <div className="topline">Free delivery on orders over ₦50,000 <span>♡</span> Thoughtful things for little ones</div>
      <header className="site-header">
        <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
        <a className="logo" href="#top" aria-label="M and T Super Mart home"><span>M & T</span><small>SUPER MART</small></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#shop">Shop</a><a href="#gifts">Gift ideas</a><a href="#story">Our story</a>
        </nav>
        <div className="header-actions"><button className="icon-button" aria-label="Search">⌕</button><a className="wishlist-link" href="#registry" aria-label={`${wishlist.length} saved wishlist items`}>♡ <span>{wishlist.length}</span></a><button className="bag-button" aria-label={`Shopping bag with ${cartCount} items`} onClick={() => setCartCount((count) => count + 1)}><span>Bag</span><b>{cartCount}</b></button></div>
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

        <section className="helper-section" id="help-me-shop"><div className="helper-heading"><div><p className="eyebrow dark">Not sure where to start?</p><h2>Let’s find something lovely.</h2></div><span className="helper-mark">M&T<br />carefully<br />curated</span></div><div className="helper-flow"><div className="helper-question"><span className="question-number">01</span><h3>Who are you shopping for?</h3><div className="shopper-options">{shopperOptions.map((option) => <button key={option.value} className={shopperType === option.value ? 'shopper-option active' : 'shopper-option'} onClick={() => { setShopperType(option.value); setRecommendationsShown(false) }}><span>{option.icon}</span><strong>{option.label}</strong><small>{option.description}</small></button>)}</div></div><div className="helper-question"><span className="question-number">02</span><h3>How old is the child?</h3><div className="helper-age-options">{ageOptions.map((age) => <button key={age.value} className={helperAge === age.value ? 'helper-age active' : 'helper-age'} onClick={() => { setHelperAge(age.value); setRecommendationsShown(false) }}><span>{age.icon}</span><strong>{age.label}</strong><small>{age.range}</small></button>)}</div></div><button className="recommend-button" onClick={() => setRecommendationsShown(true)}>Show my picks <span>↗</span></button></div>{recommendationsShown && <div className="recommendation-panel"><div><p className="eyebrow dark">Picked just for you</p><h3>{shopperType === 'gift' ? 'Beautiful gifts they’ll remember.' : shopperType === 'expecting' ? 'A gentle start for mum and baby.' : `Lovely ideas for your ${ageOptions.find((age) => age.value === helperAge)?.label.toLowerCase()}.`}</h3></div><div className="recommendation-list">{recommendedProducts.map((product) => <button key={product.name} onClick={() => setCartCount((count) => count + 1)}><img src={product.image} alt="" /><span><strong>{product.name}</strong><small>{product.price} · Add to bag +</small></span></button>)}</div></div>}</section>

        <section className="category-showcase" id="shop"><div className="section-heading"><div><p className="eyebrow dark">Find their happy</p><h2>Shop by category</h2></div><p className="section-note">Lovely little things, organised for easier browsing.</p></div><div className="category-card-grid">{shopCategories.map((category) => <button className="category-card" key={category.label} onClick={() => selectCategory(category.type)}><img src={category.image} alt="" /><span className="category-card-shade"></span><span className="category-card-icon">{category.icon}</span><span className="category-card-copy"><strong>{category.label}</strong><small>{category.description}</small></span><span className="category-card-arrow">↗</span></button>)}</div></section>

        <section className="category-strip"><div className="section-kicker"><span>Shop the edit</span><h2>Everything in one happy place.</h2></div><div className="category-list">{categories.map((category) => <button key={category.value} className={activeCategory === category.value ? 'category active' : 'category'} onClick={() => setActiveCategory(category.value)}><i>{category.icon}</i><span>{category.label}</span></button>)}</div></section>

        <section className="age-section"><div className="age-intro"><p className="eyebrow dark">A little help, right when you need it</p><h2>Shop by age</h2><p>Choose their age and we’ll show you pieces that fit their stage, size and everyday adventures.</p></div><div className="age-options"><button className={activeAge === 'all' ? 'age-option active' : 'age-option'} onClick={() => setActiveAge('all')}><span className="age-icon">✦</span><strong>All ages</strong><small>Show everything</small></button>{ageOptions.map((age) => <button key={age.value} className={activeAge === age.value ? 'age-option active' : 'age-option'} onClick={() => setActiveAge(age.value)}><span className="age-icon">{age.icon}</span><strong>{age.label}</strong><small>{age.range}</small></button>)}</div></section>

        <section className="product-section" id="products"><div className="section-heading"><div><p className="eyebrow dark">Picked for {activeAge === 'all' ? 'every little one' : ageOptions.find((age) => age.value === activeAge)?.label}</p><h2>Parents' favourites</h2></div><a className="outline-button" href="#shop">View all <span>↗</span></a></div>{filteredProducts.length > 0 ? <div className="product-grid">{filteredProducts.map((product) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><span>{product.tag}</span><button className={wishlist.includes(product.name) ? 'save-product saved' : 'save-product'} aria-label={`${wishlist.includes(product.name) ? 'Remove' : 'Save'} ${product.name} ${wishlist.includes(product.name) ? 'from' : 'to'} wishlist`} onClick={() => toggleWishlist(product.name)}>♡</button><button className="add-product" aria-label={`Add ${product.name} to bag`} onClick={() => setCartCount((count) => count + 1)}>＋</button></div><div className="product-meta"><div><h3>{product.name}</h3><p>Soft, useful and made for keeps.</p></div><strong>{product.price}</strong></div><button className="whatsapp-order" onClick={() => orderOnWhatsApp(product.name, product.price)}>Order on WhatsApp <span>↗</span></button></article>)}</div> : <p className="empty-results">We’re adding more lovely pieces for this combination soon. Try another age or category.</p>}</section>

        <section className="wishlist-section"><div className="wishlist-copy"><p className="eyebrow dark">Keep the lovely things close</p><h2>Your wishlist</h2><p>Save favourites while you browse, then come back when the time feels right.</p><a className="outline-button" href="#products">Continue shopping <span>↗</span></a></div><div className="wishlist-preview">{wishlist.length > 0 ? <>{wishlist.slice(0, 3).map((name) => { const product = products.find((item) => item.name === name); return <div className="wishlist-item" key={name}><img src={product.image} alt="" /><span><strong>{product.name}</strong><small>{product.price}</small></span><button aria-label={`Remove ${product.name} from wishlist`} onClick={() => toggleWishlist(product.name)}>×</button></div> })}<div className="wishlist-count"><strong>{wishlist.length}</strong><span>{wishlist.length === 1 ? 'saved favourite' : 'saved favourites'}</span></div></> : <div className="wishlist-empty"><span>♡</span><strong>Your saved pieces will live here.</strong><p>Tap the heart on anything you love.</p></div>}</div></section>

        <section className="bundles-section" id="bundles"><div className="section-heading"><div><p className="eyebrow dark">Take the guesswork out</p><h2>Smart little bundles.</h2></div><p className="section-note">A few good things, thoughtfully gathered. One click and they’re yours.</p></div><div className="bundle-grid">{bundles.map((bundle) => <article className="bundle-card" key={bundle.name}><div className="bundle-image"><img src={bundle.image} alt="" /><span>{bundle.tag}</span></div><div className="bundle-content"><h3>{bundle.name}</h3><p>{bundle.description}</p><ul>{bundle.items.map((item) => <li key={item}>{item}</li>)}</ul><div className="bundle-footer"><strong>{bundle.price}</strong><button onClick={addBundle}>Add bundle <span>＋</span></button><button className="bundle-whatsapp" onClick={() => orderOnWhatsApp(bundle.name, bundle.price)}>WhatsApp <span>↗</span></button></div></div></article>)}</div></section>

        <section className="registry-section" id="registry"><div className="registry-heading"><p className="eyebrow dark">For the beautiful waiting</p><h2>Create a baby gift registry.</h2><p>Make one list for all the little things you need, then share it with the people who love you.</p></div>{!registryCreated ? <div className="registry-create"><span className="registry-badge">👶</span><label htmlFor="registry-name">Give your registry a name</label><div className="registry-input"><input id="registry-name" value={registryName} onChange={(event) => setRegistryName(event.target.value)} placeholder="Baby David" /><button onClick={createRegistry}>Create registry <span>↗</span></button></div><small>You can add or remove items anytime.</small></div> : <div className="registry-page"><div className="registry-page-top"><div><span className="registry-badge">👶</span><p className="eyebrow dark">A little list for</p><h3>{registryName || 'Baby David'}’s Wishlist</h3><small>{registryItems.length} {registryItems.length === 1 ? 'item' : 'items'} selected</small></div><div className="registry-actions"><button className="outline-button" onClick={addWishlistToRegistry}>Add saved items <span>＋</span></button><button className="share-button" onClick={copyRegistryLink}>{shareCopied ? 'Link copied' : 'Share registry'} <span>↗</span></button></div></div><div className="registry-items">{registryItems.length > 0 ? registryItems.map((name) => { const product = products.find((item) => item.name === name); return <div className="registry-item" key={name}><img src={product.image} alt="" /><span><strong>{product.name}</strong><small>{product.price}</small></span><em>Still needed</em></div> }) : <p className="empty-results">Your registry is ready. Add favourites from the shop to start your list.</p>}</div></div>}</section>

        {isAdminRoute && <section className="admin-section" id="admin"><a className="admin-store-link" href="/">← Back to storefront</a><div className="admin-topline"><div><p className="eyebrow gold">Store control room</p><h2>Good morning, M & T.</h2><p>Everything your shop needs, in one calm place.</p></div><span className="admin-status"><i></i> Store is live</span></div><div className="admin-shell"><aside className="admin-sidebar"><p>Manage</p>{dashboardTabs.map((tab) => <button key={tab.value} className={adminTab === tab.value ? 'active' : ''} onClick={() => setAdminTab(tab.value)}>{tab.label}<span>↗</span></button>)}</aside><div className="admin-content">{adminTab === 'overview' && <><div className="admin-metrics"><div><span>Today’s sales</span><strong>₦186,400</strong><small>↗ 18.4% this week</small></div><div><span>Open orders</span><strong>24</strong><small>7 need attention</small></div><div><span>Customers</span><strong>318</strong><small>↗ 12 new this month</small></div><div><span>Low stock</span><strong>{inventory.filter((item) => item.stock < 10).length}</strong><small>Restock soon</small></div></div><div className="admin-overview-grid"><div className="admin-card"><div className="admin-card-heading"><h3>Recent orders</h3><button onClick={() => setAdminTab('orders')}>View all ↗</button></div><div className="admin-order-list"><div><span>#MT-1048</span><strong>Amaka O.</strong><em>₦38,000</em><b>Ready</b></div><div><span>#MT-1047</span><strong>Sarah D.</strong><em>₦64,500</em><b>Processing</b></div><div><span>#MT-1046</span><strong>Chidi N.</strong><em>₦22,000</em><b>Shipped</b></div></div></div><div className="admin-card category-manager"><div className="admin-card-heading"><h3>Categories</h3><span>{adminCategories.length} total</span></div><div className="admin-category-chips">{adminCategories.map((category) => <span key={category}>{category}</span>)}</div><form onSubmit={addCategory}><input value={categoryDraft} onChange={(event) => setCategoryDraft(event.target.value)} placeholder="New category" /><button>Add +</button></form></div></div></>}{adminTab === 'products' && <div className="admin-card product-manager"><div className="admin-card-heading"><div><p className="eyebrow gold">Catalogue</p><h3>Products & stock</h3></div><span>{inventory.length} products</span></div><form className="add-product-form" onSubmit={addAdminProduct}><input value={newProduct.name} onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })} placeholder="Product name" /><input value={newProduct.price} onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })} placeholder="Price, e.g. ₦18,500" /><input value={newProduct.stock} onChange={(event) => setNewProduct({ ...newProduct, stock: event.target.value })} placeholder="Stock" type="number" min="0" /><label className="upload-field">📸 Upload image<input type="file" accept="image/*" onChange={(event) => setNewProduct({ ...newProduct, image: event.target.files?.[0] ? URL.createObjectURL(event.target.files[0]) : '' })} /></label><button className="admin-primary" type="submit">Add product <span>＋</span></button></form><div className="inventory-table"><div className="inventory-head"><span>Product</span><span>Price</span><span>Stock</span><span>Action</span></div>{inventory.map((item) => <div className="inventory-row" key={item.id}><span className="inventory-product"><img src={item.image} alt="" /><strong>{item.name}</strong></span><input value={item.price} onChange={(event) => updatePrice(item.id, event.target.value)} /><span className={item.stock < 10 ? 'stock low' : 'stock'}>{item.stock} in stock <button onClick={() => updateStock(item.id, 1)}>+</button><button onClick={() => updateStock(item.id, -1)}>−</button></span><button className="row-action" onClick={() => setInventory((items) => items.filter((product) => product.id !== item.id))}>Remove</button></div>)}</div></div>}{adminTab === 'orders' && <div className="admin-card"><div className="admin-card-heading"><div><p className="eyebrow gold">Fulfilment</p><h3>Manage orders</h3></div><span>24 open</span></div><div className="wide-order-table"><div><span>Order</span><span>Customer</span><span>Items</span><span>Total</span><span>Status</span></div>{[['#MT-1048', 'Amaka Okafor', 'Welcome box', '₦38,000', 'Ready'], ['#MT-1047', 'Sarah Daniels', 'Mum package', '₦64,500', 'Processing'], ['#MT-1046', 'Chidi Nwosu', 'Cuddle blanket', '₦22,000', 'Shipped'], ['#MT-1045', 'Lara Bello', 'Ribbed set', '₦18,500', 'Delivered']].map((order) => <div key={order[0]}><strong>{order[0]}</strong><span>{order[1]}</span><span>{order[2]}</span><span>{order[3]}</span><b>{order[4]}</b></div>)}</div></div>}{adminTab === 'customers' && <div className="admin-card"><div className="admin-card-heading"><div><p className="eyebrow gold">Your community</p><h3>Customers</h3></div><span>318 total</span></div><div className="customer-list"><div><span className="customer-avatar">AO</span><strong>Amaka Okafor</strong><small>5 orders · ₦142,000 spent</small><b>Returning</b></div><div><span className="customer-avatar">SD</span><strong>Sarah Daniels</strong><small>3 orders · ₦86,500 spent</small><b>Returning</b></div><div><span className="customer-avatar">LN</span><strong>Lara Nwosu</strong><small>1 order · ₦18,500 spent</small><b>New</b></div></div></div>}{adminTab === 'bundles' && <div className="admin-card"><div className="admin-card-heading"><div><p className="eyebrow gold">Curated offers</p><h3>Promotional bundles</h3></div><button className="admin-primary" onClick={() => setAdminTab('products')}>Create bundle <span>＋</span></button></div><div className="admin-bundle-list">{bundles.map((bundle) => <div key={bundle.name}><img src={bundle.image} alt="" /><span><strong>{bundle.name}</strong><small>{bundle.items.length} items · {bundle.price}</small></span><b>Live</b></div>)}</div><div className="sales-note"><strong>Sales overview</strong><span>Bundle revenue is up 24% this month ↗</span></div></div>}</div></div></section>}

        <section className="promise-band" id="gifts"><div className="promise-intro"><p className="eyebrow dark">Made for real life</p><h2>Good things for growing families.</h2></div><div className="promise-items"><div><span>01</span><h3>Soft on little skin</h3><p>Thoughtful fabrics and fuss-free pieces.</p></div><div><span>02</span><h3>Easy to love</h3><p>Gifts they will reach for every day.</p></div><div><span>03</span><h3>Here when you need us</h3><p>Quick delivery, warm human service.</p></div></div></section>
      </main>
      <footer id="story"><div className="footer-logo">M & T <span>SUPER MART</span></div><p>Little things, lovely beginnings.</p><span>© 2026 M & T Super Mart</span></footer>
    </div>
  )
}

export default App
