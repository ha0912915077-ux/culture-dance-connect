import { createFileRoute } from "@tanstack/react-router";
import heroDance from "@/assets/hero-dance.jpg";
import aboutHands from "@/assets/about-hands.jpg";
import coachTraining from "@/assets/coach-training.jpg";
import eventGathering from "@/assets/event-gathering.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "中華土風舞創意發展促進會｜舞動文化，連結生活" },
      {
        name: "description",
        content:
          "中華土風舞創意發展促進會致力推廣土風舞文化、培育教練人才、促進社群交流，讓舞蹈走進生活，讓文化自然傳承。",
      },
      { property: "og:title", content: "中華土風舞創意發展促進會｜舞動文化，連結生活" },
      {
        property: "og:description",
        content: "推廣土風舞、培育教練、凝聚舞友——一起讓舞步成為文化的溫度與社群的力量。",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Ornament() {
  return (
    <div className="ornament-divider my-6">
      <span className="h-px w-12 bg-current opacity-60" />
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
        <path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-current opacity-60" />
    </div>
  );
}

function Btn({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "gold";
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
      : variant === "gold"
      ? "bg-accent text-accent-foreground hover:bg-accent/90 hover:-translate-y-0.5"
      : "border border-cream/40 text-cream hover:bg-cream/10";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "cream",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  tone?: "cream" | "muted" | "ink";
}) {
  const bg =
    tone === "ink"
      ? "bg-ink text-cream"
      : tone === "muted"
      ? "bg-muted"
      : "bg-background";
  return (
    <section id={id} className={`section-y ${bg}`}>
      <div className="container-x">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="heading-lg mt-3">{title}</h2>
          {intro && (
            <p className={`mt-5 text-lg leading-relaxed ${tone === "ink" ? "text-cream/80" : "text-muted-foreground"}`}>
              {intro}
            </p>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container-x flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-serif font-bold">
              舞
            </span>
            <span className="font-serif font-bold text-sm md:text-base leading-tight">
              中華土風舞<br className="md:hidden" />
              <span className="text-muted-foreground font-sans font-normal text-xs ml-0 md:ml-1">
                創意發展促進會
              </span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#about" className="hover:text-primary transition">關於</a>
            <a href="#mission" className="hover:text-primary transition">願景</a>
            <a href="#join" className="hover:text-primary transition">入會</a>
            <a href="#coach" className="hover:text-primary transition">教練證照</a>
            <a href="#team" className="hover:text-primary transition">團隊</a>
            <a href="#events" className="hover:text-primary transition">活動成果</a>
            <a href="#contact" className="hover:text-primary transition">聯絡</a>
          </nav>
          <a
            href="#join"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
          >
            立即加入
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroDance}
          alt="舞友在黃昏中圍圈共舞"
          width={1600}
          height={1104}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        <div className="container-x relative pb-24 pt-32 text-cream">
          <span className="eyebrow text-accent">Chinese Folk Dance Association</span>
          <h1 className="heading-xl mt-4 max-w-4xl">
            舞動土風舞，<br />
            <span className="text-accent">連結文化與生活。</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-cream/85">
            中華土風舞創意發展促進會，致力推廣土風舞文化、培育教練人才、促進社群交流——
            讓舞蹈走進生活，讓文化自然傳承。我們相信，土風舞不只是舞蹈，
            更是一種連結世代、凝聚社群、展現生活美學的方式。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Btn href="#join" variant="primary">立即加入社員</Btn>
            <Btn href="#coach" variant="gold">了解教練證照</Btn>
            <Btn href="#events" variant="ghost">看看最新活動</Btn>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl border-t border-cream/20 pt-8">
            {[
              { n: "推廣", t: "土風舞文化" },
              { n: "培訓", t: "專業教練師資" },
              { n: "連結", t: "全台舞友社群" },
            ].map((i) => (
              <div key={i.n}>
                <div className="font-serif text-2xl md:text-3xl text-accent">{i.n}</div>
                <div className="text-xs md:text-sm text-cream/70 mt-1">{i.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHORT INTRO STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-10 md:py-12 flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center justify-between">
          <p className="font-serif text-lg md:text-xl leading-snug max-w-3xl">
            以土風舞為核心，結合推廣、教學、交流與培訓——
            打造一個屬於舞友、教練與喜愛文化活動者的共舞平台。
          </p>
          <a href="#about" className="shrink-0 inline-flex items-center gap-2 text-sm font-medium border-b border-current pb-0.5">
            認識協會 →
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About Us"
        title="關於我們"
        intro="中華土風舞創意發展促進會是一個以土風舞推廣為核心的交流平台，長期透過聯歡、觀摩教學、會員活動與社群互動，持續推動土風舞走入更多人的生活。"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-3">協會定位</h3>
              <p className="text-muted-foreground leading-relaxed">
                我們不只是推廣舞蹈，更希望透過土風舞連結人與人之間的距離，
                讓不同年齡、不同背景的舞友都能在律動中找到學習、分享與陪伴的樂趣。
                協會以「土風舞」為品牌主軸，兼顧文化傳承、創意發展與專業培訓，
                打造兼具溫度與專業的形象平台。
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-3">為什麼推廣土風舞</h3>
              <p className="text-muted-foreground leading-relaxed">
                土風舞承載了民俗文化、團體合作與身體律動的美感，
                既能作為日常休閒運動，也能成為社區交流與文化推廣的重要媒介。
                透過持續推廣，我們希望讓更多人重新認識土風舞，
                並在舞步中感受健康、快樂與連結。
              </p>
            </div>
            <blockquote className="border-l-4 border-accent pl-5 py-2 font-serif text-lg leading-relaxed text-foreground">
              「我們相信，舞蹈不只是表演，更是生活的一部分。
              以開放、共享、共舞的精神，邀請每一位喜愛土風舞的朋友加入，
              一起讓舞步延伸成文化的溫度與社群的力量。」
            </blockquote>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={aboutHands}
                alt="不同世代舞友交握的雙手"
                loading="lazy"
                width={1200}
                height={900}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {["舞步之間，連結文化", "讓土風舞成為日常的美好", "傳承舞蹈，也傳遞情感", "一起舞動，一起成長"].map((s) => (
                <div key={s} className="bg-secondary rounded-lg p-3 text-secondary-foreground">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION */}
      <Section
        id="mission"
        eyebrow="Vision & Mission"
        title="願景與使命"
        intro="成為台灣具代表性的土風舞推廣與師資培育平台，讓土風舞不只是社團活動，而是能融入生活、教育與社區的文化力量。"
        tone="muted"
      >
        <p className="max-w-3xl text-muted-foreground leading-relaxed mb-10">
          我們以推廣土風舞為起點，透過會員制度、教練培訓、活動交流與成果展現，
          建立一個能持續發展的舞蹈社群。協會希望在傳承中創新，在交流中成長，
          讓更多人因土風舞而相遇、學習與前進。
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "推廣土風舞教育，讓更多人認識並參與土風舞活動。",
            "建立會員交流平台，促進舞友之間的互動與分享。",
            "推動教練培訓與證照制度，培養專業師資人才。",
            "透過聯歡、觀摩與教學活動，累積土風舞推廣能量。",
            "保存民俗舞蹈精神，並以創意方式延伸土風舞的當代價值。",
            "促進跨世代參與，讓土風舞成為健康且有溫度的全民運動。",
          ].map((m, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition group">
              <div className="font-serif text-accent text-2xl mb-3 group-hover:text-primary transition">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm leading-relaxed text-foreground">{m}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES — JOIN */}
      <section id="services" className="section-y bg-background">
        <div className="container-x">
          <span className="eyebrow">Our Services</span>
          <h2 className="heading-lg mt-3">服務內容</h2>
          <Ornament />

          {/* A. JOIN */}
          <div id="join" className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <span className="text-xs tracking-widest text-accent font-bold">A · 社員入會</span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mt-3">
                加入我們，<br />一起共舞
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                無論你是剛接觸土風舞的朋友，還是已經參與多年舞會的舞友，
                都歡迎加入中華土風舞創意發展促進會。透過會員制度，
                你可以更完整地參與協會活動、取得最新資訊，
                並與來自不同地區的舞友交流，讓土風舞不只是一項興趣，
                更成為生活中的固定節奏。
              </p>

              <div className="mt-8">
                <h4 className="font-serif text-lg font-bold mb-4">會員可獲得</h4>
                <ul className="space-y-3">
                  {[
                    "參與協會舉辦的聯歡、交流與觀摩活動。",
                    "第一時間收到最新活動與課程資訊。",
                    "與全台各地舞友建立交流與學習連結。",
                    "參與土風舞推廣與文化活動，增加實際參與感。",
                    "有機會接觸更多教學、展演與培訓資源。",
                    "成為推動土風舞文化的一份力量。",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-accent shrink-0 mt-0.5">✦</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href="#contact" variant="primary">立即申請入會</Btn>
                <Btn href="#contact" variant="gold">了解入會方式</Btn>
              </div>
            </div>

            <aside className="bg-secondary rounded-2xl p-8">
              <h4 className="font-serif text-xl font-bold mb-5">適合加入的人</h4>
              <div className="space-y-3">
                {[
                  ["初", "對土風舞有興趣的初學者"],
                  ["友", "長期參與舞會或社團活動的舞友"],
                  ["拓", "希望擴大交流圈的人"],
                  ["文", "想參與文化推廣活動的人"],
                  ["群", "喜歡團體律動與社群互動的人"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-4 bg-background rounded-xl p-4">
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                      {k}
                    </span>
                    <span className="text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="my-24 h-px bg-border" />

          {/* B. COACH */}
          <div id="coach" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={coachTraining}
                  alt="教練培訓現場"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 bg-ink text-cream rounded-xl p-6">
                <h4 className="font-serif text-lg font-bold mb-3 text-accent">注意事項</h4>
                <ul className="space-y-2 text-sm text-cream/80">
                  <li>• 實際課程與報名資格請以協會公告為準。</li>
                  <li>• 請先確認報名時間與梯次資訊。</li>
                  <li>• 若需準備資料，建議提前完成。</li>
                  <li>• 建議先閱讀證照說明，再進行報名。</li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs tracking-widest text-accent font-bold">B · 教練考證照</span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mt-3">
                從舞者，<br />走向教學者。
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                協會重視土風舞的專業傳承，透過教練培訓與證照認證，
                協助有志推廣土風舞的朋友建立更完整的教學能力與舞蹈理解。
                無論你未來想進入社區教學、活動帶領，
                或希望提升自己的舞蹈基礎與教學素養，
                都能從這裡開始，踏出更穩健的專業步伐。
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  "建立完整的教學觀念",
                  "學習帶領活動與團體練習",
                  "理解舞步、節奏與編舞",
                  "提升個人專業形象",
                  "打下教學推廣基礎",
                  "深入土風舞文化結構",
                ].map((t) => (
                  <div key={t} className="bg-card border border-border rounded-lg p-4 text-sm">
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href="#contact" variant="primary">我要報名培訓</Btn>
                <Btn href="#contact" variant="gold">查看證照資訊</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <Section
        id="team"
        eyebrow="Our Team"
        title="核心團隊"
        intro="每一場活動、每一次教學、每一段舞步的背後，都有團隊默默投入的心力。團隊成員來自不同專長與經驗，卻都因為對土風舞的熱愛而聚在一起，共同推動協會的發展。"
        tone="muted"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: "理事長", role: "Founder", bio: "深耕土風舞多年，持續投入教學與活動推廣。" },
            { name: "副理事長", role: "Vice Chair", bio: "以細膩的帶領方式，陪伴舞友在學習中成長。" },
            { name: "活動長", role: "Events Lead", bio: "擅長活動規劃與舞碼推廣，讓每場聯歡更有節奏與溫度。" },
            { name: "交流長", role: "Community", bio: "長期參與土風舞交流，致力於促進社群連結與文化傳承。" },
            { name: "培訓長", role: "Training", bio: "透過教學與實作經驗，持續培育新一代土風舞推廣人才。" },
            { name: "秘書長", role: "Secretary", bio: "統籌會務運作與會員服務，是協會穩定運轉的後盾。" },
          ].map((p) => (
            <article key={p.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/80 to-accent/60 grid place-items-center mb-5">
                <span className="font-serif text-5xl font-bold text-cream">{p.name.slice(0, 1)}</span>
              </div>
              <div className="text-xs tracking-widest text-accent font-bold">{p.role}</div>
              <h3 className="font-serif text-xl font-bold mt-1">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 font-serif text-lg text-center max-w-2xl mx-auto text-foreground">
          因為有這群熱愛土風舞的人，協會才能持續向前，
          也讓更多舞友在共舞中找到歸屬與力量。
        </p>
      </Section>

      {/* EVENTS */}
      <section id="events" className="section-y bg-ink text-cream">
        <div className="container-x">
          <span className="eyebrow text-accent">Highlights</span>
          <h2 className="heading-lg mt-3 text-cream">活動成果與案例</h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/80 max-w-3xl">
            從會員大會到北區、南區聯歡，從觀摩教學到舞碼發表——
            每一場活動都是協會推廣土風舞的重要成果，
            也讓土風舞的活力與凝聚力被更多人看見。
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[400px]">
              <img
                src={eventGathering}
                alt="大型聯歡活動現場"
                loading="lazy"
                width={1400}
                height={900}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
              <div className="absolute bottom-0 p-8">
                <span className="eyebrow text-accent">Featured</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2">北區聯歡會精彩回顧</h3>
                <p className="text-sm text-cream/80 mt-3 max-w-md">
                  透過聯歡活動，讓來自不同地區的舞友齊聚一堂，共享舞動時光。
                </p>
              </div>
            </div>

            {[
              { t: "南區舞友共舞紀錄", d: "在觀摩教學中，學員不只學會舞步，也更理解土風舞的文化與美感。" },
              { t: "會員大會與交流花絮", d: "會員大會結合交流與發表，讓協會運作更有向心力與凝聚力。" },
              { t: "教練培訓學員心得", d: "教練培訓班協助參與者建立教學能力，為未來推廣打下基礎。" },
              { t: "社區推廣活動成果", d: "社區推廣活動讓土風舞走出舞台，走進更多人的生活之中。" },
            ].map((c) => (
              <article key={c.t} className="bg-cream/5 border border-cream/15 rounded-2xl p-6 hover:bg-cream/10 transition">
                <h3 className="font-serif text-xl font-bold">{c.t}</h3>
                <p className="text-sm text-cream/70 mt-3 leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="font-serif text-2xl font-bold text-center">會員真實見證</h3>
            <Ornament />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {[
                "因為土風舞，我找回了快樂與節奏。",
                "參加協會活動後，我認識了更多志同道合的舞友。",
                "學舞不只是學動作，更是學會交流。",
                "考取教練培訓後，我更有信心帶領課程。",
                "每次聯歡都讓我很期待，也很感動。",
                "這裡不只是學習的地方，也是交流的家。",
              ].map((q, i) => (
                <blockquote key={i} className="bg-cream/5 rounded-xl p-6 border-l-2 border-accent">
                  <p className="text-cream/90 leading-relaxed">「{q}」</p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / JOIN FORM */}
      <section id="contact" className="section-y bg-background">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="eyebrow">Contact</span>
            <h2 className="heading-lg mt-3">一起加入<br />土風舞的行列</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              如果你喜歡舞蹈、熱愛交流，或希望透過土風舞參與更多文化活動，
              協會誠摯歡迎你的加入。無論你想成為會員、參加活動，
              或進一步學習教學，我們都期待與你在舞步中相遇。
            </p>

            <div className="mt-8 space-y-4">
              {[
                ["📮", "Email", "info@folk-dance.org.tw"],
                ["📱", "聯絡電話", "(02) 0000-0000"],
                ["📘", "Facebook 社團", "中華土風舞創意發展促進會"],
              ].map(([i, l, v]) => (
                <div key={l} className="flex items-start gap-4">
                  <span className="text-2xl">{i}</span>
                  <div>
                    <div className="text-xs text-muted-foreground tracking-widest">{l}</div>
                    <div className="font-medium">{v}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-secondary rounded-xl text-sm text-secondary-foreground">
              <p className="font-bold mb-2">友善提醒</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>· 請確認電話與 Email 填寫無誤。</li>
                <li>· 若暫時不確定參與項目，也可先留下聯絡方式。</li>
                <li>· 活動與課程資訊可能會依公告調整。</li>
              </ul>
            </div>
          </div>

          <form
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              alert("感謝您的來訊，我們會盡快與您聯繫。");
            }}
          >
            <h3 className="font-serif text-2xl font-bold mb-6">填寫聯絡表單</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="姓名" placeholder="請輸入您的姓名" />
              <Field label="聯絡電話" placeholder="請留下聯絡電話" />
              <Field label="電子信箱" type="email" placeholder="請輸入電子信箱" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">詢問項目</label>
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary outline-none transition">
                  <option>我要申請入會</option>
                  <option>我想了解教練證照</option>
                  <option>我想報名活動</option>
                  <option>合作與洽詢</option>
                  <option>其他</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">需求說明</label>
                <textarea
                  rows={5}
                  placeholder="請簡述您的需求，若有補充說明，歡迎填寫"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary outline-none transition resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition shadow-lg shadow-primary/20"
            >
              送出，與我們聯繫
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              送出後請留意聯絡方式是否正確，我們會盡快回覆您。
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream pt-16 pb-8">
        <div className="container-x">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  舞
                </span>
                <span className="font-serif font-bold">中華土風舞創意發展促進會</span>
              </div>
              <p className="mt-5 font-serif text-xl text-accent leading-snug">
                舞動文化，連結生活。<br />讓土風舞持續傳承。
              </p>
              <p className="mt-4 text-sm text-cream/70 max-w-md leading-relaxed">
                誠摯邀請你一起加入，從舞步開始，
                讓文化、交流與熱情持續延伸。
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4 text-sm tracking-widest">網站導覽</h4>
              <ul className="space-y-2 text-sm text-cream/70">
                <li><a href="#about" className="hover:text-accent">關於我們</a></li>
                <li><a href="#mission" className="hover:text-accent">願景與使命</a></li>
                <li><a href="#join" className="hover:text-accent">社員入會</a></li>
                <li><a href="#coach" className="hover:text-accent">教練證照</a></li>
                <li><a href="#events" className="hover:text-accent">活動成果</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4 text-sm tracking-widest">加入社群</h4>
              <ul className="space-y-2 text-sm text-cream/70">
                <li>歡迎加入 Facebook 社團，掌握最新活動資訊。</li>
                <li>持續關注我們的社群，看見更多活動花絮。</li>
              </ul>
              <a
                href="#contact"
                className="inline-flex mt-5 items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition"
              >
                立即聯絡我們 →
              </a>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
            <p>© {new Date().getFullYear()} 中華土風舞創意發展促進會 Chinese Folk Dance Creative Development Association.</p>
            <p>以舞會友，讓交流延續。</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary outline-none transition"
      />
    </div>
  );
}
