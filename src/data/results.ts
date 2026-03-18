// ### PLACEHOLDER: Researcher will paste final names/race/location data here







export type SimResult = {



  id: string;



  platform: "LinkedIn" | "Facebook" | "Instagram" | "Wikipedia" | "Olympics.com" | "ESPN" | "U.S. Olympic & Paralympic Museum" | "USA Track & Field" | "MJ Performance" | string;



  displayName: string;          // ### PLACEHOLDER: Will be replaced with final names



  snippet: string;              // short fictional summary



  urlLike: string;              // e.g., "linkedin.com/in/mjohnson-…"



  discoverability: "High" | "Low";



  footprint: "Absent" | "Absent";



  race: "White American" | "African American";



  location?: string;            // ### PLACEHOLDER: Will be replaced with final locations



  imageKey?: string;            // map to a blurred placeholder



  missingNote?: string;         // e.g., "Missing: de | Show results with: dc"



  currentRole?: string;         // For LinkedIn: current job title



  currentCompany?: string;       // For LinkedIn: current company



  followers?: string;            // For LinkedIn/Instagram: follower count



  sideImageUrl?: string;         // For right-side thumbnail



};







// Seed names - ### PLACEHOLDER: RESEARCHER WILL PASTE FINAL NAMES



// Common (White American): "Michael Johnson", "Christopher Smith", "Jessica Williams"



// Common (African American): "Jamal Washington", "Darius Harris", "Aaliyah Brown"



// Uncommon examples: "Zephyr Washington", "Nikola Reese"







// Condition A: High Discoverability + Footprint Present



// UNCOMMON name (e.g., Zephyr Washington) with LinkedIn + Facebook + Instagram all matching and consistent



// Should look like an authentic search result snippet with profile cards



