import { QuizQuestion, Language } from '../types';
import { Brain, Lightbulb, BookOpen, ShieldAlert } from 'lucide-react';

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
      btn_ethics_title: 'Kuis Etika',
      btn_ethics_desc: 'Uji pemahamanmu',
      did_you_know_title: 'Tahukah Kamu?',
      did_you_know_desc: 'AI tidak punya perasaan. Jadi kalau kamu curhat, dia hanya membalas berdasarkan apa yang dia baca, bukan apa yang dia rasakan.',
      id_badge: 'ID'
    },
    settings: {
      title: 'Pengaturan',
      subtitle: 'Atur aplikasimu',
      language_label: 'Bahasa / Language',
      language_desc: 'Pilih bahasa yang ingin kamu gunakan.'
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
      title: 'Zona Etika',
      subtitle: 'Belajar pakai AI dengan benar',
      question_counter: 'SOAL',
      correct: 'Jawabanmu Benar!',
      incorrect: 'Kurang Tepat.',
      finish_title: 'Quiz Selesai!',
      correct_count: 'Kamu menjawab benar',
      from: 'dari',
      perfect_msg: 'Wow! Kamu adalah Pahlawan Etika AI! Terus gunakan teknologi dengan bijak ya.',
      good_msg: 'Bagus! Tapi masih perlu belajar lagi biar makin bijak pakai AI. Semangat!',
      btn_retry: 'Main Lagi',
      btn_next: 'Lanjut Soal Berikutnya',
      btn_result: 'Lihat Hasil'
    },
    learn: {
      title: 'Kelas AI',
      subtitle: 'Kurikulum Belajar Pintar',
      finish_alert_title: 'Selamat Belajar! 🎓',
      finish_alert_desc: 'Selesaikan semua bab di atas, lalu coba alat-alat AI di menu bawah. Jangan lupa ikut Kuis Etika di Bab 4 ya!',
      btn_quiz: 'Mulai Kuis Etika'
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
      btn_ethics_title: 'Ethics Quiz',
      btn_ethics_desc: 'Test your knowledge',
      did_you_know_title: 'Did You Know?',
      did_you_know_desc: 'AI doesn\'t have feelings. If you tell it a secret, it replies based on what it reads, not what it feels.',
      id_badge: 'EN'
    },
    settings: {
      title: 'Settings',
      subtitle: 'Configure your app',
      language_label: 'Language / Bahasa',
      language_desc: 'Choose the language you want to use.'
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
      title: 'Ethics Zone',
      subtitle: 'Learn to use AI correctly',
      question_counter: 'QUESTION',
      correct: 'Correct Answer!',
      incorrect: 'Not quite right.',
      finish_title: 'Quiz Finished!',
      correct_count: 'You answered correctly',
      from: 'out of',
      perfect_msg: 'Wow! You are an AI Ethics Hero! Keep using technology wisely.',
      good_msg: 'Good job! But keep learning to become wiser using AI. Fighting!',
      btn_retry: 'Play Again',
      btn_next: 'Next Question',
      btn_result: 'See Results'
    },
    learn: {
      title: 'AI Class',
      subtitle: 'Smart Learning Curriculum',
      finish_alert_title: 'Happy Learning! 🎓',
      finish_alert_desc: 'Finish all chapters above, then try the AI tools in the menu below. Don\'t forget to take the Ethics Quiz in Chapter 4!',
      btn_quiz: 'Start Ethics Quiz'
    }
  }
};

