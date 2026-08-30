// ── Block right-click globally ──
document.addEventListener('contextmenu', e => e.preventDefault());

const defaultArtData = [
  {
    title: "Cover Image",
    featured: false,
    category: "Digital",
    tags: ["cover", "art"],
    date: "2026",
    desc: "Cover illustration.",
    img: "./CoverImage.png"
  },
  {
    title: "Untitled Artwork 01",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143429_410.webp"
  },
  {
    title: "Untitled Artwork 02",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135329_112.webp"
  },
  {
    title: "Untitled Artwork 03",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143526_185.webp"
  },
  {
    title: "Untitled Artwork 04",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143545_740.webp"
  },
  {
    title: "Untitled Artwork 05",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_133611_423.webp"
  },
  {
    title: "Untitled Artwork 06",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_134117_295.webp"
  },
  {
    title: "Untitled Artwork 07",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135132_675.webp"
  },
  {
    title: "Untitled Artwork 08",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143305_877.webp"
  },
  {
    title: "Untitled Artwork 09",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143258_859.webp"
  },
  {
    title: "Untitled Artwork 10",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135014_935.webp"
  },
  {
    title: "Untitled Artwork 11",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143234_063.webp"
  },
  {
    title: "Untitled Artwork 12",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135052_447.webp"
  },
  {
    title: "Untitled Artwork 13",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143617_284.webp"
  },
  {
    title: "Untitled Artwork 14",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143723_794.webp"
  },
  {
    title: "Untitled Artwork 15",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_133647_430.webp"
  },
  {
    title: "Untitled Artwork 16",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_133718_240.webp"
  },
  {
    title: "Untitled Artwork 17",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143255_068.webp"
  },
  {
    title: "Untitled Artwork 18",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143246_873.webp"
  },
  {
    title: "Untitled Artwork 19",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_144121_258.webp"
  },
  {
    title: "Untitled Artwork 20",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135043_457.webp"
  },
  {
    title: "Untitled Artwork 21",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135120_239.webp"
  },
  {
    title: "Untitled Artwork 22",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143609_654.webp"
  },
  {
    title: "Untitled Artwork 23",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_133632_733.webp"
  },
  {
    title: "Untitled Artwork 24",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143046_134.webp"
  },
  {
    title: "Untitled Artwork 25",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143421_918.webp"
  },
  {
    title: "Untitled Artwork 26",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143554_705.webp"
  },
  {
    title: "Untitled Artwork 27",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143159_140.webp"
  },
  {
    title: "Untitled Artwork 28",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143403_927.webp"
  },
  {
    title: "Untitled Artwork 29",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143716_835.webp"
  },
  {
    title: "Untitled Artwork 30",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143334_631.webp"
  },
  {
    title: "Untitled Artwork 31",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135336_897.webp"
  },
  {
    title: "Untitled Artwork 32",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143625_699.webp"
  },
  {
    title: "Untitled Artwork 33",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143812_563.webp"
  },
  {
    title: "Untitled Artwork 34",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143709_334.webp"
  },
  {
    title: "Untitled Artwork 35",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135110_972.webp"
  },
  {
    title: "Untitled Artwork 36",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143654_533.webp"
  },
  {
    title: "Untitled Artwork 37",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143138_344.webp"
  },
  {
    title: "Untitled Artwork 38",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143114_085.webp"
  },
  {
    title: "Untitled Artwork 39",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135408_701.webp"
  },
  {
    title: "Untitled Artwork 40",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143909_702.webp"
  },
  {
    title: "Untitled Artwork 41",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143822_387.webp"
  },
  {
    title: "Untitled Artwork 42",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143222_376.webp"
  },
  {
    title: "Untitled Artwork 43",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143847_619.webp"
  },
  {
    title: "Untitled Artwork 44",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143640_548.webp"
  },
  {
    title: "Untitled Artwork 45",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_134944_047.webp"
  },
  {
    title: "Untitled Artwork 46",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143011_943.webp"
  },
  {
    title: "Untitled Artwork 47",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143913_345.webp"
  },
  {
    title: "Untitled Artwork 48",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143736_136.webp"
  },
  {
    title: "Untitled Artwork 49",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143318_837.webp"
  },
  {
    title: "Untitled Artwork 50",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_144103_664.webp"
  },
  {
    title: "Untitled Artwork 51",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_144006_220.webp"
  },
  {
    title: "Untitled Artwork 52",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143757_690.webp"
  },
  {
    title: "Untitled Artwork 53",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143815_613.webp"
  },
  {
    title: "Untitled Artwork 54",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143650_499.webp"
  },
  {
    title: "Untitled Artwork 55",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143748_855.webp"
  },
  {
    title: "Untitled Artwork 56",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143858_835.webp"
  },
  {
    title: "Untitled Artwork 57",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_134221_612.webp"
  },
  {
    title: "Untitled Artwork 58",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143058_879.webp"
  },
  {
    title: "Untitled Artwork 59",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_144036_576.webp"
  },
  {
    title: "Untitled Artwork 60",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143340_857.webp"
  },
  {
    title: "Untitled Artwork 61",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135005_794.webp"
  },
  {
    title: "Untitled Artwork 62",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_142943_173.webp"
  },
  {
    title: "Untitled Artwork 63",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135318_298.webp"
  },
  {
    title: "Untitled Artwork 64",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143149_854.webp"
  },
  {
    title: "Untitled Artwork 65",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143904_069.webp"
  },
  {
    title: "Untitled Artwork 66",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143349_315.webp"
  },
  {
    title: "Untitled Artwork 67",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143355_504.webp"
  },
  {
    title: "Untitled Artwork 68",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_144022_918.webp"
  },
  {
    title: "Untitled Artwork 69",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_133753_168.webp"
  },
  {
    title: "Untitled Artwork 70",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143957_162.webp"
  },
  {
    title: "Untitled Artwork 71",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143840_492.webp"
  },
  {
    title: "Untitled Artwork 72",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_144308_982.webp"
  },
  {
    title: "Untitled Artwork 73",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143500_101.webp"
  },
  {
    title: "Untitled Artwork 74",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_144013_609.webp"
  },
  {
    title: "Untitled Artwork 75",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143445_573.webp"
  },
  {
    title: "Untitled Artwork 76",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_142920_947.webp"
  },
  {
    title: "Untitled Artwork 77",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_142904_505.webp"
  },
  {
    title: "Untitled Artwork 78",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135104_162.webp"
  },
  {
    title: "Untitled Artwork 79",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143436_416.webp"
  },
  {
    title: "Untitled Artwork 80",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143953_379.webp"
  },
  {
    title: "Untitled Artwork 81",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135511_125.webp"
  },
  {
    title: "Untitled Artwork 82",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_143940_529.webp"
  },
  {
    title: "Untitled Artwork 83",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_142851_586.webp"
  },
  {
    title: "Untitled Artwork 84",
    featured: false,
    category: "Digital",
    tags: ["study", "illustration"],
    date: "2026",
    desc: "Artwork study.",
    img: "./IMG_20260803_135501_554.webp"
  }
];

