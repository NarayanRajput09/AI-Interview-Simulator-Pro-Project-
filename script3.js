// ======================== QUESTION BANK ========================
const questionBank = {
  javascript: [
    { q: "What are closures in JavaScript? Give a real-world example.", tip: "Think about scope and data privacy.", answer: "A closure is a function that remembers its outer scope even after the outer function has returned. Used in data encapsulation, factory functions, and callbacks." },
    { q: "Explain the event loop in JavaScript.", tip: "Mention call stack, callback queue, and microtask queue.", answer: "The event loop continuously checks the call stack. When empty, it processes microtasks first (Promises), then macrotasks (setTimeout). This enables non-blocking async behavior." },
    { q: "What is the difference between == and === in JavaScript?", tip: "Think about type coercion.", answer: "== performs type coercion before comparison, while === checks both value and type without coercion. Always prefer === for predictable results." },
    { q: "What are Promises and how do they work?", tip: "Mention pending, fulfilled, rejected states.", answer: "A Promise is an object representing an eventual async result. It has 3 states: pending, fulfilled, rejected. Use .then(), .catch(), or async/await to handle results." },
    { q: "Explain 'this' keyword in JavaScript.", tip: "Context changes based on how the function is called.", answer: "The 'this' keyword refers to the object that invokes the function. In global scope it's window, in methods it's the object, in arrow functions it inherits from parent scope." },
    { q: "What is hoisting in JavaScript?", tip: "Variables and functions behave differently.", answer: "Hoisting moves declarations to the top of their scope. var is hoisted and initialized as undefined. let/const are hoisted but not initialized (temporal dead zone). Functions are fully hoisted." },
    { q: "What are async/await and how do they differ from Promises?", tip: "async/await is syntactic sugar.", answer: "async/await is syntactic sugar over Promises, making async code look synchronous. async functions always return a Promise, and await pauses execution until the Promise resolves." },
    { q: "What is prototypal inheritance?", tip: "Every object has a prototype chain.", answer: "JavaScript uses prototypal inheritance where objects inherit directly from other objects via the prototype chain. Each object has __proto__ pointing to its prototype, enabling shared methods." },
    { q: "What is the difference between var, let, and const?", tip: "Think about scope, hoisting, and reassignment.", answer: "var is function-scoped and hoisted. let is block-scoped and not hoisted safely. const is block-scoped and cannot be reassigned. Use const by default, let when needed." },
    { q: "What are higher-order functions? Give examples.", tip: "Functions that take or return functions.", answer: "Higher-order functions take other functions as arguments or return them. Examples: map(), filter(), reduce(). They enable functional programming patterns like composition." }
  ],
  html_css: [
    { q: "What is the CSS Box Model?", tip: "Content, padding, border, margin.", answer: "The box model describes how elements are rendered. It consists of content, padding, border, and margin layers. box-sizing: border-box includes padding and border in the width." },
    { q: "What is the difference between flexbox and CSS Grid?", tip: "1D vs 2D layout.", answer: "Flexbox is for 1D layout (row or column). CSS Grid is for 2D layout (rows and columns). Use flexbox for components, grid for page-level layout." },
    { q: "Explain CSS specificity and how it's calculated.", tip: "Inline > ID > Class > Element.", answer: "Specificity determines which CSS rule applies. Inline styles=1000, IDs=100, classes/attributes/pseudo-classes=10, elements=1. Higher specificity wins." },
    { q: "What are semantic HTML elements? Why are they important?", tip: "Think about accessibility and SEO.", answer: "Semantic elements like header, nav, main, article, footer describe their meaning. They improve accessibility for screen readers, help SEO, and make code more readable." },
    { q: "What is the difference between display:none and visibility:hidden?", tip: "Layout impact differs.", answer: "display:none removes the element from the flow completely. visibility:hidden hides it but keeps its space. opacity:0 keeps space and layout but makes it transparent." },
    { q: "Explain CSS positions: static, relative, absolute, fixed, sticky.", tip: "Each changes how elements are placed.", answer: "Static: default flow. Relative: offset from normal position. Absolute: relative to nearest positioned ancestor. Fixed: relative to viewport. Sticky: relative until scroll threshold." },
    { q: "What are CSS custom properties (variables)?", tip: "Reusable values with --variable-name.", answer: "CSS variables are declared with -- prefix (e.g., --primary-color: #007bff) inside :root and used with var(). They enable theming, are reusable, and can be changed with JavaScript." },
    { q: "What is responsive design and how do you implement it?", tip: "Think media queries, flexible units.", answer: "Responsive design adapts to any screen size. Implement with media queries, relative units (%, rem, vw), flexible layouts (flexbox/grid), and mobile-first approach." }
  ],
  python: [
    { q: "What are Python decorators?", tip: "Functions wrapping other functions.", answer: "Decorators are functions that wrap other functions to add behavior. Using @decorator syntax, they're common for logging, authentication, caching without modifying original code." },
    { q: "What is the difference between a list, tuple, and set in Python?", tip: "Mutability and ordering differ.", answer: "List: ordered, mutable, allows duplicates. Tuple: ordered, immutable, allows duplicates. Set: unordered, mutable, no duplicates. Use tuples for fixed data, sets for unique values." },
    { q: "Explain Python generators.", tip: "Uses yield keyword.", answer: "Generators use yield to produce values lazily one at a time. They save memory by not storing all values. Created with yield keyword or generator expressions. Used for large data streams." },
    { q: "What is list comprehension in Python?", tip: "Concise way to create lists.", answer: "List comprehension creates lists in a single line: [expr for item in iterable if condition]. It's faster and more Pythonic than traditional loops for building lists." },
    { q: "What is the difference between deep copy and shallow copy?", tip: "Think about nested objects.", answer: "Shallow copy copies only the top-level object; nested objects are still referenced. Deep copy recursively copies all objects. Use copy.deepcopy() for completely independent copies." },
    { q: "What are *args and **kwargs in Python?", tip: "Variable arguments.", answer: "*args collects extra positional arguments as a tuple. **kwargs collects extra keyword arguments as a dictionary. Useful for flexible function signatures." },
    { q: "Explain Python's GIL (Global Interpreter Lock).", tip: "Threading limitation.", answer: "The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time. It prevents true parallel execution in threads but doesn't affect multiprocessing." },
    { q: "What are Python context managers?", tip: "with statement.", answer: "Context managers manage resources using the with statement. They ensure proper resource cleanup (files, DB connections). Implemented with __enter__ and __exit__ methods or contextlib." }
  ],
  hr: [
    { q: "Tell me about yourself.", tip: "Keep it professional and concise — 2 minutes max.", answer: "Briefly cover your education, relevant experience, key skills, and why you're excited about this role. End with what you bring to the team." },
    { q: "What is your greatest strength?", tip: "Be specific with an example.", answer: "Choose a strength relevant to the job. Back it with a specific example demonstrating how it helped achieve a result. Avoid generic answers like 'I'm a hard worker'." },
    { q: "What is your greatest weakness?", tip: "Show self-awareness and improvement.", answer: "Pick a real weakness you've identified and explain what you're actively doing to improve it. Avoid weaknesses critical to the role." },
    { q: "Where do you see yourself in 5 years?", tip: "Align with the company's growth.", answer: "Express ambition aligned with the company's direction. Show desire to grow in skills and responsibility. Demonstrate commitment rather than just using the company as a stepping stone." },
    { q: "Why do you want to join our company?", tip: "Research the company beforehand.", answer: "Mention specific aspects: mission, product, culture, growth opportunities. Show you've researched the company and explain how it aligns with your goals." },
    { q: "Describe a challenging situation and how you handled it.", tip: "Use the STAR method.", answer: "Use STAR: Situation (what was the challenge), Task (your responsibility), Action (specific steps you took), Result (positive outcome and what you learned)." },
    { q: "How do you handle pressure and tight deadlines?", tip: "Provide a real example.", answer: "Explain your prioritization process, how you stay focused, and give an example of successfully delivering under pressure. Mention tools like task management or time-boxing." },
    { q: "Why should we hire you?", tip: "Connect your skills to their needs.", answer: "Summarize your top 3 strengths that match the role requirements. Add a unique value you bring that others might not. Show confidence without arrogance." }
  ],
  dsa: [
    { q: "What is the time complexity of binary search?", tip: "Think about how the search space shrinks.", answer: "Binary search has O(log n) time complexity because it halves the search space each step. Space complexity is O(1) for iterative, O(log n) for recursive due to call stack." },
    { q: "Explain the difference between a stack and a queue.", tip: "Think about order of operations.", answer: "Stack is LIFO (Last In First Out) — like a pile of plates. Queue is FIFO (First In First Out) — like a line. Stack uses push/pop, Queue uses enqueue/dequeue." },
    { q: "What is dynamic programming?", tip: "Overlapping subproblems + optimal substructure.", answer: "Dynamic programming solves problems by breaking them into overlapping subproblems, solving each once, and storing results (memoization/tabulation). Examples: Fibonacci, knapsack, shortest path." },
    { q: "Explain the difference between BFS and DFS.", tip: "Level-by-level vs depth-first.", answer: "BFS explores nodes level by level using a queue. DFS explores as deep as possible using a stack (or recursion). BFS finds shortest path; DFS is better for maze-solving or cycle detection." },
    { q: "What is Big O notation?", tip: "Measure algorithm efficiency.", answer: "Big O describes worst-case time/space complexity. Common: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) merge sort, O(n²) nested loops, O(2^n) exponential." },
    { q: "How does a hash table work?", tip: "Think about hashing and collision.", answer: "A hash table maps keys to values using a hash function to compute array indices. Collisions (same index) are resolved via chaining (linked list) or open addressing. Average O(1) lookup." },
    { q: "What is a linked list and when would you use it?", tip: "Dynamic size vs array's fixed size.", answer: "A linked list is a sequence of nodes where each node contains data and a pointer to the next node. Use when you need frequent insertions/deletions and don't need random access." },
    { q: "Explain recursion and when to avoid it.", tip: "Stack overflow risk.", answer: "Recursion is when a function calls itself with a smaller subproblem. Avoid when: input is very large (stack overflow risk), an iterative solution is simpler, or performance is critical." }
  ],
  system: [
    { q: "How would you design a URL shortener like bit.ly?", tip: "Think about hashing, DB, redirects.", answer: "Use a hash function to generate a short code, store original-to-short mapping in DB (Redis for caching), handle redirects. Consider collision handling, analytics, and expiration." },
    { q: "Explain the CAP theorem.", tip: "Consistency, Availability, Partition tolerance.", answer: "CAP: a distributed system can only guarantee 2 of 3 — Consistency (all nodes see same data), Availability (requests always get a response), Partition Tolerance (works despite network failures)." },
    { q: "What is a microservices architecture?", tip: "Compare with monolithic.", answer: "Microservices split an app into small, independently deployable services each with one responsibility. Benefits: independent scaling, resilience, tech flexibility. Downside: network complexity." },
    { q: "How would you design a real-time chat application?", tip: "Think WebSockets, message queues.", answer: "Use WebSockets for real-time bidirectional communication, message queue (Kafka/RabbitMQ) for reliability, database sharding for scale, CDN for media, Redis for presence/sessions." },
    { q: "What is database sharding?", tip: "Horizontal partitioning.", answer: "Sharding splits a database horizontally across multiple machines. Each shard holds a subset of data (by user ID, geography, etc.). Improves scalability but adds routing complexity." },
    { q: "What is a CDN and how does it work?", tip: "Closer servers = faster delivery.", answer: "A Content Delivery Network distributes static assets across globally distributed servers (PoPs). Users are routed to the nearest server, reducing latency. Works with caching and edge servers." }
  ]
};

