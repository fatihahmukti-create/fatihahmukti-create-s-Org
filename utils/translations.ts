import { QuizQuestion, Language, EthicsLevel } from '../types';
import { Brain, Lightbulb, BookOpen, ShieldAlert, Star, Lock, Zap, Search, GraduationCap } from 'lucide-react';

export const translations = {
  id: {
    nav: {
      home: 'Beranda',
      learn: 'Belajar',
      chat: 'Tanya',
      image: 'Lukis',
      vision: 'Detektif',
      settings: 'Setting'
    },
    home: {
      welcome: 'Selamat Datang!',
      subtitle: 'Ayo belajar kecerdasan buatan (AI) sambil bermain dan jadi anak pintar yang bijak!',
      btn_learn_title: 'Materi Belajar AI',
      btn_learn_desc: 'Mulai dari nol sampai paham etika!',
      btn_chat_title: 'Tanya Robo',
      btn_chat_desc: 'Chat seru dengan AI',
      btn_image_title: 'Lukis Ajaib',
      btn_image_desc: 'Buat gambar kartun',
      btn_vision_title: 'Detektif AI',
      btn_vision_desc: 'Kenali benda sekitar',
      btn_ethics_title: 'Petualangan Etika',
      btn_ethics_desc: 'Mainkan game level!',
      did_you_know_title: 'Tahukah Kamu?',
      did_you_know_desc: 'AI tidak punya perasaan. Jadi kalau kamu curhat, dia hanya membalas berdasarkan apa yang dia baca, bukan apa yang dia rasakan.',
      id_badge: 'ID'
    },
    settings: {
      title: 'Pengaturan',
      subtitle: 'Atur aplikasimu',
      language_label: 'Bahasa / Language',
      language_desc: 'Pilih bahasa yang ingin kamu gunakan.',
    },
    chat: {
      title: 'Tanya Robo',
      subtitle: 'Teman belajar AI kamu',
      placeholder: 'Tulis pesanmu di sini...',
      loading: 'Robo sedang berpikir...',
      reminder: 'Ingat, selalu sopan saat bicara dengan AI ya!',
      initial_msg: 'Halo! Aku Robo. Kamu mau belajar apa tentang AI hari ini? Atau mau dengar fakta seru tentang pembelajaran dan etika AI?',
      user: 'Kamu',
      bot: 'Robo'
    },
    image: {
      title: 'Lukis Ajaib',
      subtitle: 'Ubah tulisan jadi gambar!',
      label: 'Kamu mau gambar apa?',
      placeholder: 'Contoh: Robot makan es krim...',
      btn_generate: 'Buat Gambar',
      loading_text: 'Sedang melukis...',
      empty_state: 'Hasil gambarmu akan muncul di sini',
      save: 'Simpan',
      suggestions_title: 'IDE SERU (KLIK AJA):',
      suggestions: ['Kucing astronot di bulan', 'Rumah permen warna-warni', 'Dinosaurus main skateboard', 'Kota masa depan yang hijau', 'Robot sedang membaca buku', 'Mobil terbang di atas awan'],
      ethics_warning: 'Info Etika:',
      ethics_desc: 'Semua gambar dibuat oleh komputer (AI), bukan manusia. Jangan gunakan untuk meniru wajah temanmu tanpa izin ya!'
    },
    vision: {
      title: 'Detektif Benda',
      subtitle: 'AI bisa melihat apa ya?',
      upload_text: 'Ambil Foto / Upload',
      upload_sub: 'Klik di sini ya',
      btn_analyze: 'Tanya Detektif AI',
      loading_text: 'Sedang Meneliti...',
      report_title: 'Laporan Detektif:',
      disclaimer: 'Detektif AI pintar, tapi kadang bisa salah lihat. Jangan lupa cek sendiri ya!'
    },
    ethics: {
      title: 'Petualangan Etika',
      subtitle: 'Jadilah Master AI yang Bijak!',
      level: 'Level',
      locked: 'Terkunci',
      start: 'Mulai',
      question_counter: 'Soal',
      correct: 'Hebat! Jawabanmu Benar!',
      incorrect: 'Ups! Kurang Tepat.',
      finish_title: 'Level Selesai!',
      score: 'Skor Kamu:',
      min_score: 'Butuh skor',
      to_unlock: 'untuk buka level selanjutnya.',
      btn_retry: 'Coba Lagi',
      btn_home: 'Kembali ke Peta',
      btn_next: 'Level Berikutnya',
      game_sorting_desc: 'Pilih tombol Kiri atau Kanan!'
    },
    learn: {
      title: 'Kelas AI',
      subtitle: 'Kurikulum Belajar Pintar',
      finish_alert_title: 'Selamat Belajar! 🎓',
      finish_alert_desc: 'Selesaikan semua bab di atas, lalu coba alat-alat AI di menu bawah. Jangan lupa mainkan Petualangan Etika!',
      btn_quiz: 'Mulai Petualangan'
    }
  },
  en: {
    nav: {
      home: 'Home',
      learn: 'Learn',
      chat: 'Chat',
      image: 'Draw',
      vision: 'Vision',
      settings: 'Settings'
    },
    home: {
      welcome: 'Welcome!',
      subtitle: 'Let\'s learn Artificial Intelligence (AI) while playing and becoming a wise smart kid!',
      btn_learn_title: 'AI Lessons',
      btn_learn_desc: 'From zero to ethics hero!',
      btn_chat_title: 'Ask Robo',
      btn_chat_desc: 'Fun chat with AI',
      btn_image_title: 'Magic Draw',
      btn_image_desc: 'Create cartoon images',
      btn_vision_title: 'AI Detective',
      btn_vision_desc: 'Identify objects',
      btn_ethics_title: 'Ethics Adventure',
      btn_ethics_desc: 'Play level game!',
      did_you_know_title: 'Did You Know?',
      did_you_know_desc: 'AI doesn\'t have feelings. If you tell it a secret, it replies based on what it reads, not what it feels.',
      id_badge: 'EN'
    },
    settings: {
      title: 'Settings',
      subtitle: 'Configure your app',
      language_label: 'Language / Bahasa',
      language_desc: 'Choose the language you want to use.',
    },
    chat: {
      title: 'Ask Robo',
      subtitle: 'Your AI learning buddy',
      placeholder: 'Type your message here...',
      loading: 'Robo is thinking...',
      reminder: 'Remember, always be polite when talking to AI!',
      initial_msg: 'Hi! I\'m Robo. What do you want to learn about AI today? Or do you want to hear a fun fact about AI learning and ethics?',
      user: 'You',
      bot: 'Robo'
    },
    image: {
      title: 'Magic Draw',
      subtitle: 'Turn text into pictures!',
      label: 'What do you want to draw?',
      placeholder: 'Ex: A robot eating ice cream...',
      btn_generate: 'Create Image',
      loading_text: 'Painting...',
      empty_state: 'Your masterpiece will appear here',
      save: 'Save',
      suggestions_title: 'FUN IDEAS (CLICK ME):',
      suggestions: ['Astronaut cat on the moon', 'Colorful candy house', 'Dinosaur skateboarding', 'Green futuristic city', 'Robot reading a book', 'Flying car over clouds'],
      ethics_warning: 'Ethics Info:',
      ethics_desc: 'All images are made by computer (AI), not humans. Do not use it to mimic your friend\'s face without permission!'
    },
    vision: {
      title: 'Object Detective',
      subtitle: 'What can AI see?',
      upload_text: 'Take Photo / Upload',
      upload_sub: 'Click here',
      btn_analyze: 'Ask AI Detective',
      loading_text: 'Analyzing...',
      report_title: 'Detective Report:',
      disclaimer: 'AI Detective is smart, but can make mistakes. Don\'t forget to check yourself!'
    },
    ethics: {
      title: 'Ethics Adventure',
      subtitle: 'Become a Wise AI Master!',
      level: 'Level',
      locked: 'Locked',
      start: 'Start',
      question_counter: 'Question',
      correct: 'Awesome! Correct Answer!',
      incorrect: 'Oops! Not quite right.',
      finish_title: 'Level Complete!',
      score: 'Your Score:',
      min_score: 'Need score',
      to_unlock: 'to unlock next level.',
      btn_retry: 'Try Again',
      btn_home: 'Back to Map',
      btn_next: 'Next Level',
      game_sorting_desc: 'Choose Left or Right button!'
    },
    learn: {
      title: 'AI Class',
      subtitle: 'Smart Learning Curriculum',
      finish_alert_title: 'Happy Learning! 🎓',
      finish_alert_desc: 'Finish all chapters above, then try the AI tools in the menu below. Don\'t forget to play the Ethics Adventure!',
      btn_quiz: 'Start Adventure'
    }
  }
};

