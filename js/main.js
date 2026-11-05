/**
 * main.js — Portofolio Aufa Fahmi Azhar S
 * Vanilla JS, no dependencies.
 * Features:
 *  - Theme toggle (dark/light) with localStorage
 *  - Language toggle (ID/EN) with localStorage
 *  - Hamburger / mobile menu
 *  - Smooth-scroll active nav link tracking
 *  - Scroll reveal (IntersectionObserver)
 *  - Typing effect for hero roles
 *  - Hero canvas particles
 *  - Mouse-follow glow (disabled on touch devices)
 *  - PCA cluster canvas illustration
 *  - Back-to-top button
 *  - Footer year auto-update
 */

/* ============================================================
   TRANSLATIONS
   Add or edit strings here to update both ID and EN content.
   ============================================================ */
const i18n = {
  id: {
    /* Nav */
    'nav.about':      'Tentang',
    'nav.skills':     'Keahlian',
    'nav.experience': 'Pengalaman',
    'nav.projects':   'Proyek',
    'nav.certs':      'Sertifikasi',
    'nav.contact':    'Kontak',
    /* Hero */
    'hero.greeting':    '👋 Halo, saya',
    'hero.rolePrefix':  'Seorang ',
    'hero.tagline':     'Mengubah data menjadi wawasan bermakna dan solusi teknologi yang berdampak nyata.',
    'hero.cta1':        'Lihat Proyek',
    'hero.cta2':        'Unduh CV',
    /* About */
    'about.badge':      'Tentang Saya',
    'about.title':      'Mengenal Lebih Dekat',
    'about.bio1':       'Saya lulusan S1 Sistem Informasi Universitas Buana Perjuangan Karawang. Minat saya ada pada analisis data, pengelolaan database, dan dukungan teknologi informasi. Lewat tugas akhir, saya mengelompokkan 2.795 rumah sakit di Indonesia dengan K-Means dan Python untuk melihat ketimpangan kapasitas pelayanan.',
    'about.bio2':       'Pengalaman magang IT dan dua tahun di industri manufaktur membuat saya terbiasa bekerja sesuai prosedur, teliti, dan solid dalam tim. Saat ini saya terbuka untuk peluang kerja dan magang di bidang data, IT support, dan sistem informasi.',
    'about.stat1':      'IPK / 4,00',
    'about.stat2label': 'Cum Laude',
    'about.stat2':      'Predikat Kelulusan',
    'about.stat3':      'Tahun Lulus',
    'about.stat4':      'Kemampuan Bahasa',
    /* Skills */
    'skills.badge':       'Keahlian',
    'skills.title':       'Bidang Kompetensi',
    'skills.desc':        'Teknologi dan keterampilan yang saya kuasai',
    'skills.data.title':  'Analisis Data & Pelaporan',
    'skills.db.title':    'Database & ERP',
    'skills.office.title':'Microsoft Office',
    'skills.dev.title':   'Pengembangan & Desain',
    'skills.soft.title':  'Soft Skills',
    /* Skill item labels — ID */
    'skills.item.datacleaning':  'Data Cleaning',
    'skills.item.feateng':       'Feature Engineering',
    'skills.item.kmeans':        'K-Means Clustering',
    'skills.item.pca':           'PCA',
    'skills.item.dashboard':     'Dashboard',
    'skills.item.sysanalysis':   'System Analysis',
    'skills.item.docs':          'Dokumentasi',
    'skills.item.mysql':         'MySQL',
    'skills.item.sql':           'SQL',
    'skills.item.odoo':          'Odoo ERP',
    'skills.item.excel':         'Excel',
    'skills.item.pivottable':    'PivotTable',
    'skills.item.vlookup':       'VLOOKUP',
    'skills.item.indexmatch':    'INDEX-MATCH',
    'skills.item.vba':           'VBA Macro',
    'skills.item.word':          'Word',
    'skills.item.powerpoint':    'PowerPoint',
    'skills.item.python':        'Python',
    'skills.item.php':           'PHP',
    'skills.item.js':            'JavaScript',
    'skills.item.html':          'HTML',
    'skills.item.css':           'CSS',
    'skills.item.webdev':        'Web Development',
    'skills.item.figma':         'Figma',
    'skills.item.itsupport':     'IT Support',
    'skills.item.problemsolving':'Problem Solving',
    'skills.item.communication': 'Communication',
    'skills.item.teamwork':      'Teamwork',
    'skills.item.timemanagement':'Time Management',
    'skills.item.adaptability':  'Adaptability',
    'skills.item.attention':     'Attention to Detail',
    /* Experience */
    'exp.badge':          'Pengalaman',
    'exp.title':          'Riwayat Kerja',
    'exp.desc':           'Perjalanan profesional yang membentuk keahlian saya',
    'exp.job1.role':      'IT Intern',
    'exp.job1.period':    'Okt 2024 – Jan 2025',
    'exp.job1.desc1':     'Memberikan dukungan teknis IT dan pemeliharaan infrastruktur jaringan.',
    'exp.job1.desc2':     'Mengelola sistem informasi dan dokumentasi operasional perusahaan.',
    'exp.job1.desc3':     'Mendapatkan penilaian kinerja <strong>"Sangat Baik"</strong> dari supervisi.',
    'exp.job1.badge':     '⭐ Sangat Baik',
    'exp.job2.role':      'Operator Assembly',
    'exp.job2.period':    'Mar 2022 – Sep 2022',
    'exp.job2.desc1':     'Melakukan perakitan komponen otomotif sesuai standar kualitas produksi.',
    'exp.job2.desc2':     'Menjaga ketelitian dan kedisiplinan dalam lini produksi bertekanan tinggi.',
    'exp.job3.role':      'Operator Painting',
    'exp.job3.period':    'Jan 2020 – Jan 2022',
    'exp.job3.desc1':     'Menjalankan proses pengecatan komponen motor sesuai prosedur standar pabrik.',
    'exp.job3.desc2':     'Memastikan konsistensi kualitas produk dalam volume produksi tinggi.',
    /* Projects */
    'proj.badge':     'Proyek',
    'proj.title':     'Proyek Pilihan',
    'proj.desc':      'Karya riset terapan sebagai Tugas Akhir',
    'proj.type':      'Tugas Akhir · 2026',
    'proj.name':      'Implementasi K-Means untuk Mengelompokkan Rumah Sakit di Indonesia Berdasarkan Kapasitas Pelayanan',
    'proj.desc2':     'Penelitian ini mengklasifikasikan 2.795 rumah sakit di Indonesia (dari 3.155 data awal setelah pembersihan outlier) ke dalam tiga klaster kapasitas layanan menggunakan algoritma K-Means dengan validasi Elbow Method (k=3) dan Silhouette Coefficient 0,5367.',
    'proj.stat1':     'Data Awal',
    'proj.stat2':     'Data Bersih',
    'proj.stat3':     'Silhouette Score',
    'proj.stat4':     'Klaster Optimal',
    'proj.cluster1':  'Klaster Rendah',
    'proj.cluster2':  'Klaster Sedang',
    'proj.cluster3':  'Klaster Tinggi',
    'proj.btn1':      'Repositori',
    'proj.btn2':      'Laporan',
    'proj.canvasNote':'',
    /* Certifications — header */
    'cert.badge':            'Sertifikasi',
    'cert.title':            'Sertifikasi Pilihan',
    'cert.desc':             'Pelatihan, sertifikasi bahasa, dan hak kekayaan intelektual yang saya miliki.',
    /* Certifications — CTA & lightbox */
    'cert.cta':              'Lihat Sertifikat',
    'cert.lightbox.drive':   'Buka di Google Drive ↗',
    'cert.lightbox.empty':   'Gambar sertifikat belum tersedia.',
    /* Certifications — Karirnex */
    'cert.karirnex.cat':     'SERTIFIKAT PELATIHAN',
    'cert.karirnex.period':  'Oktober 2026',
    'cert.karirnex.title':   'Bootcamp Microsoft Office Excel, Word &amp; PowerPoint Specialist (Expert)',
    'cert.karirnex.desc':    'Bootcamp 25 jam dari Karirnex by PT Ebiz Karisma Internasional dengan predikat Expert, termasuk proyek kecil. Materi mencakup PivotTable, VLOOKUP, INDEX-MATCH, validasi data, dashboard interaktif, dan VBA macro.',
    /* Certifications — British Council */
    'cert.bc.cat':           'SERTIFIKAT BAHASA',
    'cert.bc.period':        'Maret 2026',
    'cert.bc.title':         'English Score, British Council',
    'cert.bc.desc':          'Sertifikat kemampuan bahasa Inggris dari British Council, berlaku Maret 2026 – Maret 2027. [isi skor atau level CEFR]',
    /* Certifications — Odoo ERP */
    'cert.odoo.cat':         'SERTIFIKAT PELATIHAN',
    'cert.odoo.period':      'Juni 2025',
    'cert.odoo.title':       'Transformasi Digital Industri 4.0 bersama Odoo ERP',
    'cert.odoo.desc':        'Kegiatan dari Fakultas Ilmu Komputer Universitas Buana Perjuangan Karawang tentang efisiensi, inovasi, dan keunggulan kompetitif melalui Odoo ERP.',
    /* Certifications — HKI */
    'cert.hki.cat':          'SERTIFIKAT HKI (HAK KEKAYAAN INTELEKTUAL)',
    'cert.hki.period':       '2025',
    'cert.hki.title':        'Pencatatan Ciptaan: Edukasi Pencegahan Scam bagi Warga Desa Pasirmukti',
    'cert.hki.desc':         'Tercatat sebagai salah satu pencipta karya tulis &ldquo;Edukasi Pencegahan Scam bagi Warga Desa Pasirmukti sebagai Upaya Literasi Digital&rdquo; pada Direktorat Jenderal Kekayaan Intelektual, Kementerian Hukum Republik Indonesia.',
    /* Navigation */
    'nav.lang':      'Bahasa',
    /* Languages */
    'lang.badge':    'Bahasa',
    'lang.title':    'Kemampuan Bahasa',
    'lang.desc':     'Bahasa yang saya gunakan untuk berkomunikasi.',
    'lang.id.name':  'Bahasa Indonesia',
    'lang.id.sub':   'Bahasa utama',
    'lang.id.badge': 'Fasih',
    'lang.en.name':  'Bahasa Inggris',
    'lang.en.sub':   'Tersertifikasi British Council',
    'lang.en.badge': 'Menengah',
    'lang.en.note':  'English Score, British Council (Maret 2026 – Maret 2027)',
    'lang.jp.name':  'Bahasa Jepang',
    'lang.jp.sub':   'Tahap dasar',
    'lang.jp.badge': 'Dasar',
    /* Contact */
    'contact.badge':  'Kontak',
    'contact.title':  'Mari Terhubung',
    'contact.sub1':   'Fresh Graduate S1 Sistem Informasi \u2022 Karawang, Indonesia',
    'contact.sub2':   'Data Analysis \u2022 IT Support \u2022 Web Development',
    'contact.cta':    'Terbuka untuk peluang kerja dan magang.',
    /* Footer */
    'footer.copy': '\u00a9 2026 Aufa Fahmi Azhar S. Seluruh hak cipta dilindungi.',
  },

  en: {
    /* Nav */
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.certs':      'Certifications',
    'nav.contact':    'Contact',
    /* Hero */
    'hero.greeting':    '👋 Hi, I\'m',
    'hero.rolePrefix':  'A ',
    'hero.tagline':     'Turning data into meaningful insights and technology solutions that create real impact.',
    'hero.cta1':        'View Projects',
    'hero.cta2':        'Download CV',
    /* About */
    'about.badge':      'About Me',
    'about.title':      'Get to Know Me',
    'about.bio1':       'I am an Information Systems graduate from Universitas Buana Perjuangan Karawang. My interests are data analysis, database management, and IT support. For my thesis, I clustered 2,795 hospitals in Indonesia using K-Means and Python to reveal gaps in service capacity.',
    'about.bio2':       'An IT internship and two years in manufacturing taught me to follow procedures, stay precise, and work well in a team. I am open to jobs and internships in data, IT support, and information systems.',
    'about.stat1':      'GPA / 4.00',
    'about.stat2label': 'Cum Laude',
    'about.stat2':      'Graduation Honor',
    'about.stat3':      'Year of Graduation',
    'about.stat4':      'Language Skills',
    /* Skills */
    'skills.badge':       'Skills',
    'skills.title':       'Areas of Expertise',
    'skills.desc':        'Technologies and competencies I bring to the table',
    'skills.data.title':  'Data Analysis & Reporting',
    'skills.db.title':    'Database & ERP',
    'skills.office.title':'Microsoft Office',
    'skills.dev.title':   'Development & Design',
    'skills.soft.title':  'Soft Skills',
    /* Skill item labels — EN */
    'skills.item.datacleaning':  'Data Cleaning',
    'skills.item.feateng':       'Feature Engineering',
    'skills.item.kmeans':        'K-Means Clustering',
    'skills.item.pca':           'PCA',
    'skills.item.dashboard':     'Dashboard',
    'skills.item.sysanalysis':   'System Analysis',
    'skills.item.docs':          'Documentation',
    'skills.item.mysql':         'MySQL',
    'skills.item.sql':           'SQL',
    'skills.item.odoo':          'Odoo ERP',
    'skills.item.excel':         'Excel',
    'skills.item.pivottable':    'PivotTable',
    'skills.item.vlookup':       'VLOOKUP',
    'skills.item.indexmatch':    'INDEX-MATCH',
    'skills.item.vba':           'VBA Macro',
    'skills.item.word':          'Word',
    'skills.item.powerpoint':    'PowerPoint',
    'skills.item.python':        'Python',
    'skills.item.php':           'PHP',
    'skills.item.js':            'JavaScript',
    'skills.item.html':          'HTML',
    'skills.item.css':           'CSS',
    'skills.item.webdev':        'Web Development',
    'skills.item.figma':         'Figma',
    'skills.item.itsupport':     'IT Support',
    'skills.item.problemsolving':'Problem Solving',
    'skills.item.communication': 'Communication',
    'skills.item.teamwork':      'Teamwork',
    'skills.item.timemanagement':'Time Management',
    'skills.item.adaptability':  'Adaptability',
    'skills.item.attention':     'Attention to Detail',
    /* Experience */
    'exp.badge':          'Experience',
    'exp.title':          'Work History',
    'exp.desc':           'The professional journey that shaped my expertise',
    'exp.job1.role':      'IT Intern',
    'exp.job1.period':    'Oct 2024 – Jan 2025',
    'exp.job1.desc1':     'Provided IT technical support and maintained network infrastructure.',
    'exp.job1.desc2':     'Managed information systems and company operational documentation.',
    'exp.job1.desc3':     'Received a performance rating of <strong>"Excellent"</strong> from supervisors.',
    'exp.job1.badge':     '⭐ Excellent',
    'exp.job2.role':      'Assembly Operator',
    'exp.job2.period':    'Mar 2022 – Sep 2022',
    'exp.job2.desc1':     'Assembled automotive components in line with production quality standards.',
    'exp.job2.desc2':     'Maintained precision and discipline in a high-pressure production line.',
    'exp.job3.role':      'Painting Operator',
    'exp.job3.period':    'Jan 2020 – Jan 2022',
    'exp.job3.desc1':     'Performed motorcycle component painting following standard factory procedures.',
    'exp.job3.desc2':     'Ensured consistent product quality at high production volumes.',
    /* Projects */
    'proj.badge':     'Projects',
    'proj.title':     'Featured Project',
    'proj.desc':      'Applied research as a final-year thesis',
    'proj.type':      'Final Thesis · 2026',
    'proj.name':      'K-Means Implementation for Clustering Indonesian Hospitals Based on Service Capacity',
    'proj.desc2':     'This study classified 2,795 hospitals in Indonesia (from 3,155 initial records after outlier removal) into three service-capacity clusters using the K-Means algorithm, validated by the Elbow Method (k=3) and a Silhouette Coefficient of 0.5367.',
    'proj.stat1':     'Initial Records',
    'proj.stat2':     'Clean Records',
    'proj.stat3':     'Silhouette Score',
    'proj.stat4':     'Optimal Clusters',
    'proj.cluster1':  'Low Cluster',
    'proj.cluster2':  'Medium Cluster',
    'proj.cluster3':  'High Cluster',
    'proj.btn1':      'Repository',
    'proj.btn2':      'Report',
    'proj.canvasNote':'⚠️ Decorative illustration — not actual research data',
    /* Certifications — header */
    'cert.badge':            'Certifications',
    'cert.title':            'Selected Certifications',
    'cert.desc':             'Trainings, language certification, and intellectual property that I hold.',
    /* Certifications — CTA & lightbox */
    'cert.cta':              'View Certificate',
    'cert.lightbox.drive':   'Open in Google Drive ↗',
    'cert.lightbox.empty':   'Certificate image not yet available.',
    /* Certifications — Karirnex */
    'cert.karirnex.cat':     'TRAINING CERTIFICATE',
    'cert.karirnex.period':  'October 2026',
    'cert.karirnex.title':   'Bootcamp Microsoft Office Excel, Word &amp; PowerPoint Specialist (Expert)',
    'cert.karirnex.desc':    '25-hour bootcamp by Karirnex (PT Ebiz Karisma Internasional) with Expert distinction, including a mini-project. Topics: PivotTable, VLOOKUP, INDEX-MATCH, data validation, interactive dashboards, and VBA macros.',
    /* Certifications — British Council */
    'cert.bc.cat':           'LANGUAGE CERTIFICATE',
    'cert.bc.period':        'March 2026',
    'cert.bc.title':         'English Score, British Council',
    'cert.bc.desc':          'English proficiency certificate from British Council, valid March 2026 – March 2027. [fill in score or CEFR level]',
    /* Certifications — Odoo ERP */
    'cert.odoo.cat':         'TRAINING CERTIFICATE',
    'cert.odoo.period':      'June 2025',
    'cert.odoo.title':       'Digital Transformation Industry 4.0 with Odoo ERP',
    'cert.odoo.desc':        'Activity by the Faculty of Computer Science, Universitas Buana Perjuangan Karawang, covering efficiency, innovation, and competitive advantage through Odoo ERP.',
    /* Certifications — HKI */
    'cert.hki.cat':          'INTELLECTUAL PROPERTY CERTIFICATE',
    'cert.hki.period':       '2025',
    'cert.hki.title':        'Copyright Registration: Scam Prevention Education for Pasirmukti Village Residents',
    'cert.hki.desc':         'Registered as one of the creators of the written work &ldquo;Scam Prevention Education for Residents of Pasirmukti Village as a Digital Literacy Effort&rdquo; at the Directorate General of Intellectual Property, Ministry of Law, Republic of Indonesia.',
    /* Navigation */
    'nav.lang':      'Languages',
    /* Languages */
    'lang.badge':    'Languages',
    'lang.title':    'Language Skills',
    'lang.desc':     'Languages I use to communicate.',
    'lang.id.name':  'Indonesian',
    'lang.id.sub':   'Primary language',
    'lang.id.badge': 'Fluent',
    'lang.en.name':  'English',
    'lang.en.sub':   'British Council certified',
    'lang.en.badge': 'Intermediate',
    'lang.en.note':  'English Score, British Council (March 2026 – March 2027)',
    'lang.jp.name':  'Japanese',
    'lang.jp.sub':   'Beginner stage',
    'lang.jp.badge': 'Basic',
    /* Contact */
    'contact.badge':  'Contact',
    'contact.title':  'Let\'s Connect',
    'contact.sub1':   'Information Systems Fresh Graduate \u2022 Karawang, Indonesia',
    'contact.sub2':   'Data Analysis \u2022 IT Support \u2022 Web Development',
    'contact.cta':    'Open to job and internship opportunities.',
    /* Footer */
    'footer.copy': '\u00a9 2026 Aufa Fahmi Azhar S. All rights reserved.',
  }
};

