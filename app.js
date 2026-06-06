const playlistId = "PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv";
const sourceUrl = "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/";
const storageKey = "security-plus-study-progress-v1";
const settingsKey = "security-plus-study-settings-v1";
const rewardsKey = "security-plus-study-rewards-v1";
const xpPerVideo = 10;
const xpPerLevel = 100;

const youtubeIds = [
  "KiEptGbnEBc", "STM3EUvL7wg", "SBcDGb9l6yo", "XxnCxPEllMg", "AhaZtj5P2a8",
  "cuTVyyS5C7M", "zC_Pndpg8-c", "YtT8q2mUM9c", "X_qfMVty4ts", "48wRbMdHFVI",
  "H9TYNjcpl-0", "xHAMEF7-inQ", "jpsc4c7lntw", "U6BWn81P5Ec", "u61J0xR_XPU",
  "LfuTMzZke4g", "EcGmQjl6XEo", "-wqU_2ToP1M", "cLa94BZH_9s", "6xUH0t6ugIM",
  "4lAbGpTDZ18", "9SD6DRCKZFU", "X3yoNAVuKwA", "z413PV6l_Ys", "akoDmeV3LQo",
  "kBcTczu8FsM", "0-qeeI5jTqU", "MKptc1lPSw8", "KbtUrdBy9Yo", "narir8qpGq8",
  "qFUOLkEk8AQ", "PKgw0CLZIhE", "TaTaEvqjjDM", "t2JrPrzRDLA", "V2DCYO-sWRQ",
  "WqvCJLpwExY", "NBKzlUqzVmE", "DRfAwwdzYpU", "FDFxGLnZtoY", "-eZs8wjjGGE",
  "Su8ANmAoerU", "-VmI3xFJw78", "nu27ovJ5rqw", "oIpOuTX2HRs", "Z7OntvK--PQ",
  "BoxeL5ybOXI", "tSLqrKhUvts", "M_Af6_8JTuo", "ai6qS13gKRo", "xDhUBQ_lnUA",
  "yRSqIGjeb7s", "7aJaEQy6Yoc", "-ZfbifHwEVE", "x72hG9GvkaQ", "yDeDGCh_PDs",
  "Fc8ZJfmapbI", "wXoC46Qr_9Q", "8qpQ8Q6xxiU", "jd001Hj7XWM", "HDiNPPrGhzE",
  "Ap3Z_0ZdqpQ", "l64La1xYXL4", "7QuYupuic3Q", "WlOslEy3ztg", "QhLQ6J4satw",
  "mq1HRM-zGtQ", "uU3e_ntg-3g", "R0W0_gZCVzk", "71RQaYQ4QSw", "leX_Qa7wqB4",
  "sb0dRaQbuBA", "WGlT6-gNwqY", "IhT7Odu4xHc", "8mGSwRScqIM", "-EY45MimSBM",
  "BWPJD9Eb9iE", "YQKbs0ug0XQ", "iAR6SgvtezY", "KaqKoKNEKnE", "fFvXy3WkLpA",
  "BJ2UMB4a04g", "9B0mtWk_AM0", "86fruE9jkKk", "-LevHAzXgFs", "eyVy1gKCuAU",
  "P9xakfmX70c", "np2WI_rM-Ok", "nNiNTviiacU", "VgNyh4HEqSU", "I_c0D49uCwQ",
  "4dpTyRM6BU8", "9NAKCyOtFH0", "v6ht9efsnRI", "ZDJ-BLPLWq4", "83pCkSSj1IQ",
  "ZoOyyqhptik", "9ANHcZwJfdQ", "MpIzA4fNWew", "eMOe-PLBy1k", "R9ojg881dLs",
  "X2UiMLxRdhE", "CYFe16lCRMk", "UtDWApdO8Zk", "EDru1LTYDJw", "5kY9kvzeWjA",
  "jBvdRpXaomk", "vJINnOZyQNg", "4tGFraaP48Q", "gxNi-04yP8Q", "cLhUMoQS1a8",
  "Ykx7t54y-oo", "pmyuWY7Pbag", "myI-v3mj7Kc", "13KNjPexnEI", "HSZxjj1YAh8",
  "IjJf4jLtONQ", "WGXrbAh0LUI", "uo2Yw720mv4", "wEMzVfwBiWY", "W_Npxwk4fbI",
  "WQRZMMLUkGE"
];

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
  youtubeId: youtubeIds[index],
  url: `https://www.youtube.com/watch?v=${youtubeIds[index]}&list=${playlistId}`
}));