const STORAGE_KEY = 'derek_portfolio_state_v1';
let artData = defaultArtData;

try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.artData) && parsed.artData.length > 0) {
            artData = parsed.artData;
        }
    }
} catch (e) {
    console.warn('Could not read saved portfolio state:', e);
}

function applySavedAboutData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.aboutData) {
                const photoEl = document.getElementById('aboutPhoto');
                const photoWrap = document.getElementById('aboutPhotoWrap');
                if (photoEl) {
                    if (parsed.aboutData.photoSrc) {
                        photoEl.src = parsed.aboutData.photoSrc;
                        if (photoWrap) photoWrap.style.display = 'block';
                    } else if (photoWrap) {
                        photoWrap.style.display = 'none';
                    }
                }
                const headingEl = document.querySelector('.about-content h2');
                if (headingEl && parsed.aboutData.heading) {
                    headingEl.textContent = parsed.aboutData.heading;
                }
                const contentDiv = document.querySelector('.about-content');
                if (contentDiv && Array.isArray(parsed.aboutData.paragraphs) && parsed.aboutData.paragraphs.length > 0) {
                    const oldBios = contentDiv.querySelectorAll('p.about-bio');
                    oldBios.forEach(p => p.remove());
                    const tagsDiv = contentDiv.querySelector('.about-tags');
                    parsed.aboutData.paragraphs.forEach(text => {
                        const p = document.createElement('p');
                        p.className = 'about-bio';
                        p.textContent = text;
                        if (tagsDiv) contentDiv.insertBefore(p, tagsDiv);
                        else contentDiv.appendChild(p);
                    });
                }
                const tagsDiv = document.querySelector('.about-content .about-tags');
                if (tagsDiv && Array.isArray(parsed.aboutData.tags)) {
                    tagsDiv.innerHTML = parsed.aboutData.tags.map(t => `<span>${t}</span>`).join('');
                }
            }
        }
    } catch (e) {
        console.warn('Could not apply saved aboutData:', e);
    }
}

