/* app.js — Toàn bộ logic ứng dụng Fwork (data, UI, views, router) */


/* Bảng màu kế thừa Quy chuẩn FSC-Insight: xanh #0064B1 · cam #EF7025 · lá #21B14B · tím AI #7C3AED */
tailwind.config = {
  theme: { extend: {
    fontFamily: { sans: ["Inter","ui-sans-serif","system-ui","sans-serif"] },
    colors: {
      slate:  { 50:"#F7F8FA",100:"#EFF1F4",200:"#E2E5EA",300:"#C9CDD4",400:"#9AA0AA",500:"#6B7280",600:"#3A3F47",700:"#1E2128",800:"#181B20",900:"#14161A",950:"#0C0E11" },
      indigo: { 50:"#EAF4FC",100:"#A5D4F5",200:"#82C5F4",300:"#4FA6DE",400:"#1C82B4",500:"#1E7ABF",600:"#065292",700:"#023E7D",800:"#012D66",900:"#012D66",950:"#011226" },
      blue:   { 50:"#EAF4FC",100:"#A5D4F5",200:"#82C5F4",300:"#4FA6DE",400:"#1C82B4",500:"#1E7ABF",600:"#065292",700:"#023E7D",800:"#012D66",900:"#012D66",950:"#011226" },
      sky:    { 50:"#EAF4FC",100:"#A5D4F5",200:"#82C5F4",300:"#4FA6DE",400:"#1C82B4",500:"#0192E5",600:"#065292",700:"#023E7D",800:"#012D66",900:"#012D66",950:"#011226" },
      emerald:{ 50:"#E7F6EC",100:"#B6E4C4",200:"#8AD4A0",300:"#5BC57C",400:"#3BBC63",500:"#21B14B",600:"#18913C",700:"#13742F",800:"#0E5723",900:"#093B18",950:"#05210E" },
      green:  { 50:"#E7F6EC",100:"#B6E4C4",200:"#8AD4A0",300:"#5BC57C",400:"#3BBC63",500:"#21B14B",600:"#18913C",700:"#13742F",800:"#0E5723",900:"#093B18",950:"#05210E" },
      orange: { 50:"#FDEEE3",100:"#F8C9A8",200:"#F4AE80",300:"#F09056",400:"#EF7F3B",500:"#EF7025",600:"#C85A18",700:"#9E460F",800:"#76340B",900:"#4F2207",950:"#2E1304" },
      violet: { 50:"#EAF4FC",100:"#A5D4F5",200:"#82C5F4",300:"#4FA6DE",400:"#1C82B4",500:"#1E7ABF",600:"#065292",700:"#023E7D",800:"#012D66",900:"#012D66",950:"#011226" },
      amber:  { 50:"#FEF6E7",100:"#FCEAC4",200:"#F8D589",300:"#F2BC50",400:"#EBA532",500:"#E59324",600:"#C2741A",700:"#9A5612",800:"#723F0E",900:"#4D2A0A",950:"#2B1705" },
    },
  } },
};

;

/* Bảng màu kế thừa Quy chuẩn FSC-Insight: xanh #0064B1 · cam #EF7025 · lá #21B14B · tím AI #7C3AED */
tailwind.config = {
  theme: { extend: {
    fontFamily: { sans: ["Inter","ui-sans-serif","system-ui","sans-serif"] },
    colors: {
      slate:  { 50:"#F7F8FA",100:"#EFF1F4",200:"#E2E5EA",300:"#C9CDD4",400:"#9AA0AA",500:"#6B7280",600:"#3A3F47",700:"#1E2128",800:"#181B20",900:"#14161A",950:"#0C0E11" },
      indigo: { 50:"#EAF4FC",100:"#A5D4F5",200:"#82C5F4",300:"#4FA6DE",400:"#1C82B4",500:"#1E7ABF",600:"#065292",700:"#023E7D",800:"#012D66",900:"#012D66",950:"#011226" },
      blue:   { 50:"#EAF4FC",100:"#A5D4F5",200:"#82C5F4",300:"#4FA6DE",400:"#1C82B4",500:"#1E7ABF",600:"#065292",700:"#023E7D",800:"#012D66",900:"#012D66",950:"#011226" },
      sky:    { 50:"#EAF4FC",100:"#A5D4F5",200:"#82C5F4",300:"#4FA6DE",400:"#1C82B4",500:"#0192E5",600:"#065292",700:"#023E7D",800:"#012D66",900:"#012D66",950:"#011226" },
      emerald:{ 50:"#E7F6EC",100:"#B6E4C4",200:"#8AD4A0",300:"#5BC57C",400:"#3BBC63",500:"#21B14B",600:"#18913C",700:"#13742F",800:"#0E5723",900:"#093B18",950:"#05210E" },
      green:  { 50:"#E7F6EC",100:"#B6E4C4",200:"#8AD4A0",300:"#5BC57C",400:"#3BBC63",500:"#21B14B",600:"#18913C",700:"#13742F",800:"#0E5723",900:"#093B18",950:"#05210E" },
      orange: { 50:"#FDEEE3",100:"#F8C9A8",200:"#F4AE80",300:"#F09056",400:"#EF7F3B",500:"#EF7025",600:"#C85A18",700:"#9E460F",800:"#76340B",900:"#4F2207",950:"#2E1304" },
      violet: { 50:"#EAF4FC",100:"#A5D4F5",200:"#82C5F4",300:"#4FA6DE",400:"#1C82B4",500:"#1E7ABF",600:"#065292",700:"#023E7D",800:"#012D66",900:"#012D66",950:"#011226" },
      amber:  { 50:"#FEF6E7",100:"#FCEAC4",200:"#F8D589",300:"#F2BC50",400:"#EBA532",500:"#E59324",600:"#C2741A",700:"#9A5612",800:"#723F0E",900:"#4D2A0A",950:"#2B1705" },
    },
  } },
};

;

/* =====================================================================
 * Fwork PRO — 1 nguồn dữ liệu · chỉ số tự tính · Kanban · biểu đồ thật
 * Nguyên tắc: MỌI con số đều suy ra từ TASKS qua hàm metrics()/loadOf()/dna()
 * ===================================================================== */

/* ---------- "Hôm nay" của hệ thống ---------- */
const NOW = new Date("2026-06-08T09:00:00");

/* ---------- VAI TRÒ ---------- */
let ROLE, IS_BOSS, AC, ME;
function loadMe() {
  ROLE = localStorage.getItem("pw_role") || "boss";
  IS_BOSS = ROLE === "boss";
  AC = "indigo";
  ME = IS_BOSS
    ? { name: "Nguyễn Văn Nam", title: "Marketing Manager", initial: "N" }
    : { name: "Linh Trần", title: "Nhân viên SEO · Content", initial: "L" };
  // tùy biến tên & ảnh đại diện (lưu cục bộ theo vai trò)
  const cn = localStorage.getItem("pw_name_" + ROLE); if (cn) { ME.name = cn; ME.initial = cn.trim().split(" ").pop()[0] || ME.initial; }
  ME.title = localStorage.getItem("pw_title_" + ROLE) || ME.title;
  ME.avatar = localStorage.getItem("pw_avatar_" + ROLE) || "";  // dataURL ảnh nếu có
  ME.color  = localStorage.getItem("pw_color_" + ROLE) || (IS_BOSS ? "#065292" : "#1E7ABF");
}
function meAvatar(size, extra) {
  const s = size || "w-9 h-9";
  if (ME.avatar) return `<span class="${s} rounded-full bg-cover bg-center ${extra||""}" style="background-image:url('${ME.avatar}')"></span>`;
  return `<span class="${s} rounded-full grid place-items-center text-white font-bold ${extra||""}" style="background:${ME.color}">${ME.initial}</span>`;
}
function switchRole() { localStorage.setItem("pw_role", IS_BOSS ? "staff" : "boss"); location.reload(); }
function logout(){ if(!confirm("Đăng xuất khỏi tài khoản hiện tại để đăng nhập tài khoản khác?")) return; localStorage.removeItem("pw_logged"); location.hash=""; location.reload(); }
function toggleSidebar(){ const a=document.getElementById("sidebar"); if(!a) return; const on=a.classList.toggle("scol"); localStorage.setItem("pw_scol", on?"1":"0"); }
function navSummaryClick(e, gi){ e.preventDefault(); window.OPEN_GROUPS=window.OPEN_GROUPS||{}; const det=document.querySelector('details[data-g="'+gi+'"]'); if(!det)return; if(e.target.closest('.nav-chev')){ window.OPEN_GROUPS[gi]=!det.open; det.open=window.OPEN_GROUPS[gi]; } else { window.OPEN_GROUPS[gi]=true; det.open=true; } }
function toggleNotifDropdown(e){ if(e){e.stopPropagation();} const ex=document.getElementById("notifDrop"); if(ex){ ex.remove(); document.removeEventListener("click",notifOutside,true); return; } const N=buildNotifs(); const html=`<div id="notifDrop" class="fixed right-4 top-16 z-[55] w-[360px] max-w-[92vw] bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden"><div class="px-4 py-2.5 border-b border-slate-100 flex items-center"><b class="text-[13.5px] flex-1">Thông báo</b><a href="notifications.html" onclick="toggleNotifDropdown()" class="text-[11.5px] text-${AC}-600 font-semibold">Xem tất cả</a></div><div class="max-h-[440px] overflow-y-auto divide-y divide-slate-50">${N.slice(0,8).map(n=>`<a href="${n.link||'#'}" onclick="toggleNotifDropdown()" class="flex gap-2.5 px-4 py-3 hover:bg-slate-50 ${n.unread?`bg-${AC}-50/40`:""}"><span class="w-2 h-2 rounded-full mt-1.5 ${NDOT[n.type]}"></span><div class="min-w-0"><div class="text-[12.5px] font-semibold truncate">${n.title}</div>${n.body?`<div class="text-[11px] text-slate-500 truncate">${n.body}</div>`:""}<div class="text-[10px] text-slate-400">${n.time}</div></div></a>`).join("")||`<div class="p-6 text-center text-slate-400 text-[12.5px]">Không có thông báo.</div>`}</div></div>`; document.body.insertAdjacentHTML("beforeend",html); setTimeout(()=>document.addEventListener("click",notifOutside,true),0); }
function notifOutside(e){ const d=document.getElementById("notifDrop"); if(!d) return; if(!d.contains(e.target) && !e.target.closest('[data-bell]')){ d.remove(); document.removeEventListener("click",notifOutside,true); } }
function ic(n,cls){ const P={grid:"M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",users:"M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-2.5 2.5-4 6-4M22 20c0-2.5-2.5-4-6-4M9 20c0-2.2 1.4-3.4 3-3.4s3 1.2 3 3.4",user:"M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-3 3.5-5 8-5s8 2 8 5",brief:"M4 7h16v12H4zM9 7V5h6v2",clip:"M9 4h6v2H9zM7 6h10v14H7zM9 11h6M9 15h4",cal:"M4 6h16v14H4zM4 9h16M8 3v4M16 3v4",proj:"M6 6h5v5H6zM13 13h5v5h-5zM11 8.5h3M9.5 11v3",spark:"M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z",check:"M5 7h11v13H5zM8 4h5v3H8zM8 13l2 2 4-4",star:"M12 4l2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 16.6 7.4 18.4l.9-5.2L4.5 9.3l5.2-.8z",chart:"M4 20V10M10 20V4M16 20v-7M20 20H3",folder:"M3 7h6l2 2h10v10H3z",shield:"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",gear:"M12 9a3 3 0 100 6 3 3 0 000-6zM19.4 13a7.5 7.5 0 000-2l2-1.5-2-3.4-2.3 1a7 7 0 00-1.7-1L17 3.5h-4l-.4 2.6a7 7 0 00-1.7 1l-2.3-1-2 3.4 2 1.5a7.5 7.5 0 000 2l-2 1.5 2 3.4 2.3-1a7 7 0 001.7 1l.4 2.6h4l.4-2.6a7 7 0 001.7-1l2.3 1 2-3.4z",smile:"M12 21a9 9 0 100-18 9 9 0 000 18zM9 10h.01M15 10h.01M8.5 14a4.5 4.5 0 007 0",search:"M16.5 16.5L21 21M11 18a7 7 0 110-14 7 7 0 010 14z",thread:"M4 5h16v10H9l-4 4zM8 9h8M8 12h5",userplus:"M9 11a4 4 0 100-8 4 4 0 000 8M3 20a6 6 0 0112 0M18 8v6M21 11h-6",image:"M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M8.5 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3",clip2:"M21 11l-8.5 8.5a4 4 0 01-6-6l8.6-8.6a2.6 2.6 0 013.7 3.7l-8.6 8.6a1 1 0 01-1.5-1.5l7.9-7.9",at:"M16 12a4 4 0 10-1.1 2.8M16 8v5.5a2.5 2.5 0 005 0V12a9 9 0 10-3.5 7.1",reply:"M9 17l-5-5 5-5M4 12h11a4 4 0 014 4v2",edit:"M4 20h4L20 8l-4-4L4 16zM14 6l4 4",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6",plus:"M12 5v14M5 12h14"}; return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="${cls||"w-[18px] h-[18px]"}"><path d="${P[n]||P.grid}"/></svg>`; }
function navGroups(){
  const dash=[]; if(IS_BOSS) dash.push(["boss-dashboard.html","Dashboard team","users"]); dash.push(["dashboard.html","Dashboard cá nhân","user"]);
  return [
    {title:"Dashboard",icon:"grid",items:dash},
    {title:"Công việc",icon:"brief",items:[["task-list.html","Công việc của tôi","clip"],["calendar.html","Lịch công việc","cal"],["collab.html","Dự án phối hợp","proj"],["resources.html","FPT Drive","folder"]]},
    {title:"AI Assistant",icon:"spark",items:[["ai-assistant.html","AI Assistant & Phân tích","spark"]]},
    {title:"Phê duyệt & Đánh giá",icon:"check",items:[["leaves.html","Luồng phê duyệt","check"],["mood-check.html",IS_BOSS?"Mood check team":"Mood check","smile"],["work-dna.html",IS_BOSS?"Đánh giá nhân viên":"Đánh giá của tôi","star"]]},
    {title:"Hồ sơ & Quản trị",icon:"shield",items:[["profile.html","Hồ sơ cá nhân","user"]].concat(IS_BOSS?[["permissions.html","Phân quyền & người dùng","users"],["admin-settings.html","Quản trị hệ thống","gear"]]:[])},
  ];
}

/* ---------- NHÓM CHUYÊN MÔN ---------- */
const GROUPS = { ADS:["Nam Phạm","Huy Lê"], SEO:["Ánh Dương","Linh Trần"], CRM:["Minh Hoàng"], CDP:["Nguyễn Văn Nam"] };
const teamOf = (name) => Object.keys(GROUPS).find((g) => GROUPS[g].includes(name)) || "—";
const CAPACITY_H = 32; // quỹ giờ khả dụng / người / tuần (tham chiếu tính tải)
const WIP_LIMIT = 4;   // ngưỡng quá tải theo số việc đang mở

/* ---------- NHÂN SỰ ---------- */
const USERS = [
  { id:1, name:"Nguyễn Văn Nam", title:"Marketing Manager", role:"boss",   c:"bg-indigo-600" },
  { id:2, name:"Linh Trần",      title:"Content Leader",    role:"leader", c:"bg-emerald-600" },
  { id:3, name:"Nam Phạm",       title:"Ads Leader",        role:"leader", c:"bg-orange-500" },
  { id:4, name:"Ánh Dương",      title:"SEO Specialist",    role:"member", c:"bg-violet-600" },
  { id:5, name:"Huy Lê",         title:"Designer",          role:"member", c:"bg-rose-500" },
  { id:6, name:"Minh Hoàng",     title:"CRM Specialist",    role:"member", c:"bg-cyan-600" },
];
const MEMBERS = ["Linh Trần","Nam Phạm","Ánh Dương","Huy Lê","Minh Hoàng"];

/* ---------- DỰ ÁN gắn chiến dịch tuyển sinh ---------- */
const PROJECTS = [
  { name:"SEO Hà Nam",               campaign:"Tuyển sinh THPT Hà Nam" },
  { name:"Campaign Bắc Ninh",        campaign:"Tuyển sinh Bắc Ninh" },
  { name:"LP Bắc Ninh",              campaign:"Tuyển sinh Bắc Ninh" },
  { name:"CRM",                      campaign:"Chăm sóc & chuyển đổi lead" },
  { name:"Campaign Bắc Giang",       campaign:"Tuyển sinh Bắc Giang" },
  { name:"Email Campaign",           campaign:"Chăm sóc & chuyển đổi lead" },
  { name:"SEO Bắc Ninh",             campaign:"Tuyển sinh Bắc Ninh" },
  { name:"Content Blog",             campaign:"Thương hiệu tuyển sinh" },
  { name:"Tuyển sinh THPT Hà Nam",   campaign:"Tuyển sinh THPT Hà Nam" },
  { name:"Social Media",             campaign:"Thương hiệu tuyển sinh" },
];
const PROJECT_NAMES = PROJECTS.map(p => p.name);
const SPECIALTIES = ["Ads Facebook","Ads Google","Seo","CRM","CDP","Hỗ trợ cơ sở"];

/* ---------- PHỄU TUYỂN SINH (kết quả kinh doanh gắn với công việc) ---------- */
const FUNNEL = [
  { stage:"Lead",        value:1820, conv:null },
  { stage:"Tư vấn",      value:940,  conv:52 },
  { stage:"Đăng ký",     value:430,  conv:46 },
  { stage:"Nhập học",    value:268,  conv:62 },
];

/* ---------- TASKS: nguồn sự thật duy nhất (có mốc thời gian vòng đời) ---------- */
const TASKS = [
  { id:1,  title:"Viết bài SEO FPT School Hà Nam",        project:"SEO Hà Nam",            assignee:"Linh Trần",  status:"doing", prio:"high",   pct:65, skill:"SEO",     estimateH:12, reworkCount:0, createdAt:"2026-06-04T09:00", due:"2026-06-08T17:00", startedAt:"2026-06-05T08:30" },
  { id:2,  title:"Audit Ads Bắc Ninh",                    project:"Campaign Bắc Ninh",     assignee:"Ánh Dương",  status:"doing", prio:"urgent", pct:30, skill:"Ads",     estimateH:8,  reworkCount:0, createdAt:"2026-06-02T09:00", due:"2026-06-05T17:00", startedAt:"2026-06-03T09:00" },
  { id:3,  title:"Viết content landing page Bắc Ninh",    project:"LP Bắc Ninh",           assignee:"Linh Trần",  status:"doing", prio:"high",   pct:45, skill:"Content", estimateH:10, reworkCount:0, createdAt:"2026-06-05T09:00", due:"2026-06-09T17:00", startedAt:"2026-06-06T09:00" },
  { id:4,  title:"Báo cáo CRM tuần",                      project:"CRM",                   assignee:"Minh Hoàng", status:"todo",  prio:"medium", pct:0,  skill:"CRM",     estimateH:4,  reworkCount:0, createdAt:"2026-06-06T09:00", due:"2026-06-10T17:00" },
  { id:5,  title:"Thiết kế banner campaign Bắc Giang",    project:"Campaign Bắc Giang",    assignee:"Huy Lê",     status:"doing", prio:"high",   pct:70, skill:"Design",  estimateH:6,  reworkCount:1, createdAt:"2026-06-03T09:00", due:"2026-06-06T12:00", startedAt:"2026-06-04T09:00" },
  { id:6,  title:"Content email tuyển sinh",              project:"Email Campaign",        assignee:"Linh Trần",  status:"todo",  prio:"medium", pct:0,  skill:"Content", estimateH:6,  reworkCount:0, createdAt:"2026-06-06T09:00", due:"2026-06-11T17:00" },
  { id:7,  title:"Nghiên cứu từ khóa FSchool Bắc Ninh",   project:"SEO Bắc Ninh",          assignee:"Ánh Dương",  status:"done",  prio:"medium", pct:100, skill:"SEO",    estimateH:8,  reworkCount:0, createdAt:"2026-05-30T09:00", due:"2026-06-04T17:00", startedAt:"2026-06-01T09:00", submittedAt:"2026-06-03T16:00", acceptedAt:"2026-06-04T10:00", score:92 },
  { id:8,  title:"Outline bài blog chọn trường",          project:"Content Blog",          assignee:"Linh Trần",  status:"review",prio:"low",    pct:90, skill:"Content", estimateH:5,  reworkCount:1, createdAt:"2026-06-05T09:00", due:"2026-06-12T17:00", startedAt:"2026-06-06T09:00", submittedAt:"2026-06-07T15:00" },
  { id:9,  title:"Tối ưu landing page tuyển sinh THPT",   project:"Tuyển sinh THPT Hà Nam",assignee:"Nam Phạm",   status:"doing", prio:"high",   pct:55, skill:"Ads",     estimateH:10, reworkCount:0, createdAt:"2026-06-05T09:00", due:"2026-06-13T17:00", startedAt:"2026-06-06T09:00" },
  { id:10, title:"Nội dung post Facebook tuần 3",         project:"Social Media",          assignee:"Linh Trần",  status:"done",  prio:"medium", pct:100, skill:"Content",estimateH:4,  reworkCount:0, createdAt:"2026-06-01T09:00", due:"2026-06-03T17:00", startedAt:"2026-06-02T09:00", submittedAt:"2026-06-03T11:00", acceptedAt:"2026-06-03T15:00", score:88 },
  { id:11, title:"Thiết kế bộ banner tuyển sinh đợt 2",   project:"Tuyển sinh THPT Hà Nam",assignee:"Huy Lê",     status:"doing", prio:"medium", pct:40, skill:"Design",  estimateH:8,  reworkCount:0, createdAt:"2026-06-05T09:00", due:"2026-06-10T17:00", startedAt:"2026-06-06T09:00" },
  { id:12, title:"Email nurturing lead chưa chuyển đổi",  project:"Email Campaign",        assignee:"Minh Hoàng", status:"done",  prio:"high",   pct:100, skill:"CRM",    estimateH:5,  reworkCount:1, createdAt:"2026-05-28T09:00", due:"2026-06-02T17:00", startedAt:"2026-05-29T09:00", submittedAt:"2026-06-02T18:00", acceptedAt:"2026-06-03T11:00", score:80 },
  { id:13, title:"Tối ưu trang đích chiến dịch Ads",      project:"Campaign Bắc Ninh",     assignee:"Nam Phạm",   status:"done",  prio:"high",   pct:100, skill:"Ads",    estimateH:8,  reworkCount:0, createdAt:"2026-05-31T09:00", due:"2026-06-05T17:00", startedAt:"2026-06-01T09:00", submittedAt:"2026-06-04T16:00", acceptedAt:"2026-06-05T14:00", score:90 },
  { id:14, title:"Nghiên cứu đối thủ tuyển sinh Bắc Ninh",project:"SEO Bắc Ninh",          assignee:"Ánh Dương",  status:"review",prio:"medium", pct:85, skill:"SEO",     estimateH:6,  reworkCount:0, createdAt:"2026-06-05T09:00", due:"2026-06-09T17:00", startedAt:"2026-06-06T09:00", submittedAt:"2026-06-08T08:00" },
  { id:15, title:"Kịch bản video giới thiệu trường",      project:"Social Media",          assignee:"Linh Trần",  status:"todo",  prio:"low",    pct:0,  skill:"Content", estimateH:6,  reworkCount:0, createdAt:"2026-06-07T09:00", due:"2026-06-14T17:00" },
  { id:16, title:"Dọn & chuẩn hóa dữ liệu CRM",           project:"CRM",                   assignee:"Minh Hoàng", status:"done",  prio:"medium", pct:100, skill:"CRM",    estimateH:6,  reworkCount:0, createdAt:"2026-05-27T09:00", due:"2026-06-01T17:00", startedAt:"2026-05-28T09:00", submittedAt:"2026-05-31T16:00", acceptedAt:"2026-06-01T10:00", score:85 },
  { id:17, title:"Bài blog “Chọn trường cấp 3 ở Hà Nam”", project:"Content Blog",          assignee:"Linh Trần",  status:"done",  prio:"medium", pct:100, skill:"Content",estimateH:6,  reworkCount:0, createdAt:"2026-05-29T09:00", due:"2026-06-04T17:00", startedAt:"2026-06-01T09:00", submittedAt:"2026-06-03T10:00", acceptedAt:"2026-06-04T09:00", score:90 },
  { id:18, title:"Set up tracking chuyển đổi Ads",        project:"Campaign Bắc Ninh",     assignee:"Nam Phạm",   status:"done",  prio:"medium", pct:100, skill:"Ads",    estimateH:5,  reworkCount:0, createdAt:"2026-05-30T09:00", due:"2026-06-03T17:00", startedAt:"2026-06-01T09:00", submittedAt:"2026-06-02T11:00", acceptedAt:"2026-06-02T16:00", score:86 },
  { id:19, title:"Duyệt kế hoạch tuyển sinh Q3 toàn hệ thống", project:"Tuyển sinh THPT Hà Nam", assignee:"Nguyễn Văn Nam", status:"doing", prio:"high",   pct:40, skill:"Quản lý", estimateH:6, reworkCount:0, createdAt:"2026-06-06T09:00", due:"2026-06-12T17:00", startedAt:"2026-06-08T09:00", kind:"personal", spec:"Hỗ trợ cơ sở" },
  { id:20, title:"Báo cáo hiệu suất team tháng 6 cho BGH",     project:"",                       assignee:"Nguyễn Văn Nam", status:"todo",  prio:"medium", pct:0,  skill:"Quản lý", estimateH:4, reworkCount:0, createdAt:"2026-06-09T09:00", due:"2026-06-15T17:00", kind:"personal", spec:"Hỗ trợ cơ sở" },
  { id:21, title:"Họp 1-1 định hướng với các Leader",         project:"",                       assignee:"Nguyễn Văn Nam", status:"done",  prio:"medium", pct:100, skill:"Quản lý", estimateH:3, reworkCount:0, createdAt:"2026-06-01T09:00", due:"2026-06-05T17:00", startedAt:"2026-06-02T09:00", submittedAt:"2026-06-05T10:00", acceptedAt:"2026-06-05T11:00", score:92, kind:"personal", spec:"Hỗ trợ cơ sở" },
];

/* ---------- DUYỆT & MOOD ---------- */
const LEAVES = [
  { id:1, who:"Ánh Dương", type:"Nghỉ phép", from:"08/06", to:"10/06", days:3, status:"pending" },
  { id:2, who:"Huy Lê",    type:"Nghỉ phép", from:"15/06", to:"16/06", days:2, status:"approved" },
  { id:3, who:"Linh Trần", type:"Làm online",from:"03/06", to:"03/06", days:1, status:"approved" },
  { id:4, who:"Minh Hoàng",type:"Làm online",from:"12/06", to:"12/06", days:1, status:"pending" },
  { id:5, who:"Linh Trần", type:"Nghỉ phép", from:"20/06", to:"21/06", days:2, status:"rejected" },
];
const EXPENSES = [
  { id:1, who:"Nam Phạm",  title:"Ngân sách chạy Ads Bắc Ninh tháng 6", amount:"15.000.000đ", group:"ADS", status:"pending" },
  { id:2, who:"Linh Trần", title:"Mua công cụ SEO Ahrefs (1 năm)",       amount:"4.500.000đ",  group:"SEO", status:"pending" },
  { id:3, who:"Huy Lê",    title:"Thuê thiết kế banner ngoài",           amount:"3.000.000đ",  group:"ADS", status:"approved" },
  { id:4, who:"Minh Hoàng",title:"Nâng cấp tài khoản CRM HubSpot",       amount:"6.200.000đ",  group:"CRM", status:"rejected" },
];
const MOOD_TODAY = { "Linh Trần":"pressured", "Huy Lê":"burst", "Nam Phạm":"happy", "Ánh Dương":"normal", "Minh Hoàng":"happy" };
const MOODS = [["happy","😄","Vui vẻ","emerald"],["normal","🙂","Bình thường","sky"],["pressured","😣","Áp lực","amber"],["burst","🔥","Bùng nổ","red"]];
const MOOD_MAP = Object.fromEntries(MOODS.map(m=>[m[0],m]));

/* =====================================================================
 *  METRICS ENGINE — mọi chỉ số suy ra từ TASKS
 * ===================================================================== */
const D = (s) => new Date(s);
const hoursBetween = (a, b) => (D(b) - D(a)) / 3600000;
const daysBetween  = (a, b) => (D(b) - D(a)) / 86400000;
const avg = (arr) => arr.length ? arr.reduce((s,x)=>s+x,0)/arr.length : 0;
const r0  = (x) => Math.round(x);
const r1  = (x) => Math.round(x*10)/10;

/* Trạng thái hiển thị: quá hạn được SUY RA từ deadline, không gán tay */
function dstat(t) {
  if (t.status === "done") return "done";
  if (D(t.due) < NOW) return "late";
  return t.status;
}
const isOverdue = (t) => t.status !== "done" && D(t.due) < NOW;
const isOnTimeDone = (t) => t.status === "done" && t.acceptedAt && D(t.acceptedAt) <= D(t.due);
const cycleH = (t) => (t.startedAt && t.acceptedAt) ? hoursBetween(t.startedAt, t.acceptedAt) : null;
const remainH = (t) => t.estimateH * (1 - t.pct/100);

function metrics(list) {
  const T = list || TASKS;
  const done = T.filter(t => t.status === "done");
  const open = T.filter(t => t.status !== "done");
  const late = open.filter(isOverdue);
  const onTime = done.filter(isOnTimeDone);
  const reworked = done.filter(t => t.reworkCount > 0);
  const cyc = done.map(cycleH).filter(x => x != null);
  return {
    total: T.length, done: done.length, open: open.length, late: late.length,
    review: T.filter(t => t.status === "review").length,
    doing: T.filter(t => t.status === "doing" && !isOverdue(t)).length,
    todo: T.filter(t => t.status === "todo" && !isOverdue(t)).length,
    onTimeCount: onTime.length, firstPassCount: done.length - reworked.length, reworkedCount: reworked.length,
    completionRate: T.length ? r0(done.length / T.length * 100) : 0,
    onTimeRate: done.length ? r0(onTime.length / done.length * 100) : 0,
    firstPassRate: done.length ? r0((done.length - reworked.length) / done.length * 100) : 0,
    reworkRate: done.length ? r0(reworked.length / done.length * 100) : 0,
    avgCycleDays: cyc.length ? r1(avg(cyc) / 24) : 0,
    avgQuality: done.length ? r0(avg(done.filter(t=>t.score!=null).map(t=>t.score))) : 0,
  };
}

/* Tải & năng lực theo người */
function loadOf(name) {
  const open = TASKS.filter(t => t.assignee === name && t.status !== "done");
  const remain = open.reduce((s,t) => s + remainH(t), 0);
  return {
    wip: open.length,
    overdue: open.filter(isOverdue).length,
    highPrio: open.filter(t => t.prio === "high" || t.prio === "urgent").length,
    remainH: r1(remain),
    loadPct: r0(remain / CAPACITY_H * 100),
    overloaded: open.length > WIP_LIMIT || remain > CAPACITY_H,
  };
}

/* Work DNA minh bạch — điểm = tổ hợp có trọng số, hiện rõ từng cấu phần */
const DNA_W = { onTime:0.35, quality:0.35, process:0.15, throughput:0.15 };
function dna(name) {
  const T = TASKS.filter(t => t.assignee === name);
  const m = metrics(T);
  const maxDone = Math.max(1, ...MEMBERS.map(n => TASKS.filter(t => t.assignee===n && t.status==="done").length));
  const throughput = r0(m.done / maxDone * 100);
  const process = 100 - m.reworkRate;
  const hasData = m.done > 0;
  const score = hasData ? r0(DNA_W.onTime*m.onTimeRate + DNA_W.quality*m.avgQuality + DNA_W.process*process + DNA_W.throughput*throughput) : 0;
  return { name, score, onTime:m.onTimeRate, quality:m.avgQuality, process, throughput, done:m.done, hasData, m };
}
function ranking() {
  return MEMBERS.map(dna).sort((a,b) => b.score - a.score);
}

/* Sức khỏe dự án */
function projectStats(name) {
  const T = TASKS.filter(t => t.project === name);
  const progress = T.length ? r0(avg(T.map(t => t.pct))) : 0;
  const overdue = T.filter(isOverdue).length;
  const health = overdue >= 2 ? "red" : overdue === 1 ? "amber" : "green";
  return { count:T.length, progress, overdue, health };
}
function specStats(name) {
  const T = TASKS.filter(t => t.spec === name);
  const progress = T.length ? r0(avg(T.map(t => t.pct))) : 0;
  const overdue = T.filter(isOverdue).length;
  const health = overdue >= 2 ? "red" : overdue === 1 ? "amber" : "green";
  return { count:T.length, progress, overdue, health };
}
/* Ước tính ngày hoàn thành: dựa trên tiến độ thực tế so với thời gian đã trôi */
function etaOf(t){
  const due=new Date(t.due);
  if(t.status==="done"){ const d=t.acceptedAt?new Date(t.acceptedAt):due; return {date:d, late:d>due, done:true}; }
  if(t.eta){ const d=new Date(t.eta); return {date:d, late:d>due, done:false, manual:true}; }
  if(!t.startedAt || t.pct<=0){ return {date:due, late:false, done:false, naive:true}; }
  const started=new Date(t.startedAt);
  const elapsedH=Math.max(1,(NOW-started)/3600000);
  const rate=t.pct/elapsedH;
  const remainH=(100-t.pct)/Math.max(0.05,rate);
  const eta=new Date(NOW.getTime()+remainH*3600000);
  return {date:eta, late:eta>due, done:false};
}
function etaLabel(t){
  const e=etaOf(t); const d=fmtDate(e.date);
  if(e.done){ return `<b class="${e.late?"text-red-600":"text-emerald-600"}">${d} · ${e.late?"trễ hạn":"đúng hạn"}</b>`; }
  const note=e.manual?"người làm tự đặt":e.naive?"theo kế hoạch":e.late?"nguy cơ trễ":"đúng tiến độ";
  return `<b class="${e.late?"text-red-600":"text-emerald-600"}">${d}</b> <span class="text-slate-400 text-[11px] font-normal">(${note})</span>`;
}
function etaMini(t){ const e=etaOf(t); return `<span class="${(e.late&&!e.done)?"text-red-600":"text-slate-400"}">${e.done?"đã xong":"dự kiến"} ${fmtDate(e.date)}</span>`; }

/* Throughput 7 ngày gần nhất (đếm task nghiệm thu đạt theo ngày) */
function throughput7() {
  const days = [], labels = [], data = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(NOW); d.setDate(d.getDate() - i); d.setHours(0,0,0,0);
    days.push(d);
  }
  days.forEach(d => {
    const next = new Date(d); next.setDate(d.getDate()+1);
    labels.push(String(d.getDate()).padStart(2,"0")+"/"+String(d.getMonth()+1).padStart(2,"0"));
    data.push(TASKS.filter(t => t.acceptedAt && D(t.acceptedAt) >= d && D(t.acceptedAt) < next).length);
  });
  return { labels, data };
}

/* =====================================================================
 *  HELPERS GIAO DIỆN
 * ===================================================================== */
const STATUS = {
  todo:   ["Chờ làm",        "bg-slate-100 text-slate-600"],
  doing:  ["Đang thực hiện", "bg-indigo-100 text-indigo-700"],
  review: ["Chờ nghiệm thu", "bg-amber-100 text-amber-700"],
  done:   ["Hoàn thành",     "bg-emerald-100 text-emerald-700"],
  late:   ["Quá hạn",        "bg-red-100 text-red-700"],
};
const STATUS_KEYS = ["todo","doing","review","done","late"];
const PRIO = {
  low:["Thấp","bg-slate-100 text-slate-500"], medium:["Trung bình","bg-sky-100 text-sky-700"],
  high:["Cao","bg-orange-100 text-orange-700"], urgent:["Khẩn cấp","bg-red-100 text-red-700"],
};
const badge = (s) => `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${STATUS[s][1]}">${STATUS[s][0]}</span>`;
const prio  = (p) => `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${PRIO[p][1]}">${PRIO[p][0]}</span>`;
const avatar = (name) => { const u = USERS.find(x => x.name === name); return `<span class="inline-grid place-items-center w-7 h-7 rounded-full text-white text-[11px] font-bold ${u?u.c:"bg-slate-400"}">${name.split(" ").pop()[0]}</span>`; };
const progressBar = (pct, color) => `<div class="h-1.5 bg-slate-100 rounded-full overflow-hidden"><div class="h-full rounded-full ${color||"bg-indigo-500"}" style="width:${pct}%"></div></div>`;
const fmtDue = (d) => new Date(d).toLocaleString("vi-VN",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"});
const fmtDate = (d) => new Date(d).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit"});
const HEALTH = { green:["Tốt","bg-emerald-100 text-emerald-700"], amber:["Cần theo dõi","bg-amber-100 text-amber-700"], red:["Nguy cơ cao","bg-red-100 text-red-700"] };

/* KPI card có thể bấm để drill-down sang danh sách đã lọc */
function kpi(label, value, sub, subCls, href, hint) {
  const inner = `
    <div class="flex items-start justify-between">
      <div class="text-[12px] font-medium text-slate-500">${label}</div>
      ${hint ? `<span class="text-[10px] text-slate-300" title="${hint}"></span>` : ""}
    </div>
    <div class="text-[24px] font-extrabold text-slate-800 mt-1 tracking-tight">${value}</div>
    ${sub ? `<div class="text-[11px] font-semibold mt-0.5 ${subCls||"text-emerald-600"}">${sub}</div>` : ""}`;
  return href
    ? `<a href="${href}" class="block bg-white border border-slate-200 rounded-xl p-4 hover:border-${AC}-300 hover:shadow-sm transition">${inner}</a>`
    : `<div class="bg-white border border-slate-200 rounded-xl p-4">${inner}</div>`;
}
const card = (title, body, link, linkHref) => `
  <div class="bg-white border border-slate-200 rounded-xl p-4 mb-4">
    <div class="flex items-center mb-3"><h3 class="font-semibold text-[13.5px] text-slate-800">${title}</h3>
      ${link ? `<a href="${linkHref||"#"}" class="ml-auto text-[11.5px] font-semibold text-${AC}-600">${link}</a>` : ""}</div>
    ${body}</div>`;

/* KPI có popup drill-down: bấm là hiện đúng tập task của chỉ số đó */
function kpiPop(label, value, sub, subCls, popKey, hint) {
  return `<div onclick="taskPopupKey('${popKey}')" class="cursor-pointer bg-white border border-slate-200 rounded-xl p-4 hover:border-${AC}-300 hover:shadow-sm transition">
    <div class="flex items-start justify-between"><div class="text-[12px] font-medium text-slate-500">${label}</div>${hint?`<span class="text-[10px] text-slate-300" title="${hint}"></span>`:`<span class="text-[10px] text-${AC}-400"></span>`}</div>
    <div class="text-[24px] font-extrabold text-slate-800 mt-1 tracking-tight">${value}</div>
    ${sub?`<div class="text-[11px] font-semibold mt-0.5 ${subCls||"text-emerald-600"}">${sub}</div>`:""}</div>`;
}
let POP_SCOPE = null; // null = toàn team; hoặc tên người để giới hạn
const POP_TITLE = { all:"Tất cả task", done:"Task đã hoàn thành", open:"Task đang mở", late:"Task quá hạn", doing:"Task đang thực hiện", review:"Task chờ nghiệm thu", todo:"Task chờ làm", soon:"Task sắp đến hạn (≤2 ngày)", ontime:"Task hoàn thành đúng hạn", rework:"Task phải làm lại" };
function popList(key) {
  let T = POP_SCOPE ? TASKS.filter(t => t.assignee === POP_SCOPE) : TASKS.slice();
  switch (key) {
    case "done":   return T.filter(t => t.status === "done");
    case "open":   return T.filter(t => t.status !== "done");
    case "late":   return T.filter(isOverdue);
    case "doing":  return T.filter(t => dstat(t) === "doing");
    case "review": return T.filter(t => t.status === "review");
    case "todo":   return T.filter(t => dstat(t) === "todo");
    case "soon":   return T.filter(t => t.status !== "done" && !isOverdue(t) && daysBetween(NOW, t.due) <= 2);
    case "ontime": return T.filter(isOnTimeDone);
    case "rework": return T.filter(t => t.reworkCount > 0);
    default: return T;
  }
}
function taskPopupKey(key) { openTaskPopup(POP_TITLE[key] || "Danh sách task", popList(key)); }
function openTaskPopup(title, list) {
  closeTaskPop();
  const rows = list.sort((a,b)=>D(a.due)-D(b.due)).map(t => `
    <tr class="border-b border-slate-50 hover:bg-slate-50"><td class="py-2.5 px-2"><a href="task-detail.html?id=${t.id}" class="font-semibold text-slate-700 hover:text-${AC}-600">${t.title}</a><div class="text-[10.5px] text-slate-400">${t.spec} · ${t.skill}</div></td><td class="px-2">${avatar(t.assignee)} <span class="text-[11px] ml-1">${t.assignee.split(" ").pop()}</span></td><td class="px-2">${badge(dstat(t))}</td><td class="px-2">${prio(t.prio)}</td><td class="px-2 w-24">${progressBar(t.pct)}<span class="text-[10px] text-slate-400">${t.pct}%</span></td><td class="px-2 text-slate-500 text-[11.5px]">${fmtDue(t.due)}</td></tr>`).join("");
  document.body.insertAdjacentHTML("beforeend", `<div id="taskPop" class="fixed inset-0 z-[60] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeTaskPop()">
    <div class="bg-white rounded-2xl w-full max-w-3xl max-h-[82vh] overflow-hidden flex flex-col shadow-2xl">
      <div class="px-5 py-3 border-b border-slate-200 flex items-center"><h3 class="font-bold text-[15px]">${title} <span class="text-slate-400 font-normal">· ${list.length}</span></h3><button onclick="closeTaskPop()" class="ml-auto text-slate-400 text-xl leading-none xclose">×</button></div>
      <div class="overflow-y-auto p-2">${list.length?`<table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b border-slate-100"><th class="py-2 px-2">Task</th><th class="px-2">Người làm</th><th class="px-2">Trạng thái</th><th class="px-2">Ưu tiên</th><th class="px-2">Tiến độ</th><th class="px-2">Hạn</th></tr></thead><tbody>${rows}</tbody></table>`:`<div class="p-10 text-center text-slate-400">Không có task nào.</div>`}</div>
    </div></div>`);
}
function closeTaskPop() { const el = document.getElementById("taskPop"); if (el) el.remove(); }

/* Thứ tự nguy cấp để sắp xếp: quá hạn → sắp hạn → đang làm → chờ nghiệm thu → chờ làm → hoàn thành */
function urgRank(t) { const s = dstat(t); if (s === "late") return 0; if (s !== "done" && daysBetween(NOW, t.due) <= 2) return 1; if (s === "doing") return 2; if (s === "review") return 3; if (s === "todo") return 4; return 5; }

/* Bộ lọc trạng thái chọn nhiều */
window.statusFilter = [];
function statusDropdown(fn) {
  return `<div class="relative inline-block">
    <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white flex items-center gap-1">Trạng thái<span id="stCount" class="text-${AC}-600 font-semibold"></span> </button>
    <div class="hidden absolute z-30 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg p-1.5 w-48">
      ${STATUS_KEYS.map(k => `<label class="flex items-center gap-2 px-2 py-1.5 text-[12.5px] rounded hover:bg-slate-50 cursor-pointer"><input type="checkbox" value="${k}" onchange="toggleStatus(this,'${fn}')" class="accent-${AC}-600"> ${STATUS[k][0]}</label>`).join("")}
    </div></div>`;
}
function toggleStatus(cb, fn) {
  const s = new Set(window.statusFilter); cb.checked ? s.add(cb.value) : s.delete(cb.value); window.statusFilter = [...s];
  const c = document.getElementById("stCount"); if (c) c.textContent = window.statusFilter.length ? ` (${window.statusFilter.length})` : "";
  if (window[fn]) window[fn]();
}
const passStatus = (t) => !window.statusFilter.length || window.statusFilter.includes(dstat(t));

/* ---------- MENU ---------- */
const MENU_BOSS = [["boss-dashboard.html","Dashboard team"],["dashboard.html","Dashboard cá nhân"],["task-list.html","Công việc của tôi"],["collab.html","Dự án phối hợp"],["calendar.html","Lịch công việc"],["ai-assistant.html","AI Assistant"],["leaves.html","Luồng phê duyệt"],["work-dna.html","Đánh giá nhân viên"],["resources.html","FPT Drive"],["profile.html","Hồ sơ cá nhân"],["permissions.html","Phân quyền & người dùng"],["admin-settings.html","Quản trị hệ thống"]];
const MENU_STAFF = [["dashboard.html","Dashboard cá nhân"],["task-list.html","Công việc của tôi"],["collab.html","Dự án phối hợp"],["calendar.html","Lịch làm việc"],["ai-assistant.html","AI Assistant"],["leaves.html","Luồng phê duyệt"],["work-dna.html","Đánh giá của tôi"],["resources.html","FPT Drive"],["profile.html","Hồ sơ cá nhân"]];

/* ---------- THÔNG BÁO suy ra từ luật ---------- */
function buildNotifs() {
  const list = [];
  TASKS.filter(isOverdue).forEach(t => list.push({ type:"late", title:`Quá hạn: ${t.title}`, body:`${t.assignee} · trễ ${Math.floor(daysBetween(t.due,NOW))} ngày`, link:`task-detail.html?id=${t.id}`, time:"Tự động", unread:true }));
  TASKS.filter(t => t.status!=="done" && !isOverdue(t) && daysBetween(NOW,t.due) <= 1).forEach(t => list.push({ type:"soon", title:`Sắp đến hạn: ${t.title}`, body:`${t.assignee} · hạn ${fmtDue(t.due)}`, link:`task-detail.html?id=${t.id}`, time:"Tự động", unread:true }));
  TASKS.filter(t => t.status==="review").forEach(t => list.push({ type:"assign", title:`Chờ nghiệm thu: ${t.title}`, body:`${t.assignee} đã nộp kết quả`, link:`task-detail.html?id=${t.id}`, time:"Tự động", unread:true }));
  LEAVES.filter(l => l.status==="pending").forEach(l => list.push({ type:"leave", title:`Chờ duyệt nghỉ: ${l.who}`, body:`${l.type} · ${l.from}→${l.to}`, link:"leaves.html", time:"Tự động", unread:false }));
  list.push({ type:"info", title:"Bản tin buổi sáng đã sẵn sàng", body:"", link:"boss-dashboard.html", time:"07:00", unread:false });
  list.push({ type:"mood", title:"Mood check cuối ngày", body:"Trả lời trước 18:00 nhé.", link:"mood-check.html", time:"Hôm qua 17:00", unread:false });
  return list;
}
const NDOT = { late:"bg-red-500", soon:"bg-amber-500", assign:"bg-indigo-500", info:"bg-slate-400", leave:"bg-emerald-500", mood:"bg-violet-500" };

/* =====================================================================
 *  SHELL
 * ===================================================================== */
let CHARTS = [];
function clearCharts() { CHARTS.forEach(c => { try { c.destroy(); } catch(e){} }); CHARTS = []; }
function renderShell(page, title, subtitle, actions = "") {
  clearCharts();
  CURRENT_PAGE = page;
  const menu = IS_BOSS ? MENU_BOSS : MENU_STAFF;
  const unread = buildNotifs().filter(n => n.unread).length;
  const scol = localStorage.getItem("pw_scol")==="1";
  const GROUPS = navGroups();
  const realPage = (location.hash.replace(/^#/,"").split("?")[0]) || page;
  const isTop = GROUPS.some(g=>g.items.some(i=>i[0]===realPage));
  document.body.className = "bg-slate-50 text-slate-800 antialiased";
  document.body.innerHTML = `
  <div class="flex min-h-screen">
    <aside id="sidebar" class="pw-side ${scol?"scol":""} shrink-0 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen">
      <div onclick="location.hash=IS_BOSS?'#boss-dashboard.html':'#dashboard.html'" class="px-4 pt-5 pb-3 flex items-center gap-2 cursor-pointer" title="Về trang chủ">
        <span class="w-8 h-8 rounded-[10px] grid place-items-center shrink-0" style="background:linear-gradient(120deg,#0064B1,#21B14B);box-shadow:0 6px 14px rgba(0,100,177,.32)"><svg viewBox="0 0 24 24" class="w-4 h-4" fill="white"><path d="M4 5h6v14H4zM12 5h8v6h-8z"/></svg></span>
        <span class="logo-text font-extrabold text-slate-800 tracking-tight text-[16px]">F<span class="text-${AC}-600">work</span></span>
      </div>
      <div class="mx-2.5 mb-2 p-2.5 rounded-xl bg-slate-50 flex items-center gap-2.5">
        ${meAvatar("w-9 h-9 shrink-0")}
        <div class="user-text leading-tight min-w-0 flex-1"><div class="text-[13px] font-semibold text-slate-800 truncate">${ME.name}</div><div class="text-[11px] text-slate-400 truncate">${ME.title}</div></div>
        <a href="profile.html" class="user-text text-slate-300 hover:text-slate-500 shrink-0"><svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>
      </div>
      <nav class="px-2 flex-1 overflow-y-auto py-1 space-y-1">
        ${GROUPS.map((grp,gi)=>{ if(grp.items.length===1){ const it=grp.items[0]; const act=it[0]===page; return `<a href="${it[0]}" class="nav-item flex items-center gap-2.5 px-2.5 py-2 rounded-lg ${act?"nav-active":"hover:bg-slate-50"}"><span class="nav-group-ic ${act?"":`text-${AC}-600`} shrink-0">${ic(grp.icon)}</span><span class="nav-text text-[12px] font-bold uppercase tracking-wide ${act?"":"text-slate-500"} flex-1">${it[1]}</span></a>`; } return `<details data-g="${gi}" ${window.OPEN_GROUPS&&window.OPEN_GROUPS[gi]?"open":""} class="nav-group">
          <summary onclick="navSummaryClick(event,${gi})" class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer hover:bg-slate-50">
            <span class="nav-group-ic text-${AC}-600 shrink-0">${ic(grp.icon)}</span>
            <span class="nav-text text-[12px] font-bold uppercase tracking-wide text-slate-500 flex-1">${grp.title}</span>
            <svg class="nav-chev nav-text w-3.5 h-3.5 text-slate-400 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 15l6-6 6 6"/></svg>
          </summary>
          <div class="mt-0.5 mb-1 space-y-0.5">${grp.items.map(([href,lb,icn])=>{const act=href===page;return `<a href="${href}" class="nav-item flex items-center gap-2.5 pl-4 pr-2.5 py-2 rounded-lg text-[13px] ${act?"nav-active":"text-slate-600"}"><span class="${act?"":"text-slate-400"} shrink-0">${ic(icn)}</span><span class="nav-text flex-1">${lb}</span>${href==="notifications.html"&&unread?`<span class="nav-text bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5">${unread}</span>`:""}</a>`;}).join("")}</div>
        </details>`; }).join("")}
      </nav>
      <div class="m-2.5 space-y-2 border-t border-slate-100 pt-2.5">
        <button onclick="toggleSidebar()" class="w-full text-[11.5px] font-semibold border border-slate-200 rounded-lg py-2 text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-1.5"><span class="text-[13px] leading-none">«</span><span class="side-btn-text">Thu gọn menu</span></button>
        <button onclick="switchRole()" class="w-full text-[11.5px] font-semibold border border-slate-200 rounded-lg py-2 text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-1.5"><span class="leading-none">⇄</span><span class="side-btn-text">${IS_BOSS?"Xem thử: Nhân viên":"Xem thử: Sếp"}</span></button>
        <button onclick="logout()" class="w-full text-[11.5px] font-semibold border border-red-200 text-red-600 rounded-lg py-2 hover:bg-red-50 flex items-center justify-center gap-1.5"><span class="leading-none">⎋</span><span class="side-btn-text">Đăng xuất</span></button>
      </div>
    </aside>
    <div class="flex-1 min-w-0">
      <header class="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200 px-6 py-3 flex items-center gap-3 relative">
        <span class="absolute top-0 left-0 right-0 h-[3px]" style="background:linear-gradient(90deg,#0064B1 0%,#EF7025 50%,#21B14B 100%)"></span>
        <button onclick="goBack()" title="Quay lại" class="shrink-0 w-9 h-9 grid place-items-center rounded-lg border border-slate-200 text-slate-500 hover:bg-${AC}-50 hover:text-${AC}-600 hover:border-${AC}-200 text-[17px] leading-none">‹</button>
        <div class="min-w-0"><h1 class="text-[17px] font-bold text-slate-900 truncate">${title}</h1>${subtitle?`<p class="text-xs text-slate-500 truncate">${subtitle}</p>`:""}</div>
        <div class="ml-auto hidden lg:block"><input placeholder="Tìm kiếm task, dự án, nhân sự…" class="w-60 text-[12.5px] border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${AC}-200"></div>
        <button onclick="openTaskModal()" class="bg-${AC}-600 text-white text-[12.5px] font-semibold px-3.5 py-2 rounded-lg shrink-0">Tạo task</button>
        ${actions}
        <button onclick="toggleChat()" class="text-[12.5px] font-semibold text-white bg-${AC}-600 hover:bg-${AC}-700 rounded-lg px-3.5 py-2 shrink-0 shadow-sm flex items-center gap-1.5">Tin nhắn <span class="bg-white text-${AC}-700 rounded-full px-1.5 text-[11px] font-bold">7</span></button>
        <button data-bell="1" onclick="toggleNotifDropdown(event)" title="Thông báo" class="relative shrink-0 w-9 h-9 grid place-items-center rounded-lg border border-slate-200 text-slate-500 hover:bg-${AC}-50 hover:text-${AC}-600 hover:border-${AC}-200 text-[16px] leading-none">🔔${unread?`<span class="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full px-1 min-w-[16px] text-center leading-[16px]">${unread}</span>`:""}</button>
      </header>
      <main class="p-6 w-full max-w-[1340px]">${
        ["resources.html","collab-detail.html","collab-new.html","ai-assistant.html"].includes(page)
        ? `<div id="content"></div>`
        : `<div id="mainGrid" class="grid grid-cols-1 gap-5 items-start"><div id="content" class="min-w-0"></div><aside id="sideCol" class="hidden sticky top-6 self-start">${page==="task-list.html" ? taskListSidePanel() : aiSidePanel()}</aside></div>`
      }</main>
    </div>
  </div>
  ${taskModalHTML()}${chatWidgetHTML()}`;
  mountChat();
}
function goBack(){
  if(window.NAV_STACK && window.NAV_STACK.length>1){
    window.NAV_STACK.pop();                       // bỏ trang hiện tại
    const prev=window.NAV_STACK[window.NAV_STACK.length-1];
    window.NAV_BACK=true; location.hash=prev;
  } else {
    location.hash = IS_BOSS ? "#boss-dashboard.html" : "#dashboard.html";
  }
}

/* ---------- MODAL TẠO TASK ---------- */
let TM_KIND="personal";
let TM_PARENT=null;
function tabBtnCls(active){ return `rounded-lg border px-3 py-2 text-left ${active?`border-${AC}-500 bg-${AC}-50 text-${AC}-700`:"border-slate-200 text-slate-600 hover:bg-slate-50"}`; }
function taskModalHTML() {
  return `<div id="taskModal" class="hidden fixed inset-0 z-50 bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeTaskModal()">
    <div class="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl">
      <div class="px-6 pt-5 pb-3 border-b border-slate-100 sticky top-0 bg-white z-10 flex items-start gap-2"><div class="flex-1"><h2 class="font-extrabold text-[17px] tracking-tight text-slate-900">Tạo công việc mới</h2><p class="text-[12px] text-slate-400 mt-0.5">Điền thông tin công việc — loại task tự xác định theo Người nhận / Người phê duyệt</p></div><button onclick="closeTaskModal()" title="Đóng" class="text-slate-400 text-2xl leading-none xclose">×</button></div>
      <div class="p-6">
      <div class="text-[11.5px] text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 mb-4">💡 Để trống <b>Người nhận</b> & <b>Người phê duyệt</b> → <b>Task cá nhân</b>. Chọn <b>Người nhận</b> → <b>Giao task</b>. Chọn <b>Người phê duyệt</b> → thêm bước <b>duyệt & nghiệm thu</b>.</div>
      <div id="tmParentNote" class="hidden text-[12px] bg-${AC}-50 border border-${AC}-200 text-${AC}-700 rounded-lg px-3 py-2 mb-3"></div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Tên task <span class="text-red-500">*</span></label><input id="tmTitle" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-${AC}-200 focus:border-${AC}-400"></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Chuyên môn <span class="text-red-500">*</span></label><select id="tmSpec" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] bg-white">${SPECIALTIES.map(s=>`<option>${s}</option>`).join("")}</select></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Ưu tiên</label><select class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] bg-white"><option>Cao</option><option selected>Trung bình</option><option>Thấp</option><option>Khẩn cấp</option></select></div>
      </div>
      <div class="grid md:grid-cols-3 gap-3 mb-3">
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Người nhận task <span class="text-slate-400 font-normal">(không bắt buộc)</span></label><select id="tmReceiver" onchange="loadHint()" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] bg-white"><option value="">— Tự làm (chính tôi) —</option>${USERS.filter(u=>u.name!==ME.name).map(u=>`<option>${u.name}</option>`).join("")}</select></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Người phê duyệt <span class="text-slate-400 font-normal">(không bắt buộc)</span></label><select id="tmApprover" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] bg-white"><option value="">— Không cần duyệt —</option>${USERS.filter(u=>u.role==="boss"||u.role==="leader").map(u=>`<option>${u.name}</option>`).join("")}</select></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Dự án <span class="text-slate-400 font-normal">(nếu có)</span></label><select id="tmProject" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] bg-white"><option value="">— Không thuộc dự án —</option>${PROJECT_NAMES.map(p=>`<option>${p}</option>`).join("")}</select></div>
      </div>
      <div class="grid md:grid-cols-2 gap-3 mb-3">
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Thời gian bắt đầu <span class="text-red-500">*</span></label><input id="tmStart" type="datetime-local" value="2026-06-08T09:00" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]"></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Deadline (đến hạn) <span class="text-red-500">*</span></label><input id="tmDue" type="datetime-local" value="2026-06-12T17:00" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]"></div>
      </div>
      <div class="mb-3"><label class="text-[11px] font-semibold text-slate-500 block mb-1">Mô tả công việc</label><textarea id="tmDesc" rows="3" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-${AC}-200 focus:border-${AC}-400" placeholder="Mô tả chi tiết yêu cầu, phạm vi, tiêu chí hoàn thành…"></textarea></div>
      <div class="mb-3"><label class="text-[11px] font-semibold text-slate-500 block mb-1">Đính kèm file / dữ liệu</label>
        <label class="flex items-center gap-3 border-2 border-dashed border-slate-200 rounded-xl px-4 py-3 cursor-pointer hover:border-${AC}-400 hover:bg-${AC}-50/40 transition">
          <span class="w-9 h-9 rounded-lg bg-${AC}-50 text-${AC}-600 grid place-items-center text-[16px]">📎</span>
          <div class="text-[12px]"><div class="font-semibold text-slate-700">Kéo thả hoặc bấm để chọn file</div><div class="text-slate-400 text-[11px]">Tài liệu, hình ảnh, bảng tính… (demo)</div></div>
          <input id="tmFiles" type="file" multiple class="hidden" onchange="tmFileList(this)">
        </label>
        <div id="tmFileList" class="flex flex-wrap gap-1.5 mt-2"></div>
      </div>
      <div class="mb-3"><label class="text-[11px] font-semibold text-slate-500 block mb-1">Người theo dõi <span class="text-slate-400 font-normal">(tùy chọn)</span></label><div id="tmFollowers" class="flex flex-wrap gap-1.5">${USERS.map(u=>`<button type="button" data-name="${u.name}" onclick="this.classList.toggle('ring-2');this.classList.toggle('ring-${AC}-400');this.classList.toggle('bg-${AC}-50')" class="tmFollower inline-flex items-center gap-1 border border-slate-200 rounded-full px-2.5 py-1 text-[11px]">${avatar(u.name)} ${u.name.split(" ").pop()}</button>`).join("")}</div></div>
      <div id="loadHint" class="hidden text-[12px] rounded-lg px-3 py-2 mb-2"></div>
      </div>
      <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/60 flex justify-end gap-2 sticky bottom-0"><button onclick="closeTaskModal()" class="border border-slate-200 bg-white text-slate-600 font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:bg-slate-100">Hủy</button><button onclick="createTaskMock()" class="bg-${AC}-600 hover:bg-${AC}-700 text-white font-semibold text-[13px] px-6 py-2.5 rounded-lg shadow-sm">＋ Tạo task</button></div>
    </div></div>`;
}
function tmFileList(input){ const box=document.getElementById("tmFileList"); if(!box)return; box.innerHTML=[...(input.files||[])].map(f=>`<span class="inline-flex items-center gap-1 bg-slate-100 rounded-full px-2.5 py-1 text-[11px] text-slate-600">📄 ${f.name}</span>`).join(""); }
function resetTaskForm(){ const r=document.getElementById("tmReceiver"); if(r) r.value=""; const a=document.getElementById("tmApprover"); if(a) a.value=""; loadHint(); }
function openTaskModal() { TM_PARENT=null; const n=document.getElementById("tmParentNote"); if(n) n.classList.add("hidden"); document.getElementById("taskModal").classList.remove("hidden"); const ti=document.getElementById("tmTitle"); if(ti) ti.value=""; resetTaskForm(); }
function closeTaskModal() { document.getElementById("taskModal").classList.add("hidden"); }
function loadHint() {
  const el = document.getElementById("loadHint"); if(!el) return;
  const sel = document.getElementById("tmReceiver");
  const who = sel ? sel.value : "";
  if(!who){ el.classList.add("hidden"); return; }
  const l = loadOf(who); el.classList.remove("hidden");
  if (l.overloaded) { el.className = "text-[12px] rounded-lg px-3 py-2 mb-2 bg-red-50 text-red-700 border border-red-200"; el.innerHTML = `⚠ <b>${who}</b> đang quá tải: ${l.wip} việc mở · tải ~${l.loadPct}% (${l.remainH}h còn lại). Cân nhắc người khác.`; }
  else { el.className = "text-[12px] rounded-lg px-3 py-2 mb-2 bg-emerald-50 text-emerald-700 border border-emerald-200"; el.innerHTML = `<b>${who}</b> còn dư địa: ${l.wip} việc mở · tải ~${l.loadPct}%.`; }
}
function createTaskMock() {
  const title = (document.getElementById("tmTitle").value||"").trim() || "Công việc mới";
  const spec = (document.getElementById("tmSpec")||{}).value || "Seo";
  const project = (document.getElementById("tmProject")||{}).value || "";
  const start = (document.getElementById("tmStart")||{}).value || "";
  const due = (document.getElementById("tmDue")||{}).value || "";
  const desc = (document.getElementById("tmDesc")||{}).value || "";
  const fol = [...document.querySelectorAll("#tmFollowers .tmFollower.ring-2")].map(b=>b.getAttribute("data-name"));
  const receiver=(document.getElementById("tmReceiver")||{}).value||"";
  let approver=(document.getElementById("tmApprover")||{}).value||"";
  let assignee=ME.name, giver=null, kind="personal";
  if(receiver){ kind="assigned"; assignee=receiver; giver=ME.name; }
  else if(approver){ kind="approval"; }
  if(!approver) approver=null;
  const id = Math.max(0,...TASKS.map(t=>t.id))+1;
  const nt = { id, title, spec, project, assignee, status:"todo", prio:"medium", pct:0, skill:spec, estimateH:4, reworkCount:0, createdAt:new Date(NOW).toISOString(), startedAt:(start||undefined), due:(due||new Date(NOW).toISOString()), desc, kind, approver, giver, followers:fol, blockedBy:[], related:[] };
  if(TM_PARENT){ nt.spawnedFrom=TM_PARENT; }
  TASKS.push(nt);
  const parent=TM_PARENT; TM_PARENT=null;
  const map={personal:"Task cá nhân",approval:"Task cần phê duyệt",assigned:"Giao task"};
  closeTaskModal();
  alert(`Đã tạo "${title}" — ${map[kind]}${parent?` · là task con của "${(taskById(parent)||{}).title}"`:""}. (demo)`);
  location.hash="#task-detail.html?id="+id;
}
function openSpawnModal(aId){
  const a=taskById(aId); if(!a) return;
  openTaskModal();
  TM_PARENT=aId;
  const rc=document.getElementById("tmReceiver"); if(rc) rc.value = a.kind==="assigned" ? a.assignee : "";
  const ap=document.getElementById("tmApprover"); if(ap) ap.value = a.approver || "";
  loadHint();
  const ti=document.getElementById("tmTitle"); if(ti) ti.value="Tiếp theo: "+a.title;
  const sp=document.getElementById("tmSpec"); if(sp) sp.value=a.spec;
  const pr=document.getElementById("tmProject"); if(pr && a.project) pr.value=a.project;
  const note=document.getElementById("tmParentNote"); if(note){ note.classList.remove("hidden"); note.innerHTML=`🔗 Đây là <b>task con</b> của: <b>${a.title}</b> — sẽ tự liên kết với task cha khi tạo.`; }
}

/* ---------- TIN NHẮN & PHỐI HỢP CÔNG VIỆC ---------- */
let CHATS = [
  {id:1,type:"dm",name:"Linh Trần",color:"emerald",muted:false,msgs:[{id:11,from:"Linh Trần",text:"Em gửi anh bản SEO Hà Nam v2 nhé",ts:"09:10"},{id:12,from:"__me__",text:"Ok em, để anh xem",ts:"09:12"}]},
  {id:2,type:"dm",name:"Nam Phạm",color:"orange",muted:false,msgs:[{id:21,from:"Nam Phạm",text:"Ngân sách Ads tháng 6 em đề xuất 15tr",ts:"08:40"},{id:22,from:"__me__",text:"Gửi đơn lên Luồng phê duyệt nhé",ts:"08:42"}]},
  {id:3,type:"group",name:"Nhóm ADS",color:"orange",desc:"Trao đổi chiến dịch quảng cáo",muted:false,members:["Nguyễn Văn Nam","Nam Phạm","Huy Lê"],admins:["Nguyễn Văn Nam"],perms:{add:"admin",poll:"all",meeting:"all"},msgs:[{id:31,from:"Huy Lê",text:"Banner Bắc Giang xong tối nay nhé cả nhà",ts:"10:02"},{id:32,from:"__me__",text:"Cả nhóm cố gắng nhé @All",ts:"10:05"}]},
  {id:4,type:"group",name:"Nhóm SEO",color:"violet",desc:"Tối ưu từ khóa & nội dung",muted:false,members:["Nguyễn Văn Nam","Linh Trần","Ánh Dương"],admins:["Linh Trần"],perms:{add:"all",poll:"all",meeting:"all"},msgs:[{id:41,from:"Ánh Dương",text:"Đã lên top 5 từ khóa tuyển sinh Bắc Ninh",ts:"11:20"}]},
];
let chatActive=0, chatReplyTo=null, chatSearchOn=false, MID=100, GS_TAB="info";
const cColors={emerald:"bg-emerald-600",orange:"bg-orange-500",violet:"bg-violet-600",slate:"bg-slate-500"};
function curChat(){ return CHATS[chatActive]; }
function isAdmin(c){ return c.type==="group" && (c.admins||[]).includes(ME.name); }
function nowHM(){ const d=new Date(); return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"); }
function chatAvatar(c,sz){ sz=sz||"w-8 h-8"; if(c.type==="group") return `<span class="${sz} rounded-xl grid place-items-center text-white text-[11px] font-bold ${cColors[c.color]||"bg-slate-500"} shrink-0">${c.name.replace("Nhóm ","").slice(0,2)}</span>`; return avatar(c.name); }
function msgLast(c){ const m=[...c.msgs].reverse().find(x=>!x.recalled&&x.kind!=="system"); if(!m)return ""; const who=m.from==="__me__"?"Bạn: ":(c.type==="group"?m.from.split(" ").pop()+": ":""); if(m.kind==="image")return who+"📷 Hình ảnh"; if(m.kind==="file")return who+"📎 "+(m.file&&m.file.name||"File"); if(m.kind==="poll")return who+"📊 "+m.poll.q; if(m.kind==="meeting")return who+"📅 "+m.meeting.title; return who+(m.text||"").replace(/<[^>]+>/g,""); }
function toggleChat(){ const p=document.getElementById("chatPanel"); if(!p)return; const ap=document.getElementById("aiPanel"); if(ap&&!ap.classList.contains("hidden"))toggleAIW(); p.classList.toggle("hidden"); if(!p.classList.contains("hidden")) mountChat(); }
function chatWidgetHTML(){
  return `<div id="chatPanel" class="hidden fixed top-14 right-4 z-50 w-[880px] max-w-[96vw] h-[582px] max-h-[88vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex overflow-hidden">
    <div class="w-[238px] border-r border-slate-200 flex flex-col">
      <div class="px-3 py-3 border-b border-slate-100 flex items-center gap-1.5"><b class="text-[13.5px] flex-1">Tin nhắn</b><button onclick="openCreateGroup()" title="Tạo nhóm mới" class="w-8 h-8 grid place-items-center rounded-lg border border-slate-200 text-${AC}-600 hover:bg-${AC}-50 hover:border-${AC}-300 text-${AC}-600">${ic('plus')}</button></div>
      <div class="px-2.5 py-2"><input id="convSearch" oninput="mountChat()" class="w-full bg-slate-100 rounded-lg px-3 py-1.5 text-[12px] focus:outline-none" placeholder="🔍 Tìm cuộc trò chuyện…"></div>
      <div id="chatList" class="flex-1 overflow-y-auto"></div>
    </div>
    <div class="flex-1 flex flex-col min-w-0">
      <div id="chatHead" class="px-4 py-2.5 border-b border-slate-100 flex items-center gap-2 min-h-[58px]"></div>
      <div id="chatSearchBar" class="hidden px-3 py-2 border-b border-slate-100 bg-slate-50"><input id="msgSearch" oninput="renderMsgs()" class="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-[12px] focus:outline-none" placeholder="🔍 Tìm trong hội thoại: nội dung, người gửi, file, ảnh…"></div>
      <div id="chatBody" class="flex-1 overflow-y-auto p-3 space-y-1 bg-slate-50 transition" ondragover="event.preventDefault();this.classList.add('ring-2','ring-${AC}-300')" ondragleave="this.classList.remove('ring-2','ring-${AC}-300')" ondrop="chatDrop(event)"></div>
      <div id="chatReply" class="hidden px-3 py-1.5 border-t border-slate-100 bg-amber-50 text-[11.5px] flex items-center gap-2"></div>
      <div id="chatComposer" class="border-t border-slate-100"></div>
    </div>
  </div>`;
}
function mountChat(){ const list=document.getElementById("chatList"); if(!list)return;
  const q=((document.getElementById("convSearch")||{}).value||"").toLowerCase();
  const items=CHATS.map((c,i)=>({c,i})).filter(o=>!q||o.c.name.toLowerCase().includes(q)||msgLast(o.c).toLowerCase().includes(q));
  list.innerHTML=items.map(o=>`<div onclick="chatOpen(${o.i})" class="px-3 py-2.5 flex items-center gap-2.5 cursor-pointer ${o.i===chatActive?`bg-${AC}-50`:"hover:bg-slate-50"}">${chatAvatar(o.c)}<div class="min-w-0 flex-1"><div class="text-[12.5px] font-semibold truncate flex items-center gap-1">${o.c.nick||o.c.name}${o.c.type==="group"?`<span class="text-[9px] text-slate-400 font-normal">· ${o.c.members.length}</span>`:""}</div><div class="text-[11px] text-slate-400 truncate">${msgLast(o.c)}</div></div>${o.c.muted?`<span class="text-slate-300 text-[11px]">🔕</span>`:""}</div>`).join("")||`<div class="p-4 text-center text-slate-400 text-[12px]">Không tìm thấy.</div>`;
  chatOpen(chatActive);
}
function chatOpen(i){ if(i<0||i>=CHATS.length)i=0; chatActive=i; chatReplyTo=null; chatSearchOn=false; const sb=document.getElementById("chatSearchBar"); if(sb)sb.classList.add("hidden"); const r=document.getElementById("chatReply"); if(r){r.classList.add("hidden");r.innerHTML="";} renderHead(); renderMsgs(); renderComposer(); }
function renderHead(){ const c=curChat(); const h=document.getElementById("chatHead"); if(!h)return;
  h.innerHTML=`${chatAvatar(c,"w-9 h-9")}<div class="min-w-0 flex-1"><div class="text-[13.5px] font-bold truncate">${c.nick||c.name}</div><div class="text-[11px] text-slate-400 truncate">${c.type==="group"?`${c.members.length} thành viên`:"đang hoạt động"}</div></div><button onclick="openChatSummary()" title="AI tóm tắt hội thoại" class="w-9 h-9 grid place-items-center rounded-lg hover:bg-slate-100 text-violet-600">${ic('spark')}</button><button onclick="toggleMsgSearch()" title="Tìm trong hội thoại" class="w-9 h-9 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-500">${ic('search')}</button>${c.type==="group"?`<button onclick="openThreadList()" title="Chủ đề / Luồng" class="w-9 h-9 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-500">${ic('thread')}</button><button onclick="openAddMember()" title="Thêm thành viên" class="w-9 h-9 grid place-items-center rounded-lg border border-slate-200 hover:bg-${AC}-50 hover:border-${AC}-300 text-${AC}-600">${ic('userplus')}</button>`:""}<button onclick="openConvSettings()" title="Cài đặt hội thoại" class="w-9 h-9 grid place-items-center rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-500">${ic('gear')}</button><button onclick="toggleChat()" title="Đóng tin nhắn" class="w-9 h-9 grid place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 text-2xl leading-none xclose ml-0.5">×</button>`;
}
function toggleMsgSearch(){ const sb=document.getElementById("chatSearchBar"); if(!sb)return; chatSearchOn=!chatSearchOn; sb.classList.toggle("hidden",!chatSearchOn); const i=document.getElementById("msgSearch"); if(chatSearchOn){ if(i)i.focus(); } else { if(i)i.value=""; renderMsgs(); } }
function fmtTag(t){ return (t||"").replace(/@([A-Za-zÀ-ỹ]+( [A-Za-zÀ-ỹ]+)?|All)/g,'<span class="text-'+AC+'-600 font-semibold bg-'+AC+'-50 rounded px-1">@$1</span>'); }
function renderMsgs(){ const c=curChat(); const body=document.getElementById("chatBody"); if(!body)return;
  const q=((document.getElementById("msgSearch")||{}).value||"").toLowerCase();
  let list=c.msgs; if(q) list=list.filter(m=>(((m.text||"")+" "+m.from+" "+((m.file||{}).name||"")+" "+((m.poll||{}).q||"")+" "+((m.meeting||{}).title||"")).toLowerCase().includes(q)));
  body.innerHTML=list.map(m=>msgHTML(m,c)).join("")||`<div class="text-center text-slate-300 text-[12px] py-6">Không có tin nhắn khớp.</div>`;
  body.style.background=c.wallpaper||"";
  body.scrollTop=body.scrollHeight;
}
function msgHTML(m,c){ const mine=m.from==="__me__";
  if(m.kind==="system") return `<div class="text-center text-[11px] text-slate-400 py-1.5">${m.text}</div>`;
  if(m.recalled) return `<div class="flex ${mine?"justify-end":""}"><div class="italic text-slate-400 text-[12px] px-3 py-1.5 border border-dashed border-slate-200 rounded-2xl">Tin nhắn đã được thu hồi</div></div>`;
  const reacts=m.reacts&&Object.keys(m.reacts).length?`<div class="flex gap-1 mt-0.5 ${mine?"justify-end":""}">${Object.entries(m.reacts).map(kv=>`<span class="bg-white border border-slate-200 rounded-full px-1.5 text-[11px]">${kv[0]} ${kv[1]}</span>`).join("")}</div>`:"";
  const card=(m.kind==="poll"||m.kind==="meeting");
  let inner="";
  if(m.kind==="image") inner=`<div class="rounded-xl overflow-hidden w-44 h-28 grid place-items-center text-white text-3xl" style="background:linear-gradient(135deg,#1E7ABF,#7C3AED)">🖼️</div><div class="text-[10px] ${mine?"text-white/70":"text-slate-400"} mt-0.5">${m.img||"anh.png"}</div>`;
  else if(m.kind==="file") inner=`<div class="flex items-center gap-2"><span class="text-2xl">📄</span><div class="min-w-0"><div class="font-semibold text-[12px] truncate">${m.file.name}</div><div class="text-[10.5px] ${mine?"text-white/70":"text-slate-400"}">${m.file.size} · ${mine?"Bạn":m.from} · ${m.ts}</div></div><button onclick="alert('Tải xuống ${m.file.name} (demo)')" class="ml-1 text-[11px] font-semibold ${mine?"text-white underline":'text-'+AC+'-600'}">Tải</button></div>`;
  else if(m.kind==="poll") inner=pollHTML(m,c);
  else if(m.kind==="meeting") inner=meetHTML(m);
  else inner=`<div>${fmtTag(m.text)}</div>${m.edited?`<span class="text-[9.5px] ${mine?"text-white/60":"text-slate-400"}">(đã sửa)</span>`:""}`;
  const reply=m.reply?`<div class="text-[10.5px] ${mine?"bg-white/15 text-white/80":"bg-slate-100 text-slate-500"} rounded-lg px-2 py-1 mb-1 truncate">↩ ${m.reply}</div>`:"";
  const sender=(!mine&&c.type==="group")?`<div class="text-[10.5px] font-semibold text-${AC}-600 mb-0.5">${m.from}</div>`:"";
  const bubble=card?"bg-white border border-slate-200 text-slate-700":(mine?`bg-${AC}-600 text-white`:"bg-white border border-slate-200");
  const timeCls=(mine&&!card)?"text-white/60":"text-slate-400";
  const threadChip=(m.thread&&m.thread.length)?`<button onclick="openThread(${m.id})" class="text-[10.5px] text-${AC}-600 font-semibold mt-0.5 ${mine?"block ml-auto":""}">🧵 ${m.thread.length} trả lời trong luồng</button>`:"";
  const taskSuggest="";
  const actions=`<div class="msg-act hidden group-hover:flex items-center gap-1 ${mine?"order-first mr-1":"ml-1"}"><button onclick="setReply(${m.id})" title="Trả lời" class="w-6 h-6 grid place-items-center rounded bg-white border border-slate-200 text-slate-500">${ic('reply','w-3.5 h-3.5')}</button><button onclick="reactPick(${m.id})" title="Cảm xúc" class="w-6 h-6 grid place-items-center rounded bg-white border border-slate-200 text-slate-500">${ic('smile','w-3.5 h-3.5')}</button><button onclick="openThread(${m.id})" title="Trả lời theo luồng" class="w-6 h-6 grid place-items-center rounded bg-white border border-slate-200 text-slate-500">${ic('thread','w-3.5 h-3.5')}</button>${mine&&m.kind==="text"?`<button onclick="editMsg(${m.id})" title="Sửa" class="w-6 h-6 grid place-items-center rounded bg-white border border-slate-200 text-slate-500">${ic('edit','w-3.5 h-3.5')}</button>`:""}${mine?`<button onclick="recallMsg(${m.id})" title="Thu hồi" class="w-6 h-6 grid place-items-center rounded bg-white border border-slate-200 text-red-500">${ic('trash','w-3.5 h-3.5')}</button>`:""}</div>`;
  return `<div class="group flex items-center ${mine?"justify-end":"justify-start"}"><div class="max-w-[80%]">${sender}<div class="rounded-2xl px-3 py-2 text-[12.5px] ${bubble}">${reply}${inner}<div class="text-[9.5px] ${timeCls} mt-0.5 ${mine?"text-right":""}">${m.ts||""}</div></div>${reacts}${threadChip}${taskSuggest}</div>${actions}</div>`;
}
function pollHTML(m,c){ const p=m.poll; const total=p.opts.reduce((a,o)=>a+o.votes.length,0); const admin=isAdmin(c);
  return `<div class="w-56"><div class="font-bold text-[12.5px] mb-1.5">📊 ${p.q}</div>${p.opts.map((o,idx)=>{const pct=total?Math.round(o.votes.length/total*100):0; const voted=o.votes.includes(ME.name); return `<button ${p.locked?"disabled":""} onclick="votePoll(${m.id},${idx})" class="w-full text-left mb-1.5 relative border ${voted?`border-${AC}-400`:"border-slate-200"} rounded-lg px-2 py-1.5 text-[11.5px] overflow-hidden block"><div class="absolute inset-0 bg-${AC}-50" style="width:${pct}%"></div><div class="relative flex items-center justify-between"><span>${voted?"●":"○"} ${o.t}</span><span class="text-slate-500">${pct}%</span></div></button>`;}).join("")}<div class="text-[10px] text-slate-400">${total} lượt vote${p.locked?" · đã khóa":""}</div>${admin?`<div class="flex gap-3 mt-1">${total?`<button onclick="pollWho(${m.id})" class="text-[10.5px] text-${AC}-600 font-semibold">Ai đã vote</button>`:""}<button onclick="lockPoll(${m.id})" class="text-[10.5px] text-slate-500 font-semibold">${p.locked?"Mở vote":"Khóa vote"}</button></div>`:""}</div>`;
}
function meetHTML(m){ const t=m.meeting; const r=t.rsvp||{};
  return `<div class="w-56"><div class="font-bold text-[12.5px] mb-0.5">📅 ${t.title}</div><div class="text-[11.5px] text-slate-500">${t.time} · ${t.date}</div><div class="flex gap-1.5 mt-2">${[["yes","Tham gia","emerald"],["no","Từ chối","red"],["maybe","Có thể","amber"]].map(o=>`<button onclick="meetRsvp(${m.id},'${o[0]}')" class="flex-1 text-[10.5px] font-semibold rounded-lg py-1 border ${r[ME.name]===o[0]?`bg-${o[2]}-100 text-${o[2]}-700 border-${o[2]}-300`:"border-slate-200 text-slate-500"}">${o[1]}</button>`).join("")}</div><div class="text-[10px] text-slate-400 mt-1">${Object.values(r).filter(x=>x==="yes").length} tham gia</div></div>`;
}
function renderComposer(){ const c=curChat(); const el=document.getElementById("chatComposer"); if(!el)return;
  const canPoll=c.type==="dm"||(c.perms&&c.perms.poll==="all")||isAdmin(c);
  const canMeet=c.type==="dm"||(c.perms&&c.perms.meeting==="all")||isAdmin(c);
  el.innerHTML=`<div class="flex items-center gap-1 px-2.5 pt-2"><button onclick="toggleEmoji()" title="Emoji" class="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-600">${ic('smile')}</button><button onclick="addImage()" title="Gửi ảnh" class="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-600">${ic('image')}</button><button onclick="addFile()" title="Gửi file" class="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-600">${ic('clip2')}</button>${c.type==="group"?`<button onclick="toggleMention()" title="Nhắc tên (@)" class="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 text-${AC}-600">${ic('at')}</button>`:""}${canPoll?`<button onclick="openPollModal()" title="Tạo bình chọn" class="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-600">${ic('chart')}</button>`:""}${canMeet?`<button onclick="openMeetModalChat()" title="Tạo lịch hẹn" class="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-600">${ic('cal')}</button>`:""}<button onclick="chatAssign()" title="Giao task trong hội thoại" class="ml-auto text-[11px] font-semibold border border-${AC}-300 text-${AC}-700 rounded-full px-2.5 h-7 hover:bg-${AC}-50">＋ Giao task</button></div>
  <div id="emojiBar" class="hidden flex flex-wrap gap-1 px-2.5 py-1">${"😀 😄 😁 😂 🥰 😍 😎 😉 🙂 😢 😡 👍 ❤️ 🔥 🎉 ✅ 🙏 👏".split(" ").map(e=>`<button onclick="insertEmoji('${e}')" class="text-lg hover:scale-110 transition">${e}</button>`).join("")}</div>
  <div id="mentionBar" class="hidden flex flex-wrap gap-1 px-2.5 py-1">${(c.members||[]).filter(n=>n!==ME.name).map(n=>`<button onclick="insertMention('${n}')" class="text-[11px] bg-slate-100 hover:bg-slate-200 rounded-full px-2 py-0.5">@${n.split(" ").pop()}</button>`).join("")}${c.type==="group"?`<button onclick="insertMention('All')" class="text-[11px] bg-${AC}-100 text-${AC}-700 rounded-full px-2 py-0.5">@All</button>`:""}</div>
  <div class="p-2.5 flex gap-2"><input id="chatInput" onkeydown="if(event.key==='Enter')chatSend()" onpaste="chatPaste(event)" class="flex-1 border border-slate-200 rounded-full px-3.5 py-2 text-[12.5px] focus:outline-none" placeholder="Nhập tin nhắn…  (Ctrl+V để dán ảnh)"><button onclick="chatSend()" class="bg-${AC}-600 text-white px-4 h-9 rounded-full text-[11px] font-semibold">Gửi</button></div>`;
}
function pushMsg(m){ const c=curChat(); m.id=++MID; if(!m.ts)m.ts=nowHM(); c.msgs.push(m); renderMsgs(); }
function chatSend(){ const inp=document.getElementById("chatInput"); if(!inp)return; const v=inp.value.trim(); if(!v)return; pushMsg({from:"__me__",text:v,reply:chatReplyTo}); inp.value=""; clearReply(); }
function setReply(id){ const m=curChat().msgs.find(x=>x.id===id); if(!m)return; const snip=(m.from==="__me__"?"Bạn":m.from)+": "+(m.text?m.text.replace(/<[^>]+>/g,""):(m.kind==="image"?"Hình ảnh":m.kind==="file"?m.file.name:m.kind==="poll"?m.poll.q:m.kind==="meeting"?m.meeting.title:"")); chatReplyTo=snip; const r=document.getElementById("chatReply"); r.classList.remove("hidden"); r.innerHTML=`<span class="flex-1 truncate">↩ ${snip}</span><button onclick="clearReply()" class="text-slate-400 text-base leading-none">×</button>`; const i=document.getElementById("chatInput"); if(i)i.focus(); }
function clearReply(){ chatReplyTo=null; const r=document.getElementById("chatReply"); if(r){r.classList.add("hidden");r.innerHTML="";} }
function toggleEmoji(){ const e=document.getElementById("emojiBar"); if(e)e.classList.toggle("hidden"); }
function insertEmoji(e){ const i=document.getElementById("chatInput"); if(i){i.value+=e; i.focus();} }
function toggleMention(){ const e=document.getElementById("mentionBar"); if(e)e.classList.toggle("hidden"); }
function insertMention(n){ const i=document.getElementById("chatInput"); if(i){ i.value+=(i.value&&!i.value.endsWith(" ")?" ":"")+"@"+n+" "; i.focus(); } }
function pickFiles(accept,cb){ const inp=document.createElement("input"); inp.type="file"; inp.multiple=true; if(accept)inp.accept=accept; inp.onchange=()=>cb([...inp.files]); inp.click(); }
function addImage(){ pickFiles("image/*",fs=>{ if(!fs.length){ pushMsg({from:"__me__",kind:"image",img:"anh.png"}); return; } fs.forEach(f=>pushMsg({from:"__me__",kind:"image",img:f.name})); }); }
function addFile(){ pickFiles("",fs=>{ if(!fs.length)return; fs.forEach(f=>pushMsg({from:"__me__",kind:"file",file:{name:f.name,size:Math.max(1,Math.round((f.size||100000)/1024))+" KB"}})); }); }
function chatPaste(e){ const items=(e.clipboardData||{}).items||[]; for(const it of items){ if(it.type&&it.type.indexOf("image")===0){ e.preventDefault(); pushMsg({from:"__me__",kind:"image",img:"anh_dan.png"}); return; } } }
function chatDrop(e){ e.preventDefault(); const b=document.getElementById("chatBody"); if(b)b.classList.remove("ring-2","ring-"+AC+"-300"); const fs=(e.dataTransfer&&e.dataTransfer.files)||[]; if(fs.length){ for(const f of fs){ const isImg=(f.type||"").indexOf("image")===0; pushMsg(isImg?{from:"__me__",kind:"image",img:f.name}:{from:"__me__",kind:"file",file:{name:f.name,size:Math.max(1,Math.round((f.size||100000)/1024))+" KB"}}); } } else { pushMsg({from:"__me__",kind:"image",img:"keo_tha.png"}); } }
function reactPick(id){ const m=curChat().msgs.find(x=>x.id===id); if(!m)return; const e=prompt("Thả cảm xúc (👍 ❤️ 😂 😮 😢 🙏):","👍"); if(!e)return; m.reacts=m.reacts||{}; m.reacts[e]=(m.reacts[e]||0)+1; renderMsgs(); }
function editMsg(id){ const m=curChat().msgs.find(x=>x.id===id); if(!m||m.from!=="__me__")return; const v=prompt("Sửa tin nhắn:",m.text); if(v==null)return; m.text=v; m.edited=true; renderMsgs(); }
function recallMsg(id){ const m=curChat().msgs.find(x=>x.id===id); if(!m||m.from!=="__me__")return; if(!confirm("Thu hồi tin nhắn này?"))return; m.recalled=true; renderMsgs(); }
function chatModal(html,maxw){ closeChatModal(); document.body.insertAdjacentHTML("beforeend",`<div id="chatModal" class="fixed inset-0 z-[80] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeChatModal()"><div class="bg-white rounded-2xl w-full ${maxw||"max-w-sm"} shadow-2xl p-5 max-h-[88vh] overflow-y-auto">${html}</div></div>`); }
function closeChatModal(){ const e=document.getElementById("chatModal"); if(e)e.remove(); }
function openPollModal(){ chatModal(`<h3 class="font-bold text-[15px] mb-3">Tạo bình chọn</h3><input id="pollQ" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] mb-2" placeholder="Câu hỏi (vd: Chọn ngày Kickoff)"><div id="pollOpts">${[0,1].map(i=>`<input class="poll-opt w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] mb-1.5" placeholder="Lựa chọn ${i+1}">`).join("")}</div><button onclick="addPollOpt()" class="text-[12px] text-${AC}-600 font-semibold mb-3">＋ Thêm lựa chọn</button><div class="flex justify-end gap-2"><button onclick="closeChatModal()" class="border border-slate-200 rounded-lg px-4 py-2 text-[12.5px]">Hủy</button><button onclick="createPoll()" class="bg-${AC}-600 text-white rounded-lg px-4 py-2 text-[12.5px] font-semibold">Tạo</button></div>`); }
function addPollOpt(){ const box=document.getElementById("pollOpts"); const n=box.querySelectorAll(".poll-opt").length+1; box.insertAdjacentHTML("beforeend",`<input class="poll-opt w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] mb-1.5" placeholder="Lựa chọn ${n}">`); }
function createPoll(){ const q=(document.getElementById("pollQ").value||"").trim(); const opts=[...document.querySelectorAll(".poll-opt")].map(i=>i.value.trim()).filter(Boolean); if(!q||opts.length<2){ alert("Nhập câu hỏi và ít nhất 2 lựa chọn."); return; } closeChatModal(); pushMsg({from:"__me__",kind:"poll",poll:{q,opts:opts.map(t=>({t,votes:[]})),locked:false}}); }
function votePoll(id,idx){ const m=curChat().msgs.find(x=>x.id===id); if(!m||m.poll.locked)return; m.poll.opts.forEach(o=>{const k=o.votes.indexOf(ME.name); if(k>=0)o.votes.splice(k,1);}); m.poll.opts[idx].votes.push(ME.name); renderMsgs(); }
function lockPoll(id){ const m=curChat().msgs.find(x=>x.id===id); if(m){m.poll.locked=!m.poll.locked; renderMsgs();} }
function pollWho(id){ const m=curChat().msgs.find(x=>x.id===id); if(!m)return; alert("Kết quả bình chọn:\n"+m.poll.opts.map(o=>`• ${o.t}: ${o.votes.length} (${o.votes.map(v=>v.split(" ").pop()).join(", ")||"—"})`).join("\n")); }
function openMeetModalChat(){ chatModal(`<h3 class="font-bold text-[15px] mb-3">Tạo lịch hẹn trong chat</h3><input id="mtTitle" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] mb-2" placeholder="Tiêu đề (vd: Cuộc họp tối ưu Ads)"><div class="grid grid-cols-2 gap-2 mb-2"><input id="mtDate" type="date" value="2026-06-20" class="border border-slate-200 rounded-lg px-3 py-2 text-[13px]"><input id="mtTime" value="15:00 - 16:00" class="border border-slate-200 rounded-lg px-3 py-2 text-[13px]"></div><label class="flex items-center gap-2 text-[12px] text-slate-500 mb-1"><input id="mtSync" type="checkbox" checked class="accent-${AC}-600"> Đồng bộ Lịch công việc & nhắc trước 30 phút</label><div class="flex justify-end gap-2 mt-3"><button onclick="closeChatModal()" class="border border-slate-200 rounded-lg px-4 py-2 text-[12.5px]">Hủy</button><button onclick="createMeeting()" class="bg-${AC}-600 text-white rounded-lg px-4 py-2 text-[12.5px] font-semibold">Tạo</button></div>`); }
function createMeeting(){ const title=(document.getElementById("mtTitle").value||"").trim()||"Cuộc họp"; const date=document.getElementById("mtDate").value.split("-").reverse().join("/"); const time=document.getElementById("mtTime").value; const sync=document.getElementById("mtSync").checked; closeChatModal(); pushMsg({from:"__me__",kind:"meeting",meeting:{title,date,time,rsvp:{}}}); if(sync) pushMsg({from:"__me__",kind:"system",text:"📅 Đã thêm vào Lịch công việc · sẽ nhắc trước 30 phút"}); }
function meetRsvp(id,ans){ const m=curChat().msgs.find(x=>x.id===id); if(!m)return; m.meeting.rsvp=m.meeting.rsvp||{}; m.meeting.rsvp[ME.name]=ans; renderMsgs(); }
function openCreateGroup(){ chatModal(`<h3 class="font-bold text-[15px] mb-3">Tạo nhóm mới</h3><input id="grpName" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] mb-2" placeholder="Tên nhóm (vd: Nhóm Tuyển sinh)"><div class="text-[11.5px] font-semibold text-slate-500 mb-1">Thêm thành viên</div><div class="flex flex-wrap gap-1.5 mb-3 max-h-32 overflow-y-auto">${USERS.filter(u=>u.name!==ME.name).map(u=>`<label class="flex items-center gap-1.5 border border-slate-200 rounded-full px-2.5 py-1 text-[12px] cursor-pointer"><input type="checkbox" class="grp-mem accent-${AC}-600" value="${u.name}">${u.name.split(" ").pop()}</label>`).join("")}</div><div class="flex items-center justify-between"><button onclick="inviteLink()" class="text-[11.5px] text-${AC}-600 font-semibold">🔗 Mời bằng link</button><div class="flex gap-2"><button onclick="closeChatModal()" class="border border-slate-200 rounded-lg px-4 py-2 text-[12.5px]">Hủy</button><button onclick="createGroup()" class="bg-${AC}-600 text-white rounded-lg px-4 py-2 text-[12.5px] font-semibold">Tạo nhóm</button></div></div>`); }
function inviteLink(){ prompt("Sao chép link mời (demo):","https://prowork.fpt.edu.vn/invite/"+Math.random().toString(36).slice(2,10)); }
function createGroup(){ const name=(document.getElementById("grpName").value||"").trim()||"Nhóm mới"; const mems=[...document.querySelectorAll(".grp-mem:checked")].map(c=>c.value); const cols=["emerald","orange","violet","slate"]; const c={id:Date.now(),type:"group",name,color:cols[Math.floor(Math.random()*4)],desc:"",muted:false,members:[ME.name,...mems],admins:[ME.name],perms:{add:"all",poll:"all",meeting:"all"},msgs:[{id:++MID,from:"__me__",kind:"system",text:`Đã tạo nhóm "${name}" · ${mems.length+1} thành viên`,ts:nowHM()}]}; CHATS.unshift(c); closeChatModal(); chatActive=0; mountChat(); }
function openAddMember(){ const c=curChat(); if(c.type!=="group")return; const cand=USERS.map(u=>u.name).filter(n=>!c.members.includes(n)); if(!cand.length){alert("Tất cả nhân sự đã ở trong nhóm.");return;} chatModal(`<h3 class="font-bold text-[15px] mb-3">Thêm thành viên — ${c.name}</h3><div class="flex flex-wrap gap-1.5 mb-3">${cand.map(n=>`<label class="flex items-center gap-1.5 border border-slate-200 rounded-full px-2.5 py-1 text-[12px] cursor-pointer"><input type="checkbox" class="add-mem accent-${AC}-600" value="${n}">${n.split(" ").pop()}</label>`).join("")}</div><div class="flex justify-end gap-2"><button onclick="closeChatModal()" class="border border-slate-200 rounded-lg px-4 py-2 text-[12.5px]">Hủy</button><button onclick="doAddMember()" class="bg-${AC}-600 text-white rounded-lg px-4 py-2 text-[12.5px] font-semibold">Thêm</button></div>`); }
function doAddMember(){ const c=curChat(); const adds=[...document.querySelectorAll(".add-mem:checked")].map(x=>x.value); adds.forEach(n=>{ if(!c.members.includes(n))c.members.push(n); }); if(adds.length) c.msgs.push({id:++MID,from:"__me__",kind:"system",text:`Đã thêm ${adds.map(a=>a.split(" ").pop()).join(", ")} vào nhóm`,ts:nowHM()}); closeChatModal(); chatOpen(chatActive); }
function openGroupSettings(){ GS_TAB="info"; renderGroupSettings(); }
function convLinks(c){ const out=[]; c.msgs.forEach(m=>{ const t=m.text||""; const mm=t.match(/https?:\/\/[^\s<]+/g); if(mm)out.push(...mm); }); return out; }
function chatMediaHTML(c){ const imgs=c.msgs.filter(m=>m.kind==="image"); const files=c.msgs.filter(m=>m.kind==="file"); const links=convLinks(c); return `<div class="mb-3"><div class="text-[11.5px] font-semibold text-slate-500 mb-1.5">Ảnh, File & Link</div><div class="grid grid-cols-3 gap-2 text-center mb-2"><div class="border border-slate-200 rounded-lg py-1.5"><div class="text-[17px] font-extrabold text-${AC}-600">${imgs.length}</div><div class="text-[10px] text-slate-400">Ảnh</div></div><div class="border border-slate-200 rounded-lg py-1.5"><div class="text-[17px] font-extrabold text-${AC}-600">${files.length}</div><div class="text-[10px] text-slate-400">File</div></div><div class="border border-slate-200 rounded-lg py-1.5"><div class="text-[17px] font-extrabold text-${AC}-600">${links.length}</div><div class="text-[10px] text-slate-400">Link</div></div></div>${imgs.length?`<div class="flex gap-1.5 flex-wrap mb-2">${imgs.slice(-6).map(()=>`<div class="w-11 h-11 rounded-lg grid place-items-center text-white text-lg" style="background:linear-gradient(135deg,#1E7ABF,#7C3AED)">🖼️</div>`).join("")}</div>`:""}${files.length?`<div class="space-y-1 mb-1">${files.slice(-4).map(m=>`<div class="flex items-center gap-2 text-[12px]"><span>📄</span><span class="flex-1 truncate">${m.file.name}</span><button onclick="alert('Tải ${m.file.name} (demo)')" class="text-${AC}-600 text-[11px] font-semibold">Tải</button></div>`).join("")}</div>`:""}${links.length?`<div class="space-y-1">${links.slice(-4).map(l=>`<div class="text-[12px] truncate"><a href="${l}" target="_blank" class="text-${AC}-600 underline">${l}</a></div>`).join("")}</div>`:(!imgs.length&&!files.length?`<div class="text-[11.5px] text-slate-400">Chưa có ảnh, file hay link nào.</div>`:"")}</div>`; }
function chatWallpaperHTML(){ return `<div class="mb-3"><div class="text-[11.5px] font-semibold text-slate-500 mb-1.5">Hình nền tin nhắn</div><div class="flex gap-1.5 flex-wrap">${["#F1F5F9","#E6F0F8","#FCE7F3","#ECFDF5","#FEF3C7","#EDE9FE"].map(col=>`<button onclick="setWallpaper('${col}')" class="w-7 h-7 rounded-lg border border-slate-200" style="background:${col}" title="Đổi nền"></button>`).join("")}<button onclick="setWallpaper('')" class="px-2 h-7 rounded-lg border border-slate-200 text-[10.5px] text-slate-400">Mặc định</button></div></div>`; }
function dmNickHTML(c){ return `<div class="mb-3"><div class="text-[11.5px] font-semibold text-slate-500 mb-1">Biệt danh người dùng</div><div class="flex gap-2"><input id="nickInput" value="${c.nick||""}" placeholder="${c.name}" class="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-[13px]"><button onclick="saveNick()" class="bg-${AC}-600 text-white rounded-lg px-3 text-[12px] font-semibold">Lưu</button></div></div>`; }
function setWallpaper(col){ curChat().wallpaper=col; const b=document.getElementById("chatBody"); if(b)b.style.background=col||""; }
function saveNick(){ const v=(document.getElementById("nickInput").value||"").trim(); curChat().nick=v; closeChatModal(); renderHead(); mountChat(); }
function openConvSettings(){ const c=curChat(); if(c.type==="group") openGroupSettings(); else openDmSettings(); }
function openDmSettings(){ const c=curChat(); chatModal(`<div class="flex items-center mb-3"><h3 class="font-bold text-[15px] flex-1">Cài đặt trò chuyện</h3><button onclick="closeChatModal()" class="text-slate-400 text-xl leading-none xclose">×</button></div>
  <div class="flex items-center gap-3 mb-3">${avatar(c.name)}<div><div class="text-[14px] font-bold">${c.name}</div><div class="text-[11px] text-slate-400">Trò chuyện 1-1 · Nhóm ${teamOf(c.name)}</div></div></div>
  <div class="border border-slate-200 rounded-xl divide-y divide-slate-50 mb-3 text-[13px]">
    <button onclick="closeChatModal();toggleMsgSearch()" class="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50 text-left">${ic("search","w-4 h-4 text-slate-400")}<span>Tìm trong hội thoại</span></button>
    <button onclick="closeChatModal();openChatSummary()" class="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50 text-left">${ic("spark","w-4 h-4 text-violet-500")}<span>AI tóm tắt hội thoại</span></button>
    <a href="work-dna.html" onclick="closeChatModal();toggleChat()" class="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50">${ic("user","w-4 h-4 text-slate-400")}<span>Xem hồ sơ & đánh giá</span></a>
  </div>
  ${chatMediaHTML(c)}${chatWallpaperHTML()}${dmNickHTML(c)}<label class="flex items-center justify-between py-2.5 border-b border-slate-50 text-[13px]"><span>Tắt thông báo</span><input type="checkbox" ${c.muted?"checked":""} onchange="curChat().muted=this.checked;mountChat()" class="w-9 h-5 accent-${AC}-600"></label>
  <label class="flex items-center justify-between py-2.5 text-[13px]"><span>Ghim hội thoại lên đầu</span><input type="checkbox" class="w-9 h-5 accent-${AC}-600"></label>
  <button onclick="if(confirm('Xóa toàn bộ lịch sử trò chuyện này?')){curChat().msgs=[];closeChatModal();renderMsgs();mountChat();}" class="mt-3 text-[12px] text-red-500 font-semibold">Xóa lịch sử trò chuyện</button>`,"max-w-sm"); }
function setGsTab(t){ GS_TAB=t; renderGroupSettings(); }
function renderGroupSettings(){ const c=curChat(); const admin=isAdmin(c); const tabs=[["info","Thông tin"],["members","Thành viên"],["notif","Thông báo"],["perm","Quyền"]]; let b="";
  if(GS_TAB==="info"){ b=`<div class="space-y-2.5"><div class="flex items-center gap-3">${chatAvatar(c,"w-14 h-14")}<button ${admin?"":"disabled"} onclick="alert('Đổi avatar nhóm (demo)')" class="text-[12px] text-${AC}-600 font-semibold ${admin?"":"opacity-40"}">Đổi avatar</button></div><div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Tên nhóm</label><input id="gsName" ${admin?"":"disabled"} value="${c.name}" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] ${admin?"":"bg-slate-50"}"></div><div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Mô tả</label><input id="gsDesc" ${admin?"":"disabled"} value="${c.desc||""}" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] ${admin?"":"bg-slate-50"}"></div>${admin?`<button onclick="saveGroupInfo()" class="bg-${AC}-600 text-white rounded-lg px-4 py-2 text-[12.5px] font-semibold">Lưu thông tin</button>`:`<div class="text-[11px] text-slate-400">Chỉ quản trị viên mới chỉnh sửa được.</div>`}${chatMediaHTML(c)}${chatWallpaperHTML()}</div>`; }
  else if(GS_TAB==="members"){ b=`<div class="text-[11.5px] text-slate-400 mb-2">${c.members.length} thành viên</div><div class="divide-y divide-slate-50 max-h-72 overflow-y-auto">${c.members.map(n=>{const isAd=c.admins.includes(n); const me=n===ME.name; return `<div class="flex items-center gap-2.5 py-2">${avatar(n)}<div class="flex-1 min-w-0"><div class="text-[13px] font-semibold truncate">${n}${me?" (bạn)":""}</div><div class="text-[10.5px] text-slate-400">Nhóm ${teamOf(n)}</div></div>${isAd?`<span class="text-[9.5px] font-bold bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5">Quản trị</span>`:`<span class="text-[9.5px] font-bold bg-slate-100 text-slate-500 rounded-full px-2 py-0.5">Thành viên</span>`}${admin&&!me?`<div class="flex gap-2 ml-1">${!isAd?`<button onclick="makeAdmin('${n}')" class="text-[10.5px] text-${AC}-600 font-semibold">Cấp Admin</button>`:""}<button onclick="kickMember('${n}')" class="text-[10.5px] text-red-500 font-semibold">Kick</button></div>`:""}</div>`;}).join("")}</div>${admin?`<button onclick="openAddMember()" class="mt-2 text-[12px] text-${AC}-600 font-semibold">＋ Thêm thành viên</button>`:""}`; }
  else if(GS_TAB==="notif"){ b=`<label class="flex items-center justify-between py-2.5 border-b border-slate-50 text-[13px]"><span>Tắt thông báo nhóm</span><input type="checkbox" ${c.muted?"checked":""} onchange="curChat().muted=this.checked" class="w-9 h-5 accent-${AC}-600"></label><label class="flex items-center justify-between py-2.5 text-[13px]"><span>Chỉ nhận thông báo khi được nhắc (@)</span><input type="checkbox" class="w-9 h-5 accent-${AC}-600"></label>`; }
  else { const dis=admin?"":"disabled"; b=`<div class="space-y-3 text-[12.5px]">${[["add","Ai được thêm người"],["poll","Ai được tạo Bình chọn"],["meeting","Ai được tạo Lịch hẹn"]].map(o=>`<div class="flex items-center justify-between gap-2"><span>${o[1]}</span><select ${dis} onchange="curChat().perms.${o[0]}=this.value" class="border border-slate-200 rounded-lg px-2 py-1.5 text-[12px] bg-white ${admin?"":"opacity-50"}"><option value="all" ${c.perms[o[0]]==="all"?"selected":""}>Mọi thành viên</option><option value="admin" ${c.perms[o[0]]==="admin"?"selected":""}>Chỉ quản trị viên</option></select></div>`).join("")}</div>`; }
  const footer=`<div class="flex justify-between mt-4 pt-3 border-t border-slate-100"><button onclick="leaveGroup()" class="text-[12px] text-red-500 font-semibold">Rời nhóm</button>${admin?`<button onclick="dissolveGroup()" class="text-[12px] text-red-600 font-semibold">Giải tán nhóm</button>`:""}</div>`;
  chatModal(`<div class="flex items-center mb-3"><h3 class="font-bold text-[15px] flex-1">Cài đặt nhóm</h3><button onclick="closeChatModal()" class="text-slate-400 text-xl leading-none xclose">×</button></div><div class="flex bg-slate-100 rounded-lg p-0.5 mb-3 text-[12px] font-semibold">${tabs.map(t=>`<button onclick="setGsTab('${t[0]}')" class="flex-1 py-1.5 rounded-md ${GS_TAB===t[0]?"bg-white text-"+AC+"-700 shadow-sm":"text-slate-500"}">${t[1]}</button>`).join("")}</div>${b}${footer}`,"max-w-md");
}
function saveGroupInfo(){ const c=curChat(); c.name=(document.getElementById("gsName").value||c.name).trim(); c.desc=document.getElementById("gsDesc").value; closeChatModal(); renderHead(); mountChat(); }
function makeAdmin(n){ const c=curChat(); if(!c.admins.includes(n))c.admins.push(n); c.msgs.push({id:++MID,from:"__me__",kind:"system",text:`${n.split(" ").pop()} đã được cấp quyền Quản trị viên`,ts:nowHM()}); renderGroupSettings(); }
function kickMember(n){ const c=curChat(); if(!confirm(`Mời ${n} ra khỏi nhóm?`))return; c.members=c.members.filter(x=>x!==n); c.admins=c.admins.filter(x=>x!==n); c.msgs.push({id:++MID,from:"__me__",kind:"system",text:`${n.split(" ").pop()} đã bị mời ra khỏi nhóm`,ts:nowHM()}); renderGroupSettings(); }
function leaveGroup(){ const c=curChat(); if(!confirm("Rời khỏi nhóm này?"))return; CHATS=CHATS.filter(x=>x!==c); closeChatModal(); chatActive=0; mountChat(); }
function dissolveGroup(){ const c=curChat(); if(!confirm("Giải tán nhóm? Hành động không thể hoàn tác."))return; CHATS=CHATS.filter(x=>x!==c); closeChatModal(); chatActive=0; mountChat(); }
function chatAssign(){ const c=curChat(); const recv=c.type==="dm"?c.name:(c.members.filter(n=>n!==ME.name)[0]||""); chatModal(`<div class="flex items-center mb-3"><h3 class="font-bold text-[15px] flex-1">Giao task trong hội thoại</h3><button onclick="closeChatModal()" title="Đóng" class="text-slate-400 text-2xl leading-none xclose">×</button></div>
  <div class="space-y-2.5 text-[12.5px]">
    <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Tên task <span class="text-red-500">*</span></label><input id="caTitle" class="w-full border border-slate-200 rounded-lg px-3 py-2" placeholder="vd: Viết bài SEO Hà Nam"></div>
    <div class="grid grid-cols-2 gap-2">
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Người nhận</label><select id="caWho" class="w-full border border-slate-200 rounded-lg px-3 py-2 bg-white">${(c.type==="group"?c.members.filter(n=>n!==ME.name):[c.name]).map(n=>`<option ${n===recv?"selected":""}>${n}</option>`).join("")}</select></div>
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Chuyên môn</label><select id="caProj" class="w-full border border-slate-200 rounded-lg px-3 py-2 bg-white">${SPECIALTIES.map(sp=>`<option>${sp}</option>`).join("")}</select></div>
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Ưu tiên</label><select id="caPrio" class="w-full border border-slate-200 rounded-lg px-3 py-2 bg-white"><option>Cao</option><option selected>Trung bình</option><option>Thấp</option><option>Khẩn cấp</option></select></div>
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Deadline</label><input id="caDue" type="date" value="2026-06-12" class="w-full border border-slate-200 rounded-lg px-3 py-2"></div>
    </div>
    <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Mô tả</label><textarea id="caDesc" rows="2" class="w-full border border-slate-200 rounded-lg px-3 py-2" placeholder="Mô tả ngắn yêu cầu công việc…"></textarea></div>
  </div>
  <div class="flex justify-end gap-2 mt-4"><button onclick="closeChatModal()" class="border border-slate-200 rounded-lg px-4 py-2 text-[12.5px]">Hủy</button><button onclick="chatAssignSend()" class="bg-${AC}-600 text-white rounded-lg px-4 py-2 text-[12.5px] font-semibold">＋ Giao task</button></div>`,"max-w-md"); }
function chatAssignSend(){ const ti=(document.getElementById("caTitle").value||"").trim(); if(!ti)return alert("Nhập tên công việc."); const who=(document.getElementById("caWho")||{}).value||""; const proj=document.getElementById("caProj").value; const prio=(document.getElementById("caPrio")||{}).value||""; const due=document.getElementById("caDue").value; closeChatModal(); pushMsg({from:"__me__",text:`📋 Đã giao việc: <b>${ti}</b>${who?` → ${who}`:""} · ${proj}${prio?` · ${prio}`:""}${due?` · hạn ${due.split("-").reverse().join("/")}`:""}`}); }

function isTaskLike(t){ if(!t)return false; return /(giúp|sửa|làm|viết|thiết kế|chuẩn bị|hoàn thành|deadline|báo cáo|banner|gửi lại|cập nhật|review|kiểm tra|lên kế hoạch)/i.test(t.replace(/<[^>]+>/g,"")); }
function msgToTask(id){ const m=curChat().msgs.find(x=>x.id===id); if(!m)return; if(typeof openTaskModal==="function"){ openTaskModal(); setTimeout(()=>{ const ti=document.getElementById("tmTitle"); if(ti)ti.value=(m.text||"").replace(/<[^>]+>/g,"").replace(/@[^ ]+/g,"").trim(); const c=curChat(); const r=document.getElementById("tmReceiver"); if(r&&c.type==="dm"){ [...r.options].forEach(o=>{ if(o.value===c.name)r.value=c.name; }); } },40); } }
let THREAD_MID=null;
function openThread(id){ THREAD_MID=id; renderThread(); }
function renderThread(){ const c=curChat(); const m=c.msgs.find(x=>x.id===THREAD_MID); if(!m)return; m.thread=m.thread||[];
  const parent=`<div class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[12.5px] mb-2"><div class="text-[10px] font-semibold text-${AC}-600 mb-0.5">${m.from==="__me__"?"Bạn":m.from}</div>${m.text?fmtTag(m.text):(m.kind==="image"?"📷 Hình ảnh":m.kind==="file"?("📎 "+m.file.name):"Nội dung")}</div>`;
  const replies=m.thread.map(r=>`<div class="flex ${r.from==="__me__"?"justify-end":""}"><div class="max-w-[80%] ${r.from==="__me__"?`bg-${AC}-600 text-white`:"bg-white border border-slate-200"} rounded-2xl px-3 py-1.5 text-[12.5px]">${r.from!=="__me__"?`<div class="text-[10px] font-semibold text-${AC}-600 mb-0.5">${r.from}</div>`:""}${fmtTag(r.text)}<div class="text-[9px] ${r.from==="__me__"?"text-white/60":"text-slate-400"}">${r.ts}</div></div></div>`).join("")||`<div class="text-center text-slate-300 text-[12px] py-4">Bắt đầu luồng thảo luận riêng…</div>`;
  chatModal(`<div class="flex items-center gap-2 mb-3"><span>🧵</span><h3 class="font-bold text-[15px] flex-1">Luồng thảo luận</h3><button onclick="closeChatModal()" class="text-slate-400 text-xl leading-none xclose">×</button></div>${parent}<div id="thBody" class="max-h-64 overflow-y-auto space-y-1.5 mb-2">${replies}</div><div class="flex gap-2"><input id="thInput" onkeydown="if(event.key==='Enter')threadSend()" class="flex-1 border border-slate-200 rounded-full px-3 py-1.5 text-[12.5px]" placeholder="Trả lời trong luồng…"><button onclick="threadSend()" class="bg-${AC}-600 text-white rounded-full px-4 text-[11px] font-semibold">Gửi</button></div>`,"max-w-md");
}
function threadSend(){ const c=curChat(); const m=c.msgs.find(x=>x.id===THREAD_MID); if(!m)return; const i=document.getElementById("thInput"); const v=(i.value||"").trim(); if(!v)return; m.thread=m.thread||[]; m.thread.push({from:"__me__",text:v,ts:nowHM()}); i.value=""; renderThread(); renderMsgs(); }
function openThreadList(){ const c=curChat(); const ths=c.msgs.filter(m=>m.thread&&m.thread.length); chatModal(`<div class="flex items-center gap-2 mb-3"><span>🧵</span><h3 class="font-bold text-[15px] flex-1">Chủ đề / Luồng — ${c.name}</h3><button onclick="closeChatModal()" class="text-slate-400 text-xl leading-none xclose">×</button></div>${ths.length?ths.map(m=>`<button onclick="openThread(${m.id})" class="w-full text-left border border-slate-200 rounded-xl px-3 py-2 mb-2 hover:bg-slate-50"><div class="text-[12.5px] font-semibold truncate">${(m.text||m.kind||"Chủ đề").toString().replace(/<[^>]+>/g,"").slice(0,50)}</div><div class="text-[11px] text-slate-400">└── ${m.thread.length} tin nhắn trong luồng</div></button>`).join(""):`<div class="text-center text-slate-400 text-[12.5px] py-6">Chưa có luồng nào.<br>Bấm 🧵 trên một tin nhắn để tách thành luồng riêng.</div>`}`,"max-w-md"); }
function openChatSummary(){ chatModal(`<div class="flex items-center gap-2 mb-3"><span class="text-violet-600 text-lg">✨</span><h3 class="font-bold text-[15px] flex-1">AI tóm tắt hội thoại</h3><button onclick="closeChatModal()" class="text-slate-400 text-xl leading-none xclose">×</button></div><div class="text-[12px] text-slate-500 mb-2">Chọn khoảng thời gian hoặc nhập yêu cầu:</div><div class="flex flex-wrap gap-1.5 mb-2">${[["today","Hôm nay"],["7d","7 ngày qua"],["all","Toàn bộ"]].map(o=>`<button onclick="doChatSummary('${o[0]}')" class="border border-slate-200 rounded-full px-3 py-1.5 text-[12px] font-semibold hover:border-violet-400 hover:text-violet-600">${o[1]}</button>`).join("")}</div><input id="sumCmd" onkeydown="if(event.key==='Enter')doChatSummary('cmd')" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] mb-2" placeholder="vd: Tóm tắt các quyết định & deadline tuần này"><button onclick="doChatSummary('cmd')" class="w-full bg-violet-600 text-white rounded-lg py-2 text-[12.5px] font-semibold">Tóm tắt</button><div id="sumOut" class="hidden mt-3 bg-violet-50 border border-violet-100 rounded-xl p-3 text-[12.5px]"></div>`,"max-w-md"); }
function doChatSummary(range){ const c=curChat(); const out=document.getElementById("sumOut"); if(!out)return; out.classList.remove("hidden"); out.innerHTML='<div class="text-slate-400">Đang tóm tắt hội thoại…</div>';
  setTimeout(()=>{ const texts=c.msgs.filter(m=>(!m.kind||m.kind==="text")&&!m.recalled).map(m=>(m.text||"").replace(/<[^>]+>/g,"")).filter(Boolean);
    const meetings=c.msgs.filter(m=>m.kind==="meeting").map(m=>`Lịch hẹn: ${m.meeting.title} — ${m.meeting.date} ${m.meeting.time}`);
    const polls=c.msgs.filter(m=>m.kind==="poll").map(m=>`Bình chọn: ${m.poll.q}`);
    const files=c.msgs.filter(m=>m.kind==="file").length;
    const bullets=[...texts.slice(-6),...meetings,...polls]; if(files)bullets.push(files+" file đã được chia sẻ");
    const lbl=range==="today"?"Hôm nay":range==="7d"?"7 ngày qua":range==="all"?"Toàn bộ":(document.getElementById("sumCmd")&&document.getElementById("sumCmd").value)||"Theo yêu cầu";
    out.innerHTML=`<div class="font-bold text-violet-700 mb-1.5">AI Summary · ${lbl}</div><ul class="list-disc pl-4 space-y-1 text-slate-700">${(bullets.length?bullets:["Chưa đủ dữ liệu để tóm tắt."]).map(b=>`<li>${b}</li>`).join("")}</ul><div class="text-[10px] text-slate-400 mt-2">AI có thể sai sót — vui lòng kiểm tra lại.</div>`;
  },650);
}
/* ---- Chat gắn với Task ---- */
let TC_TAB="chat", TC_TID=null; const TASK_CHAT={};
function taskChatCardHTML(t){ TC_TID=t.id; TC_TAB="chat";
  return `<div class="bg-white border border-slate-200 rounded-2xl p-4 mt-4"><div class="flex items-center gap-2 mb-3"><h3 class="font-bold text-[14px] flex-1">Trao đổi trong task</h3><span class="text-[11px] text-slate-400">Mọi trao đổi · file · lịch sử nằm trong task này</span></div><div class="flex bg-slate-100 rounded-lg p-0.5 w-fit mb-3 text-[12.5px] font-semibold"><button id="tc-chat" onclick="setTcTab('chat')" class="px-4 py-1.5 rounded-md bg-white text-${AC}-700 shadow-sm">💬 Chat</button><button id="tc-file" onclick="setTcTab('file')" class="px-4 py-1.5 rounded-md text-slate-500">📎 File</button><button id="tc-log" onclick="setTcTab('log')" class="px-4 py-1.5 rounded-md text-slate-500">🕘 Lịch sử</button></div><div id="tcBody"></div></div>`;
}
function setTcTab(t){ TC_TAB=t; ["chat","file","log"].forEach(k=>{const b=document.getElementById("tc-"+k); if(b)b.className="px-4 py-1.5 rounded-md "+(k===t?"bg-white text-"+AC+"-700 shadow-sm":"text-slate-500");}); paintTaskChat(); }
function paintTaskChat(){ const body=document.getElementById("tcBody"); if(!body)return; const t=TASKS.find(x=>x.id===TC_TID); if(!t)return;
  if(TC_TAB==="chat"){ const msgs=TASK_CHAT[t.id]||(TASK_CHAT[t.id]=[{from:t.assignee,text:"Em bắt đầu làm task này nhé anh",ts:"hôm qua"},{from:"__me__",text:"Ok, cần gì cứ trao đổi ngay trong task này nhé",ts:"hôm qua"}]);
    body.innerHTML=`<div class="border border-slate-200 rounded-xl overflow-hidden"><div id="tcMsgs" class="h-56 overflow-y-auto p-3 space-y-1.5 bg-slate-50">${msgs.map(m=>`<div class="flex ${m.from==="__me__"?"justify-end":""}"><div class="max-w-[78%] ${m.from==="__me__"?`bg-${AC}-600 text-white`:"bg-white border border-slate-200"} rounded-2xl px-3 py-1.5 text-[12.5px]">${m.from!=="__me__"?`<div class="text-[10px] font-semibold text-${AC}-600 mb-0.5">${m.from}</div>`:""}${m.text}<div class="text-[9.5px] ${m.from==="__me__"?"text-white/60":"text-slate-400"}">${m.ts}</div></div></div>`).join("")}</div><div class="flex gap-2 p-2 border-t border-slate-100"><input id="tcInput" onkeydown="if(event.key==='Enter')tcSend()" class="flex-1 border border-slate-200 rounded-full px-3 py-1.5 text-[12.5px]" placeholder="Nhắn trong task…"><button onclick="tcSend()" class="bg-${AC}-600 text-white rounded-full px-4 text-[11px] font-semibold">Gửi</button></div></div>`;
    const mb=document.getElementById("tcMsgs"); if(mb)mb.scrollTop=mb.scrollHeight;
  } else if(TC_TAB==="file"){ const files=[{n:"Brief_"+t.spec+".pdf",s:"640 KB",by:"Nguyễn Văn Nam",d:"05-06"},{n:"Ket_qua_v1.zip",s:"3.4 MB",by:t.assignee,d:"07-06"}];
    body.innerHTML=`<div class="border border-slate-200 rounded-xl divide-y divide-slate-50">${files.map(f=>`<div class="flex items-center gap-3 px-3 py-2.5"><span class="text-2xl">📄</span><div class="flex-1 min-w-0"><div class="text-[12.5px] font-semibold truncate">${f.n}</div><div class="text-[10.5px] text-slate-400">${f.s} · ${f.by} · ${f.d}</div></div><button onclick="alert('Tải ${f.n} (demo)')" class="text-[11.5px] font-semibold text-${AC}-600">Tải</button></div>`).join("")}</div><label class="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-${AC}-700 border border-${AC}-200 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-${AC}-50">＋ Tải file lên<input type="file" multiple class="hidden" onchange="alert('Đã chọn '+this.files.length+' file đính kèm vào task (demo)')"></label>`;
  } else { const ev=[["Tạo task",t.createdAt],["Bắt đầu thực hiện",t.startedAt],["Nộp kết quả",t.submittedAt],["Nghiệm thu",t.acceptedAt]].filter(e=>e[1]);
    body.innerHTML=`<div class="space-y-2.5">${ev.map(e=>`<div class="flex gap-2 text-[12.5px]"><span class="w-2 h-2 rounded-full bg-${AC}-500 mt-1.5 shrink-0"></span><div><b>${e[0]}</b> <span class="text-slate-400">· ${fmtDue(e[1])}</span></div></div>`).join("")||`<div class="text-slate-400 text-[12px]">Chưa có lịch sử.</div>`}</div>`;
  }
}
function tcSend(){ const i=document.getElementById("tcInput"); if(!i)return; const v=i.value.trim(); if(!v)return; (TASK_CHAT[TC_TID]=TASK_CHAT[TC_TID]||[]).push({from:"__me__",text:v,ts:nowHM()}); i.value=""; paintTaskChat(); }

/* ---------- TRỢ LÝ AI nổi góc phải-dưới (thay cho widget tin nhắn) ---------- */
/* Trợ lý AI ngữ cảnh: nội dung & gợi ý đổi theo trang/tab đang xem */
let CURRENT_PAGE = "";
const AI_CTX = {
  "boss-dashboard.html": { name:"Dashboard team",        sugg:["Ai đang quá tải?","Task nào sắp trễ?","Hiệu suất team thế nào?","Rework đang ở mức nào?"] },
  "dashboard.html":      { name:"Dashboard cá nhân",     sugg:["Việc của tôi hôm nay?","Việc nào sắp đến hạn?","Tôi có việc quá hạn không?","Tóm tắt công việc của tôi"] },
  "task-list.html":      { name:"Công việc của tôi",     sugg:["Task nào quá hạn?","Giao Linh viết bài SEO Hà Nam","Việc nào ưu tiên hôm nay?","Còn bao nhiêu việc chưa xong?"] },
  "collab.html":         { name:"Dự án phối hợp",        sugg:["Dự án nào sắp trễ hạn?","Yêu cầu hỗ trợ nào đang chờ?","Phòng ban nào phối hợp nhiều nhất?","Tiến độ các dự án chung?"] },
  "collab-detail.html":  { name:"Chi tiết dự án",        sugg:["Tóm tắt tiến độ dự án này","Phòng ban nào đang chậm?","Có yêu cầu hỗ trợ nào không?","Gợi ý hành động tiếp theo"] },
  "collab-new.html":     { name:"Tạo dự án phối hợp",    sugg:["Gợi ý phân công nhiệm vụ","Mốc thời gian nên đặt thế nào?","Phòng ban nào cần tham gia?","Gợi ý mục tiêu dự án"] },
  "calendar.html":       { name:"Lịch công việc",        sugg:["Hôm nay có việc gì?","Tuần này deadline nào?","Việc nào trùng lịch?"] },
  "leaves.html":         { name:"Luồng phê duyệt",       sugg:["Đơn nào đang chờ duyệt?","Ai nghỉ tuần này?","Tác động khi duyệt nghỉ?"] },
  "reports.html":        { name:"Báo cáo tự động",       sugg:["Tóm tắt báo cáo hôm nay","Chuyên môn nào hoàn thành cao?","Hiệu suất 7 ngày?"] },
  "resources.html":      { name:"FPT Drive",             sugg:["Tìm checklist SEO mới nhất","Tài liệu CRM ở đâu?","Tài nguyên ADS hiệu quả"] },
  "notifications.html":  { name:"Thông báo",             sugg:["Việc nào cần tôi xử lý?","Ai nhắc đến tôi?","Tóm tắt thông báo hôm nay"] },
};
function aiCtx(){ return AI_CTX[CURRENT_PAGE] || { name:"Trợ lý công việc", sugg:["Ai đang quá tải?","Task nào sắp trễ?","Hiệu suất team thế nào?"] }; }
function aiAnswerCtx(q){
  const lo=q.toLowerCase();
  if(CURRENT_PAGE==="collab.html" || CURRENT_PAGE==="collab-detail.html" || CURRENT_PAGE==="collab-new.html"){
    const k=collabKPI();
    if(/trễ|hạn|sắp/.test(lo)){ const risky=COLLAB_PROJECTS.filter(p=>p.status!=="done").sort((a,b)=>new Date(a.due)-new Date(b.due)).slice(0,3); return `Dự án cần chú ý hạn: ${risky.map(p=>`<b>${p.name.split(" ").slice(0,4).join(" ")}</b> (${fmtD(p.due)} · ${p.progress}%)`).join("; ")||"không có"}.`; }
    if(/yêu cầu|hỗ trợ/.test(lo)){ const rs=COLLAB_REQUESTS.filter(r=>r.status==="pending"); return rs.length?`Có <b>${rs.length} yêu cầu hỗ trợ</b> đang chờ: ${rs.map(r=>`${r.from}→${r.to}`).join("; ")}. Mở mục "Yêu cầu hỗ trợ liên phòng" để xử lý.`:"Hiện không có yêu cầu hỗ trợ nào chờ xử lý."; }
    if(/phòng ban|nhiều nhất|cặp/.test(lo)){ const pairs=collabPairs(); return pairs.length?`Cặp phối hợp nhiều nhất: ${pairs.slice(0,3).map(([kk,n])=>`<b>${kk}</b> (${n} dự án)`).join("; ")}.`:"Chưa có dữ liệu cặp phối hợp."; }
    if(/tiến độ|tóm tắt|tổng quan|hành động/.test(lo)){ return `Đang có <b>${k.running} dự án</b> phối hợp · ${k.depts} phòng ban · ${k.tasks} task liên phòng · <b>${k.pend} yêu cầu</b> hỗ trợ chờ xử lý. Ưu tiên: xử lý yêu cầu chờ và dự án sắp trễ hạn.`; }
    return `Trợ lý cho <b>Dự án phối hợp</b>: ${k.running} dự án đang chạy, ${k.pend} yêu cầu chờ. Hỏi tôi: <i>dự án nào sắp trễ? · yêu cầu hỗ trợ nào đang chờ? · phòng ban nào phối hợp nhiều nhất?</i>`;
  }
  return aiAnswer(q);
}
function aiSidePanel(){
  const ctx=aiCtx();
  return `<div id="aiSideCard" class="bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden" style="height:calc(100vh - 110px); max-height:620px">
    <div class="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-violet-50"><span class="w-7 h-7 rounded-full bg-violet-600 text-white grid place-items-center text-[11px] font-bold">AI</span><div class="leading-tight"><b class="text-[13px] text-violet-700 block">AI Assistant <span class="text-[9px] align-middle bg-white text-violet-600 rounded-full px-1.5 py-0.5 font-bold">BETA</span></b><span class="text-[10.5px] text-slate-400">Trợ lý cho: ${ctx.name}</span></div><button onclick="toggleAIPanel()" title="Đóng trợ lý AI" class="ml-auto text-slate-400 text-2xl leading-none xclose">×</button></div>
    <div id="aiwBody" class="flex-1 overflow-y-auto p-3 space-y-2 bg-slate-50 text-[12.5px]"><div class="max-w-[92%] bg-white border border-slate-200 rounded-2xl px-3 py-2 leading-6">Xin chào! Tôi đang hỗ trợ ở <b>${ctx.name}</b>. Chọn một gợi ý bên dưới hoặc nhập câu hỏi của bạn.</div></div>
    <div class="flex flex-wrap gap-1.5 px-3 pb-1.5">${ctx.sugg.map(q=>`<button onclick="aiwAsk('${q.replace(/'/g,"")}')" class="border border-slate-200 rounded-full px-2.5 py-1 text-[11px] text-slate-500 hover:border-violet-400 hover:text-violet-600">${q}</button>`).join("")}</div>
    <div class="p-2.5 border-t border-slate-100 flex gap-2"><input id="aiwInput" onkeydown="if(event.key==='Enter')aiwSend()" class="flex-1 border border-slate-200 rounded-full px-3.5 py-2 text-[12.5px] focus:outline-none focus:ring-2 focus:ring-violet-200" placeholder="Hỏi AI về ${ctx.name}…"><button onclick="aiwSend()" class="bg-violet-600 text-white w-9 h-9 rounded-full shrink-0">Gửi</button></div>
  </div>`;
}
/* ---------- CỘT PHẢI CHO "CÔNG VIỆC CỦA TÔI" ---------- */
/* Chỉ còn 1 thẻ AI Assistant (kèm Tổng quan nhanh bên trong), ẩn mặc định.
   Bấm "AI Phân tích" để hiện. Mọi con số suy ra từ TASKS. */
function taskListSidePanel(){
  const ctx = aiCtx();
  const m = metrics();
  const chips = ctx.sugg.map(q => `<button onclick="aiwAsk('${q.replace(/'/g,"")}')" class="w-full text-left border border-slate-200 rounded-lg px-3 py-2 text-[12px] text-slate-600 hover:border-violet-400 hover:text-violet-600 flex items-center gap-2"><i class="fa-regular fa-circle-question text-slate-300"></i><span class="min-w-0 truncate">${q}</span></button>`).join("");
  return `<div class="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div class="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-violet-50">
        <span class="w-7 h-7 rounded-full bg-violet-600 text-white grid place-items-center text-[11px] font-bold">AI</span>
        <b class="text-[13px] text-violet-700">AI Assistant <span class="text-[9px] align-middle bg-white text-violet-600 rounded-full px-1.5 py-0.5 font-bold">BETA</span></b><button onclick="toggleAIPanel()" title="Đóng" class="ml-auto text-slate-400 text-2xl leading-none xclose">×</button>
      </div>
      <div class="p-3 space-y-2.5">
        <div id="aiwBody" class="space-y-2 max-h-40 overflow-y-auto text-[12.5px]"><div class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 leading-6 text-slate-600">Xin chào! Tôi có thể hỗ trợ gì cho <b>Công việc của bạn?</b></div></div>
        <div class="space-y-1.5">${chips}</div>
        <div class="flex gap-2 pt-0.5"><input id="aiwInput" onkeydown="if(event.key==='Enter')aiwSend()" class="flex-1 border border-slate-200 rounded-full px-3.5 py-2 text-[12.5px] focus:outline-none focus:ring-2 focus:ring-violet-200" placeholder="Hỏi AI về Công việc của tôi…"><button onclick="aiwSend()" class="bg-violet-600 text-white w-9 h-9 rounded-full shrink-0">›</button></div>
        <!-- Tổng quan nhanh: nằm BÊN TRONG AI Assistant, chỉ hiện khi bật AI Phân tích -->
        <div class="pt-2 mt-1 border-t border-slate-100">
          <h4 class="font-semibold text-[12px] text-slate-700 mb-2">Tổng quan nhanh</h4>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div onclick="taskPopupKey('all')" class="cursor-pointer rounded-xl bg-slate-50 hover:bg-slate-100 transition py-2.5"><div class="text-[20px] font-extrabold text-slate-800">${m.total}</div><div class="text-[10px] text-slate-400 mt-0.5">Tất cả task</div></div>
            <div onclick="taskPopupKey('late')" class="cursor-pointer rounded-xl bg-red-50 hover:bg-red-100 transition py-2.5"><div class="text-[20px] font-extrabold text-red-600">${m.late}</div><div class="text-[10px] text-slate-400 mt-0.5">Quá hạn</div></div>
            <div onclick="taskPopupKey('doing')" class="cursor-pointer rounded-xl bg-sky-50 hover:bg-sky-100 transition py-2.5"><div class="text-[20px] font-extrabold text-sky-600">${m.doing}</div><div class="text-[10px] text-slate-400 mt-0.5">Đang thực hiện</div></div>
          </div>
        </div>
      </div>
    </div>`;
}
/* Bật/tắt bảng AI Assistant ở cột phải — dùng chung cho MỌI trang.
   Ẩn AI → cột #sideCol ẩn, lưới #mainGrid về 1 cột (nội dung full màn).
   Hiện AI → #sideCol hiện, lưới tách 2 cột. */
function toggleAIPanel(){
  const side = document.getElementById("sideCol"); if(!side) return;
  const willShow = side.classList.contains("hidden");
  if(willShow){ side.classList.remove("hidden"); side.classList.add("ai-overlay"); const i=document.getElementById("aiwInput"); if(i) setTimeout(()=>i.focus(),200); }
  else { side.classList.add("hidden"); side.classList.remove("ai-overlay"); }
}
function toggleAIW(){ const p=document.getElementById("aiPanel"),f=document.getElementById("aiFab"); if(!p)return; const cp=document.getElementById("chatPanel"); if(cp&&!cp.classList.contains("hidden"))cp.classList.add("hidden"); p.classList.toggle("hidden"); if(f)f.classList.toggle("hidden"); }
function aiwAsk(q){ const i=document.getElementById("aiwInput"); if(i)i.value=q; aiwSend(); }
function aiwSend(){ const inp=document.getElementById("aiwInput"),v=(inp&&inp.value||"").trim(); if(!v)return; inp.value=""; const b=document.getElementById("aiwBody"); b.insertAdjacentHTML("beforeend",`<div class="max-w-[88%] ml-auto bg-violet-600 text-white rounded-2xl px-3 py-2">${v}</div>`); b.insertAdjacentHTML("beforeend",`<div id="aiwTyping" class="max-w-[88%] bg-white border border-slate-200 rounded-2xl px-3 py-2 text-slate-400">Đang phân tích dữ liệu…</div>`); b.scrollTop=b.scrollHeight; setTimeout(()=>{ const t=document.getElementById("aiwTyping"); if(t)t.outerHTML=`<div class="max-w-[88%] bg-white border border-slate-200 rounded-2xl px-3 py-2 leading-6">${aiAnswerCtx(v)}</div>`; b.scrollTop=b.scrollHeight; },600); }

const btnAI = `<button onclick="toggleAIPanel()" class="bg-violet-600 hover:bg-violet-700 text-white text-[12.5px] font-semibold px-3.5 py-2 rounded-lg shrink-0">AI Phân tích</button>`;

/* =====================================================================
 *  BIỂU ĐỒ (Chart.js) — đều nhận dữ liệu từ metrics
 * ===================================================================== */
const C = { blue:"#0064B1", green:"#21B14B", orange:"#EF7025", amber:"#E59324", red:"#E0312B", grey:"#9AA0AA", violet:"#7C3AED" };
function doughnut(id, labels, data, colors) {
  const el = document.getElementById(id); if (!el || !window.Chart) return;
  CHARTS.push(new Chart(el, { type:"doughnut", data:{ labels, datasets:[{ data, backgroundColor:colors, borderWidth:0 }] },
    options:{ cutout:"66%", plugins:{ legend:{ display:false } }, responsive:true, maintainAspectRatio:false } }));
}
function barChart(id, labels, data, colors, horizontal) {
  const el = document.getElementById(id); if (!el || !window.Chart) return;
  CHARTS.push(new Chart(el, { type:"bar", data:{ labels, datasets:[{ data, backgroundColor:colors||C.blue, borderRadius:6, barThickness:horizontal?16:22 }] },
    options:{ indexAxis:horizontal?"y":"x", plugins:{ legend:{ display:false } }, scales:{ x:{ grid:{ display:!horizontal }, ticks:{ font:{ size:10 } } }, y:{ grid:{ display:horizontal?false:true }, ticks:{ font:{ size:10 } } } }, responsive:true, maintainAspectRatio:false } }));
}
function lineChart(id, labels, series) {
  const el = document.getElementById(id); if (!el || !window.Chart) return;
  CHARTS.push(new Chart(el, { type:"line", data:{ labels, datasets:series.map(s=>({ label:s.label, data:s.data, borderColor:s.color, backgroundColor:s.fill||"transparent", borderDash:s.dash||[], fill:!!s.fill, tension:.35, pointRadius:2.5, borderWidth:2.4 })) },
    options:{ plugins:{ legend:{ display:series.length>1, labels:{ font:{ size:11 }, boxWidth:12 } } }, scales:{ x:{ grid:{ display:false }, ticks:{ font:{ size:10 } } }, y:{ beginAtZero:true, ticks:{ font:{ size:10 } } } }, responsive:true, maintainAspectRatio:false } }));
}

/* =====================================================================
 *  LOGIN
 * ===================================================================== */
let loginRole = "boss";
function showLogin() {
  document.body.className = "min-h-screen grid place-items-center bg-slate-100 antialiased";
  document.body.innerHTML = `
  <form class="w-[380px] bg-white rounded-2xl p-8 shadow-xl border border-slate-200" onsubmit="doLogin(event)">
    <div class="flex items-center gap-2 font-extrabold text-2xl text-slate-900 tracking-tight">
      <span class="w-9 h-9 rounded-[11px] grid place-items-center text-white" style="background:linear-gradient(120deg,#0064B1,#21B14B);box-shadow:0 6px 14px rgba(0,100,177,.32)"></span>
      F<span class="text-indigo-600">work</span></div>
    <p class="text-slate-500 text-[12.5px] mt-1 mb-5">Quản trị công việc & đo lường hiệu suất — FPT Schools</p>
    <label class="block text-[11.5px] font-semibold text-slate-500 mb-1">VAI TRÒ (demo)</label>
    <div class="grid grid-cols-2 gap-2 mb-4">
      <button type="button" id="rb" onclick="loginPick('boss')" class="border-2 rounded-lg py-2 text-[12.5px] font-semibold border-indigo-600 text-indigo-700 bg-indigo-50">Sếp / Leader</button>
      <button type="button" id="rs" onclick="loginPick('staff')" class="border-2 rounded-lg py-2 text-[12.5px] font-semibold border-slate-200 text-slate-500">Nhân viên</button>
    </div>
    <label class="block text-[11.5px] font-semibold text-slate-500 mb-1">EMAIL</label>
    <input id="em" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" value="sep@fpt.edu.vn">
    <label class="block text-[11.5px] font-semibold text-slate-500 mb-1">MẬT KHẨU</label>
    <input type="password" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-indigo-200" value="123456">
    <button id="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-2.5">Đăng nhập</button>
  </form>`;
  loginRole = "boss";
}
function loginPick(r){ loginRole=r; document.getElementById("em").value=r==="boss"?"sep@fpt.edu.vn":"linh@fpt.edu.vn"; const b="border-2 rounded-lg py-2 text-[12.5px] font-semibold "; document.getElementById("rb").className=b+(r==="boss"?"border-indigo-600 text-indigo-700 bg-indigo-50":"border-slate-200 text-slate-500"); document.getElementById("rs").className=b+(r==="staff"?"border-emerald-600 text-emerald-700 bg-emerald-50":"border-slate-200 text-slate-500"); document.getElementById("submit").className=`w-full text-white font-semibold rounded-lg py-2.5 ${r==="boss"?"bg-indigo-600 hover:bg-indigo-700":"bg-emerald-600 hover:bg-emerald-700"}`; }
function doLogin(e){ e.preventDefault(); localStorage.setItem("pw_role",loginRole); localStorage.setItem("pw_logged","1"); location.hash=loginRole==="boss"?"#boss-dashboard.html":"#dashboard.html"; location.reload(); }

/* =====================================================================
 *  BÁO CÁO TỔNG QUAN (boss)
 * ===================================================================== */
function renderBossDashboard() {
  if (!IS_BOSS) { location.hash = "#dashboard.html"; return; }
  POP_SCOPE = null;
  if(!window.KEEP_FILTER){ FILTER = { q:"", who:"", spec:"", duePeriod:"all", dueDate:"", createdPeriod:"all", createdDate:"" }; window.statusFilter = []; VIEWMODE = "table"; }
  window.KEEP_FILTER = false;
  window.BOARD_RENDER = function(){ window.KEEP_FILTER=true; renderBossDashboard(); };
  renderShell("boss-dashboard.html", "Dashboard team", "", btnAI);
  const m = metrics();
  const loads = MEMBERS.map(n => ({ name:n, ...loadOf(n) })).sort((a,b)=>b.wip-a.wip);
  const specs = SPECIALTIES.map(name => ({ name, ...specStats(name) })).sort((a,b)=>({red:0,amber:1,green:2}[a.health]-{red:0,amber:1,green:2}[b.health]));

  document.getElementById("content").innerHTML = `
  ${reportFilterBar()}

  <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
    ${kpiPop("Tổng task", m.total, `${m.done} xong · ${m.open} đang mở`, "text-slate-400", "all")}
    ${kpiPop("Hoàn thành", m.done, `${m.completionRate}% hoàn thành`, "text-emerald-600", "done", "done / tổng task")}
    ${kpiPop("Đúng hạn", m.onTimeCount, `${m.onTimeRate}% đúng hạn`, m.onTimeRate>=85?"text-emerald-600":"text-amber-600", "ontime", "đúng hạn / số task hoàn thành")}
    ${kpiPop("Đang thực hiện", m.doing, "việc đang chạy", "text-slate-400", "doing")}
    ${kpiPop("Quá hạn", m.late, "cần xử lý ngay", "text-red-600", "late")}
  </div>

  <div class="grid md:grid-cols-3 gap-4 mb-4">
    <div class="bg-white border border-slate-200 rounded-xl p-4">
      <h3 class="font-semibold text-[13.5px] mb-2">Phân bố trạng thái</h3>
      <div class="relative h-[150px]"><canvas id="chStatus"></canvas><div class="absolute inset-0 grid place-items-center pointer-events-none"><div class="text-center"><div class="text-[22px] font-extrabold">${m.total}</div><div class="text-[10px] text-slate-400">task</div></div></div></div>
      <div class="grid grid-cols-2 gap-1 mt-2 text-[11.5px]">
        <button onclick="taskPopupKey('done')" class="flex items-center gap-1.5 text-left hover:text-${AC}-600"><i class="w-2.5 h-2.5 rounded-sm" style="background:${C.green}"></i>Hoàn thành <b>${m.done}</b></button>
        <button onclick="taskPopupKey('doing')" class="flex items-center gap-1.5 text-left hover:text-${AC}-600"><i class="w-2.5 h-2.5 rounded-sm" style="background:${C.blue}"></i>Đang làm <b>${m.doing}</b></button>
        <button onclick="taskPopupKey('review')" class="flex items-center gap-1.5 text-left hover:text-${AC}-600"><i class="w-2.5 h-2.5 rounded-sm" style="background:${C.amber}"></i>Chờ nghiệm thu <b>${m.review}</b></button>
        <button onclick="taskPopupKey('late')" class="flex items-center gap-1.5 text-left hover:text-${AC}-600"><i class="w-2.5 h-2.5 rounded-sm" style="background:${C.red}"></i>Quá hạn <b>${m.late}</b></button>
      </div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-4 md:col-span-2">
      <h3 class="font-semibold text-[13.5px] mb-2">Số lượng công việc theo người <span class="text-[11px] text-slate-400 font-normal">· task đang mở</span></h3>
      <div class="space-y-2 mb-2">${loads.map(l=>{const mx=Math.max(1,...loads.map(x=>x.wip));const w=Math.max(Math.round(l.wip/mx*100),8);const col=l.overloaded?C.red:C.blue;return `<div class="flex items-center gap-2"><span class="w-16 text-[12px] font-medium text-slate-600 shrink-0 text-right truncate">${l.name.split(" ").pop()}</span><div class="flex-1 bg-slate-100 rounded-full h-7 relative overflow-hidden"><div class="h-7 rounded-full flex items-center justify-end pr-2 min-w-[26px]" style="width:${w}%;background:${col}"><span class="text-[12px] font-bold text-white">${l.wip}</span></div></div><span class="w-10 text-[11px] text-slate-400 shrink-0">việc</span></div>`;}).join("")}</div>
      <div class="text-[11.5px] text-slate-500">Nhân sự nhiều việc nhất: ${loads.slice(0,2).map(l=>`<b>${l.name.split(" ").pop()}</b> (${l.wip} task)`).join(", ")||"—"}. Cảnh báo quá tải khi > ${WIP_LIMIT} task đang mở.</div>
    </div>
  </div>


  ${weeklyEmployeeReport()}
  <div class="flex items-center gap-2 mb-2"><h3 class="font-bold text-[14.5px] text-slate-800">Công việc của từng nhân sự</h3><span class="text-[11.5px] text-slate-400">· chọn người / chuyên môn / trạng thái / ngày để lọc — bấm vào task để xem chi tiết</span></div>
  ${boardCardHTML("team")}`;

  doughnut("chStatus", ["Hoàn thành","Đang làm","Chờ nghiệm thu","Chờ làm","Quá hạn"], [m.done,m.doing,m.review,m.todo,m.late], [C.green,C.blue,C.amber,C.grey,C.red]);
  repaint();
}

/* =====================================================================
 *  TỔNG QUAN CÁ NHÂN
 * ===================================================================== */
let MF = { due:"" };
const BIRTHDAYS = [
  {name:"Linh Trần", dob:"1996-06-08", dept:"Nhóm SEO"},
  {name:"Nam Phạm", dob:"1992-06-12", dept:"Nhóm ADS"},
  {name:"Minh Hoàng", dob:"1993-06-18", dept:"Nhóm CRM"},
  {name:"Ánh Dương", dob:"1995-06-25", dept:"Nhóm SEO"},
  {name:"Huy Lê", dob:"1994-07-02", dept:"Nhóm ADS"},
  {name:"Nguyễn Văn Nam", dob:"1985-05-30", dept:"Marketing"},
];
function bdayDaysUntil(dob){ const now=new Date(NOW); now.setHours(0,0,0,0); const d=new Date(dob); let next=new Date(now.getFullYear(), d.getMonth(), d.getDate()); if(next<now) next=new Date(now.getFullYear()+1, d.getMonth(), d.getDate()); return Math.round((next-now)/86400000); }
function bdayFmt(dob){ const d=new Date(dob); return String(d.getDate()).padStart(2,"0")+"/"+String(d.getMonth()+1).padStart(2,"0")+"/"+d.getFullYear(); }
function sendWish(name){ alert(`Đã gửi lời chúc mừng sinh nhật tới ${name}! 🎉 (demo)`); }
function myRequestsCard(){
  const lv=LEAVES.filter(l=>l.who===STAFF_ME), ex=EXPENSES.filter(e=>e.who===STAFF_ME); const all=[...lv,...ex];
  const pend=all.filter(x=>x.status==="pending").length, app=all.filter(x=>x.status==="approved").length, rej=all.filter(x=>x.status==="rejected").length;
  return `<div class="bg-white border border-slate-200 rounded-xl p-4 mb-4"><div class="flex items-center gap-2 mb-3"><span class="text-[15px]">📋</span><h3 class="font-bold text-[14px]">Đơn của tôi</h3><a href="leaves.html" class="ml-auto text-[11.5px] text-${AC}-600 font-semibold">Xem tất cả →</a></div><div class="grid grid-cols-3 gap-3"><button onclick="openMyReqPopup('pending')" class="rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-100 p-3 text-left transition"><div class="text-[22px] font-extrabold text-amber-600">${pend}</div><div class="text-[11.5px] text-slate-500">Chờ duyệt</div></button><button onclick="openMyReqPopup('approved')" class="rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 p-3 text-left transition"><div class="text-[22px] font-extrabold text-emerald-600">${app}</div><div class="text-[11.5px] text-slate-500">Được duyệt</div></button><button onclick="openMyReqPopup('rejected')" class="rounded-xl bg-red-50 hover:bg-red-100 border border-red-100 p-3 text-left transition"><div class="text-[22px] font-extrabold text-red-600">${rej}</div><div class="text-[11.5px] text-slate-500">Bị từ chối</div></button></div></div>`;
}
function openMyReqPopup(status){
  const lv=LEAVES.filter(l=>l.who===STAFF_ME && l.status===status), ex=EXPENSES.filter(e=>e.who===STAFF_ME && e.status===status);
  const map={pending:"Đơn chờ duyệt",approved:"Đơn đã được duyệt",rejected:"Đơn bị từ chối"};
  closeTaskPop();
  document.body.insertAdjacentHTML("beforeend", `<div id="taskPop" class="fixed inset-0 z-[60] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeTaskPop()"><div class="bg-white rounded-2xl w-full max-w-2xl max-h-[82vh] overflow-hidden flex flex-col shadow-2xl"><div class="px-5 py-3 border-b border-slate-200 flex items-center"><h3 class="font-bold text-[15px]">${map[status]} <span class="text-slate-400 font-normal">· ${lv.length+ex.length}</span></h3><button onclick="closeTaskPop()" class="ml-auto text-slate-400 text-xl leading-none xclose">×</button></div><div class="overflow-y-auto p-3">${allRequestsTable(lv,ex)}</div></div></div>`);
}
function birthdayCardHTML(){
  const list=BIRTHDAYS.map(b=>({ ...b, du:bdayDaysUntil(b.dob) })).sort((a,b)=>a.du-b.du);
  const todayN=list.filter(b=>b.du===0).length;
  return `<div class="bg-white border border-slate-200 rounded-xl p-4 mb-4">
    <div class="flex items-center gap-2 mb-3"><span class="text-[16px]">🎂</span><h3 class="font-bold text-[14px] text-${AC}-700">Sinh nhật nhân sự</h3><span class="text-[11px] text-slate-400">· trong công ty</span><span class="ml-auto text-[11px] font-semibold ${todayN?`text-${AC}-600`:"text-slate-400"}">${todayN} hôm nay</span></div>
    <div class="grid md:grid-cols-2 gap-2">${list.slice(0,6).map(b=>{const today=b.du===0; return `<div class="flex items-center gap-3 border ${today?`border-${AC}-200 bg-${AC}-50/40`:"border-slate-100"} rounded-xl p-2.5">${avatar(b.name)}<div class="min-w-0 flex-1"><div class="text-[13px] font-semibold truncate">${b.name}</div><div class="text-[10.5px] text-slate-400 truncate">${bdayFmt(b.dob)} · ${b.dept}</div></div>${today?`<span class="text-[10.5px] font-bold text-${AC}-700 bg-${AC}-100 rounded-full px-2 py-0.5 whitespace-nowrap">Hôm nay 🎁</span>`:`<span class="text-[10.5px] text-slate-400 whitespace-nowrap">${b.du===1?"Ngày mai":"Còn "+b.du+" ngày"}</span>`}<button onclick="sendWish('${b.name}')" class="text-[11px] font-semibold ${today?`text-white bg-${AC}-600`:`text-${AC}-700 border border-${AC}-200 hover:bg-${AC}-50`} rounded-lg px-2.5 py-1 whitespace-nowrap shrink-0">Gửi lời chúc</button></div>`;}).join("")}</div>
  </div>`;
}
function renderDashboard() {
  MF = { due:"" }; window.statusFilter = [];
  const mineName = IS_BOSS ? ME.name : "Linh Trần";
  POP_SCOPE = mineName;
  renderShell("dashboard.html", IS_BOSS?"Dashboard cá nhân":`Chào ${ME.name.split(" ").pop()}, chúc một ngày hiệu quả`, "Không gian làm việc cá nhân — 08/06/2026", btnAI);
  const mine = TASKS.filter(t => t.assignee === mineName);
  const mm = metrics(mine); const l = loadOf(mineName); const myDna = dna(mineName);
  const doingN = mine.filter(t=>dstat(t)==="doing").length;
  const soonN = mine.filter(t=>t.status!=="done"&&!isOverdue(t)&&daysBetween(NOW,t.due)<=2).length;
  const lateN = mine.filter(isOverdue).length;

  const approvals = IS_BOSS ? `<div class="bg-white border border-slate-200 rounded-xl p-4 mb-4">
    <div class="flex items-center mb-2"><h3 class="font-semibold text-[13.5px]">Luồng phê duyệt chờ bạn</h3><span class="ml-auto text-[11px] font-semibold text-amber-700 bg-amber-50 rounded-full px-2 py-0.5">${LEAVES.filter(x=>x.status==="pending").length+EXPENSES.filter(x=>x.status==="pending").length} đơn chờ duyệt</span></div>
    <table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b border-slate-100"><th class="py-2">Loại</th><th>Người gửi</th><th>Nội dung</th><th>Trạng thái</th><th></th></tr></thead><tbody>
    ${LEAVES.filter(x=>x.status==="pending").map(x=>`<tr class="border-b border-slate-50 bg-amber-50/30"><td class="py-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${x.type==="Làm online"?"bg-sky-100 text-sky-700":"bg-violet-100 text-violet-700"}">${x.type}</span></td><td>${avatar(x.who)} <b class="ml-1">${x.who.split(" ").pop()}</b></td><td class="text-slate-500">${x.from}→${x.to} (${x.days}n)</td><td><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${LST[x.status][1]}">${LST[x.status][0]}</span></td><td class="text-right"><a href="leaves.html" class="text-${AC}-600 font-semibold">Xử lý →</a></td></tr>`).join("")}
    ${EXPENSES.filter(x=>x.status==="pending").map(x=>`<tr class="border-b border-slate-50 last:border-0 bg-amber-50/30"><td class="py-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">Chi phí</span></td><td>${avatar(x.who)} <b class="ml-1">${x.who.split(" ").pop()}</b></td><td class="text-slate-500">${x.title} · <b>${x.amount}</b></td><td><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${LST[x.status][1]}">${LST[x.status][0]}</span></td><td class="text-right"><a href="leaves.html" class="text-${AC}-600 font-semibold">Xử lý →</a></td></tr>`).join("")}
    ${(LEAVES.filter(x=>x.status==="pending").length+EXPENSES.filter(x=>x.status==="pending").length)===0?`<tr><td colspan="5" class="py-5 text-center text-slate-400">Không có đơn nào đang chờ duyệt.</td></tr>`:""}
    </tbody></table></div>` : "";

  document.getElementById("content").innerHTML = `
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
    ${kpiPop("Đang thực hiện", doingN, "việc đang chạy", "text-slate-400", "doing")}
    ${kpiPop("Sắp đến hạn", soonN, "trong 2 ngày tới", soonN?"text-amber-600":"text-slate-400", "soon")}
    ${kpiPop("Chậm deadline", lateN, "quá hạn — ưu tiên", "text-red-600", "late")}
    ${kpiPop("Đã hoàn thành", mm.done, `đúng hạn ${mm.onTimeRate}%`, "text-emerald-600", "done")}
  </div>
  <div class="grid md:grid-cols-3 gap-4 mb-4">
    <div class="md:col-span-2">${card("Bản tin buổi sáng <span class='text-[10px] font-semibold text-violet-600 bg-violet-50 rounded-full px-2 py-0.5 ml-1'>AI · 07:00</span>", `<p class="text-[13px] leading-6 text-slate-600">Chào buổi sáng! Bạn đang giữ <b>${l.wip} việc</b> (tải ~${l.loadPct}% quỹ ${CAPACITY_H}h). ${soonN?`Có <b>${soonN} việc sắp đến hạn</b> trong 2 ngày tới.`:""} ${lateN?`<span class="text-red-600">Có <b>${lateN} việc quá hạn</b> — xử lý hoặc báo quản lý.</span>`:"Không có việc quá hạn — giữ phong độ nhé!"}</p>`)}</div>
    ${card("Năng lực của tôi", `<div class="flex items-center gap-4"><div class="text-center"><div class="text-[28px] font-extrabold text-${AC}-700">${myDna.score}</div><div class="text-[10.5px] text-slate-400">Điểm đánh giá</div></div><div class="flex-1 text-[12px] space-y-1.5"><div class="flex justify-between"><span class="text-slate-500">Đúng hạn</span><b>${myDna.onTime}%</b></div><div class="flex justify-between"><span class="text-slate-500">Chất lượng TB</span><b>${myDna.quality||"—"}</b></div><div class="flex justify-between"><span class="text-slate-500">Tải hiện tại</span><b class="${l.overloaded?"text-red-600":""}">${l.loadPct}%</b></div></div></div><a href="work-dna.html" class="block mt-3 text-${AC}-600 text-[11.5px] font-semibold">Xem chi tiết đánh giá →</a>`)}
  </div>
  ${approvals}
  ${IS_BOSS?"":myRequestsCard()}
  ${birthdayCardHTML()}
  <div class="grid md:grid-cols-3 gap-4">
    <div class="md:col-span-2 bg-white border border-slate-200 rounded-xl p-4">
      <div class="flex items-center gap-2 flex-wrap mb-2"><h3 class="font-semibold text-[13.5px]">Task của tôi <span class="text-[11px] text-slate-400 font-normal">· sắp theo độ nguy cấp</span></h3><div class="ml-auto flex items-center gap-2">${statusDropdown("paintMy")}<a href="task-list.html" class="text-${AC}-600 text-[11.5px] font-semibold">Tất cả →</a></div></div>
      <table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">Task</th><th>Chuyên môn</th><th>Trạng thái</th><th>Tiến độ</th><th>Hạn</th></tr></thead><tbody id="myRows"></tbody></table>
    </div>
    <div>${card("Thông báo mới", buildNotifs().slice(0,5).map(n=>`<div class="py-2 border-b border-slate-50 text-[12.5px] flex gap-2 ${n.unread?"":"opacity-60"}"><span class="w-2 h-2 rounded-full mt-1.5 ${NDOT[n.type]}"></span><div><b>${n.title}</b><div class="text-[10.5px] text-slate-400">${n.time}</div></div></div>`).join(""), "Tất cả", "notifications.html")}</div>
  </div>`;
  paintMy();
}
function paintMy() {
  const mineName = IS_BOSS ? ME.name : "Linh Trần";
  const rows = TASKS.filter(t=>t.assignee===mineName).filter(passStatus).sort((a,b)=>urgRank(a)-urgRank(b)||D(a.due)-D(b.due)).map(t=>`
    <tr class="border-b border-slate-50 hover:bg-slate-50"><td class="py-2.5"><a href="task-detail.html?id=${t.id}" class="font-semibold text-slate-700 hover:text-${AC}-600">${t.title}</a></td><td class="text-slate-500">${t.spec}</td><td>${badge(dstat(t))}</td><td class="w-24">${progressBar(t.pct)}<span class="text-[10.5px] text-slate-400">${t.pct}%</span></td><td class="text-slate-500">${fmtDue(t.due)}</td></tr>`).join("");
  document.getElementById("myRows").innerHTML = rows || `<tr><td colspan="5" class="py-5 text-center text-slate-400">Không có task khớp bộ lọc.</td></tr>`;
}

/* =====================================================================
 *  QUẢN LÝ TASK — Bảng + Kanban + drill-down
 * ===================================================================== */
let FILTER = { q:"", who:"", spec:"", duePeriod:"all", dueDate:"", createdPeriod:"all", createdDate:"" };
let VIEWMODE = "table";
// Bảng + bộ lọc dùng chung cho "Công việc của tôi" và "Dashboard team"
function whoOptions(scope){
  if(scope==="mine") return `<option value="${ME.name}">Chỉ việc của tôi (Sếp)</option>`;
  if(scope==="staff") return `<option value="Linh Trần">Task của tôi</option><option value="">Tất cả</option>`;
  return `<option value="">Tất cả nhân sự</option><option value="${ME.name}" ${FILTER.who===ME.name?"selected":""}>Việc của tôi (Sếp)</option>`+USERS.filter(u=>u.name!==ME.name).map(u=>`<option ${FILTER.who===u.name?"selected":""}>${u.name}</option>`).join("");
}
function rerenderBoard(){ const y=window.scrollY; (window.BOARD_RENDER||function(){window.KEEP_FILTER=true;renderTaskList("");})(); window.scrollTo(0,y); requestAnimationFrame(()=>window.scrollTo(0,y)); }
function boardCardHTML(scope){
  window.BOARD_SCOPE = scope;
  return `<div class="bg-white border border-slate-200 rounded-xl p-4">
    <div class="flex flex-wrap gap-2 mb-2.5 items-center pb-2.5 border-b border-slate-100">
      <span class="text-[11.5px] font-semibold text-amber-600">★ Bộ lọc đã lưu</span>
      <select id="savedFilterSel" onchange="applySavedFilter(this.value)" class="border border-amber-200 rounded-lg px-3 py-1.5 text-[12px] bg-amber-50 font-medium text-slate-700">${savedFilterOptions()}</select>
      <button onclick="saveCurrentFilter()" class="text-[11.5px] font-semibold text-white bg-amber-500 rounded-lg px-3 py-1.5">＋ Lưu bộ lọc hiện tại</button>
      <button onclick="deleteSavedFilter()" class="text-[11.5px] font-semibold text-slate-400 border border-slate-200 rounded-lg px-3 py-1.5 bg-white">Xóa bộ lọc đã chọn</button>
    </div>
    <div class="flex flex-wrap gap-2 mb-3 items-center">
      <div class="flex bg-slate-100 rounded-lg p-0.5 mr-1">
        <button onclick="setView('table')" id="vTable" class="px-3 py-1.5 rounded-md text-[12px] font-semibold ${VIEWMODE==="table"?`bg-white text-${AC}-700 shadow-sm`:"text-slate-500"}">Bảng</button>
        <button onclick="setView('kanban')" id="vKanban" class="px-3 py-1.5 rounded-md text-[12px] font-semibold ${VIEWMODE==="kanban"?`bg-white text-${AC}-700 shadow-sm`:"text-slate-500"}">Kanban</button>
      </div>
      <select id="fWho" onchange="FILTER.who=this.value;repaint()" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white">${whoOptions(scope)}</select>
      ${statusDropdown("repaint")}
      <select id="fSpec" onchange="FILTER.spec=this.value;repaint()" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white"><option value="">Mọi chuyên môn</option>${SPECIALTIES.map(s=>`<option ${FILTER.spec===s?"selected":""}>${s}</option>`).join("")}</select>
      ${dateFilterUI("Ngày tạo","created")}
      ${dateFilterUI("Hạn","due")}
      <input id="fQ" onkeydown="if(event.key==='Enter')applyFilter()" class="flex-1 min-w-40 border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]" placeholder="Tìm theo tiêu đề…">
      <button onclick="applyFilter()" class="text-[12px] font-semibold text-white bg-${AC}-600 rounded-lg px-4 py-2">Lọc</button>
      <button onclick="resetFilter()" class="text-[12px] font-semibold text-slate-400 border border-slate-200 rounded-lg px-3 py-2 bg-white">Xóa lọc</button>
    </div>
    <div id="taskView"></div>
  </div>`;
}
function renderTaskList(query) {
  const q = new URLSearchParams(query || "");
  if(!window.KEEP_FILTER){
    FILTER = { q:"", who: IS_BOSS ? ME.name : "Linh Trần", spec: q.get("spec")||"", kind:"", duePeriod:"all", dueDate:"", createdPeriod:"all", createdDate:"" };
    window.statusFilter = q.get("status") ? [q.get("status")] : [];
  }
  window.KEEP_FILTER = false;
  window.BOARD_RENDER = function(){ window.KEEP_FILTER=true; renderTaskList(""); };
  VIEWMODE = q.get("view") === "kanban" ? "kanban" : "table";
  renderShell("task-list.html", "Công việc của tôi", IS_BOSS?"Chỉ hiển thị công việc của bạn · Bảng hoặc Kanban kéo-thả":"Lọc kết hợp · drill-down từ KPI · Bảng hoặc Kanban kéo-thả", btnAI);
  document.getElementById("content").innerHTML = `
  <div class="bg-violet-50 border border-violet-100 rounded-xl p-4 mb-4">
    <h3 class="font-semibold text-[13.5px] mb-2 text-violet-700">AI gợi ý giao việc</h3>
    <div class="flex gap-2"><input id="aiCmd" oninput="aiSuggest()" class="flex-1 border border-violet-200 rounded-lg px-3 py-2.5 text-[13px] bg-white focus:outline-none focus:ring-2 focus:ring-violet-200" placeholder='Gõ vd: "Giao Linh viết bài SEO Hà Nam…" — gõ tên nhân viên để AI gợi ý'><button onclick="aiAssign()" class="bg-violet-600 text-white font-semibold text-[12.5px] px-4 rounded-lg">Gợi ý</button></div>
    <div id="aiSuggest" class="hidden mt-2 flex flex-wrap items-center gap-1.5"></div>
    <div id="aiFlow" class="hidden mt-2"></div>
    <p id="aiMsg" class="hidden mt-2 text-[12.5px] bg-emerald-50 text-emerald-700 rounded-lg px-3 py-2"></p>
  </div>
  ${kindCardsHTML()}
  ${boardCardHTML(IS_BOSS?"mine":"staff")}`;
  // đồng bộ ô chọn trạng thái với query
  if (window.statusFilter.length) { const c=document.getElementById("stCount"); if(c)c.textContent=` (${window.statusFilter.length})`; document.querySelectorAll('#taskView ~ * input').forEach(()=>{}); }
  repaint();
}
const DATE_PERIODS = [["all","Tất cả"],["today","Hôm nay"],["yesterday","Hôm qua"],["7d","7 ngày qua"],["custom","Tự chọn ngày"]];
function dateFilterUI(label, kind){
  const period = FILTER[kind+"Period"]||"all", date = FILTER[kind+"Date"]||"";
  return `<label class="flex items-center gap-1.5 text-[12px] text-slate-500">${label}
    <select onchange="setDateFilter('${kind}','period',this.value)" class="border border-slate-200 rounded-lg px-2 py-2 text-[12.5px] bg-white">${DATE_PERIODS.map(([v,l])=>`<option value="${v}" ${period===v?"selected":""}>${l}</option>`).join("")}</select>
    <input id="f${kind}Date" type="date" value="${date}" onchange="setDateFilter('${kind}','date',this.value)" class="border border-slate-200 rounded-lg px-2 py-2 text-[12.5px] ${period==="custom"?"":"hidden"}"></label>`;
}
function setDateFilter(kind, which, val){
  if(which==="period") FILTER[kind+"Period"]=val; else FILTER[kind+"Date"]=val;
  const inp=document.getElementById("f"+kind+"Date");
  if(inp){ FILTER[kind+"Period"]==="custom" ? inp.classList.remove("hidden") : inp.classList.add("hidden"); }
  repaint();
}
function dateInPeriod(dateStr, period, custom){
  if(!period || period==="all") return true;
  if(!dateStr) return false;
  const d=new Date(dateStr); d.setHours(0,0,0,0);
  const today=new Date(NOW); today.setHours(0,0,0,0);
  if(period==="today") return d.getTime()===today.getTime();
  if(period==="yesterday"){ const y=new Date(today); y.setDate(y.getDate()-1); return d.getTime()===y.getTime(); }
  if(period==="7d"){ const s=new Date(today); s.setDate(s.getDate()-6); return d>=s && d<=today; }
  if(period==="custom"){ if(!custom) return true; const c=new Date(custom); c.setHours(0,0,0,0); return d.getTime()===c.getTime(); }
  return true;
}
// ── Bộ lọc đã lưu (yêu thích) ──
function loadSavedFilters(){ try{ return JSON.parse(localStorage.getItem("pw_savedFilters")||"[]"); }catch(e){ return []; } }
function saveSavedFilters(a){ localStorage.setItem("pw_savedFilters", JSON.stringify(a)); }
function savedFilterOptions(){ const a=loadSavedFilters(); return `<option value="">— Chọn bộ lọc —</option>`+a.map((s,i)=>`<option value="${i}">${s.name}</option>`).join(""); }
function saveCurrentFilter(){
  const name=(prompt("Đặt tên cho bộ lọc (vd: Khẩn cấp tuần này):")||"").trim(); if(!name) return;
  const arr=loadSavedFilters();
  arr.push({ name, f:{ who:FILTER.who, spec:FILTER.spec, q:FILTER.q, status:[...(window.statusFilter||[])], duePeriod:FILTER.duePeriod, dueDate:FILTER.dueDate, createdPeriod:FILTER.createdPeriod, createdDate:FILTER.createdDate, view:VIEWMODE } });
  saveSavedFilters(arr);
  rerenderBoard();
  setTimeout(()=>{ const sel=document.getElementById("savedFilterSel"); if(sel) sel.value=String(arr.length-1); },0);
  alert(`Đã lưu bộ lọc "${name}". Lần sau chỉ cần chọn lại là áp dụng ngay.`);
}
function applySavedFilter(idx){
  if(idx==="") return;
  const s=loadSavedFilters()[Number(idx)]; if(!s) return; const f=s.f||{};
  FILTER.who=f.who||""; FILTER.spec=f.spec||""; FILTER.q=f.q||"";
  FILTER.duePeriod=f.duePeriod||"all"; FILTER.dueDate=f.dueDate||"";
  FILTER.createdPeriod=f.createdPeriod||"all"; FILTER.createdDate=f.createdDate||"";
  window.statusFilter=[...(f.status||[])]; VIEWMODE=f.view||VIEWMODE;
  if(window.BOARD_SCOPE==="mine") FILTER.who=ME.name;   // trang của sếp luôn khóa theo sếp
  rerenderBoard();
  setTimeout(()=>{ const sel=document.getElementById("savedFilterSel"); if(sel) sel.value=String(idx); const fq=document.getElementById("fQ"); if(fq) fq.value=FILTER.q; },0);
}
function deleteSavedFilter(){
  const sel=document.getElementById("savedFilterSel"); if(!sel||sel.value===""){ alert("Hãy chọn một bộ lọc đã lưu để xóa."); return; }
  const arr=loadSavedFilters(); const i=Number(sel.value); const nm=(arr[i]||{}).name||"";
  if(!confirm(`Xóa bộ lọc "${nm}"?`)) return;
  arr.splice(i,1); saveSavedFilters(arr);
  rerenderBoard();
}
function kindCount(k){ return TASKS.filter(t=>(!FILTER.who||t.assignee===FILTER.who)).filter(t=>taskKind(t)===k).length; }
function kindCardsHTML(){
  const base=TASKS.filter(t=>(!FILTER.who||t.assignee===FILTER.who)).length;
  const given=TASKS.filter(t=>t.giver===ME.name).length;
  const cards=[["","Tất cả task",base,"slate"],["personal","Task cá nhân",kindCount("personal"),"blue"],["assigned","Task được giao",kindCount("assigned"),"violet"],["approval","Task cần phê duyệt",kindCount("approval"),"amber"],["given","Task đã giao",given,"emerald"]];
  return `<div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">${cards.map(([k,lb,n,col])=>`<button onclick="openKindPopup('${k}')" class="text-left bg-white border border-slate-200 rounded-xl p-4 hover:border-${col}-300 hover:ring-2 hover:ring-${col}-100 transition"><div class="text-[12px] font-semibold text-slate-500">${lb}</div><div class="text-[26px] font-extrabold text-${col}-600 leading-none mt-1.5">${n}</div><div class="text-[11px] text-slate-400 mt-1">bấm để xem danh sách</div></button>`).join("")}</div>`;
}
function openKindPopup(k){
  const map={"":"Tất cả task của tôi",personal:"Task cá nhân",assigned:"Task được giao",approval:"Task cần phê duyệt",given:"Task tôi đã giao"};
  let list;
  if(k==="given"){ list=TASKS.filter(t=>t.giver===ME.name); }
  else { list=TASKS.filter(t=>(!FILTER.who||t.assignee===FILTER.who)); if(k) list=list.filter(t=>taskKind(t)===k); }
  openTaskPopup(map[k]||"Danh sách task", list);
}
function pendingApprovalsBanner(){
  const lv=(typeof LEAVES!=="undefined"?LEAVES.filter(l=>l.status==="pending"):[]).length;
  const ex=(typeof EXPENSES!=="undefined"?EXPENSES.filter(e=>e.status==="pending"):[]).length;
  const rv=TASKS.filter(t=>t.status==="review" && (IS_BOSS||t.giver===ME.name||t.approver===ME.name)).length;
  const total=lv+ex+rv; if(!total) return "";
  const parts=[]; if(rv)parts.push(rv+" việc chờ nghiệm thu"); if(lv)parts.push(lv+" đơn nghỉ"); if(ex)parts.push(ex+" đề xuất chi phí");
  return `<a href="leaves.html" class="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 hover:bg-amber-100 transition"><span class="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 grid place-items-center text-[16px]">📋</span><div class="flex-1"><div class="text-[13px] font-bold text-amber-800">Đơn cần duyệt: ${total}</div><div class="text-[11.5px] text-amber-700">${parts.join(" · ")} — bấm để xử lý</div></div><span class="text-amber-700 text-[18px]">›</span></a>`;
}
function setKindFilter(k){ FILTER.kind=(FILTER.kind===k?"":k); rerenderBoard(); }
function filteredTasks() {
  return TASKS.filter(passStatus).filter(t=>(!FILTER.who||t.assignee===FILTER.who)).filter(t=>(!FILTER.spec||t.spec===FILTER.spec)).filter(t=>(!FILTER.kind||taskKind(t)===FILTER.kind)).filter(t=>dateInPeriod(t.due, FILTER.duePeriod, FILTER.dueDate)).filter(t=>dateInPeriod(t.createdAt, FILTER.createdPeriod, FILTER.createdDate)).filter(t=>(!FILTER.q||t.title.toLowerCase().includes(FILTER.q.toLowerCase())));
}
function setView(v){ VIEWMODE=v; document.getElementById("vTable").className=`px-3 py-1.5 rounded-md text-[12px] font-semibold ${v==="table"?`bg-white text-${AC}-700 shadow-sm`:"text-slate-500"}`; document.getElementById("vKanban").className=`px-3 py-1.5 rounded-md text-[12px] font-semibold ${v==="kanban"?`bg-white text-${AC}-700 shadow-sm`:"text-slate-500"}`; repaint(); }
function repaint(){ VIEWMODE==="kanban"?paintKanban():paintTable(); }
function applyFilter(){ const w=document.getElementById("fWho"); if(w)FILTER.who=w.value; const p=document.getElementById("fSpec"); if(p)FILTER.spec=p.value; const q=document.getElementById("fQ"); if(q)FILTER.q=q.value; repaint(); }
function paintTable() {
  const rows = filteredTasks().sort((a,b)=>D(a.due)-D(b.due)).map(t=>`
    <tr class="border-b border-slate-50 hover:bg-slate-50"><td class="py-2.5"><a href="task-detail.html?id=${t.id}" class="font-semibold text-slate-700 hover:text-${AC}-600">${t.title}</a> ${kindChip(t)}<div class="text-[11px] text-slate-400">${t.skill}${t.reworkCount?` · làm lại ${t.reworkCount}`:""}</div></td><td class="text-slate-600">${t.spec}${t.project?` · <span class="text-slate-400">${t.project}</span>`:""}</td><td>${avatar(t.assignee)} <span class="ml-1">${t.assignee.split(" ").pop()}</span></td><td>${badge(dstat(t))}</td><td>${prio(t.prio)}</td><td class="w-24">${progressBar(t.pct)}<span class="text-[10.5px] text-slate-400">${t.pct}%</span></td><td class="text-slate-400 whitespace-nowrap">${fmtDate(t.createdAt)}</td><td class="text-slate-500 whitespace-nowrap">${fmtDue(t.due)}</td></tr>`).join("");
  document.getElementById("taskView").innerHTML = `<table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">Task</th><th>Chuyên môn</th><th>Người làm</th><th>Trạng thái</th><th>Ưu tiên</th><th>Tiến độ</th><th>Ngày tạo</th><th>Hạn ↑</th></tr></thead><tbody>${rows||`<tr><td colspan="8" class="py-6 text-center text-slate-400">Không có task phù hợp.</td></tr>`}</tbody></table>`;
}
const KCOLS = [["todo","Chờ làm"],["doing","Đang làm"],["review","Chờ nghiệm thu"],["done","Hoàn thành"]];
function paintKanban() {
  const T = filteredTasks();
  const col = (key) => T.filter(t => (key==="doing" ? (dstat(t)==="doing"||dstat(t)==="late") : t.status===key));
  document.getElementById("taskView").innerHTML = `<div class="grid grid-cols-2 lg:grid-cols-4 gap-3">${KCOLS.map(([key,lb])=>{
    const items = col(key);
    return `<div class="kcol bg-slate-50 border border-slate-200 rounded-xl p-2.5" data-col="${key}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="kanbanDrop(event,'${key}')">
      <div class="flex items-center justify-between mb-2 px-1"><span class="text-[12.5px] font-semibold">${lb}</span><span class="text-[11px] font-semibold text-slate-500 bg-slate-200 rounded-full px-2">${items.length}</span></div>
      ${items.map(t=>{const st=dstat(t);return `<div class="kcard bg-white border ${st==="late"?"border-red-200":"border-slate-200"} rounded-lg p-2.5 mb-2 shadow-sm cursor-grab" draggable="true" data-id="${t.id}" ondragstart="kanbanDrag(event,${t.id})" ondragend="this.classList.remove('dragging')">
        <div class="h-1 rounded-full mb-2" style="background:${st==="late"?C.red:st==="done"?C.green:t.prio==="high"||t.prio==="urgent"?C.orange:C.blue}"></div>
        <a href="task-detail.html?id=${t.id}" class="text-[12.5px] font-semibold text-slate-700 hover:text-${AC}-600 block leading-snug">${t.title}</a><div class="mt-1">${kindChip(t)}</div>
        <div class="text-[10.5px] text-slate-400 mt-1">${t.spec}</div>
        <div class="flex items-center justify-between mt-2">${avatar(t.assignee)}<span class="text-[10.5px] ${st==="late"?"text-red-600 font-semibold":"text-slate-400"}">${fmtDate(t.due)}</span></div>
      </div>`;}).join("")||`<div class="text-[11px] text-slate-300 text-center py-4">— trống —</div>`}
    </div>`;}).join("")}</div>
  <p class="text-[11px] text-slate-400 mt-3">Kéo–thả thẻ giữa các cột để đổi trạng thái; mọi chỉ số sẽ tự tính lại theo trạng thái mới.</p>`;
}
let DRAG_ID = null;
function kanbanDrag(e, id){ DRAG_ID=id; e.target.classList.add("dragging"); }
function kanbanDrop(e, col){ e.preventDefault(); document.querySelectorAll(".kcol").forEach(c=>c.classList.remove("drag-over")); const t=TASKS.find(x=>x.id===DRAG_ID); if(!t)return; if((col==="doing"||col==="review"||col==="done") && isBlocked(t)){ alert("Task đang bị chặn bởi: "+blockersOf(t).map(b=>b.title).join(", ")+". Cần hoàn thành task đó trước."); paintKanban(); return; } t.status=col; if(col==="done"){t.pct=100; if(!t.acceptedAt)t.acceptedAt=new Date(NOW).toISOString(); if(t.score==null)t.score=85;} else if(col==="doing"&&!t.startedAt){t.startedAt=new Date(NOW).toISOString();} else if(col==="todo"){t.pct=0;} paintKanban(); }
function resetFilter(){ const sc=window.BOARD_SCOPE; const who = sc==="mine"?ME.name : (sc==="staff"?"Linh Trần":""); FILTER={q:"",who,spec:"",kind:"",duePeriod:"all",dueDate:"",createdPeriod:"all",createdDate:""}; window.statusFilter=[]; rerenderBoard(); }
let aiAssignee = null;
function aiSuggest(){
  const box = document.getElementById("aiSuggest"); if(!box) return;
  const v = document.getElementById("aiCmd").value;
  const q = (v.split(/\s+/).pop() || "").toLowerCase();
  const matches = q.length >= 1 ? USERS.filter(u => { const ln = u.name.toLowerCase(); const last = u.name.split(" ").pop().toLowerCase(); return ln.includes(q) || last.startsWith(q); }) : [];
  if (!matches.length) { box.classList.add("hidden"); box.innerHTML = ""; return; }
  box.classList.remove("hidden");
  box.innerHTML = `<span class="text-[11px] text-slate-400 mr-1">Gợi ý người nhận:</span>` + matches.slice(0,5).map(u => `<button onclick="aiPickPerson('${u.name}')" class="inline-flex items-center gap-1.5 border border-violet-200 bg-white rounded-full px-2.5 py-1 text-[12px] font-semibold hover:bg-violet-50">${avatar(u.name)} ${u.name}</button>`).join(" ");
}
function aiPickPerson(name, parsed){
  aiAssignee = name; const l = loadOf(name); parsed = parsed || {};
  document.getElementById("aiSuggest").classList.add("hidden");
  const flow = document.getElementById("aiFlow"); flow.classList.remove("hidden");
  flow.innerHTML = `<div class="bg-white border border-violet-200 rounded-lg p-3">
    <div class="bg-violet-50 border border-violet-100 rounded-lg px-3 py-2 mb-2.5 text-[12px] text-violet-700">🧠 <b>AI đã bóc tách lệnh</b> — kiểm tra các trường bên dưới rồi bấm <b>Xác nhận giao việc</b>. Hệ thống sẽ tạo task và gửi thông báo cho người nhận.</div>
    <div class="text-[12.5px] mb-2">Giao cho ${avatar(name)} <b>${name}</b> <span class="text-[11px] ${l.overloaded?"text-red-600":"text-slate-400"}">· đang ${l.wip} việc, tải ~${l.loadPct}%${l.overloaded?" — đang quá tải, cân nhắc người khác":""}</span></div>
    <div class="grid md:grid-cols-3 gap-2">
      <input id="aiTaskTitle" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]" placeholder="Tên công việc">
      <select id="aiTaskProj" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white">${SPECIALTIES.map(s=>`<option>${s}</option>`).join("")}</select>
      <input id="aiTaskDue" type="datetime-local" value="2026-06-12T17:00" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]">
    </div>
    <div class="flex gap-2 mt-2"><button onclick="aiConfirm()" class="bg-violet-600 text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">Xác nhận giao việc</button><button onclick="aiCancel()" class="border border-slate-200 text-slate-500 text-[12.5px] font-semibold px-3 py-2 rounded-lg">Hủy</button></div>
  </div>`;
  if(parsed.title){const e=document.getElementById("aiTaskTitle"); if(e)e.value=parsed.title;}
  if(parsed.project){const e=document.getElementById("aiTaskProj"); if(e)e.value=parsed.project;}
  if(parsed.due){const e=document.getElementById("aiTaskDue"); if(e)e.value=parsed.due;}
}
function aiCancel(){ aiAssignee = null; const f=document.getElementById("aiFlow"); f.classList.add("hidden"); f.innerHTML=""; }
function aiConfirm(){
  const ti = (document.getElementById("aiTaskTitle").value.trim()) || document.getElementById("aiCmd").value.trim() || "Task mới";
  const proj = document.getElementById("aiTaskProj").value;
  const m = document.getElementById("aiMsg"); m.classList.remove("hidden");
  m.innerHTML = `Đã tạo task <b>"${ti}"</b> · dự án ${proj} · giao <b>${aiAssignee}</b>, đã gửi thông báo và đưa vào hàng đợi của người nhận. <span class="text-slate-400">(demo)</span>`;
  aiCancel(); document.getElementById("aiCmd").value = "";
}
/* AI bóc tách lệnh ngôn ngữ tự nhiên → người nhận, tiêu đề, dự án, hạn */
function aiParseCommand(v){
  const lo = v.toLowerCase();
  const found = USERS.find(u => lo.includes(u.name.split(" ").pop().toLowerCase()));
  // tiêu đề: bỏ các động từ giao việc & tên người ở đầu câu
  let title = v.replace(/^\s*(giao|nhờ|assign|tạo task|tạo việc)\s+/i, "");
  if (found) { const last = found.name.split(" ").pop(); title = title.replace(new RegExp("\\b"+found.name+"\\b","i"),"").replace(new RegExp("\\b"+last+"\\b","i"),"").replace(/\b(cho|gửi)\b/i,""); }
  title = title.replace(/\s*,?\s*(gấp|khẩn|khẩn cấp)\s*/i," ").replace(/\s*(xong|hạn|deadline)\s+(thứ\s*\w+|hôm nay|ngày mai|cuối tuần).*$/i,"").replace(/\s+/g," ").trim();
  if(title) title = title.charAt(0).toUpperCase()+title.slice(1);
  // dự án: khớp theo tên dự án xuất hiện trong câu
  const project = PROJECT_NAMES.find(p => lo.includes(p.toLowerCase())) || PROJECT_NAMES.find(p => p.toLowerCase().split(" ").some(w => w.length>2 && lo.includes(w)));
  // hạn: nhận diện vài mốc thường gặp (demo)
  let due = "";
  const urgent = /(gấp|khẩn)/i.test(v);
  if (/(hôm nay|today)/i.test(v)) due = "2026-06-09T17:00";
  else if (/(ngày mai|tomorrow)/i.test(v)) due = "2026-06-10T17:00";
  else if (/(thứ\s*6|thứ\s*sáu|friday)/i.test(v)) due = "2026-06-12T17:00";
  else if (/(cuối tuần|chủ nhật)/i.test(v)) due = "2026-06-14T17:00";
  else if (urgent) due = "2026-06-10T17:00";
  return { found, title, project, due, urgent };
}
function aiAssign(){
  const v = document.getElementById("aiCmd").value.trim(); if (!v) return;
  const p = aiParseCommand(v);
  if (p.found) { aiPickPerson(p.found.name, { title: p.title || v, project: p.project, due: p.due }); }
  else { const m = document.getElementById("aiMsg"); m.classList.remove("hidden"); m.className = "mt-2 text-[12.5px] bg-amber-50 text-amber-700 rounded-lg px-3 py-2"; m.innerHTML = "AI chưa nhận ra người nhận — hãy gõ kèm tên nhân viên (vd: Linh, Nam, Ánh, Huy, Minh) để AI bóc tách lệnh và gợi ý chọn người."; }
}

/* =====================================================================
 *  CHI TIẾT TASK — vòng đời + chỉ số
 * ===================================================================== */
const FLOWS = {
  personal: ["Tạo task","Đang thực hiện","Hoàn thành"],
  approval: ["Tạo task","Đang thực hiện","Yêu cầu duyệt","Duyệt / Từ chối","Nghiệm thu"],
  assigned: ["Giao việc","Đang thực hiện","Yêu cầu duyệt","Nghiệm thu","Hoàn thành"]
};
/* Gán loại cho từng task: cá nhân (tự tạo) · được giao · cần phê duyệt */
const TASK_KIND = { 3:"personal",10:"personal",15:"personal",16:"personal",17:"personal", 4:"approval",5:"approval",8:"approval",11:"approval",14:"approval" };
const SPEC_MAP = {1:"Seo",2:"Ads Google",3:"Seo",4:"CRM",5:"Ads Facebook",6:"CRM",7:"Seo",8:"Seo",9:"Ads Google",10:"Ads Facebook",11:"Ads Facebook",12:"CRM",13:"Ads Google",14:"Seo",15:"Ads Facebook",16:"CDP",17:"Seo",18:"CDP"};
const FOLLOW_MAP = {1:["Nguyễn Văn Nam","Nam Phạm"],9:["Linh Trần"],16:["Nguyễn Văn Nam"]};
const LINK_MAP = { 3:{blockedBy:[1]}, 6:{blockedBy:[3]}, 8:{spawnedFrom:7}, 17:{spawnedFrom:8}, 2:{related:[13]}, 13:{related:[2]} };
TASKS.forEach(t=>{ if(!t.kind) t.kind = TASK_KIND[t.id] || "assigned"; if(!t.spec) t.spec = SPEC_MAP[t.id] || "Seo"; if(!t.followers) t.followers = FOLLOW_MAP[t.id] || []; const L=LINK_MAP[t.id]||{}; if(!t.blockedBy) t.blockedBy = L.blockedBy||[]; if(!t.related) t.related = L.related||[]; if(L.spawnedFrom && !t.spawnedFrom) t.spawnedFrom = L.spawnedFrom; });
function taskKind(t){ return t.kind || "assigned"; }
const KIND_INFO = {
  personal:["Cá nhân","bg-sky-100 text-sky-700","border-sky-200 bg-sky-50"],
  assigned:["Được giao","bg-indigo-100 text-indigo-700","border-indigo-200 bg-indigo-50"],
  approval:["Cần phê duyệt","bg-violet-100 text-violet-700","border-violet-200 bg-violet-50"],
};
function kindChip(t){ const k=KIND_INFO[taskKind(t)]; return `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${k[1]}">${k[0]}</span>`; }
const FLOW_TEXT = {
  personal:"Tạo task → Đang thực hiện → Hoàn thành (tự đánh giá Đúng hạn / Chậm deadline)",
  assigned:"Giao việc → Đang thực hiện → Yêu cầu duyệt → Nghiệm thu → Hoàn thành",
  approval:"Tạo task → Đang thực hiện → Yêu cầu duyệt → Duyệt / Từ chối (kèm lý do) → Nghiệm thu",
};
let TD_CONCL="approve";
function tdStar(n){ document.querySelectorAll('#tdStars button').forEach((b,i)=>{ b.className='w-7 h-7 rounded-lg border text-[12px] font-bold '+(i<n?('bg-'+AC+'-600 text-white border-'+AC+'-600'):'border-slate-200 text-slate-400'); }); const lb=document.getElementById('tdStarVal'); if(lb)lb.textContent=n.toFixed(1); }
function tdConcl(k){ TD_CONCL=k; const map={approve:'ring-emerald-400',revise:'ring-amber-400',reject:'ring-red-400'}; ['approve','revise','reject'].forEach(x=>{const b=document.getElementById('tdc-'+x); if(!b)return; b.classList.remove('ring-2','ring-emerald-400','ring-amber-400','ring-red-400'); if(x===k)b.classList.add('ring-2',map[x]); }); }
/* ----- LIÊN KẾT / RÀNG BUỘC TASK ----- */
let TD_TASKID=null;
const taskById = (id)=> TASKS.find(t=>t.id===id);
const tBlocks = (id)=> TASKS.filter(t=>(t.blockedBy||[]).includes(id));
const tChildren = (id)=> TASKS.filter(t=>t.spawnedFrom===id);
const blockersOf = (t)=> (t.blockedBy||[]).map(taskById).filter(b=>b && b.status!=="done");
const isBlocked = (t)=> blockersOf(t).length>0;
function linkRow(label, tasks){ if(!tasks.length) return ""; return `<div class="mb-2.5"><div class="text-[11px] font-semibold text-slate-500 mb-1">${label}</div>${tasks.map(x=>`<a href="task-detail.html?id=${x.id}" class="flex items-center gap-2 py-1.5 border-b border-slate-50 last:border-0 hover:text-${AC}-600"><span class="w-1.5 h-1.5 rounded-full ${x.status==="done"?"bg-emerald-500":dstat(x)==="late"?"bg-red-500":"bg-slate-300"}"></span><span class="text-[12.5px] font-semibold flex-1 text-slate-700">${x.title}</span>${badge(dstat(x))}</a>`).join("")}</div>`; }
function linkCard(t){
  const dep=(t.blockedBy||[]).map(taskById).filter(Boolean);
  const blk=tBlocks(t.id); const par=t.spawnedFrom?[taskById(t.spawnedFrom)].filter(Boolean):[]; const ch=tChildren(t.id); const rel=(t.related||[]).map(taskById).filter(Boolean);
  const any=dep.length||blk.length||par.length||ch.length||rel.length;
  return `<div class="bg-white border border-slate-200 rounded-2xl p-5">
    <div class="flex items-center mb-3"><h3 class="font-bold text-[15px]">Liên kết task</h3><div class="ml-auto flex gap-2"><button onclick="linkAddToggle()" class="text-[11.5px] font-semibold text-${AC}-700 border border-${AC}-200 rounded-lg px-2.5 py-1.5">＋ Liên kết task có sẵn</button><button onclick="openSpawnModal(${t.id})" class="text-[11.5px] font-semibold text-white bg-${AC}-600 rounded-lg px-2.5 py-1.5">＋ Tạo task tiếp theo</button></div></div>
    <div id="linkAddForm" class="hidden bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3"><div class="flex flex-wrap gap-2"><select id="lkRel" class="border border-slate-200 rounded-lg px-2 py-1.5 text-[12px] bg-white"><option value="blockedBy">Phụ thuộc vào (chờ task này xong)</option><option value="related">Liên quan</option></select><select id="lkTask" class="border border-slate-200 rounded-lg px-2 py-1.5 text-[12px] bg-white flex-1 min-w-[180px]">${TASKS.filter(x=>x.id!==t.id).map(x=>`<option value="${x.id}">${x.title}</option>`).join("")}</select><button onclick="linkAddSave(${t.id})" class="bg-${AC}-600 text-white text-[12px] font-semibold px-3 rounded-lg">Liên kết</button></div></div>
    ${any?`${linkRow("Phụ thuộc vào (phải xong trước)",dep)}${linkRow("Mở khóa cho",blk)}${linkRow("Task cha (sinh ra từ)",par)}${linkRow("Task con (tiếp theo)",ch)}${linkRow("Liên quan",rel)}`:`<div class="text-[12.5px] text-slate-400">Chưa có liên kết nào. Dùng nút bên trên để liên kết task có sẵn hoặc tạo task tiếp theo.</div>`}
  </div>`;
}
function linkAddToggle(){ const f=document.getElementById("linkAddForm"); if(f)f.classList.toggle("hidden"); }
function linkAddSave(aId){
  const a=taskById(aId); if(!a) return;
  const rel=document.getElementById("lkRel").value; const tid=Number(document.getElementById("lkTask").value);
  if(rel==="blockedBy"){ a.blockedBy=a.blockedBy||[]; if(!a.blockedBy.includes(tid)) a.blockedBy.push(tid); }
  else { a.related=a.related||[]; if(!a.related.includes(tid)) a.related.push(tid); const o=taskById(tid); if(o){ o.related=o.related||[]; if(!o.related.includes(aId)) o.related.push(aId); } }
  renderTaskDetail("id="+aId);
}
function linkSpawn(aId){
  const a=taskById(aId); if(!a) return;
  const id=Math.max(...TASKS.map(t=>t.id))+1;
  TASKS.push({ id, title:"Tiếp theo: "+a.title, project:a.project, spec:a.spec, assignee:a.assignee, status:"todo", prio:a.prio, pct:0, skill:a.skill, estimateH:4, reworkCount:0, createdAt:new Date(NOW).toISOString(), due:a.due, kind:a.kind, spawnedFrom:aId, blockedBy:[], related:[], followers:(a.followers||[]).slice() });
  alert(`Đã tạo task tiếp theo, liên kết với "${a.title}". (demo)`);
  location.hash="#task-detail.html?id="+id;
}
function tdSubmitReview(kind){
const sc=(document.getElementById('tdScore')||{}).value||'-'; if(kind==='revise'){ alert(`Đã TRẢ LẠI nhân viên để chỉnh sửa. Đã gửi thông báo. (demo)`); } else { const k=TD_CONCL; const w=k==='reject'?'TỪ CHỐI (không đạt)':k==='revise'?'TRẢ LẠI chỉnh sửa':'DUYỆT & hoàn thành'; alert(`Kết luận: ${w}. Điểm: ${sc}/100. Đã lưu KPI & gửi thông báo cho nhân viên. (demo)`);
  if(k==='approve' && TD_TASKID){ const t=taskById(TD_TASKID); if(t){ t.status='done'; t.pct=100; if(!t.acceptedAt) t.acceptedAt=new Date(NOW).toISOString();
    const deps=tBlocks(t.id).filter(x=>x.status!=='done'); if(deps.length){ alert(`Đã mở khóa ${deps.length} task phụ thuộc: ${deps.map(x=>x.title).join(", ")}. Đã thông báo người làm.`); }
    if(confirm("Công việc này có phát sinh task tiếp theo không? Bấm OK để tạo task con (liên kết với task này).")){ openSpawnModal(t.id); return; }
    renderTaskDetail("id="+t.id);
  } }
}
}
function tdAIFill(q){ const i=document.getElementById('tdAIInput'); if(i){i.value=q;i.focus();} }
function tdAISend(){ const i=document.getElementById('tdAIInput'); const v=(i&&i.value||'').trim(); if(!v)return; alert(`AI: "${v}" (demo)`); }
function tdSaveSchedule(id){
  const t=TASKS.find(x=>x.id===id); if(!t) return;
  const ns=(document.getElementById("tdStart")||{}).value||"";
  const nd=(document.getElementById("tdDue")||{}).value||"";
  const rm=(document.getElementById("tdRemind")||{}).value||"Không nhắc";
  const ds=(document.getElementById("tdDesc")||{}).value||"";
  const ne=(document.getElementById("tdEta")||{}).value||"";
  const os=(t.startedAt||"").slice(0,16), od=(t.due||"").slice(0,16);
  const changed=[];
  if(ns && ns!==os){ t.startedAt=ns; changed.push("ngày bắt đầu"); }
  if(nd && nd!==od){ t.due=nd; changed.push("hạn deadline"); }
  if(ne!==(t.eta||"")){ t.eta=ne; changed.push("ước tính hoàn thành"); }
  t.desc=ds; t.remind=rm;
  let msg="Đã lưu thông tin task.";
  if(changed.length){ msg+=` Đã gửi thông báo cho người giao task (Nguyễn Văn Nam) về thay đổi ${changed.join(" & ")}.`; }
  if(rm!=="Không nhắc"){ msg+=` Hệ thống sẽ nhắc bạn ${rm} trước khi task bắt đầu.`; }
  const fol=[...document.querySelectorAll("#tdFollowers .tdFollower.ring-2")].map(b=>b.getAttribute("data-name"));
  const added=fol.filter(n=>!(t.followers||[]).includes(n));
  t.followers=fol;
  if(added.length){ msg+=` Đã thêm người theo dõi: ${added.join(", ")} (đã gửi thông báo).`; }
  alert(msg+" (demo)");
}
function renderTaskDetail(query) {
  const id = Number(new URLSearchParams(query).get("id")) || 1;
  const t = TASKS.find(x => x.id === id) || TASKS[0];
  TD_CONCL = "approve"; TD_TASKID = t.id;
  renderShell("task-list.html", t.title, `Chuyên môn: ${t.spec}${t.project?` · Dự án: ${t.project}`:""} · Giao bởi: Nguyễn Văn Nam`, "");
  const st = dstat(t);
  const KIND = taskKind(t); const FLOW = FLOWS[KIND]; const lastStep = FLOW.length-1;
  const fmtFull=(d)=>{ if(!d)return "—"; const x=new Date(d),p=n=>String(n).padStart(2,"0"); return `${p(x.getDate())}/${p(x.getMonth()+1)}/${x.getFullYear()} ${p(x.getHours())}:${p(x.getMinutes())}`; };
  const dpart=(d)=>{ const x=new Date(d),p=n=>String(n).padStart(2,"0"); return [`${p(x.getDate())}/${p(x.getMonth()+1)}`, `${p(x.getHours())}:${p(x.getMinutes())}`]; };
  const prioDot = (t.prio==="urgent"||t.prio==="high")?"bg-red-500":t.prio==="medium"?"bg-sky-500":"bg-slate-400";
  const taskCode = `#${(t.skill||"TASK").toUpperCase()}-${2400+t.id}`;
  const uTitle = (USERS.find(u=>u.name===t.assignee)||{}).title || "Nhân viên";

  // ----- stepper -----
  const cur = st==="done"?lastStep : st==="review"?(KIND==="personal"?1:2) : (st==="doing"||st==="late")?1 : 0;
  const stepDates = KIND==="personal" ? [t.createdAt,t.startedAt,(t.status==="done"?t.acceptedAt:null)] : [t.createdAt,t.startedAt,t.submittedAt,t.acceptedAt,(t.status==="done"?t.acceptedAt:null)];
  const stepper = FLOW.map((s,i)=>{
    const done = i<cur || st==="done"; const active = i===cur && st!=="done";
    const circle = done?`<div class="w-8 h-8 rounded-full bg-emerald-500 text-white grid place-items-center text-[13px] font-bold">${i+1}</div>`
      : active?`<div class="w-8 h-8 rounded-full bg-${AC}-600 text-white grid place-items-center text-[12px] font-bold">${i+1}</div>`
      : `<div class="w-8 h-8 rounded-full border-2 border-slate-200 text-slate-400 grid place-items-center text-[12px] font-bold bg-white">${i+1}</div>`;
    const sub = stepDates[i]?fmtDue(stepDates[i]):"";
    const pill = active?`<div class="mt-1.5 inline-block bg-${AC}-50 text-${AC}-700 text-[10px] font-semibold rounded-full px-2 py-0.5">Chờ bạn đánh giá</div>`:"";
    const line = i<FLOW.length-1?`<div class="flex-1 h-0.5 mt-4 ${done?"bg-emerald-400":"bg-slate-200"}"></div>`:"";
    return `<div class="flex flex-col items-center text-center px-1 shrink-0"><div>${circle}</div><div class="text-[12px] font-semibold mt-1.5 ${done||active?"text-slate-700":"text-slate-400"}">${s}</div><div class="text-[10.5px] text-slate-400">${sub}</div>${pill}</div>${line}`;
  }).join("");

  // ----- submitted files (demo) -----
  const files=[{n:"bai-seo-fpt-ha-nam-v2.docx",ft:"DOCX",sz:"2.4 MB"},{n:"keyword-research.xlsx",ft:"XLSX",sz:"1.1 MB"},{n:"report-crm-cleaning.pdf",ft:"PDF",sz:"1.8 MB"}];
  const subTime = t.submittedAt?fmtDue(t.submittedAt):"—";
  const fileRows = files.map(f=>{const ff=ft1(f.ft);return `<div class="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
    <span class="w-9 h-9 rounded-lg grid place-items-center text-[15px] ${ff[0]} shrink-0">${ff[1]}</span>
    <div class="flex-1 min-w-0"><div class="text-[12.5px] font-semibold text-slate-800 truncate">${f.n}</div><div class="text-[10.5px] text-slate-400">${f.sz} · Nộp lúc ${subTime}</div></div>
    <button onclick="alert('Xem (demo)')" class="text-[11px] text-slate-400 hover:text-${AC}-600">Xem</button><button onclick="alert('Tải (demo)')" class="text-[11px] text-slate-400 hover:text-${AC}-600">Tải</button><button onclick="alert('Tùy chọn (demo)')" class="text-slate-400 hover:text-${AC}-600">Khác</button>
  </div>`;}).join("");

  // ----- timeline (sidebar) -----
  const events=[
    {d:t.createdAt, title:"Giao việc", who:"Nguyễn Văn Nam giao task", c:"bg-emerald-500"},
    {d:t.startedAt, title:"Bắt đầu thực hiện", who:`${t.assignee} bắt đầu`, c:"bg-emerald-500"},
    {d:t.submittedAt, title:"Nộp kết quả", who:`${t.assignee} nộp để bạn đánh giá`, c:`bg-${AC}-600`},
  ].filter(e=>e.d);
  const timeline = events.map((e,i)=>{const [dd,hh]=dpart(e.d);return `<div class="flex gap-3"><div class="w-12 shrink-0 text-right"><div class="text-[11px] font-semibold text-slate-500">${dd}</div><div class="text-[10.5px] text-slate-400">${hh}</div></div><div class="flex flex-col items-center"><span class="w-2.5 h-2.5 rounded-full ${e.c} mt-1"></span>${i<events.length-1?`<span class="w-0.5 flex-1 bg-slate-200 my-1"></span>`:""}</div><div class="pb-4"><div class="text-[12.5px] font-semibold text-slate-700">${e.title}</div><div class="text-[11px] text-slate-400">${e.who}</div></div></div>`;}).join("");

  const infoRow=(lb,val)=>`<div class="flex items-start gap-3"><span class="w-28 shrink-0 text-[12.5px] text-slate-400 pt-0.5">${lb}</span><div class="flex-1 text-[13px] font-semibold text-slate-800">${val}</div></div>`;

  document.getElementById("content").innerHTML = `
  <div class="rounded-xl px-4 py-3 mb-4 border flex flex-wrap items-center gap-3 ${KIND_INFO[KIND][2]}">
    <span class="px-3 py-1 rounded-full text-[12.5px] font-bold ${KIND_INFO[KIND][1]}">${KIND==="personal"?"Task cá nhân (tự tạo)":KIND==="assigned"?"Task được giao":"Task cần phê duyệt"}</span>
    <span class="text-[12.5px] text-slate-600"><b>Quy trình:</b> ${FLOW_TEXT[KIND]}</span>
  </div>
  ${isBlocked(t)?`<div class="rounded-xl px-4 py-3 mb-4 border border-red-200 bg-red-50 text-red-700 text-[12.5px] font-semibold">⛔ Task đang bị chặn — phải hoàn thành trước: ${blockersOf(t).map(b=>`<a href="task-detail.html?id=${b.id}" class="underline">${b.title}</a>`).join(", ")}. Chưa thể bắt đầu thực hiện.</div>`:""}
  <div class="grid grid-cols-1 xl:grid-cols-[1fr_330px] gap-5">
    <div class="space-y-4 min-w-0">

      <div class="bg-white border border-slate-200 rounded-2xl p-5">
        <h3 class="font-bold text-[15px] mb-4">Thông tin task</h3>
        <div class="grid md:grid-cols-2 gap-x-10 gap-y-4">
          <div class="space-y-4">
            ${infoRow("Task ID", taskCode)}
            ${infoRow("Người thực hiện", `<div class="flex items-center gap-2">${avatar(t.assignee)}<div><div>${t.assignee}</div><div class="text-[11px] text-slate-400 font-normal">${uTitle}</div></div></div>`)}
            ${infoRow("Nhóm", teamOf(t.assignee))}
            ${infoRow("Ưu tiên", `<span class="inline-flex items-center gap-1.5"><span class="w-2 h-2 rounded-full ${prioDot}"></span>${PRIO[t.prio][0]}</span>`)}
          </div>
          <div class="space-y-4">
            ${infoRow("Hạn hoàn thành", fmtFull(t.due))}
            ${infoRow("Ngày nộp kết quả", t.submittedAt?`<span class="text-emerald-600">${fmtFull(t.submittedAt)}</span>`:"—")}
            ${infoRow("Trạng thái", badge(st))}
            ${infoRow("Tiến độ", `<div class="flex items-center gap-3"><div class="flex-1">${progressBar(t.pct)}</div><b>${t.pct}%</b></div>`)}
          </div>
        </div>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-5">
        <h3 class="font-bold text-[15px] mb-4">${KIND==="personal"?"Quy trình (cá nhân)":KIND==="approval"?"Quy trình phê duyệt":"Quy trình giao việc & nghiệm thu"}${KIND==="personal"&&st==="done"?` <span class="text-[11px] font-semibold align-middle rounded-full px-2 py-0.5 ${isOnTimeDone(t)?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}">${isOnTimeDone(t)?"Hoàn thành đúng hạn":"Chậm deadline"}</span>`:""}</h3>
        <div class="flex items-start">${stepper}</div>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-5">
        <div class="flex items-center mb-4"><h3 class="font-bold text-[15px]">Thời gian, nhắc lịch & mô tả</h3><span class="ml-2 text-[10px] font-semibold text-${AC}-700 bg-${AC}-50 rounded-full px-2 py-0.5">áp dụng cho mọi task</span></div>
        <div class="grid md:grid-cols-3 gap-4">
          <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Ngày & giờ bắt đầu</label><input id="tdStart" type="datetime-local" value="${t.startedAt?t.startedAt.slice(0,16):""}" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px]"></div>
          <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Hạn deadline</label><input id="tdDue" type="datetime-local" value="${t.due?t.due.slice(0,16):""}" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px]"></div>
          <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Nhắc trước khi bắt đầu</label><select id="tdRemind" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px]">${["Không nhắc","5 phút trước","10 phút trước","15 phút trước"].map(o=>`<option ${(t.remind||"Không nhắc")===o?"selected":""}>${o}</option>`).join("")}</select></div>
        </div>
        <div class="mt-3"><label class="text-[11px] font-semibold text-slate-500 block mb-1">Mô tả công việc</label><textarea id="tdDesc" rows="3" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]" placeholder="Nhập mô tả chi tiết công việc…">${t.desc||""}</textarea></div>

        <div class="mt-3"><label class="text-[11px] font-semibold text-slate-500 block mb-1">Người theo dõi</label><div id="tdFollowers" class="flex flex-wrap gap-1.5">${USERS.map(u=>{const on=(t.followers||[]).includes(u.name);return `<button type="button" data-name="${u.name}" onclick="this.classList.toggle('ring-2');this.classList.toggle('ring-${AC}-400');this.classList.toggle('bg-${AC}-50')" class="tdFollower inline-flex items-center gap-1 border border-slate-200 rounded-full px-2.5 py-1 text-[11px] ${on?`ring-2 ring-${AC}-400 bg-${AC}-50`:""}">${avatar(u.name)} ${u.name.split(" ").pop()}</button>`;}).join("")}</div></div>
        <div class="flex items-center gap-2 mt-3"><span class="text-[11px] text-slate-400">Đổi thời gian hoặc người theo dõi sẽ tự gửi thông báo liên quan.</span><button onclick="tdSaveSchedule(${t.id})" class="ml-auto bg-${AC}-600 text-white font-semibold text-[13px] px-5 py-2 rounded-lg">Lưu thay đổi</button></div>
      </div>

      ${linkCard(t)}

      <div id="tdSubmitGrid" class="grid md:grid-cols-2 gap-4">
        <div class="bg-white border border-slate-200 rounded-2xl p-5">
          <div class="flex items-center mb-3"><h3 class="font-bold text-[14px]">Kết quả nhân viên đã nộp</h3><button onclick="alert('Tải tất cả (demo)')" class="ml-auto text-[11.5px] font-semibold text-${AC}-700 border border-${AC}-200 rounded-lg px-2.5 py-1.5">Tải tất cả</button></div>
          ${fileRows}
        </div>
        <div class="bg-white border border-slate-200 rounded-2xl p-5">
          <h3 class="font-bold text-[14px] mb-3">Ghi chú của nhân viên</h3>
          <div class="border border-slate-200 rounded-xl p-3 text-[12.5px] text-slate-600 leading-6">Em đã hoàn thành các đầu việc theo yêu cầu.<br>Anh/chị vui lòng kiểm tra giúp ạ.</div>
          <div id="tdAISum" class="bg-${AC}-50 border border-${AC}-100 rounded-xl p-3 mt-3">
            <div class="flex items-center gap-1.5 mb-1.5"><span class="text-${AC}-600"></span><b class="text-[12px] text-${AC}-700">AI tóm tắt nội dung nộp</b><span class="text-[9px] font-bold text-${AC}-600 bg-white rounded-full px-1.5 py-0.5">BETA</span><button onclick="document.getElementById('tdAISum').style.display='none'" class="ml-auto text-slate-400 leading-none xclose">×</button></div>
            <ul class="text-[12px] text-slate-600 space-y-1 list-disc pl-4"><li>Đã làm sạch 3.200 bản ghi</li><li>Xóa 245 bản ghi trùng</li><li>Chuẩn hóa email và số điện thoại</li><li>Đính kèm báo cáo chi tiết</li></ul>
            <button onclick="alert('Xem chi tiết (demo)')" class="mt-2 text-[11.5px] font-semibold text-${AC}-700 border border-${AC}-200 rounded-lg px-3 py-1">Xem chi tiết</button>
          </div>
        </div>
      </div>

      <div id="tdReviewPanel" class="bg-white border border-slate-200 rounded-2xl p-5">
        <h3 class="font-bold text-[15px] mb-4">Đánh giá &amp; nghiệm thu</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div>
            <div class="text-[12.5px] font-semibold mb-1">1. Đánh giá chất lượng công việc</div>
            <div class="text-[11px] text-slate-400 mb-2">Chấm điểm (Tùy chọn)</div>
            <div class="flex items-center gap-2 mb-3"><div id="tdStars" class="flex gap-1">${[1,2,3,4,5].map(i=>`<button onclick="tdStar(${i})" class="w-7 h-7 rounded-lg border text-[12px] font-bold ${i<=4?`bg-${AC}-600 text-white border-${AC}-600`:'border-slate-200 text-slate-400'}">${i}</button>`).join("")}</div><b class="text-[15px]"><span id="tdStarVal">4.0</span><span class="text-slate-400 text-[12px]">/5</span></b></div>
            <div class="text-[11px] text-slate-400 mb-1">Nhận xét chi tiết</div>
            <textarea rows="3" maxlength="1000" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]" placeholder="Nhập nhận xét…">Nhìn chung công việc tốt, dữ liệu được xử lý sạch sẽ. Cần bổ sung thêm báo cáo tổng hợp theo mẫu.</textarea>
          </div>
          <div>
            <div class="text-[12.5px] font-semibold mb-2">2. Kết luận</div>
            <div class="grid grid-cols-1 gap-2 mb-3">
              <button id="tdc-approve" onclick="tdConcl('approve')" class="border-2 border-emerald-200 bg-emerald-50 ring-2 ring-emerald-400 rounded-xl p-2.5 text-left"><div class="text-[12.5px] font-bold text-emerald-700">Duyệt &amp; hoàn thành</div><div class="text-[10.5px] text-slate-400">Chấp nhận kết quả</div></button>
              <button id="tdc-revise" onclick="tdConcl('revise')" class="border-2 border-amber-200 bg-amber-50 rounded-xl p-2.5 text-left"><div class="text-[12.5px] font-bold text-amber-700">Trả lại chỉnh sửa</div><div class="text-[10.5px] text-slate-400">Yêu cầu chỉnh sửa</div></button>
              <button id="tdc-reject" onclick="tdConcl('reject')" class="border-2 border-red-200 bg-red-50 rounded-xl p-2.5 text-left"><div class="text-[12.5px] font-bold text-red-700">Từ chối</div><div class="text-[10.5px] text-slate-400">Không đạt yêu cầu</div></button>
            </div>
            <div class="text-[11px] text-slate-400 mb-1">Yêu cầu chỉnh sửa (nếu có)</div>
            <textarea rows="2" maxlength="1000" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]" placeholder="Nhập nội dung cần chỉnh sửa, bổ sung…"></textarea>
          </div>
          <div>
            <div class="text-[12.5px] font-semibold mb-2">3. Điểm số <span class="text-slate-400 font-normal">(Tùy chọn)</span></div>
            <div class="text-[11px] text-slate-400 mb-1">Điểm đánh giá</div>
            <div class="flex items-center gap-2 mb-4"><input id="tdScore" value="85" class="w-20 border border-slate-200 rounded-lg px-3 py-2 text-[15px] font-bold text-center"><span class="text-slate-400 text-[13px]">/100</span></div>
            <label class="flex items-center gap-2 text-[12.5px] cursor-pointer"><input type="checkbox" checked class="w-9 h-5 accent-${AC}-600"> Lưu vào KPI</label>
          </div>
        </div>
        <div class="flex justify-end gap-2 mt-5 pt-4 border-t border-slate-100"><button onclick="tdSubmitReview('revise')" class="border border-slate-200 text-slate-600 font-semibold text-[13px] px-5 py-2.5 rounded-lg">Trả lại nhân viên</button><button onclick="tdSubmitReview('approve')" class="bg-${AC}-600 text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg">Duyệt &amp; hoàn thành</button></div>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-5">
        <div class="flex items-center mb-3"><h3 class="font-bold text-[14px]">Nhận xét gần đây</h3><a href="task-list.html" class="ml-auto text-[12px] font-semibold text-${AC}-600">Xem tất cả trao đổi</a></div>
        <div class="flex items-start gap-2.5">${avatar(t.assignee)}<div class="flex-1"><div class="flex items-center gap-2"><b class="text-[12.5px]">${t.assignee}</b><span class="text-[11px] text-slate-400">${subTime}</span></div><p class="text-[12.5px] text-slate-600 mt-0.5">Em đã bổ sung đủ file và ghi chú theo yêu cầu ạ.</p><button onclick="alert('Thích (demo)')" class="mt-1.5 text-[11px] text-slate-500 border border-slate-200 rounded-full px-2 py-0.5">2</button></div></div>
      </div>

    </div>

    <div class="space-y-4">
      <div id="tdAIPanel" class="bg-white border border-slate-200 rounded-2xl p-4">
        <div class="flex items-center gap-2 mb-3"><span class="w-8 h-8 rounded-lg bg-violet-600 text-white grid place-items-center text-[13px]"></span><b class="text-[14px] text-slate-800">AI Assistant</b><span class="text-[10px] font-bold text-violet-600 bg-violet-50 rounded-full px-2 py-0.5">BETA</span><button onclick="document.getElementById('tdAIPanel').style.display='none'" class="ml-auto text-slate-400 leading-none xclose">×</button></div>
        <div class="flex items-center justify-between mb-2"><b class="text-[13px]">Phân tích kết quả nộp</b><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Đánh giá tích cực</span></div>
        <p class="text-[12px] text-slate-500 mb-1.5">AI đã phân tích nội dung và phát hiện:</p>
        <ul class="text-[12.5px] space-y-1 mb-3 list-disc pl-4 text-slate-600"><li>3 file đã nộp đầy đủ</li><li>Checklist hoàn thành 3/5 mục</li><li>Nội dung ghi chú rõ ràng, đầy đủ</li></ul>
        <button onclick="alert('Xem phân tích chi tiết (demo)')" class="w-full border border-slate-200 rounded-lg py-2 text-[12.5px] font-semibold text-slate-600 mb-3">Xem phân tích chi tiết</button>
        <b class="text-[12.5px] block mb-2">Gợi ý cho bạn</b>
        <div class="space-y-2">${["So sánh với các lần nộp trước","Gợi ý nhận xét đánh giá","Kiểm tra mức độ hoàn thành","Tạo báo cáo nghiệm thu"].map(q=>`<button onclick="tdAIFill('${q}')" class="w-full text-left bg-${AC}-50 hover:bg-${AC}-100 text-${AC}-700 font-semibold text-[12px] rounded-lg px-3 py-2.5">${q}</button>`).join("")}</div>
        <div class="flex items-center gap-2 border border-slate-200 rounded-full px-3 py-2 mt-3"><input id="tdAIInput" onkeydown="if(event.key==='Enter')tdAISend()" class="flex-1 text-[12.5px] focus:outline-none bg-transparent" placeholder="Hỏi AI bất kỳ điều gì..."><button onclick="tdAISend()" class="text-${AC}-600">Gửi</button></div>
        <p class="text-[10.5px] text-slate-400 mt-1.5">AI có thể mắc sai sót. Vui lòng kiểm tra lại.</p>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-4">
        <h3 class="font-bold text-[14px] mb-3">Mốc thời gian</h3>
        ${timeline||`<div class="text-slate-400 text-[12px]">Chưa có mốc thời gian.</div>`}
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-4 text-[13px]">
        <h3 class="font-bold text-[14px] mb-3">Thông tin liên quan</h3>
        <div class="flex justify-between py-1.5"><span class="text-slate-400">Chuyên môn</span><b>${t.spec}</b></div>
        <div class="flex justify-between py-1.5"><span class="text-slate-400">Nhóm</span><b>${teamOf(t.assignee)}</b></div>
        <div class="py-1.5"><div class="text-slate-400 mb-1.5">Người giao việc</div><div class="flex items-center gap-2">${avatar("Nguyễn Văn Nam")}<div class="flex-1"><b class="text-[12.5px]">Nguyễn Văn Nam</b><div class="text-[11px] text-slate-400 font-normal">Marketing Manager</div></div><button onclick="alert('Nhắn tin (demo)')" class="text-slate-400"></button></div></div>
      </div>
    </div>
  </div>${taskChatCardHTML(t)}`;
  const meWorker = t.assignee===ME.name;
  const meReviewer = IS_BOSS || t.giver===ME.name || t.approver===ME.name;
  if(KIND==="personal"){ ["tdSubmitGrid","tdReviewPanel"].forEach(i=>{const e=document.getElementById(i); if(e)e.style.display="none";}); }
  else { if(!meReviewer){ const e=document.getElementById("tdReviewPanel"); if(e)e.style.display="none"; } if(!meWorker||meReviewer){ const e=document.getElementById("tdSubmitGrid"); if(e)e.style.display="none"; } }
  paintTaskChat();
}
function tagHtml(text){ return text.replace(/@([\wÀ-ỹ]+)/g,'<span class="text-'+AC+'-600 font-semibold bg-'+AC+'-50 rounded px-1">@$1</span>'); }
function insertTag(tag){ const i=document.getElementById("cmt"); i.value=(i.value+" "+tag+" ").replace(/\s+/g," ").trimStart(); i.focus(); }
function addComment(){ const v=document.getElementById("cmt").value.trim(); if(!v)return; document.getElementById("cmts").insertAdjacentHTML("afterbegin",`<div class="border-b border-slate-50 pb-2"><b>${ME.name}</b> <span class="text-[10.5px] text-slate-400">vừa xong</span><div>${tagHtml(v)}</div></div>`); document.getElementById("cmt").value=""; }

/* =====================================================================
 *  LỊCH CÔNG VIỆC
 * ===================================================================== */
let VIEW="day", DAY=8, ALL_EVENTS=[];
const DOW=["T2","T3","T4","T5","T6","T7","CN"];
const dowOf=(d)=>DOW[(new Date(2026,5,d).getDay()+6)%7];
const ETYPE={ task:["border-l-4 border-indigo-500 bg-indigo-50","text-indigo-700"], late:["border-l-4 border-red-500 bg-red-50","text-red-700"], meet:["border-l-4 border-violet-500 bg-violet-50","text-violet-700"], leave:["border-l-4 border-emerald-500 bg-emerald-50","text-emerald-700"], done:["border-l-4 border-emerald-500 bg-emerald-50","text-emerald-700"] };
function visibleNames(){ if(IS_BOSS)return null; return new Set(GROUPS[teamOf(ME.name)]||[ME.name]); }
function buildEvents(){
  ALL_EVENTS=[];
  TASKS.forEach(t=>{ if(t.assignee!==ME.name)return; const dt=D(t.due); ALL_EVENTS.push({ d:dt.getDate(), time:dt.toTimeString().slice(0,5), title:"Hạn: "+t.title, who:t.assignee.split(" ").pop(), where:"", type:dstat(t)==="late"?"late":(t.status==="done"?"done":"task"), href:`task-detail.html?id=${t.id}`, tid:t.id }); });
  const ALLNAMES=USERS.map(u=>u.name);
  const meets=[{d:7,time:"09:00",title:"Họp Marketing tuần 23",who:"Cả team",where:"Phòng họp 1",members:ALLNAMES},{d:8,time:"08:30",title:"Họp giao ban BGH",who:"Ban giám hiệu",where:"Phòng họp 1",members:["Nguyễn Văn Nam"]},{d:8,time:"10:00",title:"Họp content team",who:"Content",where:"Phòng họp 2",members:["Linh Trần","Ánh Dương"]},{d:8,time:"14:00",title:"Review LP Bắc Ninh",who:"Ánh",where:"",members:["Ánh Dương","Nam Phạm"]},{d:9,time:"14:00",title:"Họp content tuần",who:"Cả team",where:"Phòng họp 2",members:ALLNAMES}];
  meets.forEach(m=>{ if((m.members||[]).includes(ME.name))ALL_EVENTS.push({...m,type:"meet",href:"#"}); });
  if(IS_BOSS||ME.name==="Ánh Dương")ALL_EVENTS.push({d:8,time:"",title:"Ánh nghỉ phép (08–10/06)",who:"Ánh",where:"",type:"leave",href:"leaves.html"});
}
function renderCalendar(){ VIEW="day"; DAY=8; buildEvents(); renderShell("calendar.html","Lịch công việc", "Chỉ hiển thị công việc của bạn & các cuộc họp bạn tham gia"+" · di chuột vào công việc để Chỉnh sửa hoặc Gửi cho người khác", btnAI); paintCal(); }
function setVCal(v){ VIEW=v; paintCal(); }
function setDay(d){ DAY=Math.min(30,Math.max(1,d)); paintCal(); }
function jumpDay(val){ if(!val)return; DAY=new Date(val).getDate(); VIEW="day"; paintCal(); }
function eAttr(e){
  if(e.tid) return `href="#" onclick="event.preventDefault();openEventModal(${e.tid})"`;
  if(e.type==="meet") return `href="#" onclick="event.preventDefault();openMeetInfo(${ALL_EVENTS.indexOf(e)})"`;
  return `href="${e.href||'#'}"`;
}
function openMeetInfo(idx){
  const e=ALL_EVENTS[idx]; if(!e) return;
  closeEventModal();
  document.body.insertAdjacentHTML("beforeend", `<div id="evtModal" class="fixed inset-0 z-[60] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeEventModal()">
    <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
      <div class="px-5 py-3 border-b border-slate-200 flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-violet-500"></span><h3 class="font-bold text-[15px]">${e.title}</h3><button onclick="closeEventModal()" class="ml-auto text-slate-400 text-xl leading-none xclose">×</button></div>
      <div class="p-5 space-y-2.5 text-[12.5px]">
        <div><span class="text-slate-400">Loại:</span> <b class="text-violet-700">Cuộc họp</b></div>
        <div><span class="text-slate-400">Thời gian:</span> <b>${e.time?e.time+" · ":""}${dowOf(e.d)}, ${String(e.d).padStart(2,"0")}/06/2026</b></div>
        <div><span class="text-slate-400">Thành phần:</span> <b>${e.who||"—"}</b></div>
        ${e.where?`<div><span class="text-slate-400">Địa điểm:</span> <b>${e.where}</b></div>`:""}
      </div>
      <div class="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onclick="closeEventModal()" class="border border-slate-200 text-slate-600 font-semibold text-[12.5px] px-4 py-2 rounded-lg">Đóng</button><button onclick="alert('Demo: đã xác nhận tham gia cuộc họp.')" class="bg-violet-600 text-white font-semibold text-[12.5px] px-4 py-2 rounded-lg">Tham gia</button></div>
    </div></div>`);
}
function evtActions(e){
  if(!e.tid) return "";
  return `<div class="hidden group-hover:flex absolute top-1 right-1 z-30 gap-1">
    <button onclick="event.preventDefault();event.stopPropagation();goEditTask(${e.tid})" title="Chỉnh sửa task (mở chi tiết)" class="w-6 h-6 grid place-items-center rounded-md bg-white border border-slate-200 shadow-sm text-${AC}-600 hover:bg-${AC}-50 text-[12px] leading-none">✎</button>
    <button onclick="event.preventDefault();event.stopPropagation();openSendTask(${e.tid})" title="Gửi task này cho ai" class="w-6 h-6 grid place-items-center rounded-md bg-white border border-slate-200 shadow-sm text-emerald-600 hover:bg-emerald-50 text-[13px] leading-none">↗</button>
  </div>`;
}
const CAL_ST={done:["Hoàn thành","bg-emerald-100 text-emerald-700"],doing:["Đang làm","bg-sky-100 text-sky-700"],late:["Quá hạn","bg-red-100 text-red-700"],todo:["Chờ làm","bg-slate-100 text-slate-500"],review:["Chờ nghiệm thu","bg-amber-100 text-amber-700"]};
function calStatusChip(e){ if(!e.tid)return ""; const t=TASKS.find(x=>x.id===e.tid); if(!t)return ""; const m=CAL_ST[dstat(t)]||CAL_ST.todo; return `<span class="px-1.5 py-0.5 rounded-full text-[9px] font-bold ${m[1]} shrink-0">${m[0]}</span>`; }
function eCard(e,compact){ return `<div class="relative group">${evtActions(e)}<a ${eAttr(e)} class="block rounded-lg px-2.5 ${compact?"py-1 mt-1":"py-2 mb-1.5"} ${ETYPE[e.type][0]} ${e.tid?"cursor-pointer":""}"><div class="flex items-baseline gap-2 ${e.tid?"pr-12":""}">${e.time?`<b class="text-[11px] ${ETYPE[e.type][1]} shrink-0">${e.time}</b>`:""}<span class="text-[${compact?"10.5":"12"}px] font-semibold truncate">${e.title}</span>${calStatusChip(e)}${!compact?`<span class="text-[11px] text-slate-400 shrink-0">${e.who}</span>`:""}${!compact&&e.where?`<span class="ml-auto text-[11px] font-semibold ${ETYPE[e.type][1]} shrink-0">${e.where}</span>`:""}</div></a></div>`; }
function openEventModal(id){
  const t = TASKS.find(x=>x.id===id); if(!t) return;
  const canEdit = t.assignee === ME.name;
  closeEventModal();
  const startVal = t.startedAt ? t.startedAt.slice(0,16) : "";
  const dueVal = t.due ? t.due.slice(0,16) : "";
  document.body.insertAdjacentHTML("beforeend", `<div id="evtModal" class="fixed inset-0 z-[60] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeEventModal()">
    <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
      <div class="px-5 py-3 border-b border-slate-200 flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full" style="background:${dstat(t)==='late'?C.red:C.blue}"></span><h3 class="font-bold text-[15px]">${t.title}</h3><button onclick="closeEventModal()" class="ml-auto text-slate-400 text-xl leading-none xclose">×</button></div>
      <div class="p-5 space-y-3 text-[12.5px]">
        <div class="flex items-center gap-2">${badge(dstat(t))} ${prio(t.prio)}<span class="text-slate-400">Chuyên môn: <b class="text-slate-600">${t.spec}</b></span></div>
        <div class="flex items-center gap-2">${avatar(t.assignee)} <span>Phụ trách: <b>${t.assignee}</b> · Nhóm ${teamOf(t.assignee)}</span></div>
        ${!canEdit?`<div class="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-[12px] text-amber-700">🔒 Chỉ <b>${t.assignee}</b> (người phụ trách) mới chỉnh sửa được công việc này — bạn đang ở chế độ xem.</div>`:""}
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Bắt đầu</label><input id="evtStart" type="datetime-local" value="${startVal}" ${canEdit?"":"disabled"} class="w-full border border-slate-200 rounded-lg px-3 py-2 ${canEdit?"":"bg-slate-50 text-slate-400"}"></div>
          <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Hạn kết thúc</label><input id="evtDue" type="datetime-local" value="${dueVal}" ${canEdit?"":"disabled"} class="w-full border border-slate-200 rounded-lg px-3 py-2 ${canEdit?"":"bg-slate-50 text-slate-400"}"></div>
        </div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Nhắc / tag người hỗ trợ</label>
          <div id="evtTags" class="flex flex-wrap gap-1.5">${USERS.filter(u=>u.name!==t.assignee).map(u=>`<button type="button" data-tag="${u.name}" ${canEdit?`onclick="this.classList.toggle('ring-2');this.classList.toggle('ring-${AC}-400');this.classList.toggle('bg-${AC}-50')"`:"disabled"} class="inline-flex items-center gap-1 border border-slate-200 rounded-full px-2 py-1 text-[11px] ${canEdit?"":"opacity-50"}">${avatar(u.name)} ${u.name.split(" ").pop()}</button>`).join("")}</div>
        </div>
      </div>
      <div class="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onclick="closeEventModal()" class="border border-slate-200 text-slate-600 font-semibold text-[12.5px] px-4 py-2 rounded-lg">Đóng</button><a href="task-detail.html?id=${t.id}" class="text-${AC}-700 border border-${AC}-200 font-semibold text-[12.5px] px-4 py-2 rounded-lg">Mở chi tiết</a>${canEdit?`<button onclick="saveEvent(${t.id})" class="bg-${AC}-600 text-white font-semibold text-[12.5px] px-4 py-2 rounded-lg">Lưu</button>`:""}</div>
    </div></div>`);
}
function closeEventModal(){ const e=document.getElementById("evtModal"); if(e)e.remove(); }
function saveEvent(id){
  const t=TASKS.find(x=>x.id===id); if(!t) return;
  const s=document.getElementById("evtStart"), d=document.getElementById("evtDue");
  if(s&&s.value) t.startedAt=s.value;
  if(d&&d.value) t.due=d.value;
  const tags=[...document.querySelectorAll("#evtTags button.ring-2")].map(b=>b.getAttribute("data-tag"));
  closeEventModal();
  buildEvents(); paintCal();
  alert("Đã lưu công việc."+(tags.length?` Đã tag & thông báo: ${tags.join(", ")}.`:""));
}
/* Hành động hover trên lịch: chỉnh sửa (mở chi tiết) hoặc gửi task cho người khác */
function goEditTask(id){ location.hash = "#task-detail.html?id=" + id; }
function openSendTask(id){
  const t = TASKS.find(x=>x.id===id); if(!t) return;
  closeSendModal();
  document.body.insertAdjacentHTML("beforeend", `<div id="sendModal" class="fixed inset-0 z-[70] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeSendModal()">
    <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
      <div class="px-5 py-3 border-b border-slate-200 flex items-center gap-2"><span class="text-emerald-600 text-lg leading-none">↗</span><h3 class="font-bold text-[15px]">Gửi task cho…</h3><button onclick="closeSendModal()" class="ml-auto text-slate-400 text-xl leading-none xclose">×</button></div>
      <div class="p-5 space-y-3 text-[12.5px]">
        <div class="text-slate-500">Task: <b class="text-slate-700">${t.title}</b></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Chọn người nhận</label>
          <div id="sendWho" class="flex flex-wrap gap-1.5">${USERS.filter(u=>u.name!==ME.name).map(u=>`<button type="button" data-name="${u.name}" onclick="[...this.parentElement.children].forEach(b=>b.classList.remove('ring-2','ring-emerald-400','bg-emerald-50'));this.classList.add('ring-2','ring-emerald-400','bg-emerald-50')" class="inline-flex items-center gap-1 border border-slate-200 rounded-full px-2 py-1 text-[11px]">${avatar(u.name)} ${u.name.split(" ").pop()}</button>`).join("")}</div>
        </div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Lời nhắn (không bắt buộc)</label><textarea id="sendNote" rows="2" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]" placeholder="vd: Nhờ bạn hỗ trợ phần này giúp mình…"></textarea></div>
      </div>
      <div class="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onclick="closeSendModal()" class="border border-slate-200 text-slate-600 font-semibold text-[12.5px] px-4 py-2 rounded-lg">Hủy</button><button onclick="doSendTask(${id})" class="bg-emerald-600 text-white font-semibold text-[12.5px] px-4 py-2 rounded-lg">Gửi task</button></div>
    </div></div>`);
}
function closeSendModal(){ const e=document.getElementById("sendModal"); if(e)e.remove(); }
function doSendTask(id){
  const t=TASKS.find(x=>x.id===id); if(!t) return;
  const sel=document.querySelector("#sendWho button.ring-2"); if(!sel){ alert("Hãy chọn người nhận trước khi gửi."); return; }
  const who=sel.getAttribute("data-name");
  const note=(document.getElementById("sendNote")?.value||"").trim();
  t.followers = Array.from(new Set([...(t.followers||[]), who]));   // liên kết người nhận vào task
  closeSendModal();
  alert(`Đã gửi task "${t.title}" cho ${who}.${note?`\nLời nhắn: "${note}"`:""}\nNgười nhận đã được thêm vào người theo dõi và nhận thông báo. (demo)`);
}
function paintCal(){
  const tabs=[["day","Ngày"],["week","Tuần"],["month","Tháng"],["kanban","Kanban"]]; let body="";
  if(VIEW==="day"){ const evs=ALL_EVENTS.filter(e=>e.d===DAY).sort((a,b)=>(a.time||"00")>(b.time||"00")?1:-1); const hours=["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];
    body=`<div class="bg-white border border-slate-200 rounded-xl p-4"><div class="flex items-center gap-2 mb-3 flex-wrap"><button onclick="setDay(DAY-1)" class="border border-slate-200 rounded-lg px-3 py-1 font-bold text-[12px]">Trước</button><b class="text-[13.5px]">${dowOf(DAY)}, ${String(DAY).padStart(2,"0")}/06/2026 ${DAY===8?"· Hôm nay":""}</b><button onclick="setDay(DAY+1)" class="border border-slate-200 rounded-lg px-3 py-1 font-bold text-[12px]">Sau</button>${evs.filter(e=>!e.time).map(e=>`<span class="ml-2">${eCard(e,true)}</span>`).join("")}</div><div class="grid grid-cols-[56px_1fr]">${hours.map(h=>{const at=evs.filter(e=>e.time&&e.time.slice(0,2)===h.slice(0,2));return `<div class="text-[11px] text-slate-400 py-2 border-t border-slate-100">${h}</div><div class="py-1.5 border-t border-slate-100 min-h-[40px]">${at.map(e=>eCard(e,false)).join("")}</div>`;}).join("")}</div></div>`; }
  if(VIEW==="week"){ const week=[8,9,10,11,12,13,14]; body=`<div class="bg-white border border-slate-200 rounded-xl p-4"><b class="text-[13.5px] block mb-3">Tuần 08/06 – 14/06/2026</b><div class="grid grid-cols-7 gap-2">${week.map((d,i)=>`<div class="border border-slate-200 rounded-xl p-2 min-h-[200px]"><button onclick="setDay(${d});setVCal('day')" class="text-[11px] font-bold ${i>=5?"text-orange-500":"text-slate-500"} hover:text-${AC}-600">${DOW[i]} · ${String(d).padStart(2,"0")}</button>${ALL_EVENTS.filter(e=>e.d===d).sort((a,b)=>(a.time||"00")>(b.time||"00")?1:-1).map(e=>eCard(e,true)).join("")}</div>`).join("")}</div></div>`; }
  if(VIEW==="month"){ const firstDow=(new Date(2026,5,1).getDay()+6)%7; let cells=""; for(let i=0;i<firstDow;i++)cells+=`<div class="bg-slate-50/50 rounded-lg"></div>`; for(let d=1;d<=30;d++){const today=d===8; cells+=`<div class="bg-white border ${today?`border-${AC}-500 ring-2 ring-${AC}-100`:"border-slate-200"} rounded-lg p-1.5 min-h-[90px]"><button onclick="setDay(${d});setVCal('day')" class="text-[11px] font-bold ${today?`text-${AC}-600`:"text-slate-400"}">${d}${today?" · Nay":""}</button>${ALL_EVENTS.filter(e=>e.d===d).slice(0,3).map(e=>`<div class="relative group mt-1">${evtActions(e)}<a ${eAttr(e)} class="block px-1.5 py-0.5 rounded text-[10px] font-semibold truncate ${ETYPE[e.type][0]}">${e.time?e.time+" · ":""}${e.title}</a></div>`).join("")}${ALL_EVENTS.filter(e=>e.d===d).length>3?`<button onclick="setDay(${d});setVCal('day')" class="text-[10px] text-${AC}-600 font-bold mt-0.5">+${ALL_EVENTS.filter(e=>e.d===d).length-3} nữa…</button>`:""}</div>`;} body=`<div class="grid grid-cols-7 gap-1.5 text-center text-[10.5px] uppercase font-bold text-slate-400 mb-1.5">${DOW.map(d=>`<div>${d}</div>`).join("")}</div><div class="grid grid-cols-7 gap-1.5">${cells}</div>`; }
  if(VIEW==="kanban"){
    const mine=TASKS.filter(t=>t.assignee===ME.name);
    body=`<div class="bg-white border border-slate-200 rounded-xl p-4"><div class="grid grid-cols-2 lg:grid-cols-4 gap-3">${KCOLS.map(([key,lb])=>{const items=mine.filter(t=>(key==="doing"?(dstat(t)==="doing"||dstat(t)==="late"):t.status===key));return `<div class="bg-slate-50 border border-slate-200 rounded-xl p-2.5"><div class="flex items-center justify-between mb-2 px-1"><span class="text-[12.5px] font-semibold">${lb}</span><span class="text-[11px] font-semibold text-slate-500 bg-slate-200 rounded-full px-2">${items.length}</span></div>${items.map(t=>{const st=dstat(t);return `<a href="task-detail.html?id=${t.id}" class="block bg-white border ${st==="late"?"border-red-200":"border-slate-200"} rounded-lg p-2.5 mb-2 shadow-sm hover:border-${AC}-300"><div class="h-1 rounded-full mb-2" style="background:${st==="late"?C.red:st==="done"?C.green:C.blue}"></div><div class="text-[12.5px] font-semibold text-slate-700 leading-snug">${t.title}</div><div class="text-[10.5px] text-slate-400 mt-1">${t.spec}</div><div class="flex items-center justify-between mt-2">${avatar(t.assignee)}<span class="text-[10.5px] ${st==="late"?"text-red-600 font-semibold":"text-slate-400"}">${fmtDate(t.due)}</span></div></a>`;}).join("")||`<div class="text-[11px] text-slate-300 text-center py-4">— trống —</div>`}</div>`;}).join("")}</div></div>`;
  }
  document.getElementById("content").innerHTML=`<div class="flex items-center gap-2 mb-4 flex-wrap"><div class="flex bg-white border border-slate-200 rounded-lg p-0.5">${tabs.map(([k,l])=>`<button onclick="setVCal('${k}')" class="px-4 py-1.5 rounded-md text-[12.5px] font-semibold ${VIEW===k?`bg-${AC}-600 text-white`:"text-slate-500"}">${l}</button>`).join("")}</div><label class="flex items-center gap-1.5 text-[12px] text-slate-500 font-semibold">Lọc cụ thể<input type="date" min="2026-06-01" max="2026-06-30" onchange="jumpDay(this.value)" class="border border-slate-200 rounded-lg px-2.5 py-1.5 text-[12.5px]"></label><span class="ml-auto text-[11.5px] text-slate-400 flex items-center gap-3"><span class="inline-flex items-center"><i class="w-2.5 h-2.5 rounded-sm bg-indigo-500 mr-1"></i>Task</span><span class="inline-flex items-center"><i class="w-2.5 h-2.5 rounded-sm bg-red-500 mr-1"></i>Quá hạn</span><span class="inline-flex items-center"><i class="w-2.5 h-2.5 rounded-sm bg-violet-500 mr-1"></i>Họp</span><span class="inline-flex items-center"><i class="w-2.5 h-2.5 rounded-sm bg-emerald-500 mr-1"></i>Nghỉ phép</span></span></div>${body}`;
}

/* =====================================================================
 *  AI ASSISTANT — trả lời từ metrics thật
 * ===================================================================== */
function aiAnswer(q) {
  const m = metrics(); const over = MEMBERS.map(n=>({n,...loadOf(n)})).filter(x=>x.overloaded);
  if (/quá tải|overload/i.test(q)) return over.length?`Đang quá tải: ${over.map(x=>`<b>${x.n}</b> (${x.wip} việc, tải ~${x.loadPct}%)`).join("; ")}. Đề xuất điều phối bớt việc ưu tiên thấp sang người đang dưới ${WIP_LIMIT} việc.`:"Hiện không ai vượt ngưỡng quá tải.";
  if (/trễ|quá hạn|deadline|sắp/i.test(q)) { const late=TASKS.filter(isOverdue); const soon=TASKS.filter(t=>t.status!=="done"&&!isOverdue(t)&&daysBetween(NOW,t.due)<=1); return `Có <b>${late.length} task quá hạn</b> (${late.map(t=>t.title.split(" ").slice(0,3).join(" ")).join(", ")||"không"}) và <b>${soon.length} task tới hạn trong 24h</b>.`; }
  if (/hiệu suất|chỉ số|tổng/i.test(q)) return `Toàn team: ${m.total} task · hoàn thành ${m.completionRate}% · đúng hạn ${m.onTimeRate}% · đạt-ngay-lần-đầu ${m.firstPassRate}% (rework ${m.reworkRate}%) · cycle time TB ${m.avgCycleDays} ngày.`;
  if (/linh/i.test(q)) { const d=dna("Linh Trần"); const l=loadOf("Linh Trần"); return `<b>Linh Trần</b>: ${l.wip} việc mở (tải ~${l.loadPct}%), đúng hạn ${d.onTime}%, chất lượng TB ${d.quality}, điểm Work DNA ${d.score}. Mood hôm nay: áp lực.`; }
  return `Tôi tra trên dữ liệu thật: ${m.total} task, hoàn thành ${m.completionRate}%, ${m.late} quá hạn. Bạn có thể hỏi: <i>Ai đang quá tải? · Task nào sắp trễ? · Hiệu suất team thế nào? · Linh hôm nay ra sao?</i>`;
}
function renderAIAssistant() {
  renderShell("ai-assistant.html", "AI Assistant Chat", "Trợ lý AI trả lời trên dữ liệu thật của hệ thống", btnAI);
  document.getElementById("content").innerHTML = `
  <div class="grid md:grid-cols-[240px_1fr_250px] gap-4">
    <div class="bg-white border border-slate-200 rounded-xl p-3"><button class="w-full border border-indigo-600 text-indigo-700 font-bold text-[12px] rounded-lg py-2 mb-2" onclick="alert('Demo: phiên mới')">Cuộc trò chuyện mới</button>${[["Tổng hợp báo cáo cuối ngày","10:30",true],["Tình hình dự án Bắc Ninh","09:15"],["Nhắc việc quá hạn","04/06"]].map(([t,d,on])=>`<div class="px-3 py-2 rounded-lg text-[12.3px] cursor-pointer mb-1 ${on?"bg-indigo-50 border border-indigo-200":"hover:bg-slate-50"}"><b class="block font-semibold">${t}</b><span class="text-[10.5px] text-slate-400">${d}</span></div>`).join("")}</div>
    <div class="bg-white border border-slate-200 rounded-xl p-4 flex flex-col" style="height:72vh">
      <div id="msgs" class="flex-1 overflow-y-auto pr-1 space-y-3"><div class="max-w-[80%] bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 text-[12.8px] leading-6">Xin chào ${ME.name.split(" ").pop()}! Hỏi tôi bất cứ điều gì về dữ liệu công việc — tôi tính trực tiếp từ hệ thống.</div></div>
      <div class="flex flex-wrap gap-1.5 mt-3 mb-2">${["Ai đang quá tải?","Task nào sắp trễ?","Hiệu suất team thế nào?","Linh hôm nay ra sao?"].map(q=>`<button onclick="ask('${q}')" class="border border-slate-200 rounded-full px-3 py-1.5 text-[11.5px] text-slate-500 hover:border-indigo-400 hover:text-indigo-600">${q}</button>`).join("")}</div>
      <div class="flex gap-2"><input id="q" onkeydown="if(event.key==='Enter')send()" class="flex-1 border border-slate-200 rounded-full px-4 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Hỏi hoặc giao việc bằng ngôn ngữ tự nhiên…"><button onclick="send()" class="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold">Gửi</button></div>
    </div>
    <div class="space-y-4"><div class="bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-xl p-4 text-[12.3px] space-y-2.5"><h3 class="font-bold text-[13px] text-violet-700">AI đề xuất</h3><div><b>${metrics().late} task quá hạn</b><div class="text-slate-500">cần ưu tiên xử lý</div></div><div><b>Rework ${metrics().reworkRate}%</b><div class="text-slate-500">soát chất lượng đầu vào</div></div></div></div>
  </div>`;
}
function ask(q){ document.getElementById("q").value=q; send(); }
function send(){ const inp=document.getElementById("q"),v=inp.value.trim(); if(!v)return; inp.value=""; const box=document.getElementById("msgs"); box.insertAdjacentHTML("beforeend",`<div class="max-w-[80%] ml-auto bg-indigo-600 text-white rounded-2xl rounded-br-sm px-4 py-3 text-[12.8px]">${v}</div>`); box.insertAdjacentHTML("beforeend",`<div id="typing" class="max-w-[80%] bg-slate-100 rounded-2xl px-4 py-3 text-[12.8px] text-slate-400">Đang phân tích dữ liệu…</div>`); box.scrollTop=box.scrollHeight; setTimeout(()=>{document.getElementById("typing").outerHTML=`<div class="max-w-[80%] bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 text-[12.8px] leading-6">${aiAnswer(v)}</div>`; box.scrollTop=box.scrollHeight;},700); }

/* =====================================================================
 *  LUỒNG PHÊ DUYỆT
 * ===================================================================== */
let LTAB="leave", LQ="", DECISION=null;
const LST={ pending:["Chờ duyệt","bg-amber-100 text-amber-700"], approved:["Đã duyệt","bg-emerald-100 text-emerald-700"], rejected:["Từ chối","bg-red-100 text-red-700"] };
const STAFF_ME = "Linh Trần"; // nhân viên demo
function renderLeaves(){ LTAB="all"; LQ=""; DECISION=null; renderShell("leaves.html","Luồng phê duyệt","",""); paintLeaves(); }
function setLeaveTab(t){ LTAB=t; DECISION=null; paintLeaves(); }
function doLeaveSearch(){ const e=document.getElementById("lq"); LQ=e?e.value:""; paintLeaves(); }
function clearLeaveSearch(){ LQ=""; paintLeaves(); }
/* Quyết định duyệt/từ chối → mở ô comment+tag → xác nhận mới xử lý */
function leaveDecide(kind,id,decision){ DECISION={kind,id,decision}; paintLeaves(); const n=document.getElementById("decNote"); if(n)n.focus(); }
function leaveCancelDecision(){ DECISION=null; paintLeaves(); }
function decTag(tag){ const i=document.getElementById("decNote"); if(!i)return; i.value=(i.value+" "+tag+" ").replace(/\s+/g," ").trimStart(); i.focus(); }
function leaveConfirmDecision(){
  if(!DECISION) return;
  const note=(document.getElementById("decNote")?.value||"").trim();
  const arr = DECISION.kind==="leave"?LEAVES:EXPENSES;
  const item = arr.find(x=>x.id===DECISION.id); if(!item){ DECISION=null; return paintLeaves(); }
  item.status = DECISION.decision;
  const word = DECISION.decision==="approved"?"DUYỆT":"TỪ CHỐI";
  alert(`Đã ${word} đơn của ${item.who}.${note?`\nÝ kiến kèm theo: "${note}"`:""}\nĐơn được xử lý chính thức và đã gửi thông báo tới ${item.who}.`);
  DECISION=null; paintLeaves();
}
/* Lịch nghỉ phép — Tháng 6/2026 */
function leaveDayRange(l){ const f=parseInt(String(l.from).split("/")[0],10), t=parseInt(String(l.to).split("/")[0],10); const out=[]; for(let d=f; d<=t; d++) out.push(d); return out; }
function leaveCalendarHTML(leaves){
  const byDay={}; leaves.forEach(l=>leaveDayRange(l).forEach(d=>{(byDay[d]=byDay[d]||[]).push(l);}));
  const tcls=(l)=> l.status==="rejected"?"bg-red-100 text-red-700":l.status==="pending"?"bg-amber-100 text-amber-700":(l.type==="Làm online"?"bg-sky-100 text-sky-700":"bg-emerald-100 text-emerald-700");
  const firstDow=(new Date(2026,5,1).getDay()+6)%7; let cells="";
  for(let i=0;i<firstDow;i++)cells+=`<div class="bg-slate-50/40 rounded-lg"></div>`;
  for(let d=1;d<=30;d++){ const today=d===8; const items=byDay[d]||[];
    cells+=`<div class="bg-white border ${today?`border-${AC}-500 ring-2 ring-${AC}-100`:"border-slate-200"} rounded-lg p-1.5 min-h-[64px]"><div class="text-[11px] font-bold ${today?`text-${AC}-600`:"text-slate-400"}">${d}${today?" · Nay":""}</div>${items.map(l=>`<div class="mt-1 px-1.5 py-0.5 rounded text-[10px] font-semibold truncate ${tcls(l)}" title="${l.who} · ${l.type} · ${LST[l.status][0]}">${l.who.split(" ").pop()}</div>`).join("")}</div>`;
  }
  return `<div class="grid grid-cols-7 gap-1.5 text-center text-[10.5px] uppercase font-bold text-slate-400 mb-1.5">${DOW.map(d=>`<div>${d}</div>`).join("")}</div><div class="grid grid-cols-7 gap-1.5">${cells}</div><div class="flex flex-wrap gap-3 mt-2 text-[10.5px] text-slate-400"><span class="inline-flex items-center"><i class="w-2.5 h-2.5 rounded-sm bg-amber-300 mr-1"></i>Chờ duyệt</span><span class="inline-flex items-center"><i class="w-2.5 h-2.5 rounded-sm bg-emerald-300 mr-1"></i>Đã duyệt</span><span class="inline-flex items-center"><i class="w-2.5 h-2.5 rounded-sm bg-sky-300 mr-1"></i>Làm online</span><span class="inline-flex items-center"><i class="w-2.5 h-2.5 rounded-sm bg-red-300 mr-1"></i>Từ chối</span></div>`;
}
/* Thẻ duyệt cho Sếp: bấm Duyệt/Không duyệt → hiện ô comment+tag → Xác nhận */
function approvalCard(kind,item){
  const isLeave = kind==="leave";
  const head = isLeave ? `${item.who} · ${item.type} · ${item.from}→${item.to} (${item.days} ngày)` : `${item.who} · ${item.title} · ${item.amount}`;
  const active = DECISION && DECISION.kind===kind && DECISION.id===item.id;
  const tagBtns = ["@ADS","@SEO","@CRM","@CDP"].concat(USERS.map(u=>"@"+u.name.split(" ").pop()));
  const box = active ? `<div class="mt-3 border rounded-lg p-3 ${DECISION.decision==="approved"?"bg-emerald-50 border-emerald-200":"bg-red-50 border-red-200"}">
      <label class="text-[11.5px] font-semibold block mb-1 ${DECISION.decision==="approved"?"text-emerald-700":"text-red-700"}">Quyết định: <b>${DECISION.decision==="approved"?"DUYỆT":"TỪ CHỐI"}</b> — Comment (nội dung phản hồi)${DECISION.decision==="rejected"?' <span class="font-normal text-red-400">· nên nêu rõ lý do từ chối</span>':" · có thể để trống"}</label>
      <div class="flex flex-wrap gap-1.5 mb-2">${tagBtns.map(g=>`<button onclick="decTag('${g}')" class="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white border border-slate-200 text-slate-600 hover:border-${AC}-300">${g}</button>`).join("")}</div>
      <textarea id="decNote" rows="2" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white" placeholder="${DECISION.decision==="rejected"?"Nhập lý do/nội dung phản hồi cho người gửi, gõ @ để tag người khác…":"Nhập comment, gõ @ để tag người khác…"}"></textarea>
      <div class="flex justify-end gap-2 mt-2"><button onclick="leaveCancelDecision()" class="border border-slate-200 text-slate-500 text-[12px] font-semibold px-3 py-1.5 rounded-lg">Hủy</button><button onclick="leaveConfirmDecision()" class="${DECISION.decision==="approved"?"bg-emerald-600":"bg-red-600"} text-white text-[12px] font-semibold px-4 py-1.5 rounded-lg">Xác nhận & gửi thông báo</button></div>
    </div>` : `<div class="flex gap-2 mt-3"><button onclick="leaveDecide('${kind}',${item.id},'approved')" class="bg-emerald-600 text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">Duyệt</button><button onclick="leaveDecide('${kind}',${item.id},'rejected')" class="bg-red-600 text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">Không duyệt</button></div>`;
  return `<div class="bg-white border-2 ${active?(DECISION.decision==="approved"?"border-emerald-200":"border-red-200"):`border-${AC}-200`} rounded-xl p-4 mb-3"><div class="flex items-start gap-2"><div class="flex-1"><h3 class="font-semibold text-[13.5px]">${head}</h3>${isLeave?"":`<div class="text-[11.5px] text-slate-400 mt-0.5">Nhóm ${item.group}</div>`}</div>${avatar(item.who)}</div>${box}</div>`;
}
function createLeaveForm(){ return `<div class="bg-white border border-slate-200 rounded-xl p-4 mb-4"><h3 class="font-semibold text-[13.5px] mb-3">Tạo đơn xin nghỉ</h3><div class="grid grid-cols-3 gap-2 mb-2"><select class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white"><option>Nghỉ phép</option><option>Làm online</option></select><input type="date" value="2026-06-12" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]"><input type="date" value="2026-06-12" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]"></div><textarea rows="2" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] mb-2" placeholder="Lý do…"></textarea><button onclick="alert('Đã gửi đơn xin nghỉ tới quản lý. (demo)')" class="bg-${AC}-600 text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">Gửi đơn cho quản lý</button></div>`; }
function createExpenseForm(){ return `<div class="bg-white border border-slate-200 rounded-xl p-4 mb-4"><h3 class="font-semibold text-[13.5px] mb-3">Tạo đề xuất chi phí</h3><input class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] mb-2" placeholder="Nội dung chi phí"><div class="grid grid-cols-2 gap-2 mb-2"><input class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]" placeholder="Số tiền (đ)"><select class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white"><option>ADS</option><option>SEO</option><option>CRM</option><option>CDP</option></select></div><button onclick="alert('Đã gửi đề xuất chi phí tới quản lý. (demo)')" class="bg-${AC}-600 text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">Gửi đề xuất cho quản lý</button></div>`; }
function expenseTable(list){ return list.length?`<table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">Người</th><th>Nội dung</th><th>Số tiền</th><th>Trạng thái</th></tr></thead><tbody>${list.map(e=>`<tr class="border-b border-slate-50 ${e.status==="pending"?"bg-amber-50/40":""}"><td class="py-2.5">${avatar(e.who)} <b class="ml-1">${e.who.split(" ").pop()}</b></td><td>${e.title}<div class="text-[10.5px] text-slate-400">Nhóm ${e.group}</div></td><td class="font-semibold">${e.amount}</td><td><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${LST[e.status][1]}">${LST[e.status][0]}</span></td></tr>`).join("")}</tbody></table>`:`<div class="text-slate-400 text-center py-6 text-[12.5px]">Không có đề xuất nào.</div>`; }
function leaveTable(list){ return list.length?`<table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">Loại</th><th>Thời gian</th><th>Trạng thái</th></tr></thead><tbody>${list.map(l=>`<tr class="border-b border-slate-50 ${l.status==="pending"?"bg-amber-50/40":""}"><td class="py-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${l.type==="Làm online"?"bg-sky-100 text-sky-700":"bg-violet-100 text-violet-700"}">${l.type}</span></td><td class="text-slate-500">${l.from}→${l.to} (${l.days}n)</td><td><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${LST[l.status][1]}">${LST[l.status][0]}</span></td></tr>`).join("")}</tbody></table>`:`<div class="text-slate-400 text-center py-6 text-[12.5px]">Bạn chưa gửi đơn nào.</div>`; }
function allRequestsTable(leaves,expenses){
  const rows=[...leaves.map(l=>({who:l.who,kind:l.type,kcls:l.type==="Làm online"?"bg-sky-100 text-sky-700":"bg-violet-100 text-violet-700",detail:`${l.from}→${l.to} (${l.days}n)`,status:l.status})),...expenses.map(e=>({who:e.who,kind:"Chi phí",kcls:"bg-amber-100 text-amber-700",detail:`${e.title} · ${e.amount}`,status:e.status}))];
  return rows.length?`<table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">Người</th><th>Loại đơn</th><th>Nội dung</th><th>Trạng thái</th></tr></thead><tbody>${rows.map(r=>`<tr class="border-b border-slate-50 ${r.status==="pending"?"bg-amber-50/40":""}"><td class="py-2.5">${avatar(r.who)} <b class="ml-1">${r.who.split(" ").pop()}</b></td><td><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${r.kcls}">${r.kind}</span></td><td>${r.detail}</td><td><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${LST[r.status][1]}">${LST[r.status][0]}</span></td></tr>`).join("")}</tbody></table>`:`<div class="text-slate-400 text-center py-6 text-[12.5px]">Không có đơn nào.</div>`;
}
function paintLeaves(){
  const tabs=[["all","Tất cả"],["leave","Xin nghỉ"],["expense","Chi phí"]];
  const q=LQ.toLowerCase();
  const matchL=(l)=>!q||l.who.toLowerCase().includes(q)||l.type.toLowerCase().includes(q)||(l.from+"→"+l.to).includes(q)||LST[l.status][0].toLowerCase().includes(q);
  const matchE=(e)=>!q||e.who.toLowerCase().includes(q)||e.title.toLowerCase().includes(q)||e.group.toLowerCase().includes(q)||LST[e.status][0].toLowerCase().includes(q);
  const searchBar=`<div class="flex items-center gap-2 mb-4"><input id="lq" value="${LQ}" onkeydown="if(event.key==='Enter')doLeaveSearch()" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] w-72" placeholder="Tìm nhanh theo người, loại, nội dung, trạng thái…"><button onclick="doLeaveSearch()" class="bg-${AC}-600 text-white text-[12px] font-semibold px-4 py-2 rounded-lg">Tìm</button>${LQ?`<button onclick="clearLeaveSearch()" class="text-[12px] text-slate-400 border border-slate-200 rounded-lg px-3 py-2">Xóa</button>`:""}</div>`;
  let body="";
  if(IS_BOSS){
    if(LTAB==="all"){
      const pendL=LEAVES.filter(l=>l.status==="pending").filter(matchL);
      const pendE=EXPENSES.filter(e=>e.status==="pending").filter(matchE);
      const cards=[...pendL.map(l=>approvalCard("leave",l)),...pendE.map(e=>approvalCard("expense",e))].join("")||`<div class="bg-white border border-slate-200 rounded-xl p-6 text-center text-slate-400 text-[12.5px]">Không có đơn chờ duyệt.</div>`;
      body=`${searchBar}<div class="grid md:grid-cols-2 gap-4"><div><h3 class="font-semibold text-[13.5px] mb-2">Tất cả đơn chờ duyệt <span class="text-slate-400 font-normal">· ${pendL.length+pendE.length}</span></h3>${cards}</div><div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Tổng hợp tất cả đơn</h3>${allRequestsTable(LEAVES.filter(matchL),EXPENSES.filter(matchE))}</div></div>`;
    } else if(LTAB==="leave"){
      const pend=LEAVES.filter(l=>l.status==="pending").filter(matchL);
      body=`${searchBar}<div class="grid md:grid-cols-2 gap-4">
        <div><h3 class="font-semibold text-[13.5px] mb-2">Đơn nghỉ chờ duyệt <span class="text-slate-400 font-normal">· ${pend.length}</span></h3>${pend.map(l=>approvalCard("leave",l)).join("")||`<div class="bg-white border border-slate-200 rounded-xl p-6 text-center text-slate-400 text-[12.5px]">Không có đơn nghỉ chờ duyệt.</div>`}</div>
        <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-3">Lịch nghỉ phép toàn team — Tháng 6/2026</h3>${leaveCalendarHTML(LEAVES.filter(matchL))}</div></div>`;
    } else {
      const pend=EXPENSES.filter(e=>e.status==="pending").filter(matchE);
      body=`${searchBar}<div class="grid md:grid-cols-2 gap-4">
        <div><h3 class="font-semibold text-[13.5px] mb-2">Đề xuất chi phí chờ duyệt <span class="text-slate-400 font-normal">· ${pend.length}</span></h3>${pend.map(e=>approvalCard("expense",e)).join("")||`<div class="bg-white border border-slate-200 rounded-xl p-6 text-center text-slate-400 text-[12.5px]">Không có đề xuất chi phí chờ duyệt.</div>`}</div>
        <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Tất cả đề xuất chi phí</h3>${expenseTable(EXPENSES.filter(matchE))}</div></div>`;
    }
  } else {
    if(LTAB==="all"){
      const myL=LEAVES.filter(l=>l.who===STAFF_ME).filter(matchL);
      const myE=EXPENSES.filter(e=>e.who===STAFF_ME).filter(matchE);
      body=`${searchBar}<div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Tất cả đơn của tôi <span class="text-slate-400 font-normal">· ${myL.length+myE.length}</span></h3>${allRequestsTable(myL,myE)}</div>`;
    } else if(LTAB==="leave"){
      const mine=LEAVES.filter(l=>l.who===STAFF_ME).filter(matchL);
      body=`${createLeaveForm()}${searchBar}<div class="grid md:grid-cols-2 gap-4">
        <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Đơn nghỉ của tôi <span class="text-slate-400 font-normal">· ${mine.length}</span></h3>${leaveTable(mine)}</div>
        <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-3">Lịch nghỉ của tôi — Tháng 6/2026</h3>${leaveCalendarHTML(LEAVES.filter(l=>l.who===STAFF_ME))}</div></div>`;
    } else {
      const mine=EXPENSES.filter(e=>e.who===STAFF_ME).filter(matchE);
      body=`${createExpenseForm()}${searchBar}<div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Đề xuất chi phí của tôi <span class="text-slate-400 font-normal">· ${mine.length}</span></h3>${expenseTable(mine)}</div>`;
    }
  }
  document.getElementById("content").innerHTML=`<div class="flex items-center justify-between mb-4 flex-wrap gap-2"><div class="flex bg-white border border-slate-200 rounded-lg p-0.5 w-fit">${tabs.map(([k,l])=>`<button onclick="setLeaveTab('${k}')" class="px-5 py-1.5 rounded-md text-[12.5px] font-semibold ${LTAB===k?`bg-${AC}-600 text-white`:"text-slate-500"}">${l}</button>`).join("")}</div></div>${body}`;
}

/* =====================================================================
 *  WORK DNA — minh bạch công thức
 * ===================================================================== */
function radar(skills,now,prev){ const cx=120,cy=112,R=82,n=skills.length; const pt=(v,i,r)=>{const a=-Math.PI/2+i*2*Math.PI/n;return [cx+Math.cos(a)*r*v/100,cy+Math.sin(a)*r*v/100];}; const poly=(vals)=>vals.map((v,i)=>pt(v,i,R).join(",")).join(" "); let rings=""; for(let k=1;k<=4;k++)rings+=`<polygon points="${skills.map((_,i)=>pt(100,i,R*k/4).join(",")).join(" ")}" fill="none" stroke="#e2e8f0"/>`; const axes=skills.map((s,i)=>{const [x,y]=pt(100,i,R),[lx,ly]=pt(100,i,R+18);return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#e2e8f0"/><text x="${lx}" y="${ly}" font-size="9.5" text-anchor="middle" fill="#64748b">${s}</text>`;}).join(""); return `<svg viewBox="0 0 240 224" class="w-full max-w-[280px] mx-auto">${rings}${axes}<polygon points="${poly(prev)}" fill="none" stroke="#9AA0AA" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="${poly(now)}" fill="rgba(33,177,75,.14)" stroke="#21B14B" stroke-width="2.2"/></svg>`; }
const barCls=(v)=>v>=85?"bg-emerald-500":v>=70?"bg-indigo-500":"bg-amber-500";
function renderWorkDNA(){
  renderShell("work-dna.html", IS_BOSS?"Đánh giá nhân viên":"Đánh giá của tôi", "Điểm tính minh bạch từ dữ liệu thật · Tháng 6/2026", IS_BOSS?`<button onclick="alert('Demo: tính lại từ task_events')" class="bg-emerald-600 text-white text-[12.5px] font-semibold px-3.5 py-2 rounded-lg">Tính lại</button>${btnAI}`:btnAI);
  const formula = `<div class="bg-${AC}-50 border border-${AC}-100 rounded-xl p-3 mb-4 text-[12.5px]"><b class="text-${AC}-700">Công thức điểm Work DNA</b> = ${Math.round(DNA_W.onTime*100)}% Đúng hạn + ${Math.round(DNA_W.quality*100)}% Chất lượng nghiệm thu + ${Math.round(DNA_W.process*100)}% Tuân thủ quy trình (1−rework) + ${Math.round(DNA_W.throughput*100)}% Sản lượng.</div>`;
  if(IS_BOSS){ const rk=ranking();
    document.getElementById("content").innerHTML=`${formula}
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      ${kpi("Điểm TB team", r0(avg(rk.filter(r=>r.hasData).map(r=>r.score))))}
      ${kpi("Đúng hạn TB", metrics().onTimeRate+"%")}
      ${kpi("Chất lượng TB", metrics().avgQuality+"/100")}
      ${kpi("Rework team", metrics().reworkRate+"%", "càng thấp càng tốt", "text-slate-400")}
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-4">
      <h3 class="font-semibold text-[13.5px] mb-2">Bảng xếp hạng (tự tính từ task)</h3>
      <table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">#</th><th>Nhân viên</th><th>Nhóm</th><th>Đúng hạn</th><th>Chất lượng</th><th>Rework</th><th>Đã xong</th><th>Điểm</th></tr></thead>
      <tbody>${rk.map((r,i)=>`<tr class="border-b border-slate-50 hover:bg-slate-50"><td class="py-2.5 font-bold text-slate-400">${i+1}</td><td>${avatar(r.name)} <b class="ml-1">${r.name}</b></td><td>${teamOf(r.name)}</td><td>${r.hasData?r.onTime+"%":"—"}</td><td>${r.hasData?r.quality:"—"}</td><td>${r.hasData?(100-r.process)+"%":"—"}</td><td>${r.done}</td><td><b class="text-${AC}-700">${r.hasData?r.score:"chưa đủ dữ liệu"}</b></td></tr>`).join("")}</tbody></table>
      <p class="text-[11px] text-slate-400 mt-2">Lưu ý: nhân sự chưa có task nghiệm thu trong kỳ sẽ hiển thị “chưa đủ dữ liệu” thay vì bị chấm điểm thấp oan.</p>
    </div>`;
  } else {
    const me=dna("Linh Trần"); const skills=[["Content",95],["SEO",80],["Giao tiếp",90],["Sáng tạo",88],["Quản lý DA",75],["Phân tích",70],["CRM",85],["Ads",80]];
    document.getElementById("content").innerHTML=`${formula}
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      ${kpi("Điểm tổng", me.score, "tháng 6", "text-emerald-600")}
      ${kpi("Đúng hạn", me.onTime+"%", "task của tôi", "text-slate-400")}
      ${kpi("Chất lượng TB", me.quality||"—", "điểm nghiệm thu", "text-slate-400")}
      ${kpi("Đã hoàn thành", me.done, "trong kỳ", "text-slate-400")}
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-1">Năng lực của tôi</h3>${radar(skills.map(s=>s[0]),skills.map(s=>s[1]),[88,75,84,80,70,64,80,76])}<p class="text-center text-[10.5px] text-slate-400">— Tháng này &nbsp; ┄ Tháng trước</p></div>
      <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-3">Cấu phần điểm (minh bạch)</h3>
        ${[["Đúng hạn",me.onTime,DNA_W.onTime],["Chất lượng nghiệm thu",me.quality,DNA_W.quality],["Tuân thủ quy trình",me.process,DNA_W.process],["Sản lượng",me.throughput,DNA_W.throughput]].map(([lb,v,w])=>`<div class="mb-2.5"><div class="flex justify-between text-[12.3px] mb-0.5"><span>${lb} <span class="text-slate-400">×${Math.round(w*100)}%</span></span><b>${v} → ${r1(v*w)}</b></div>${progressBar(v,barCls(v))}</div>`).join("")}
        <div class="mt-2 pt-2 border-t border-slate-100 flex justify-between text-[13px]"><b>Tổng điểm</b><b class="text-${AC}-700">${me.score}/100</b></div>
      </div>
      <div class="space-y-4"><div class="bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-xl p-4 text-[12.5px]"><h3 class="font-semibold text-[13px] mb-1 text-violet-700">Nhận xét từ AI</h3>Điểm mạnh: đúng hạn ${me.onTime}% và chất lượng ổn định (${me.quality}). Cần cải thiện: giảm rework (hiện ${100-me.process}%). Gợi ý tháng 6: nâng kỹ năng <b>Phân tích dữ liệu</b> (đang 70).</div>
      <div class="bg-white border border-slate-200 rounded-xl p-4 text-[12.3px]"><h3 class="font-semibold text-[13px] mb-2">Mục tiêu tháng 6</h3>${[["100% task đúng deadline",me.onTime],["Giảm rework < 10%",me.process>=90?90:70],["Nâng SEO lên 85",80]].map(([g,v])=>`<div class="mb-2"><div class="flex justify-between mb-0.5"><span>${g}</span><b>${v}%</b></div>${progressBar(v,v>=80?"bg-emerald-500":"bg-amber-500")}</div>`).join("")}</div></div>
    </div>`;
  }
}

/* =====================================================================
 *  BÁO CÁO HÔM NAY
 * ===================================================================== */
/* Bộ lọc ngày/tháng cho báo cáo */
function reportFilterBar(){ return `<div class="flex flex-wrap items-center gap-2 mb-4 bg-white border border-slate-200 rounded-xl p-3">
  <span class="text-[12px] font-semibold text-slate-500">Bộ lọc:</span>
  <select class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white font-semibold text-${AC}-700"><option>Hôm nay</option><option>Tuần này</option><option selected>Tháng này</option><option>Quý này</option></select>
  <select class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white"><option>Tháng 6/2026</option><option>Tháng 5/2026</option><option>Tháng 4/2026</option></select>
  <input type="date" value="2026-06-01" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]"><span class="text-slate-400 text-[12px]">→</span><input type="date" value="2026-06-08" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]">
  <button onclick="alert('Đã áp dụng bộ lọc ngày/tháng cho báo cáo. (demo)')" class="bg-${AC}-600 text-white text-[12px] font-semibold px-4 py-2 rounded-lg">Lọc</button>
</div>`; }
/* Phạm vi xem báo cáo tuần theo vai trò: sếp = tất cả · trưởng nhóm = nhóm mình · nhân viên = mình */
function reportScopeNames(){ if(IS_BOSS) return MEMBERS.slice(); const u=USERS.find(x=>x.name===STAFF_ME); if(u&&u.role==="leader") return (GROUPS[teamOf(STAFF_ME)]||[STAFF_ME]).slice(); return [STAFF_ME]; }
/* Báo cáo tuần — AI gửi mỗi Chủ nhật, tiến độ từng nhân viên */
function weeklyEmployeeReport(){
  const names=reportScopeNames();
  const rows=names.map(n=>{ const T=TASKS.filter(t=>t.assignee===n); const mm=metrics(T); const overdue=T.filter(isOverdue).length; const d=dna(n); return {n,total:T.length,done:mm.done,onTime:mm.onTimeRate,overdue,score:d.hasData?d.score:null}; });
  const scopeLabel = IS_BOSS?"toàn bộ nhân viên":(names.length>1?`nhóm ${teamOf(STAFF_ME)}`:"của bạn");
  return `<div class="bg-white border border-slate-200 rounded-xl p-4 mb-4">
    <div class="flex items-center mb-2 flex-wrap gap-2"><h3 class="font-semibold text-[13.5px]">Báo cáo tuần — tiến độ từng nhân viên</h3><span class="text-[10px] font-bold text-violet-600 bg-violet-50 rounded-full px-2 py-0.5">AI · tự gửi Chủ nhật</span><span class="ml-auto text-[11px] text-slate-400">Phạm vi: ${scopeLabel}</span></div>
    <table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">Nhân viên</th><th>Nhóm</th><th>Tổng task</th><th>Hoàn thành</th><th>Đúng hạn</th><th>Quá hạn</th><th>Điểm tuần</th></tr></thead><tbody>${rows.map(r=>`<tr class="border-b border-slate-50 hover:bg-slate-50"><td class="py-2.5">${avatar(r.n)} <b class="ml-1">${r.n}</b></td><td>${teamOf(r.n)}</td><td>${r.total}</td><td>${r.done}</td><td>${r.onTime}%</td><td class="${r.overdue?"text-red-600 font-semibold":"text-slate-400"}">${r.overdue||"—"}</td><td><b class="text-${AC}-700">${r.score!=null?r.score:"—"}</b></td></tr>`).join("")}</tbody></table>
  </div>`;
}
function renderReports(){
  POP_SCOPE = IS_BOSS ? null : "Linh Trần";
  renderShell("reports.html","Báo cáo tự động","Tổng hợp 08/06/2026 · gửi 17:30 hàng ngày · bấm chỉ số để xem chi tiết",`<button onclick="alert('Demo: xuất PDF/Excel')" class="bg-emerald-600 text-white text-[12.5px] font-semibold px-3.5 py-2 rounded-lg">Xuất báo cáo</button>${btnAI}`);
  const m=metrics(); const tp=throughput7();
  const bySkill={}; TASKS.forEach(t=>{ bySkill[t.skill]=bySkill[t.skill]||{done:0,total:0}; bySkill[t.skill].total++; if(t.status==="done")bySkill[t.skill].done++; });
  const skillLabels=Object.keys(bySkill); const skillData=skillLabels.map(s=>r0(bySkill[s].done/bySkill[s].total*100));
  if(IS_BOSS){
    document.getElementById("content").innerHTML=`
    ${reportFilterBar()}
    <div class="grid grid-cols-2 md:grid-cols-6 gap-3 mb-4">
      ${kpiPop("Tổng task",m.total,"",null,"all")}${kpiPop("Hoàn thành",m.done+" · "+m.completionRate+"%","","text-emerald-600","done")}${kpiPop("Đang làm",m.doing,"",null,"doing")}${kpiPop("Quá hạn",m.late,"","text-red-600","late")}${kpi("Đúng hạn",m.onTimeRate+"%")}${kpi("Cycle TB",m.avgCycleDays+"n")}
    </div>
    ${weeklyEmployeeReport()}
    <div class="grid md:grid-cols-2 gap-4 mb-4">
      <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Tỷ lệ hoàn thành theo kỹ năng</h3><div class="h-[170px]"><canvas id="chSkill"></canvas></div></div>
      <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Năng suất 7 ngày</h3><div class="h-[170px]"><canvas id="chTp"></canvas></div></div>
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-white border border-slate-200 rounded-xl p-4 text-[12.5px] space-y-2.5"><h3 class="font-semibold text-[13.5px]">Chuyên môn nguy cơ</h3>${SPECIALTIES.map(n=>({n,...specStats(n)})).filter(p=>p.health!=="green").map(p=>`<div><b>${p.n}</b> · ${p.progress}% <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${HEALTH[p.health][1]} ml-1">${HEALTH[p.health][0]}</span></div>`).join("")||"<div class='text-slate-400'>Không có chuyên môn nguy cơ.</div>"}</div>
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2 text-orange-700">Báo cáo & đề xuất của AI <span class="text-[10px] font-bold text-orange-600 bg-white rounded-full px-2 py-0.5">17:30</span></h3><p class="text-[12.8px] leading-6 mb-2">Hôm nay team hoàn thành <b>${m.done}/${m.total}</b> task (${m.completionRate}%). Đúng hạn ${m.onTimeRate}%, rework ${m.reworkRate}%, cycle time TB ${m.avgCycleDays} ngày.</p><div class="text-[12.5px] space-y-1.5"><div>Ưu tiên ${m.late} task quá hạn (Bắc Ninh, Bắc Giang).</div><div>Điều phối bớt việc cho ${MEMBERS.map(n=>({n,...loadOf(n)})).filter(x=>x.overloaded).map(x=>x.n.split(" ").pop()).join(", ")||"—"}.</div><div>Soát chất lượng để giảm rework.</div></div></div>
    </div>`;
    barChart("chSkill", skillLabels, skillData, skillData.map(v=>v>=70?C.green:v>=40?C.blue:C.amber), false);
    lineChart("chTp", tp.labels, [{label:"Hoàn thành",data:tp.data,color:C.green,fill:"rgba(33,177,75,.08)"}]);
  } else {
    const mine=TASKS.filter(t=>t.assignee==="Linh Trần"); const mm=metrics(mine);
    document.getElementById("content").innerHTML=`
    ${reportFilterBar()}
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">${kpiPop("Task của tôi",mine.length,"","text-slate-400","all")}${kpiPop("Hoàn thành",mm.done+" · "+mm.completionRate+"%","","text-emerald-600","done")}${kpiPop("Đang làm",mine.filter(t=>dstat(t)==="doing").length,"",null,"doing")}${kpiPop("Quá hạn",mine.filter(isOverdue).length,"","text-red-600","late")}${kpi("Đúng hạn",mm.onTimeRate+"%")}</div>
    ${weeklyEmployeeReport()}
    <div class="grid md:grid-cols-3 gap-4"><div class="md:col-span-2 bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Công việc của tôi</h3><table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">Task</th><th>Chuyên môn</th><th>Hạn</th><th>Trạng thái</th></tr></thead><tbody>${mine.map(t=>`<tr class="border-b border-slate-50"><td class="py-2.5 font-semibold">${t.title}</td><td>${t.spec}</td><td class="text-slate-500">${fmtDue(t.due)}</td><td>${badge(dstat(t))}</td></tr>`).join("")}</tbody></table></div>
    <div class="bg-orange-50 border border-orange-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2 text-orange-700">Nhận xét của AI</h3><p class="text-[12.8px] leading-6">Bạn hoàn thành <b>${mm.done} task</b>, đúng hạn ${mm.onTimeRate}%. ${mine.filter(isOverdue).length?`Có ${mine.filter(isOverdue).length} task quá hạn — ưu tiên xử lý.`:"Giữ phong độ nhé!"}</p></div></div>`;
  }
}

/* =====================================================================
 *  THÔNG BÁO · HỒ SƠ · MOOD · ADMIN
 * ===================================================================== */
let NF_TAB="all";
function renderNotifications(){
  NF_TAB="all";
  renderShell("notifications.html","Trung tâm thông báo","Lọc theo: Tất cả · Nhắc tới tôi · Cần xử lý",`<button onclick="markAll()" class="border border-${AC}-600 text-${AC}-700 text-[12.5px] font-semibold px-3.5 py-2 rounded-lg">Đánh dấu đã đọc</button>`);
  paintNotifs();
}
function notifPass(n){
  if(NF_TAB==="mention") return n.type==="assign";
  if(NF_TAB==="todo") return ["late","soon","leave"].includes(n.type);
  return true;
}
function setNotifTab(t){ NF_TAB=t; paintNotifs(); }
function paintNotifs(){
  const N=buildNotifs();
  const c={ all:N.length, mention:N.filter(n=>n.type==="assign").length, todo:N.filter(n=>["late","soon","leave"].includes(n.type)).length };
  const tabs=[["all","Tất cả",c.all],["mention","Nhắc tới tôi",c.mention],["todo","Cần xử lý",c.todo]];
  const list=N.filter(notifPass);
  document.getElementById("content").innerHTML=`<div class="flex gap-2 mb-4 flex-wrap">${tabs.map(([k,l,n])=>`<button onclick="setNotifTab('${k}')" class="px-3.5 py-1.5 rounded-full text-[12px] font-semibold ${NF_TAB===k?`bg-${AC}-600 text-white`:"bg-white border border-slate-200 text-slate-500"}">${l} <span class="${NF_TAB===k?"opacity-80":"text-slate-400"}">${n}</span></button>`).join("")}</div>
  <div id="list" class="bg-white border border-slate-200 rounded-xl divide-y divide-slate-50">${list.map(n=>`<a href="${n.link||'#'}" class="flex gap-3 px-4 py-3.5 hover:bg-slate-50 transition ${n.unread?`bg-${AC}-50/40`:"opacity-70"}"><span class="w-2.5 h-2.5 rounded-full mt-1.5 ${NDOT[n.type]}"></span><div class="flex-1"><b class="text-[13px]">${n.title}</b>${n.body?`<div class="text-[12px] text-slate-500">${n.body}</div>`:""}<div class="text-[10.5px] text-slate-400 mt-0.5">${n.time}</div></div>${n.unread?`<span class="w-2 h-2 rounded-full bg-${AC}-600 mt-2"></span>`:""}</a>`).join("")||`<div class="p-8 text-center text-slate-400 text-[12.5px]">Không có thông báo trong mục này.</div>`}</div>`;
}
function markAll(){ document.querySelectorAll("#list > div").forEach(d=>d.className="flex gap-3 px-4 py-3.5 opacity-70"); }

const AV_COLORS = ["#0064B1","#21B14B","#EF7025","#7C3AED","#E0312B","#0EA5A4","#DB2777","#3A3F47"];
function renderProfile(){
  renderShell("profile.html","Hồ sơ cá nhân","Đổi tên, ảnh đại diện & tùy chọn thông báo","");
  const me=dna(IS_BOSS?"Nguyễn Văn Nam":"Linh Trần");
  document.getElementById("content").innerHTML=`<div class="grid md:grid-cols-3 gap-4">
    <div class="bg-white border border-slate-200 rounded-xl p-5 text-center">
      <div id="avPreview" class="flex justify-center mb-3">${meAvatar("w-20 h-20 text-3xl")}</div>
      <h2 class="font-extrabold text-[15px]">${ME.name}</h2><p class="text-[12px] text-slate-500">${ME.title}</p>
      <span class="inline-block mt-2 px-3 py-1 rounded-full text-[11px] font-bold ${IS_BOSS?"bg-indigo-100 text-indigo-700":"bg-emerald-100 text-emerald-700"}">${IS_BOSS?"BOSS / MANAGER":"MEMBER"}</span>
      <div class="grid grid-cols-3 gap-2 mt-4 text-center"><div><b class="block text-lg">${IS_BOSS?metrics().done:me.done}</b><span class="text-[10.5px] text-slate-400">Task xong</span></div><div><b class="block text-lg">${me.onTime||metrics().onTimeRate}%</b><span class="text-[10.5px] text-slate-400">Đúng hạn</span></div><div><b class="block text-lg">${me.score||"—"}</b><span class="text-[10.5px] text-slate-400">Điểm</span></div></div>
      <a href="work-dna.html" class="block mt-3 text-${AC}-600 text-[12px] font-bold">Xem đánh giá →</a>
    </div>
    <div class="md:col-span-2 space-y-4">
      <div class="bg-white border border-slate-200 rounded-xl p-5">
        <h3 class="font-semibold text-[13.5px] mb-3">Ảnh đại diện</h3>
        <div class="flex items-center gap-4 flex-wrap">
          <div id="avBig">${meAvatar("w-16 h-16 text-2xl")}</div>
          <div class="flex flex-wrap gap-1.5">${AV_COLORS.map(c=>`<button type="button" onclick="profilePickColor('${c}')" class="w-7 h-7 rounded-full ring-1 ring-slate-200 hover:scale-110 transition" style="background:${c}" title="Chọn màu"></button>`).join("")}</div>
          <label class="text-[12px] font-semibold text-${AC}-700 border border-${AC}-200 rounded-lg px-3 py-2 cursor-pointer hover:bg-${AC}-50">Tải ảnh lên<input type="file" accept="image/*" class="hidden" onchange="profileUpload(this)"></label>
          <button type="button" onclick="profileClearAvatar()" class="text-[12px] text-slate-400 underline">Bỏ ảnh</button>
        </div>
        <p class="text-[11px] text-slate-400 mt-2">Chọn màu hoặc tải ảnh — ảnh đại diện hiển thị ở thanh bên và mọi nơi để dễ phân biệt.</p>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl p-5"><h3 class="font-semibold text-[13.5px] mb-3">Thông tin tài khoản</h3>
        <div class="grid md:grid-cols-2 gap-3 text-[12.5px]">
          <div><label class="text-[11px] font-semibold text-slate-400 block mb-1">HỌ TÊN</label><input id="pfName" class="w-full border border-slate-200 rounded-lg px-3 py-2" value="${ME.name}"></div>
          <div><label class="text-[11px] font-semibold text-slate-400 block mb-1">CHỨC DANH</label><input id="pfTitle" class="w-full border border-slate-200 rounded-lg px-3 py-2" value="${ME.title}"></div>
          <div><label class="text-[11px] font-semibold text-slate-400 block mb-1">EMAIL</label><input class="w-full border border-slate-200 rounded-lg px-3 py-2 bg-slate-50" value="${IS_BOSS?"sep@fpt.edu.vn":"linh@fpt.edu.vn"}" disabled></div>
          <div><label class="text-[11px] font-semibold text-slate-400 block mb-1">CƠ SỞ</label><select class="w-full border border-slate-200 rounded-lg px-3 py-2"><option>FPT School Hà Nam</option><option>FPT School Bắc Ninh</option></select></div>
        </div>
        <button onclick="profileSave()" class="mt-4 bg-emerald-600 text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">Lưu thay đổi</button>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl p-5"><h3 class="font-semibold text-[13.5px] mb-3">Tùy chọn thông báo</h3>${[["Nhắc deadline",true],["Bản tin sáng 07:00",true],["Nhắc nghiệm thu",true],["Báo cáo cuối ngày 17:30",true]].map(([l,on])=>`<label class="flex items-center justify-between py-2.5 border-b border-slate-50 text-[12.5px]"><span>${l}</span><input type="checkbox" ${on?"checked":""} class="w-9 h-5 accent-emerald-600"></label>`).join("")}</div>
    </div></div>`;
}
function refreshAvatarPreview(){ const p=document.getElementById("avPreview"); const q=document.getElementById("avBig"); const side=document.querySelector("aside .bg-slate-50 > span, aside .rounded-xl span"); if(p)p.innerHTML=meAvatar("w-20 h-20 text-3xl"); if(q)q.innerHTML=meAvatar("w-16 h-16 text-2xl"); }
function profilePickColor(c){ ME.color=c; ME.avatar=""; localStorage.setItem("pw_color_"+ROLE,c); localStorage.removeItem("pw_avatar_"+ROLE); refreshAvatarPreview(); }
function profileClearAvatar(){ ME.avatar=""; localStorage.removeItem("pw_avatar_"+ROLE); refreshAvatarPreview(); }
function profileUpload(input){ const f=input.files&&input.files[0]; if(!f)return; const rd=new FileReader(); rd.onload=e=>{ ME.avatar=e.target.result; localStorage.setItem("pw_avatar_"+ROLE,ME.avatar); refreshAvatarPreview(); }; rd.readAsDataURL(f); }
function profileSave(){ const n=(document.getElementById("pfName").value||"").trim(); const t=(document.getElementById("pfTitle").value||"").trim(); if(n)localStorage.setItem("pw_name_"+ROLE,n); if(t)localStorage.setItem("pw_title_"+ROLE,t); alert("Đã lưu hồ sơ. Tên & ảnh đại diện áp dụng trên toàn hệ thống."); location.reload(); }

let moodSel=null;
function renderMoodCheck(){ moodSel=null; renderShell("mood-check.html","Mood check — Khảo sát tâm trạng", IS_BOSS?"Tổng hợp tâm trạng & cảm xúc làm việc của team hôm nay":"Chia sẻ tâm trạng hôm nay — quản lý sẽ nắm tình hình để hỗ trợ bạn kịp thời",""); document.getElementById("content").innerHTML = IS_BOSS ? moodBossHTML() : moodStaffHTML(); }
function moodChip(k){ const m=MOOD_MAP[k]; if(!m) return `<span class="text-slate-300 text-[12px]">— chưa trả lời —</span>`; const c=m[3]; return `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-${c}-100 text-${c}-700"><span>${m[1]}</span>${m[2]}</span>`; }
function moodStaffHTML(){
  return `<div class="max-w-xl mx-auto mt-2">
    <div class="bg-white border border-slate-200 rounded-2xl p-7 text-center shadow-sm">
      <h2 class="text-lg font-extrabold mb-1">Hôm nay của bạn thế nào?</h2>
      <p class="text-[12.5px] text-slate-500 mb-5">Câu trả lời chỉ hiển thị cho quản lý ở dạng tổng hợp để hỗ trợ bạn kịp thời.</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">${MOODS.map(([k,e,l,c])=>`<button id="m-${k}" onclick="moodSelect('${k}')" class="border-2 border-slate-200 rounded-2xl py-5 hover:border-${c}-400 transition"><div class="text-4xl">${e}</div><div class="text-[12.5px] font-bold mt-1.5">${l}</div></button>`).join("")}</div>
      <textarea id="moodNote" rows="2" class="w-full border border-slate-200 rounded-xl px-3 py-2 text-[12.5px] mb-4" placeholder="Chia sẻ thêm (không bắt buộc)…"></textarea>
      <button onclick="submitMood()" class="w-full bg-${AC}-600 hover:bg-${AC}-700 text-white font-bold rounded-xl py-3">Gửi cảm xúc hôm nay</button>
      <p id="ok" class="hidden mt-4 text-[12.5px] bg-emerald-50 text-emerald-700 rounded-lg px-3 py-2.5">Cảm ơn bạn! Đã ghi nhận tâm trạng hôm nay. Quản lý sẽ thấy tổng hợp của team.</p>
    </div>
    <div class="mt-4 bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13px] mb-2">Lịch sử 7 ngày của tôi</h3><div class="flex gap-2">${["happy","happy","pressured","normal","happy","pressured",null].map((m,i)=>`<div class="flex-1 text-center"><div class="text-2xl">${m?MOOD_MAP[m][1]:"—"}</div><div class="text-[10px] text-slate-400 mt-0.5">${["T2","T3","T4","T5","T6","T7","CN"][i]}</div></div>`).join("")}</div></div>
  </div>`;
}
function moodBossHTML(){
  const names=MEMBERS; const counts={}; MOODS.forEach(([k])=>counts[k]=0); names.forEach(n=>{ const k=MOOD_TODAY[n]; if(k)counts[k]++; });
  const answered=names.filter(n=>MOOD_TODAY[n]).length; const need=names.filter(n=>["pressured","burst"].includes(MOOD_TODAY[n]));
  return `<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">${MOODS.map(([k,e,l,c])=>`<button onclick="openMoodPopup('${k}')" class="bg-white border border-slate-200 rounded-xl p-4 text-center w-full hover:border-${c}-300 hover:ring-2 hover:ring-${c}-100 transition"><div class="text-3xl">${e}</div><div class="text-[22px] font-extrabold text-${c}-600 mt-1">${counts[k]}</div><div class="text-[12px] text-slate-500">${l}</div><div class="text-[10.5px] text-slate-400 mt-0.5">bấm để xem</div></button>`).join("")}</div>
  ${need.length?`<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 text-[12.5px] text-amber-800"><b>${need.length} bạn đang cần quan tâm</b> — ${need.map(n=>`${n.split(" ").pop()} (${MOOD_MAP[MOOD_TODAY[n]][2].toLowerCase()})`).join(", ")}. Nên trò chuyện 1-1 hoặc điều phối bớt việc giúp các bạn.</div>`:`<div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4 text-[12.5px] text-emerald-800">Team đang ổn — không có ai báo áp lực/bùng nổ hôm nay. 👍</div>`}
  <div class="bg-white border border-slate-200 rounded-xl p-4"><div class="flex items-center mb-3"><h3 class="font-bold text-[14px]">Tâm trạng hôm nay của từng nhân sự</h3><span class="ml-auto text-[11.5px] text-slate-400">${answered}/${names.length} đã trả lời</span></div>
    <div class="divide-y divide-slate-50">${names.map(n=>`<div class="flex items-center gap-3 py-2.5"><div class="flex items-center gap-2 flex-1">${avatar(n)}<div><div class="text-[13px] font-semibold text-slate-700">${n}</div><div class="text-[10.5px] text-slate-400">Nhóm ${teamOf(n)}</div></div></div>${moodChip(MOOD_TODAY[n])}</div>`).join("")}</div></div>`;
}
function moodSelect(k){ moodSel=k; MOODS.forEach(([x])=>{const b=document.getElementById("m-"+x); if(!b)return; b.className=b.className.replace(/ border-\w+-600 bg-\w+-50/g,""); if(x===k){const c=MOOD_MAP[k][3]; b.className+=` border-${c}-600 bg-${c}-50`;}}); }
function submitMood(){ if(!moodSel)return alert("Hãy chọn một mức cảm xúc nhé!"); MOOD_TODAY[ME.name]=moodSel; const ok=document.getElementById("ok"); if(ok)ok.classList.remove("hidden"); }
function openMoodPopup(k){
  const m=MOOD_MAP[k]; if(!m) return;
  const people=MEMBERS.filter(n=>MOOD_TODAY[n]===k);
  closeMoodPop();
  const rows = people.length ? people.map(n=>`<div class="flex items-center gap-3 px-1 py-2.5 border-b border-slate-50 last:border-0">${avatar(n)}<div class="flex-1"><div class="text-[13px] font-semibold text-slate-700">${n}</div><div class="text-[10.5px] text-slate-400">Nhóm ${teamOf(n)}</div></div><a href="work-dna.html" class="text-[11.5px] font-semibold text-${AC}-600">Xem đánh giá →</a></div>`).join("") : `<div class="p-8 text-center text-slate-400 text-[12.5px]">Không có ai ở mức này hôm nay.</div>`;
  document.body.insertAdjacentHTML("beforeend", `<div id="moodPop" class="fixed inset-0 z-[60] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeMoodPop()"><div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"><div class="px-5 py-3 border-b border-slate-200 flex items-center gap-2"><span class="text-2xl">${m[1]}</span><h3 class="font-bold text-[15px]">${m[2]} <span class="text-slate-400 font-normal">· ${people.length} người</span></h3><button onclick="closeMoodPop()" class="ml-auto text-slate-400 text-xl leading-none xclose">×</button></div><div class="p-4 max-h-[60vh] overflow-y-auto">${rows}</div></div></div>`);
}
function closeMoodPop(){ const e=document.getElementById("moodPop"); if(e)e.remove(); }

function renderAdmin(){
  if(!IS_BOSS){ location.hash="#dashboard.html"; return; }
  renderShell("admin-settings.html","Quản trị hệ thống","Nhóm chuyên môn · tài khoản · cấu hình AI",`<button onclick="alert('Demo: thêm tài khoản')" class="bg-${AC}-600 text-white text-[12.5px] font-semibold px-3.5 py-2 rounded-lg">Thêm tài khoản</button>`);
  const roleBadge={boss:"bg-indigo-100 text-indigo-700",leader:"bg-violet-100 text-violet-700",member:"bg-slate-100 text-slate-600"};
  const gc={ADS:"bg-orange-50 border-orange-200",SEO:"bg-emerald-50 border-emerald-200",CRM:"bg-cyan-50 border-cyan-200",CDP:"bg-indigo-50 border-indigo-200"};
  document.getElementById("content").innerHTML=`<div class="grid md:grid-cols-4 gap-3 mb-4">${Object.keys(GROUPS).map(g=>`<div class="border rounded-xl p-4 ${gc[g]}"><div class="font-bold text-[14px]">Nhóm ${g}</div><div class="text-[11px] text-slate-500 mb-2">${GROUPS[g].length} thành viên</div>${GROUPS[g].map(n=>`<div class="flex items-center gap-2 py-1 text-[12px]">${avatar(n)} ${n.split(" ").pop()}</div>`).join("")}</div>`).join("")}</div>
  <div class="grid md:grid-cols-3 gap-4"><div class="md:col-span-2 bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Tài khoản & phân quyền</h3><table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2">Nhân sự</th><th>Email</th><th>Nhóm</th><th>Vai trò</th></tr></thead><tbody>${USERS.map((u,i)=>`<tr class="border-b border-slate-50 hover:bg-slate-50"><td class="py-2.5">${avatar(u.name)} <b class="ml-1">${u.name}</b></td><td class="text-slate-500">${["sep","linh","nam.p","anh","huy","minh"][i]}@fpt.edu.vn</td><td><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">${teamOf(u.name)}</span></td><td><select class="border border-slate-200 rounded-lg px-2 py-1 text-[11.5px] font-semibold ${roleBadge[u.role]}"><option ${u.role==="boss"?"selected":""}>boss</option><option ${u.role==="leader"?"selected":""}>leader</option><option ${u.role==="member"?"selected":""}>member</option></select></td></tr>`).join("")}</tbody></table></div>
  <div class="space-y-4"><div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Tham số chỉ số</h3><div class="text-[12.5px] space-y-2"><label class="flex justify-between items-center"><span>Quỹ giờ/người/tuần</span><input value="${CAPACITY_H}" class="w-16 border border-slate-200 rounded-lg px-2 py-1 text-[11.5px]"></label><label class="flex justify-between items-center"><span>Ngưỡng quá tải (việc)</span><input value="${WIP_LIMIT}" class="w-16 border border-slate-200 rounded-lg px-2 py-1 text-[11.5px]"></label></div></div>
  <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2 text-violet-700">Cấu hình AI</h3><div class="text-[12.5px] space-y-2"><label class="flex justify-between items-center"><span>GEMINI_API_KEY</span><input type="password" value="••••••••" class="w-28 border border-violet-200 rounded-lg px-2 py-1 text-[11.5px] bg-white"></label>${[["Nhắc deadline",true],["Bản tin sáng",true],["Báo cáo 17:30",true]].map(([l,on])=>`<label class="flex justify-between items-center"><span>${l}</span><input type="checkbox" ${on?"checked":""} class="accent-violet-600 w-4 h-4"></label>`).join("")}</div></div></div></div>`;
}

/* =====================================================================
 *  TÀI NGUYÊN — kho tài nguyên dự án theo nhóm SEO/ADS/CRM/CDP
 * ===================================================================== */
const RES_CATS = ["SEO","ADS","CRM","CDP"];
const RES_CAT_CLS = { SEO:"bg-emerald-100 text-emerald-700", ADS:"bg-orange-100 text-orange-700", CRM:"bg-cyan-100 text-cyan-700", CDP:"bg-indigo-100 text-indigo-700" };
/* màu nhãn + icon theo loại file */
const RES_FT = {
  XLSX:["bg-emerald-100 text-emerald-700",""], XLS:["bg-emerald-100 text-emerald-700",""],
  DOCX:["bg-sky-100 text-sky-700",""], DOC:["bg-sky-100 text-sky-700",""],
  PDF:["bg-red-100 text-red-700",""], PPTX:["bg-orange-100 text-orange-700",""], PPT:["bg-orange-100 text-orange-700",""],
  LINK:["bg-slate-200 text-slate-600",""], PNG:["bg-cyan-100 text-cyan-700",""], JPG:["bg-cyan-100 text-cyan-700",""],
};
const ft1=(k)=>RES_FT[k]||["bg-slate-100 text-slate-600",""];
const RES_STATS=[
  { n:124, lb:"Tài liệu", sub:"Tất cả tài liệu trong hệ thống", icon:"", bg:"bg-violet-50",  num:"text-indigo-600" },
  { n:36,  lb:"SEO",      sub:"Tài liệu", icon:"", bg:"bg-emerald-50", num:"text-emerald-600" },
  { n:42,  lb:"ADS",      sub:"Tài liệu", icon:"", bg:"bg-orange-50",  num:"text-orange-600" },
  { n:28,  lb:"CRM",      sub:"Tài liệu", icon:"", bg:"bg-cyan-50",    num:"text-sky-600" },
  { n:18,  lb:"CDP",      sub:"Tài liệu", icon:"", bg:"bg-indigo-50",  num:"text-violet-600" },
];
/* Kho tài nguyên (có thể bổ sung khi tạo/upload) */
let RES_ITEMS = [
  { cat:"SEO", name:"Bộ từ khóa tuyển sinh 2026",        ft:"XLSX", owner:"Minh Anh",  date:"12/05/2024", scope:"public" },
  { cat:"SEO", name:"Checklist SEO Onpage chuẩn",        ft:"DOCX", owner:"Minh Anh",  date:"10/05/2024", scope:"public" },
  { cat:"SEO", name:"Báo cáo thứ hạng từ khóa (Ahrefs)", ft:"LINK", owner:"Quang Huy", date:"09/05/2024", scope:"public" },
  { cat:"ADS", name:"Tài khoản & ngân sách Ads tổng",    ft:"XLSX", owner:"Tuấn Nam",  date:"08/05/2024", scope:"public" },
  { cat:"ADS", name:"Thư viện creative quảng cáo",       ft:"PPTX", owner:"Hồng Hạnh", date:"07/05/2024", scope:"public" },
  { cat:"ADS", name:"Mẫu báo cáo hiệu quả Ads",          ft:"DOCX", owner:"Tuấn Nam",  date:"06/05/2024", scope:"public" },
  { cat:"CRM", name:"Quy trình chăm sóc & chuyển đổi lead", ft:"PDF", owner:"Bảo Ngọc", date:"05/05/2024", scope:"public" },
  { cat:"CRM", name:"Kịch bản telesales tuyển sinh",     ft:"DOCX", owner:"Hồng Hạnh", date:"04/05/2024", scope:"public" },
];
const RES_RECENT=[
  { name:"Checklist SEO Onpage",        ft:"XLSX", owner:"Minh Anh" },
  { name:"Kịch bản telesales tuyển sinh",ft:"PDF",  owner:"Hồng Hạnh" },
  { name:"Mẫu báo cáo Ads hiệu quả",     ft:"DOCX", owner:"Tuấn Nam" },
  { name:"Sơ đồ luồng dữ liệu CDP",      ft:"PNG",  owner:"Quang Huy" },
  { name:"Quy trình chăm sóc lead",      ft:"DOCX", owner:"Bảo Ngọc" },
];
const RES_ACTIVITY=[
  { who:"Linh",    act:"đã tải lên",  doc:"Checklist SEO Onpage",            t:"2 giờ trước", c:"bg-emerald-500" },
  { who:"Hạnh",    act:"đã cập nhật", doc:"Kịch bản telesales tuyển sinh",   t:"5 giờ trước", c:"bg-red-500" },
  { who:"Trung",   act:"đã tải lên",  doc:"Mẫu content tuyển sinh Hà Nội",   t:"Hôm qua",     c:"bg-violet-500" },
  { who:"Minh",    act:"đã cập nhật", doc:"Quy trình chăm sóc lead",         t:"2 ngày trước",c:"bg-emerald-500" },
  { who:"Phương",  act:"đã tải lên",  doc:"Báo cáo Ads tháng 04/2024",       t:"3 ngày trước",c:"bg-sky-500" },
];
const RES_FAV=[
  { name:"Checklist SEO Onpage chuẩn", cat:"SEO", ft:"DOCX" },
  { name:"Kịch bản telesales tuyển sinh", cat:"CRM", ft:"DOCX" },
  { name:"Mẫu báo cáo hiệu quả Ads", cat:"ADS", ft:"DOCX" },
  { name:"Quy trình chăm sóc & chuyển đổi lead", cat:"CRM", ft:"PDF" },
];
const RES_AI_CHIPS=["Tìm checklist SEO mới nhất","Tài liệu về quy trình chăm sóc lead","Mẫu báo cáo Ads hiệu quả","Tài liệu CRM cho tuyển sinh","SOP chạy chiến dịch quảng cáo"];
const RES_AI_TODAY=[
  { name:"Checklist SEO Technical",   d:"12/05/2024", ft:"DOCX" },
  { name:"Báo cáo Ads tháng 04/2024", d:"10/05/2024", ft:"XLSX" },
  { name:"Quy trình tuyển sinh 2026", d:"06/05/2024", ft:"DOCX" },
];
let RES_FILTER = "all";
function renderResources(){
  RES_FILTER = "all";
  const acts = `<button onclick="resOpenCreate()" class="bg-${AC}-600 text-white text-[12.5px] font-semibold px-3.5 py-2 rounded-lg shrink-0">Tạo file</button><button onclick="resOpenCreate()" class="text-[12.5px] font-semibold text-slate-600 border border-slate-200 rounded-lg px-3 py-2 shrink-0">Tải lên</button>`;
  renderShell("resources.html","FPT Drive","Kho tài nguyên dùng chung của team — SEO · ADS · CRM · CDP", acts);
  paintResources();
}
function setResFilter(c){ RES_FILTER=c; paintResources(); }
function resStatCard(s){ return `<div class="bg-white border border-slate-200 rounded-2xl p-4 flex items-start justify-between"><div><div class="text-[28px] font-extrabold ${s.num} leading-none">${s.n}</div><div class="text-[13px] font-semibold text-slate-700 mt-1.5">${s.lb}</div><div class="text-[11px] text-slate-400">${s.sub}</div></div><span class="w-10 h-10 rounded-xl grid place-items-center text-[18px] ${s.bg} shrink-0">${s.icon}</span></div>`; }
function resRecentCard(r){ const f=ft1(r.ft); return `<a href="#" onclick="event.preventDefault();alert('Mở: ${r.name} (demo)')" class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-2.5 hover:border-${AC}-300 hover:shadow-sm transition min-w-0"><span class="w-9 h-9 rounded-lg grid place-items-center text-[15px] ${f[0]} shrink-0">${f[1]}</span><div class="min-w-0"><div class="text-[12.5px] font-semibold text-slate-800 truncate">${r.name}</div><div class="flex items-center gap-1.5 mt-0.5"><span class="px-1.5 py-0.5 rounded text-[9px] font-bold ${f[0]}">${r.ft}</span><span class="text-[10.5px] text-slate-400 truncate">${r.owner}</span></div></div></a>`; }
function resFileCard(r){ const f=ft1(r.ft); return `<div class="bg-white border border-slate-200 rounded-xl p-4 hover:border-${AC}-300 hover:shadow-sm transition"><div class="flex items-start justify-between mb-3"><span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${f[0]}">${r.ft}</span><button onclick="alert('Tùy chọn tài nguyên (demo)')" class="text-slate-300 hover:text-slate-500 leading-none">Khác</button></div><a href="#" onclick="event.preventDefault();alert('Mở: ${r.name} (demo)')" class="font-semibold text-[13px] text-slate-800 hover:text-${AC}-600 block leading-snug mb-2 min-h-[34px]">${r.name}</a><div class="flex items-center gap-2 mb-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${RES_CAT_CLS[r.cat]}">${r.cat}</span><span class="text-[11px] text-slate-400 truncate">${r.owner}</span></div><div class="text-[11px] text-slate-400 border-t border-slate-50 pt-2">${r.date}</div></div>`; }
function resAIPanel(){ return `<aside class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 self-start">
  <div class="flex items-center gap-2"><span class="w-8 h-8 rounded-lg bg-violet-600 text-white grid place-items-center text-[13px]"></span><b class="text-[14px] text-slate-800">AI Assistant</b><span class="ml-auto text-[10px] font-bold text-violet-600 bg-violet-50 rounded-full px-2 py-0.5">Beta</span></div>
  <div class="text-[12.5px]"><b>Xin chào ${ME.name.split(" ").pop()}!</b><div class="text-slate-500 mt-0.5">Tôi có thể giúp bạn tìm tài liệu nhanh chóng.</div></div>
  <div class="space-y-2">${RES_AI_CHIPS.map(q=>`<button onclick="resAIFill('${q.replace(/'/g,"")}')" class="w-full text-left bg-${AC}-50 hover:bg-${AC}-100 text-${AC}-700 font-semibold text-[12px] rounded-lg px-3 py-2.5">${q}</button>`).join("")}</div>
  <div class="border border-slate-200 rounded-xl p-3 mt-1">
    <b class="text-[12.5px] text-slate-800 block mb-2">Gợi ý hôm nay</b>
    ${RES_AI_TODAY.map(r=>{const f=ft1(r.ft);return `<a href="#" onclick="event.preventDefault();alert('Mở: ${r.name} (demo)')" class="flex items-start gap-2.5 py-1.5"><span class="w-6 h-6 rounded grid place-items-center text-[11px] ${f[0]} shrink-0">${f[1]}</span><div class="min-w-0"><div class="text-[12px] font-semibold text-slate-700 truncate">${r.name}</div><div class="text-[10.5px] text-slate-400">Cập nhật ${r.d}</div></div></a>`;}).join("")}
    <button onclick="alert('Xem thêm gợi ý (demo)')" class="w-full text-center text-${AC}-600 text-[12px] font-semibold mt-1.5">Xem thêm gợi ý</button>
  </div>
  <div class="mt-1">
    <div class="flex items-center gap-2 border border-slate-200 rounded-full px-3 py-2"><input id="resAIInput" onkeydown="if(event.key==='Enter')resAISend()" class="flex-1 text-[12.5px] focus:outline-none bg-transparent" placeholder="Bạn muốn tìm gì?"><button onclick="resAISend()" class="w-8 h-8 rounded-full bg-violet-600 text-white grid place-items-center shrink-0">Gửi</button></div>
    <p class="text-[10.5px] text-slate-400 mt-1.5">AI có thể mắc sai sót. Vui lòng kiểm tra lại.</p>
  </div>
</aside>`; }
function resAIFill(q){ const i=document.getElementById("resAIInput"); if(i){ i.value=q; i.focus(); } }
function resAISend(){ const i=document.getElementById("resAIInput"); const v=(i&&i.value||"").trim(); if(!v) return; alert(`AI đang tìm tài liệu cho: "${v}" (demo)`); }
function paintResources(){
  const list = RES_ITEMS.filter(r=> RES_FILTER==="all" || r.cat===RES_FILTER);
  document.getElementById("content").innerHTML=`
  <div class="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5">
    <div class="min-w-0">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">${RES_STATS.map(resStatCard).join("")}</div>

      <div class="flex items-center mb-2"><h3 class="font-bold text-[14px] text-slate-800">Truy cập gần đây</h3><button onclick="alert('Xem tất cả (demo)')" class="ml-auto text-[12px] font-semibold text-${AC}-600">Xem tất cả</button></div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">${RES_RECENT.map(resRecentCard).join("")}</div>

      <div class="flex flex-wrap items-center gap-2 mb-3"><h3 class="font-bold text-[14px] text-slate-800 mr-2">Kho tài nguyên</h3>
        <select onchange="setResFilter(this.value)" class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white"><option value="all">Tất cả danh mục</option>${RES_CATS.map(c=>`<option value="${c}" ${RES_FILTER===c?"selected":""}>${c}</option>`).join("")}</select>
        <select class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white"><option>Tất cả loại file</option><option>XLSX</option><option>DOCX</option><option>PDF</option><option>PPTX</option><option>LINK</option></select>
        <select class="border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] bg-white"><option>Sắp xếp: Mới nhất</option><option>Sắp xếp: Cũ nhất</option><option>Sắp xếp: Tên A→Z</option></select>
        <div class="ml-auto flex bg-slate-100 rounded-lg p-0.5"><button class="px-2.5 py-1.5 rounded-md bg-white text-${AC}-700 shadow-sm text-[11px]">Lưới</button><button onclick="alert('Dạng danh sách (demo)')" class="px-2.5 py-1.5 rounded-md text-slate-400 text-[11px]">Danh sách</button></div>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">${list.map(resFileCard).join("")||`<div class="text-slate-400 text-[12.5px] col-span-full py-6 text-center">Không có tài nguyên ở danh mục này.</div>`}</div>
      <div class="text-center my-4"><button onclick="alert('Xem thêm tài liệu (demo)')" class="text-${AC}-600 text-[12.5px] font-semibold">Xem thêm tài liệu</button></div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-white border border-slate-200 rounded-2xl p-4">
          <h3 class="font-bold text-[14px] text-slate-800 mb-3">Hoạt động gần đây</h3>
          <div class="space-y-3">${RES_ACTIVITY.map(a=>`<div class="flex items-center gap-2.5 text-[12.5px]"><span class="w-2 h-2 rounded-full ${a.c} shrink-0"></span><div class="flex-1 min-w-0"><b>${a.who}</b> <span class="text-slate-500">${a.act}</span> <span class="text-slate-700">${a.doc}</span></div><span class="text-[11px] text-slate-400 shrink-0">${a.t}</span></div>`).join("")}</div>
        </div>
        <div class="bg-white border border-slate-200 rounded-2xl p-4">
          <div class="flex items-center mb-3"><h3 class="font-bold text-[14px] text-slate-800">⭐ Tài liệu yêu thích</h3><button onclick="alert('Xem tất cả (demo)')" class="ml-auto text-[12px] font-semibold text-${AC}-600">Xem tất cả</button></div>
          <div class="space-y-2.5">${RES_FAV.map(r=>`<div class="flex items-center gap-2 text-[12.5px]"><span class="text-amber-400"></span><span class="flex-1 min-w-0 truncate font-medium text-slate-700">${r.name}</span><span class="px-1.5 py-0.5 rounded text-[9px] font-bold ${RES_CAT_CLS[r.cat]}">${r.cat}</span><span class="px-1.5 py-0.5 rounded text-[9px] font-bold ${ft1(r.ft)[0]}">${r.ft}</span></div>`).join("")}</div>
        </div>
      </div>
    </div>
    ${resAIPanel()}
  </div>
  ${resCreateModalHTML()}`;
}
/* Modal Tạo file mới */
function resCreateModalHTML(){
  return `<div id="resModal" class="hidden fixed inset-0 z-[60] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)resCloseCreate()">
    <div class="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
      <div class="px-6 py-4 border-b border-slate-100 flex items-center"><h2 class="font-bold text-[16px]">Tạo file mới</h2><button onclick="resCloseCreate()" class="ml-auto text-slate-400 text-xl leading-none xclose">×</button></div>
      <div class="p-6 grid md:grid-cols-[1fr_230px] gap-6 overflow-y-auto">
        <div class="space-y-4">
          <div><label class="text-[12px] font-semibold text-slate-600 block mb-1">Tên tài liệu <span class="text-red-500">*</span></label><input id="rcName" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]" placeholder="Nhập tên tài liệu"></div>
          <div><label class="text-[12px] font-semibold text-slate-600 block mb-1">Danh mục <span class="text-red-500">*</span></label><select id="rcCat" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] bg-white"><option value="" disabled selected>Chọn danh mục</option>${RES_CATS.map(c=>`<option>${c}</option>`).join("")}</select></div>
          <div><label class="text-[12px] font-semibold text-slate-600 block mb-1">Mô tả (tùy chọn)</label><textarea rows="2" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]" placeholder="Nhập mô tả về tài liệu"></textarea></div>
          <div><label class="text-[12px] font-semibold text-slate-600 block mb-1.5">Quyền truy cập <span class="text-red-500">*</span></label>
            <label class="flex items-start gap-2 mb-2 cursor-pointer"><input type="radio" name="rcScope" value="public" checked class="mt-0.5 accent-${AC}-600"><span><b class="text-[13px]">Dùng chung</b><div class="text-[11.5px] text-slate-400">Mọi người trong hệ thống đều có thể xem</div></span></label>
            <label class="flex items-start gap-2 cursor-pointer"><input type="radio" name="rcScope" value="private" class="mt-0.5 accent-${AC}-600"><span><b class="text-[13px]">Cá nhân</b><div class="text-[11.5px] text-slate-400">Chỉ mình bạn có thể xem</div></span></label>
          </div>
          <div><label class="text-[12px] font-semibold text-slate-600 block mb-1.5">File đính kèm <span class="text-red-500">*</span></label>
            <div class="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center">
              <div class="text-2xl mb-1"></div>
              <div class="text-[12.5px] text-slate-500">Kéo thả file vào đây</div>
              <div class="text-[11px] text-slate-400 my-1">hoặc</div>
              <label class="inline-block text-[12.5px] font-semibold text-${AC}-700 border border-${AC}-200 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-${AC}-50">Chọn file từ máy tính<input type="file" class="hidden" onchange="resFileChosen(this)"></label>
              <div class="text-[10.5px] text-slate-400 mt-3">Hỗ trợ: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, PNG, JPG (Tối đa 50MB)</div>
            </div>
          </div>
        </div>
        <div class="bg-slate-50 border border-slate-100 rounded-xl p-4 h-fit text-[12.5px]">
          <h4 class="font-semibold text-slate-700 mb-3">Thông tin file</h4>
          <div class="mb-2.5"><div class="text-slate-400 text-[11px]">Tên file</div><div id="rfName" class="font-medium text-slate-700 break-all">-</div></div>
          <div class="mb-2.5"><div class="text-slate-400 text-[11px]">Loại file</div><div id="rfType" class="font-medium text-slate-700">-</div></div>
          <div><div class="text-slate-400 text-[11px]">Kích thước</div><div id="rfSize" class="font-medium text-slate-700">-</div></div>
        </div>
      </div>
      <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2"><button onclick="resCloseCreate()" class="border border-slate-200 text-slate-600 font-semibold text-[13px] px-5 py-2.5 rounded-lg">Hủy</button><button onclick="resCreateConfirm()" class="bg-${AC}-600 text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg">Tạo file</button></div>
    </div></div>`;
}
function resOpenCreate(){ const m=document.getElementById("resModal"); if(m)m.classList.remove("hidden"); }
function resCloseCreate(){ const m=document.getElementById("resModal"); if(m)m.classList.add("hidden"); }
function resFileChosen(input){ const f=input.files&&input.files[0]; if(!f)return; document.getElementById("rfName").textContent=f.name; document.getElementById("rfType").textContent=(f.name.split(".").pop()||"-").toUpperCase(); document.getElementById("rfSize").textContent=(f.size/1048576).toFixed(2)+" MB"; const t=document.getElementById("rcName"); if(t&&!t.value)t.value=f.name.replace(/\.[^.]+$/,""); }
function resCreateConfirm(){
  const t=(document.getElementById("rcName").value||"").trim(); if(!t) return alert("Vui lòng nhập tên tài liệu.");
  const cat=document.getElementById("rcCat").value; if(!cat) return alert("Vui lòng chọn danh mục.");
  const scope=(document.querySelector('input[name=rcScope]:checked')||{}).value||"public";
  RES_ITEMS.unshift({ cat, name:t, ft:"DOCX", owner:ME.name.split(" ").pop(), date:"Hôm nay", scope });
  alert(`Đã tạo tài liệu "${t}" · ${cat} · ${scope==="public"?"Dùng chung (cả team xem được)":"Cá nhân (chỉ mình bạn)"}. (demo)`);
  resCloseCreate(); paintResources();
}

/* =====================================================================
 *  ROUTER
 * ===================================================================== */
/* =====================================================================
 *  DỰ ÁN PHỐI HỢP — liên kết & làm việc giữa các phòng ban
 * ===================================================================== */
const DEPTS = ["ADS","SEO","CRM","CDP","Cơ sở"];
const DEPT_CLS = { ADS:"bg-orange-100 text-orange-700", SEO:"bg-emerald-100 text-emerald-700", CRM:"bg-cyan-100 text-cyan-700", CDP:"bg-indigo-100 text-indigo-700", "Cơ sở":"bg-slate-100 text-slate-600" };
const deptChip = (d)=>`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${DEPT_CLS[d]||"bg-slate-100 text-slate-600"}">${d}</span>`;
const deptMembers = (d)=> GROUPS[d] || [];
const CSTATUS = { running:["Đang phối hợp","bg-indigo-100 text-indigo-700"], done:["Hoàn thành","bg-emerald-100 text-emerald-700"], paused:["Tạm dừng","bg-amber-100 text-amber-700"] };
let COLLAB_PROJECTS = [
  { id:1, name:"Chiến dịch tuyển sinh THPT Hà Nam 2026", lead:"ADS", depts:["ADS","SEO","CRM","CDP"], owner:"Nguyễn Văn Nam", goal:"Đạt 300 hồ sơ nhập học", progress:64, status:"running", due:"2026-06-30", members:["Nam Phạm","Linh Trần","Ánh Dương","Minh Hoàng"], tasks:12 },
  { id:2, name:"Landing page + Tracking dữ liệu Bắc Ninh", lead:"SEO", depts:["SEO","CDP","ADS"], owner:"Linh Trần", goal:"LP chuẩn SEO + tracking đủ sự kiện chuyển đổi", progress:80, status:"running", due:"2026-06-20", members:["Linh Trần","Nguyễn Văn Nam","Nam Phạm"], tasks:6 },
  { id:3, name:"Chuẩn hóa dữ liệu lead toàn hệ thống", lead:"CDP", depts:["CDP","CRM"], owner:"Minh Hoàng", goal:"Dedupe & đồng bộ CRM ↔ CDP", progress:100, status:"done", due:"2026-06-05", members:["Minh Hoàng"], tasks:3 },
  { id:4, name:"Bộ nội dung & quảng cáo Bắc Giang", lead:"ADS", depts:["ADS","SEO","Cơ sở"], owner:"Nam Phạm", goal:"Creative + nội dung cho campaign + phối hợp cơ sở", progress:35, status:"paused", due:"2026-07-10", members:["Nam Phạm","Huy Lê","Linh Trần"], tasks:5 },
];
let COLLAB_REQUESTS = [
  { id:1, from:"ADS", to:"CDP", title:"Cần CDP cấp tệp audience tùy chỉnh cho Ads remarketing", by:"Nam Phạm", status:"pending" },
  { id:2, from:"SEO", to:"ADS", title:"Nhờ ADS chạy A/B test tiêu đề landing tuyển sinh", by:"Linh Trần", status:"approved" },
  { id:3, from:"CRM", to:"SEO", title:"Cần SEO viết nội dung chuỗi email nuôi dưỡng lead", by:"Minh Hoàng", status:"pending" },
];

function collabKPI(){
  const running = COLLAB_PROJECTS.filter(p=>p.status==="running").length;
  const depts = new Set(); COLLAB_PROJECTS.forEach(p=>p.depts.forEach(d=>depts.add(d)));
  const tasks = COLLAB_PROJECTS.reduce((s,p)=>s+p.tasks,0);
  const pend = COLLAB_REQUESTS.filter(r=>r.status==="pending").length;
  return { running, depts:depts.size, tasks, pend };
}
function collabPairs(){
  const m={};
  COLLAB_PROJECTS.forEach(p=>{ for(let i=0;i<p.depts.length;i++) for(let j=i+1;j<p.depts.length;j++){ const k=[p.depts[i],p.depts[j]].sort().join(" ⇄ "); m[k]=(m[k]||0)+1; } });
  return Object.entries(m).sort((a,b)=>b[1]-a[1]);
}
function collabProjCard(p){
  const dd = (new Date(p.due)); const dl = `${String(dd.getDate()).padStart(2,"0")}/${String(dd.getMonth()+1).padStart(2,"0")}/${dd.getFullYear()}`;
  return `<div class="bg-white border border-slate-200 rounded-xl p-4">
    <div class="flex items-start gap-2 mb-1"><h3 class="font-semibold text-[13.5px] text-slate-800 flex-1">${p.name}</h3><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${CSTATUS[p.status][1]} shrink-0">${CSTATUS[p.status][0]}</span></div>
    <div class="text-[11.5px] text-slate-500">Chủ trì: ${deptChip(p.lead)} <b class="ml-1">${p.owner}</b></div>
    <div class="flex flex-wrap items-center gap-1 mt-2"><span class="text-[11px] text-slate-400 mr-1">Phòng ban:</span>${p.depts.map(deptChip).join(" ")}</div>
    <div class="text-[12px] text-slate-600 mt-2">🎯 Mục tiêu: ${p.goal}</div>
    <div class="mt-2">${progressBar(p.progress, p.status==="done"?"bg-emerald-500":p.status==="paused"?"bg-amber-500":"bg-indigo-500")}<div class="flex justify-between text-[10.5px] text-slate-400 mt-0.5"><span>${p.progress}%</span><span>Hạn ${dl} · ${p.tasks} task</span></div></div>
    <div class="flex items-center justify-between mt-2"><div class="flex -space-x-1.5">${p.members.slice(0,5).map(avatar).join("")}</div><div class="flex gap-1.5"><a href="collab-detail.html?id=${p.id}&tab=updates" class="text-[11px] font-semibold text-${AC}-700 border border-${AC}-200 rounded-lg px-2.5 py-1">Cập nhật</a><a href="collab-detail.html?id=${p.id}&tab=talk" class="text-[11px] font-semibold text-slate-500 border border-slate-200 rounded-lg px-2.5 py-1">Trao đổi</a></div></div>
  </div>`;
}
function reqRow(r){
  const can = IS_BOSS && r.status==="pending";
  return `<tr class="border-b border-slate-50 ${r.status==="pending"?"bg-amber-50/30":""}">
    <td class="py-2.5">${deptChip(r.from)} <span class="text-slate-400">→</span> ${deptChip(r.to)}</td>
    <td>${r.title}<div class="text-[10.5px] text-slate-400">Gửi bởi ${r.by}</div></td>
    <td><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${r.status==="pending"?"bg-amber-100 text-amber-700":r.status==="approved"?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}">${r.status==="pending"?"Chờ xử lý":r.status==="approved"?"Đồng ý":"Từ chối"}</span></td>
    <td class="text-right">${can?`<button onclick="collabDecide(${r.id},'approved')" class="text-[11px] font-semibold text-emerald-700 border border-emerald-200 rounded-lg px-2 py-1">Đồng ý</button> <button onclick="collabReject(${r.id})" class="text-[11px] font-semibold text-red-600 border border-red-200 rounded-lg px-2 py-1">Từ chối</button>`:`<span class="text-slate-300 text-[11px]">${r.status==="pending"?"chờ quản lý":"đã xử lý"}</span>`}</td>
  </tr>${can?`<tr id="rej-${r.id}" class="hidden"><td colspan="4" class="px-2 pb-2"><div class="bg-red-50 border border-red-200 rounded-lg p-2.5"><textarea id="rejNote-${r.id}" rows="2" class="w-full border border-red-200 rounded-lg px-3 py-2 text-[12.5px] bg-white" placeholder="Lý do từ chối phối hợp (bắt buộc)…"></textarea><div class="flex justify-end gap-2 mt-2"><button onclick="document.getElementById('rej-${r.id}').classList.add('hidden')" class="text-[12px] text-slate-500 border border-slate-200 rounded-lg px-3 py-1.5">Hủy</button><button onclick="collabDecide(${r.id},'rejected')" class="text-[12px] text-white bg-red-600 rounded-lg px-3 py-1.5 font-semibold">Xác nhận từ chối</button></div></div></td></tr>`:""}`;
}
function collabKpi(label,value,sub,subCls,key){
  return `<div onclick="collabPop('${key}')" class="cursor-pointer bg-white border border-slate-200 rounded-xl p-4 hover:border-${AC}-300 hover:shadow-sm transition">
    <div class="flex items-start justify-between"><div class="text-[12px] font-medium text-slate-500">${label}</div><span class="text-[10px] text-${AC}-400">↗</span></div>
    <div class="text-[24px] font-extrabold text-slate-800 mt-1 tracking-tight">${value}</div>
    ${sub?`<div class="text-[11px] font-semibold mt-0.5 ${subCls||"text-slate-400"}">${sub}</div>`:""}
  </div>`;
}
function openInfoModal(title, html){
  closeTaskPop();
  document.body.insertAdjacentHTML("beforeend", `<div id="taskPop" class="fixed inset-0 z-[60] bg-slate-900/40 grid place-items-center p-4" onclick="if(event.target===this)closeTaskPop()">
    <div class="bg-white rounded-2xl w-full max-w-2xl max-h-[82vh] overflow-hidden flex flex-col shadow-2xl">
      <div class="px-5 py-3 border-b border-slate-200 flex items-center"><h3 class="font-bold text-[15px]">${title}</h3><button onclick="closeTaskPop()" class="ml-auto text-slate-400 text-xl leading-none xclose">×</button></div>
      <div class="overflow-y-auto p-4 text-[13px]">${html}</div>
    </div></div>`);
}
function collabPop(key){
  let title="", html="";
  if(key==="running"){
    const ps=COLLAB_PROJECTS.filter(p=>p.status==="running");
    title="Dự án đang phối hợp ("+ps.length+")";
    html=ps.map(p=>`<div class="border-b border-slate-50 py-2.5"><div class="flex items-center gap-2"><b class="text-[13px] flex-1">${p.name}</b><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${CSTATUS[p.status][1]}">${CSTATUS[p.status][0]}</span></div><div class="text-[11.5px] text-slate-500 mt-0.5">Chủ trì ${deptChip(p.lead)} ${p.owner} · ${p.depts.map(deptChip).join(" ")} · ${p.progress}% · Hạn ${fmtD(p.due)}</div><a href="collab-detail.html?id=${p.id}&tab=updates" onclick="closeTaskPop()" class="text-[11.5px] font-semibold text-${AC}-600">Xem chi tiết →</a></div>`).join("");
  } else if(key==="depts"){
    const set=new Set(); COLLAB_PROJECTS.forEach(p=>p.depts.forEach(d=>set.add(d)));
    title="Phòng ban tham gia ("+set.size+")";
    html=[...set].map(d=>{ const cnt=COLLAB_PROJECTS.filter(p=>p.depts.includes(d)).length; return `<div class="flex items-center justify-between border-b border-slate-50 py-2.5"><span class="flex items-center gap-2">${deptChip(d)}<span class="text-[12px] text-slate-500">${(GROUPS[d]||[]).map(n=>n.split(" ").pop()).join(", ")||"—"}</span></span><b class="text-[12px]">${cnt} dự án</b></div>`; }).join("");
  } else if(key==="tasks"){
    title="Task liên phòng theo dự án";
    html=COLLAB_PROJECTS.map(p=>`<div class="flex items-center justify-between border-b border-slate-50 py-2.5"><a href="collab-detail.html?id=${p.id}&tab=updates" onclick="closeTaskPop()" class="text-[12.5px] font-semibold text-slate-700 hover:text-${AC}-600">${p.name}</a><b class="text-[12px]">${p.tasks} task</b></div>`).join("");
  } else if(key==="pend"){
    const rs=COLLAB_REQUESTS.filter(r=>r.status==="pending");
    title="Yêu cầu hỗ trợ chờ xử lý ("+rs.length+")";
    html=rs.length?rs.map(r=>`<div class="border-b border-slate-50 py-2.5"><div class="flex items-center gap-2 mb-1">${deptChip(r.from)} <span class="text-slate-400">→</span> ${deptChip(r.to)}</div><div class="text-[12.5px] text-slate-700">${r.title}</div><div class="text-[10.5px] text-slate-400">Gửi bởi ${r.by}</div></div>`).join(""):"";
  }
  openInfoModal(title, html||`<div class="py-6 text-center text-slate-400">Không có dữ liệu.</div>`);
}
function renderCollab(){
  renderShell("collab.html","Dự án phối hợp","Liên kết & làm việc giữa các phòng ban — dự án chung, yêu cầu hỗ trợ liên phòng",
    `<button onclick="cpStart()" class="bg-${AC}-600 text-white text-[12.5px] font-semibold px-3.5 py-2 rounded-lg shrink-0">＋ Tạo dự án phối hợp</button>`);
  paintCollab();
}
function paintCollab(){
  const k=collabKPI();
  document.getElementById("content").innerHTML = `
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
    ${collabKpi("Dự án đang phối hợp", k.running, "liên phòng ban — bấm để xem", "text-slate-400", "running")}
    ${collabKpi("Phòng ban tham gia", k.depts, "đang liên kết", "text-slate-400", "depts")}
    ${collabKpi("Task liên phòng", k.tasks, "thuộc các dự án chung", "text-slate-400", "tasks")}
    ${collabKpi("Yêu cầu hỗ trợ chờ", k.pend, "cần xử lý", k.pend?"text-amber-600":"text-slate-400", "pend")}
  </div>

  <div id="collabForm" class="hidden bg-${AC}-50 border border-${AC}-200 rounded-xl p-4 mb-4">
    <h3 class="font-semibold text-[13.5px] mb-3 text-${AC}-700">Tạo dự án phối hợp liên phòng ban</h3>
    <div class="grid md:grid-cols-2 gap-3 mb-3">
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Tên dự án <span class="text-red-500">*</span></label><input id="cpName" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px]" placeholder="VD: Chiến dịch tuyển sinh Q3"></div>
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Mục tiêu chung</label><input id="cpGoal" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px]" placeholder="VD: 200 hồ sơ đăng ký"></div>
    </div>
    <div class="grid md:grid-cols-3 gap-3 mb-3">
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Phòng ban chủ trì</label><select id="cpLead" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px]">${DEPTS.map(d=>`<option>${d}</option>`).join("")}</select></div>
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Người phụ trách chung</label><select id="cpOwner" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px]">${USERS.map(u=>`<option>${u.name}</option>`).join("")}</select></div>
      <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Hạn hoàn thành</label><input id="cpDue" type="date" value="2026-07-01" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px]"></div>
    </div>
    <div class="mb-3"><label class="text-[11px] font-semibold text-slate-500 block mb-1">Phòng ban phối hợp <span class="text-red-500">*</span></label><div class="flex flex-wrap gap-2">${DEPTS.map(d=>`<label class="inline-flex items-center gap-1.5 border border-slate-200 rounded-lg px-2.5 py-1.5 text-[12px] cursor-pointer bg-white"><input type="checkbox" class="cpDept accent-${AC}-600" value="${d}"> ${d}</label>`).join("")}</div></div>
    <div class="mb-3"><label class="text-[11px] font-semibold text-slate-500 block mb-1">Mô tả & phạm vi phối hợp</label><textarea id="cpDesc" rows="2" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]" placeholder="Mỗi phòng ban phụ trách phần gì, cần phối hợp ra sao…"></textarea></div>
    <div class="flex justify-end gap-2"><button onclick="collabNewToggle()" class="border border-slate-200 text-slate-600 font-semibold text-[12.5px] px-4 py-2 rounded-lg">Hủy</button><button onclick="collabCreate()" class="bg-${AC}-600 text-white font-semibold text-[12.5px] px-4 py-2 rounded-lg">Tạo dự án</button></div>
  </div>

  <h2 class="text-[15px] font-bold text-slate-900 mb-2 pl-3 border-l-4 border-${AC}-500">Dự án phối hợp</h2>
  <div class="grid md:grid-cols-2 gap-4 mb-5">${COLLAB_PROJECTS.map(collabProjCard).join("")}</div>

  <div class="grid md:grid-cols-3 gap-4">
    <div class="md:col-span-2 bg-white border border-slate-200 rounded-xl p-4">
      <div class="flex items-center mb-2"><h3 class="font-semibold text-[13.5px]">Yêu cầu hỗ trợ liên phòng</h3><button onclick="collabReqToggle()" class="ml-auto text-[11.5px] font-semibold text-${AC}-700 border border-${AC}-200 rounded-lg px-2.5 py-1.5">＋ Gửi yêu cầu</button></div>
      <div id="reqForm" class="hidden bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3">
        <div class="grid grid-cols-2 gap-2 mb-2"><select id="rqFrom" class="border border-slate-200 rounded-lg px-2 py-1.5 text-[12px] bg-white">${DEPTS.map(d=>`<option>${d}</option>`).join("")}</select><select id="rqTo" class="border border-slate-200 rounded-lg px-2 py-1.5 text-[12px] bg-white">${DEPTS.map(d=>`<option ${d==="CDP"?"selected":""}>${d}</option>`).join("")}</select></div>
        <input id="rqTitle" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-[12.5px] mb-2" placeholder="Nội dung cần phòng ban kia hỗ trợ…">
        <div class="flex justify-end"><button onclick="collabReqCreate()" class="bg-${AC}-600 text-white text-[12px] font-semibold px-4 py-1.5 rounded-lg">Gửi yêu cầu</button></div>
      </div>
      <table class="w-full text-[12.5px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b border-slate-100"><th class="py-2">Phòng ban</th><th>Nội dung</th><th>Trạng thái</th><th></th></tr></thead><tbody>${COLLAB_REQUESTS.map(reqRow).join("")}</tbody></table>
    </div>
    <div class="space-y-4">
      <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Cặp phòng ban đang phối hợp</h3><div class="space-y-1.5 text-[12.5px]">${collabPairs().map(([k,n])=>`<div class="flex items-center justify-between"><span>${k}</span><span class="text-[11px] font-semibold text-slate-500 bg-slate-100 rounded-full px-2">${n} dự án</span></div>`).join("")||"<div class='text-slate-400'>Chưa có.</div>"}</div></div>
      <div class="bg-white border border-slate-200 rounded-xl p-4"><h3 class="font-semibold text-[13.5px] mb-2">Phòng ban / Nhóm chuyên môn</h3>${Object.keys(GROUPS).map(g=>`<div class="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0"><span class="flex items-center gap-2">${deptChip(g)}<span class="text-[12px] text-slate-500">${GROUPS[g].map(n=>n.split(" ").pop()).join(", ")}</span></span><span class="text-[10.5px] text-slate-400">${GROUPS[g].length} người</span></div>`).join("")}</div>
    </div>
  </div>`;
}
function collabNewToggle(){ const f=document.getElementById("collabForm"); if(f)f.classList.toggle("hidden"); }
function collabCreate(){
  const name=(document.getElementById("cpName").value||"").trim(); if(!name) return alert("Nhập tên dự án.");
  const depts=[...document.querySelectorAll(".cpDept:checked")].map(c=>c.value); if(!depts.length) return alert("Chọn ít nhất một phòng ban phối hợp.");
  const lead=document.getElementById("cpLead").value, owner=document.getElementById("cpOwner").value, due=document.getElementById("cpDue").value, goal=(document.getElementById("cpGoal").value||"").trim();
  const set=new Set([lead,...depts]);
  COLLAB_PROJECTS.unshift({ id:Date.now(), name, lead, depts:[...set], owner, goal:goal||"(chưa nêu mục tiêu)", progress:0, status:"running", due:due||"2026-07-01", members:[owner], tasks:0 });
  collabNewToggle(); paintCollab();
  alert(`Đã tạo dự án phối hợp "${name}" · chủ trì ${lead} · phối hợp: ${[...set].join(", ")}. Đã thông báo các phòng ban tham gia. (demo)`);
}
function collabReqToggle(){ const f=document.getElementById("reqForm"); if(f)f.classList.toggle("hidden"); }
function collabReqCreate(){
  const t=(document.getElementById("rqTitle").value||"").trim(); if(!t) return alert("Nhập nội dung yêu cầu.");
  const from=document.getElementById("rqFrom").value, to=document.getElementById("rqTo").value;
  if(from===to) return alert("Phòng gửi và phòng nhận phải khác nhau.");
  COLLAB_REQUESTS.unshift({ id:Date.now(), from, to, title:t, by:ME.name, status:"pending" });
  paintCollab(); alert(`Đã gửi yêu cầu hỗ trợ từ ${from} đến ${to}. (demo)`);
}
function collabReject(id){ const r=document.getElementById("rej-"+id); if(r)r.classList.toggle("hidden"); }
function collabDecide(id,decision){
  const req=COLLAB_REQUESTS.find(x=>x.id===id); if(!req) return;
  if(decision==="rejected"){ const note=(document.getElementById("rejNote-"+id)||{}).value||""; if(!note.trim()) return alert("Vui lòng nhập lý do từ chối."); req.status="rejected"; paintCollab(); alert(`Đã TỪ CHỐI yêu cầu của ${req.from}. Lý do: "${note.trim()}". Đã gửi phản hồi. (demo)`); return; }
  req.status="approved"; paintCollab(); alert(`Đã ĐỒNG Ý cho ${req.to} hỗ trợ ${req.from}. Đã thông báo hai phòng ban. (demo)`);
}

/* =====================================================================
 *  TẠO DỰ ÁN PHỐI HỢP — wizard 3 bước
 * ===================================================================== */
let CP = null;
const CP_ROLES = ["Chịu trách nhiệm","Phối hợp chính","Hỗ trợ","Theo dõi"];
const fmtD = (s)=>{ if(!s) return "—"; const x=new Date(s),p=n=>String(n).padStart(2,"0"); return `${p(x.getDate())}/${p(x.getMonth()+1)}/${x.getFullYear()}`; };
function cpInit(){
  CP = {
    step:1,
    name:"Chiến dịch tuyển sinh Q3/2026",
    goal:"Tăng 200 hồ sơ đăng ký tuyển sinh thông qua chiến dịch đa kênh (Ads, SEO, CRM, CDP).",
    prio:"Cao", due:"2026-07-01", budget:"200.000.000 đ", lead:"ADS",
    depts:["ADS","SEO","CRM","CDP"],
    people:[
      { dept:"ADS", who:"Nam Phạm",        role:"Chịu trách nhiệm", resp:"Lên kế hoạch & triển khai Ads", contact:"nam.pham@fpt.edu.vn" },
      { dept:"SEO", who:"Linh Trần",       role:"Chịu trách nhiệm", resp:"SEO landing page & nội dung",   contact:"linh.tran@fpt.edu.vn" },
      { dept:"CRM", who:"Minh Hoàng",      role:"Phối hợp chính",   resp:"Thiết lập & tối ưu CRM",       contact:"minh.hoang@fpt.edu.vn" },
      { dept:"CDP", who:"Nguyễn Văn Nam",  role:"Phối hợp chính",   resp:"Dữ liệu, audience & tracking", contact:"nam.nguyen@fpt.edu.vn" },
    ],
    desc:"Triển khai chiến dịch tuyển sinh Q3/2026 với mục tiêu tăng 200 hồ sơ đăng ký thông qua phối hợp đa phòng ban.",
    scope:["Phối hợp lập kế hoạch & triển khai chiến dịch","Chia sẻ dữ liệu và tài nguyên cần thiết","Theo dõi tiến độ và báo cáo kết quả","Đánh giá và tối ưu chiến dịch"],
    milestones:[
      { name:"Khởi động & phân công nhiệm vụ", date:"2026-06-08" },
      { name:"Hoàn thiện kế hoạch chi tiết",   date:"2026-06-15" },
      { name:"Triển khai & theo dõi tiến độ",  date:"2026-06-25" },
      { name:"Nghiệm thu & báo cáo kết quả",   date:"2026-07-01" },
    ],
  };
}
function cpStart(){ cpInit(); location.hash="#collab-new.html"; }
function cpVal(id,d){ const e=document.getElementById(id); return e?e.value:d; }
function cpSetTxt(id,t){ const e=document.getElementById(id); if(e)e.textContent=t; }
function cpRow(label,val,last){ return `<div class="flex items-start justify-between gap-3 py-2 ${last?"":"border-b border-slate-50"}"><span class="text-[12px] text-slate-400 shrink-0">${label}</span><span class="text-[12.5px] font-semibold text-slate-800 text-right">${val}</span></div>`; }
function renderCollabNew(){
  if(!CP) cpInit();
  renderShell("collab.html","Tạo dự án phối hợp liên phòng","Thiết lập thông tin cơ bản để bắt đầu phối hợp hiệu quả giữa các phòng ban","");
  cpPaint();
}
function cpPaint(){
  const steps=["Thông tin","Kế hoạch","Xác nhận"];
  const stepTitle=["Thông tin dự án","Kế hoạch","Xác nhận"][CP.step-1];
  const main = CP.step===1?cpStep1():CP.step===2?cpStep2():cpStep3();
  document.getElementById("content").innerHTML = `
  <div class="flex items-start gap-3 mb-5 flex-wrap">
    <div class="flex-1 min-w-[240px]">
      <div class="text-[12px] text-slate-400 mb-1"><a href="collab.html" class="hover:text-${AC}-600">Dự án phối hợp</a> › Tạo dự án mới</div>
      <div class="flex items-center gap-2 flex-wrap"><h2 class="text-[20px] font-extrabold text-slate-900">Tạo dự án phối hợp liên phòng</h2><span class="bg-${AC}-600 text-white text-[11px] font-semibold rounded-full px-2.5 py-1">Bước ${CP.step}/3: ${stepTitle}</span></div>
    </div>
    <div class="flex items-center gap-1.5 text-[12px]">${steps.map((s,i)=>{const n=i+1,on=n===CP.step,done=n<CP.step;return `${i?`<span class="w-6 sm:w-10 h-px ${done?`bg-${AC}-400`:"bg-slate-200"}"></span>`:""}<span class="flex items-center gap-1.5"><span class="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold ${on?`bg-${AC}-600 text-white`:done?`bg-${AC}-100 text-${AC}-700`:"bg-slate-100 text-slate-400"}">${n}</span><span class="${on?"font-semibold text-slate-800":"text-slate-400"} hidden sm:inline">${s}</span></span>`;}).join("")}</div>
  </div>
  <div class="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5 items-start">
    <div class="min-w-0 space-y-4">${main}</div>
    <div class="space-y-4">${cpSummary()}${cpAITips()}</div>
  </div>
  <div class="sticky bottom-0 -mx-4 sm:-mx-6 mt-5 bg-white border-t border-slate-200 px-4 sm:px-6 py-3 flex items-center gap-2 flex-wrap">
    <button onclick="cpCancel()" class="border border-slate-200 text-slate-600 font-semibold text-[13px] px-5 py-2.5 rounded-lg">Hủy bỏ</button>
    <div class="ml-auto flex gap-2">
      ${CP.step>1?`<button onclick="cpGo(${CP.step-1})" class="border border-slate-200 text-slate-600 font-semibold text-[13px] px-5 py-2.5 rounded-lg">Quay lại</button>`:""}
      <button onclick="cpSaveDraft()" class="border border-slate-200 text-slate-600 font-semibold text-[13px] px-5 py-2.5 rounded-lg">Lưu nháp</button>
      ${CP.step<3?`<button onclick="cpNext()" class="bg-${AC}-600 text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg">Tiếp tục: ${steps[CP.step]} →</button>`:`<button onclick="cpSubmit()" class="bg-${AC}-600 text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg">Tạo dự án</button>`}
    </div>
  </div>`;
}
function cpStep1(){
  const lbl=(t,req)=>`<label class="text-[11.5px] font-semibold text-slate-500 block mb-1">${req?`<span class="text-red-500">*</span> `:""}${t}</label>`;
  return `
  <section class="bg-white border border-slate-200 rounded-xl p-5">
    <h3 class="font-bold text-[15px] mb-4">1. Thông tin dự án</h3>
    <div class="grid md:grid-cols-2 gap-x-6 gap-y-4">
      <div>${lbl("Tên dự án",true)}<input id="cpName" maxlength="100" value="${CP.name}" oninput="cpSync()" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]"><div class="text-right text-[10.5px] text-slate-400 mt-0.5"><span id="cntName">${CP.name.length}</span>/100</div></div>
      <div>${lbl("Mức độ ưu tiên",true)}<div class="grid grid-cols-3 gap-2">${["Cao","Trung bình","Thấp"].map(p=>`<button onclick="cpSetPrio('${p}')" class="border-2 rounded-lg py-2.5 text-[12.5px] font-semibold ${CP.prio===p?`border-${AC}-500 bg-${AC}-50 text-${AC}-700`:"border-slate-200 text-slate-600 bg-white"}">${p}</button>`).join("")}</div></div>
      <div>${lbl("Mục tiêu chung",true)}<textarea id="cpGoal" maxlength="500" rows="3" oninput="cpSync()" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]">${CP.goal}</textarea><div class="text-right text-[10.5px] text-slate-400 mt-0.5"><span id="cntGoal">${CP.goal.length}</span>/500</div></div>
      <div class="space-y-4">
        <div>${lbl("Hạn hoàn thành",true)}<input id="cpDue" type="date" value="${CP.due}" onchange="cpSync()" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]"></div>
        <div>${lbl("Ngân sách (tùy chọn)")}<input id="cpBudget" value="${CP.budget}" oninput="cpSync()" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]"></div>
      </div>
    </div>
  </section>

  <section class="bg-white border border-slate-200 rounded-xl p-5">
    <h3 class="font-bold text-[15px] mb-4">2. Phòng ban & người phối hợp</h3>
    <label class="text-[11.5px] font-semibold text-slate-500 block mb-2"><span class="text-red-500">*</span> Phòng ban phối hợp</label>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
      ${DEPTS.map(d=>{const on=CP.depts.includes(d);return `<button onclick="cpToggleDept('${d}')" class="flex items-center justify-between gap-2 border-2 rounded-xl px-3 py-3 ${on?`border-${AC}-400 bg-${AC}-50`:"border-slate-200 bg-white"}"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${DEPT_CLS[d]}">${d}</span><span class="w-4 h-4 rounded ${on?`bg-${AC}-600 border-2 border-${AC}-600`:"border border-slate-300 bg-white"}"></span></button>`;}).join("")}
    </div>
    <div class="text-[12px] font-semibold text-slate-600 mb-2">Danh sách người phối hợp cụ thể</div>
    <div class="overflow-x-auto"><table class="w-full text-[12px]"><thead><tr class="text-left text-[10.5px] uppercase text-slate-400 border-b border-slate-100"><th class="py-2 pr-2">Phòng ban</th><th class="px-2">Người phối hợp *</th><th class="px-2">Vai trò</th><th class="px-2">Trách nhiệm chính</th><th class="px-2">Liên hệ</th><th></th></tr></thead><tbody id="cpPeopleBody">${cpPeopleRows()}</tbody></table></div>
    <button onclick="cpAddPerson()" class="w-full mt-3 border border-dashed border-${AC}-300 text-${AC}-700 text-[12.5px] font-semibold rounded-lg py-2.5 hover:bg-${AC}-50">+ Thêm người phối hợp</button>
  </section>

  <section class="bg-white border border-slate-200 rounded-xl p-5">
    <h3 class="font-bold text-[15px] mb-4">3. Mô tả & phạm vi phối hợp</h3>
    <div class="grid md:grid-cols-2 gap-6">
      <div>${lbl("Mô tả dự án")}<textarea id="cpDesc" maxlength="1000" rows="4" oninput="cpSync()" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[12.5px]">${CP.desc}</textarea><div class="text-right text-[10.5px] text-slate-400 mt-0.5"><span id="cntDesc">${CP.desc.length}</span>/1000</div></div>
      <div>${lbl("Phạm vi phối hợp (nhiệm vụ chính giữa các phòng ban)")}<div class="border border-slate-200 rounded-lg p-3 text-[12.5px] space-y-1.5">${CP.scope.map(s=>`<div class="flex items-start gap-2"><span class="w-1.5 h-1.5 rounded-full bg-${AC}-500 mt-1.5 shrink-0"></span><span>${s}</span></div>`).join("")}</div></div>
    </div>
    <div class="mt-4 border-2 border-dashed border-slate-200 rounded-xl p-6 text-center"><div class="text-[13px] font-semibold text-${AC}-700">Kéo thả tài liệu hoặc bấm để tải lên</div><div class="text-[11px] text-slate-400 mt-1">Hỗ trợ: PDF, DOCX, XLSX, PPTX (tối đa 20MB)</div></div>
  </section>`;
}
function cpPeopleRows(){
  return CP.people.map((p,i)=>`<tr class="border-b border-slate-50 last:border-0 align-top">
    <td class="py-2 pr-2">${deptChip(p.dept)}</td>
    <td class="px-2"><select onchange="CP.people[${i}].who=this.value;cpSyncSummary()" class="w-full border border-slate-200 rounded-lg px-2 py-1.5 bg-white min-w-[140px]">${USERS.map(u=>`<option ${u.name===p.who?"selected":""}>${u.name}</option>`).join("")}</select></td>
    <td class="px-2"><select onchange="CP.people[${i}].role=this.value" class="w-full border border-slate-200 rounded-lg px-2 py-1.5 bg-white min-w-[120px]">${CP_ROLES.map(r=>`<option ${r===p.role?"selected":""}>${r}</option>`).join("")}</select></td>
    <td class="px-2"><input value="${p.resp}" oninput="CP.people[${i}].resp=this.value" class="w-full border border-slate-200 rounded-lg px-2 py-1.5 min-w-[160px]"></td>
    <td class="px-2"><input value="${p.contact}" oninput="CP.people[${i}].contact=this.value" class="w-full border border-slate-200 rounded-lg px-2 py-1.5 min-w-[150px]"></td>
    <td class="px-1 text-center"><button onclick="cpDelPerson(${i})" class="text-slate-400 hover:text-red-500 text-[16px] leading-none">×</button></td>
  </tr>`).join("");
}
function cpStep2(){
  return `<section class="bg-white border border-slate-200 rounded-xl p-5"><h3 class="font-bold text-[15px] mb-4">Kế hoạch & mốc thời gian</h3>
    <div class="space-y-2">${CP.milestones.map((m,i)=>`<div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-${AC}-100 text-${AC}-700 grid place-items-center text-[11px] font-bold shrink-0">${i+1}</span><input value="${m.name}" oninput="CP.milestones[${i}].name=this.value" class="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-[12.5px]"><input type="date" value="${m.date}" onchange="CP.milestones[${i}].date=this.value" class="border border-slate-200 rounded-lg px-2 py-2 text-[12.5px]"><button onclick="cpDelMs(${i})" class="text-slate-400 hover:text-red-500 text-[16px]">×</button></div>`).join("")}</div>
    <button onclick="cpAddMs()" class="w-full mt-3 border border-dashed border-${AC}-300 text-${AC}-700 text-[12.5px] font-semibold rounded-lg py-2.5 hover:bg-${AC}-50">+ Thêm mốc thời gian</button>
  </section>
  <section class="bg-white border border-slate-200 rounded-xl p-5"><h3 class="font-bold text-[15px] mb-3">Cơ chế phối hợp</h3>
    <div class="grid sm:grid-cols-2 gap-3 text-[12.5px]">
      ${[["Báo cáo tiến độ hằng tuần",true],["Họp giao ban liên phòng",true],["Kênh chat chung của dự án",false],["Nhắc hạn tự động qua AI",true]].map(([l,on])=>`<label class="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5"><input type="checkbox" ${on?"checked":""} class="accent-${AC}-600 w-4 h-4"> ${l}</label>`).join("")}
    </div>
  </section>`;
}
function cpStep3(){
  return `<section class="bg-white border border-slate-200 rounded-xl p-5"><h3 class="font-bold text-[15px] mb-4">Xác nhận & tạo dự án</h3>
    <div>
      ${cpRow("Tên dự án",CP.name||"—")}
      ${cpRow("Mục tiêu",CP.goal||"—")}
      ${cpRow("Phòng ban phối hợp",CP.depts.map(deptChip).join(" "))}
      ${cpRow("Người phối hợp",CP.people.map(p=>`${p.who.split(" ").pop()} (${p.dept})`).join(", ")||"—")}
      ${cpRow("Mốc thời gian",CP.milestones.length+" mốc")}
      ${cpRow("Hạn hoàn thành",fmtD(CP.due))}
      ${cpRow("Mức độ ưu tiên",CP.prio)}
      ${cpRow("Ngân sách",CP.budget||"—",true)}
    </div>
    <div class="mt-4 bg-${AC}-50 border border-${AC}-100 rounded-lg p-3 text-[12.5px] text-slate-600">Khi bấm <b>Tạo dự án</b>, hệ thống sẽ tạo dự án phối hợp, phân công ${CP.people.length} đầu việc và gửi thông báo tới các phòng ban tham gia.</div>
  </section>`;
}
function cpSummary(){
  const prioColor = CP.prio==="Cao"?"text-red-600":CP.prio==="Trung bình"?"text-amber-600":"text-slate-500";
  const people=CP.people.map(p=>p.who);
  const avs=people.slice(0,4).map(n=>avatar(n)).join("");
  const more=people.length>4?`<span class="text-[11px] text-slate-400 ml-1 self-center">+${people.length-4}</span>`:"";
  return `<div id="cpSummary" class="bg-white border border-slate-200 rounded-xl p-5">
    <h3 class="font-bold text-[15px] mb-3">Tóm tắt dự án</h3>
    <div class="h-20 rounded-lg mb-3" style="background:linear-gradient(135deg,#E7F0FF,#CFE0FF)"></div>
    ${cpRow("Tên dự án",CP.name||"—")}
    ${cpRow("Mục tiêu",CP.goal||"—")}
    ${cpRow("Chủ trì",deptChip(CP.lead))}
    ${cpRow("Phòng ban phối hợp",CP.depts.map(deptChip).join(" ")||"—")}
    ${cpRow("Người phối hợp",`<span class="inline-flex items-center">${avs}${more}</span>`)}
    ${cpRow("Hạn hoàn thành",fmtD(CP.due))}
    ${cpRow("Mức độ ưu tiên",`<b class="${prioColor}">${CP.prio}</b>`)}
    ${cpRow("Ngân sách",CP.budget||"—",true)}
  </div>`;
}
function cpAITips(){
  const tips=["Phòng ban CRM nên bổ sung nhiệm vụ lead scoring để tối ưu chuyển đổi.","Đặt mốc thời gian trung gian vào 15/06/2026 để theo dõi tiến độ.","Nên thiết lập báo cáo tuần để đảm bảo phối hợp nhịp nhàng giữa các phòng ban."];
  return `<div class="bg-${AC}-50 border border-${AC}-100 rounded-xl p-4">
    <div class="flex items-center gap-2 mb-2"><span class="w-7 h-7 rounded-lg bg-${AC}-600 text-white grid place-items-center text-[11px] font-bold">AI</span><b class="text-[13.5px] text-${AC}-700">Gợi ý từ AI Assistant</b></div>
    <ul class="space-y-2 text-[12.5px] text-slate-600">${tips.map(t=>`<li class="flex items-start gap-2"><span class="w-1.5 h-1.5 rounded-full bg-${AC}-500 mt-1.5 shrink-0"></span><span>${t}</span></li>`).join("")}</ul>
    <button onclick="alert('Xem thêm gợi ý (demo)')" class="w-full mt-3 border border-${AC}-200 text-${AC}-700 text-[12.5px] font-semibold rounded-lg py-2 hover:bg-${AC}-100">Xem thêm gợi ý</button>
  </div>`;
}
function cpSync(){
  CP.name=cpVal("cpName",CP.name); CP.goal=cpVal("cpGoal",CP.goal); CP.due=cpVal("cpDue",CP.due); CP.budget=cpVal("cpBudget",CP.budget); CP.desc=cpVal("cpDesc",CP.desc);
  cpSetTxt("cntName",CP.name.length); cpSetTxt("cntGoal",CP.goal.length); cpSetTxt("cntDesc",CP.desc.length);
  cpSyncSummary();
}
function cpSyncSummary(){ const e=document.getElementById("cpSummary"); if(e) e.outerHTML=cpSummary(); }
function cpSetPrio(p){ CP.prio=p; cpGo(CP.step); }
function cpToggleDept(d){ const i=CP.depts.indexOf(d); if(i>=0)CP.depts.splice(i,1); else CP.depts.push(d); cpGo(CP.step); }
function cpGo(n){ CP.step=n; cpPaint(); }
function cpNext(){ if(CP.step===1){ if(!CP.name.trim()) return alert("Vui lòng nhập tên dự án."); if(!CP.depts.length) return alert("Chọn ít nhất một phòng ban phối hợp."); } cpGo(CP.step+1); window.scrollTo(0,0); }
function cpAddPerson(){ CP.people.push({ dept:CP.depts[0]||"ADS", who:USERS[0].name, role:CP_ROLES[0], resp:"", contact:"" }); document.getElementById("cpPeopleBody").innerHTML=cpPeopleRows(); cpSyncSummary(); }
function cpDelPerson(i){ CP.people.splice(i,1); document.getElementById("cpPeopleBody").innerHTML=cpPeopleRows(); cpSyncSummary(); }
function cpAddMs(){ CP.milestones.push({ name:"Mốc mới", date:CP.due }); cpGo(2); }
function cpDelMs(i){ CP.milestones.splice(i,1); cpGo(2); }
function cpCancel(){ if(confirm("Hủy tạo dự án phối hợp? Dữ liệu chưa lưu sẽ mất.")){ CP=null; location.hash="#collab.html"; } }
function cpSaveDraft(){ alert("Đã lưu nháp dự án phối hợp. (demo)"); }
function cpSubmit(){
  if(!CP.name.trim()) return alert("Vui lòng nhập tên dự án.");
  const set=new Set([CP.lead,...CP.depts]);
  COLLAB_PROJECTS.unshift({ id:Date.now(), name:CP.name, lead:CP.lead, depts:[...set], owner:(CP.people[0]?CP.people[0].who:ME.name), goal:CP.goal||"(chưa nêu mục tiêu)", progress:0, status:"running", due:CP.due||"2026-07-01", members:CP.people.map(p=>p.who), tasks:CP.people.length });
  alert(`Đã tạo dự án phối hợp "${CP.name}" · phối hợp: ${[...set].join(", ")}. Đã thông báo các phòng ban tham gia. (demo)`);
  CP=null; location.hash="#collab.html";
}

/* =====================================================================
 *  CHI TIẾT DỰ ÁN PHỐI HỢP — Cập nhật / Trao đổi + reaction kiểu Messenger
 * ===================================================================== */
const REACT_EMOJIS = ["👍","❤️","😆","😮","😢","😡","🎉"];
let REACTS = {};
function ensureReact(o){ if(!REACTS[o.id]) REACTS[o.id] = { mine:null, counts:Object.assign({}, o.reacts||{}) }; }
function reactBar(id){
  const r = REACTS[id] || (REACTS[id]={mine:null,counts:{}});
  const entries = Object.entries(r.counts).filter(([e,c])=>c>0);
  const total = entries.reduce((s,[,c])=>s+c,0);
  const summary = entries.length ? `<span class="flex items-center gap-0.5 bg-slate-100 rounded-full pl-1.5 pr-2 py-0.5 text-[11px]">${entries.slice(0,3).map(([e])=>`<span>${e}</span>`).join("")}<b class="text-slate-500 ml-0.5">${total}</b></span>` : "";
  const liked = !!r.mine;
  const lbl = liked ? (r.mine==="👍"?"Thích":"Đã bày tỏ") : "Thích";
  return `<div id="rb-${id}" class="flex items-center gap-1.5 mt-2.5">
    <div class="relative group">
      <button onclick="setReact('${id}','${r.mine||"👍"}')" class="flex items-center gap-1.5 text-[12px] font-semibold ${liked?`text-${AC}-600`:"text-slate-500"} hover:bg-slate-100 rounded-md px-2 py-1"><i class="fa-${liked?"solid":"regular"} fa-thumbs-up"></i> ${lbl}</button>
      <div class="hidden group-hover:flex absolute bottom-full left-0 mb-1 bg-white border border-slate-200 shadow-lg rounded-full px-2 py-1 gap-1 z-20">${REACT_EMOJIS.map(e=>`<button onclick="setReact('${id}','${e}')" class="text-[18px] leading-none hover:scale-125 transition">${e}</button>`).join("")}</div>
    </div>
    <button onclick="alert('Bình luận (demo)')" class="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 hover:bg-slate-100 rounded-md px-2 py-1"><i class="fa-regular fa-comment"></i> Bình luận</button>
    ${summary}
  </div>`;
}
function setReact(id, emoji){
  const r = REACTS[id] || (REACTS[id]={mine:null,counts:{}});
  if(r.mine===emoji){ r.counts[emoji]=Math.max(0,(r.counts[emoji]||1)-1); r.mine=null; }
  else { if(r.mine) r.counts[r.mine]=Math.max(0,(r.counts[r.mine]||1)-1); r.counts[emoji]=(r.counts[emoji]||0)+1; r.mine=emoji; }
  const el=document.getElementById("rb-"+id); if(el) el.outerHTML=reactBar(id);
}
let CD_UPDATES = [
  { id:"u1", who:"Linh Trần",  dept:"SEO", role:"Leader SEO",     time:"09:30 · 08/06/2026", text:"Đã hoàn thành nghiên cứu từ khóa và outline cho 10 bài viết Landing page. Đang triển khai viết nội dung và tối ưu Onpage.", tasks:["SEO-12","SEO-15","SEO-18"], files:[{n:"Outline LP.xlsx",sz:"12 KB",t:"excel"},{n:"Keyword List.xlsx",sz:"9 KB",t:"excel"}], more:2, reacts:{"👍":3} },
  { id:"u2", who:"Nam Phạm",   dept:"ADS", role:"Leader Ads",      time:"17:15 · 07/06/2026", tag:["Cần hỗ trợ","amber"], text:"Đã setup xong chiến dịch hiệu suất trên Meta. Cần CDP cung cấp audience học sinh 2k9 khu vực Hà Nam để tối ưu chuyển đổi.", tasks:["ADS-07","ADS-08"], files:[], reacts:{"👍":2} },
  { id:"u3", who:"Minh Hoàng", dept:"CRM", role:"Specialist CRM",  time:"11:20 · 07/06/2026", tag:["Cập nhật tiến độ","emerald"], text:"Đã hoàn thành form đăng ký và tích hợp lưu lead về hệ thống. Đã test luồng A/B.", tasks:[], files:[], reacts:{} },
];
let CD_TALK = [
  { id:"t1", who:"Linh Trần",  dept:"SEO", role:"SEO Leader",     time:"09:30 · 08/06/2026", text:"Đã hoàn thành nghiên cứu từ khóa và outline cho 10 bài viết Landing page. Đang triển khai viết nội dung và tối ưu Onpage.", files:[{n:"Keyword_List_SEO.xlsx",sz:"9 KB",t:"excel"}], reacts:{"👍":3} },
  { id:"t2", who:"Nam Phạm",   dept:"ADS", role:"ADS Leader",     time:"10:15 · 08/06/2026", text:"Đã setup xong chiến dịch hiệu suất trên Meta cho khu vực Hà Nam. CDP vui lòng hỗ trợ cấp audience học sinh 2k9 để tối ưu chuyển đổi.", files:[{n:"Media_Plan_Ads.pdf",sz:"1.2 MB",t:"pdf"}], reacts:{"👍":2} },
  { id:"t3", who:"Minh Hoàng", dept:"CRM", role:"CRM Specialist", time:"10:42 · 08/06/2026", text:"Đã chuẩn bị form đăng ký và tích hợp lưu lead về hệ thống. SEO và ADS vui lòng thống nhất UTM để đồng bộ tracking.", files:[{n:"Lead_Form_v2.xlsx",sz:"15 KB",t:"excel"}], reacts:{"👍":1} },
  { id:"t4", who:"Huy Lê",     dept:"CDP", role:"CDP Specialist", time:"11:05 · 08/06/2026", text:"Đã tạo audience học sinh 2k9 khu vực Hà Nam theo yêu cầu. Audience ID: 2389472398", files:[], reacts:{"👍":2,"🎉":1} },
];
const myDept = ()=> Object.keys(GROUPS).find(g=>GROUPS[g].includes(ME.name)) || "ADS";
function cdFile(f){ const ic=f.t==="pdf"?"fa-file-pdf text-red-500":f.t==="excel"?"fa-file-excel text-emerald-600":f.t==="word"?"fa-file-word text-blue-600":"fa-file-lines text-slate-500"; return `<div class="flex items-center gap-2 border border-slate-200 rounded-lg px-2.5 py-2 bg-white"><i class="fa-solid ${ic} text-[18px]"></i><div class="min-w-0"><div class="text-[12px] font-semibold text-slate-700 truncate">${f.n}</div><div class="text-[10.5px] text-slate-400">${f.sz}</div></div></div>`; }
function cdUpdateCard(u){
  ensureReact(u);
  const tag = u.tag?`<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-${u.tag[1]}-100 text-${u.tag[1]}-700">${u.tag[0]}</span>`:"";
  return `<div class="py-4 border-b border-slate-100 last:border-0">
    <div class="flex items-start gap-3">${avatar(u.who)}
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap"><b class="text-[13px]">${u.who}</b>${deptChip(u.dept)}<span class="text-[11px] text-slate-400">${u.role}</span><button onclick="alert('Tùy chọn (demo)')" class="ml-auto text-slate-300 hover:text-slate-500"><i class="fa-solid fa-ellipsis"></i></button></div>
        <div class="text-[10.5px] text-slate-400 mb-1.5 flex items-center gap-2">Cập nhật lúc ${u.time} ${tag}</div>
        <p class="text-[12.5px] text-slate-700 leading-6">${u.text}</p>
        ${u.tasks.length?`<div class="mt-2"><span class="text-[11px] text-slate-400">Task liên quan (${u.tasks.length})</span><div class="flex flex-wrap gap-1.5 mt-1">${u.tasks.map(t=>`<span class="px-2 py-0.5 rounded text-[10.5px] font-semibold bg-emerald-50 text-emerald-700">${t}</span>`).join("")}</div></div>`:""}
        ${u.files.length?`<div class="flex flex-wrap gap-2 mt-2">${u.files.map(cdFile).join("")}${u.more?`<div class="grid place-items-center px-4 border border-slate-200 rounded-lg text-[12px] font-semibold text-slate-500 bg-slate-50">+${u.more}</div>`:""}</div>`:""}
        ${reactBar(u.id)}
      </div>
    </div>
  </div>`;
}
function cdTalkMsg(m){
  ensureReact(m);
  return `<div class="py-4 border-b border-slate-100 last:border-0">
    <div class="flex items-start gap-3">${avatar(m.who)}
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap"><b class="text-[13px]">${m.who}</b>${deptChip(m.dept)}<span class="text-[11px] text-slate-400">${m.time}</span></div>
        <p class="text-[12.5px] text-slate-700 leading-6 mt-0.5">${m.text}</p>
        ${m.files.length?`<div class="flex flex-wrap gap-2 mt-2">${m.files.map(cdFile).join("")}</div>`:""}
        ${reactBar(m.id)}
      </div>
    </div>
  </div>`;
}
function cdDeptDonut(){
  const d=[["ADS",45,"#F97316"],["SEO",25,"#22C55E"],["CRM",20,"#3B82F6"],["CDP",10,"#8B5CF6"]];
  let acc=0; const stops=d.map(([k,v,c])=>{const a=acc;acc+=v;return `${c} ${a}% ${acc}%`;}).join(",");
  return `<div class="flex items-center gap-4">
    <div class="relative w-[110px] h-[110px] shrink-0"><div class="w-full h-full rounded-full" style="background:conic-gradient(${stops})"></div><div class="absolute inset-[24%] rounded-full bg-white"></div></div>
    <div class="space-y-1.5 text-[12px]">${d.map(([k,v,c])=>`<div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full" style="background:${c}"></span><span class="text-slate-600 w-9">${k}</span><b>${v}%</b></div>`).join("")}</div>
  </div>`;
}
function cdProgress(p){
  return `<div class="bg-white border border-slate-200 rounded-xl p-5">
    <div class="grid lg:grid-cols-[1fr_300px] gap-6">
      <div>
        <h3 class="font-bold text-[15px] mb-3">Tiến độ tổng quan</h3>
        <div class="flex items-center gap-3 mb-4"><div class="flex-1">${progressBar(p.progress,`bg-${AC}-500`)}</div><b class="text-[15px]">${p.progress}%</b></div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div><div class="text-[20px] font-extrabold">12 / 18</div><div class="text-[11px] text-slate-400">Task đã hoàn thành</div></div>
          <div><div class="text-[20px] font-extrabold">4</div><div class="text-[11px] text-slate-400">Đang thực hiện</div></div>
          <div><div class="text-[20px] font-extrabold">2</div><div class="text-[11px] text-slate-400">Chưa bắt đầu</div></div>
          <div><div class="text-[20px] font-extrabold text-red-600">${fmtD(p.due)}</div><div class="text-[11px] text-slate-400">Hạn hoàn thành · còn 22 ngày</div></div>
        </div>
      </div>
      <div><h4 class="font-semibold text-[13px] mb-2">Theo phòng ban</h4>${cdDeptDonut()}</div>
    </div>
  </div>`;
}
function cdComposer(){
  return `<div class="bg-white border border-slate-200 rounded-xl p-5">
    <h3 class="font-bold text-[15px] mb-3">Cập nhật tiến độ</h3>
    <textarea id="cdUpInput" rows="3" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px]" placeholder="Chia sẻ tiến độ, kết quả đạt được, khó khăn hoặc hỗ trợ cần thiết…"></textarea>
    <div class="flex items-center gap-2 flex-wrap mt-2">
      <button onclick="alert('Đính kèm (demo)')" class="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600 border border-slate-200 rounded-lg px-3 py-2"><i class="fa-solid fa-paperclip"></i> Đính kèm</button>
      <button onclick="alert('Nhắc người (demo)')" class="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600 border border-slate-200 rounded-lg px-3 py-2"><i class="fa-solid fa-at"></i> Nhắc người</button>
      <button onclick="alert('Chọn task (demo)')" class="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600 border border-slate-200 rounded-lg px-3 py-2"><i class="fa-solid fa-list-check"></i> Chọn task liên quan</button>
      <button onclick="cdPostUpdate()" class="ml-auto bg-${AC}-600 text-white text-[13px] font-semibold px-5 py-2 rounded-lg">Gửi cập nhật</button>
    </div>
  </div>`;
}
function cdPostUpdate(){
  const el=document.getElementById("cdUpInput"); const v=(el&&el.value||"").trim(); if(!v) return alert("Nhập nội dung cập nhật.");
  CD_UPDATES.unshift({ id:"u"+Date.now(), who:ME.name, dept:myDept(), role:ME.title||"Thành viên", time:"vừa xong", text:v, tasks:[], files:[], reacts:{} });
  el.value=""; const h=document.getElementById("cdHistory"); if(h)h.innerHTML=CD_UPDATES.map(cdUpdateCard).join("");
}
function cdTalkSend(){
  const el=document.getElementById("cdTalkInput"); const v=(el&&el.value||"").trim(); if(!v) return;
  CD_TALK.push({ id:"t"+Date.now(), who:ME.name, dept:myDept(), role:ME.title||"Thành viên", time:"vừa xong", text:v, files:[], reacts:{} });
  el.value=""; const b=document.getElementById("cdTalkBody"); if(b){ b.innerHTML=CD_TALK.map(cdTalkMsg).join(""); b.scrollTop=b.scrollHeight; }
}
function cdSidebar(p){
  const people=[["Linh Trần","SEO Leader","SEO"],["Nam Phạm","ADS Leader","ADS"],["Minh Hoàng","CRM Specialist","CRM"],["Huy Lê","CDP Specialist","CDP"]];
  return `<div class="space-y-4">
    <div class="bg-white border border-slate-200 rounded-xl p-5">
      <h3 class="font-bold text-[15px] mb-3">Thông tin dự án</h3>
      <div class="text-[12.5px] space-y-2.5">
        <div class="flex justify-between gap-3"><span class="text-slate-400">Mục tiêu</span><b class="text-right">${p.goal}</b></div>
        <div class="flex justify-between gap-3"><span class="text-slate-400">Chủ trì</span><span>${deptChip(p.lead)} ${p.owner}</span></div>
        <div class="flex justify-between gap-3"><span class="text-slate-400">Hạn hoàn thành</span><b>${fmtD(p.due)}</b></div>
        <div class="flex justify-between gap-3"><span class="text-slate-400">Trạng thái</span><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${CSTATUS[p.status][1]}">${CSTATUS[p.status][0]}</span></div>
        <div class="flex justify-between items-center gap-3"><span class="text-slate-400">Tiến độ</span><span class="flex items-center gap-2 flex-1 max-w-[140px]"><span class="flex-1">${progressBar(p.progress,`bg-${AC}-500`)}</span><b>${p.progress}%</b></span></div>
        <div><span class="text-slate-400">Phòng ban liên quan</span><div class="flex flex-wrap gap-1 mt-1">${p.depts.map(deptChip).join(" ")}</div></div>
        <div><span class="text-slate-400">Mô tả</span><p class="text-slate-600 mt-0.5">${p.name} với sự phối hợp từ ${p.depts.length} phòng ban.</p><button onclick="alert('Xem thêm (demo)')" class="text-${AC}-600 font-semibold mt-0.5">Xem thêm</button></div>
      </div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-5">
      <div class="flex items-center mb-3"><h3 class="font-bold text-[15px]">Người phối hợp chính</h3><button onclick="alert('Xem tất cả (demo)')" class="ml-auto text-[12px] font-semibold text-${AC}-600">Xem tất cả (12)</button></div>
      <div class="space-y-2.5">${people.map(([n,r,d])=>`<div class="flex items-center gap-2.5">${avatar(n)}<div class="flex-1 min-w-0"><div class="text-[12.5px] font-semibold truncate">${n}</div><div class="text-[10.5px] text-slate-400">${r}</div></div>${deptChip(d)}<button onclick="toggleChat&&toggleChat()" class="w-7 h-7 grid place-items-center text-slate-400 hover:text-${AC}-600"><i class="fa-regular fa-comment"></i></button><button onclick="alert('Email (demo)')" class="w-7 h-7 grid place-items-center text-slate-400 hover:text-${AC}-600"><i class="fa-regular fa-envelope"></i></button></div>`).join("")}</div>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-5">
      <h3 class="font-bold text-[15px] mb-3">Thao tác nhanh</h3>
      <div class="space-y-1">
        ${[["fa-plus","Tạo task mới"],["fa-hand-holding-hand","Gửi yêu cầu hỗ trợ"],["fa-download","Tải báo cáo tiến độ"],["fa-share-nodes","Chia sẻ dự án"]].map(([ic,l])=>`<button onclick="alert('${l} (demo)')" class="w-full flex items-center gap-2.5 text-[12.5px] text-slate-700 hover:bg-slate-50 rounded-lg px-2 py-2"><i class="fa-solid ${ic} text-${AC}-600 w-4 text-center"></i> ${l}</button>`).join("")}
      </div>
    </div>
  </div>`;
}
function renderCollabDetail(query){
  const q=new URLSearchParams(query||""); const id=Number(q.get("id"))||1; const tab=q.get("tab")||"overview";
  const p=COLLAB_PROJECTS.find(x=>x.id===id)||COLLAB_PROJECTS[0];
  renderShell("collab.html","Chi tiết dự án phối hợp","", "");
  const header=`<div class="mb-5">
    <div class="text-[12px] text-slate-400 mb-1"><a href="collab.html" class="hover:text-${AC}-600">Dự án phối hợp</a> › Chi tiết dự án</div>
    <div class="flex items-start gap-3 flex-wrap">
      <div class="flex-1 min-w-[260px]">
        <div class="flex items-center gap-2 flex-wrap"><h2 class="text-[20px] font-extrabold text-slate-900">${p.name}</h2><span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${CSTATUS[p.status][1]}">${CSTATUS[p.status][0]}</span></div>
        <div class="text-[12px] text-slate-500 mt-1 flex items-center gap-1.5 flex-wrap">Mã dự án: <b>PRJ-2026-${p.lead}-00${p.id}</b> · Chủ trì: ${deptChip(p.lead)} ${p.owner} · Hạn: ${fmtD(p.due)}</div>
      </div>
      <div class="flex gap-2">
        <a href="collab-detail.html?id=${id}&tab=talk" class="flex items-center gap-1.5 text-[12.5px] font-semibold text-slate-600 border border-slate-200 rounded-lg px-3.5 py-2"><i class="fa-regular fa-comment"></i> Trao đổi</a>
        <a href="collab-detail.html?id=${id}&tab=updates" class="flex items-center gap-1.5 text-[12.5px] font-semibold text-slate-600 border border-slate-200 rounded-lg px-3.5 py-2"><i class="fa-solid fa-circle-plus"></i> Cập nhật</a>
        <button onclick="alert('Chỉnh sửa (demo)')" class="flex items-center gap-1.5 text-[12.5px] font-semibold text-slate-600 border border-slate-200 rounded-lg px-3.5 py-2"><i class="fa-solid fa-pen"></i> Chỉnh sửa</button>
      </div>
    </div>
  </div>`;
  let body="";
  if(tab==="talk"){
    body=`<div class="bg-white border border-slate-200 rounded-xl flex flex-col" style="max-width:860px">
      <div class="px-5 py-3 border-b border-slate-100 flex items-center gap-2"><div><div class="font-bold text-[14px]"># Tổng chung</div><div class="text-[11px] text-slate-400">Trao đổi chung giữa các phòng ban về dự án</div></div><div class="ml-auto flex -space-x-1.5">${["Linh Trần","Nam Phạm","Minh Hoàng","Huy Lê"].map(avatar).join("")}<span class="w-7 h-7 grid place-items-center rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold ring-2 ring-white">+2</span></div><button onclick="alert('Tùy chọn (demo)')" class="text-slate-300 hover:text-slate-500 ml-1"><i class="fa-solid fa-ellipsis"></i></button></div>
      <div id="cdTalkBody" class="px-5 py-2 overflow-y-auto" style="max-height:60vh">${CD_TALK.map(cdTalkMsg).join("")}<div class="text-center text-[11px] text-slate-400 py-2">— 09/06/2026 —</div></div>
      <div class="p-3 border-t border-slate-100 flex items-center gap-2">
        <button onclick="alert('Đính kèm (demo)')" class="text-slate-400 hover:text-${AC}-600 px-1"><i class="fa-solid fa-paperclip"></i></button>
        <input id="cdTalkInput" onkeydown="if(event.key==='Enter')cdTalkSend()" class="flex-1 border border-slate-200 rounded-full px-4 py-2 text-[12.5px] focus:outline-none" placeholder="Nhập nội dung trao đổi…">
        <button onclick="cdTalkSend()" class="w-9 h-9 rounded-full bg-${AC}-600 text-white"><i class="fa-solid fa-paper-plane text-[12px]"></i></button>
      </div>
    </div>`;
  } else if(tab==="updates" || tab==="overview"){
    const left=`<div class="space-y-4">${cdProgress(p)}${tab==="updates"?cdComposer():""}
      <div class="bg-white border border-slate-200 rounded-xl p-5"><h3 class="font-bold text-[15px] mb-1">Lịch sử cập nhật</h3><div id="cdHistory">${CD_UPDATES.map(cdUpdateCard).join("")}</div></div></div>`;
    body=`<div class="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5 items-start">${left}${cdSidebar(p)}</div>`;
  } else {
    body=`<div class="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5 items-start"><div class="bg-white border border-slate-200 rounded-xl p-10 text-center text-slate-400 text-[13px]">Nội dung mục này — đang phát triển (demo).</div>${cdSidebar(p)}</div>`;
  }
  document.getElementById("content").innerHTML = header + body;
}


/* ===================== PHÂN QUYỀN & NGƯỜI DÙNG ===================== */
let PTAB="matrix";
const PERM_ACTIONS=[["create","Tạo (Create)","Tạo mới task / đơn / nội dung"],["view","Xem (View)","Xem dữ liệu được phân công"],["edit","Chỉnh sửa (Edit)","Sửa nội dung mình phụ trách"],["delete","Xóa (Delete)","Xóa task / dữ liệu"],["approve","Duyệt (Approve)","Phê duyệt task / đơn nghỉ / chi phí"],["reports","Xem báo cáo","Truy cập Báo cáo tự động"],["mdash","Dashboard quản lý","Xem Dashboard team & năng lực"],["admin","Quản trị hệ thống","Quản lý tài khoản, vai trò, cấu hình"]];
const PERM_ROLES=[["member","Member","bg-slate-100 text-slate-600"],["manager","Manager","bg-violet-100 text-violet-700"],["admin","Admin","bg-indigo-100 text-indigo-700"]];
const PERM_MATRIX={member:{create:1,view:1,edit:1,delete:1,approve:0,reports:0,mdash:0,admin:0},manager:{create:1,view:1,edit:1,delete:1,approve:1,reports:1,mdash:1,admin:0},admin:{create:1,view:1,edit:1,delete:1,approve:1,reports:1,mdash:1,admin:1}};
function renderPermissions(){ if(!IS_BOSS){ location.hash="#dashboard.html"; return; } PTAB="matrix"; renderShell("permissions.html","Phân quyền & người dùng","Ma trận quyền theo vai trò · tạo user · tạo role",""); paintPerm(); }
function setPTab(t){ PTAB=t; paintPerm(); }
function togglePerm(r,a){ PERM_MATRIX[r][a]=PERM_MATRIX[r][a]?0:1; paintPerm(); }
function permBadges(role){ return PERM_ACTIONS.filter(([k])=>PERM_MATRIX[role][k]).map(([k,lb])=>`<span class="px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">${lb.split(" (")[0]}</span>`).join(" ")||'<span class="text-slate-400 text-[11px]">— chưa có quyền —</span>'; }
function ptabBtn(k,lb){ return `<button onclick="setPTab('${k}')" class="px-5 py-1.5 rounded-md text-[12.5px] font-semibold ${PTAB===k?`bg-${AC}-600 text-white`:"text-slate-500"}">${lb}</button>`; }
function paintPerm(){
  let body="";
  if(PTAB==="matrix"){
    body=`<div class="bg-white border border-slate-200 rounded-xl p-4 overflow-x-auto">
      <div class="flex items-center mb-3"><h3 class="font-bold text-[14px]">Ma trận phân quyền theo vai trò</h3><span class="ml-auto text-[11.5px] text-slate-400">Bấm vào ô để bật/tắt quyền</span></div>
      <table class="w-full text-[12.5px] min-w-[640px]"><thead><tr class="text-left text-[11px] uppercase text-slate-400 border-b-2 border-slate-100"><th class="py-2 pr-3">Quyền / Hành động</th>${PERM_ROLES.map(([k,lb,cls])=>`<th class="px-3 text-center"><span class="px-2 py-0.5 rounded-full text-[10.5px] font-bold ${cls}">${lb}</span></th>`).join("")}</tr></thead>
      <tbody>${PERM_ACTIONS.map(([a,lb,desc])=>`<tr class="border-b border-slate-50"><td class="py-2.5 pr-3"><div class="font-semibold text-slate-700">${lb}</div><div class="text-[10.5px] text-slate-400">${desc}</div></td>${PERM_ROLES.map(([r])=>{const on=PERM_MATRIX[r][a];return `<td class="px-3 text-center"><button onclick="togglePerm('${r}','${a}')" class="w-7 h-7 rounded-lg grid place-items-center mx-auto ${on?"bg-emerald-100 text-emerald-700 border border-emerald-300":"bg-slate-50 text-slate-300 border border-slate-200"}">${on?"✓":"–"}</button></td>`;}).join("")}</tr>`).join("")}</tbody></table>
      <div class="flex justify-end mt-4"><button onclick="alert('Đã lưu ma trận phân quyền. (demo)')" class="bg-${AC}-600 text-white text-[12.5px] font-semibold px-5 py-2 rounded-lg">Lưu thay đổi</button></div></div>
    <div class="grid md:grid-cols-3 gap-3 mt-4">${PERM_ROLES.map(([r,lb,cls])=>`<div class="bg-white border border-slate-200 rounded-xl p-4"><div class="flex items-center gap-2 mb-2"><span class="px-2 py-0.5 rounded-full text-[10.5px] font-bold ${cls}">${lb}</span><span class="text-[11px] text-slate-400">${PERM_ACTIONS.filter(([k])=>PERM_MATRIX[r][k]).length}/${PERM_ACTIONS.length} quyền</span></div><div class="flex flex-wrap gap-1">${permBadges(r)}</div></div>`).join("")}</div>`;
  } else if(PTAB==="user"){
    body=`<div class="grid md:grid-cols-3 gap-4"><div class="md:col-span-2 bg-white border border-slate-200 rounded-xl p-5">
      <h3 class="font-bold text-[14px] mb-3">Tạo tài khoản người dùng</h3>
      <div class="grid md:grid-cols-2 gap-3 text-[12.5px]">
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Họ và tên <span class="text-red-500">*</span></label><input id="nuName" class="w-full border border-slate-200 rounded-lg px-3 py-2.5"></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Email <span class="text-red-500">*</span></label><input id="nuEmail" class="w-full border border-slate-200 rounded-lg px-3 py-2.5" placeholder="ten@fpt.edu.vn"></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Chức danh</label><input id="nuTitle" class="w-full border border-slate-200 rounded-lg px-3 py-2.5" placeholder="vd: Content Executive"></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Phòng / Nhóm</label><select id="nuGroup" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 bg-white">${Object.keys(GROUPS).map(g=>`<option>${g}</option>`).join("")}</select></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Vai trò <span class="text-red-500">*</span></label><select id="nuRole" onchange="updateUserPreview()" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 bg-white">${PERM_ROLES.map(([k,lb])=>`<option value="${k}">${lb}</option>`).join("")}</select></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Cơ sở</label><select id="nuSite" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 bg-white"><option>FPT School Hà Nam</option><option>FPT School Bắc Ninh</option></select></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Mật khẩu khởi tạo</label><input id="nuPass" type="text" value="Prowork@2026" class="w-full border border-slate-200 rounded-lg px-3 py-2.5"></div>
      </div>
      <div class="flex justify-end gap-2 mt-4"><button onclick="setPTab('matrix')" class="border border-slate-200 text-slate-600 font-semibold text-[12.5px] px-4 py-2 rounded-lg">Hủy</button><button onclick="createUserMock()" class="bg-${AC}-600 text-white font-semibold text-[12.5px] px-5 py-2 rounded-lg">Tạo tài khoản</button></div></div>
    <div class="bg-violet-50 border border-violet-100 rounded-xl p-4"><h4 class="font-bold text-[13px] text-violet-700 mb-2">Quyền theo vai trò</h4><p class="text-[11.5px] text-slate-500 mb-2">Tài khoản sẽ được cấp các quyền sau (theo ma trận):</p><div id="userPermPreview" class="flex flex-wrap gap-1">${permBadges("member")}</div></div></div>`;
  } else {
    body=`<div class="grid md:grid-cols-3 gap-4"><div class="md:col-span-2 bg-white border border-slate-200 rounded-xl p-5">
      <h3 class="font-bold text-[14px] mb-3">Tạo vai trò (Role) mới</h3>
      <div class="grid md:grid-cols-2 gap-3 text-[12.5px] mb-3">
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Tên vai trò <span class="text-red-500">*</span></label><input id="nrName" class="w-full border border-slate-200 rounded-lg px-3 py-2.5" placeholder="vd: Team Leader"></div>
        <div><label class="text-[11px] font-semibold text-slate-500 block mb-1">Sao chép quyền từ</label><select id="nrBase" onchange="updateRoleChecks()" class="w-full border border-slate-200 rounded-lg px-3 py-2.5 bg-white">${PERM_ROLES.map(([k,lb])=>`<option value="${k}">${lb}</option>`).join("")}</select></div>
      </div>
      <div class="mb-3"><label class="text-[11px] font-semibold text-slate-500 block mb-1">Mô tả</label><input id="nrDesc" class="w-full border border-slate-200 rounded-lg px-3 py-2.5" placeholder="Mô tả ngắn về vai trò"></div>
      <label class="text-[11px] font-semibold text-slate-500 block mb-2">Quyền hạn của vai trò</label>
      <div id="nrPerms" class="grid md:grid-cols-2 gap-2">${PERM_ACTIONS.map(([a,lb,desc])=>`<label class="flex items-start gap-2 border border-slate-200 rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-50"><input type="checkbox" data-act="${a}" class="mt-0.5 accent-${AC}-600 w-4 h-4"><div><div class="text-[12.5px] font-semibold text-slate-700">${lb}</div><div class="text-[10.5px] text-slate-400">${desc}</div></div></label>`).join("")}</div>
      <div class="flex justify-end gap-2 mt-4"><button onclick="setPTab('matrix')" class="border border-slate-200 text-slate-600 font-semibold text-[12.5px] px-4 py-2 rounded-lg">Hủy</button><button onclick="createRoleMock()" class="bg-${AC}-600 text-white font-semibold text-[12.5px] px-5 py-2 rounded-lg">Tạo vai trò</button></div></div>
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-[12px] text-slate-500"><h4 class="font-bold text-[13px] text-slate-700 mb-2">Gợi ý</h4>Vai trò mới sẽ xuất hiện trong danh sách khi tạo user. Có thể tinh chỉnh quyền bất cứ lúc nào ở tab <b>Ma trận phân quyền</b>.</div></div>`;
  }
  document.getElementById("content").innerHTML=`<div class="flex bg-white border border-slate-200 rounded-lg p-0.5 w-fit mb-4">${ptabBtn("matrix","Ma trận phân quyền")}${ptabBtn("user","Tạo user")}${ptabBtn("role","Tạo role")}</div>${body}`;
  if(PTAB==="role") updateRoleChecks();
}
function updateUserPreview(){ const r=(document.getElementById("nuRole")||{}).value||"member"; const el=document.getElementById("userPermPreview"); if(el) el.innerHTML=permBadges(r); }
function updateRoleChecks(){ const base=(document.getElementById("nrBase")||{}).value||"member"; document.querySelectorAll("#nrPerms input[data-act]").forEach(c=>{ c.checked=!!PERM_MATRIX[base][c.getAttribute("data-act")]; }); }
function createUserMock(){ const n=(document.getElementById("nuName")||{}).value||""; const e=(document.getElementById("nuEmail")||{}).value||""; const r=(document.getElementById("nuRole")||{}).value||"member"; if(!n.trim()||!e.trim()){ alert("Vui lòng nhập Họ tên và Email."); return; } const rl=(PERM_ROLES.find(x=>x[0]===r)||[])[1]||r; alert(`Đã tạo tài khoản "${n}" (${e}) — vai trò ${rl}. (demo)`); }
function createRoleMock(){ const n=(document.getElementById("nrName")||{}).value||""; if(!n.trim()){ alert("Vui lòng nhập tên vai trò."); return; } const acts=[...document.querySelectorAll("#nrPerms input[data-act]:checked")].map(c=>c.getAttribute("data-act")); alert(`Đã tạo vai trò "${n}" với ${acts.length} quyền. (demo)`); }

const ROUTES = {
  "boss-dashboard.html":renderBossDashboard, "dashboard.html":renderDashboard, "task-list.html":renderTaskList, "collab.html":renderCollab, "collab-new.html":renderCollabNew, "collab-detail.html":renderCollabDetail,
  "task-detail.html":renderTaskDetail, "calendar.html":renderCalendar, "ai-assistant.html":renderAIAssistant,
  "leaves.html":renderLeaves, "work-dna.html":renderWorkDNA,
  "resources.html":renderResources,
  "notifications.html":renderNotifications, "profile.html":renderProfile,
  "admin-settings.html":renderAdmin, "permissions.html":renderPermissions, "mood-check.html":renderMoodCheck,
};
document.addEventListener("click", (e) => {
  const a = e.target.closest("a"); if (!a) return;
  const href = a.getAttribute("href"); if (!href) return;
  if (href === "#") { e.preventDefault(); return; }
  if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) return;
  if (href.endsWith(".html") || href.includes(".html?")) { e.preventDefault(); location.hash = "#" + href; }
});
function router() {
  loadMe();
  const raw = location.hash.replace(/^#/, "");
  const [page, query] = raw.split("?");
  if (!localStorage.getItem("pw_logged") || page === "" || page === "index.html") { showLogin(); return; }
  if (page === "meeting.html") { location.hash = "#dashboard.html"; return; }
  const fn = ROUTES[page];
  if (fn) {
    window.scrollTo(0,0);
    window.NAV_STACK = window.NAV_STACK || [];
    if (window.NAV_BACK) { window.NAV_BACK = false; }
    else if (window.NAV_STACK[window.NAV_STACK.length-1] !== raw) { window.NAV_STACK.push(raw); }
    fn(query || "");
  }
  else { location.hash = IS_BOSS ? "#boss-dashboard.html" : "#dashboard.html"; }
}
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
router();