let state = loadState();
let settings = loadSettings();
let rewards = loadRewards();
let activeFilter = "todo";

const list = document.querySelector("#videoList");
const template = document.querySelector("#videoTemplate");
const settingsTemplate = document.querySelector("#settingsTemplate");
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
const streakValue = document.querySelector("#streakValue");
const levelValue = document.querySelector("#levelValue");
const xpValue = document.querySelector("#xpValue");
const xpBar = document.querySelector("#xpBar");
const badgeList = document.querySelector("#badgeList");
const toastLayer = document.querySelector("#toastLayer");
let audioContext;
document.documentElement.classList.toggle("effects-off", !settings.animationsEnabled);

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
    settings: {
      dailyGoal: settings.dailyGoal,
      soundEnabled: settings.soundEnabled,
      animationsEnabled: settings.animationsEnabled
    },
    rewards: {
      completedDates: rewards.completedDates,
      seenBadgeIds: rewards.seenBadgeIds
    },
    videos: videos.map((video) => ({
      index: video.index,
      title: video.title,
      section: video.section,
      duration: video.duration,
      complete: Boolean(state[video.id]?.complete),
      completedAt: state[video.id]?.completedAt || ""
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
        completedAt: typeof item.completedAt === "string" ? item.completedAt : ""
      };
      if (!state[match.id].complete) delete state[match.id];
    });

    if (incoming.settings) {
      if (Number.isFinite(Number(incoming.settings.dailyGoal))) {
        settings.dailyGoal = clampGoal(incoming.settings.dailyGoal);
      }
      if (typeof incoming.settings.soundEnabled === "boolean") {
        settings.soundEnabled = incoming.settings.soundEnabled;
      }
      if (typeof incoming.settings.animationsEnabled === "boolean") {
        settings.animationsEnabled = incoming.settings.animationsEnabled;
      }
      refreshTodayGoal();
      saveSettings();
    }

    if (incoming.rewards) {
      rewards.completedDates = Array.isArray(incoming.rewards.completedDates) ? incoming.rewards.completedDates : rewards.completedDates;
      rewards.seenBadgeIds = Array.isArray(incoming.rewards.seenBadgeIds) ? incoming.rewards.seenBadgeIds : rewards.seenBadgeIds;
      saveRewards();
    }

    saveState();
    render();
  } catch {
    alert("That file was not a valid Security+ progress export.");
  } finally {
    importInput.value = "";
  }
});

resetBtn.addEventListener("click", () => {
  const ok = confirm("Reset all completed items?");
  if (!ok) return;
  state = {};
  saveState();
  render();
});

