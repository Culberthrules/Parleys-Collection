/**
 * Watch names, brands, and NGN prices mapped to each public/images/ file.
 * Slugs match the lowercase filename without extension (e.g. IMG_3676.PNG → img_3676).
 *
 * New UUID-named entries (added 2026-07-14) cover Tomi Face Gear sets,
 * Cartier Santos variants, and Poedagar Nautilus / Magnetic / Chronograph styles.
 *
 * NOTE: The duplicate file "0b60c920-...(1).JPG" is intentionally excluded from
 * the catalog — it is byte-for-byte identical to "0b60c920-...JPG".
 *
 * @type {Record<string, Partial<import('../types/product.js').Product>>}
 */
export const productOverrides = {
    // ── NEW ARRIVALS (2026-07-14) ──────────────────────────────────────────

    '0b60c920-07ab-4ce2-bd0a-c7ac56a60f25': {
        brand: 'Cartier',
        name: 'Cartier Santos Blue Lacquer — Box Set',
        price: 125000,
        currency: 'NGN',
        description: 'Santos with electric-blue lacquered bezel on steel bracelet, full Cartier box.',
        longDescription:
            'Cartier Santos de Cartier featuring a signature blue lacquered bezel, white Roman-numeral dial, blue steel hands and matching blued-screw details. Presented in the complete Cartier red leather gift box and shopping bag.',
    },

    'c97e4fa1-7626-4e96-bd48-de32a0620da3': {
        brand: 'Cartier',
        name: 'Cartier Santos Tattoo Crested Blue Dial',
        price: 170000,
        currency: 'NGN',
        description: 'Cartier Santos with a bold crested blue dial and distinctive polished detailing.',
        longDescription:
            'A refined Cartier Santos timepiece featuring a striking blue dial, signature Roman numerals, and elegant finishing suited for collectors and everyday wear.',
    },

    '120c7300-5890-4743-9118-5e90330cd95c': {
        brand: 'Tomi',
        name: 'Tomi Matte Black Minimalist',
        price: 24000,
        currency: 'NGN',
        description: 'Gunmetal sunburst dial on a matte black integrated bracelet.',
        longDescription:
            'Tomi minimalist dress watch with a grey sunburst dial, slender baton hands, date window at 3 o\'clock, and a polished-link black steel bracelet. Comes in the signature Tomi black gift box.',
    },

    '17304791-8bca-48f4-b136-d164ded5a52a': {
        brand: 'Poedagar',
        name: 'Poedagar Nautilus Rose-Gold Duo',
        price: 24000,
        currency: 'NGN',
        description: 'Rose-gold Nautilus-style pair in green and black dials on brown leather.',
        longDescription:
            'Poedagar Nautilus-inspired pair sharing a brushed rose-gold case and an octagonal bezel. One features an emerald green horizontally-ribbed dial, the other a pitch-black version — both with matching brown crocodile-grain leather straps and date windows.',
    },

    '1e1e92cc-2ed9-4198-a363-9e73a4c54ad0': {
        brand: 'Tomi',
        name: 'Tomi Sunset Red Minimalist',
        price: 24000,
        currency: 'NGN',
        description: 'Vibrant orange-red sunburst dial on a matte black metal bracelet.',
        longDescription:
            'Tomi bold minimalist with a vivid sunset-orange radial dial fading to deep red at the edge, slim baton hands, date window, and a ribbed matte-black link bracelet. Sold in Tomi branded gift box.',
    },

    '2c5433e6-a71d-46a1-bca8-a1ef229a7543': {
        brand: 'Tomi',
        name: 'Tomi Face Gear Open-Heart — White Dial Set',
        price: 28000,
        currency: 'NGN',
        description: 'Skeleton open-heart dial with interchangeable black and brown leather straps.',
        longDescription:
            'Tomi Face Gear mechanical-look watch with a silver sunburst dial, visible balance wheel at 9 o\'clock, Roman numerals and coloured seconds hand. Comes with two swappable straps — black and tan leather — inside a curated Tomi gift set box.',
    },

    '3432a84a-96b5-4efb-bd2b-c7e948aa2e30': {
        brand: 'Tomi',
        name: 'Tomi Face Gear Open-Heart — Black Dial Set',
        price: 28000,
        currency: 'NGN',
        description: 'Black open-heart dial with interchangeable black and brown leather straps.',
        longDescription:
            'Tomi Face Gear with a black horizontally-striped dial, exposed balance wheel, rose-gold case, and Roman-numeral chapter ring. Includes a black and a brown leather strap inside a Tomi presentation set.',
    },

    '44ef5463-d019-4895-9b1e-1b1160d8abd3': {
        brand: 'Tomi',
        name: 'Tomi Face Gear Diver — Black NATO Set',
        price: 28000,
        currency: 'NGN',
        description: 'Diver-style black dial with NATO and canvas interchangeable straps.',
        longDescription:
            'Tomi Face Gear diver edition with a dark textured dial, luminous baton markers, and a rotating chapter ring. Presented with a black NATO strap and a sand-coloured canvas strap inside the Tomi gift set box.',
    },

    '49035e1b-9b08-4354-be1d-3ff7d218c021': {
        brand: 'Cartier',
        name: 'Cartier Santos Dumont Diamond Bezel',
        price: 125000,
        currency: 'NGN',
        description: 'Santos Dumont with diamond-set bezel, white dial and brown alligator strap.',
        longDescription:
            'Cartier Santos Dumont in steel with a factory diamond-set bezel, silver white guilloche dial, blued Roman numerals and hands, and a brown alligator leather strap. Full Cartier box and Swiss International Guarantee included.',
    },

    '5191ca3a-04fd-4bab-b497-6993a904b659': {
        brand: 'Tomi',
        name: 'Tomi Gold-Grey Minimalist',
        price: 24000,
        currency: 'NGN',
        description: 'Charcoal sunburst dial on a full gold-tone integrated bracelet.',
        longDescription:
            'Tomi slim minimalist with a dark grey radial dial, gold baton hands, date window, and an integrated gold-tone link bracelet. Ships in the Tomi signature black box.',
    },

    '5b03f614-5354-45b3-ad5d-868a5346e457': {
        brand: 'Tomi',
        name: 'Tomi Champagne Minimalist',
        price: 24000,
        currency: 'NGN',
        description: 'Warm champagne sunburst dial on a polished silver steel bracelet.',
        longDescription:
            'Tomi dress watch with a warm champagne radial dial, slender silver baton hands, date window at 3 o\'clock, and a polished stainless steel link bracelet. Comes in Tomi branded black gift box.',
    },

    '5c509019-c58a-4262-b14e-16731afce506': {
        brand: 'Cartier',
        name: 'Cartier Santos Blue Bezel Steel Bracelet',
        price: 130000,
        currency: 'NGN',
        description: 'Santos with blue lacquered bezel on a steel bracelet — wrist shot.',
        longDescription:
            'Cartier Santos de Cartier large model in stainless steel with a bold blue ADLC-coated bezel and screws, silver guilloché dial, blued Roman-numeral numerals, date at 4:30, and a quick-release steel link bracelet.',
    },

    '6078f7a9-7085-4736-ad79-f33f31e59b8b': {
        brand: 'Cartier',
        name: 'Cartier Santos Black PVD',
        price: 130000,
        currency: 'NGN',
        description: 'All-black PVD Santos with white Roman numerals and gold second hand.',
        longDescription:
            'Cartier Santos de Cartier in full matte-black PVD coating with white painted Roman numerals, gold baton second hand, date window, and a matching black link bracelet. Presented with Cartier red tag, certificate, and box.',
    },

    '71a7783c-f075-436a-a0a0-4c415f77af2b': {
        brand: 'Tomi',
        name: 'Tomi Face Gear Open-Heart — Silver Dial Set',
        price: 28000,
        currency: 'NGN',
        description: 'Silver skeleton open-heart dial with black and navy leather interchangeable straps.',
        longDescription:
            'Tomi Face Gear with a silver dial featuring an exposed tourbillon-style balance wheel, painted Roman numerals, blue seconds hand, and a matte black case. Comes with a black and a deep navy leather strap in a Tomi gift set.',
    },

    '9ea4e2b6-eab2-44e0-8393-dd941cc985ff': {
        brand: 'Poedagar',
        name: 'Poedagar Nautilus Blue Chronograph Steel',
        price: 32000,
        currency: 'NGN',
        description: 'Blue horizontal-ribbed Nautilus chronograph on a steel bracelet.',
        longDescription:
            'Poedagar Nautilus-style chronograph with a vibrant blue horizontally-striped dial, three white sub-dials for elapsed time, date window, chronograph pushers, and a brushed stainless steel integrated bracelet. Logo-embossed crown at 3 o\'clock.',
    },

    'a55815c8-14c0-49f9-8cc7-a1f1b73ee3bf': {
        brand: 'Tomi',
        name: 'Tomi Face Gear Cream Balance — Canvas Set',
        price: 28000,
        currency: 'NGN',
        description: 'Cream exposed balance-wheel dial with NATO and canvas straps.',
        longDescription:
            'Tomi Face Gear with a cream-coloured dial, visible oscillating balance wheel, outer minute track and decorative gears. Comes with a grey NATO canvas strap and a charcoal saffiano-texture strap inside the Tomi gift set box.',
    },

    'ae4333ca-f778-4040-985e-6fbf1a52d57f': {
        brand: 'Tomi',
        name: 'Tomi Face Gear Black Open-Heart — Tan Set',
        price: 28000,
        currency: 'NGN',
        description: 'Black open-heart dial with tan and black interchangeable leather straps.',
        longDescription:
            'Tomi Face Gear with a black dial, rose-gold case, exposed balance wheel and Roman-numeral ring. Interchangeable tan grain leather and black leather straps included inside a Tomi presentation box.',
    },

    'b4e0cb13-dbb4-4d1b-9ad7-0da0f2c64d06': {
        brand: 'Cartier',
        name: 'Cartier Santos Dumont Classic Steel',
        price: 125000,
        currency: 'NGN',
        description: 'Iconic Santos Dumont steel with white dial and brown alligator strap.',
        longDescription:
            'Cartier Santos Dumont in polished steel with a silver white guilloche dial, raised Roman numerals, blue steel hands, and a brown alligator crocodile strap. Comes with full Cartier red box, papers, and Swiss Guarantee card.',
    },

    'b626cc54-e681-4952-90cc-6c18d36866e8': {
        brand: 'Tomi',
        name: 'Tomi Face Gear Dark Dual-Strap Set',
        price: 28000,
        currency: 'NGN',
        description: 'Dark open-heart dial with black and brown interchangeable strap gift set.',
        longDescription:
            'Tomi Face Gear with a charcoal dial, skeleton balance wheel, and rose-gold bezel detail. Presented with a brown leather strap and a matte black strap inside a Tomi gift-set box.',
    },

    'c42a7092-68cb-480b-82ea-27a2f1f9d21e': {
        brand: 'Poedagar',
        name: 'Poedagar Magnetic Blue Edition',
        price: 30000,
        currency: 'NGN',
        description: 'All-blue ion-plated magnetic ball-bearing time display.',
        longDescription:
            'Poedagar avant-garde magnetic watch fully coated in electric blue ion-plating. Time is indicated by two ferrofluid ball bearings that roll around a textured chapter ring. Octagonal case with the Poedagar shield emblem at centre.',
    },

    'c4ae2aff-bdc4-487c-9bb1-a9b30227db42': {
        brand: 'Poedagar',
        name: 'Poedagar Nautilus Navy Steel',
        price: 25000,
        currency: 'NGN',
        description: 'Navy-blue horizontal-ribbed Nautilus dial on a steel integrated bracelet.',
        longDescription:
            'Poedagar Nautilus-inspired watch with a deep navy horizontally-textured dial, lumed baton markers, date at 3 o\'clock, and a brushed stainless-steel integrated bracelet with a butterfly clasp.',
    },

    'cd203c0a-7cda-444b-9a46-8a9ba2d3ccb8': {
        brand: 'Poedagar',
        name: 'Poedagar Magnetic Black Edition',
        price: 30000,
        currency: 'NGN',
        description: 'All-matte-black magnetic ball-bearing time display.',
        longDescription:
            'Poedagar all-matte-black magnetic watch where two ball bearings roll around a circular chapter ring to indicate hours and minutes. Octagonal case in black PVD with the Poedagar shield logo engraved at centre.',
    },

    'd09db03b-f4d2-4e29-9195-ddaf48f8ff69': {
        brand: 'Poedagar',
        name: 'Poedagar Black Gold Chronograph',
        price: 32000,
        currency: 'NGN',
        description: 'Black Nautilus chronograph with gold sub-dials and integrated bracelet.',
        longDescription:
            'Poedagar full-black Nautilus-style chronograph with a horizontally-ribbed black dial, gold-tipped baton markers, three gold-ringed sub-dials, date window at 4:30, chronograph pushers, and a black integrated steel bracelet.',
    },

    'da93ba6e-36e2-4488-aeb2-85e4d7d785bb': {
        brand: 'Poedagar',
        name: 'Poedagar Gold Champagne Chronograph',
        price: 32000,
        currency: 'NGN',
        description: 'All-gold Nautilus chronograph with champagne dial and triple sub-dials.',
        longDescription:
            'Poedagar all-gold Nautilus-inspired chronograph with a champagne horizontally-textured dial, three gold sub-dials, date window, and a full gold-tone integrated link bracelet. Presented with Poedagar warranty card.',
    },

    // ── EXISTING CATALOG (IMG_ series, added 2026-07-08) ──────────────────
    img_3676: {
        brand: 'Poedagar',
        name: 'Poedagar Genius Open Heart Mechanical',
        price: 32000,
        currency: 'NGN',
        description: 'Open-heart mechanical dial with globe sub-dial and black leather strap.',
        longDescription:
            'Poedagar 1853 Genius with a skeleton window at 6 o\'clock revealing the mechanical movement, retrograde gauge at 12, and a textured silver dial. Finished with a black crocodile-grain leather strap.',
    },
    img_3678: {
        brand: 'Poedagar',
        name: 'Poedagar 1853 Globe Dial Steel',
        price: 32000,
        currency: 'NGN',
        description: 'Charcoal sunburst dial with globe sub-dial on a stainless jubilee bracelet.',
        longDescription:
            'Poedagar 1853 with a charcoal sunburst dial, fan-shaped power reserve at 12, engraved globe sub-dial at 6, and a folded stainless steel jubilee-style bracelet.',
    },
    img_3679: {
        brand: 'Emporio Armani',
        name: 'Emporio Armani Classic Chronograph',
        price: 185000,
        currency: 'NGN',
        description: 'Two-tone chronograph with silver sunray dial and black leather strap.',
        longDescription:
            'Emporio Armani chronograph with a silver sunray dial, rose-gold sub-dials and bezel, date window at 4 o\'clock, and a black textured leather strap with contrast stitching.',
    },
    img_3680: {
        brand: 'Cartier',
        name: 'Cartier Santos Green Dial Engraved',
        price: 170000,
        currency: 'NGN',
        description: 'Custom-engraved Santos with emerald green Roman numeral dial.',
        longDescription:
            'Cartier Santos de Cartier with a sunburst emerald green dial, Roman numerals, date at 6 o\'clock, and ornate floral engraving across the case and bracelet.',
    },
    img_3750: {
        brand: 'Tomi',
        name: 'Tomi Modern Steel Chronograph',
        price: 32000,
        currency: 'NGN',
        description: 'Polished steel chronograph with a clean contemporary dial.',
        longDescription:
            'A newly added chronograph with a refined dial, polished steel case, and a sleek profile built for everyday wear.',
    },
    img_3751: {
        brand: 'Tomi',
        name: 'Tomi Minimalist Silver Edition',
        price: 32000,
        currency: 'NGN',
        description: 'Minimalist silver watch with a premium finish and modern shape.',
        longDescription:
            'A newly added timepiece with a slim profile, understated dial, and contemporary detailing for daily elegance.',
    },
    img_3682: {
        brand: 'Poedagar',
        name: 'Poedagar Joker Dial',
        price: 30000,
        currency: 'NGN',
        description: 'Playful joker-face dial with dual-eye time display and tri-color strap.',
        longDescription:
            'Poedagar 1853 Joker edition with eye sub-dials for hours and minutes, a grinning red mouth aperture, green crocodile-grain upper strap, and white leather lower strap with red racing stripe.',
    },
    img_3684: {
        brand: 'Tomi',
        name: 'Tomi Orange Sunburst Metallic',
        price: 28000,
        currency: 'NGN',
        description: 'Orange-to-black sunburst dial on a black integrated metal bracelet.',
        longDescription:
            'Tomi dress watch with a vivid orange sunburst dial fading to black, baton indices, date at 3 o\'clock, and a black integrated link bracelet with a ribbed finish.',
    },
    img_3685: {
        brand: 'Poedagar',
        name: 'Poedagar Black Sport Quartz',
        price: 27500,
        currency: 'NGN',
        description: 'Octagonal black sport watch with gold indices and day-date display.',
        longDescription:
            'Poedagar sport watch with a matte black octagonal bezel, horizontally textured dial, gold baton markers, day-date window at 3, and an integrated black rubber strap.',
    },
    img_3686: {
        brand: 'Poedagar',
        name: 'Poedagar Green Gold Two-Tone',
        price: 26000,
        currency: 'NGN',
        description: 'Green dial two-tone steel with gold bezel and day-date window.',
        longDescription:
            'Poedagar quartz with a green square-textured dial, gold-tone bezel, day-date at 3 o\'clock, and a brushed stainless steel link bracelet.',
    },
    img_3687: {
        brand: 'Poedagar',
        name: 'Poedagar Classic Business Day-Date',
        price: 28000,
        currency: 'NGN',
        description: 'Silver sunray dial with Roman numerals and brown leather strap.',
        longDescription:
            'Poedagar business dress watch with a silver sunburst dial, Roman numerals, crystal hour markers, day-date window, two-tone case, and brown crocodile-grain leather strap.',
    },
    img_3688: {
        brand: 'Forsining',
        name: 'Forsining Classic Black Leather',
        price: 28000,
        currency: 'NGN',
        description: 'Black dial with Roman numerals, crystal markers, and day-date.',
        longDescription:
            'Forsining dress watch with a black dial, silver Roman numerals at 3/6/9/12, crystal-studded hour markers, day-date window, and black crocodile-grain leather strap.',
    },
    img_3689: {
        brand: 'Poedagar',
        name: 'Poedagar Square Steel — Silver & Navy',
        price: 28000,
        currency: 'NGN',
        description: 'Pair of square Poedagar watches in silver and navy blue dials.',
        longDescription:
            'Poedagar square-case duo with screw-set bezels, textured dials in silver and navy blue, sword hands, and matching stainless steel link bracelets.',
    },
    img_3690: {
        brand: 'Poedagar',
        name: 'Poedagar Chronograph Sport Tan',
        price: 36500,
        currency: 'NGN',
        description: 'Black case chronograph with tan dial and suede leather strap.',
        longDescription:
            'Poedagar sport chronograph with a black case, tan diamond-textured dial, three sub-dials, date window, and a tan suede strap with contrast stitching.',
    },
    img_3691: {
        brand: 'Poedagar',
        name: 'Poedagar Emerald Green Leather',
        price: 26000,
        currency: 'NGN',
        description: 'Emerald sunburst dial with day-date and green leather strap.',
        longDescription:
            'Poedagar with an emerald green sunburst dial, silver baton indices, day-date at 3 o\'clock, angular steel case, and matching green crocodile-grain leather strap.',
    },
    img_3692: {
        brand: 'Poedagar',
        name: 'Poedagar Gold Integrated Bracelet',
        price: 35000,
        currency: 'NGN',
        description: 'All-gold integrated bracelet watch with day-date display.',
        longDescription:
            'Poedagar quartz in a full gold-tone finish with a textured grid dial, day-date window, and integrated flat-link bracelet.',
    },
    img_3693: {
        brand: 'Poedagar',
        name: 'Poedagar Emerald Green Gold Bezel',
        price: 26000,
        currency: 'NGN',
        description: 'Green sunburst dial with gold bezel on a steel link bracelet.',
        longDescription:
            'Poedagar with an emerald sunburst dial, gold-tone bezel and crown, day-date complication, and a brushed stainless steel integrated bracelet.',
    },
    img_3694: {
        brand: 'Poedagar',
        name: 'Poedagar Classic Black Dial Steel',
        price: 26000,
        currency: 'NGN',
        description: 'Black sunburst dial with day-date on an integrated steel bracelet.',
        longDescription:
            'Poedagar dress watch with a black sunray dial, silver indices, day-date at 3 o\'clock, and a slim integrated stainless steel bracelet.',
    },
    img_3695: {
        brand: 'Casio',
        name: 'Casio Enticer Gold Multi-Dial',
        price: 21500,
        currency: 'NGN',
        description: 'Gold-tone Casio with day, date, and 24-hour sub-dials.',
        longDescription:
            'Casio Enticer-style gold watch with a cushion case, multi-function sub-dials including day/date and 24-hour indicator, and a matching gold link bracelet.',
    },
    img_3696: {
        brand: 'Poedagar',
        name: 'Poedagar Black Dial Leather',
        price: 26000,
        currency: 'NGN',
        description: 'Black dial tonneau case with day-date and leather strap.',
        longDescription:
            'Poedagar with a black dial, silver baton markers, day-date window, angular polished case, and black crocodile-grain leather strap.',
    },
    img_3697: {
        brand: 'Casio',
        name: 'Casio MTP-M300 Moon Phase Duo',
        price: 50000,
        currency: 'NGN',
        description: 'Gold and black Casio pair with moon phase and multi-dial face.',
        longDescription:
            'Casio MTP-M300 series shown in gold and black ion-plated finishes, each with minute/second sub-dials, moon phase indicator, date window, and stainless link bracelet.',
    },
    img_3698: {
        brand: 'Poedagar',
        name: 'Poedagar Luxury Chronograph Blue Dial',
        price: 30000,
        currency: 'NGN',
        description: 'Blue sunburst chronograph with Roman numerals and crystal markers.',
        longDescription:
            'Poedagar chronograph with a sunburst blue dial, three sub-dials, Roman numerals, crystal hour markers, date window, black case, and black crocodile-grain leather strap.',
    },
    img_3700: {
        brand: 'Patek Philippe',
        name: 'Patek Philippe Sky Moon Tourbillon',
        price: 250000,
        currency: 'NGN',
        description: 'Hand-engraved grand complication with tourbillon and moon phase.',
        longDescription:
            'Patek Philippe Sky Moon Tourbillon-style grand complication with hand-engraved case, guilloché dial, visible tourbillon at 10 o\'clock, moon phase at 6, and black alligator leather strap.',
    },
    img_3750: {
        brand: 'Casio',
        name: 'Casio Quartz Blue Leather',
        price: 13500,
        currency: 'NGN',
        description: 'Navy dial Casio quartz on a blue leather strap.',
        longDescription:
            'Casio dress watch with a deep navy dial, silver-tone cushion case, quartz movement, water resistance, and a smooth blue leather strap.',
    },
    img_3751: {
        brand: 'Casio',
        name: 'Casio Silver Square Black Dial',
        price: 15000,
        currency: 'NGN',
        description: 'Square black pinstripe dial on a silver steel bracelet.',
        longDescription:
            'Casio with a square black vertically striped dial, silver baton markers, chronograph-style pushers, and a polished stainless steel link bracelet.',
    },
    img_3752: {
        brand: 'Casio',
        name: 'Casio Silver Cushion Sunray',
        price: 15000,
        currency: 'NGN',
        description: 'Silver sunburst cushion dial with date at 6 on steel bracelet.',
        longDescription:
            'Casio cushion-case watch with a silver sunray dial, baton indices, date window at 6 o\'clock, and a three-link stainless steel bracelet.',
    },
    img_3753: {
        brand: 'Casio',
        name: 'Casio Gold Quartz Black Leather',
        price: 13500,
        currency: 'NGN',
        description: 'Gold cushion case with champagne dial and black leather strap.',
        longDescription:
            'Casio gold-tone dress watch with a champagne sunburst dial, quartz movement, water resistance, and a textured black leather strap.',
    },
    img_3754: {
        brand: 'Casio',
        name: 'Casio Green Dial Black Steel',
        price: 15000,
        currency: 'NGN',
        description: 'Emerald sunburst dial in a black ion-plated steel case and bracelet.',
        longDescription:
            'Casio with a vivid green sunburst dial, date at 3 o\'clock, black ion-plated cushion case, and matching black stainless steel link bracelet. Water resistant.',
    },
};