// ======================== STATE ========================
let selectedCategory = 'javascript';
let selectedDifficulty = 'medium';
let timerSeconds = 60;
let currentIndex = 0;
let questions = [];
let answers = [];
let timeLeft = 60;
let timerInterval = null;
let voiceEnabled = true;
let isRecording = false;
let recognition = null;
let synth = window.speechSynthesis;




let faceMissingTime = 0;
let cameraStarted = false;
async function startCamera() {
  const video = document.getElementById("video");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true
    });

    video.srcObject = stream;

    await faceapi.nets.tinyFaceDetector.loadFromUri(
      'https://cdn.jsdelivr.net/npm/face-api.js/weights'
    );

    detectFace();

  } catch (err) {
    alert("Camera access denied!");
  }
}



async function detectFace() {

  const video = document.getElementById("video");
  const status = document.getElementById("camStatus");

  setInterval(async () => {

    const detections = await faceapi.detectAllFaces(
      video,
      new faceapi.TinyFaceDetectorOptions()
    );

    if (detections.length > 0) {

      faceMissingTime = 0;

      status.innerHTML = "🟢 Face Detected";
      status.style.color = "#10b981";

    } else {

      faceMissingTime++;

      status.innerHTML = `🔴 Face Not Detected (${faceMissingTime})`;
      status.style.color = "#ef4444";

      // 5 seconds missing
      if (faceMissingTime >= 2) {

  status.innerHTML = "🚨 Face Missing - Auto Submitting";
  status.style.color = "yellow";

  autoSubmitAnswer();
}
    }

  }, 1000);
}


