// STYLE NOTE: Evi's page is a red-signal personal zine. Keep cream paper, ink black,
// Evi Red #E51B2D, hand-drawn marks, asymmetry, and only one social destination: TikTok.
import { useState, type CSSProperties } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDot,
  Heart,
  Play,
  Radio,
  Target,
  Zap,
} from "lucide-react";

const assets = {
  portrait: `${import.meta.env.BASE_URL}assets/evi-portrait.webp`,
  mark: `${import.meta.env.BASE_URL}assets/evi-mark.webp`,
  fallout: `${import.meta.env.BASE_URL}assets/evi-cover-fallout.webp`,
  friends: `${import.meta.env.BASE_URL}assets/evi-cover-friends.webp`,
  live: `${import.meta.env.BASE_URL}assets/evi-cover-live.webp`,
};

const entries = [
  {
    id: "fallout",
    number: "01",
    eyebrow: "игровая заметка",
    title: "как играть со мной или с другими роблоксерами",
    copy: "Правила простые: не терять чувство юмора, быстро нажимать и не делать вид, что всё идёт по плану.",
    image: assets.fallout,
    className: "entry-card--wide",
    rotate: "-1.1deg",
  },
  {
    id: "friends",
    number: "02",
    eyebrow: "из эфира",
    title: "наша маленькая команда",
    copy: "Когда в кадре больше одного хаоса, обычно получается самая смешная история.",
    image: assets.friends,
    className: "entry-card--tall",
    rotate: "1.6deg",
  },
  {
    id: "live",
    number: "03",
    eyebrow: "включайся",
    title: "не обещаю порядок, обещаю эфир",
    copy: "Здесь можно просто зайти, посмотреть, как всё пошло не так, и остаться до финала.",
    image: assets.live,
    className: "entry-card--offset",
    rotate: "-0.6deg",
  },
];