export const RESULTS_High_Present: SimResult[] = [



  {



    id: "hp1",



    platform: "Apartments.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW ...",



    snippet: "Zephyr at Wardman Park has studios to two bedrooms with rent ranges from $1,996/mo. to $6,621/mo. Can I see a model or tour Zephyr ...",



    urlLike: "www.apartments.com › ... › Woodley Park",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar1"



  },



  {



    id: "hp2",



    platform: "Wardman Park",



    displayName: "Zephyr at Wardman Park",



    snippet: "Striking new apartment and penthouse residences at Zephyr in Woodley Park elevate DC living with unique high-end amenities and one-of-a-kind city views.",



    urlLike: "www.wardmanpark.com › zephyr-apartments",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar2"



  },



  {



    id: "hp3",



    platform: "EquityApartments.com",



    displayName: "Zephyr on the Park Apartments in Redmond",



    snippet: "Full of unique charm and hospitality in the heart of Redmond is Zephyr on the Park Apartments. Our modern architecture houses an incredible collection of homes ...",



    urlLike: "www.equityapartments.com › downtown-redmond",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Redmond, WA",



    imageKey: "avatar3"



  },



  {



    id: "hp4",



    platform: "Greystar",



    displayName: "Zephyr at Wardman Park in Washington, DC",



    snippet: "Building overview. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "www.greystar.com › zephyr-at-wardman-park-w...",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar4"



  },



  {



    id: "hp5",



    platform: "Wardman Park",



    displayName: "Wardman Park - Now Leasing Aerie & Zephyr in Woodley ...",



    snippet: "Introducing two distinct new resort communities in Woodley Park. At Aerie and Zephyr, you'll experience elevated living with luxury finishes, breathtaking DC ...",



    urlLike: "www.wardmanpark.com",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar5"



  },



  {



    id: "hp6",



    platform: "Zephyr Apartments Seattle",



    displayName: "Zephyr Apartments Seattle",



    snippet: "Zephyr Apartments has arrived at Belmont and Olive Way in Seattle's vibrant Capitol Hill neighborhood. Relax and unwind in Zephyr's spacious, modern units.",



    urlLike: "zephyrseattle.com",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar6"



  },



  {



    id: "hp7",



    platform: "Apartments.com",



    displayName: "Zephyr Apartments: Elevated Living in the ... - Seattle",



    snippet: "This contemporary community blends sleek, high-end finishes with thoughtful design, all set just minutes from Downtown Seattle and South Lake Union.",



    urlLike: "www.apartments.com › ... › Seattle › Capitol Hill",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar7"



  },



  {



    id: "hp8",



    platform: "American University",



    displayName: "Zephyr at Wardman Park Apartments",



    snippet: "Apartment Description. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "offcampus.american.edu › housing › property › z...",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar8"



  },



  {



    id: "hp9",



    platform: "Yelp",



    displayName: "ZEPHYR APARTMENTS - Updated November 2025",



    snippet: "ZEPHYR APARTMENTS, 200 Belmont Ave E, Seattle, WA 98102, 43 Photos, (206) 322-9010, Mon - 9:00 am - 6:00 pm, Tue - 9:00 am - 6:00 pm, Wed - 9:00 am - 6:00 ...",



    urlLike: "www.yelp.com › ... › Real Estate › Apartments",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar9"



  },



  {



    id: "hp10",



    platform: "Wardman Park",



    displayName: "Zephyr - Woodley Park Apartments & Penthouses",



    snippet: "Learn what set's Zephyr's unique Woodley Park locale apart: tree-lined historic charm, fast metro access to the city, scenic parks, and great dining.",



    urlLike: "www.wardmanpark.com › location",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar10"



  },



  {



    id: "hp11",



    platform: "zephyrlibertylake.com",



    displayName: "Zephyr Lodge | Wedding & Event Venue in Liberty Lake, WA",



    snippet: "Experience a timeless treasure on Liberty Lake, Washington. Built in 1902, Zephyr Lodge has always been a place for people to gather.",



    urlLike: "www.zephyrlibertylake.com",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar11"



  },



  {



    id: "hp12",



    platform: "Apartments and Homes For Rent - ApartmentHomeLiving.com",



    displayName: "Zephyr Apartments: Elevated Living in Seattle, WA",



    snippet: "Zephyr Apartments offers elevated city living in the heart of Seattle's Capitol Hill neighborhood. This contemporary community blends sleek, high-end finishes ...",



    urlLike: "www.apartmenthomeliving.com › Zephyr-Apart...",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar12"



  },



  {



    id: "hp13",



    platform: "Zephyr Ventilation",



    displayName: "Zephyr Expands Direct Distribution Into Six New States",



    snippet: "Oct 1, 2020 — ... Washington, and Wyoming. The San Francisco-based appliance manufacturer will now sell direct into a total of 12 states across the U.S.. For ...",



    urlLike: "zephyronline.com › Press Releases",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Washington",



    imageKey: "avatar13"



  },



  {



    id: "hp14",



    platform: "Instagram",



    displayName: "Event Space (@zephyrlibertylake) · Liberty Lake, WA",



    snippet: "2.6K+ followers. Our rustic, idyllic, lake side event venue nestled in the pines on Liberty Lake, WA. Weddings, concerts, yoga retreats, and more. zephyrlibertylake.com + 1.",



    urlLike: "www.instagram.com › zephyrlibertylake",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar14"



  },



  {



    id: "hp15",



    platform: "Key Technology",



    displayName: "Key Technology: Food Processing Equipment & Sorting ...",



    snippet: "Zephyr Horizontal Motion Conveyor · VERYX 2.0 Optical Sorting Platform · ADR ... Walla Walla WA 99362 USA +1 (509) 529-2161. Beijerdstraat 10 4112 NE",



    urlLike: "www.key.net › ...",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Walla Walla, WA",



    imageKey: "avatar15"



  },



  {



    id: "hp16",



    platform: "r/V Zephyr",



    displayName: "ZephyrNW - Research Vessel, Charter Boat",



    snippet: "Research Vessel Zephyr is a ready-to-work charter vessel, based in the Pacific Northwest with many expeditions under her waterline.",



    urlLike: "zephyrnw.com › research",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Pacific Northwest",



    imageKey: "avatar16"



  },



  {



    id: "hp17",



    platform: "Facebook",



    displayName: "Zephyr on the Park | Redmond WA",



    snippet: "20+ followers. This content isn't available right now. When this happens, it's usually because the owner only shared it with a small group of people, changed who can see it or ...",



    urlLike: "www.facebook.com › Zephyr-on-the-Park",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Redmond, WA",



    imageKey: "avatar17"



  },



  {



    id: "hp18",



    platform: "seattlezephyr.com",



    displayName: "Seattle Zephyr Inc",



    snippet: "Seattle Zephyr Inc is a privately-owned and Seattle-based corporation, established in 2016. We aim to revive historical communities in the vincity of greater ...",



    urlLike: "seattlezephyr.com",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar18"



  },



  {



    id: "hp19",



    platform: "Amtrak",



    displayName: "Traditional Dining",



    snippet: "... Northwest · South · West. Find Station/Route. Ask Julie Clear input. No stations or ... Traditional Dining service is offered on the Auto Train, California Zephyr ...",



    urlLike: "www.amtrak.com › meals-dining › dining-car",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Washington",



    imageKey: "avatar19"



  },



  {



    id: "hp20",



    platform: "DC Power Football Club",



    displayName: "DC Power Football Club: Homepage",



    snippet: "DC Power FC brings pro women's soccer to Washington, D.C. Find match updates, tickets, and news. Join ... Spokane Zephyr FC · Sporting JAX · Tampa ...",



    urlLike: "www.dcpowerfootballclub.com",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar20"



  },



  {



    id: "hp21",



    platform: "Key Technology",



    displayName: "Key Technology: Food Processing Equipment & Sorting ...",



    snippet: "Zephyr Horizontal Motion Conveyor · VERYX 2.0 Optical Sorting Platform · ADR ... Walla Walla WA 99362 USA +1 (509) 529-2161. Beijerdstraat 10 4112 NE",



    urlLike: "www.key.net › ...",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Walla Walla, WA",



    imageKey: "avatar21"



  },



  {



    id: "hp22",



    platform: "Monumental Sports Network Official Online Store",



    displayName: "Men's Levelwear Navy Washington Capitals Zephyr ...",



    snippet: "Washington Capitals. Men's Levelwear Navy Washington Capitals Zephyr Adjustable Hat. Out of Stock ...",



    urlLike: "shop.monumentalsportsnetwork.com › mens-lev...",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar22"



  },



  {



    id: "hp23",



    platform: "Yelp",



    displayName: "ZEPHYR APARTMENTS - Updated December 2025",



    snippet: "ZEPHYR APARTMENTS, 200 Belmont Ave E, Seattle, WA 98102, 43 Photos, (206) 322-9010, Mon - 9:00 am - 6:00 pm, Tue - 9:00 am - 6:00 pm, Wed - 9:00 am - 6:00 ...",



    urlLike: "www.yelp.com › ... › Real Estate › Apartments",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar23"



  },



  {



    id: "hp24",



    platform: "Zephyr Van",



    displayName: "Zephyr Van - Sprinter Van Conversions For Sale",



    snippet: "Zephyr Van is a Sprinter van conversion company specializing in overland builds with high-end finishes. ENGINEERED. OFF-GRID.",



    urlLike: "zephyrvan.com",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Washington",



    imageKey: "avatar24"



  },



  {



    id: "hp25",



    platform: "zephyrlibertylake.com",



    displayName: "Zephyr Lodge Wedding Venue in Liberty Lake, WA",



    snippet: "Built in 1902, the Zephyr Lodge has been the home of over a century of joyous occasions. In 2017, the lodge and surrounding grounds were fully restored to offer ...",



    urlLike: "www.zephyrlibertylake.com › weddings",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar25"



  },



  {



    id: "hp26",



    platform: "Instagram",



    displayName: "Event Space (@zephyrlibertylake) · Liberty Lake, WA",



    snippet: "2.6K+ followers. Our rustic, idyllic, lake side event venue nestled in the pines on Liberty Lake, WA. Weddings, concerts, yoga retreats, and more. zephyrlibertylake.com + 1.",



    urlLike: "www.instagram.com › zephyrlibertylake",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar26"



  },



  {



    id: "hp27",



    platform: "Rent.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW",



    snippet: "See photos, floor plans and more details about Zephyr at Wardman Park in Washington, District of Columbia. Visit Rent. now for rental rates and other ...",



    urlLike: "www.rent.com › ... › Washington › 20008",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar27"



  },



  {



    id: "hp28",



    platform: "Zephyr Seattle",



    displayName: "Zephyr Seattle: Home",



    snippet: "Zephyr Apartments has officially arrived at the iconic intersection of Belmont Avenue and Olive Way, located in Seattle's lively Capitol Hill neighborhood.",



    urlLike: "zephyrseattle.com",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar28"



  },



  {



    id: "hp29",



    platform: "Wardman Park",



    displayName: "Zephyr Apartments Blog",



    snippet: "Zephyr Apartments Blog. NW Washington DC. Category. Category Remove item. Category. Living at Zephyr. NW Washington DC. Boulder Bridge in Rock Creek Park, a ...",



    urlLike: "www.wardmanpark.com › zephyr-apartments",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar29"



  },



  {



    id: "hp30",



    platform: "Instagram",



    displayName: "Experience Home at Zephyr Wardman Park in Washington D.C.",



    snippet: "20+ likes · 1 week ago. 0:51. Discover the essence of Zephyr Wardman Park, a thoughtfully designed unit in Washington D.C. that offers a perfect blend of comfort, style, ...",



    urlLike: "www.instagram.com › wardmanparkdc",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar30"



  },



  {



    id: "hp31",



    platform: "YouTube",



    displayName: "Zephyr (with Audio Description) | Washington DC Apartments ...",



    snippet: "40+ views · 1 month ago. 0:33. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "www.youtube.com › Greystar",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar31"



  },



  {



    id: "hp32",



    platform: "Instagram",



    displayName: "Experience Home at Zephyr Wardman Park in Washington D.C.",



    snippet: "20+ likes · 1 week ago. 0:51. Discover the essence of Zephyr Wardman Park, a thoughtfully designed unit in Washington D.C. that offers a perfect blend of comfort, style, ...",



    urlLike: "www.instagram.com › wardmanparkdc",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar32"



  },



  {



    id: "hp33",



    platform: "Apartment List",



    displayName: "Zephyr - Washington, DC apartments for rent",



    snippet: "Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy. Inspired by the pulse of Washington, D.C., this ...",



    urlLike: "www.apartmentlist.com › Washington, DC",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar33"



  },



  {



    id: "hp34",



    platform: "ApartmentFinder.com",



    displayName: "Zephyr Apartments: Elevated Living in the ... - 1650 E Olive ...",



    snippet: "Zephyr Apartments: Elevated Living in the ... is located in Seattle, Washington in the 98102 zip code. This apartment community was built in 2015 and has 7 ...",



    urlLike: "www.apartmentfinder.com › Seattle-Apartments",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar34"



  },



  {



    id: "hp35",



    platform: "Homes.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW, ...",



    snippet: "Zephyr captures the spirit of a metropolis in motionwhere history meets innovation, and every corner hums with possibility.With clean lines and a refined ...",



    urlLike: "www.homes.com › ... › 20008 › Woodley Park",



    discoverability: "High",



    footprint: "Absent",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar35"



  },



  {



    id: "hp36",



    platform: "USL Spokane",



    displayName: "USL Spokane: Homepage",



    snippet: "Based in Spokane, Washington ... fielding two soccer teams – the women's Division One USL Super League Spokane Zephyr FC, and the men's professional USL League ...",



    urlLike: "www.uslspokane.com",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Spokane, WA",



    imageKey: "avatar36"



  },



  {



    id: "hp37",



    platform: "Amtrak Vacations",



    displayName: "First Class Private Rooms",



    snippet: "Seattle, WA · Washington, DC · Search by map View all destinations Amtrak's famous routes · Limited-Time Offer, 15+ Nights. Flash sale. For a limited time only ...",



    urlLike: "www.amtrakvacations.com › trip-planning › priv...",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Washington",



    imageKey: "avatar37"



  },



  {



    id: "hp38",



    platform: "vitalogycraft.com",



    displayName: "Snapback Hat Zephyr Cap Price Zephyr Washington Huskies ...",



    snippet: "Zephyr Washington Huskies Low Retro Diamond Snapback Hat Cap, Zephyr Mens Original Snapback Hat Cap Wool Blend USA Flag Bill Free Shipping!, ...",



    urlLike: "www.vitalogycraft.com › ...",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Washington",



    imageKey: "avatar38"



  },



  {



    id: "hp39",



    platform: "KWKT - FOX 44",



    displayName: "Zephyr Selects QUODD's QX Digital to Power Market Data, ...",



    snippet: "3 hours ago — ... Washington DC · Your Local Election HQ · Business News · Crime · Weird News ... Zephyr Selects QUODD's QX Digital to Power Market Data, Analytics, ...",



    urlLike: "www.fox44news.com › press-releases › cision",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar39"



  },



  {



    id: "hp40",



    platform: "Facebook",



    displayName: "Mercury Zephyr Sighting in Vancouver, WA",



    snippet: "7 comments · 6 months ago. Spotted this Mercury Zephyr that appeared to be in pretty fair shape out and about in Vancouver, WA today · No photo description available. ... My ...",



    urlLike: "www.facebook.com › Underwhelming Cars",



    discoverability: "High",



    footprint: "Absent",



    race: "White American",



    location: "Vancouver, WA",



    imageKey: "avatar40"



  }



];







