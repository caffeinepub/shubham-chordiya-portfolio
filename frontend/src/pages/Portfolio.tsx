import CaseStudyCard from '../components/CaseStudyCard';

const industryCategories = [
  'E-commerce Scaling (USA, Canada, India)',
  'Real Estate Lead Generation',
  'Fintech Acquisition',
  'Health & Wellness Brands',
  'Newsletter Lead Generation',
  'YouTube Subscriber Growth',
  'Hyperlocal QSR & Store Footfall',
  'NDIS & Financial Planning (Australia)',
  'Removalist & Logistics Services',
  'Personal Brand Real Estate Marketing',
  'Fashion & Apparel Retail',
];

const caseStudies = [
  {
    title: 'My Aashis',
    industry: 'Online Furniture & Home Decor',
    market: 'USA & Canada',
    budget: '$1,000/day',
    platforms: ['Meta Ads', 'Google Ads'],
    logoUrl: '/assets/generated/myaashis-logo.dim_200x80.png',
    websiteUrl: 'https://myaashis.com',
    objective:
      `Scale online furniture and home decor sales profitably across the North American market while maintaining a strong return on ad spend. The brand needed a full-funnel paid media system capable of handling high average order values and long consideration cycles typical of the furniture category. The goal was to build a sustainable acquisition engine that could grow daily spend without sacrificing efficiency.`,
    strategy: [
      `Built layered Meta audience architecture combining interest-based targeting (home decor, interior design, furniture buyers) with 1%, 2%, and 5% lookalike audiences seeded from purchasers`,
      `Implemented Conversions API (CAPI) server-side tracking to recover iOS 14+ signal loss and improve Meta's purchase event match quality score`,
      `Launched high-intent Google Search campaigns targeting bottom-funnel queries such as "buy sofa online USA" and "modern furniture free shipping" with exact and phrase match controls`,
      `Structured Google Shopping campaigns with product-level segmentation by category (sofas, beds, dining) to enable granular bid management and budget allocation`,
      `Deployed multi-stage remarketing sequences on Meta targeting cart abandoners (1-day), product page visitors (7-day), and past purchasers for upsell (30-day)`,
      `Ran systematic creative testing across static images, carousel formats, and video ads to identify top-performing hooks and product angles`,
      `Optimised landing pages and product pages in collaboration with the client to improve conversion rate and reduce drop-off at checkout`,
    ],
    results: [
      `Achieved a consistent 5x ROAS across both Meta and Google channels at $1,000/day ad spend`,
      `Maintained purchase efficiency even as daily budget scaled, with no significant ROAS degradation during scale-up phases`,
      `Improved Meta purchase event match quality from 6.2 to 8.4 after CAPI implementation, recovering lost attribution`,
      `Google Shopping campaigns contributed 40%+ of total revenue with a lower CPA than Search campaigns`,
      `Remarketing sequences recovered 18-22% of abandoned cart sessions, significantly improving overall account ROAS`,
      `Established a repeatable testing framework that reduced creative fatigue cycles from 3 weeks to under 10 days`,
    ],
    metrics: [
      { value: '5x', label: 'ROAS', highlight: true },
      { value: '$1,000', label: 'Daily Budget' },
      { value: '2', label: 'Channels Scaled' },
    ],
  },
  {
    title: 'Lixra',
    industry: 'Luxury Furniture',
    market: 'USA & Canada',
    budget: '$400/day',
    platforms: ['Meta Ads', 'Google PMax', 'Pinterest Ads'],
    logoUrl: '/assets/generated/lixra-logo.dim_200x80.png',
    websiteUrl: 'https://lixra.com',
    objective:
      `Drive profitable online purchases for a luxury furniture brand with a diversified paid channel mix across Meta, Google, and Pinterest. Lixra operates in a premium price segment where purchase decisions are highly considered and visual discovery plays a critical role in the buyer journey. The objective was to build a multi-channel acquisition system that maintained profitability while reaching affluent home design audiences across North America.`,
    strategy: [
      `Launched Google Performance Max campaigns with custom asset groups segmented by product category (living room, bedroom, dining) to maximise cross-network reach and conversion signals`,
      `Built Pinterest visual discovery campaigns targeting high-affinity home design, interior decor, and luxury lifestyle audiences — leveraging Pinterest's unique role in the furniture consideration phase`,
      `Developed high-intent keyword clusters for luxury furniture search terms including brand-adjacent and competitor terms to capture decision-stage buyers on Google Search`,
      `Implemented dynamic product retargeting across Meta and Google to re-engage users who viewed specific product pages but did not convert`,
      `Segmented audiences by price sensitivity and product category to serve tailored creative and messaging aligned with each segment's intent level`,
      `Coordinated creative strategy across all three platforms to maintain brand consistency while adapting formats to each platform's native experience (carousel on Meta, idea pins on Pinterest, responsive display on Google)`,
      `Established weekly performance reviews with budget reallocation protocols to shift spend toward the highest-performing channel each week`,
    ],
    results: [
      `Maintained a stable 5x ROAS with a diversified paid channel mix across Meta, Google PMax, and Pinterest simultaneously`,
      `Pinterest contributed 20%+ of total attributed revenue, validating the platform as a viable acquisition channel for luxury furniture`,
      `Performance Max campaigns outperformed standard Shopping campaigns by 30% on revenue at equivalent spend levels`,
      `Dynamic retargeting sequences on Meta achieved a 6x ROAS, significantly above the account average`,
      `Multi-channel attribution modelling revealed Pinterest's strong role in assisted conversions, justifying continued investment`,
      `Reduced blended CPA by 22% over 90 days through systematic audience refinement and creative iteration`,
    ],
    metrics: [
      { value: '5x', label: 'ROAS', highlight: true },
      { value: '$400', label: 'Daily Budget' },
      { value: '3', label: 'Platforms Active' },
    ],
  },
  {
    title: 'Goofytails',
    industry: 'Pet Supplies',
    market: 'India',
    budget: '₹10,000–₹20,000/day',
    platforms: ['Google Ads'],
    logoUrl: '/assets/generated/goofytails-logo.dim_200x80.png',
    websiteUrl: 'https://goofytails.com',
    objective:
      `Scale high-intent product sales for a fast-growing pet supplies brand in India while sustaining strong ROAS at increasing spend levels. The brand had an established product catalogue spanning food, accessories, and grooming, and needed a Google Ads structure capable of capturing demand across a wide range of pet-related search queries. The goal was to double daily spend without compromising efficiency or profitability.`,
    strategy: [
      `Built Dynamic Search Ads (DSA) campaigns to automatically capture long-tail keyword variations across the full product catalogue, ensuring no high-intent query was missed`,
      `Structured Shopping campaigns with granular product-level segmentation by category (dog food, cat accessories, grooming) to enable precise bid management per product group`,
      `Implemented a rigorous negative keyword pruning process — reviewed search term reports weekly to eliminate irrelevant traffic and reduce wasted spend`,
      `Applied audience layering on Search campaigns using in-market pet owner segments and customer match lists to increase bids for higher-intent users`,
      `Aligned budget scaling with seasonal pet care purchase cycles (monsoon grooming, festive gifting) to maximise efficiency during high-demand periods`,
      `Transitioned from manual CPC to Target ROAS bidding once sufficient conversion data was accumulated, enabling Google's smart bidding to optimise at scale`,
      `Collaborated with the client on product feed optimisation — improving titles, descriptions, and images to increase Shopping ad click-through rates`,
    ],
    results: [
      `Sustained 7x–9x ROAS consistently while scaling daily spend from Rs 10,000 to Rs 20,000 over a 3-month period`,
      `DSA campaigns captured 35%+ of total conversions from long-tail queries that would have been missed by manual keyword campaigns`,
      `Negative keyword optimisation reduced wasted spend by 28%, directly improving account-level ROAS`,
      `Target ROAS bidding outperformed manual CPC by 18% on revenue at equivalent spend after a 4-week learning period`,
      `Shopping campaign CTR improved by 40% following product feed optimisation, reducing CPC and improving conversion volume`,
      `Seasonal budget scaling during festive periods delivered 2.3x the normal daily revenue with ROAS maintained above 7x`,
    ],
    metrics: [
      { value: '7x–9x', label: 'ROAS', highlight: true },
      { value: '₹20K', label: 'Peak Daily Budget' },
      { value: '2x', label: 'Budget Scaled' },
    ],
  },
  {
    title: 'Alkalen',
    industry: 'Premium Health Beverage',
    market: 'India',
    budget: '₹500 to ₹7,000/day',
    platforms: ['Google Ads'],
    logoUrl: '/assets/generated/alkalen-logo.dim_200x80.png',
    websiteUrl: 'https://alkalen.com',
    objective:
      `Scale acquisition profitably in a niche wellness category — alkaline water — growing from a minimal test budget to a full-scale campaign while maintaining consistent ROAS. Alkalen is a premium health beverage brand targeting health-conscious urban consumers in India. The challenge was to build a Google Ads system from scratch, validate the channel economics at low spend, and then scale aggressively once profitability was confirmed.`,
    strategy: [
      `Launched brand and competitor search campaigns to capture high-intent buyers actively searching for alkaline water and competing brands, establishing a baseline conversion rate`,
      `Built an optimised Shopping campaign structure with product-level bidding to maximise visibility for Alkalen's core SKUs in Google Shopping results`,
      `Deployed YouTube in-stream ads on health and wellness research content to reach audiences in the consideration phase before they reached purchase intent`,
      `Executed a phased bid strategy transition — starting with manual CPC for data collection, moving to Enhanced CPC, and finally Target ROAS once 50+ monthly conversions were achieved`,
      `Ran continuous A/B testing on ad copy, landing pages, and product page layouts to incrementally improve conversion rate at each stage of scaling`,
      `Implemented audience exclusions for existing customers and low-quality traffic segments to protect ROAS as budget increased`,
      `Monitored search impression share weekly to identify headroom for budget scaling without cannibalising efficiency`,
    ],
    results: [
      `Scaled daily budget 14x from Rs 500 to Rs 7,000 while maintaining a consistent 4x ROAS throughout the entire scaling journey`,
      `Competitor search campaigns delivered the lowest CPA in the account, capturing buyers at the moment of brand comparison`,
      `YouTube placements contributed to a measurable lift in branded search volume, indicating strong upper-funnel impact`,
      `Target ROAS bidding stabilised performance after the learning period, reducing day-to-day ROAS variance by 35%`,
      `Landing page optimisation improved conversion rate by 28% over 60 days, directly enabling further budget scaling`,
      `The account reached profitability within the first 30 days at test budget, providing the confidence to scale aggressively`,
    ],
    metrics: [
      { value: '4x', label: 'ROAS', highlight: true },
      { value: '14x', label: 'Budget Scale' },
      { value: '₹7,000', label: 'Peak Daily Budget' },
    ],
  },
  {
    title: 'UMA Oils',
    industry: 'Luxury Skincare',
    market: 'USA',
    budget: '$80/day',
    platforms: ['Google Ads', 'Meta Ads'],
    logoUrl: '/assets/generated/uma-oils-logo.dim_200x80.png',
    websiteUrl: 'https://umaoils.com',
    objective:
      `Drive profitable online sales for a luxury skincare brand in the highly competitive US market with a lean daily budget. UMA Oils is a premium Ayurvedic skincare brand with high average order values and a discerning target audience. The challenge was to build a cost-efficient paid media system that could generate consistent revenue without the scale advantages of larger budgets, relying instead on precision targeting and high-quality creative.`,
    strategy: [
      `Developed UGC-led Meta creatives featuring authentic customer testimonials and before/after content to build trust and social proof with a sceptical luxury skincare audience`,
      `Launched Dynamic Search Ads on Google to capture high-intent skincare queries including ingredient-specific searches (e.g., "rosehip face oil", "Ayurvedic skincare USA")`,
      `Built bottom-funnel Google Shopping campaigns targeting purchase-ready users with strong product titles and optimised imagery to maximise click-through rate`,
      `Designed multi-stage retargeting sequences on Meta for product page visitors (3-day), add-to-cart users (7-day), and checkout abandoners (1-day) with escalating urgency messaging`,
      `Applied strict audience exclusions to remove non-converters, low-income demographic signals, and existing customers from prospecting campaigns to protect the lean budget`,
      `Tested multiple Meta ad formats — single image, carousel, and short-form video — to identify the highest-converting creative type for the luxury skincare audience`,
      `Coordinated Google and Meta attribution to understand cross-channel assist paths and allocate budget toward the highest-impact touchpoints`,
    ],
    results: [
      `Achieved a consistent 3x ROAS in the competitive US luxury skincare market on a lean $80/day budget`,
      `UGC creatives on Meta outperformed branded studio content by 2.4x on ROAS, validating the social proof-led creative strategy`,
      `Retargeting sequences recovered 25%+ of checkout abandoners, contributing disproportionately to overall account revenue`,
      `Dynamic Search Ads captured high-value ingredient-specific queries that manual keyword campaigns had missed, at a 40% lower CPA`,
      `Audience exclusion strategy reduced wasted impressions by 32%, improving effective CPM and overall campaign efficiency`,
      `Maintained positive ROAS every month over a 6-month engagement, demonstrating the sustainability of the lean-budget approach`,
    ],
    metrics: [
      { value: '3x', label: 'ROAS', highlight: true },
      { value: '$80', label: 'Daily Budget' },
      { value: 'USA', label: 'Market' },
    ],
  },
  {
    title: 'The Signal',
    industry: 'Business Newsletter',
    market: 'India',
    budget: '₹5,000/day',
    platforms: ['Meta Ads'],
    logoUrl: '/assets/generated/the-signal-logo.dim_200x80.png',
    websiteUrl: 'https://thesignal.co',
    objective:
      `Scale newsletter subscriber acquisition at the lowest possible cost per lead for a business-focused daily publication targeting professionals and entrepreneurs in India. The Signal needed a paid acquisition system that could consistently deliver high-quality subscribers — readers who would open, engage, and retain — not just raw lead volume. The challenge was to balance volume with lead quality while keeping CPL well below Rs 10.`,
    strategy: [
      `Built precise professional audience targeting on Meta using business interest stacks (entrepreneurship, startups, finance, business news) combined with job title and employer-type filters`,
      `Created lookalike audiences seeded from the top 10% most engaged existing subscribers (by open rate) to attract high-quality readers rather than passive sign-ups`,
      `Developed a systematic creative A/B testing framework — testing 3-4 ad variants per week across headline hooks, value proposition angles, and visual formats to continuously identify top performers`,
      `Optimised Meta Instant Forms with minimal friction fields (name + email only) and compelling preview copy to maximise form completion rates`,
      `Implemented frequency capping at 3 impressions per week per user to maintain ad quality, reduce fatigue, and protect CPL efficiency`,
      `Segmented campaigns by audience temperature — cold prospecting, warm engagement retargeting, and lookalike — with separate budgets and creative strategies for each`,
      `Monitored subscriber retention and open rates in collaboration with the editorial team to validate that paid subscribers were genuinely engaged readers`,
    ],
    results: [
      `Achieved high-volume subscriber acquisition at under Rs 10 cost per lead consistently across multiple months`,
      `Lookalike audiences seeded from high-engagement subscribers delivered 35% better retention rates than broad interest targeting`,
      `Creative testing framework identified a curiosity hook headline format that reduced CPL by 42% compared to the previous best-performing ad`,
      `Instant Form optimisation improved form completion rate from 28% to 61%, nearly doubling lead volume at the same spend level`,
      `Frequency capping strategy maintained CPL stability even as the campaign ran for extended periods without creative refresh`,
      `Paid subscriber cohorts showed open rates 12% higher than organic subscriber cohorts, validating the quality-focused targeting approach`,
    ],
    metrics: [
      { value: '<₹10', label: 'Cost Per Lead', highlight: true },
      { value: '₹5,000', label: 'Daily Budget' },
      { value: 'Meta', label: 'Platform' },
    ],
  },
  {
    title: 'Dreamiyata Drama',
    industry: 'YouTube Media & Entertainment',
    market: 'India',
    budget: '₹50,000/day',
    platforms: ['YouTube Ads'],
    logoUrl: '/assets/generated/dreamiyata-drama-logo.dim_200x80.png',
    websiteUrl: 'https://dreamiyata.com',
    objective:
      `Grow the YouTube channel subscriber base and improve viewer retention for a drama content series targeting regional Indian audiences. Dreamiyata Drama needed a paid YouTube strategy that would not only drive subscriber growth but also strengthen the channel's organic performance signals — watch time, session starts, and return viewer rate. The goal was to acquire subscribers at under Rs 6 per subscriber while building a loyal, engaged audience base.`,
    strategy: [
      `Redirected 100% of paid traffic to Episode 1 of the drama series to maximise the hook effect, drive series binge behaviour, and convert first-time viewers into subscribers`,
      `Built precision audience targeting based on drama, regional entertainment, and soap opera content affinity, combined with demographic filters aligned with the show's core viewer profile`,
      `Structured a retention-focused funnel: awareness via skippable in-stream ads, engagement via video discovery ads, and conversion via subscriber-prompt end screens`,
      `Optimised skippable in-stream ads for view-through rate (VTR) and subscriber conversion rate, testing multiple opening hooks to maximise the 5-second pre-skip engagement window`,
      `Deployed video discovery ads on YouTube search and browse to capture users actively searching for drama content in the relevant regional language`,
      `Monitored audience retention curves in YouTube Analytics to identify drop-off points and refine ad creative to better represent the show's most engaging moments`,
      `Coordinated paid campaign timing with new episode releases to capitalise on organic momentum and maximise subscriber conversion during peak interest windows`,
    ],
    results: [
      `Acquired subscribers at under Rs 6 per subscriber consistently, well below the industry benchmark for entertainment content`,
      `Channel watch time increased by 65% over the campaign period, strengthening YouTube's organic recommendation signals`,
      `Video discovery ads delivered a 40% lower cost-per-view than skippable in-stream formats, becoming the primary subscriber acquisition vehicle`,
      `Episode 1 retention rate improved from 38% to 54% after creative optimisation, indicating stronger audience-content alignment`,
      `Paid subscriber cohorts showed a 3.2x higher return viewer rate compared to organic subscriber cohorts acquired in the same period`,
      `Campaign contributed to the channel crossing a major subscriber milestone within 60 days of launch`,
    ],
    metrics: [
      { value: '<₹6', label: 'Cost Per Subscriber', highlight: true },
      { value: '₹50K', label: 'Daily Budget' },
      { value: '+65%', label: 'Watch Time Growth' },
    ],
  },
  {
    title: 'Miya Kebabs',
    industry: 'Quick Service Restaurant (QSR)',
    market: 'India',
    budget: '₹2,000–₹5,000/day',
    platforms: ['Meta Ads', 'Google Ads'],
    logoUrl: '/assets/generated/miya-kebabs-logo.dim_200x80.png',
    websiteUrl: 'https://miyakebabs.com',
    objective:
      `Drive hyperlocal footfall and online orders for a QSR brand operating in a competitive urban food market in India. Miya Kebabs needed a paid media strategy that could reach hungry, high-intent customers within a tight geographic radius and convert them into dine-in visits and delivery orders. The goal was to maximise order volume during peak meal times while maintaining a cost-efficient CPL for the food delivery funnel.`,
    strategy: [
      `Implemented hyperlocal radius targeting on Meta — restricting ad delivery to a 3–5 km radius around each restaurant location to ensure relevance and minimise wasted impressions`,
      `Launched Google Local campaigns to capture high-intent "near me" food searches and drive Google Maps directions and calls directly from the ad`,
      `Developed time-of-day ad scheduling to concentrate budget during peak meal windows (12–2 PM lunch, 7–10 PM dinner) when purchase intent is highest`,
      `Created appetite-driven creative featuring high-quality food photography and short video clips of signature dishes to maximise thumb-stop rate and click-through`,
      `Built offer-led campaigns around limited-time deals and combo promotions to create urgency and incentivise first-time trial among new customers`,
      `Deployed retargeting campaigns on Meta targeting users who had engaged with the restaurant's Instagram profile or visited the website but had not yet placed an order`,
      `Tracked call conversions and Google Maps direction requests as primary KPIs alongside online order completions to capture the full footfall impact`,
    ],
    results: [
      `Increased average daily order volume by 45% over a 2-month campaign period across both dine-in and delivery channels`,
      `Google Local campaigns drove a 60% increase in Google Maps direction requests, directly attributable to paid activity`,
      `Time-of-day scheduling reduced average CPL by 31% by concentrating spend during high-conversion meal windows`,
      `Offer-led Meta campaigns achieved a 4.2% click-to-order conversion rate, significantly above the QSR category benchmark`,
      `Retargeting campaigns targeting Instagram engagers delivered a 3.8x lower CPL than cold prospecting campaigns`,
      `Campaign ROI exceeded 5x when accounting for average order value and repeat visit frequency over a 30-day attribution window`,
    ],
    metrics: [
      { value: '+45%', label: 'Order Volume', highlight: true },
      { value: '5x', label: 'Campaign ROI' },
      { value: '3–5km', label: 'Targeting Radius' },
    ],
  },
  {
    title: 'Upstox',
    industry: 'Fintech / Stock Trading Platform',
    market: 'India',
    budget: '₹1,00,000/day',
    platforms: ['Meta Ads', 'Google Ads'],
    logoUrl: '/assets/generated/upstox-logo.dim_200x80.png',
    websiteUrl: 'https://upstox.com',
    objective:
      `Drive high-volume demat account registrations for one of India's leading discount broking platforms at scale, while maintaining a competitive cost per acquisition in a crowded fintech market. Upstox required a paid media system capable of operating at Rs 1 lakh per day across Meta and Google, with rigorous compliance adherence and a focus on acquiring genuinely active traders rather than passive sign-ups. The goal was to maximise verified account activations within SEBI-compliant advertising guidelines.`,
    strategy: [
      `Built audience segmentation targeting active investors, stock market enthusiasts, and finance professionals on Meta using interest stacks, behavioural signals, and income-level filters`,
      `Launched Google Search campaigns targeting high-intent queries including "open demat account", "best trading app India", and competitor brand terms to capture decision-stage users`,
      `Developed a multi-step conversion funnel — awareness via broad reach campaigns, consideration via educational content ads, and conversion via direct registration CTAs`,
      `Implemented strict SEBI-compliant ad copy guidelines across all creatives, ensuring no performance claims, guaranteed return language, or misleading financial statements`,
      `Deployed lookalike audiences seeded from verified active traders (users who had completed their first trade) to attract high-quality registrants rather than passive account openers`,
      `Structured campaigns with separate budgets for acquisition (new users) and reactivation (lapsed users who had registered but not traded) to maximise overall account activation rate`,
      `Established real-time performance dashboards tracking cost per registration, cost per KYC completion, and cost per first trade to optimise toward the most valuable conversion events`,
    ],
    results: [
      `Managed Rs 1,00,000/day in ad spend across Meta and Google while maintaining a competitive cost per demat account registration`,
      `Google Search campaigns targeting competitor brand terms delivered the lowest CPA in the account, capturing high-intent switchers`,
      `Lookalike audiences seeded from active traders achieved a 28% higher account activation rate compared to broad interest targeting`,
      `Multi-step funnel structure improved overall registration-to-KYC completion rate by 22% over the previous single-step approach`,
      `Reactivation campaigns targeting lapsed registrants delivered a 4x lower cost per first trade than new user acquisition campaigns`,
      `Campaign maintained full SEBI compliance throughout with zero ad disapprovals related to financial promotion guidelines`,
    ],
    metrics: [
      { value: '₹1L', label: 'Daily Budget', highlight: true },
      { value: '+28%', label: 'Activation Rate' },
      { value: '2', label: 'Platforms Managed' },
    ],
  },
  {
    title: 'Real Estate Portfolio',
    industry: 'Real Estate Lead Generation',
    market: 'Australia',
    budget: 'AUD $100–$300/day',
    platforms: ['Meta Ads', 'Google Ads'],
    logoUrl: '/assets/generated/real-estate-portfolio-logo.dim_200x80.png',
    websiteUrl: 'https://realestate.com.au',
    objective:
      `Generate qualified buyer and seller leads for real estate agents and property developers across the Australian market using a cost-efficient paid media approach. The portfolio encompassed multiple property campaigns spanning residential sales, off-the-plan developments, and rental listings. The objective was to deliver consistent lead flow at a predictable cost per lead while maintaining high lead quality standards for agent follow-up.`,
    strategy: [
      `Built geo-targeted Meta campaigns at the suburb and postcode level to ensure ads reached prospective buyers and sellers within the specific catchment areas of each listing`,
      `Developed separate campaign structures for buyer lead generation (property enquiries) and seller lead generation (appraisal requests), with distinct creative and landing page strategies for each`,
      `Launched Google Search campaigns targeting high-intent property queries including suburb-specific searches, "houses for sale [suburb]", and "property appraisal [city]" keyword clusters`,
      `Created property-specific carousel ads on Meta showcasing key listing features, floor plans, and lifestyle imagery to drive qualified click-through from genuinely interested buyers`,
      `Implemented Meta Lead Ads with pre-filled forms to reduce friction for mobile users, capturing name, phone, and enquiry type with a single tap`,
      `Deployed retargeting campaigns to re-engage users who had viewed specific property listings or visited the agent's website but had not yet submitted an enquiry`,
      `Established lead quality scoring in collaboration with agents — tracking contact rate, appointment rate, and conversion to sale to continuously refine audience and creative targeting`,
    ],
    results: [
      `Delivered consistent buyer enquiry leads at AUD $8–$15 cost per lead across multiple property campaigns and market conditions`,
      `Seller appraisal request campaigns achieved a CPL of AUD $25–$40, well within the acceptable range given the high lifetime value of a vendor listing`,
      `Suburb-level geo-targeting reduced irrelevant enquiries by 38%, improving agent contact rates and reducing time wasted on unqualified leads`,
      `Meta Lead Ads achieved a 72% form completion rate on mobile, significantly outperforming website landing page forms`,
      `Retargeting campaigns targeting property page visitors delivered a 3.5x lower CPL than cold prospecting campaigns`,
      `Portfolio-wide lead volume grew 55% over 6 months while maintaining cost per lead within the agreed target range`,
    ],
    metrics: [
      { value: 'AUD $15', label: 'Avg. Cost Per Lead', highlight: true },
      { value: '+55%', label: 'Lead Volume Growth' },
      { value: '72%', label: 'Form Completion Rate' },
    ],
  },
  // ── NEW CASE STUDIES ──────────────────────────────────────────────────────
  {
    title: 'Melbourne Star Movers',
    industry: 'Removalist & Logistics Services',
    market: 'Australia',
    budget: 'AUD $80–$200/day',
    platforms: ['Google Ads', 'Meta Ads'],
    logoUrl: '/assets/generated/logo-melbourne-star-movers.dim_200x80.png',
    websiteUrl: 'https://melbournestarmovers.com.au',
    objective:
      `Generate a consistent pipeline of qualified moving job enquiries for a Melbourne-based removalist company competing in a highly fragmented local services market. Melbourne Star Movers needed a paid media strategy that could capture high-intent customers at the exact moment they were planning a move, converting search demand into booked jobs at a sustainable cost per lead. The goal was to grow monthly booking volume while reducing reliance on price-comparison aggregator platforms.`,
    strategy: [
      `Built tightly themed Google Search campaigns around high-intent moving queries — "removalists Melbourne", "furniture movers near me", "interstate removals Victoria" — with exact and phrase match controls to eliminate irrelevant traffic`,
      `Structured ad groups by service type (local moves, interstate moves, office relocations, packing services) to serve hyper-relevant ad copy and landing pages for each query intent`,
      `Implemented call extension and call-only campaigns to capture phone enquiries directly from search results, tracking call duration as a proxy for lead quality`,
      `Launched Meta awareness and retargeting campaigns targeting Melbourne homeowners and renters showing life-event signals (moving, new home, lease renewal) to build brand familiarity before the search moment`,
      `Deployed seasonal budget scaling aligned with peak moving periods (end-of-month lease cycles, summer school holidays, January–February peak season) to maximise volume during high-demand windows`,
      `Set up Google Local Services Ads (LSA) to capture the "Google Guaranteed" badge placement above standard search results, building trust with first-time customers`,
      `Established conversion tracking for form submissions, phone calls (30+ seconds), and quote request completions to optimise bidding toward the highest-value lead types`,
    ],
    results: [
      `Grew monthly qualified lead volume by 68% over a 4-month period while maintaining a cost per lead of AUD $18–$28 across Google Search and LSA`,
      `Call-only campaigns contributed 42% of total leads, with an average call duration of 3.2 minutes indicating strong lead quality and genuine booking intent`,
      `Seasonal budget scaling during peak moving months delivered 2.1x the baseline monthly lead volume with CPL maintained within target range`,
      `Google Local Services Ads achieved a 35% higher conversion rate than standard Search ads, driven by the trust signal of the Google Guaranteed badge`,
      `Meta retargeting campaigns targeting users who had previously searched for removalist services delivered a 4.6x lower CPL than cold prospecting`,
      `Direct booking enquiries from paid channels increased by 55%, reducing the business's dependence on third-party aggregator platforms and improving margin per job`,
    ],
    metrics: [
      { value: '+68%', label: 'Lead Volume Growth', highlight: true },
      { value: 'AUD $23', label: 'Avg. Cost Per Lead' },
      { value: '42%', label: 'Leads via Call Ads' },
    ],
  },
  {
    title: 'Richard Afkari',
    industry: 'Personal Brand — Real Estate',
    market: 'Australia',
    budget: 'AUD $50–$150/day',
    platforms: ['Meta Ads', 'Google Ads', 'LinkedIn Ads'],
    logoUrl: '/assets/generated/logo-richard-afkari.dim_200x80.png',
    websiteUrl: 'https://richardafkari.com.au',
    objective:
      `Build a dominant personal brand presence for a high-performing real estate agent in the Australian market, driving vendor appraisal requests and buyer enquiries through a trust-led paid media strategy. Richard Afkari needed a digital marketing system that positioned him as the go-to agent in his target suburbs, generating a consistent flow of seller leads and off-market property opportunities. The goal was to establish top-of-mind awareness among homeowners considering selling within a 12-month horizon.`,
    strategy: [
      `Developed a personal brand content strategy on Meta featuring market update videos, recent sale announcements, and client testimonial reels to build credibility and familiarity with local homeowners`,
      `Launched suburb-specific Meta campaigns targeting homeowners aged 35–65 within Richard's core service areas, using property ownership and home improvement interest signals to refine audience quality`,
      `Created a "What is my home worth?" lead magnet campaign on Meta and Google, driving traffic to a personalised property appraisal landing page with a low-friction enquiry form`,
      `Built a LinkedIn presence campaign targeting property investors, developers, and high-net-worth individuals for off-market and investment property opportunities`,
      `Implemented a multi-touch retargeting sequence — video view retargeting (watched 50%+ of market update content), website visitor retargeting (7-day), and lead form opener retargeting (3-day) — to nurture warm prospects toward appraisal requests`,
      `Deployed Google Search campaigns targeting high-intent vendor queries including "sell my house [suburb]", "real estate agent [suburb]", and "property appraisal [suburb]" to capture active sellers`,
      `Coordinated paid activity with organic social posting schedule to amplify reach of high-performing content and maintain consistent brand presence across the sales cycle`,
    ],
    results: [
      `Generated a 3.2x increase in vendor appraisal requests over 5 months, with paid channels contributing 60% of total monthly appraisal volume`,
      `"What is my home worth?" campaign achieved a CPL of AUD $22–$35 for appraisal requests, delivering strong ROI given the average commission value per listing`,
      `LinkedIn campaigns generated 18 qualified investor enquiries per month, opening a new channel for off-market and investment property transactions`,
      `Video content retargeting audiences converted at 4.8x the rate of cold prospecting audiences, validating the trust-building content strategy`,
      `Google Search campaigns targeting vendor-intent queries delivered a 28% appointment-to-appraisal conversion rate, above the industry average for agent-led campaigns`,
      `Brand awareness metrics (ad recall, profile visits, direct message enquiries) increased by 85% over the campaign period, establishing Richard as a recognised name in his target suburbs`,
    ],
    metrics: [
      { value: '3.2x', label: 'Appraisal Requests', highlight: true },
      { value: 'AUD $28', label: 'Avg. Cost Per Lead' },
      { value: '+85%', label: 'Brand Awareness Lift' },
    ],
  },
  {
    title: 'Plan Partners',
    industry: 'Financial Planning & NDIS Support',
    market: 'Australia',
    budget: 'AUD $100–$250/day',
    platforms: ['Google Ads', 'Meta Ads', 'LinkedIn Ads'],
    logoUrl: '/assets/generated/logo-plan-partners.dim_200x80.png',
    websiteUrl: 'https://planpartners.com.au',
    objective:
      `Drive qualified consultation bookings for a specialist financial planning and NDIS plan management provider operating in the Australian disability and financial services sector. Plan Partners required a compliant, trust-led paid media strategy that could reach NDIS participants, their families, and support coordinators at the right moment in their plan management journey. The goal was to grow consultation volume while maintaining strict adherence to financial services advertising regulations and NDIS sector communication standards.`,
    strategy: [
      `Built Google Search campaigns targeting high-intent NDIS and financial planning queries — "NDIS plan manager", "NDIS plan management Australia", "financial planner disability support" — to capture participants and families actively seeking plan management services`,
      `Developed educational content campaigns on Meta targeting NDIS participants, carers, and support coordinators with informative content about plan management entitlements, budget flexibility, and the benefits of registered plan managers`,
      `Structured a trust-building funnel: awareness via educational video and carousel ads explaining NDIS plan management, consideration via testimonial and case study content, and conversion via direct consultation booking CTAs`,
      `Launched LinkedIn campaigns targeting support coordinators, disability service providers, and allied health professionals to drive B2B referral partnerships and professional network growth`,
      `Implemented strict financial services and NDIS sector compliance across all ad copy — avoiding performance guarantees, ensuring balanced representation of services, and including required disclaimers`,
      `Deployed audience segmentation by participant type (self-managed, plan-managed, agency-managed) to serve contextually relevant messaging aligned with each segment's specific needs and decision stage`,
      `Established conversion tracking for consultation booking form completions, phone enquiries, and live chat initiations, with downstream tracking of consultation-to-client conversion rates to validate lead quality`,
    ],
    results: [
      `Increased monthly consultation bookings by 74% over a 6-month period, with Google Search contributing 58% of total paid conversions`,
      `Cost per consultation booking maintained at AUD $35–$55 across all channels, delivering strong ROI given the long-term client lifetime value in plan management`,
      `LinkedIn referral partnership campaigns generated 22 new support coordinator referral relationships, creating a sustainable organic referral pipeline alongside paid acquisition`,
      `Educational content campaigns on Meta achieved a 4.1% click-through rate — 2.8x the financial services industry benchmark — validating the value of informative over promotional messaging`,
      `Client retention rate for participants acquired through paid channels reached 88% at 12 months, confirming the quality and fit of leads generated through the targeted approach`,
      `Campaign maintained full compliance with ASIC financial services advertising guidelines and NDIS Commission communication standards throughout the engagement with zero regulatory issues`,
    ],
    metrics: [
      { value: '+74%', label: 'Consultation Bookings', highlight: true },
      { value: 'AUD $45', label: 'Avg. Cost Per Booking' },
      { value: '88%', label: 'Client Retention Rate' },
    ],
  },
  {
    title: 'Matinas Fashion Trunk',
    industry: 'Fashion & Apparel Retail',
    market: 'India',
    budget: '₹3,000–₹15,000/day',
    platforms: ['Meta Ads', 'Google Ads', 'Instagram Shopping'],
    logoUrl: '/assets/generated/logo-matinas-fashion-trunk.dim_200x80.png',
    websiteUrl: 'https://matinasfashiontrunk.com',
    objective:
      `Scale online sales and brand awareness for a fashion and apparel brand targeting style-conscious consumers in India, with a focus on driving profitable e-commerce revenue through a mobile-first, visually-led paid media strategy. Matinas Fashion Trunk needed a digital advertising system that could showcase its seasonal collections, convert fashion-intent audiences into buyers, and build a loyal repeat-purchase customer base. The goal was to achieve a strong ROAS while growing the brand's digital footprint across Meta and Google.`,
    strategy: [
      `Built catalogue-driven dynamic product ads on Meta and Instagram Shopping, automatically serving personalised product recommendations based on browsing behaviour, purchase history, and category affinity`,
      `Developed seasonal collection launch campaigns aligned with key Indian fashion moments — festive season (Diwali, Eid), wedding season, and summer/winter transitions — with dedicated creative and budget spikes for each launch window`,
      `Implemented a mobile-first creative strategy featuring short-form Reels-style video ads, outfit styling content, and influencer collaboration amplification to drive high engagement and thumb-stop rates on Instagram and Facebook feeds`,
      `Launched Google Shopping campaigns with optimised product feed titles, descriptions, and imagery to capture high-intent fashion queries including category searches ("women's kurtas online", "ethnic wear India") and brand-adjacent terms`,
      `Structured a full-funnel Meta campaign architecture: broad reach video for awareness, engagement retargeting for consideration, and dynamic product ads for conversion — with separate budgets and optimisation goals for each stage`,
      `Deployed post-purchase retention campaigns targeting existing customers with new collection announcements, exclusive early access offers, and cross-sell recommendations to increase repeat purchase rate and customer lifetime value`,
      `Collaborated with micro-influencers in the fashion and lifestyle space to generate authentic UGC content, which was then amplified through paid dark posts to extend reach while maintaining creative authenticity`,
    ],
    results: [
      `Achieved a consistent 4.5x–6x ROAS across Meta and Google channels, with peak festive season campaigns delivering up to 8x ROAS during Diwali collection launches`,
      `Online sales grew by 3.2x over an 8-month period, with paid channels contributing 65% of total e-commerce revenue`,
      `Dynamic product ads on Instagram Shopping delivered a 38% lower cost per purchase compared to standard single-image prospecting campaigns`,
      `Seasonal collection launch campaigns generated 2.8x the average daily revenue during the first 72 hours of each new collection drop`,
      `Post-purchase retention campaigns achieved a 22% repeat purchase rate within 90 days, significantly improving customer lifetime value and reducing blended customer acquisition cost`,
      `Influencer UGC amplification via paid dark posts outperformed branded studio creative by 3.1x on ROAS, validating the authentic content-led approach for the fashion category`,
    ],
    metrics: [
      { value: '4.5x–6x', label: 'ROAS', highlight: true },
      { value: '3.2x', label: 'Sales Growth' },
      { value: '22%', label: 'Repeat Purchase Rate' },
    ],
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero / Intro */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Portfolio & Case Studies
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of paid media campaigns across 14 brands and industries — from e-commerce scaling and fintech acquisition to removalist services, personal brand real estate, NDIS financial planning, and fashion retail. Every case study includes the full strategy, execution detail, and measurable results.
          </p>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="bg-white border-b border-divider py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-4 text-center">
            Industries Covered
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {industryCategories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium bg-surface border border-divider text-ink rounded px-3 py-1.5 shrink-0"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
