// ─────────────────────────────────────────────────────────────────
//  GNLU OBITER — TEAM & GUEST DATA
//
//  GUESTS: Add a new guest by copying a block and filling it in.
//    photoFile follows the pattern: guest_[lastname].jpg
//    Place the photo file in the same folder as index.html.
//    linkedin  — paste the full LinkedIn profile URL here.
//               Leave as "" if not available; card won't be clickable.
//
//  CORE TEAM / MEMBERS: Same process.
//    photoFile follows the pattern: team_[firstname].jpg
// ─────────────────────────────────────────────────────────────────

const guests = [
  {
    name: "Prof. (Dr.) Sanjeevi Shanthakumar",
    designation: "Director, Gujarat National Law University",
    photoFile: "guest_shanthakumar.jpg",
    linkedin: ""
  },
  {
    name: "Prof. Wolf-Georg Ringe",
    designation: "Professor of Law & Finance, University of Hamburg",
    photoFile: "guest_ringe.jpg",
    linkedin: ""
  },
  {
    name: "Sr. Adv. Saurabh Soparkar",
    designation: "Senior Advocate, Gujarat High Court",
    photoFile: "guest_soparkar.jpg",
    linkedin: ""
  },
  {
    name: "Dr. Nidhi Buch",
    designation: "Associate Professor, Gujarat National Law University",
    photoFile: "guest_buch.jpg",
    linkedin: ""
  },
  {
    name: "Shri Kamal B. Trivedi",
    designation: "Advocate General of Gujarat; Senior Advocate, Gujarat HC",
    photoFile: "guest_trivedi.jpg",
    linkedin: ""
  },
  {
    name: "Sr. Adv. Shalin Mehta",
    designation: "Senior Advocate, Gujarat High Court",
    photoFile: "guest_mehta.jpg",
    linkedin: ""
  },
  {
    name: "Justice C.K. Thakker (C.K. Takwani)",
    designation: "Former Judge, Supreme Court of India; Former Chief Justice, Bombay HC & HP HC",
    photoFile: "guest_thakker.jpg",
    linkedin: ""
  },
  {
    name: "Sr. Adv. Chander M. Lall",
    designation: "Senior Advocate, Delhi HC & Supreme Court of India",
    photoFile: "guest_lall.jpg",
    linkedin: ""
  },
  {
    name: "His Excellency Mohan Peiris PC",
    designation: "Former Chief Justice of Sri Lanka; Former VP, UN General Assembly",
    photoFile: "guest_peiris.jpg",
    linkedin: ""
  },
  {
    name: "Sr. Adv. Gourab Banerji",
    designation: "Senior Advocate, Supreme Court of India; President, Arbitration Bar of India",
    photoFile: "guest_banerji.jpg",
    linkedin: ""
  }
];

// ─────────────────────────────────────────────────────────────────
//  CORE TEAM
// ─────────────────────────────────────────────────────────────────

const coreTeam = [
  {
    name: "Swayam M. Shah",
    role: "Convenor",
    batch: "Batch 2023–2028",
    photoFile: "team_swayam.jpg",
    linkedin: "https://in.linkedin.com/in/swayammehulshah"
  },
  {
    name: "Devansh Yadav",
    role: "Convenor",
    batch: "Batch 2023–2028",
    photoFile: "team_devansh.jpg",
    linkedin: ""
  },
  {
    name: "Saumil Agarwal",
    role: "Secretary",
    batch: "Batch 2023–2028",
    photoFile: "team_saumil.jpg",
    linkedin: "https://www.linkedin.com/in/saumilagarwal7"
  },
  {
    name: "Tanisha Brahmin",
    role: "Co-Secretary",
    batch: "Batch 2023–2028",
    photoFile: "team_tanisha.jpg",
    linkedin: ""
  },
  {
    name: "Kale Sanskruti Madhukar",
    role: "Magazine Head",
    batch: "Batch 2022–2027",
    photoFile: "team_kale.jpg",
    linkedin: ""
  },
  {
    name: "Sara Dharwadkar",
    role: "Research Head",
    batch: "Batch 2023–2028",
    photoFile: "team_sara.jpg",
    linkedin: ""
  },
  {
    name: "Kush Chaudhary",
    role: "Logistics Head",
    batch: "Batch 2023–2028",
    photoFile: "team_kush.jpg",
    linkedin: ""
  },
  {
    name: "Rhuhi Sisodia",
    role: "Social Media Head",
    batch: "Batch 2023–2028",
    photoFile: "team_rhuhi.jpg",
    linkedin: "https://www.linkedin.com/in/rhuhisisodia"
  }
];