function autoSubmitAnswer() {

  // Stop timer
  clearInterval(timerInterval);

  // Stop speech recognition
  if (recognition && isRecording) {
    recognition.stop();
  }

  // Get current answer text
  const text = answerTextEl.innerText.trim();

  // Save answer if not saved
  if (!answers.find(a => a.index === currentIndex)) {
    saveAnswer(text);
  }

  // Small warning sound
  speak("Face moved away. Answer submitted automatically.");

  // Go next question automatically
  setTimeout(() => {
    goNext();
  }, 1000);

}




function autoSubmitInterview() {

  // Stop timer
  clearInterval(timerInterval);

  // Stop recording
  if (recognition && isRecording) {
    recognition.stop();
  }

  // Stop AI voice
  synth.cancel();

  // Save current answer
  const text = answerTextEl.innerText.trim();

  if (!answers.find(a => a.index === currentIndex)) {

    saveAnswer(text);

  }

  // Show warning
  alert("Face not detected. Interview submitted automatically.");

  // Submit full interview
  showResult();

}


// ======================== DOM ========================
const categoryCard  = document.getElementById('categoryCard');
const questionCard  = document.getElementById('questionCard');
const resultCard    = document.getElementById('resultCard');
const progressWrapper = document.getElementById('progressWrapper');
const questionBox   = document.getElementById('questionBox');
const timerEl       = document.getElementById('timer');
const timerRing     = document.getElementById('timerRing');
const answerTextEl  = document.getElementById('answerText');
const answerMeta    = document.getElementById('answerMeta');
const progressFill  = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');
const scoreLabel    = document.getElementById('scoreLabel');
const voiceWave     = document.getElementById('voiceWave');
const aiAvatar      = document.getElementById('aiAvatar');
const tipBox        = document.getElementById('tipBox');
const modelAnswerWrap = document.getElementById('modelAnswerWrap');
const modelAnswerBox  = document.getElementById('modelAnswerBox');