export const getEthicsLevels = (lang: Language): EthicsLevel[] => {
  const isId = lang === 'id';

  return [
    {
      id: 1,
      title: isId ? "Dasar Keamanan AI" : "AI Safety Basics",
      description: isId ? "Belajar hal dasar tentang privasi dan cara bicara dengan AI." : "Learn basics about privacy and talking to AI.",
      type: 'QUIZ',
      minScoreToUnlock: 2,
      icon: ShieldAlert,
      questions: [
        {
          id: 1,
          question: isId ? "Bolehkah memberi tahu alamat rumah ke AI?" : "Is it okay to tell AI your home address?",
          options: isId ? ["Boleh dong", "Tidak Boleh (Bahaya)", "Boleh asal AI janji"] : ["Sure", "No Way (Dangerous)", "Only if AI promises"],
          correctAnswer: 1,
          explanation: isId ? "Data pribadi seperti alamat itu rahasia! Jangan sebar di internet." : "Private data like address is secret! Don't share it online.",
          image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80" // House
        },
        {
          id: 2,
          question: isId ? "Jika AI memberi jawaban yang aneh, apa yang kamu lakukan?" : "If AI gives a weird answer, what do you do?",
          options: isId ? ["Percaya saja", "Marah ke AI", "Cek lagi di buku/internet"] : ["Just believe it", "Get angry", "Double check facts"],
          correctAnswer: 2,
          explanation: isId ? "AI bisa salah (halusinasi). Kita harus selalu cek fakta." : "AI can make mistakes (hallucinate). Always fact check.",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" // Robot
        },
        {
          id: 3,
          question: isId ? "Bolehkah minta AI membuatkan PR Sekolah?" : "Can you ask AI to do your homework?",
          options: isId ? ["Boleh, biar cepat", "Jangan, itu curang", "Boleh sedikit"] : ["Yes, faster", "No, that's cheating", "Maybe a little"],
          correctAnswer: 1,
          explanation: isId ? "AI untuk membantumu belajar, bukan menggantikanmu belajar!" : "AI is to help you learn, not to learn for you!",
          image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80" // Books
        }
      ]
    },
    {
      id: 2,
      title: isId ? "Game: Baik vs Buruk" : "Game: Good vs Bad",
      description: isId ? "Pilih dengan cepat! Mana penggunaan AI yang baik dan mana yang jahat?" : "Choose fast! Which AI use is good and which is bad?",
      type: 'SORTING',
      minScoreToUnlock: 4,
      icon: Zap,
      questions: [
        {
          id: 1,
          question: isId ? "Membuat poster kampanye lingkungan" : "Making an eco-friendly poster",
          options: isId ? ["👍 BAIK", "👎 BURUK"] : ["👍 GOOD", "👎 BAD"],
          correctAnswer: 0,
          explanation: isId ? "Menggunakan AI untuk kreativitas positif itu hebat!" : "Using AI for positive creativity is great!",
          image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" // Nature
        },
        {
          id: 2,
          question: isId ? "Membuat foto palsu teman sedang menangis" : "Making a fake photo of a friend crying",
          options: isId ? ["👍 BAIK", "👎 BURUK"] : ["👍 GOOD", "👎 BAD"],
          correctAnswer: 1,
          explanation: isId ? "Itu bullying! Jangan gunakan AI untuk menyakiti orang lain." : "That's bullying! Never use AI to hurt others.",
          image: "https://images.unsplash.com/photo-1605904351945-8c707d89668d?w=800&q=80" // Sad icon concept / Cyberbullying abstract
        },
        {
          id: 3,
          question: isId ? "Mencari ide kado ulang tahun ibu" : "Finding birthday gift ideas for mom",
          options: isId ? ["👍 BAIK", "👎 BURUK"] : ["👍 GOOD", "👎 BAD"],
          correctAnswer: 0,
          explanation: isId ? "AI asisten yang hebat untuk brainstorming ide." : "AI is a great assistant for brainstorming.",
          image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80" // Gift
        },
        {
          id: 4,
          question: isId ? "Meniru suara guru untuk menipu teman" : "Cloning teacher's voice to prank friends",
          options: isId ? ["👍 BAIK", "👎 BURUK"] : ["👍 GOOD", "👎 BAD"],
          correctAnswer: 1,
          explanation: isId ? "Meniru identitas orang lain (Deepfake suara) itu berbahaya dan dilarang." : "Impersonating others (Voice Deepfake) is dangerous and wrong.",
          image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?w=800&q=80" // Mic
        },
        {
          id: 5,
          question: isId ? "Menerjemahkan bahasa asing untuk belajar" : "Translating foreign languages to learn",
          options: isId ? ["👍 BAIK", "👎 BURUK"] : ["👍 GOOD", "👎 BAD"],
          correctAnswer: 0,
          explanation: isId ? "Sangat membantu untuk komunikasi!" : "Very helpful for communication!",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" // Globe/Tech
        }
      ]
    },
    {
      id: 3,
      title: isId ? "Detektif Hoax & Bias" : "Hoax & Bias Detective",
      description: isId ? "Soal lebih sulit tentang berita palsu dan ketidakadilan AI." : "Harder questions about fake news and AI unfairness.",
      type: 'QUIZ',
      minScoreToUnlock: 3,
      icon: Search,
      questions: [
        {
          id: 1,
          question: isId ? "Apa itu 'Bias' dalam AI?" : "What is 'Bias' in AI?",
          options: isId ? ["AI rusak", "AI pilih kasih / tidak adil", "AI sangat pintar"] : ["Broken AI", "Unfair AI", "Super Smart AI"],
          correctAnswer: 1,
          explanation: isId ? "Bias terjadi jika AI belajar dari data yang tidak lengkap, misal menganggap Dokter selalu Pria." : "Bias happens when AI learns from incomplete data, e.g. thinking Doctors are always men.",
          image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80" // Scales of justice
        },
        {
          id: 2,
          question: isId ? "Foto orang di internet terlihat sangat nyata. Apakah pasti asli?" : "A photo online looks super real. Is it definitely real?",
          options: isId ? ["Pasti asli", "Belum tentu (Bisa Deepfake)", "Tergantung kamera"] : ["Definitely real", "Not sure (Deepfake)", "Depends on camera"],
          correctAnswer: 1,
          explanation: isId ? "Zaman sekarang, AI bisa membuat foto manusia yang tidak nyata (Deepfake)." : "Nowadays, AI can create realistic photos of fake people (Deepfake).",
          image: "https://images.unsplash.com/photo-1535378437323-9555f3e7f6aa?w=800&q=80" // AI Face / Abstract
        },
        {
          id: 3,
          question: isId ? "Kenapa AI tidak boleh mengambil keputusan hukum (Pengadilan) sendiri?" : "Why shouldn't AI make legal decisions (Court) alone?",
          options: isId ? ["Karena AI tidak punya hati nurani", "Karena AI mahal", "Karena AI lambat"] : ["AI has no conscience", "AI is expensive", "AI is slow"],
          correctAnswer: 0,
          explanation: isId ? "Keputusan penting butuh rasa kemanusiaan dan empati yang tidak dimiliki robot." : "Important decisions need humanity and empathy which robots don't have.",
          image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80" // Court
        },
        {
          id: 4,
          question: isId ? "Jika temanmu menyebar berita bohong buatan AI, kamu harus apa?" : "Friend shares fake AI news, what do you do?",
          options: isId ? ["Ikut menyebarkan", "Diam saja", "Tegur dan beri tahu fakta"] : ["Share it too", "Stay silent", "Correct them politely"],
          correctAnswer: 2,
          explanation: isId ? "Jadilah pahlawan anti-hoax! Hentikan penyebaran berita palsu." : "Be an anti-hoax hero! Stop the spread of fake news.",
          image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80" // News
        }
      ]
    },
    {
      id: 4,
      title: isId ? "Master Etika AI" : "AI Ethics Master",
      description: isId ? "Tantangan terakhir untuk mendapatkan gelar Master!" : "Final challenge to get the Master title!",
      type: 'SORTING',
      minScoreToUnlock: 5,
      icon: GraduationCap,
      questions: [
        { id: 1, question: isId ? "AI menggantikan semua pekerjaan manusia" : "AI replacing all human jobs", options: isId ? ["FAKTA", "MITOS"] : ["FACT", "MYTH"], correctAnswer: 1, explanation: isId ? "AI adalah alat bantu, kreativitas manusia tetap dibutuhkan." : "AI is a tool, human creativity is still needed.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" }, // Worker
        { id: 2, question: isId ? "AI bisa membaca pikiranmu" : "AI can read your mind", options: isId ? ["FAKTA", "MITOS"] : ["FACT", "MYTH"], correctAnswer: 1, explanation: isId ? "AI cuma menebak kata selanjutnya berdasarkan data, bukan baca pikiran." : "AI just predicts next words based on data, not mind reading.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" }, // Brain
        { id: 3, question: isId ? "Kita bertanggung jawab atas apa yang kita buat dengan AI" : "We are responsible for what we make with AI", options: isId ? ["FAKTA", "MITOS"] : ["FACT", "MYTH"], correctAnswer: 0, explanation: isId ? "Betul! Kalau kamu pakai AI buat hal jahat, itu salahmu, bukan salah AI." : "Right! If you use AI for bad things, it's on you, not the AI.", image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80" }, // Responsibility
        { id: 4, question: isId ? "AI selalu netral dan objektif" : "AI is always neutral and objective", options: isId ? ["FAKTA", "MITOS"] : ["FACT", "MYTH"], correctAnswer: 1, explanation: isId ? "Tidak. AI punya bias tergantung data yang dipelajarinya." : "No. AI has bias depending on its training data.", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" }, // Meeting
        { id: 5, question: isId ? "Masa depan AI ada di tangan kita" : "The future of AI is in our hands", options: isId ? ["FAKTA", "MITOS"] : ["FACT", "MYTH"], correctAnswer: 0, explanation: isId ? "Kita yang menentukan apakah AI jadi alat baik atau buruk!" : "We decide if AI becomes a tool for good or bad!", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" } // Future/Earth
      ]
    }
  ];
};

export const getLearningChapters = (lang: Language) => {
  const content = lang === 'en' ? {
    c1: {
      title: "Chapter 1: What is AI?",
      p1: "Hi! 👋 Ever seen robots in movies? Or voice assistants like Siri? That's all **AI** or *Artificial Intelligence*.",
      box_title: "Imagine this:",
      box_desc: "If a calculator only counts numbers, AI is like a robot friend who can see, hear, and learn! 🤖",
      p2: "AI is not magic, but very advanced math programmed by humans to help us work."
    },
    c2: {
      title: "Chapter 2: How AI Learns",
      p1: "Humans learn from books and school. AI learns from **DATA**.",
      l1: "AI sees thousands of cat photos 🐱 to recognize cats.",
      l2: "AI reads millions of books 📚 to chat with you.",
      box_title: "Machine Learning:",
      box_desc: "That's the process! The more it practices (data), the smarter AI gets. Just like you practicing riding a bike! 🚲"
    },
    c3: {
      title: "Chapter 3: Types of AI",
      p1: "There are many types of AI in this app:",
      t1: "Chatbot (LLM)", d1: "Smart at chatting & storytelling.",
      t2: "Generative AI", d2: "Can create new images.",
      t3: "Computer Vision", d3: "AI that can \"see\"."
    },
    c4: {
      title: "Chapter 4: Ethics & Safety",
      warning: "⚠ This is the most important part!",
      p1: "AI is a great tool, but must be used wisely. Remember these rules:",
      r1t: "Don't Cheat:", r1d: "Don't ask AI to do your homework. Use AI to *teach* you, not give answers.",
      r2t: "Check Facts:", r2d: "AI can be wrong (hallucinate). Always double-check info.",
      r3t: "Be Polite:", r3d: "Don't ask AI to make rude words or mean pictures.",
      footer: "Understood? Let's test your knowledge!",
      btn: "Start Ethics Adventure"
    }
  } : {
    c1: {
      title: "Bab 1: Apa itu AI?",
      p1: "Hai! 👋 Pernah lihat robot di film? Atau asisten suara di HP seperti Google/Siri? Itu semua pakai **AI** atau *Artificial Intelligence* (Kecerdasan Buatan).",
      box_title: "Bayangkan begini:",
      box_desc: "Kalau kalkulator cuma bisa menghitung angka, AI itu seperti teman robot yang bisa melihat, mendengar, dan belajar! 🤖",
      p2: "AI bukan sulap, tapi matematika yang sangat canggih yang diprogram oleh manusia agar bisa membantu pekerjaan kita."
    },
    c2: {
      title: "Bab 2: Cara AI Belajar",
      p1: "Manusia belajar dari buku dan sekolah. Kalau AI belajar dari **DATA**.",
      l1: "AI melihat ribuan foto kucing 🐱 biar bisa mengenali kucing.",
      l2: "AI membaca jutaan buku 📚 biar bisa mengobrol denganmu.",
      box_title: "Machine Learning:",
      box_desc: "Ini nama prosesnya! Semakin banyak latihan (data), AI semakin pintar. Sama seperti kamu latihan naik sepeda! 🚲"
    },
    c3: {
      title: "Bab 3: Jenis-Jenis AI",
      p1: "Ada banyak jenis AI di aplikasi ini lho:",
      t1: "Chatbot (LLM)", d1: "Pintar mengobrol & bercerita.",
      t2: "Generative AI", d2: "Bisa membuat gambar baru.",
      t3: "Computer Vision", d3: "AI yang bisa \"melihat\".",
    },
    c4: {
      title: "Bab 4: Etika & Keamanan",
      warning: "⚠ Ini bagian paling penting!",
      p1: "AI itu alat yang hebat, tapi harus dipakai dengan bijak. Ingat aturan ini:",
      r1t: "Jangan Curang:", r1d: "Jangan suruh AI kerjakan PR kamu. Gunakan AI untuk *mengajari* caranya, bukan memberi jawaban.",
      r2t: "Cek Fakta:", r2d: "AI kadang bisa salah (halusinasi). Selalu cek ulang informasinya.",
      r3t: "Sopan Santun:", r3d: "Jangan minta AI membuat kata-kata kasar atau gambar yang jahat.",
      footer: "Sudah paham? Yuk tes pengetahuanmu!",
      btn: "Mulai Petualangan"
    }
  };

  return [
    {
      id: 1, title: content.c1.title, icon: Lightbulb, color: "text-yellow-600", bg: "bg-yellow-100",
      type: 'intro',
      data: content.c1
    },
    {
      id: 2, title: content.c2.title, icon: Brain, color: "text-blue-600", bg: "bg-blue-100",
      type: 'how',
      data: content.c2
    },
    {
      id: 3, title: content.c3.title, icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100",
      type: 'types',
      data: content.c3
    },
    {
      id: 4, title: content.c4.title, icon: ShieldAlert, color: "text-red-600", bg: "bg-red-100",
      type: 'ethics',
      data: content.c4
    }
  ];
}