export default function Home() {
  const [liked, setLiked] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLiked((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <div className="evi-shell" id="top">
      <div className="ink-grain" aria-hidden="true" />

      <header className="evi-header">
        <a className="evi-brand" href="#top" aria-label="Эви — главная">
          <span className="evi-brand-mark">
            <img src={assets.mark} alt="" />
          </span>
          <span className="evi-brand-name">эви <em>/ сигнал</em></span>
        </a>
        <nav className="evi-nav" aria-label="Навигация по сайту">
          <a href="#about">кто я</a>
          <a href="#notes">заметки</a>
          <a href="#live">эфир</a>
        </nav>
        <a
          className="evi-header-link"
          href="https://www.tiktok.com/@ly9na6"
          target="_blank"
          rel="noreferrer"
        >
          TikTok <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section className="evi-hero" aria-labelledby="hero-title">
          <div className="evi-hero-copy">
            <p className="evi-kicker">
              <span className="red-pulse" /> личный сигнал / 2026
            </p>
            <h1 id="hero-title">
              хало,
              <br />
              я <span>Эви</span>
            </h1>
            <p className="evi-hero-lede">
              Игровые истории, эфиры и немного хаоса. Заходи, если хочешь увидеть,
              как цель в 1000 подписчиков собирается по одному смешному моменту.
            </p>
            <div className="evi-hero-actions">
              <a
                className="evi-button evi-button--red"
                href="https://www.tiktok.com/@ly9na6"
                target="_blank"
                rel="noreferrer"
              >
                смотреть эфир <ArrowUpRight size={17} />
              </a>
              <a className="evi-button evi-button--quiet" href="#about">
                <span className="evi-play-icon"><Play size={12} fill="currentColor" /></span>
                кто такая Эви?
              </a>
            </div>
            <div className="evi-hero-caption">
              <span className="caption-number">01</span>
              <span className="caption-stroke" />
              <span>цель: 1000 подписчиков</span>
              <Target size={17} />
            </div>
          </div>

          <div className="evi-hero-art" aria-label="Иллюстративный портрет Эви">
            <div className="hero-target hero-target--back" />
            <div className="hero-target hero-target--front"><span /></div>
            <div className="hero-photo-frame">
              <img src={assets.portrait} alt="Иллюстративный портрет Эви" />
            </div>
            <span className="hero-tag hero-tag--live"><Radio size={14} /> ЭФИР</span>
            <span className="hero-note hero-note--top">не теряй сигнал ↓</span>
            <span className="hero-note hero-note--bottom">💋 это я, Эви</span>
            <span className="hero-cross hero-cross--one">+</span>
            <span className="hero-cross hero-cross--two">×</span>
            <span className="hero-dot hero-dot--one" />
            <span className="hero-dot hero-dot--two" />
          </div>
        </section>

        <section className="evi-about" id="about" aria-labelledby="about-title">
          <div className="evi-section-number">02 / карта Эви</div>
          <div className="evi-about-title">
            <h2 id="about-title">
              одна цель.
              <br />
              много <span>шума.</span>
            </h2>
          </div>
          <div className="evi-about-copy">
            <p className="hand-note">пометка на полях</p>
            <p>
              Я Эви — люблю игровые миры, эфиры и моменты, которые начинаются с
              «давайте просто попробуем».
            </p>
            <p>
              Сейчас собираю свою маленькую команду и иду к 1000 подписчиков.
              Можно идти рядом.
            </p>
            <div className="evi-tags" aria-label="Темы сайта">
              <span>#roblox</span>
              <span>#эфир</span>
              <span>#сумка_223</span>
            </div>
          </div>
          <div className="evi-fact-note">
            <span className="fact-label">сейчас</span>
            <strong>731</strong>
            <small>подписчик</small>
            <span className="fact-arrow">↗</span>
          </div>
        </section>

        <section className="evi-notes" id="notes" aria-labelledby="notes-title">
          <div className="evi-notes-heading">
            <div>
              <div className="evi-section-number">03 / следы эфира</div>
              <h2 id="notes-title">
                поймала
                <br />
                <span>три кадра</span>
              </h2>
            </div>
            <p>
              Не архив и не портфолио. Просто три места, где Эви особенно похожа
              на себя.
            </p>
            <ArrowDownRight className="evi-heading-arrow" size={43} strokeWidth={1.3} />
          </div>
          <div className="evi-entry-grid">
            {entries.map((entry) => {
              const isLiked = liked.includes(entry.id);
              return (
                <article
                  key={entry.id}
                  className={`evi-entry-card ${entry.className}`}
                  style={{ "--entry-rotate": entry.rotate } as CSSProperties}
                >
                  <div className="entry-image">
                    <img src={entry.image} alt="" />
                    <span className="entry-tape" />
                    <span className="entry-number">{entry.number}</span>
                    <span className="entry-mark">✳</span>
                  </div>
                  <div className="entry-body">
                    <div className="entry-meta">
                      <span>{entry.eyebrow}</span>
                      <button
                        type="button"
                        className={`entry-like ${isLiked ? "is-liked" : ""}`}
                        aria-label={isLiked ? "Убрать реакцию" : "Поставить реакцию"}
                        aria-pressed={isLiked}
                        onClick={() => toggleLike(entry.id)}
                      >
                        <Heart size={17} fill={isLiked ? "currentColor" : "none"} />
                      </button>
                    </div>
                    <h3>{entry.title}</h3>
                    <p>{entry.copy}</p>
                    <a className="entry-link" href="#live">
                      открыть след <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="evi-live" id="live" aria-labelledby="live-title">
          <div className="evi-live-sticker">
            <CircleDot size={19} />
            <strong>LIVE</strong>
            <small>не обещаю<br />порядок</small>
          </div>
          <div className="evi-live-copy">
            <div className="evi-section-number">04 / включайся</div>
            <h2 id="live-title">
              оставайся
              <br />
              на <span>связи</span>
            </h2>
            <p>
              Если хочется посмотреть, как одна игровая идея превращается в целый
              вечер — тебе сюда. Только TikTok, только живой сигнал.
            </p>
            <a
              className="evi-button evi-button--red"
              href="https://www.tiktok.com/@ly9na6"
              target="_blank"
              rel="noreferrer"
            >
              открыть TikTok <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="evi-live-aside">
            <Zap size={24} />
            <p>цель — 1000<br />по пути можно смеяться</p>
            <span>●  live signal</span>
          </div>
          <span className="evi-live-target"><Target size={48} /></span>
        </section>
      </main>

      <footer className="evi-footer">
        <div className="evi-footer-top">
          <a className="evi-footer-brand" href="#top">
            <img src={assets.mark} alt="" />
            <span>эви / сигнал</span>
          </a>
          <p>других аккаунтов нет.<br />только этот сигнал.</p>
          <a
            className="evi-footer-tiktok"
            href="https://www.tiktok.com/@ly9na6"
            target="_blank"
            rel="noreferrer"
          >
            @ly9na6 <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="evi-footer-bottom">
          <span>made with red ink &amp; good chaos</span>
          <span>© 2026 Evi</span>
          <a href="#top">наверх ↑</a>
        </div>
      </footer>
    </div>
  );
}
