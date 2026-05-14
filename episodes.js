// ─────────────────────────────────────────────────────────────────
//  GNLU OBITER — EPISODE DATA
//  To add a new episode, copy one of the blocks below and fill it in.
//  Each object = one card in the archive grid.
//
//  FIELDS:
//    number      — episode number string, e.g. "11"
//    part        — (optional) part number for multi-part episodes, e.g. 1
//    totalParts  — (optional) total parts count, e.g. 2
//    comingSoon  — (optional) set true if this part isn't uploaded yet
//    guest       — full guest name with honorific
//    guestShort  — shorter version for cards
//    designation — guest's role/institution
//    photoFile   — filename of guest photo (place in same folder)
//    shortTitle  — card headline (keep under ~60 chars)
//    fullTitle   — full YouTube title
//    date        — release date string
//    url         — full YouTube watch URL
//    description — 1–2 sentences about the episode
//    tags        — array of topic strings
//    quote       — (optional) memorable quote from the guest
// ─────────────────────────────────────────────────────────────────

const episodes = [
  {
    number: "01",
    guest: "Prof. (Dr.) Sanjeevi Shanthakumar",
    guestShort: "Prof. Sanjeevi Shanthakumar",
    designation: "Director, Gujarat National Law University",
    photoFile: "guest_shanthakumar.jpg",
    shortTitle: "GNLU 101 with Director Shanthakumar",
    fullTitle: "GNLU 101 with Director Prof. Dr. Sanjeevi Shanthakumar │ Ep.1",
    date: "17 Feb 2025",
    url: "https://www.youtube.com/watch?v=B4OcfTLiTRU",
    description: "The inaugural episode features the Director of GNLU himself, covering the university's vision, academic culture, and what it means to be a national law school.",
    tags: ["Legal Education", "Law School", "NLU", "GNLU", "Institutional Leadership"]
  },
  {
    number: "02",
    guest: "Prof. Wolf-Georg Ringe",
    guestShort: "Prof. Wolf-Georg Ringe",
    designation: "Professor of Law & Finance, University of Hamburg",
    photoFile: "guest_ringe.jpg",
    shortTitle: "Economics, AI, Fintech & Law",
    fullTitle: "Economics, AI, Fintech & Law ft. Prof. Wolf-Georg Ringe",
    date: "14 Apr 2025",
    url: "https://www.youtube.com/watch?v=NZggPduZXQU",
    description: "A deep-dive into how AI, blockchain, and quantum computing are reshaping global financial regulation, set against rising US tariffs and implications for India.",
    tags: ["Fintech", "AI & Law", "Blockchain", "International Trade", "Tariffs"]
  },
  {
    number: "03",
    guest: "Sr. Adv. Saurabh Soparkar",
    guestShort: "Sr. Adv. Saurabh Soparkar",
    designation: "Senior Advocate, Gujarat High Court",
    photoFile: "guest_soparkar.jpg",
    shortTitle: "Arbitration, Taxation & Commercial Litigation",
    fullTitle: "Arbitration, Taxation and Commercial Litigation",
    date: "6 May 2025",
    url: "https://www.youtube.com/watch?v=7yDUb0-RAyY",
    description: "One of Gujarat's most formidable Senior Advocates opens up about building a career spanning taxation, arbitration, and commercial litigation.",
    tags: ["Arbitration", "Taxation", "Commercial Litigation", "Gujarat HC"]
  },
  {
    number: "04",
    guest: "Dr. Nidhi Buch",
    guestShort: "Dr. Nidhi Buch",
    designation: "Associate Professor, Gujarat National Law University",
    photoFile: "guest_buch.jpg",
    shortTitle: "How to Get Internships in Law School?",
    fullTitle: "How to get Internships in Law School?",
    date: "24 May 2025",
    url: "https://www.youtube.com/watch?v=4pP7EodGxFY",
    description: "Dr. Nidhi Buch decodes what it takes to thrive in law school — from finding internships to CV-building, PPOs, and overcoming common mistakes.",
    tags: ["Internships", "Law School", "Career Guidance", "CV Building"]
  },
  {
    number: "05",
    guest: "Shri Kamal B. Trivedi",
    guestShort: "Shri Kamal B. Trivedi",
    designation: "Advocate General of Gujarat; Senior Advocate, Gujarat HC",
    photoFile: "guest_trivedi.jpg",
    shortTitle: "Ethics of a Lawyer │ Advocate General Kamal Trivedi",
    fullTitle: "Ethics of a Lawyer │ Advocate General Kamal Trivedi",
    date: "21 Jun 2025",
    url: "https://www.youtube.com/watch?v=lMfGXw65LfQ",
    description: "The Advocate General of Gujarat speaks candidly about legal ethics, professional conduct, and the responsibility of representing the State.",
    tags: ["Legal Ethics", "Advocate General", "Constitutional Law", "Gujarat HC"],
    quote: "You need to have a killer instinct, and unless you have a killing instinct, perhaps you will not be able to come up."
  },
  {
    number: "06",
    part: 1,
    totalParts: 1,
    comingSoon: false,
    guest: "Sr. Adv. Shalin Mehta",
    guestShort: "Sr. Adv. Shalin Mehta",
    designation: "Senior Advocate, Gujarat High Court",
    photoFile: "guest_mehta.jpg",
    shortTitle: "Essential Skills for Lawyers │ Part 1",
    fullTitle: "Essential Skills for Lawyers │ Sr. Adv. Shri Shalin Mehta │ Part 1",
    date: "19 Jul 2025",
    url: "https://www.youtube.com/watch?v=lMfGXw65LfQ",
    description: "One of the youngest Senior Advocates of the Gujarat High Court reflects on courtroom fundamentals and the mindset required to thrive in litigation.",
    tags: ["Advocacy Skills", "Litigation", "Gujarat HC", "Mentorship"],
    quote: "The Chief Justice called me in chambers and said, 'Look, Mr. Mehta, today I'm your client. Now, what is your recommendation?'"
  },
  {
    number: "07",
    guest: "Justice C.K. Thakker (C.K. Takwani)",
    guestShort: "Justice C.K. Thakker",
    designation: "Former Judge, Supreme Court of India",
    photoFile: "guest_thakker.jpg",
    shortTitle: "Retd. Supreme Court Judge Solves Doubts!",
    fullTitle: "Retd Supreme Court Judge Solves Doubts! │ Justice CK Thakker",
    date: "24 Aug 2025",
    url: "https://www.youtube.com/watch?v=fO0XRvM6Mic",
    description: "Justice C.K. Thakker — a legendary jurist who served on the Supreme Court — answers law student questions and reflects on a lifetime at the Bar and Bench.",
    tags: ["Supreme Court", "Administrative Law", "Judiciary", "Jurisprudence"]
  },
  {
    number: "08",
    guest: "Sr. Adv. Chander M. Lall",
    guestShort: "Sr. Adv. Chander M. Lall",
    designation: "Senior Advocate, Delhi HC & Supreme Court of India",
    photoFile: "guest_lall.jpg",
    shortTitle: "What Judges Really Look For in Arguments",
    fullTitle: "What Judges Really Look For in Arguments │ Senior Advocate Chander Lall",
    date: "24 Dec 2025",
    url: "https://www.youtube.com/watch?v=MxXAfm6jGbM",
    description: "One of India's foremost IP advocates shares the insider view of what judges actually look for when they hear arguments.",
    tags: ["Intellectual Property", "Advocacy", "Delhi HC", "Litigation Strategy"],
    quote: "If the Bench starts feeling that you are not on their side and that you will mislead them at the shortest opportunity, you are cooked as a lawyer."
  },
  {
    number: "09",
    guest: "His Excellency Mohan Peiris PC",
    guestShort: "H.E. Mohan Peiris",
    designation: "Former Chief Justice of Sri Lanka; Former VP, UN General Assembly",
    photoFile: "guest_peiris.jpg",
    shortTitle: "Lessons from Courtroom, Judiciary & Diplomacy at UN",
    fullTitle: "Lessons from Courtroom, Judiciary & Diplomacy at United Nations",
    date: "14 Feb 2026",
    url: "https://www.youtube.com/watch?v=E-XT0MncNRg",
    description: "A distinguished jurist and diplomat — former VP of UN General Assembly, Chief Justice of Sri Lanka — shares lessons from courtroom to diplomacy.",
    tags: ["Diplomacy", "UN", "Judiciary", "India-Sri Lanka"],
    quote: "A judge's relationship with language is a diplomat's greatest tool."
  },
  {
    number: "10",
    part: 1,
    totalParts: 2,
    comingSoon: false,
    guest: "Sr. Adv. Gourab Banerji",
    guestShort: "Sr. Adv. Gourab Banerji",
    designation: "Senior Advocate, Supreme Court of India; President, Arbitration Bar of India",
    photoFile: "guest_banerji.jpg",
    shortTitle: "Lessons from Fali, Jaitley, Rohinton & Courtroom │ Part 1",
    fullTitle: "Lessons from Fali, Jaitley, Rohinton & Courtroom │ Part 1/2",
    date: "21 Mar 2026",
    url: "https://www.youtube.com/watch?v=2lM-FbyXvWo",
    description: "Part 1 covers lessons from working alongside Fali Nariman, Arun Jaitley, Rohinton Nariman, and the lived experience of the Supreme Court courtroom.",
    tags: ["Supreme Court", "Arbitration", "Mentorship", "Advocacy", "Legal Legacy"]
  },
  {
    number: "10",
    part: 2,
    totalParts: 2,
    comingSoon: false,
    guest: "Sr. Adv. Gourab Banerji",
    guestShort: "Sr. Adv. Gourab Banerji",
    designation: "Senior Advocate, Supreme Court of India; President, Arbitration Bar of India",
    photoFile: "guest_banerji.jpg",
    shortTitle: "First Day at Supreme Court, International Arbitration & Views on Life │ Part 2",
    fullTitle: "First Day at Supreme Court, International Arbitration & Views on Life │ Part 2/2",
    date: "21 Mar 2026",
    url: "https://www.youtube.com/watch?v=wslQ1h5CK_M",
    description: "Part 2 covers his first day at the Supreme Court, philosophy on international arbitration, and broader views on life in law.",
    tags: ["International Arbitration", "Supreme Court", "Personal Philosophy", "Advocacy"],
    quote: "In an international arbitration, you have to be fully prepared three months in advance."
  }
];
