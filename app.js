'use strict';
const STATES = {
  work: ['💻', 'Working', 'Focusing — please come back later.'],
  break: ['🎧', 'Taking a break', 'Back in a little while.'],
  eat: ['🍽️', 'Out for a meal', 'Away from my desk for a meal.'],
  meeting: ['💬', 'In a meeting', 'Available afterwards.'],
  movie: ['🎬', 'Watching a movie', 'Enjoying a little screen time.'],
  sleep: ['💤', 'Sleeping', 'Quiet time, please.']
};
const $ = id => document.getElementById(id);
const STORAGE_KEY = 'desk-cat-session-v1';
let session = null;
let notes = [];
function announce(text) { $('announcement').textContent = text; }
function storageWarning() { $('storageWarning').hidden = false; }
function save() {
  try {
    if (session) localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    else localStorage.removeItem(STORAGE_KEY);
  } catch { storageWarning(); }
}
function elapsed() {
  return session ? session.accumulated + (session.paused ? 0 : Math.max(0, Date.now() - session.startedAt)) : 0;
}
function tick() {
  const seconds = Math.floor(elapsed() / 1000);
  $('timer').textContent = [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map(n => String(n).padStart(2, '0')).join(':');
}
function showSession() {
  $('selection').hidden = true; $('session').hidden = false;
  $('currentStatus').textContent = session.title;
  $('statusDescription').textContent = STATES[session.key]?.[2] || 'Away from my desk. Please leave a note.';
  $('catActivity').textContent = STATES[session.key]?.[0] || '🐾';
  $('openEyes').style.display = session.key === 'sleep' ? 'none' : '';
  $('sleepEyes').style.display = session.key === 'sleep' ? '' : 'none';
  $('sleepEyes').removeAttribute('hidden');
  $('pauseTimer').textContent = session.paused ? 'Resume timer' : 'Pause timer';
  $('pausedLabel').hidden = !session.paused;
  document.querySelectorAll('[data-status]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.status === session.key)));
  tick();
}
function choose(key, title = STATES[key]?.[1]) {
  if (!title) return;
  if (session && session.key === key && session.title === title) {
    showSession(); announce('Already showing this status. Your timer has been kept.'); return;
  }
  session = {key, title, accumulated: 0, startedAt: Date.now(), paused: false};
  save(); showSession(); $('currentStatus').focus(); announce(`${title} — timer started.`);
}
for (const [key, [emoji, title, description]] of Object.entries(STATES)) {
  const button = document.createElement('button'); button.className = 'choice'; button.dataset.status = key;
  const icon = document.createElement('span'); icon.textContent = emoji; icon.setAttribute('aria-hidden', 'true');
  const heading = document.createElement('strong'); heading.textContent = title;
  const hint = document.createElement('small'); hint.textContent = description;
  button.append(icon, heading, hint); button.addEventListener('click', () => choose(key)); $('statusChoices').append(button);
  const quick = document.createElement('button'); quick.textContent = `${emoji} ${title}`; quick.dataset.status = key;
  quick.addEventListener('click', () => choose(key)); $('quickChoices').append(quick);
}
$('customForm').addEventListener('submit', event => {
  event.preventDefault(); const title = $('customStatus').value.trim();
  if (!title) {
    $('customError').textContent = 'Please enter a status first.';
    $('customStatus').setAttribute('aria-invalid', 'true'); $('customStatus').focus(); return;
  }
  $('customError').textContent = ''; $('customStatus').removeAttribute('aria-invalid'); choose('custom', title.slice(0, 80));
});
$('switchStatus').onclick = () => {
  $('selection').hidden = false; $('session').hidden = true; $('returnSession').hidden = false;
  $('statusChoices').querySelector('button').focus(); announce('Choose another status, or go back. Your current timer continues unless paused.');
};
$('returnSession').onclick = () => { showSession(); $('currentStatus').focus(); };
$('pauseTimer').onclick = () => {
  session.accumulated = elapsed(); session.startedAt = Date.now(); session.paused = !session.paused;
  save(); showSession(); announce(session.paused ? 'Timer paused.' : 'Timer resumed.');
};
$('resetTimer').onclick = () => {
  session.accumulated = 0; session.startedAt = Date.now(); save(); tick();
  announce(`Timer reset. ${session.paused ? 'Still paused.' : 'Timing again.'} Visitor notes kept.`);
};
$('endSession').onclick = () => {
  if (notes.length && !window.confirm('End this session and clear the visitor notes?')) return;
  session = null; notes = []; renderNotes(); save(); $('noteForm').reset(); $('noteFeedback').textContent = '';
  $('selection').hidden = false; $('session').hidden = true; $('returnSession').hidden = true;
  $('statusChoices').querySelector('button').focus(); announce('Welcome back. Session ended.');
};
function renderNotes() {
  $('noteList').replaceChildren();
  for (const note of notes) {
    const card = document.createElement('article'); card.className = 'note';
    const meta = document.createElement('small'); meta.textContent = `${note.name} · ${new Date(note.time).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`;
    const body = document.createElement('p'); body.textContent = note.text; card.append(meta, body); $('noteList').append(card);
  }
}
$('noteForm').addEventListener('submit', event => {
  event.preventDefault(); const text = $('visitorNote').value.trim();
  if (!text) { $('noteFeedback').textContent = 'Please write a message first.'; $('visitorNote').focus(); return; }
  if (notes.length >= 100) { $('noteFeedback').textContent = 'This board is full. Please speak to the desk owner instead.'; return; }
  notes.unshift({name: $('visitorName').value.trim() || 'A colleague', text, time: Date.now()});
  renderNotes(); $('noteForm').reset(); $('noteFeedback').textContent = 'Message left on this screen. Thank you!';
});
try {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const data = JSON.parse(stored);
    if (!data || !(Object.hasOwn(STATES, data.key) || data.key === 'custom') || typeof data.title !== 'string' || !data.title.trim() || data.title.length > 80 || !Number.isFinite(data.accumulated) || data.accumulated < 0 || !Number.isFinite(data.startedAt) || data.startedAt < 0 || typeof data.paused !== 'boolean') throw new Error('Invalid session');
    session = data; showSession(); announce('Your status and timer have been restored. Visitor notes clear on refresh.');
  }
} catch { storageWarning(); }
setInterval(tick, 250);
document.addEventListener('visibilitychange', tick);