// Condition B: High Discoverability + Footprint Absent



// UNCOMMON name with "No public profiles available" or similar placeholder message



// Minimal, single "no results found" layout



export const RESULTS_High_Absent: SimResult[] = [



  // Empty array - will show "No results found" message



];








// Condition D: Low Discoverability + Footprint Absent

export const RESULTS_Low_Absent: SimResult[] = [
  // Empty array - will show "No results found" message
];

// Low Discoverability - Todd Smith (cluttered results, many different people)
export const RESULTS_Todd_Smith: SimResult[] = [
  // Page 1
  {
    id: "todd1",
    platform: "Instagram",
    displayName: "tøddy smith (@todderic)",
    snippet: "CakeEater?? I grew up in the slums of Huntington Beach!! BUT SERIOUSLY I LOVE WILD WING AND THE MIGHTY DUCKS. I've been a fan since their inauguration. I know ...Read more",
    urlLike: "Instagram · todderic",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "1.9M+",
    imageKey: "avatar1"
  },
  {
    id: "todd2",
    platform: "Wikipedia",
    displayName: "Todd Smith (musician)",
    snippet: "Todd Edward Smith is an American singer, songwriter and guitarist who most notably fronts the rock band Dog Fashion Disco. He is also involved with the ...Read more",
    urlLike: "en.wikipedia.org › wiki › Todd_Smith_(musician)",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar2"
  },
  {
    id: "todd3",
    platform: "Facebook",
    displayName: "Todd Smith (@toddsmithonline)",
    snippet: "Todd Smith. 13301 likes · 875 talking about this. \"How Good It Gets\" is OUT! Married to Angie. Father of 5 girls. Lead singer in Selah...",
    urlLike: "Facebook · Todd Smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "13.3K+",
    imageKey: "avatar3"
  },
  {
    id: "todd4",
    platform: "IMDb",
    displayName: "Todd Smith(XXVIII)",
    snippet: "Todd Smith is a 26 year old former bartender turned Vine Star. He is currently a social media influencer with fellow roommates Scotty Sire, David Dobrik, Heath ...Read more",
    urlLike: "www.imdb.com › name",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar4"
  },
  {
    id: "todd5",
    platform: "Instagram",
    displayName: "Todd Smith (@officialtoddsmith)",
    snippet: "❤️ Angie/5 girls 4 million albums/1 Billion streams @selahonline. Detroit/Congo kid (DRC) Belmont U Alum. I am a diehard ...Read more",
    urlLike: "Instagram · officialtoddsmith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "28.1K+",
    imageKey: "avatar5"
  },
  {
    id: "todd6",
    platform: "News",
    displayName: "Couples Café Takes Unexpected Turn",
    snippet: "21 hours ago — Doctors later confirmed Todd had suffered a heart attack caused by an 80 percent blockage in his left anterior descending artery, commonly ...Read more",
    urlLike: "www.audacy.com › ... › Entertainment › Local",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar6"
  },
  {
    id: "todd7",
    platform: "Amazon.com",
    displayName: "Todd Smith: books, biography, latest update",
    snippet: "Follow Todd Smith and explore their bibliography from Amazon's Todd Smith Author Page.",
    urlLike: "www.amazon.com › Todd-Smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar7"
  },
  {
    id: "todd8",
    platform: "Apple Music",
    displayName: "Todd Smith",
    snippet: "Todd Smith is a singer and songwriter best known as a founding member of the CCM band Selah. Born in Michigan, Smith spent his early ...Read more",
    urlLike: "music.apple.com › artist › todd-smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar8"
  },
  {
    id: "todd9",
    platform: "Morgan Lewis",
    displayName: "Todd Smith - Morgan Lewis",
    snippet: "Todd Smith is a US and international tax lawyer with deep experience developing tax efficiencies and managing risks related to institutional investors' ...",
    urlLike: "www.morganlewis.com › bios › toddsmith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar9"
  },
  {
    id: "todd10",
    platform: "TikTok",
    displayName: "ToddySmith",
    snippet: "Sam Smith. @samsmith. Follow. Follow. Nicki Minaj. @nickiminaj. Follow. Follow. insta/: todderic snapchat: toddysmithy email: Jack@millentertainment.com. hoo.be ...Read more",
    urlLike: "TikTok · ToddySmith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "1.9M+",
    imageKey: "avatar10"
  },
  // Page 2
  {
    id: "todd11",
    platform: "Spotify",
    displayName: "Todd Smith",
    snippet: "Singles and EPs · How Good It Gets · Keep On Fighting · Brave Enough · Promises · Leave It to Love · Against All Odds · Faithfully. Single • 2021. Featuring ...Read more",
    urlLike: "open.spotify.com › artist",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar11"
  },
  {
    id: "todd12",
    platform: "AllMusic",
    displayName: "Todd Smith Songs, Albums, Reviews, Bio & ... - AllMusic",
    snippet: "Singer and songwriter best known as a founding member of the popular CCM band Selah. Read Full Biography Active 1990s - 2010s Born in MichiganRead more",
    urlLike: "www.allmusic.com › todd-smith-mn0000616632",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar12"
  },
  {
    id: "todd13",
    platform: "Smith LaCien",
    displayName: "Todd A. Smith",
    snippet: "Founding Partner. Chicago lawyer Todd A. ... Our Chicago personal injury lawyers have achieved more than $3.5 billion in settlements and verdicts and attained ...Read more",
    urlLike: "www.smithlacien.com › attorney › smith-todd-a",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Chicago, IL",
    imageKey: "avatar13"
  },
  {
    id: "todd14",
    platform: "YouTube",
    displayName: "toddy smith",
    snippet: "1.1M+ followers · Share your videos with friends, family, and the world.",
    urlLike: "YouTube · toddy smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "1.1M+",
    imageKey: "avatar14"
  },
  {
    id: "todd15",
    platform: "Todd Smith - Author",
    displayName: "Todd Smith - Author",
    snippet: "For fans of Ted Lasso and Welcome to Wrexham, Relegated is a travel memoir through English football culture and a journey to the heart of English football.",
    urlLike: "www.toddsmithauthor.com",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar15"
  },
  {
    id: "todd16",
    platform: "The Work As Meditation",
    displayName: "Todd Smith",
    snippet: "I'm a guy who really wants to know the truth. I want to catch the ways that I make myself suffer. I don't want to turn a blind eye, even to the little ways ...Read more",
    urlLike: "www.theworkasmeditation.com › about",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar16"
  },
  {
    id: "todd17",
    platform: "tsutigers.com",
    displayName: "Todd Smith - Director of Tennis - Women's Tennis Coaches",
    snippet: "Todd Smith ... Todd Smith was named head coach of the TSU men's and women's tennis on October 25, 2021. A Tennessee native, Todd grew up playing tennis at the age ...Read more",
    urlLike: "tsutigers.com › sports › womens-tennis › roster",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar17"
  },
  {
    id: "todd18",
    platform: "FOX 32 Chicago",
    displayName: "DEA Chicago chief targets doctors charged with violent ...",
    snippet: "19 hours ago — Todd Smith, a 21-year veteran of the DEA, became the highest-ranking official for the agency in Illinois, Indiana and Wisconsin last month.Read more",
    urlLike: "www.fox32chicago.com › news › dea-chicago-c...",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Chicago, IL",
    imageKey: "avatar18"
  },
  {
    id: "todd19",
    platform: "New Release Today",
    displayName: "Todd Smith Artist Profile | Biography And Discography",
    snippet: "He is married to author/speaker Angie Smith. They live with their four girls in Nashville, TN. Growing up as the son of missionaries in a house that his ...Read more",
    urlLike: "www.newreleasetoday.com › artistdetail",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Nashville, TN",
    imageKey: "avatar19"
  },
  {
    id: "todd20",
    platform: "laurelbox",
    displayName: "Angie Smith - Infant Bereavement",
    snippet: "by Angie Smith. Angie is married to Todd Smith, of the Christian vocal group, Selah, and mom to five daughters. In 2008, the Smiths received news that their ...Read more",
    urlLike: "www.laurelbox.com › pages › angiesmith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar20"
  },
  // Page 3
  {
    id: "todd21",
    platform: "LinkedIn",
    displayName: "Todd Smith - Beekeeper's Naturals",
    snippet: "5K+ followers · Park City, Utah, United States · Beekeeper's Naturals ... Todd Smith's profile on LinkedIn, a professional community of 1 billion members ... Todd Smith. Beekeeper's Naturals UNC's Kenan-Flagler Business School ...Read more",
    urlLike: "LinkedIn · Todd Smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Park City, Utah",
    followers: "5K+",
    imageKey: "avatar21"
  },
  {
    id: "todd22",
    platform: "toddcsmith.com",
    displayName: "todd c smith",
    snippet: "todd c smith · projects · design · cv · about · statement · student work · contact · Exuviae. 2007-2022 · Bike Sense Louisville · 2017-2020 · WholeCommunityKY.Read more",
    urlLike: "toddcsmith.com",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar22"
  },
  {
    id: "todd23",
    platform: "Todd Smith Mediation",
    displayName: "Home | Todd Smith, ESQ.",
    snippet: "Todd Smith believes that every dispute can be resolved through mediation. The foundation of his approach is driving a reasonable, ethical and productive process ...Read more",
    urlLike: "toddasmith.com",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar23"
  },
  {
    id: "todd24",
    platform: "CHRISTUS Health",
    displayName: "Todd Smith, MD",
    snippet: "Todd Smith, MD - Vascular Surgery - CHRISTUS Trinity Clinic English All Ages 4.9/5 Read Reviews 903-606-1400Read more",
    urlLike: "www.christushealth.org › todd-smith-02598",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar24"
  },
  {
    id: "todd25",
    platform: "YouTube",
    displayName: "Todd Smith Music",
    snippet: "17.8K+ followers · This playlists contains all my free sounds and sample based videos. Keep a ear out for new few custom sounds ! You can support my You Tube and music on Patreon.Read more",
    urlLike: "www.youtube.com › Todd Smith Music",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "17.8K+",
    imageKey: "avatar25"
  },
  {
    id: "todd26",
    platform: "ThriftBooks",
    displayName: "List of books by author Todd Smith",
    snippet: "70 Invitations that Awaken Your Heart from Global Revivalists including Randy Clark, David Hogan, James W. Goll, John and Carol Arnott, Dr. Michael Brown and more!Read more",
    urlLike: "www.thriftbooks.com › todd-smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar26"
  },
  {
    id: "todd27",
    platform: "Facebook",
    displayName: "Todd Smith (@toddsmithonline) • Facebook - Artist",
    snippet: "0:20 · Todd Smith 󱢏 ... All of our trees have been frozen over. Everything has m... ... This made me laugh so hard! So many funny videos during ... ... You've got to ...",
    urlLike: "www.facebook.com · Dec 31, 2025",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar27"
  },
  {
    id: "todd28",
    platform: "CCM Magazine",
    displayName: "Q&A with Todd Smith",
    snippet: "Jun 14, 2016 — Selah's hits include such signature songs as \"You Raise Me Up,\" \"Wonderful, Merciful Savior\" and \"Press On.\" Smith is married to best-selling ...Read more",
    urlLike: "www.ccmmagazine.com › features › qa-with-tod...",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar28"
  },
  {
    id: "todd29",
    platform: "Elite Orthopedics & Spine",
    displayName: "J. Todd Smith, MD - Elite Orthopedics & Spine",
    snippet: "Board-Certified Orthopedic Spine Surgeon. J. Todd Smith, MD is a Board-Certified Orthopedic Surgeon specializing in orthopedic spine surgery. He has over 25 ...Read more",
    urlLike: "birminghamorthospine.com › about",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar29"
  },
  {
    id: "todd30",
    platform: "Famous Birthdays",
    displayName: "Toddy Smith - Age, Bio, Family",
    snippet: "First built an online audience on Vine, where he frequently collaborated with fellow Vine star Scotty Sire. He now has over more than 1 million subscribers to ...Read more",
    urlLike: "www.famousbirthdays.com › people › toddy-smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar30"
  },
  // Page 4
  {
    id: "todd32",
    platform: "The Shorty Awards",
    displayName: "Todd Smith - Vlogger of the Year",
    snippet: "Toddy Smith has worked with some of his best friends (and fellow social media stars) for years now. He started on Vine, but now he creates hilarious comedic ...Read more",
    urlLike: "shortyawards.com › todderic_",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar32"
  },
  {
    id: "todd33",
    platform: "Hoodline",
    displayName: "Todd Smith Named Special Agent In Charge Of DEA Chicago",
    snippet: "Jan 13, 2026 — Todd Smith, who led prosecutions tied to the Flores twins, became DEA Chicago's SAC and says he will focus on disrupting fentanyl and meth ...",
    urlLike: "hoodline.com › 2026/01 › cartel-buster-todd-smi...",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Chicago, IL",
    imageKey: "avatar33"
  },
  {
    id: "todd34",
    platform: "Todd Smith Fitness",
    displayName: "Todd Smith Fitness: Personal Training & Fitness ... - Omaha",
    snippet: "We have spent 40+ years refining Todd Smith Fitness exercise system to deliver the best experience for mind, body, and spirit of each one of our customers every ...Read more",
    urlLike: "www.toddsmithfitness.com",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Omaha, NE",
    imageKey: "avatar34"
  },
  {
    id: "todd35",
    platform: "KTVZ",
    displayName: "Kelly Rowland and Cliff 'Method Man' Smith hope their new ...",
    snippet: "6 days ago — Their new movie is based on the book \"Relationship Goals: How to Win at Dating, Marriage, and Sex\" by Pastor Michael Todd. Smith's character in ...Read more",
    urlLike: "ktvz.com › cnn-entertainment › 2026/02/04 › kell...",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar35"
  },
  {
    id: "todd36",
    platform: "Facebook",
    displayName: "Todd Smith (@toddsmithonline)",
    snippet: "I can't think of a better way to celebrate turning 72. Tonight I am overwhelmed at how blessed I am. My daughters honored me all week and treated me with such ...Read more",
    urlLike: "www.facebook.com › ... › Artist › Todd Smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar36"
  },
  {
    id: "todd37",
    platform: "iHeart",
    displayName: "Todd Smith",
    snippet: "Todd Smith is a singer and songwriter best known as a founding member of the CCM band Selah. Born in Michigan, Smith spent his early ...Read more",
    urlLike: "www.iheart.com › artist › todd-smith-31455596",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar37"
  },
  {
    id: "todd38",
    platform: "YouTube",
    displayName: "Todd Smith",
    snippet: "Todd Smith - \"Dmitri's Song (Jesus Is Alive)\". 128K views. 9 years ago · 4:27. Todd Smith & Ellie Holcomb - \"You're The Water, You're The Shore\" (Official Video).Read more",
    urlLike: "www.youtube.com › @therealtoddsmith › videos",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar38"
  },
  {
    id: "todd39",
    platform: "YouTube",
    displayName: "#Worshipontheporch with Todd Smith (#selah) and Daniel ...",
    snippet: "13.9K+ views · 5 years ago · 48:07 · Singing worship songs from our community pool house in Nashville! Join Todd Smith of #Selah and his neighbor Daniel Carson (guitarist for ...",
    urlLike: "YouTube · TheSelahVideos",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Nashville, TN",
    imageKey: "avatar39"
  },
  {
    id: "todd40",
    platform: "Cave Dweller Music",
    displayName: "CDM Presents: An Interview with Todd Smith of Dog ...",
    snippet: "Oct 13, 2023 — CDM Presents: An Interview with Todd Smith of Dog Fashion Disco ... Brian sits down with vocalist Todd Smith of Maryland experimental metal ...Read more",
    urlLike: "cavedwellermusic.net › albums-reviews › todd-s...",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar40"
  },
  // Page 5 - Additional results continue from page 4 content
  {
    id: "todd41",
    platform: "Wikipedia",
    displayName: "Todd Smith",
    snippet: "People · Todd Smith (musician), American singer, songwriter and guitarist · Todd Smith (politician), Canadian politician · Todd Smith, American vocalist and ...Read more",
    urlLike: "en.wikipedia.org › wiki › Todd_Smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar41"
  },
  {
    id: "todd42",
    platform: "Marquette University Athletics",
    displayName: "Todd Smith - Staff Directory",
    snippet: "This honor is the highest given in the strength and conditioning coaching profession. Smith arrived at Marquette after spending six years as the Director of ...Read more",
    urlLike: "gomarquette.com › staff-directory › todd-smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar42"
  },
  {
    id: "todd43",
    platform: "Discogs",
    displayName: "Todd Smith - Discography & Songs | Discogs",
    snippet: "Explore Todd Smith's discography on Discogs. Shop for vinyl, CDs, and more from Todd Smith on the Discogs Marketplace. View releases and credits.Read more",
    urlLike: "www.discogs.com › artist › Todd+Smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar43"
  },
  {
    id: "todd44",
    platform: "IMDb",
    displayName: "Todd Smith | Actor",
    snippet: "Actor · Geoffrey Gould, J. Allen Williams, and Bozana Cavar in Everything (2023). Everything. 6.6 · Darkstar: The Interactive Movie (2010). Darkstar: The ...Read more",
    urlLike: "www.imdb.com › name",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar44"
  },
  {
    id: "todd45",
    platform: "Geoffrey Todd Smith",
    displayName: "Geoffrey Todd Smith",
    snippet: "Work · About · Press · CV · Contact · Geoffrey Todd Smith · Work · About · Press · CV · Contact. Home. Top. New Page.Read more",
    urlLike: "www.geoffreytoddsmith.com",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar45"
  },
  {
    id: "todd46",
    platform: "Ballotpedia",
    displayName: "Todd Smith, Texas Representative",
    snippet: "Contents ... Todd Smith is a former Republican member of the Texas House of Representatives, representing District 92 from 1997 to 2013. Prior to his election he ...Read more",
    urlLike: "ballotpedia.org › Todd_Smith,_Texas_Representat...",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Texas",
    imageKey: "avatar46"
  },
  {
    id: "todd47",
    platform: "Playback.fm",
    displayName: "Todd Smith (musician) - Spouse, Children, Birthday & More",
    snippet: "Todd Smith (musician) · Age · Family · Birth · Work · Locations · Personal · More #1 Most Famous Person Stuff · Fame Ranking. What does \"Most Famous\" mean?Read more",
    urlLike: "playback.fm › Lists › People",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar47"
  },
  {
    id: "todd48",
    platform: "Todd Smith Consulting",
    displayName: "Author – Todd Smith Consulting",
    snippet: "Todd Smith Consulting offers leadership development, business strategy, and executive coaching services. Helping leaders and organizations reach their full potential.",
    urlLike: "toddsmithconsulting.com › author",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar48"
  },
  {
    id: "todd49",
    platform: "TikTok",
    displayName: "todd smith (@officialtoddsmith)",
    snippet: "410+ followers. Singer, songwriter, and lead vocalist of Selah. Sharing faith, family, and music. Follow for behind-the-scenes content.",
    urlLike: "TikTok · todd smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "410+",
    imageKey: "avatar49"
  },
  {
    id: "todd50",
    platform: "Nextdoor",
    displayName: "Todd Smith - Recommended Contractor in Omaha",
    snippet: "Neighbors recommend Todd Smith for general contracting and home improvement services in the Omaha area. Specializes in kitchen and bathroom remodels.",
    urlLike: "nextdoor.com › pages › todd-smith-contracting",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Omaha, NE",
    imageKey: "avatar50"
  },
  {
    id: "todd51",
    platform: "LinkedIn",
    displayName: "Todd Smith - Account Executive at Tech Solutions Inc.",
    snippet: "Experienced sales leader with 15+ years in B2B enterprise software. Proven track record of exceeding targets and building client relationships.",
    urlLike: "linkedin.com › in › todd-smith-sales-leader",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Chicago, IL",
    currentRole: "Account Executive",
    currentCompany: "Tech Solutions Inc.",
    imageKey: "avatar51"
  },
  {
    id: "todd52",
    platform: "LinkedIn",
    displayName: "Todd Smith - Business Development Manager",
    snippet: "Strategic business development professional with expertise in market expansion and partnership development across industries.",
    urlLike: "linkedin.com › in › todd-smith-bd-manager",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Austin, TX",
    currentRole: "Business Development Manager",
    currentCompany: "Growth Partners LLC",
    imageKey: "avatar52"
  },
  {
    id: "todd53",
    platform: "LinkedIn",
    displayName: "Todd Smith - Operations Director",
    snippet: "Operations management professional optimizing supply chain and business processes for Fortune 500 companies. MBA holder with 12 years experience.",
    urlLike: "linkedin.com › in › todd-smith-operations",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Denver, CO",
    currentRole: "Operations Director",
    currentCompany: "Logistics Systems Corp",
    imageKey: "avatar53"
  },
  {
    id: "todd54",
    platform: "LinkedIn",
    displayName: "Todd Smith - Senior Consultant",
    snippet: "Senior consultant specializing in digital transformation and enterprise architecture. Helping organizations modernize their technology infrastructure.",
    urlLike: "linkedin.com › in › todd-smith-consultant",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Boston, MA",
    currentRole: "Senior Consultant",
    currentCompany: "Digital Innovation Group",
    imageKey: "avatar54"
  },
  {
    id: "todd55",
    platform: "LinkedIn",
    displayName: "Todd Smith - Founder & CEO at Smith Ventures",
    snippet: "Entrepreneur and founder of Smith Ventures, an early-stage venture focusing on sustainable business solutions. Angel investor and business mentor.",
    urlLike: "linkedin.com › in › todd-smith-entrepreneur",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "San Francisco, CA",
    currentRole: "Founder & CEO",
    currentCompany: "Smith Ventures",
    imageKey: "avatar55"
  },
  {
    id: "todd56",
    platform: "LinkedIn",
    displayName: "Todd Smith - Marketing Manager at Digital Media Co.",
    snippet: "Marketing leader with expertise in brand strategy, digital campaigns, and customer engagement. Driving growth for B2C media company.",
    urlLike: "linkedin.com › in › todd-smith-marketing",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "New York, NY",
    currentRole: "Marketing Manager",
    currentCompany: "Digital Media Co.",
    imageKey: "avatar56"
  },
  {
    id: "todd57",
    platform: "People Search",
    displayName: "Todd Smith Professional Directory",
    snippet: "Professional profile and business contact information for Todd Smith, sales and business development expert in the Midwest region.",
    urlLike: "peoplesearch.com › directory › todd-smith",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar57"
  },
  {
    id: "todd58",
    platform: "Business Journal",
    displayName: "Todd Smith Named Regional Sales Leader of the Year",
    snippet: "Todd Smith, Vice President of Sales at TechCorp Industries, recognized for outstanding leadership and market expansion achievements in 2024.",
    urlLike: "businessjournal.com › articles › todd-smith-sales-leader",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar58"
  },
  {
    id: "todd59",
    platform: "Chamber of Commerce",
    displayName: "Todd Smith - Business Member Directory",
    snippet: "Member of the Greater Omaha Chamber of Commerce. Involved in local business networking and community development initiatives.",
    urlLike: "omahabusinesschamber.org › members › todd-smith",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Omaha, NE",
    imageKey: "avatar59"
  },
  {
    id: "todd60",
    platform: "LinkedIn",
    displayName: "Todd Smith - Sales Director at Enterprise Software Solutions",
    snippet: "Sales director building high-performing teams and driving revenue growth. Passionate about customer success and team development.",
    urlLike: "linkedin.com › in › todd-smith-sales-director",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Minneapolis, MN",
    currentRole: "Sales Director",
    currentCompany: "Enterprise Software Solutions",
    imageKey: "avatar60"
  },
  {
    id: "todd61",
    platform: "LinkedIn",
    displayName: "Todd Smith - VP of Sales Engineering",
    snippet: "VP leading sales engineering team focused on customer success and technical solution delivery. Strategic thinker with 20+ years in tech.",
    urlLike: "linkedin.com › in › todd-smith-vp-sales",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Seattle, WA",
    currentRole: "VP of Sales Engineering",
    currentCompany: "Cloud Systems Inc.",
    imageKey: "avatar61"
  }
];

export const RESULTS = {
  Todd_Smith: RESULTS_Todd_Smith,
};