const playlistId = "PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv";
const sourceUrl = "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/";
const storageKey = "security-plus-study-progress-v1";

const videos = [
  { title: "How to Pass Your SY0-701 Security+ Exam", duration: "10:06", section: "0.1 - Introduction" },
  { title: "Security Controls", duration: "11:48", section: "1.1 - Security Controls" },
  { title: "The CIA Triad", duration: "5:17", section: "1.2 - Security Concepts" },
  { title: "Non-repudiation", duration: "7:57", section: "1.2 - Security Concepts" },
  { title: "Authentication, Authorization, and Accounting", duration: "9:03", section: "1.2 - Security Concepts" },
  { title: "Gap Analysis", duration: "6:44", section: "1.2 - Security Concepts" },
  { title: "Zero Trust", duration: "10:04", section: "1.2 - Security Concepts" },
  { title: "Physical Security", duration: "8:17", section: "1.2 - Security Concepts" },
  { title: "Deception and Disruption", duration: "4:30", section: "1.2 - Security Concepts" },
  { title: "Change Management", duration: "11:22", section: "1.3 - Change Management" },
  { title: "Technical Change Management", duration: "10:54", section: "1.3 - Change Management" },
  { title: "Public Key Infrastructure", duration: "9:08", section: "1.4 - Cryptographic Solutions" },
  { title: "Encrypting Data", duration: "9:48", section: "1.4 - Cryptographic Solutions" },
  { title: "Key Exchange", duration: "3:39", section: "1.4 - Cryptographic Solutions" },
  { title: "Encryption Technologies", duration: "6:53", section: "1.4 - Cryptographic Solutions" },
  { title: "Obfuscation", duration: "8:00", section: "1.4 - Cryptographic Solutions" },
  { title: "Hashing and Digital Signatures", duration: "10:24", section: "1.4 - Cryptographic Solutions" },
  { title: "Blockchain Technology", duration: "2:22", section: "1.4 - Cryptographic Solutions" },
  { title: "Certificates", duration: "14:38", section: "1.4 - Cryptographic Solutions" },
  { title: "Threat Actors", duration: "10:23", section: "2.1 - Threat Actors" },
  { title: "Common Threat Vectors", duration: "17:14", section: "2.2 - Threat Vectors and Attack Surfaces" },
  { title: "Phishing", duration: "6:32", section: "2.2 - Threat Vectors and Attack Surfaces" },
  { title: "Impersonation", duration: "5:52", section: "2.2 - Threat Vectors and Attack Surfaces" },
  { title: "Watering Hole Attacks", duration: "4:12", section: "2.2 - Threat Vectors and Attack Surfaces" },
  { title: "Other Social Engineering Attacks", duration: "3:29", section: "2.2 - Threat Vectors and Attack Surfaces" },
  { title: "Memory Injections", duration: "2:39", section: "2.3 - Types of Vulnerabilities" },
  { title: "Buffer Overflows", duration: "3:37", section: "2.3 - Types of Vulnerabilities" },
  { title: "Race Conditions", duration: "4:58", section: "2.3 - Types of Vulnerabilities" },
  { title: "Malicious Updates", duration: "5:45", section: "2.3 - Types of Vulnerabilities" },
  { title: "Operating System Vulnerabilities", duration: "4:09", section: "2.3 - Types of Vulnerabilities" },
  { title: "SQL Injection", duration: "5:09", section: "2.3 - Types of Vulnerabilities" },
  { title: "Cross-site Scripting", duration: "8:34", section: "2.3 - Types of Vulnerabilities" },
  { title: "Hardware Vulnerabilities", duration: "6:27", section: "2.3 - Types of Vulnerabilities" },
  { title: "Virtualization Vulnerabilities", duration: "5:29", section: "2.3 - Types of Vulnerabilities" },
  { title: "Cloud-specific Vulnerabilities", duration: "4:06", section: "2.3 - Types of Vulnerabilities" },
  { title: "Supply Chain Vulnerabilities", duration: "9:12", section: "2.3 - Types of Vulnerabilities" },
  { title: "Misconfiguration Vulnerabilities", duration: "7:09", section: "2.3 - Types of Vulnerabilities" },
  { title: "Mobile Device Vulnerabilities", duration: "3:23", section: "2.3 - Types of Vulnerabilities" },
  { title: "Zero-day Vulnerabilities", duration: "3:02", section: "2.3 - Types of Vulnerabilities" },
  { title: "An Overview of Malware", duration: "6:06", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Viruses and Worms", duration: "5:54", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Spyware and Bloatware", duration: "4:21", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Other Malware Types", duration: "7:32", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Physical Attacks", duration: "4:04", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Denial of Service", duration: "6:07", section: "2.4 - Indicators of Malicious Activity" },
  { title: "DNS Attacks", duration: "8:57", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Wireless Attacks", duration: "7:55", section: "2.4 - Indicators of Malicious Activity" },
  { title: "On-path Attacks", duration: "5:30", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Replay Attacks", duration: "5:45", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Malicious Code", duration: "3:40", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Application Attacks", duration: "11:48", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Cryptographic Attacks", duration: "9:31", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Password Attacks", duration: "7:15", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Indicators of Compromise", duration: "10:59", section: "2.4 - Indicators of Malicious Activity" },
  { title: "Segmentation and Access Control", duration: "6:06", section: "2.5 - Mitigation Techniques" },
  { title: "Mitigation Techniques", duration: "6:51", section: "2.5 - Mitigation Techniques" },
  { title: "Hardening Techniques", duration: "12:11", section: "2.5 - Mitigation Techniques" },
  { title: "Cloud Infrastructures", duration: "9:56", section: "3.1 - Architecture Models" },
  { title: "Network Infrastructure Concepts", duration: "6:56", section: "3.1 - Architecture Models" },
  { title: "Other Infrastructure Concepts", duration: "14:24", section: "3.1 - Architecture Models" },
  { title: "Infrastructure Considerations", duration: "13:48", section: "3.1 - Architecture Models" },
  { title: "Secure Infrastructures", duration: "5:54", section: "3.2 - Applying Security Principles" },
  { title: "Intrusion Prevention", duration: "5:14", section: "3.2 - Applying Security Principles" },
  { title: "Network Appliances", duration: "11:56", section: "3.2 - Applying Security Principles" },
  { title: "Port Security", duration: "3:50", section: "3.2 - Applying Security Principles" },
  { title: "Firewall Types", duration: "8:00", section: "3.2 - Applying Security Principles" },
  { title: "Secure Communication", duration: "9:55", section: "3.2 - Applying Security Principles" },
  { title: "Data Types and Classifications", duration: "5:54", section: "3.3 - Protecting Data" },
  { title: "States of Data", duration: "6:07", section: "3.3 - Protecting Data" },
  { title: "Protecting Data", duration: "14:28", section: "3.3 - Protecting Data" },
  { title: "Resiliency", duration: "9:42", section: "3.4 - Resiliency and Recovery" },
  { title: "Capacity Planning", duration: "3:53", section: "3.4 - Resiliency and Recovery" },
  { title: "Recovery Testing", duration: "5:18", section: "3.4 - Resiliency and Recovery" },
  { title: "Backups", duration: "12:16", section: "3.4 - Resiliency and Recovery" },
  { title: "Power Resiliency", duration: "4:02", section: "3.4 - Resiliency and Recovery" },
  { title: "Secure Baselines", duration: "4:11", section: "4.1 - Security Techniques" },
  { title: "Hardening Targets", duration: "10:11", section: "4.1 - Security Techniques" },
  { title: "Securing Wireless and Mobile", duration: "8:58", section: "4.1 - Security Techniques" },
  { title: "Wireless Security Settings", duration: "10:54", section: "4.1 - Security Techniques" },
  { title: "Application Security", duration: "8:26", section: "4.1 - Security Techniques" },
  { title: "Asset Management", duration: "8:37", section: "4.2 - Asset Management" },
  { title: "Vulnerability Scanning", duration: "7:45", section: "4.3 - Vulnerability Management" },
  { title: "Threat Intelligence", duration: "4:46", section: "4.3 - Vulnerability Management" },
  { title: "Penetration Testing", duration: "6:21", section: "4.3 - Vulnerability Management" },
  { title: "Analyzing Vulnerabilities", duration: "10:29", section: "4.3 - Vulnerability Management" },
  { title: "Vulnerability Remediation", duration: "8:45", section: "4.3 - Vulnerability Management" },
  { title: "Security Monitoring", duration: "10:27", section: "4.4 - Security Monitoring" },
  { title: "Security Tools", duration: "14:06", section: "4.4 - Security Monitoring" },
  { title: "Firewalls", duration: "11:31", section: "4.5 - Enterprise Security" },
  { title: "Web Filtering", duration: "10:00", section: "4.5 - Enterprise Security" },
  { title: "Operating System Security", duration: "3:22", section: "4.5 - Enterprise Security" },
  { title: "Secure Protocols", duration: "4:47", section: "4.5 - Enterprise Security" },
  { title: "Email Security", duration: "7:05", section: "4.5 - Enterprise Security" },
  { title: "Monitoring Data", duration: "7:25", section: "4.5 - Enterprise Security" },
  { title: "Endpoint Security", duration: "9:25", section: "4.5 - Enterprise Security" },
  { title: "Identity and Access Management", duration: "12:46", section: "4.6 - Identity and Access Management" },
  { title: "Access Controls", duration: "7:49", section: "4.6 - Identity and Access Management" },
  { title: "Multifactor Authentication", duration: "4:29", section: "4.6 - Identity and Access Management" },
  { title: "Password Security", duration: "6:22", section: "4.6 - Identity and Access Management" },
  { title: "Scripting and Automation", duration: "8:20", section: "4.7 - Automation and Orchestration" },
  { title: "Incident Response", duration: "9:14", section: "4.8 - Incident Response" },
  { title: "Incident Planning", duration: "6:50", section: "4.8 - Incident Response" },
  { title: "Digital Forensics", duration: "9:54", section: "4.8 - Incident Response" },
  { title: "Log Data", duration: "13:41", section: "4.9 - Security Data Sources" },
  { title: "Security Policies", duration: "11:02", section: "5.1 - Security Governance" },
  { title: "Security Standards", duration: "5:36", section: "5.1 - Security Governance" },
  { title: "Security Procedures", duration: "7:02", section: "5.1 - Security Governance" },
  { title: "Security Considerations", duration: "4:51", section: "5.1 - Security Governance" },
  { title: "Data Roles and Responsibilities", duration: "2:27", section: "5.1 - Security Governance" },
  { title: "Risk Management", duration: "3:30", section: "5.2 - Risk Management" },
  { title: "Risk Analysis", duration: "9:13", section: "5.2 - Risk Management" },
  { title: "Risk Management Strategies", duration: "3:12", section: "5.2 - Risk Management" },
  { title: "Business Impact Analysis", duration: "2:55", section: "5.2 - Risk Management" },
  { title: "Third-party Risk Assessment", duration: "11:36", section: "5.3 - Third-party Risk" },
  { title: "Agreement Types", duration: "5:19", section: "5.3 - Third-party Risk" },
  { title: "Compliance", duration: "8:06", section: "5.4 - Security Compliance" },
  { title: "Privacy", duration: "5:21", section: "5.4 - Security Compliance" },
  { title: "Audits and Assessments", duration: "2:49", section: "5.5 - Audits and Assessments" },
  { title: "Penetration Tests", duration: "5:29", section: "5.5 - Audits and Assessments" },
  { title: "Security Awareness", duration: "6:45", section: "5.6 - Security Awareness" },
  { title: "User Training", duration: "4:31", section: "5.6 - Security Awareness" }
].map((video, index) => ({
  ...video,
  id: `video-${String(index + 1).padStart(3, "0")}`,
  index: index + 1,
  url: `https://www.youtube.com/playlist?list=${playlistId}&index=${index + 1}`
}));

let state = loadState();
let activeFilter = "all";

const list = document.querySelector("#videoList");
const template = document.querySelector("#videoTemplate");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");
const progressPercent = document.querySelector("#progressPercent");
const progressTitle = document.querySelector("#progressTitle");
const progressDetail = document.querySelector("#progressDetail");
const progressBar = document.querySelector("#progressBar");
const exportBtn = document.querySelector("#exportBtn");
const importInput = document.querySelector("#importInput");
const resetBtn = document.querySelector("#resetBtn");
const progressRing = document.querySelector(".progress-ring");

render();

searchInput.addEventListener("input", render);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

exportBtn.addEventListener("click", () => {
  const payload = {
    exportedAt: new Date().toISOString(),
    sourceUrl,
    videos: videos.map((video) => ({
      index: video.index,
      title: video.title,
      section: video.section,
      duration: video.duration,
      complete: Boolean(state[video.id]?.complete),
      notes: state[video.id]?.notes || ""
    }))
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "security-plus-study-progress.json";
  link.click();
  URL.revokeObjectURL(link.href);
});

importInput.addEventListener("change", async () => {
  const file = importInput.files[0];
  if (!file) return;

  try {
    const incoming = JSON.parse(await file.text());
    const importedVideos = Array.isArray(incoming.videos) ? incoming.videos : [];

    importedVideos.forEach((item) => {
      const match = videos.find((video) => video.index === item.index || video.title === item.title);
      if (!match) return;
      state[match.id] = {
        complete: Boolean(item.complete),
        notes: typeof item.notes === "string" ? item.notes : ""
      };
    });

    saveState();
    render();
  } catch {
    alert("That file was not a valid Security+ progress export.");
  } finally {
    importInput.value = "";
  }
});

resetBtn.addEventListener("click", () => {
  const ok = confirm("Reset all completed items and notes?");
  if (!ok) return;
  state = {};
  saveState();
  render();
});

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = videos.filter((video) => {
    const entry = state[video.id] || {};
    const haystack = `${video.title} ${video.section} ${video.duration}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "todo" && !entry.complete) ||
      (activeFilter === "done" && entry.complete) ||
      (activeFilter === "notes" && (entry.notes || "").trim());

    return matchesQuery && matchesFilter;
  });

  list.replaceChildren();

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No videos match this view.";
    list.append(empty);
  } else {
    filtered.forEach((video) => list.append(createVideoCard(video)));
  }

  updateProgress();
}

function createVideoCard(video) {
  const entry = state[video.id] || {};
  const node = template.content.firstElementChild.cloneNode(true);
  const checkbox = node.querySelector(".complete-checkbox");
  const meta = node.querySelector(".video-meta");
  const title = node.querySelector(".video-title");
  const watch = node.querySelector(".watch-link");
  const notes = node.querySelector(".notes-input");

  node.classList.toggle("done", Boolean(entry.complete));
  checkbox.checked = Boolean(entry.complete);
  meta.textContent = `${video.index}. ${video.section} | ${video.duration}`;
  title.textContent = video.title;
  watch.href = video.url;
  notes.value = entry.notes || "";

  checkbox.addEventListener("change", () => {
    updateEntry(video.id, { complete: checkbox.checked });
    node.classList.toggle("done", checkbox.checked);
    updateProgress();
    if (activeFilter !== "all") render();
  });

  notes.addEventListener("input", () => {
    updateEntry(video.id, { notes: notes.value });
    if (activeFilter === "notes" && !notes.value.trim()) render();
  });

  return node;
}

function updateEntry(id, changes) {
  state[id] = { complete: false, notes: "", ...(state[id] || {}), ...changes };
  if (!state[id].complete && !state[id].notes.trim()) delete state[id];
  saveState();
}

function updateProgress() {
  const done = videos.filter((video) => state[video.id]?.complete).length;
  const noted = videos.filter((video) => (state[video.id]?.notes || "").trim()).length;
  const percent = Math.round((done / videos.length) * 100);

  progressPercent.textContent = `${percent}%`;
  progressTitle.textContent = `${done} of ${videos.length} complete`;
  progressDetail.textContent = `${videos.length - done} remaining. ${noted} ${noted === 1 ? "video has" : "videos have"} notes.`;
  progressBar.style.width = `${percent}%`;
  progressRing.style.setProperty("--value", `${percent * 3.6}deg`);
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}
