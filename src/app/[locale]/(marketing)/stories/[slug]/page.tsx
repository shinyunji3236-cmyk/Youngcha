'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { STORIES_DATA } from '@/data/marketData';

type StoryDetailProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export default function StoryDetailPage({ params }: StoryDetailProps) {
  const { slug } = use(params);
  const story = STORIES_DATA.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  // 사진 슬라이더 State
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const gallery = story.gallery && story.gallery.length > 0 ? story.gallery : [story.image];

  // 좋아요 State
  const [likes, setLikes] = useState(story.likes);
  const [isLiked, setIsLiked] = useState(false);

  // 댓글 State
  const [comments, setComments] = useState<string[]>([
    '지난주에 다녀왔는데 찹쌀떡이 정말 부드럽고 달지 않아 너무 맛있었어요! 사장님도 친절하십니다.',
    '주말에 가족들이랑 방문할 예정인데 포장도 깔끔하게 해주시나요? 꼭 가보고 싶네요.',
  ]);
  const [commentInput, setCommentInput] = useState('');

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments([commentInput, ...comments]);
    setCommentInput('');
  };

  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const nextPhoto = () => {
    setCurrentPhotoIdx((prev) => (prev + 1) % gallery.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const otherStories = STORIES_DATA.filter((item) => item.slug !== slug);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="py-8 sm:py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* 1. 상단 브레드크럼 & 서브 네비게이션 탭 (PDF 1 상세페이지 스타일) */}
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
              <Link href="/" className="hover:text-blue-600">홈</Link>
              <span>&gt;</span>
              <Link href="/stories" className="hover:text-blue-600">시장이야기</Link>
              <span>&gt;</span>
              <span className="text-slate-900 font-bold">{story.category}</span>
            </div>

            {/* 상세페이지 상단 탭 */}
            <div className="flex items-center gap-6 text-sm font-bold text-slate-600">
              <a href="#photo" className="text-blue-600 border-b-2 border-blue-600 pb-2">사진보기</a>
              <a href="#info" className="hover:text-blue-600 pb-2">상세정보</a>
              <a href="#reviews" className="hover:text-blue-600 pb-2">방문후기({comments.length})</a>
              <a href="#recommend" className="hover:text-blue-600 pb-2">추천이야기</a>
            </div>
          </div>

          {/* 2. 상세 헤더 타이틀 영역 (PDF 1 스타일) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black shadow-xs ${story.badgeColor}`}>
                {story.category}
              </span>
              <span className="text-xs font-bold text-slate-400">
                조회 {story.views.toLocaleString()} · 좋아요 {likes}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {story.title}
            </h1>

            {/* 인상적인 서브 카피 박스 */}
            <div className="rounded-2xl bg-blue-50/80 p-4 sm:p-5 border border-blue-100 text-blue-950 font-bold text-sm sm:text-base leading-relaxed">
              &quot;{story.subTitle}&quot;
            </div>
          </div>

          {/* 3. 대형 사진 갤러리 슬라이더 (PDF 1 스타일) */}
          <section id="photo" className="relative w-full h-80 sm:h-[480px] rounded-3xl overflow-hidden bg-slate-900 shadow-lg">
            <img
              src={gallery[currentPhotoIdx]}
              alt={story.title}
              className="size-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

            {/* 슬라이드 좌우 버튼 */}
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md focus:outline-none transition-colors"
                  aria-label="이전 사진"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md focus:outline-none transition-colors"
                  aria-label="다음 사진"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* 사진 카운터 */}
            <div className="absolute bottom-4 right-4 rounded-xl bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20">
              {currentPhotoIdx + 1} / {gallery.length}
            </div>

            <div className="absolute bottom-4 left-4 text-white text-xs font-semibold hidden sm:block">
              📸 {story.storeName} 현장 사진 갤러리
            </div>
          </section>

          {/* 4. 상세 내용 & 상점 개요 정보 (PDF 1~2 스타일) */}
          <section id="info" className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            {/* 본문 스토리 (2열) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 pb-4 border-b border-slate-100">
                  <span>📖</span> 상인 스토리 본문
                </h3>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {story.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* 대표 메뉴 리스트 */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                    <span>✨</span> 대표 인기 메뉴
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {story.signatureMenu.map((menu, idx) => (
                      <div key={idx} className="rounded-2xl bg-slate-50 p-3 border border-slate-100 text-xs font-bold text-slate-800 flex items-center gap-2">
                        <span className="size-2 rounded-full bg-blue-600"></span>
                        <span>{menu}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 해시태그 칩 (PDF 2 스타일) */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 px-3 py-1 text-xs font-bold text-slate-600 transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 좋아요 반응 인터랙션 (PDF 2 스타일) */}
              <div className="rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">이 상점 스토리가 마음에 드셨나요?</h4>
                  <p className="text-xs text-slate-500 mt-0.5">상인분께 따뜻한 응원의 좋아요를 남겨주세요!</p>
                </div>
                <button
                  type="button"
                  onClick={toggleLike}
                  className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-black transition-all ${
                    isLiked
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>{isLiked ? '❤️' : '🤍'}</span>
                  <span>좋아요 {likes}</span>
                </button>
              </div>
            </div>

            {/* 우측 상점 개요 정보 테이블 (PDF 2 스타일) */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
                  🏪 상점 기본 정보
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">상호명</span>
                    <span>{story.storeName}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">위치</span>
                    <span>{story.location}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">문의전화</span>
                    <a href={`tel:${story.phone}`} className="text-blue-600 font-bold hover:underline">
                      {story.phone}
                    </a>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">영업시간</span>
                    <span>{story.hours}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">결제혜택</span>
                    <span className="text-emerald-700 font-bold">온누리상품권 100% 사용 가능</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/map"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 shadow-md transition-all"
                  >
                    <span>📍 시장 지도에서 위치 찾기</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 5. 댓글 및 방문 후기 섹션 (PDF 2~3 스타일) */}
          <section id="reviews" className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span>💬</span> 방문 후기 및 댓글 ({comments.length}건)
              </h3>
            </div>

            {/* 댓글 작성 폼 */}
            <form onSubmit={handleAddComment} className="space-y-3">
              <textarea
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="상점에 대한 방문 소감이나 응원의 한마디를 남겨주세요."
                rows={3}
                className="w-full rounded-2xl border border-slate-200 p-4 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-5 py-2.5 transition-colors"
                >
                  후기 등록하기
                </button>
              </div>
            </form>

            {/* 댓글 목록 */}
            <div className="space-y-3 pt-4">
              {comments.map((comment, index) => (
                <div key={index} className="rounded-2xl bg-slate-50 p-4 border border-slate-100 text-xs sm:text-sm text-slate-700 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                    <span>시장 방문객</span>
                    <span>2026. 09. 05.</span>
                  </div>
                  <p className="leading-relaxed">{comment}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. 추천 다른 상점 이야기 슬라이더 (PDF 3 스타일) */}
          <section id="recommend" className="pt-6 space-y-6">
            <h3 className="text-xl font-black text-slate-900">
              함께 읽어볼 만한 다른 상점 이야기
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherStories.map((other) => (
                <Link
                  key={other.id}
                  href={`/stories/${other.slug}`}
                  className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all"
                >
                  <div className="w-full sm:w-44 h-44 shrink-0 overflow-hidden bg-slate-100">
                    <img
                      src={other.image}
                      alt={other.title}
                      className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[11px] font-bold text-blue-600">{other.category}</span>
                      <h4 className="font-extrabold text-base text-slate-900 mt-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {other.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{other.summary}</p>
                    </div>
                    <span className="text-xs font-bold text-blue-600 mt-4">스토리 읽기 ➔</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