// ── Search & Synonyms ──
const synonymMap = {
    watercolor: ["paint", "wash", "aquarelle", "fluid", "paper"],
    digital: ["vector", "render", "character", "illustration", "concept"],
    craft: ["handmade", "wearable", "textile", "custom", "embroidery"],
    media: ["mixed", "acrylic", "ink", "charcoal", "sketch", "pencil"],
    spooky: ["halloween", "ghost", "witch", "cat", "dark", "creepy"],
    nature: ["landscape", "outdoor", "forest", "ocean", "sea", "water", "sky", "sunset"],
    portrait: ["face", "person", "character", "figure", "human"],
    abstract: ["texture", "pattern", "splatter", "form", "shape"],
    scifi: ["sci-fi", "cyberpunk", "futuristic", "tech", "neon", "electronic"],
    "2025": ["last year", "older"],
    "2026": ["this year", "recent", "new", "latest"],
    metal: ["copper", "steel", "wire", "iron", "rust"],
    textile: ["fabric", "cloth", "weave", "fiber", "thread"],
    minimal: ["simple", "clean", "bare", "sparse"],
};
const reverseMap = {};
Object.entries(synonymMap).forEach(([w, syns]) => syns.forEach(s => {
    (reverseMap[s] || (reverseMap[s] = [])).push(w);
}));

function getSynonyms(q) {
    const r = new Set();
    (synonymMap[q] || []).forEach(s => r.add(s));
    (reverseMap[q] || []).forEach(root => {
        r.add(root);
        (synonymMap[root] || []).forEach(s => r.add(s));
    });
    return [...r];
}

function editDist(a, b) {
    const m = a.length,
        n = b.length,
        dp = Array.from({
            length: m + 1
        }, (_, i) => [i, ...Array(n).fill(0)]);
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    return dp[m][n];
}

function scoreItem(item, q) {
    if (!q) return item.featured ? 200 : 100;
    q = String(q).toLowerCase().trim();
    if (!q) return item.featured ? 200 : 100;

    let s = item.featured ? 50 : 0;
    const title = (item.title || '').toLowerCase();
    const date = item.date || '';
    const category = (item.category || '').toLowerCase();
    const desc = (item.desc || '').toLowerCase();
    const tags = (item.tags || []).map(t => String(t).toLowerCase());

    const fields = [title, date, category, desc, ...tags];
    const terms = [q, ...getSynonyms(q)];

    fields.forEach(f => {
        terms.forEach((t, ti) => {
            if (f.includes(t)) s += ti === 0 ? 100 : 50;
        });
        f.split(/\s+/).forEach(w => {
            if (w && Math.abs(w.length - q.length) <= 2) {
                const d = editDist(w, q);
                if (d <= 2) s += Math.max(0, 70 - d * 20);
            }
        });
    });
    return s;
}

// ── Aspect ratio helper & background preloader ──
// ── Aspect ratio helper & loader preloader ──
const aspectCache = new Map();

function getAspectRatio(item) {
    if (item.aspectRatio) return item.aspectRatio;
    if (item.width && item.height) return `${item.width} / ${item.height}`;
    if (aspectCache.has(item.img)) return aspectCache.get(item.img);

    try {
        const cached = localStorage.getItem('ar_' + item.img);
        if (cached) {
            aspectCache.set(item.img, cached);
            return cached;
        }
    } catch (e) {}

    return null;
}