function render() {
  ensureTodayGoal();

  if (activeFilter === "settings") {
    renderSettings();
    updateProgress();
    renderBadges(false);
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  const filtered = videos.filter((video) => {
    const entry = state[video.id] || {};
    const haystack = `${video.title} ${video.section} ${video.duration}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "todo" && !entry.complete) ||
      (activeFilter === "done" && entry.complete);

    return matchesQuery && matchesFilter;
  }).sort((a, b) => {
    if (activeFilter !== "done") return 0;
    return getCompletedTime(b) - getCompletedTime(a);
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
  renderBadges(false);
}

function createVideoCard(video) {
  const entry = state[video.id] || {};
  const isTodayGoal = settings.todayGoalIds.includes(video.id);
  const node = template.content.firstElementChild.cloneNode(true);
  const checkbox = node.querySelector(".complete-checkbox");
  const meta = node.querySelector(".video-meta");
  const title = node.querySelector(".video-title");
  const goalBadge = node.querySelector(".goal-badge");
  const embedToggle = node.querySelector(".embed-toggle");
  const embedPanel = node.querySelector(".embed-panel");

  node.classList.toggle("done", Boolean(entry.complete));
  node.classList.toggle("today-goal", isTodayGoal);
  checkbox.checked = Boolean(entry.complete);
  meta.textContent = `${video.index}. ${video.section} | ${video.duration}`;
  title.textContent = video.title;
  goalBadge.hidden = !isTodayGoal;

  embedToggle.addEventListener("click", () => {
    const isOpen = !embedPanel.hidden;
    embedPanel.hidden = isOpen;
    embedToggle.setAttribute("aria-expanded", String(!isOpen));
    embedToggle.textContent = isOpen ? "Play here" : "Hide";

    if (!isOpen && !embedPanel.firstElementChild) {
      const iframe = document.createElement("iframe");
      iframe.title = `${video.title} - Professor Messer Security+`;
      iframe.src = `https://www.youtube.com/embed/${video.youtubeId}?list=${playlistId}&rel=0`;
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      embedPanel.append(iframe);
    }
  });

  checkbox.addEventListener("change", () => {
    const wasDailyGoalComplete = isDailyGoalComplete();
    updateEntry(video.id, { complete: checkbox.checked });
    node.classList.toggle("done", checkbox.checked);
    if (checkbox.checked) {
      recordCompletionDate();
      playSound("complete");
      celebrateCard(node);
      showBurst(node, false);
    } else {
      playSound("undo");
    }
    updateProgress();
    const nowDailyGoalComplete = isDailyGoalComplete();
    if (checkbox.checked && !wasDailyGoalComplete && nowDailyGoalComplete) {
      playSound("goal");
      showBurst(node, true);
      showToast("Daily goal complete", "That is today's target handled.");
    }
    renderBadges(true);
    if (activeFilter !== "all") {
      window.setTimeout(render, checkbox.checked && shouldAnimate() ? 520 : 0);
    }
  });

  return node;
}

function updateEntry(id, changes) {
  state[id] = { complete: false, ...(state[id] || {}), ...changes };
  if (changes.complete === true) {
    state[id].completedAt = new Date().toISOString();
  }
  if (changes.complete === false) {
    delete state[id].completedAt;
  }
  if (!state[id].complete) delete state[id];
  saveState();
}

function getCompletedTime(video) {
  const entry = state[video.id] || {};
  const timestamp = Date.parse(entry.completedAt || "");
  if (Number.isFinite(timestamp)) return timestamp;
  return -video.index;
}

function updateProgress() {
  const done = videos.filter((video) => state[video.id]?.complete).length;
  const goalDone = settings.todayGoalIds.filter((id) => state[id]?.complete).length;
  const goalTotal = settings.todayGoalIds.length;
  const percent = Math.round((done / videos.length) * 100);

  progressPercent.textContent = `${percent}%`;
  progressTitle.textContent = `${done} of ${videos.length} complete`;
  progressDetail.textContent = goalTotal
    ? `${videos.length - done} remaining. Today's goal: ${goalDone} of ${goalTotal}.`
    : `${videos.length - done} remaining. Set a daily goal in Settings.`;
  progressBar.style.width = `${percent}%`;
  progressRing.style.setProperty("--value", `${percent * 3.6}deg`);
  updateRewardStats(done);
}

function updateRewardStats(done) {
  const xp = done * xpPerVideo;
  const level = Math.floor(xp / xpPerLevel) + 1;
  const levelProgress = xp % xpPerLevel;

  streakValue.textContent = calculateStreak();
  levelValue.textContent = level;
  xpValue.textContent = xp;
  xpBar.style.width = `${Math.round((levelProgress / xpPerLevel) * 100)}%`;
}

