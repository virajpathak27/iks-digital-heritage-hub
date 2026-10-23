const state = { lang: localStorage.getItem("iks-lang") || "en", projects: [], query: "", category: "all" };
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const T = {
 en: {
  tagline:"A living archive of Indian knowledge",navExplore:"Explore projects",navQR:"QR Studio",eyebrow:"INDIAN KNOWLEDGE SYSTEMS · STUDENT EXHIBITION",heroTitle:'Ancient wisdom.<br><em>New ways to explore.</em>',heroDescription:"A digital exhibition of student research, projects and stories across India’s knowledge traditions — each project ready to discover through its own QR code.",browseProjects:"Browse projects",makeQR:"Create project QR →",githubHosted:"Open access · GitHub Pages ready",statProjects:"Featured projects",statArchive:"Shared digital archive",statAccess:"Scan. Learn. Explore.",curated:"CURATED KNOWLEDGE",collectionTitle:"Explore the collection",collectionText:"From ancient cities and mathematics to living arts and ecological knowledge, explore student work through a single, searchable hub.",searchPlaceholder:"Search projects, topics or places…",categoryLabel:"Category",allCategories:"All categories",noResults:"No projects found",trySearch:"Try another search or category.",viewProject:"View project →",qrEyebrow:"SCAN TO DISCOVER",qrTitle:'Every project gets<br><em>its own doorway.</em>',qrDescription:"Choose any project below to open its detail page and generate a QR code. Print the label for a poster, model, exhibition desk or classroom display.",qrBullet1:"Direct link to a dedicated project page",qrBullet2:"Downloadable QR image and printable label",qrBullet3:"Updates stay connected to the same project URL",qrCardTitle:"A small code. A whole story.",qrCardText:"Scan with your phone camera to open the project online.",simpleProcess:"A SIMPLE PROCESS",howTitle:"From student work to shared heritage",step1Title:"Document",step1Text:"Add a project entry to the repository’s JSON file with title, summary and sources.",step2Title:"Publish",step2Text:"GitHub Pages publishes the site. Each project has a stable, shareable link.",step3Title:"Share",step3Text:"Download a QR label and place it beside your project for visitors to scan.",noteText:"<strong>Built for thoughtful research.</strong> Every project should credit its sources, distinguish evidence from interpretation, and respect community knowledge and image permissions.",footerText:"A student-led window into India’s diverse knowledge traditions.",projectCount:"projects",projectMeta:"PROJECT",viewSource:"Open resource ↗",aboutProject:"About this project",projectDetails:"Project details",projectCategory:"Category",projectPeriod:"Period",projectRegion:"Region",projectFormat:"Format",projectStudent:"Contributor",qrHeading:"Scan to explore",qrHelp:"This QR code opens this project page.",downloadQR:"Download QR PNG",printLabel:"Print QR label",copyLink:"Copy project link",linkCopied:"Project link copied",qrUnavailable:"QR library did not load. Check your internet connection and reload.",backToProjects:"← Back to all projects",references:"Research & further reading",notFound:"Project not found",notFoundText:"This project may have moved or the link may be incorrect.",home:"Return to the hub",demoNote:"Sample project — replace with your class’s verified submission.",scanUrl:"Project URL",allProjects:"All projects"
 },
 mr: {
  tagline:"भारतीय ज्ञानाचा जिवंत डिजिटल संग्रह",navExplore:"प्रकल्प पाहा",navQR:"QR स्टुडिओ",eyebrow:"भारतीय ज्ञान प्रणाली · विद्यार्थी प्रदर्शन",heroTitle:'प्राचीन ज्ञान.<br><em>नवे अनुभव.</em>',heroDescription:"भारतीय ज्ञानपरंपरांवरील विद्यार्थी संशोधन, प्रकल्प आणि कथा यांचे डिजिटल प्रदर्शन — प्रत्येक प्रकल्पासाठी स्वतंत्र QR कोड.",browseProjects:"प्रकल्प पाहा",makeQR:"प्रकल्पाचा QR तयार करा →",githubHosted:"मुक्त प्रवेश · GitHub Pages साठी तयार",statProjects:"निवडक प्रकल्प",statArchive:"एकत्रित डिजिटल संग्रह",statAccess:"स्कॅन करा. शिका. शोधा.",curated:"निवडक ज्ञानसंग्रह",collectionTitle:"प्रकल्प संग्रह पाहा",collectionText:"प्राचीन नगरे आणि गणितापासून कला व पर्यावरणीय ज्ञानापर्यंतचे विद्यार्थी प्रकल्प एका शोधता येणाऱ्या संग्रहात पाहा.",searchPlaceholder:"प्रकल्प, विषय किंवा ठिकाण शोधा…",categoryLabel:"वर्ग",allCategories:"सर्व वर्ग",noResults:"प्रकल्प सापडले नाहीत",trySearch:"दुसरा शब्द किंवा वर्ग निवडा.",viewProject:"प्रकल्प पाहा →",qrEyebrow:"स्कॅन करा आणि जाणून घ्या",qrTitle:'प्रत्येक प्रकल्पासाठी<br><em>स्वतंत्र प्रवेशद्वार.</em>',qrDescription:"खालील प्रकल्प उघडून त्याचा तपशील आणि QR कोड पाहा. प्रदर्शन फलक, मॉडेल किंवा वर्गातील सादरीकरणाजवळ QR लेबल लावा.",qrBullet1:"प्रकल्पाच्या स्वतंत्र पानाची थेट लिंक",qrBullet2:"डाउनलोड करता येणारी QR प्रतिमा व प्रिंट लेबल",qrBullet3:"त्याच प्रकल्प लिंकवर सुधारित माहिती उपलब्ध",qrCardTitle:"छोटा कोड. मोठी कहाणी.",qrCardText:"मोबाइल कॅमेऱ्याने स्कॅन करून प्रकल्प उघडा.",simpleProcess:"सोप्या तीन पायऱ्या",howTitle:"विद्यार्थी प्रकल्पापासून सामायिक वारशापर्यंत",step1Title:"माहिती नोंदवा",step1Text:"शीर्षक, सारांश आणि संदर्भांसह प्रकल्पाची नोंद JSON फाइलमध्ये जोडा.",step2Title:"प्रकाशित करा",step2Text:"GitHub Pages संकेतस्थळ प्रकाशित करते. प्रत्येक प्रकल्पाची स्वतंत्र लिंक असते.",step3Title:"सामायिक करा",step3Text:"QR लेबल डाउनलोड करून प्रकल्पाजवळ लावा, जेणेकरून पाहुणे स्कॅन करू शकतील.",noteText:"<strong>जबाबदार संशोधनासाठी.</strong> प्रत्येक प्रकल्पात संदर्भ द्या, पुरावे आणि अर्थलावणी यांत फरक ठेवा आणि समुदायज्ञान व प्रतिमांच्या परवानग्यांचा आदर करा.",footerText:"भारताच्या विविध ज्ञानपरंपरांकडे विद्यार्थ्यांनी उघडलेली डिजिटल खिडकी.",projectCount:"प्रकल्प",projectMeta:"प्रकल्प",viewSource:"स्रोत उघडा ↗",aboutProject:"प्रकल्पाविषयी",projectDetails:"प्रकल्प तपशील",projectCategory:"वर्ग",projectPeriod:"कालखंड",projectRegion:"प्रदेश",projectFormat:"प्रकार",projectStudent:"योगदानकर्ता",qrHeading:"स्कॅन करून पाहा",qrHelp:"हा QR कोड या प्रकल्पाचे पान उघडतो.",downloadQR:"QR PNG डाउनलोड करा",printLabel:"QR लेबल प्रिंट करा",copyLink:"प्रकल्प लिंक कॉपी करा",linkCopied:"प्रकल्प लिंक कॉपी झाली",qrUnavailable:"QR लायब्ररी लोड झाली नाही. इंटरनेट तपासून पुन्हा प्रयत्न करा.",backToProjects:"← सर्व प्रकल्पांकडे परत",references:"संशोधन आणि पुढील वाचन",notFound:"प्रकल्प सापडला नाही",notFoundText:"प्रकल्प हलवला असू शकतो किंवा लिंक चुकीची असू शकते.",home:"मुख्य पानावर जा",demoNote:"नमुना प्रकल्प — वर्गातील पडताळलेली माहिती घालून बदला.",scanUrl:"प्रकल्प लिंक",allProjects:"सर्व प्रकल्प"
 }
};
function tr(key){return T[state.lang][key] ?? T.en[key] ?? key}
function localize(obj){if(obj && typeof obj==="object" && ("en" in obj || "mr" in obj)) return obj[state.lang] || obj.en || ""; return obj ?? ""}
function setLanguage(lang){state.lang=lang;localStorage.setItem("iks-lang",lang);document.documentElement.lang=lang==="mr"?"mr":"en";$("#language-toggle").textContent=lang==="en"?"मराठी":"English";applyTranslations();renderRoute()}
function applyTranslations(){ $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(T[state.lang][key])el.innerHTML=T[state.lang][key]}); $$("[data-i18n-placeholder]").forEach(el=>el.placeholder=tr(el.dataset.i18nPlaceholder)); }
function projectUrl(id){const url=new URL(window.location.href);url.hash="project/"+encodeURIComponent(id);return url.href}
function projectById(id){return state.projects.find(p=>p.id===id)}
function escapeHtml(value=""){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function categories(){const vals=new Map();state.projects.forEach(p=>vals.set(state.lang==="mr"?(p.categoryMr||p.category):p.category,p.category));return [...vals.entries()]}
function renderCategories(){const sel=$("#category-filter");const current=state.category;sel.innerHTML=`<option value="all">${tr("allCategories")}</option>`+categories().map(([label,val])=>`<option value="${escapeHtml(val)}">${escapeHtml(label)}</option>`).join("");sel.value=current}
function renderProjects(){
 const grid=$("#project-grid"),template=$("#project-card-template");grid.innerHTML="";
 const q=state.query.toLocaleLowerCase();
 const filtered=state.projects.filter(p=>{
  const categoryMatch=state.category==="all"||p.category===state.category;
  const hay=[localize(p.title),localize(p.summary),p.category,p.categoryMr,p.region.en,p.region.mr,p.period.en,p.period.mr].join(" ").toLocaleLowerCase();
  return categoryMatch&&hay.includes(q)
 });
 filtered.forEach((p,i)=>{
  const node=template.content.cloneNode(true),link="#project/"+encodeURIComponent(p.id);
  const art=$(".card-art",node);art.href=link;art.classList.add("theme-"+(p.theme||"terracotta"));
  $(".card-symbol",node).textContent=p.icon||"✺";$(".card-index",node).textContent=String(i+1).padStart(2,"0")+" / "+String(filtered.length).padStart(2,"0");
  const titleLink=$(".card-content h3 a",node);titleLink.href=link;titleLink.textContent=localize(p.title);
  $(".category-pill",node).textContent=state.lang==="mr"?(p.categoryMr||p.category):p.category;
  $(".card-period",node).textContent=localize(p.period);$(".card-summary",node).textContent=localize(p.summary);$(".card-region",node).textContent=localize(p.region);
  const open=$(".card-open",node);open.href=link;open.textContent=tr("viewProject");grid.appendChild(node);
 });
 $("#empty-state").hidden=filtered.length>0;$("#project-count").textContent=state.projects.length.toString().padStart(2,"0");
}
function generateQR(container,text,size=180){
 container.innerHTML="";
 if(typeof QRCode==="undefined"){container.innerHTML=`<p class="qr-error">${tr("qrUnavailable")}</p>`;return false}
 new QRCode(container,{text,width:size,height:size,colorDark:"#173b31",colorLight:"#fffdf8",correctLevel:QRCode.CorrectLevel.H});return true;
}
function qrDataUrl(container){const img=$("img",container);if(img&&img.src.startsWith("data:"))return img.src;const canvas=$("canvas",container);return canvas?canvas.toDataURL("image/png"):null}
function downloadQR(p){const box=$("#project-qr");const url=qrDataUrl(box);if(!url){toast(tr("qrUnavailable"));return}const a=document.createElement("a");a.href=url;a.download=`iks-${p.id}-qr.png`;document.body.appendChild(a);a.click();a.remove()}
function toast(message){const old=$(".toast");if(old)old.remove();const el=document.createElement("div");el.className="toast";el.role="status";el.textContent=message;document.body.appendChild(el);setTimeout(()=>el.remove(),2300)}
async function copyProjectUrl(p){try{await navigator.clipboard.writeText(projectUrl(p.id));toast(tr("linkCopied"))}catch(e){const input=document.createElement("textarea");input.value=projectUrl(p.id);document.body.appendChild(input);input.select();document.execCommand("copy");input.remove();toast(tr("linkCopied"))}}
function renderDetail(p){
 document.title=`${localize(p.title)} · IKS Digital Heritage Hub`;
 const main=document.createElement("main");main.innerHTML=`
 <div class="detail-shell">
  <p class="breadcrumbs"><a href="#">IKS Digital Heritage Hub</a> / <a href="#explore">${tr("allProjects")}</a> / ${escapeHtml(localize(p.title))}</p>
  <section class="detail-hero"><div class="detail-hero-copy"><p class="eyebrow">${escapeHtml(state.lang==="mr"?(p.categoryMr||p.category):p.category)}</p><h1>${escapeHtml(localize(p.title))}</h1><p>${escapeHtml(localize(p.summary))}</p><div class="detail-actions"><a class="button button-light" href="${escapeHtml(p.mediaUrl||"#")}" target="_blank" rel="noopener noreferrer">${tr("viewSource")}</a><button class="button button-outline" id="copy-project-link">${tr("copyLink")}</button></div></div><div class="detail-art theme-${escapeHtml(p.theme||"terracotta")}"><span class="detail-art-symbol">${escapeHtml(p.icon||"✺")}</span></div></section>
  <div class="detail-columns"><article class="detail-main"><p class="eyebrow">${tr("aboutProject").toUpperCase()}</p><h2>${tr("projectDetails")}</h2><p>${escapeHtml(localize(p.description))}</p><div class="note-band" style="margin:25px 0 0"><span class="note-icon">✧</span><p>${tr("demoNote")}</p></div></article>
   <aside class="detail-sidebar"><section class="qr-card"><h2>${tr("qrHeading")}</h2><p>${tr("qrHelp")}</p><div id="project-qr" aria-label="QR code for this project"></div><div class="qr-actions"><button class="small-button primary" id="download-qr">${tr("downloadQR")}</button><button class="small-button" id="print-qr">${tr("printLabel")}</button></div></section>
   <section class="info-card"><h2>${tr("projectDetails")}</h2><div class="info-row"><span>${tr("projectCategory")}</span><strong>${escapeHtml(state.lang==="mr"?(p.categoryMr||p.category):p.category)}</strong></div><div class="info-row"><span>${tr("projectPeriod")}</span><strong>${escapeHtml(localize(p.period))}</strong></div><div class="info-row"><span>${tr("projectRegion")}</span><strong>${escapeHtml(localize(p.region))}</strong></div><div class="info-row"><span>${tr("projectFormat")}</span><strong>${escapeHtml(p.format||"Research project")}</strong></div></section>
   <section class="references-card"><h2>${tr("references")}</h2><ul>${(p.references||[]).map(r=>`<li><a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(r.label)} ↗</a></li>`).join("")}</ul></section></aside>
  </div>
  <p style="margin-top:30px"><a class="back-link" href="#explore">${tr("backToProjects")}</a></p>
 </div>
 <div class="print-label"><h1>${escapeHtml(localize(p.title))}</h1><p>${escapeHtml(localize(p.summary))}</p><div id="print-qr-image"></div><p>${tr("scanUrl")}: ${escapeHtml(projectUrl(p.id))}</p><p>IKS Digital Heritage Hub</p></div>`;
 document.body.querySelector("main")?.remove();document.body.insertBefore(main,document.querySelector(".site-footer"));
 const qr=$("#project-qr",main);generateQR(qr,projectUrl(p.id),190);
 $("#download-qr",main).addEventListener("click",()=>downloadQR(p));
 $("#print-qr",main).addEventListener("click",()=>{const printBox=$("#print-qr-image",main);generateQR(printBox,projectUrl(p.id),280);setTimeout(()=>window.print(),250)});
 $("#copy-project-link",main).addEventListener("click",()=>copyProjectUrl(p));
}
function renderNotFound(){
 document.title=`${tr("notFound")} · IKS Digital Heritage Hub`;
 const main=document.createElement("main");main.innerHTML=`<div class="not-found"><p class="eyebrow">IKS DIGITAL HERITAGE HUB</p><h1>${tr("notFound")}</h1><p>${tr("notFoundText")}</p><a class="button button-dark" href="#">${tr("home")}</a></div>`;
 document.body.querySelector("main")?.remove();document.body.insertBefore(main,document.querySelector(".site-footer"));
}
function renderRoute(){
 const hash=decodeURIComponent(location.hash||"");
 if(hash.startsWith("#project/")){const id=hash.slice("#project/".length);const p=projectById(id);if(p)renderDetail(p);else renderNotFound();return}
 document.title="IKS Digital Heritage Hub";
 const existing=document.body.querySelector("main");if(!existing||!$("#project-grid")){location.hash="";window.location.reload();return}
 applyTranslations();renderCategories();renderProjects();
}
async function init(){
 try{const response=await fetch("./data/projects.json");if(!response.ok)throw new Error("Could not load projects");state.projects=await response.json()}
 catch(err){console.error(err);$("#project-grid").innerHTML='<p>Unable to load projects. Check that data/projects.json exists and the site is served over HTTP.</p>';return}
 $("#language-toggle").addEventListener("click",()=>setLanguage(state.lang==="en"?"mr":"en"));
 $("#search-input").addEventListener("input",e=>{state.query=e.target.value;renderProjects()});
 $("#category-filter").addEventListener("change",e=>{state.category=e.target.value;renderProjects()});
 document.addEventListener("keydown",e=>{if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();$("#search-input")?.focus()}});
 applyTranslations();$("#language-toggle").textContent=state.lang==="en"?"मराठी":"English";document.documentElement.lang=state.lang==="mr"?"mr":"en";
 window.addEventListener("hashchange",renderRoute);
 renderRoute();
}
document.addEventListener("DOMContentLoaded",init);