// ======================== SPEECH RECOGNITION SETUP ========================
function setupRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const r = new SR();
  r.continuous = false;
  r.lang = 'en-US';
  r.interimResults = false;
  r.onresult = e => {
    const t = e.results[0][0].transcript;
    answerTextEl.innerText = t;
    answerTextEl.classList.remove('active-listen');
    updateAnswerMeta(t);
    saveAnswer(t);
  };
  r.onerror = () => {
    answerTextEl.classList.remove('active-listen');
    isRecording = false;
    document.getElementById('recordBtn').classList.remove('recording');
  };
  r.onend = () => {
    isRecording = false;
    answerTextEl.classList.remove('active-listen');
    document.getElementById('recordBtn').classList.remove('recording');
  };
  return r;
}

// ======================== TEXT TO SPEECH ========================
function speak(text, onEnd) {
  if (!voiceEnabled || !synth) { if (onEnd) onEnd(); return; }
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  utterance.pitch = 1.05;
  utterance.lang = 'en-US';
  utterance.onstart = () => { voiceWave.classList.add('active'); aiAvatar.classList.add('speaking'); };
  utterance.onend = () => { voiceWave.classList.remove('active'); aiAvatar.classList.remove('speaking'); if (onEnd) onEnd(); };
  utterance.onerror = () => { voiceWave.classList.remove('active'); aiAvatar.classList.remove('speaking'); if (onEnd) onEnd(); };
  synth.speak(utterance);
}

// ======================== CATEGORY BUTTONS ========================
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.cat;
  });
});

// ======================== SETTINGS ========================
document.getElementById('difficultySelect').addEventListener('change', e => selectedDifficulty = e.target.value);
document.getElementById('timerSelect').addEventListener('change', e => timerSeconds = parseInt(e.target.value));