export const getEthicsQuestions = (lang: Language): QuizQuestion[] => {
  if (lang === 'en') {
    return [
      {
        id: 1,
        question: "Your friend asks you to do their Math homework using AI. What should you do?",
        options: [
          "Do all the answers using AI for them.",
          "Invite them to study together and use AI only to explain formulas.",
          "Just ignore them and let them not do the homework."
        ],
        correctAnswer: 1,
        explanation: "Correct! AI is a study tool, not a cheating tool. If AI does the work, our brains won't get smarter!"
      },
      {
        id: 2,
        question: "You see a photo of your favorite artist doing something weird online, but it's actually AI-made (Deepfake). What is your attitude?",
        options: [
          "Immediately share it to all friends.",
          "Believe it because the picture looks real.",
          "Check the truth first and don't spread it carelessly."
        ],
        correctAnswer: 2,
        explanation: "Awesome! We must be critical. Not everything online is real. Spreading hoaxes is bad."
      },
      {
        id: 3,
        question: "Is it okay to ask AI to create rude words to mock others?",
        options: [
          "It's okay, just for fun.",
          "No, that's called Cyberbullying.",
          "It's okay if the person is annoying."
        ],
        correctAnswer: 1,
        explanation: "Exactly! Using technology to hurt others' feelings is very wrong. We must stay polite."
      },
      {
        id: 4,
        question: "Is it safe to tell AI your full name, home address, and school name?",
        options: [
          "Yes, AI is a trusted friend.",
          "No, that is private information (Privacy). We shouldn't share it with strangers or AI.",
          "It's okay if nobody else sees it."
        ],
        correctAnswer: 1,
        explanation: "Smart! Never share private information online or with AI. We must protect our privacy!"
      },
      {
        id: 5,
        question: "If you ask AI to draw a 'Doctor', it only draws men. Why?",
        options: [
          "Because only men can be doctors.",
          "Because AI learns from old data that might be biased (unfair).",
          "Because AI likes men better."
        ],
        correctAnswer: 1,
        explanation: "Right! This is called 'Bias'. AI learns from internet data, which can sometimes be unfair. We know that anyone can be a doctor!"
      }
    ];
  }
  return [
    {
      id: 1,
      question: "Temanmu minta dibuatkan PR Matematika pakai AI. Apa yang harus kamu lakukan?",
      options: [
        "Bantu buatkan semua jawabannya pakai AI.",
        "Ajak dia belajar bareng dan pakai AI cuma untuk jelaskan rumus.",
        "Biarkan saja dia tidak kerjakan PR."
      ],
      correctAnswer: 1,
      explanation: "Betul! AI itu alat bantu belajar, bukan alat curang. Kalau AI yang kerjakan, otak kita tidak jadi pintar!"
    },
    {
      id: 2,
      question: "Kamu melihat foto artis favoritmu melakukan hal aneh di internet, tapi ternyata itu buatan AI (Deepfake). Apa sikapmu?",
      options: [
        "Langsung sebarkan ke semua teman.",
        "Percaya saja karena gambarnya terlihat nyata.",
        "Cek dulu kebenarannya dan jangan disebarkan sembarangan."
      ],
      correctAnswer: 2,
      explanation: "Keren! Kita harus kritis. Tidak semua yang kita lihat di internet itu nyata. Menyebarkan hoax itu tidak baik."
    },
    {
      id: 3,
      question: "Bolehkah kita menyuruh AI membuat kata-kata kasar untuk mengejek orang lain?",
      options: [
        "Boleh, kan cuma main-main.",
        "Tidak boleh, itu namanya Cyberbullying.",
        "Boleh kalau orangnya menyebalkan."
      ],
      correctAnswer: 1,
      explanation: "Tepat sekali! Menggunakan teknologi untuk menyakiti perasaan orang lain itu salah besar. Kita harus tetap sopan."
    },
    {
      id: 4,
      question: "Apakah aman memberitahu AI nama lengkap, alamat rumah, dan nama sekolahmu?",
      options: [
        "Aman kok, AI kan teman baik.",
        "Tidak boleh, itu data pribadi (Privasi). Jangan sembarangan disebar.",
        "Boleh saja kalau tidak ada orang lain yang lihat."
      ],
      correctAnswer: 1,
      explanation: "Pintar! Jangan pernah membagikan informasi pribadi (seperti alamat rumah) di internet atau ke AI. Kita harus jaga privasi!"
    },
    {
      id: 5,
      question: "Jika kamu minta AI menggambar 'Dokter', AI cuma menggambar laki-laki saja. Kenapa?",
      options: [
        "Karena cuma laki-laki yang bisa jadi dokter.",
        "Karena AI belajar dari data lama yang mungkin Bias (tidak adil).",
        "Karena AI lebih suka laki-laki."
      ],
      correctAnswer: 1,
      explanation: "Benar! Ini namanya 'Bias'. AI belajar dari data internet yang kadang kurang adil. Padahal kita tahu siapa saja bisa jadi dokter!"
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
      btn: "Start Ethics Quiz"
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
      btn: "Mulai Kuis Etika"
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