/* ============================================================
   TYPING ROLES — localized
   ============================================================ */
const typingRoles = {
  id: ['Information Systems Graduate', 'Data Analyst', 'IT Support'],
  en: ['Information Systems Graduate', 'Data Analyst', 'IT Support'],
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang  = 'id';
let currentTheme = 'dark';

/* ============================================================
   HELPERS
   ============================================================ */
/** Safe localStorage getter */
function lsGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
/** Safe localStorage setter */
function lsSet(key, val) {
  try { localStorage.setItem(key, val); } catch { /* ignore */ }
}

/** Check if device is touch-only (no fine pointer) */
function isTouchDevice() {
  return !window.matchMedia('(pointer: fine)').matches;
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  currentTheme = theme;
  lsSet('theme', theme);
}

function initTheme() {
  const saved = lsGet('theme');
  const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(saved || preferred);
}

document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
function applyLang(lang) {
  currentLang = lang;
  lsSet('lang', lang);

  // Update lang attribute for screen readers
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      // Use innerHTML for strings with HTML tags (strong, em, etc.)
      el.innerHTML = i18n[lang][key];
    }
  });

  // Update toggle label: show the OTHER language as the button text
  document.getElementById('langLabel').textContent = lang === 'id' ? 'EN' : 'ID';

  // Re-render cert cards dengan bahasa baru
  refreshCertCards();
  // Re-render language cards dengan bahasa baru
  refreshLangCards();
}