function escapeCssSelector(str) {
    if (window.CSS && typeof CSS.escape === 'function') {
        return CSS.escape(str);
    }
    return (str || '').replace(/([\\"'#.:;?%&,*+~='^$\[\]()={}|<>\/])/g, '\\$1');
}

// ── DOM refs ──
const grid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('artSearch');
const tabBtns = document.querySelectorAll('.tab-btn');
const modal = document.getElementById('artModal');
const modalContent = document.getElementById('modalContent');
const indicator = document.getElementById('tabIndicator');
const contactBtn = document.getElementById('contactBtn');
const aboutBtn = document.getElementById('aboutBtn');
const aboutPanel = document.getElementById('aboutPanel');
const aboutClose = document.getElementById('aboutClose');
const aboutOverlay = document.getElementById('aboutOverlay');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

const galleryLoader = document.getElementById('galleryLoader');
const loaderStatus = document.getElementById('loaderStatus');
const loaderProgressFill = document.getElementById('loaderProgressFill');
const loaderPercent = document.getElementById('loaderPercent');

// ── Preload all aspect ratios with loader overlay ──
function prepareGalleryLayout() {
    return new Promise((resolve) => {
        const total = artData.length;
        if (total === 0) {
            if (loaderStatus) loaderStatus.innerText = 'Enjoy!';
            if (loaderProgressFill) loaderProgressFill.style.width = '100%';
            if (loaderPercent) loaderPercent.innerText = '100%';
            resolve();
            return;
        }

        let completed = 0;
        if (loaderStatus) loaderStatus.innerText = 'Preparing your experience...';
        if (loaderProgressFill) loaderProgressFill.style.width = '0%';
        if (loaderPercent) loaderPercent.innerText = '0%';

        function updateProgress() {
            const percent = Math.min(100, Math.round((completed / total) * 100));
            if (loaderProgressFill) loaderProgressFill.style.width = `${percent}%`;
            if (loaderPercent) loaderPercent.innerText = `${percent}%`;
        }

        function checkAllDone() {
            if (completed >= total) {
                if (loaderProgressFill) loaderProgressFill.style.width = '100%';
                if (loaderPercent) loaderPercent.innerText = '100%';
                if (loaderStatus) loaderStatus.innerText = 'Enjoy!';
                resolve();
            }
        }

        artData.forEach(item => {
            let handled = false;
            const markDone = (ar) => {
                if (handled) return;
                handled = true;
                if (ar) {
                    aspectCache.set(item.img, ar);
                    try {
                        localStorage.setItem('ar_' + item.img, ar);
                    } catch (e) {}
                } else if (!aspectCache.has(item.img)) {
                    aspectCache.set(item.img, '4 / 5');
                }
                completed++;
                updateProgress();
                checkAllDone();
            };

            const img = new Image();
            img.onload = () => {
                if (img.naturalWidth && img.naturalHeight) {
                    markDone(`${img.naturalWidth} / ${img.naturalHeight}`);
                } else {
                    markDone(null);
                }
            };
            img.onerror = () => markDone(null);
            img.src = item.img;

            if (img.complete && img.naturalWidth && img.naturalHeight) {
                markDone(`${img.naturalWidth} / ${img.naturalHeight}`);
            }
        });
    });
}

// ── Scroll reveal observer ──
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.08,
    rootMargin: '0px 0px -20px 0px'
});

function initScrollReveal() {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

let currentFilter = 'all';
let filterTimeout;
let currentItems = []; // filtered+sorted list shown in gallery
let currentModalIdx = 0;

// ── Gallery render ──
function renderGallery(filter = 'all', query = '', immediate = false) {
    currentFilter = filter;
    if (!grid) return;

    const doRender = () => {
        grid.innerHTML = '';

        currentItems = artData
            .map(item => ({
                ...item,
                _score: scoreItem(item, query || '')
            }))
            .filter(item => {
                const tabOk = filter === 'all' || item.category === filter;
                const searchOk = !query || item._score > 0;
                return tabOk && searchOk;
            })
            .sort((a, b) => b._score - a._score);

        currentItems.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = 'gallery-item reveal';
            div.setAttribute('data-img', item.img);
            div.style.setProperty('--reveal-delay', `${(idx % 4) * 65}ms`);
            const aspect = getAspectRatio(item);
            const wrapperStyle = aspect ? `aspect-ratio: ${aspect};` : 'min-height: 140px;';

            div.innerHTML = `
                <div class="img-wrapper" style="${wrapperStyle}">
                    <div class="img-shimmer"></div>
                    <img src="${item.img}" alt="${item.title}" style="opacity:0; transition: opacity 0.4s ease;" draggable="false">
                    <div class="item-overlay">
                        <div class="item-info">
                            <span class="item-category">${item.category}${item.date ? ` • ${item.date}` : ''}</span>
                            <h3 class="item-title">${item.title}</h3>
                            ${item.desc ? `<p class="item-desc">${item.desc}</p>` : ''}
                            <div class="item-action">
                                <span>View Artwork</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-guard"></div>
                ${item.featured ? `<div class="featured-badge"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><span class="tooltip">Artist's Choice</span></div>` : ''}
            `;

            const imgEl = div.querySelector('img');
            const wrapperEl = div.querySelector('.img-wrapper');
            let loaded = false;
            const handleLoad = () => {
                if (loaded) return;
                loaded = true;
                const shimmer = div.querySelector('.img-shimmer');
                if (shimmer) shimmer.style.display = 'none';
                if (imgEl.naturalWidth && imgEl.naturalHeight) {
                    const ar = `${imgEl.naturalWidth} / ${imgEl.naturalHeight}`;
                    aspectCache.set(item.img, ar);
                    try {
                        localStorage.setItem('ar_' + item.img, ar);
                    } catch (e) {}
                    wrapperEl.style.aspectRatio = ar;
                    updateScrollProgress();
                }
                imgEl.style.opacity = '1';
            };

            imgEl.addEventListener('load', handleLoad, {
                once: true
            });
            imgEl.addEventListener('error', handleLoad, {
                once: true
            });

            if (imgEl.complete) {
                handleLoad();
            } else if (imgEl.decode) {
                imgEl.decode().then(handleLoad).catch(() => {});
            }

            div.addEventListener('click', () => {
                currentModalIdx = idx;
                openModal(currentItems[idx], div.getBoundingClientRect());
            });

            grid.appendChild(div);
            revealObserver.observe(div);
        });

        grid.classList.remove('fading-out');
        updateScrollProgress();
    };

    if (immediate || grid.children.length === 0) {
        grid.classList.remove('fading-out');
        doRender();
    } else {
        grid.classList.add('fading-out');
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(doRender, 250);
    }
}

// ── Tab indicator ──
function updateIndicator(btn) {
    if (!btn || !indicator || window.innerWidth <= 768) return;
    indicator.style.width = `${btn.offsetWidth}px`;
    indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
}

// ── Modal ──
function openModal(item, rect) {
    if (!modal || !item) return;
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalDate = document.getElementById('modalDate');

    if (modalImg) modalImg.src = item.img;
    if (modalTitle) modalTitle.innerText = item.title;
    if (modalDesc) modalDesc.innerText = item.desc;
    if (modalDate) modalDate.innerText = item.date;

    updateModalNav();

    modal.style.display = 'flex';
    if (rect && modalContent) {
        const mRect = modalContent.getBoundingClientRect();
        modalContent.style.transformOrigin = `${rect.left + rect.width / 2 - mRect.left}px ${rect.top + rect.height / 2 - mRect.top}px`;
    }
    void modal.offsetWidth;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalNav() {
    if (modalPrev) modalPrev.classList.toggle('hidden', currentModalIdx <= 0);
    if (modalNext) modalNext.classList.toggle('hidden', currentModalIdx >= currentItems.length - 1);
}

function navigateModal(dir) {
    const next = currentModalIdx + dir;
    if (next < 0 || next >= currentItems.length) return;
    currentModalIdx = next;
    const item = currentItems[currentModalIdx];
    const imgEl = document.getElementById('modalImg');
    if (!imgEl) return;
    imgEl.style.opacity = '0';
    setTimeout(() => {
        imgEl.src = item.img;
        imgEl.onload = () => {
            imgEl.style.transition = 'opacity 0.3s';
            imgEl.style.opacity = '1';
        };
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const modalDate = document.getElementById('modalDate');

        if (modalTitle) modalTitle.innerText = item.title;
        if (modalDesc) modalDesc.innerText = item.desc;
        if (modalDate) modalDate.innerText = item.date;
        updateModalNav();
    }, 150);
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        if (!modal.classList.contains('active')) modal.style.display = 'none';
    }, 400);
}
window.closeModal = closeModal;

if (modal) {
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });
}
if (modalPrev) {
    modalPrev.addEventListener('click', e => {
        e.stopPropagation();
        navigateModal(-1);
    });
}
if (modalNext) {
    modalNext.addEventListener('click', e => {
        e.stopPropagation();
        navigateModal(1);
    });
}

// Keyboard nav
document.addEventListener('keydown', e => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
    if (e.key === 'Escape') closeModal();
});

// Touch swipe navigation for mobile modal
let touchStartX = 0;
let touchStartY = 0;
if (modalContent) {
    modalContent.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, {
        passive: true
    });

    modalContent.addEventListener('touchend', e => {
        const diffX = e.changedTouches[0].clientX - touchStartX;
        const diffY = e.changedTouches[0].clientY - touchStartY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < -50) navigateModal(1);
            else if (diffX > 50) navigateModal(-1);
        } else if (diffY > 80) {
            closeModal();
        }
    }, {
        passive: true
    });
}

// ── About panel ──
function openAbout() {
    if (aboutPanel) aboutPanel.classList.add('active');
    if (aboutOverlay) aboutOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAbout() {
    if (aboutPanel) aboutPanel.classList.remove('active');
    if (aboutOverlay) aboutOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
if (aboutBtn) aboutBtn.addEventListener('click', openAbout);
if (aboutClose) aboutClose.addEventListener('click', closeAbout);
if (aboutOverlay) aboutOverlay.addEventListener('click', closeAbout);

// ── Contact / copy email ──
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        if (this.classList.contains('copied')) return;
        navigator.clipboard.writeText('sample@email.com').then(() => {
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 2800);
        });
    });
}

// ── Tab controls ──
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        updateIndicator(btn);
        renderGallery(btn.dataset.filter, searchInput ? searchInput.value : '');
    });
});

if (searchInput) {
    searchInput.addEventListener('input', e => renderGallery(currentFilter, e.target.value));
}
window.addEventListener('resize', () => updateIndicator(document.querySelector('.tab-btn.active')));

// ── Page transitions ──
function setupPageExitTransitions() {
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;

        link.addEventListener('click', e => {
            if (e.metaKey || e.ctrlKey || e.shiftKey) return;
            const currentPath = window.location.pathname.split('/').pop() || 'portfolio.html';
            if (href === currentPath) return;

            e.preventDefault();
            document.body.classList.add('page-leaving');
            document.body.classList.add('transition-active');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
}

// ── Collection Scroll Progress Bar ──
const progressBar = document.getElementById('scrollProgressBar');

function updateScrollProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener('scroll', updateScrollProgress, {
    passive: true
});
window.addEventListener('resize', updateScrollProgress);

// ── Init ──
async function initPortfolioPage() {
    applySavedAboutData();
    document.body.classList.add('page-loaded');
    setupPageExitTransitions();
    updateScrollProgress();

    // 1. Wait until EVERY image in artData has loaded and calculated its exact aspect ratio
    await prepareGalleryLayout();

    // 2. Render gallery with pre-calculated aspect ratios applied to wrappers
    renderGallery('all', '', true);

    // 3. Wait for DOM images to finish decoding/loading
    const domImages = Array.from(document.querySelectorAll('#galleryGrid img'));
    await Promise.all(domImages.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(res => {
            img.addEventListener('load', res, {
                once: true
            });
            img.addEventListener('error', res, {
                once: true
            });
        });
    }));

    // 4. Force browser layout & paint calculation frames so gallery positions are locked
    await new Promise(res => requestAnimationFrame(() => requestAnimationFrame(res)));

    // 5. Keep 'Enjoy!' visible briefly (~600ms) so the user sees completion
    await new Promise(res => setTimeout(res, 600));

    // 6. Smoothly hide loading screen
    if (galleryLoader) {
        galleryLoader.classList.add('hidden');
    }

    initScrollReveal();
    updateScrollProgress();
    setTimeout(() => updateIndicator(document.querySelector('.tab-btn.active')), 100);
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initPortfolioPage);
} else {
    initPortfolioPage();
}