function renderBadges(showNewToasts) {
  const earnedBadges = getEarnedBadges();
  const seen = new Set(rewards.seenBadgeIds);
  const newBadges = earnedBadges.filter((badge) => !seen.has(badge.id));

  badgeList.replaceChildren();
  earnedBadges.slice(-6).forEach((badge) => {
    const item = document.createElement("span");
    item.className = "badge-chip";
    item.textContent = badge.label;
    badgeList.append(item);
  });

  if (showNewToasts) {
    newBadges.forEach((badge) => showToast(badge.label, badge.detail));
  }

  if (newBadges.length) {
    rewards.seenBadgeIds = [...new Set([...rewards.seenBadgeIds, ...newBadges.map((badge) => badge.id)])];
    saveRewards();
  }
}

function getEarnedBadges() {
  const completed = videos.filter((video) => state[video.id]?.complete);
  const done = completed.length;
  const streak = calculateStreak();
  const level = Math.floor((done * xpPerVideo) / xpPerLevel) + 1;
  const badges = [];

  if (done >= 1) badges.push({ id: "first-video", label: "First win", detail: "You finished your first video." });
  if (done >= 10) badges.push({ id: "ten-videos", label: "10 down", detail: "Ten Security+ videos complete." });
  if (done >= 25) badges.push({ id: "quarter-course", label: "Quarter course", detail: "A serious chunk is behind you." });
  if (isDailyGoalComplete()) badges.push({ id: `daily-goal-${settings.goalDate}`, label: "Daily goal", detail: "Today's target is complete." });
  if (streak >= 3) badges.push({ id: "streak-3", label: "3-day streak", detail: "Three days of momentum." });
  if (streak >= 7) badges.push({ id: "streak-7", label: "7-day streak", detail: "A full week of consistency." });
  if (level >= 5) badges.push({ id: "level-5", label: "Level 5", detail: "You reached level 5." });
  if (done === videos.length) badges.push({ id: "course-complete", label: "Course complete", detail: "All Security+ videos are complete." });

  getCompletedSections().forEach((section) => {
    badges.push({
      id: `section-${section}`,
      label: `Section ${section}`,
      detail: `Section ${section} is complete.`
    });
  });

  return badges;
}

function getCompletedSections() {
  const sectionIds = [...new Set(videos.map((video) => video.section.split(".")[0]))];
  return sectionIds.filter((sectionId) => {
    const sectionVideos = videos.filter((video) => video.section.startsWith(`${sectionId}.`));
    return sectionVideos.length && sectionVideos.every((video) => state[video.id]?.complete);
  });
}

function recordCompletionDate() {
  const today = getTodayKey();
  if (!rewards.completedDates.includes(today)) {
    rewards.completedDates.push(today);
    rewards.completedDates.sort();
    saveRewards();
  }
}