function initLang() {
  const saved = lsGet('lang') || 'id';
  applyLang(saved);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'id' ? 'en' : 'id');
  // Restart typing effect in new language
  startTyping();
});

/* ============================================================
   HAMBURGER / MOBILE MENU
   ============================================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close on mobile nav link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close on outside click
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

/* ============================================================
   ACTIVE NAV LINK (IntersectionObserver)
   ============================================================ */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');
const mNavLinks = document.querySelectorAll('.mobile-nav-link');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      [...navLinks, ...mNavLinks].forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-50% 0px -45% 0px', threshold: 0 });

sections.forEach(s => navObserver.observe(s));

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   BACK TO TOP
   ============================================================ */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   FOOTER YEAR — tidak ada lagi #footerYear di HTML, skip jika null
   ============================================================ */
const footerYearEl = document.getElementById('footerYear');
if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();

/* ============================================================
   TYPING EFFECT
   ============================================================ */
let typingTimer   = null;
let typingIndex   = 0;
let charIndex     = 0;
let isDeleting    = false;

function startTyping() {
  // Clear any existing timer
  if (typingTimer) clearTimeout(typingTimer);
  typingIndex = 0; charIndex = 0; isDeleting = false;

  const el = document.getElementById('typingText');
  if (!el) return;
  el.textContent = '';
  typeStep(el);
}