// ======================== THEME TOGGLE ========================
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  document.getElementById('themeBtn').textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// ======================== VOICE TOGGLE ========================
document.getElementById('voiceToggleBtn').addEventListener('click', () => {
  voiceEnabled = !voiceEnabled;
  const btn = document.getElementById('voiceToggleBtn');
  btn.textContent = voiceEnabled ? '🔊' : '🔇';
  btn.classList.toggle('active-voice', voiceEnabled);
  if (!voiceEnabled) synth.cancel();
});

// ======================== HELP MODAL ========================
document.getElementById('helpBtn').addEventListener('click', () => { document.getElementById('helpModal').style.display = 'flex'; });
document.getElementById('closeHelp').addEventListener('click', () => { document.getElementById('helpModal').style.display = 'none'; });

// ======================== START INTERVIEW ========================
document.getElementById('startBtn').addEventListener('click', startInterview);

function startInterview() {

startCamera();


  questions = [...questionBank[selectedCategory]];
  // Shuffle
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  questions = questions.slice(0, 8);
  answers = [];
  currentIndex = 0;
  recognition = setupRecognition();
  categoryCard.style.display = 'none';
  progressWrapper.style.display = 'block';
  questionCard.style.display = 'block';
  resultCard.style.display = 'none';
  showQuestion();
}

// ======================== SHOW QUESTION ========================
function showQuestion() {
  const q = questions[currentIndex];
  questionBox.textContent = q.q;
  tipBox.textContent = q.tip ? '💡 Tip: ' + q.tip : '';
  answerTextEl.textContent = '';
  answerMeta.innerHTML = '';
  modelAnswerWrap.style.display = 'none';
  modelAnswerBox.style.display = 'none';
  modelAnswerBox.textContent = '';
  document.getElementById('toggleModelBtn') && (document.getElementById('toggleModelBtn').textContent = '💡 Show Model Answer');

  const total = questions.length;
  progressLabel.textContent = `Question ${currentIndex + 1} of ${total}`;
  progressFill.style.width = ((currentIndex / total) * 100) + '%';
  document.getElementById('qBadge').textContent = `Q${currentIndex + 1}`;

  startTimer();
  speak(`Question ${currentIndex + 1}. ${q.q}`);
}

// ======================== TIMER ========================
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = timerSeconds;
  timerEl.textContent = timeLeft;
  const circumference = 283;
  timerRing.style.strokeDashoffset = 0;
  timerRing.classList.remove('urgent');
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    const offset = circumference * (1 - timeLeft / timerSeconds);
    timerRing.style.strokeDashoffset = offset;
    if (timeLeft <= 10) timerRing.classList.add('urgent');
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!answers.find(a => a.index === currentIndex)) saveAnswer('');
      goNext();
    }
  }, 1000);
}

// ======================== RECORD BUTTONS ========================
document.getElementById('recordBtn').addEventListener('click', () => {
  if (!recognition) { alert('Speech recognition not supported in this browser. Try Chrome.'); return; }
  if (isRecording) return;
  isRecording = true;
  answerTextEl.textContent = 'Listening...';
  answerTextEl.classList.add('active-listen');
  document.getElementById('recordBtn').classList.add('recording');
  recognition.start();
});

document.getElementById('stopBtn').addEventListener('click', () => {
  if (recognition && isRecording) recognition.stop();
  isRecording = false;
  answerTextEl.classList.remove('active-listen');
  document.getElementById('recordBtn').classList.remove('recording');
});

// ======================== NEXT BUTTON ========================
document.getElementById('nextBtn').addEventListener('click', goNext);

function goNext() {
  clearInterval(timerInterval);
  synth.cancel();
  if (!answers.find(a => a.index === currentIndex)) saveAnswer('');
  // Show model answer option
  modelAnswerWrap.style.display = 'block';
  modelAnswerBox.textContent = questions[currentIndex].answer;
  currentIndex++;
  if (currentIndex < questions.length) {
    setTimeout(showQuestion, 400);
  } else {
    progressFill.style.width = '100%';
    setTimeout(showResult, 600);
  }
}

// ======================== SAVE ANSWER ========================
function saveAnswer(text) {
  if (answers.find(a => a.index === currentIndex)) return;
  answers.push({ index: currentIndex, question: questions[currentIndex].q, answer: text, model: questions[currentIndex].answer });
}

function updateAnswerMeta(text) {
  const conf = getConfidence(text);
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  answerMeta.innerHTML = `<span>Words: ${words}</span> <span class="conf-badge conf-${conf.toLowerCase()}">Confidence: ${conf}</span>`;
}