// ─────────────────────────────────────────────────────────────────
//  MEMBERS
// ─────────────────────────────────────────────────────────────────

const members = [
  {
    name: "Hemang Nagpal",
    role: "Member",
    batch: "Batch 2023–2028",
    photoFile: "team_hemang.jpg",
    linkedin: ""
  },
  {
    name: "Jhalak Singh",
    role: "Member",
    batch: "Batch 2023–2028",
    photoFile: "team_jhalak.jpg",
    linkedin: ""
  },
  {
    name: "Monish Khaisagi",
    role: "Member",
    batch: "Batch 2023–2028",
    photoFile: "team_monish.jpg",
    linkedin: ""
  },
  {
    name: "Prisha Mehta",
    role: "Member",
    batch: "Batch 2023–2028",
    photoFile: "team_prishashah.jpg",
    linkedin: "https://www.linkedin.com/in/prisha-mehta-"
  },
  {
    name: "Siddharth Dev Prasad",
    role: "Member",
    batch: "Batch 2023–2028",
    photoFile: "team_siddharth.jpg",
    linkedin: "https://www.linkedin.com/in/siddharth-dev-prasad-424bb8207"
  },
  {
    name: "Veer Shah",
    role: "Member",
    batch: "Batch 2023–2028",
    photoFile: "team_veer.jpg",
    linkedin: "https://www.linkedin.com/in/veer-shah-605ab32a4"
  },
  {
    name: "Chandni Garg",
    role: "Member",
    batch: "Batch 2024–2029",
    photoFile: "team_chandni.jpg",
    linkedin: "https://www.linkedin.com/in/chandnigarg25"
  },
  {
    name: "Hitesh Thoria",
    role: "Member",
    batch: "Batch 2024–2029",
    photoFile: "team_hitesh.jpg",
    linkedin: "https://www.linkedin.com/in/hitesh-thoria-0390ab309"
  },
  {
    name: "Megha Chhari",
    role: "Member",
    batch: "Batch 2024–2029",
    photoFile: "team_megha.jpg",
    linkedin: "https://www.linkedin.com/in/megha-chhari-83b0b42a5"
  },
  {
    name: "Prisha Shah",
    role: "Member",
    batch: "Batch 2024–2029",
    photoFile: "team_prisha.jpg",
    linkedin: "https://www.linkedin.com/in/prisha-shah-8a9448249"
  },
  {
    name: "Reedhav Gulati",
    role: "Member",
    batch: "Batch 2024–2029",
    photoFile: "team_reedhav.jpg",
    linkedin: "https://www.linkedin.com/in/reedhav-gulati"
  },
  {
    name: "Sakshi Choudhary",
    role: "Member",
    batch: "Batch 2024–2029",
    photoFile: "team_sakshi.jpg",
    linkedin: ""
  },
  {
    name: "Tamanna Soni",
    role: "Member",
    batch: "Batch 2024–2029",
    photoFile: "team_tamanna.jpg",
    linkedin: "https://www.linkedin.com/in/tamanna-soni06"
  },
  {
    name: "Anahita Shastri",
    role: "Member",
    batch: "Batch 2025–2030",
    photoFile: "team_anahita.jpg",
    linkedin: "https://www.linkedin.com/in/anahita-shastri-027a18389"
  },
  {
    name: "Devasya Sharma",
    role: "Member",
    batch: "Batch 2025–2030",
    photoFile: "team_devasya.jpg",
    linkedin: "https://www.linkedin.com/in/devasya-sharma-060742303"
  },
  {
    name: "Diksha Lal",
    role: "Member",
    batch: "Batch 2025–2030",
    photoFile: "team_diksha.jpg",
    linkedin: "https://www.linkedin.com/in/diksha-lal-46475b369"
  },
  {
    name: "Disha Joshi",
    role: "Member",
    batch: "Batch 2025–2030",
    photoFile: "team_disha.jpg",
    linkedin: "https://www.linkedin.com/in/dishajoshi1704"
  },
  {
    name: "Kanishka Ajwani",
    role: "Member",
    batch: "Batch 2025–2030",
    photoFile: "team_kanishka.jpg",
    linkedin: "https://www.linkedin.com/in/kanishka-ajwani-39200b362"
  },
  {
    name: "Soham Gupta",
    role: "Member",
    batch: "Batch 2025–2030",
    photoFile: "team_soham.jpg",
    linkedin: ""
  }
];