function typeStep(el) {
  const roles   = typingRoles[currentLang] || typingRoles.id;
  const current = roles[typingIndex % roles.length];

  if (isDeleting) {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    // Pause before deleting
    speed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex++;
    speed = 400;
  }

  typingTimer = setTimeout(() => typeStep(el), speed);
}

/* ============================================================
   HERO CANVAS PARTICLES
   ============================================================ */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Respect reduced-motion
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    const count = Math.min(60, Math.floor(W * H / 14000));
    particles = Array.from({ length: count }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      a:  Math.random() * 0.5 + 0.1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(225,6,0,${0.12 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw dots
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(225,6,0,${p.a})`;
      ctx.fill();

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
  }

  let raf;
  function loop() { draw(); raf = requestAnimationFrame(loop); }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  resize();
  createParticles();
  loop();
}

/* ============================================================
   MOUSE GLOW (desktop only)
   ============================================================ */
function initMouseGlow() {
  const glow = document.getElementById('heroGlow');
  if (!glow || isTouchDevice()) {
    if (glow) glow.style.display = 'none';
    return;
  }

  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', e => {
    const rect  = hero.getBoundingClientRect();
    const x     = e.clientX - rect.left;
    const y     = e.clientY - rect.top;
    glow.style.left = x + 'px';
    glow.style.top  = y + 'px';
  }, { passive: true });
}

/* ============================================================
   CLUSTER PCA CANVAS (decorative illustration)
   ============================================================ */
function initClusterCanvas() {
  const canvas = document.getElementById('clusterCanvas');
  if (!canvas) return;

  const dpr = window.devicePixelRatio || 1;
  const SIZE = 360;
  canvas.width  = SIZE * dpr;
  canvas.height = SIZE * dpr;
  canvas.style.width  = SIZE + 'px';
  canvas.style.height = SIZE + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // Three clusters mirroring the actual proportions:
  // Low: 81.04% (many small dots), Mid: 18.71%, High: 0.25% (a few)
  const clusters = [
    { cx: 160, cy: 220, spread: 90, count: 90, color: '#E10600', label: 'Rendah (81%)' },
    { cx: 240, cy: 120, spread: 50, count: 20, color: '#FF4D4D', label: 'Sedang (19%)' },
    { cx: 290, cy: 70,  spread: 20, count:  3, color: '#8F0A0A', label: 'Tinggi (0.25%)' },
  ];

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame     = 0;
  let dots      = [];

  // Pre-generate dot positions
  clusters.forEach(cl => {
    for (let i = 0; i < cl.count; i++) {
      const angle  = Math.random() * Math.PI * 2;
      const radius = Math.random() * cl.spread;
      dots.push({
        x:    cl.cx + Math.cos(angle) * radius,
        y:    cl.cy + Math.sin(angle) * radius,
        r:    Math.random() * 3 + 2,
        color:cl.color,
        phase:Math.random() * Math.PI * 2,
        // Animation entrance
        progress: 0,
        delay: i * (reduced ? 0 : 8),
      });
    }
  });

  function drawBackground() {
    // Dark card background
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    ctx.fillStyle = isDark ? '#1C1C24' : '#F0F0F5';
    ctx.fillRect(0, 0, SIZE, SIZE);

    // Grid lines
    ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= SIZE; i += 36) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, SIZE); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(SIZE, i); ctx.stroke();
    }
  }

  function drawAxes() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)';
    ctx.lineWidth   = 1;
    // X-axis
    ctx.beginPath(); ctx.moveTo(20, SIZE - 20); ctx.lineTo(SIZE - 10, SIZE - 20); ctx.stroke();
    // Y-axis
    ctx.beginPath(); ctx.moveTo(20, SIZE - 20); ctx.lineTo(20, 10); ctx.stroke();

    // Labels
    ctx.fillStyle = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    ctx.font      = '10px Inter, sans-serif';
    ctx.fillText('PC 1', SIZE - 32, SIZE - 6);
    ctx.fillText('PC 2', 24, 16);
  }

  function drawLegend() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    clusters.forEach((cl, i) => {
      const lx = 24, ly = 24 + i * 20;
      ctx.fillStyle = cl.color;
      ctx.beginPath(); ctx.arc(lx, ly, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)';
      ctx.font      = '10px Inter, sans-serif';
      ctx.fillText(cl.label, lx + 10, ly + 4);
    });
  }

  function animate() {
    frame++;
    ctx.clearRect(0, 0, SIZE, SIZE);
    drawBackground();
    drawAxes();

    // Draw dots with entrance animation
    dots.forEach(dot => {
      if (frame > dot.delay) {
        dot.progress = Math.min(1, dot.progress + 0.04);
      }
      if (dot.progress === 0) return;

      // Gentle float
      const float = reduced ? 0 : Math.sin(frame * 0.03 + dot.phase) * 1.5;

      ctx.globalAlpha = dot.progress;
      ctx.beginPath();
      ctx.arc(
        dot.x,
        dot.y + float,
        dot.r * dot.progress,
        0, Math.PI * 2
      );
      ctx.fillStyle = dot.color;
      ctx.fill();

      // Glow
      const grd = ctx.createRadialGradient(dot.x, dot.y + float, 0, dot.x, dot.y + float, dot.r * 3);
      grd.addColorStop(0, dot.color + '40');
      grd.addColorStop(1, dot.color + '00');
      ctx.beginPath();
      ctx.arc(dot.x, dot.y + float, dot.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    drawLegend();

    if (!reduced) requestAnimationFrame(animate);
  }

  animate();

  // Re-draw on theme change (observe attribute)
  new MutationObserver(() => {
    frame = 0;
    dots.forEach(d => { d.progress = 0; d.delay = 0; });
    if (reduced) animate();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}

/* ============================================================
   LANGUAGES CONFIG
   ============================================================ */
const LANGUAGES = [
  {
    id:       'id',
    flagCode: 'id',   // Iconify circle-flags: id → Indonesia
    nameKey:  'lang.id.name',
    subKey:   'lang.id.sub',
    badgeKey: 'lang.id.badge',
    noteKey:  null,
  },
  {
    id:       'en',
    flagCode: 'gb',   // Iconify circle-flags: gb → United Kingdom
    nameKey:  'lang.en.name',
    subKey:   'lang.en.sub',
    badgeKey: 'lang.en.badge',
    noteKey:  'lang.en.note',
  },
  {
    id:       'jp',
    flagCode: 'jp',   // Iconify circle-flags: jp → Japan
    nameKey:  'lang.jp.name',
    subKey:   'lang.jp.sub',
    badgeKey: 'lang.jp.badge',
    noteKey:  null,
  },
];

/* ============================================================
   CERTIFICATES CONFIG
   ─────────────────────────────────────────────────────────────
   Cara mengisi driveId:
   1. Buka file di Google Drive → klik kanan → "Bagikan" → atur
      akses menjadi "Siapa saja yang memiliki link" dapat melihat.
   2. Salin link berbagi, contoh:
      https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view
   3. ID-nya adalah bagian antara /d/ dan /view:
      driveId: "1AbCdEfGhIjKlMnOpQrStUvWxYz"
   ─────────────────────────────────────────────────────────────
   Jika driveId dibiarkan kosong (""), kartu menampilkan
   placeholder gradien merah dengan ikon award.
   ============================================================ */
const CERTIFICATES = [
  {
    id:       'karirnex',
    driveId:  '1yo6qjCWmgD5r-GpNHH0_090eKkvTHdkK', // TODO: isi dengan ID file Google Drive
    tags:     ['Excel', 'PivotTable', 'Dashboard', 'VBA Macro'],
  },
  {
    id:       'bc',
    driveId:  '1SQI6jH8WPgHe2ix25X4u_2HpJFjV1Yg8', // TODO: isi dengan ID file Google Drive
    tags:     ['English', 'British Council'],
  },
  {
    id:       'odoo',
    driveId:  '1b_uWBVGEoCrdz1bf61l-Muob_JEJI0rK', // TODO: isi dengan ID file Google Drive
    tags:     ['Odoo ERP', 'Industri 4.0'],
  },
  {
    id:       'hki',
    driveId:  '1G58_jmzNCMNktgaP3SjD79NxY25dnpwY', // TODO: isi dengan ID file Google Drive
    tags:     ['HKI', 'Literasi Digital', 'KKN'],
  },
];

/* ============================================================
   CERT CARDS — render kartu dari CERTIFICATES config
   ============================================================ */
function buildCertCardHTML(cert, lang) {
  const t = key => (i18n[lang] && i18n[lang][key]) ? i18n[lang][key] : (i18n.id[key] || '');

  const hasDrive = cert.driveId && cert.driveId.trim() !== '';
  const thumbUrl  = hasDrive ? `https://drive.google.com/thumbnail?id=${cert.driveId}&sz=w1000` : '';
  const driveUrl  = hasDrive ? `https://drive.google.com/file/d/${cert.driveId}/view` : '#';

  /* ── Zona gambar ── */
  const imgHTML = hasDrive
    ? `<img
        src="${thumbUrl}"
        alt="${t('cert.'+cert.id+'.title').replace(/&amp;/g,'&').replace(/&ldquo;/g,'"').replace(/&rdquo;/g,'"')}"
        loading="lazy"
        referrerpolicy="no-referrer"
        onerror="this.style.display='none';this.parentElement.querySelector('.cert-img-placeholder').style.display='flex';"
      >`
    : '';

  /* ── Tags ── */
  const tagsHTML = cert.tags.map(tag =>
    `<span class="cert-img-tag">${tag}</span>`
  ).join('');

  return `
    <article class="cert-img-card" role="listitem" data-cert-id="${cert.id}" data-drive-id="${cert.driveId}">
      <div class="cert-img-zone">
        ${imgHTML}
        <div class="cert-img-placeholder" style="${hasDrive ? 'display:none' : 'display:flex'}" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="1.5"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
          <span>${t('cert.'+cert.id+'.title').replace(/&amp;/g,'&').replace(/&ldquo;/g,'"').replace(/&rdquo;/g,'"')}</span>
        </div>
      </div>
      <div class="cert-img-body">
        <div class="cert-img-meta">
          <span class="cert-img-cat"  data-i18n="cert.${cert.id}.cat">${t('cert.'+cert.id+'.cat')}</span>
          <span class="cert-img-period" data-i18n="cert.${cert.id}.period">${t('cert.'+cert.id+'.period')}</span>
        </div>
        <h3 class="cert-img-title" data-i18n="cert.${cert.id}.title">${t('cert.'+cert.id+'.title')}</h3>
        <p  class="cert-img-desc"  data-i18n="cert.${cert.id}.desc">${t('cert.'+cert.id+'.desc')}</p>
        <div class="cert-img-tags">${tagsHTML}</div>
        <button
          class="cert-img-cta"
          data-cert-id="${cert.id}"
          data-drive-url="${driveUrl}"
          aria-label="${t('cert.cta')}: ${t('cert.'+cert.id+'.title').replace(/&amp;/g,'&').replace(/&ldquo;/g,'"').replace(/&rdquo;/g,'"')}"
          type="button"
        >
          <span data-i18n="cert.cta">${t('cert.cta')}</span>
          <span class="cta-arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </article>`;
}

function initCertCards() {
  const grid = document.getElementById('certGrid');
  if (!grid) return;

  /* Render semua kartu */
  grid.innerHTML = CERTIFICATES.map(cert => buildCertCardHTML(cert, currentLang)).join('');

  /* Hubungkan tombol CTA ke lightbox */
  grid.querySelectorAll('.cert-img-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const certId  = btn.dataset.certId;
      const cert    = CERTIFICATES.find(c => c.id === certId);
      if (cert) openCertLightbox(cert);
    });
  });

  /* Scroll reveal per kartu (stagger 80ms) */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    grid.querySelectorAll('.cert-img-card').forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const cards = entry.target.querySelectorAll('.cert-img-card');
      cards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 80}ms`;
        requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  obs.observe(grid);
}

/* Re-render kartu saat bahasa diganti */
function refreshCertCards() {
  const grid = document.getElementById('certGrid');
  if (!grid || !grid.querySelector('.cert-img-card')) return;

  /* Simpan status visible agar tidak hilang setelah re-render */
  const wasVisible = Array.from(grid.querySelectorAll('.cert-img-card')).map(el => el.classList.contains('visible'));

  grid.innerHTML = CERTIFICATES.map(cert => buildCertCardHTML(cert, currentLang)).join('');

  /* Pulihkan kelas visible */
  grid.querySelectorAll('.cert-img-card').forEach((el, i) => {
    if (wasVisible[i]) { el.style.transitionDelay = '0ms'; el.classList.add('visible'); }
  });

  /* Pasang ulang event CTA */
  grid.querySelectorAll('.cert-img-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const cert = CERTIFICATES.find(c => c.id === btn.dataset.certId);
      if (cert) openCertLightbox(cert);
    });
  });
}

/* ============================================================
   LANG CARDS — render kartu dari LANGUAGES config
   ============================================================ */
function buildLangCardHTML(lang, currentLangKey) {
  const t = key => (i18n[currentLangKey] && i18n[currentLangKey][key]) ? i18n[currentLangKey][key] : (i18n.id[key] || '');
  const flagSrc = `https://cdn.jsdelivr.net/npm/circle-flags@2.7.0/flags/${lang.flagCode}.svg`;
  const noteHTML = lang.noteKey
    ? `<p class="lang-note">${t(lang.noteKey)}</p>`
    : '';
  return `
  <div class="lang-card" role="listitem" data-lang-id="${lang.id}">
    <div class="lang-flag-wrap">
      <img
        src="${flagSrc}"
        alt=""
        aria-hidden="true"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      >
      <div class="lang-flag-fallback" style="display:none;">${lang.flagCode.toUpperCase()}</div>
    </div>
    <h3 class="lang-name">${t(lang.nameKey)}</h3>
    <p class="lang-sub">${t(lang.subKey)}</p>
    <span class="lang-badge">${t(lang.badgeKey)}</span>
    ${noteHTML}
  </div>`;
}