function calculateStreak() {
  const dates = new Set(rewards.completedDates);
  let cursor = new Date();
  let streak = 0;

  while (dates.has(formatDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function isDailyGoalComplete() {
  return settings.todayGoalIds.length > 0 && settings.todayGoalIds.every((id) => state[id]?.complete);
}

function showToast(title, detail) {
  const toast = document.createElement("div");
  toast.className = "reward-toast";
  toast.innerHTML = `<strong>${title}</strong><span>${detail}</span>`;
  toastLayer.append(toast);
  window.setTimeout(() => toast.remove(), 4200);
}

function celebrateCard(node) {
  if (!shouldAnimate()) return;
  node.classList.remove("just-completed");
  void node.offsetWidth;
  node.classList.add("just-completed");
  progressRing.classList.remove("pulse");
  void progressRing.offsetWidth;
  progressRing.classList.add("pulse");
}

function showBurst(anchor, big) {
  if (!shouldAnimate()) return;
  const rect = anchor.getBoundingClientRect();
  const burst = document.createElement("div");
  burst.className = `burst ${big ? "big" : ""}`;
  burst.style.left = `${rect.right - 70}px`;
  burst.style.top = `${rect.top + rect.height / 2}px`;

  for (let index = 0; index < (big ? 14 : 8); index += 1) {
    const spark = document.createElement("span");
    spark.style.setProperty("--angle", `${(360 / (big ? 14 : 8)) * index}deg`);
    spark.style.setProperty("--distance", `${big ? 48 : 30}px`);
    burst.append(spark);
  }

  document.body.append(burst);
  window.setTimeout(() => burst.remove(), 850);
}

function playSound(type) {
  if (!settings.soundEnabled) return;
  const context = getAudioContext();
  if (!context) return;

  const notes = {
    complete: [523.25, 659.25, 783.99],
    undo: [392, 329.63],
    goal: [523.25, 659.25, 783.99, 1046.5]
  }[type];

  notes.forEach((frequency, index) => {
    const start = context.currentTime + index * 0.055;
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(type === "goal" ? 0.08 : 0.05, start + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.24);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.26);
  });
}

function getAudioContext() {
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    return audioContext;
  } catch {
    return null;
  }
}

function shouldAnimate() {
  return settings.animationsEnabled && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function renderSettings() {
  const node = settingsTemplate.content.firstElementChild.cloneNode(true);
  const input = node.querySelector("#dailyGoalInput");
  const refreshButton = node.querySelector("#refreshGoalBtn");
  const soundToggle = node.querySelector("#soundToggle");
  const animationToggle = node.querySelector("#animationToggle");

  input.value = settings.dailyGoal;
  soundToggle.checked = settings.soundEnabled;
  animationToggle.checked = settings.animationsEnabled;

  input.addEventListener("input", () => {
    settings.dailyGoal = clampGoal(input.value);
    refreshTodayGoal();
    saveSettings();
    updateProgress();
  });

  refreshButton.addEventListener("click", () => {
    refreshTodayGoal();
    saveSettings();
    updateProgress();
  });

  soundToggle.addEventListener("change", () => {
    settings.soundEnabled = soundToggle.checked;
    saveSettings();
    if (settings.soundEnabled) playSound("complete");
  });

  animationToggle.addEventListener("change", () => {
    settings.animationsEnabled = animationToggle.checked;
    saveSettings();
    document.documentElement.classList.toggle("effects-off", !settings.animationsEnabled);
  });

  list.replaceChildren(node);
}

function ensureTodayGoal() {
  const today = getTodayKey();
  if (settings.goalDate !== today) refreshTodayGoal();
}

function refreshTodayGoal() {
  settings.goalDate = getTodayKey();
  settings.todayGoalIds = videos
    .filter((video) => !state[video.id]?.complete)
    .slice(0, settings.dailyGoal)
    .map((video) => video.id);
  saveSettings();
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

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(settingsKey)) || {};
    return {
      dailyGoal: clampGoal(saved.dailyGoal ?? 3),
      goalDate: typeof saved.goalDate === "string" ? saved.goalDate : "",
      todayGoalIds: Array.isArray(saved.todayGoalIds) ? saved.todayGoalIds : [],
      soundEnabled: saved.soundEnabled !== false,
      animationsEnabled: saved.animationsEnabled !== false
    };
  } catch {
    return { dailyGoal: 3, goalDate: "", todayGoalIds: [], soundEnabled: true, animationsEnabled: true };
  }
}

function saveSettings() {
  localStorage.setItem(settingsKey, JSON.stringify(settings));
}

function clampGoal(value) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return 0;
  return Math.min(videos.length, Math.max(0, parsed));
}

function getTodayKey() {
  return formatDateKey(new Date());
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadRewards() {
  try {
    const saved = JSON.parse(localStorage.getItem(rewardsKey)) || {};
    return {
      completedDates: Array.isArray(saved.completedDates) ? saved.completedDates : [],
      seenBadgeIds: Array.isArray(saved.seenBadgeIds) ? saved.seenBadgeIds : []
    };
  } catch {
    return { completedDates: [], seenBadgeIds: [] };
  }
}

function saveRewards() {
  localStorage.setItem(rewardsKey, JSON.stringify(rewards));
}