// ======================== CONFIDENCE ========================
function getConfidence(answer) {
  if (answer.length > 120) return 'High';
  if (answer.length > 50) return 'Medium';
  return 'Low';
}

// ======================== SCORE ========================
function calculateScore() {
  let total = 0;
  const keywords = ['javascript','promise','closure','async','event loop','function','array','object','class','method','python','html','css','grid','flex','pointer','hash','queue','stack','recursion','cache','database','server','api','http'];
  answers.forEach(item => {
    const a = item.answer.toLowerCase();
    if (item.answer.length > 120) total += 8;
    else if (item.answer.length > 50) total += 5;
    else if (item.answer.length > 0) total += 2;
    keywords.forEach(k => { if (a.includes(k)) total += 2; });
  });
  return Math.min(100, Math.round(total));
}

// ======================== SHOW RESULT ========================
function showResult() {
  questionCard.style.display = 'none';
  progressWrapper.style.display = 'none';
  resultCard.style.display = 'block';
  const score = calculateScore();
  document.getElementById('finalScore').textContent = score;
  const circumference = 339;
  const fill = document.getElementById('scoreFillRing');
  setTimeout(() => { fill.style.strokeDashoffset = circumference * (1 - score / 100); }, 200);
  const badge = document.getElementById('performanceBadge');
  if (score >= 80) { badge.textContent = '🌟 Excellent Performance!'; badge.style.background = 'rgba(16,185,129,0.2)'; badge.style.color = '#10b981'; }
  else if (score >= 55) { badge.textContent = '👍 Good Job! Keep Practicing'; badge.style.background = 'rgba(245,158,11,0.2)'; badge.style.color = '#f59e0b'; }
  else { badge.textContent = '📚 Keep Studying, You\'ll Get There!'; badge.style.background = 'rgba(239,68,68,0.2)'; badge.style.color = '#ef4444'; }
  scoreLabel.textContent = `Score: ${score}`;
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  answers.forEach((item, i) => {
    const conf = getConfidence(item.answer);
    list.innerHTML += `
      <div class="review-item">
        <div class="review-q">Q${i + 1}: ${item.question}</div>
        <div class="review-a"><b>Your Answer:</b> ${item.answer || '<em>No answer given</em>'}</div>
        <div class="review-a"><b>Model Answer:</b> ${item.model}</div>
        <div class="review-conf"><span class="conf-badge conf-${conf.toLowerCase()}">Confidence: ${conf}</span></div>
      </div>`;
  });
  speak(`Interview completed! Your score is ${score} out of 100. ${score >= 80 ? 'Excellent performance!' : score >= 55 ? 'Good job, keep practicing!' : 'Keep studying, you will get there!'}`);
}

// ======================== MODEL ANSWER TOGGLE ========================
document.getElementById('toggleModelBtn').addEventListener('click', () => {
  const box = document.getElementById('modelAnswerBox');
  const btn = document.getElementById('toggleModelBtn');
  if (box.style.display === 'none') {
    box.style.display = 'block';
    btn.textContent = '🙈 Hide Model Answer';
    if (currentIndex > 0) box.textContent = questions[currentIndex - 1].answer;
  } else {
    box.style.display = 'none';
    btn.textContent = '💡 Show Model Answer';
  }
});

// ======================== RESTART ========================
document.getElementById('restartBtn').addEventListener('click', () => {
  resultCard.style.display = 'none';
  categoryCard.style.display = 'block';
  synth.cancel();
});

// ======================== DOWNLOAD REPORT ========================
document.getElementById('downloadBtn').addEventListener('click', () => {
  const score = calculateScore();
  let txt = `AI INTERVIEW PRO - PERFORMANCE REPORT\n`;
  txt += `Category: ${selectedCategory.toUpperCase()} | Score: ${score}/100\n`;
  txt += `Date: ${new Date().toLocaleString()}\n`;
  txt += `${'='.repeat(50)}\n\n`;
  answers.forEach((item, i) => {
    txt += `Q${i + 1}: ${item.question}\n`;
    txt += `Your Answer: ${item.answer || 'No answer'}\n`;
    txt += `Model Answer: ${item.model}\n`;
    txt += `Confidence: ${getConfidence(item.answer)}\n\n`;
  });
  const blob = new Blob([txt], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'interview_report.txt';
  a.click();
});