function initLangCards() {
  const grid = document.getElementById('langGrid');
  if (!grid) return;

  grid.innerHTML = LANGUAGES.map(lang => buildLangCardHTML(lang, currentLang)).join('');

  /* Scroll reveal with stagger */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    grid.querySelectorAll('.lang-card').forEach(card => card.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const cards = entry.target.querySelectorAll('.lang-card');
      cards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 100}ms`;
        requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  obs.observe(grid);
}

function refreshLangCards() {
  const grid = document.getElementById('langGrid');
  if (!grid || !grid.querySelector('.lang-card')) return;

  const wasVisible = Array.from(grid.querySelectorAll('.lang-card')).map(el => el.classList.contains('visible'));

  grid.innerHTML = LANGUAGES.map(lang => buildLangCardHTML(lang, currentLang)).join('');

  grid.querySelectorAll('.lang-card').forEach((el, i) => {
    if (wasVisible[i]) { el.style.transitionDelay = '0ms'; el.classList.add('visible'); }
  });
}

/* ============================================================
   KONTAK ICONS — scroll reveal with stagger for .social-btn
   ============================================================ */
function initKontakIcons() {
  const container = document.getElementById('kontakIcons');
  if (!container) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    container.querySelectorAll('.social-btn').forEach(btn => btn.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.social-btn').forEach((btn, i) => {
        btn.style.transitionDelay = `${i * 60}ms`;
        requestAnimationFrame(() => requestAnimationFrame(() => btn.classList.add('visible')));
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  obs.observe(container);
}

/* ============================================================
   CERT LIGHTBOX
   ============================================================ */
function openCertLightbox(cert) {
  const lb      = document.getElementById('certLightbox');
  const img     = document.getElementById('certLightboxImg');
  const empty   = document.getElementById('certLightboxEmpty');
  const drive   = document.getElementById('certLightboxDrive');
  const title   = document.getElementById('lightboxTitle');
  if (!lb) return;

  const t = key => (i18n[currentLang] && i18n[currentLang][key]) ? i18n[currentLang][key] : (i18n.id[key] || '');
  const hasDrive = cert.driveId && cert.driveId.trim() !== '';

  /* Judul */
  title.innerHTML = t('cert.'+cert.id+'.title');

  /* Gambar / placeholder */
  if (hasDrive) {
    img.src = `https://drive.google.com/thumbnail?id=${cert.driveId}&sz=w2000`;
    img.alt = title.textContent;
    img.style.display = '';
    empty.hidden = true;
    drive.href = `https://drive.google.com/file/d/${cert.driveId}/view`;
    drive.hidden = false;
  } else {
    img.src = '';
    img.style.display = 'none';
    empty.hidden = false;
    drive.href  = '#';
    drive.hidden = true;
  }

  /* Label i18n tombol drive */
  drive.textContent = t('cert.lightbox.drive');
  empty.textContent = t('cert.lightbox.empty');

  /* Tampilkan */
  lb.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  /* Fokus ke tombol tutup */
  const closeBtn = document.getElementById('certLightboxClose');
  if (closeBtn) closeBtn.focus();
}

