/**
 * ═══════════════════════════════════════════════════════════
 *  BEAU MAGAZINE — Articles Data File
 *  
 *  This is the ONLY file you need to edit to add new posts.
 *
 *  HOW TO ADD A NEW ARTICLE:
 *  1. Copy the template at the bottom of this file
 *  2. Paste it inside the ARTICLES array (before the last ])
 *  3. Fill in your content
 *  4. Save. Done.
 *
 *  CATEGORIES (use exactly as written):
 *    "Places" | "Food" | "Moments"
 *
 *  FEATURED:
 *    Set featured: true on ONE article — it becomes the hero.
 *    The rest auto-populate the grids below.
 *
 *  IMAGES:
 *    Use a full URL (Unsplash, your own host, etc.)
 *    Recommended size: 1200px wide minimum.
 *    Unsplash tip: add ?w=1200&q=80 to the end of any unsplash URL.
 *
 * ═══════════════════════════════════════════════════════════
 */

const ARTICLES = [

  // ─── FEATURED HERO ───────────────────────────────────────
  {
    id: "lisbon-dusk",
    featured: true,                       // ← Makes this the hero article
    category: "Places",
    title: "The unhurried streets of Lisbon at dusk",
    subtitle: "A city that teaches you to slow down simply by existing around you.",
    excerpt: "There is a particular light that only Lisbon possesses — golden, horizontal, and somehow both nostalgic and entirely present. I found it on a Tuesday, walking nowhere in particular.",
    author: "Sofia Laurent",
    date: "October 2024",
    location: "Lisbon, Portugal",
    readTime: "6 min",
    coverImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1400&q=80",
    coverCaption: "The rooftops of Alfama, facing the Tagus — late afternoon, October.",
    // ── BODY ───────────────────────────────────────────────
    // Use these tags in your text:
    //   <p>paragraph</p>
    //   <h2>section heading</h2>
    //   <pullquote>a highlighted quote</pullquote>
    //   <fullimage src="URL" caption="optional caption">
    body: `
      <p>There is a particular light that only Lisbon possesses. It arrives each evening without announcement — golden, horizontal, and somehow both nostalgic and entirely present. I found it on a Tuesday, walking nowhere in particular, in the old Alfama district where the streets are too narrow for cars and just wide enough for a person to feel briefly significant.</p>

      <p>I had been in the city for four days by then, long enough to stop trying to see everything. That is always the moment a city opens to you — when you stop asking it to perform and simply let it breathe beside you.</p>

      <h2>The hour before sunset</h2>

      <p>The miradouros — the city's great viewpoints — were filling with people by six o'clock. But the streets between them remained quiet, save for the occasional tram grinding uphill and the sound of fado drifting from somewhere I couldn't locate. Fado in Lisbon is like that: sourceless, ambient, everywhere and nowhere at once.</p>

      <pullquote>Lisbon doesn't rush you. It simply reminds you, gently, that there is no better place to be than exactly here.</pullquote>

      <p>I sat at a small café and ordered a glass of vinho verde that cost two euros and tasted like the country itself — sharp, mineral, alive. The owner brought it without ceremony and disappeared back inside. The table wobbled. The chair was too low. Everything was perfect.</p>

      <fullimage src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&q=80" caption="Tram 28 ascending through Graça, the oldest route in the city.">

      <h2>What the city keeps</h2>

      <p>Lisbon has survived an earthquake, a fire, and centuries of longing. The Portuguese have a word — saudade — that tries to name the feeling, though it resists translation. It is something between nostalgia and grief, between love and its absence. The city is built of it. You can feel it in the tiles, the blue azulejos on every façade, which are themselves a record of the world Portugal once touched and lost.</p>

      <p>I left at nine, when the light had finally gone and the streets were lit only by small yellow lamps that cast everything in amber. I had eaten half a pastry from a bakery that had no sign, had exchanged a smile with an old man walking a terrier, and had taken no photographs that felt worth keeping. It was one of the better days I can remember.</p>
    `
  },

  // ─── REGULAR ARTICLES ────────────────────────────────────
  {
    id: "kyoto-mornings",
    featured: false,
    category: "Places",
    title: "Mornings in Kyoto, before the crowds arrive",
    subtitle: "A city that belongs to those who arrive before eight.",
    excerpt: "The city reveals itself only to those willing to wake before it does. A temple, an empty path, the smell of cedar smoke.",
    author: "Sofia Laurent",
    date: "March 2024",
    location: "Kyoto, Japan",
    readTime: "8 min",
    coverImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1400&q=80",
    coverCaption: "Fushimi Inari, before sunrise. The gates seem to breathe differently in the dark.",
    body: `
      <p>The alarm went off at 5:15 and the hotel room was entirely dark. Outside, Kyoto was a city still deciding whether to become itself. I dressed quickly, in layers — the March mornings here carry a cold that feels older than weather — and walked out into streets that smelled of cedar, cold stone, and something I couldn't name. Japan at this hour is its own country.</p>

      <p>The path up to Fushimi Inari begins at a shrine gate and unfolds, improbably, into ten thousand more. The famous vermillion torii tunnels that by day are clogged with selfie sticks and tour groups were, at this hour, cathedral-quiet. My footsteps echoed. A fox watched from a low wall. The lanterns were still lit.</p>

      <pullquote>At this hour, the city doesn't perform for visitors. It simply exists, in the way old things exist — completely, and without trying.</pullquote>

      <p>This is the Kyoto that doesn't appear in photographs because no photograph can hold the quality of that specific silence, broken only by birds and the soft crunch of gravel underfoot. By seven, the first tourists had arrived. By eight, the gates belonged to everyone and therefore to no one. But for those two hours at dawn, they were mine — or rather, I was theirs.</p>

      <fullimage src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80" caption="A ryokan garden in Higashiyama, the moss still holding the night's moisture.">

      <p>I ate breakfast at a counter with eight seats, run by a man of perhaps seventy who made tofu soup and rice and pickles with the focused precision of someone who has done the same thing every day for forty years and found it, still, absorbing. We did not share a language. We shared a meal. It was enough — it was, in fact, more than enough.</p>
    `
  },

  {
    id: "istanbul-two-cities",
    featured: false,
    category: "Places",
    title: "Istanbul is two cities learning to be one",
    subtitle: "On the Bosphorus, between two continents, everything is possible and nothing is simple.",
    excerpt: "The Bosphorus does not divide so much as it holds, pulling two worlds into a single, shimmering conversation at the water's edge.",
    author: "Sofia Laurent",
    date: "September 2023",
    location: "Istanbul, Turkey",
    readTime: "9 min",
    coverImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1400&q=80",
    coverCaption: "The Bosphorus at dusk, from Üsküdar — the European side glowing opposite.",
    body: `
      <p>The ferry from Karaköy to Üsküdar takes twelve minutes. In those twelve minutes you cross from Europe to Asia, from the ancient city of Constantine to the quieter, older neighborhoods that still feel like a different country. The water is gray and fast. Seagulls follow the boat. A man is eating a simit, a sesame ring that costs almost nothing and tastes of the city itself.</p>

      <p>Istanbul is the only city in the world that spans two continents, and it carries this fact the way a person might carry a complicated family history — with pride, with occasional exhaustion, with a sense that it is simply who you are and there is no use explaining.</p>

      <pullquote>Every neighbourhood in Istanbul is a different century. Walk long enough and you'll have moved through five hundred years without noticing.</pullquote>

      <fullimage src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80" caption="The Blue Mosque at first light, when the call to prayer still hangs in the air.">

      <p>I spent an afternoon in the Grand Bazaar not buying anything, which I recommend as the best way to experience it. Without the pressure of purchase, the Bazaar becomes a city within a city — labyrinthine, loud, endlessly textured. The merchants called out, the spice stalls piled their colors in the half-dark, and somewhere above, the old vaulted ceilings held everything together as they have for six centuries.</p>

      <p>On my last evening I sat on a terrace in Beyoğlu with a glass of raki and watched the lights come on across the water, one by one, until the whole city was a reflection of itself in the dark Bosphorus below. Istanbul, in that moment, was not East or West. It was simply, completely, itself.</p>
    `
  },

  {
    id: "naples-pizza",
    featured: false,
    category: "Food",
    title: "Why Naples pizza can only ever be eaten in Naples",
    subtitle: "It has nothing to do with water or flour. It has everything to do with the man who made it.",
    excerpt: "Being specific about a place: what the city does to food, to mood, to the very act of eating.",
    author: "Sofia Laurent",
    date: "June 2024",
    location: "Naples, Italy",
    readTime: "4 min",
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80",
    coverCaption: "A margherita at L'Antica Pizzeria da Michele — the same since 1870.",
    body: `
      <p>People will tell you it is about the water. Or the flour, which is somehow different here — softer, more alive. They will tell you it is the wood-fired oven, which burns at 485 degrees and produces a char that cannot be replicated. All of this is true, and none of it is the point.</p>

      <p>The point is the man behind the counter at Da Michele on Via Cesare Sersale, who has been making margheritas and marinaras — only those two, nothing else — since before you were born. The point is the controlled chaos of the dining room, the shared tables, the indifference of the waiters to your sense of urgency.</p>

      <pullquote>Naples makes you wait. And then, when it finally arrives — slightly burnt on one edge, perfect everywhere else — you understand why.</pullquote>

      <p>I ate standing up, outside, because there was a two-hour wait inside and I did not have two hours. This turned out to be correct: eating it standing on a noisy street with nowhere to set down my drink, folding the slice in half the way Neapolitans do, was precisely the right way. Context is everything. Place is everything. The pizza knows where it is.</p>

      <fullimage src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&q=80" caption="Via dei Tribunali, the ancient decumano where half the city's best pizzerias are found.">

      <p>I have tried to explain this to friends who have not been. They nod politely. Some of them have tried to replicate it at home, with imported San Marzanos and a very hot oven. They always report that it was good, very good, perhaps the best pizza they'd ever made. But not the same. No, never the same.</p>
    `
  },

  {
    id: "marrakech-medina",
    featured: false,
    category: "Moments",
    title: "Lost in the Medina, found in a cup of mint tea",
    subtitle: "Being lost is its own kind of destination when the city is this beautiful.",
    excerpt: "The souks of Marrakech have a way of swallowing you whole, and giving you back — changed.",
    author: "Sofia Laurent",
    date: "February 2024",
    location: "Marrakech, Morocco",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1400&q=80",
    coverCaption: "The Djemaa el-Fna at dusk, before the storytellers set up their circles.",
    body: `
      <p>I lost my map within the first ten minutes, which was, in retrospect, the best thing that could have happened. The Medina of Marrakech is not a place that rewards navigation. It rewards surrender — the willingness to follow a smell, a sound, a color glimpsed around a corner, without any particular destination in mind.</p>

      <p>I followed a boy carrying a tray of bread on his head for two blocks before he turned and disappeared into a doorway. I followed the smell of cumin for longer. I followed the sound of hammering copper through three more turns until I arrived, unexpectedly, in a courtyard full of light where an old man sat drinking tea alone.</p>

      <pullquote>He poured without being asked. The tea was sweet enough to be dessert, hot enough to slow everything down. We sat in silence for a long time.</pullquote>

      <fullimage src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&q=80" caption="Inside the souks — leather, spice, and the particular amber light of covered markets.">

      <p>This is the thing about getting lost in a beautiful city: you stop trying to see it correctly and start simply seeing it. The difference is enormous. A city experienced through a map is a diagram. A city experienced through wandering is a story, and you are in it.</p>
    `
  },

];


// ═══════════════════════════════════════════════════════════
//  TEMPLATE — Copy this block to add a new article
// ═══════════════════════════════════════════════════════════
/*

  {
    id: "unique-id-no-spaces",       // e.g. "paris-november" — used in the URL
    featured: false,                  // true = hero. Only one at a time!
    category: "Places",               // "Places" | "Food" | "Moments"
    title: "Your article title",
    subtitle: "A short, elegant line that sits below the title.",
    excerpt: "2–3 sentences shown on the homepage card. Set the mood.",
    author: "Your Name",
    date: "Month Year",               // e.g. "March 2025"
    location: "City, Country",
    readTime: "5 min",
    coverImage: "https://...",         // Full URL to a large image
    coverCaption: "Image caption.",
    body: `
      <p>Your first paragraph. It will have a drop cap automatically.</p>

      <h2>Section heading</h2>

      <p>More paragraphs...</p>

      <pullquote>A memorable line or quote from your writing.</pullquote>

      <p>Continue the story...</p>

      <fullimage src="https://..." caption="Optional caption for this image.">

      <p>Final thoughts.</p>
    `
  },

*/
