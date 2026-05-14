# HOW TO UPDATE THE GNLU OBITER WEBSITE

No coding knowledge required. This guide covers the three most common updates.

---

## 1. ADDING A NEW EPISODE

Open the file called **`episodes.js`** in any text editor (Notepad, TextEdit, VS Code — anything works).

You'll see a list of episodes. Each one looks like a block starting with `{` and ending with `},`.

To add a new episode, **copy the block below**, paste it at the **end of the list** (just before the final `];`), and fill in your details:

```
  {
    number: "11",
    guest: "Full Name with Honorific",
    guestShort: "Short Name for Card",
    designation: "Their Role, Institution",
    photoFile: "guest_lastname.jpg",
    shortTitle: "Short episode title (shown on card)",
    fullTitle: "Full YouTube title",
    date: "DD Mon YYYY",
    url: "https://www.youtube.com/watch?v=PASTE_VIDEO_ID_HERE",
    description: "One or two sentences describing the episode.",
    tags: ["Tag One", "Tag Two", "Tag Three"]
  }
```

**For a multi-part episode**, copy this format instead:

```
  {
    number: "11",
    part: 1,
    totalParts: 2,
    comingSoon: false,
    guest: "Full Name",
    guestShort: "Short Name",
    designation: "Their Role",
    photoFile: "guest_lastname.jpg",
    shortTitle: "Title — Part 1",
    fullTitle: "Full title here",
    date: "DD Mon YYYY",
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    description: "Description of part 1.",
    tags: ["Tag One", "Tag Two"]
  },
  {
    number: "11",
    part: 2,
    totalParts: 2,
    comingSoon: true,
    guest: "Full Name",
    guestShort: "Short Name",
    designation: "Their Role",
    photoFile: "guest_lastname.jpg",
    shortTitle: "Title — Part 2",
    fullTitle: "Full title here",
    date: "Coming Soon",
    url: "",
    description: "Part 2 coming soon.",
    tags: ["Tag One", "Tag Two"]
  }
```

> Set `comingSoon: true` if the part hasn't been uploaded yet. Change it to `false` and fill in the `url` and `date` when it goes live.

**Save the file.** Refresh the website. The new episode card will appear automatically.

---

## 2. ADDING OR EDITING A TEAM MEMBER

Open the file called **`team.js`**.

### To add a Core Team member:
Find the section that says `const coreTeam = [` and add a new block inside:

```
  {
    name: "Full Name",
    role: "Their Role (e.g. Convenor, Secretary)",
    batch: "Batch 2025–2030",
    photoFile: "team_firstname.jpg"
  },
```

### To add a regular Member:
Find the section that says `const members = [` and add a new block inside:

```
  {
    name: "Full Name",
    role: "Member",
    batch: "Batch 2025–2030",
    photoFile: "team_firstname.jpg"
  },
```

> If you don't know the batch, just write `batch: ""` (empty quotes).

**Save the file.** Refresh the website. The card will appear automatically.

---

## 3. SWAPPING A PLACEHOLDER PHOTO

Every photo on the site has a specific filename it looks for. If it doesn't find the file, it shows a placeholder with initials instead.

To replace a placeholder with a real photo:

1. Get the photo file (JPG or PNG works best).
2. Rename it to **exactly the filename listed below** — spelling, underscores, and lowercase all matter.
3. Drop it into the same folder as `index.html`.
4. Refresh the website. The photo will appear automatically.

### Guest photos (format: `guest_lastname.jpg`)
| Guest | Filename |
|-------|----------|
| Prof. Sanjeevi Shanthakumar | `guest_shanthakumar.jpg` |
| Prof. Wolf-Georg Ringe | `guest_ringe.jpg` |
| Sr. Adv. Saurabh Soparkar | `guest_soparkar.jpg` |
| Dr. Nidhi Buch | `guest_buch.jpg` |
| Shri Kamal B. Trivedi | `guest_trivedi.jpg` |
| Sr. Adv. Shalin Mehta | `guest_mehta.jpg` |
| Justice C.K. Thakker | `guest_thakker.jpg` |
| Sr. Adv. Chander M. Lall | `guest_lall.jpg` |
| H.E. Mohan Peiris | `guest_peiris.jpg` |
| Sr. Adv. Gourab Banerji | `guest_banerji.jpg` |

### Messages section
| Photo | Filename |
|-------|----------|
| Director's photo | `director.png` |
| Professor's photo | `professor.png` |

### Team photos (format: `team_firstname.jpg`)
Each team member's file is `team_` followed by their first name in lowercase.
For example: Swayam → `team_swayam.jpg`, Devansh → `team_devansh.jpg`, etc.

### BTS Gallery photos
Name your behind-the-scenes photos exactly:
`bts_01.jpg`, `bts_02.jpg`, `bts_03.jpg` ... up to `bts_10.jpg`

---

## 4. UPDATING THE FEATURED EPISODE

The "Now Playing" section is in `index.html`. Search for the text `NOW PLAYING` to find it quickly. Update the guest name, episode number, and the two YouTube embed links.

YouTube embed links follow this format:
- Take your YouTube URL: `https://www.youtube.com/watch?v=ABC123`
- The embed version is: `https://www.youtube.com/embed/ABC123`

---

## TIPS
- Always save the file after making changes.
- If something looks broken, undo your change (Ctrl+Z / Cmd+Z) and try again.
- The website reads the JS files fresh every time it loads, so changes show up immediately after a page refresh.
- Commas matter — each `{ ... },` block needs the comma at the end, except the very last one.