function closeCertLightbox() {
  const lb = document.getElementById('certLightbox');
  if (!lb) return;
  lb.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function initCertLightbox() {
  const lb       = document.getElementById('certLightbox');
  const closeBtn = document.getElementById('certLightboxClose');
  const backdrop = document.getElementById('certLightboxBackdrop');
  if (!lb) return;

  /* Tombol tutup */
  if (closeBtn) closeBtn.addEventListener('click', closeCertLightbox);

  /* Klik di luar inner (backdrop) */
  if (backdrop) backdrop.addEventListener('click', closeCertLightbox);

  /* Tekan Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lb.hidden) closeCertLightbox();
  });

  /* Fokus trap — Tab / Shift+Tab terkurung di dalam lightbox */
  lb.addEventListener('keydown', e => {
    if (e.key !== 'Tab' || lb.hidden) return;
    const focusable = Array.from(lb.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.disabled && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });
}

/* ============================================================
   SKILLS ICON GRID — Stagger reveal per item
   Menggunakan IntersectionObserver pada .skill-category.
   Jika reduced-motion aktif atau JS gagal, semua item langsung tampil.
   ============================================================ */
function initSkillsReveal() {
  // Jika reduced-motion, langsung visible semua
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    document.querySelectorAll('.skill-icon-item').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Observe tiap .skill-category, stagger children saat masuk viewport
  const catObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const items = entry.target.querySelectorAll('.skill-icon-item');
      items.forEach((item, idx) => {
        item.style.transitionDelay = `${idx * 60}ms`;
        // rAF agar transisi berjalan setelah style diterapkan
        requestAnimationFrame(() => {
          requestAnimationFrame(() => { item.classList.add('visible'); });
        });
      });
      catObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-category').forEach(cat => catObserver.observe(cat));
}

/* ============================================================
   BOOT — Run after DOM is ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Load persisted preferences
  initTheme();
  initLang();

  // 2. Lucide icons (needs DOM ready)
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // 3. Features
  startTyping();
  initHeroCanvas();
  initMouseGlow();
  initClusterCanvas();
  initSkillsReveal();
  initCertCards();
  initCertLightbox();
  initLangCards();
  initKontakIcons();

  // Tilt efek ringan pada panel dekorasi foto (desktop/pointer only)
  initPhotoTilt();
});

/* ============================================================
   PHOTO TILT — efek miring ringan mengikuti mouse, maks 6°
   Dinonaktifkan pada: layar sentuh & prefers-reduced-motion
   ============================================================ */
function initPhotoTilt() {
  // Nonaktifkan pada sentuh dan reduced-motion
  if (isTouchDevice()) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const photo = document.querySelector('.tentang-photo');
  const deco  = document.querySelector('.photo-deco');
  const wrap  = document.querySelector('.photo-wrapper');
  if (!photo || !deco || !wrap) return;

  const MAX_DEG = 6;

  photo.addEventListener('mousemove', e => {
    const rect  = photo.getBoundingClientRect();
    // Normalisasi -1..+1 relatif ke tengah elemen foto
    const nx = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
    const ny = ((e.clientY - rect.top)   / rect.height - 0.5) * 2;

    const rotX = (-ny * MAX_DEG).toFixed(2);   // atas↑ → positive X
    const rotY = ( nx * MAX_DEG).toFixed(2);   // kanan→ → positive Y

    // Terapkan ke foto
    wrap.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    wrap.style.transition = 'transform 0.1s ease';

    // Panel dekorasi bergerak lebih sedikit (paralaks ringan)
    deco.style.transform = `perspective(600px) rotateX(${rotX * 0.4}deg) rotateY(${rotY * 0.4}deg) translate(${nx * 4}px, ${ny * 4}px)`;
    deco.style.transition = 'transform 0.1s ease';
  }, { passive: true });

  // Reset saat mouse keluar
  photo.addEventListener('mouseleave', () => {
    wrap.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    wrap.style.transition = 'transform 0.4s ease';
    deco.style.transform = 'translate(0,0)';
    deco.style.transition = 'transform 0.4s ease';
  });
}

