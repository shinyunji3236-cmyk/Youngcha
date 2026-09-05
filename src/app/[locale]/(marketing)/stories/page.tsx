import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export const metadata = {
  title: '시장 이야기 | 영등포 전통시장',
  description: '영등포 전통시장 상인분들의 진솔하고 정성 가득한 이야기를 들려드립니다.',
};

export default function StoriesPage() {
  const stories = [
    {
      category: '30년 전통 · 맛집',
      badgeColor: 'bg-amber-500 text-white',
      title: '매일 아침 직접 뽑는 가마솥 할머니 떡집',
      desc: '새벽 4시부터 고소한 떡 냄새로 시장을 깨우는 할머니의 정성 어린 수제 떡 이야기. 100% 국내산 찹쌀과 천연 재료만을 고집하며 30년간 변함없는 맛을 지켜오고 있습니다.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      readTime: '3분 소요',
      author: '전통시장 스토리 에디터',
    },
    {
      category: '청년상인 · 카페',
      badgeColor: 'bg-blue-600 text-white',
      title: '옛 방앗간의 변신, 감성 레트로 카페',
      desc: '아버지의 기름집을 개조해 전통 곡물 로스팅 음료를 선보이는 젊은 상인의 도전. 세련된 인테리어 속에 옛 방앗간의 정취와 고소한 미숫가루 음료를 함께 담아냈습니다.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      readTime: '4분 소요',
      author: '청년상인 인터뷰팀',
    },
    {
      category: '신선정육 · 상점',
      badgeColor: 'bg-rose-600 text-white',
      title: '신선함으로 승부하는 2대째 축산 상점',
      desc: '좋은 고기만 고집하는 고집스러운 사장님의 정직한 상인 철학. 매일 새벽 산지에서 직송되는 최상급 한우와 암퇘지로 단골들의 두터운 신뢰를 받고 있습니다.',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
      readTime: '3분 소요',
      author: '영등포 상인회 탐방기',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-slate-50">
      {/* 글로벌 네비게이션 */}
      <Navbar />

      <main className="
        py-12
        sm:py-16
      "
      >
        <div className="
          mx-auto max-w-7xl space-y-10 px-4
          sm:space-y-12 sm:px-6
          lg:px-8
        "
        >
          {/* 상단 타이틀 영역 */}
          <div>
            <div className="flex items-center gap-2">
              <span className="
                inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5
                text-xs font-bold text-blue-800
              "
              >
                📖 MARKET STORIES
              </span>
              <span className="
                text-xs font-bold tracking-wider text-slate-500 uppercase
              "
              >
                People & Stories
              </span>
            </div>
            <h1 className="
              mt-2 text-2xl font-extrabold tracking-tight text-slate-900
              sm:text-4xl
            "
            >
              📖 시장 이야기 (점포 스토리)
            </h1>
            <p className="
              mt-2 max-w-2xl text-sm text-slate-600
              sm:text-base
            "
            >
              전통시장 골목을 지켜온 베테랑 상인부터 새로운 활력을 불어넣는 청년 상인까지, 정성 가득한 삶의 이야기를 만나보세요.
            </p>
          </div>

          {/* 스토리 매거진 카드 그리드 */}
          <div className="
            grid grid-cols-1 gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
          >
            {stories.map(story => (
              <article
                key={story.title}
                className="
                  group flex cursor-pointer flex-col justify-between
                  overflow-hidden rounded-3xl border border-slate-200 bg-white
                  shadow-md shadow-slate-200/50 transition-all duration-300
                  hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl
                "
              >
                <div>
                  {/* 대표 썸네일 이미지 & 뱃지 */}
                  <div className="
                    relative h-60 w-full overflow-hidden bg-slate-100
                  "
                  >
                    <div
                      className="
                        size-full bg-cover bg-center transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                      style={{ backgroundImage: `url('${story.image}')` }}
                    />
                    <div className="
                      absolute inset-0 bg-linear-to-t from-black/60
                      via-transparent to-transparent opacity-60
                      transition-opacity
                      group-hover:opacity-40
                    "
                    />

                    <span className={`
                      absolute top-4 left-4 inline-flex items-center
                      rounded-full px-3 py-1 text-xs font-bold shadow-md
                      ${story.badgeColor}
                    `}
                    >
                      {story.category}
                    </span>
                    <span className="
                      absolute right-3 bottom-3 rounded-md bg-black/60 px-2
                      py-0.5 text-[11px] font-medium text-white backdrop-blur-md
                    "
                    >
                      ⏱️
                      {' '}
                      {story.readTime}
                    </span>
                  </div>

                  {/* 텍스트 본문 */}
                  <div className="
                    p-6
                    sm:p-7
                  "
                  >
                    <span className="text-xs font-bold text-blue-600">
                      {story.author}
                    </span>
                    <h2 className="
                      mt-2 text-xl/snug font-black text-slate-900
                      transition-colors
                      group-hover:text-blue-600
                    "
                    >
                      {story.title}
                    </h2>
                    <p className="
                      mt-3 line-clamp-3 text-sm/relaxed text-slate-600
                    "
                    >
                      {story.desc}
                    </p>
                  </div>
                </div>

                <div className="
                  flex items-center justify-between border-t border-slate-100
                  px-6 pt-2 pb-6 text-xs font-bold text-blue-600
                  sm:px-7
                "
                >
                  <span>스토리 전문 읽기</span>
                  <span className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                  >
                    ➔
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* 하단 스토리 제보 안내 배너 */}
          <div className="
            flex flex-col items-center justify-between gap-6 rounded-3xl border
            border-slate-200 bg-white p-8 text-center shadow-sm
            sm:flex-row sm:text-left
          "
          >
            <div>
              <h3 className="text-lg font-black text-slate-900">
                ✨ 당신의 정겨운 시장 이야기를 들려주세요
              </h3>
              <p className="
                mt-1 text-xs text-slate-500
                sm:text-sm
              "
              >
                영등포 전통시장에서의 소중한 추억이나 인터뷰하고 싶은 상인 점포를 추천해 주시면 매거진에 소개해 드립니다.
              </p>
            </div>
            <a
              href="tel:02-2634-1388"
              className="
                inline-flex shrink-0 items-center gap-2 rounded-2xl bg-slate-900
                px-5 py-3 text-xs font-bold text-white transition-colors
                hover:bg-blue-600
                sm:text-sm
              "
            >
              <span>스토리 제보 문의</span>
            </a>
          </div>
        </div>
      </main>

      {/* 글로벌 푸터 */}
      <Footer />
    </div>
  );
}
