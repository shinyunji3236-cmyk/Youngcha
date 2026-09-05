'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { EVENTS_DATA } from '@/data/marketData';

type EventDetailProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export default function EventDetailPage({ params }: EventDetailProps) {
  const { slug } = use(params);
  const event = EVENTS_DATA.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  // 사진 슬라이더
  const [photoIdx, setPhotoIdx] = useState(0);
  const gallery = event.gallery && event.gallery.length > 0 ? event.gallery : [event.image];

  // 좋아요
  const [likes, setLikes] = useState(event.likes);
  const [isLiked, setIsLiked] = useState(false);

  // 후기/댓글
  const [comments, setComments] = useState<string[]>([
    '지난주 금요일에 야시장 갔는데 버스킹 공연도 너무 신나고 먹거리 푸드트럭도 다양해서 대만족이었습니다!',
    '온누리상품권으로 결제하고 환급 이벤트까지 받아서 정말 알뜰하게 장보고 왔어요. 추천합니다.',
  ]);
  const [inputComment, setInputComment] = useState('');

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputComment.trim()) return;
    setComments([inputComment, ...comments]);
    setInputComment('');
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
    setPhotoIdx((prev) => (prev + 1) % gallery.length);
  };

  const prevPhoto = () => {
    setPhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const otherEvents = EVENTS_DATA.filter((item) => item.slug !== slug);

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
              <Link href="/today" className="hover:text-blue-600">오늘의시장</Link>
              <span>&gt;</span>
              <span className="text-slate-900 font-bold">{event.category}</span>
            </div>

            <div className="flex items-center gap-6 text-sm font-bold text-slate-600">
              <a href="#photo" className="text-rose-600 border-b-2 border-rose-600 pb-2">사진보기</a>
              <a href="#info" className="hover:text-rose-600 pb-2">상세정보</a>
              <a href="#reviews" className="hover:text-rose-600 pb-2">관람후기({comments.length})</a>
              <a href="#other" className="hover:text-rose-600 pb-2">기타행사</a>
            </div>
          </div>

          {/* 2. 헤더 타이틀 영역 (PDF 1 스타일) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-600 px-3 py-1 text-xs font-black text-white shadow-xs">
                <span className="size-1.5 rounded-full bg-white animate-pulse"></span>
                {event.status}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {event.category} · {event.dateRange}
              </span>
              <span className="text-xs font-bold text-slate-400 ml-auto">
                조회 {event.views.toLocaleString()} · 좋아요 {likes}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {event.title}
            </h1>

            {/* 인상적인 서브 카피 박스 */}
            <div className="rounded-2xl bg-rose-50/80 p-4 sm:p-5 border border-rose-100 text-rose-950 font-bold text-sm sm:text-base leading-relaxed">
              &quot;{event.subTitle}&quot;
            </div>
          </div>

          {/* 3. 대형 사진 및 포스터 갤러리 슬라이더 (PDF 1 스타일) */}
          <section id="photo" className="relative w-full h-80 sm:h-[480px] rounded-3xl overflow-hidden bg-slate-900 shadow-lg">
            <img
              src={gallery[photoIdx]}
              alt={event.title}
              className="size-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

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

            <div className="absolute bottom-4 right-4 rounded-xl bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20">
              {photoIdx + 1} / {gallery.length}
            </div>

            <div className="absolute bottom-4 left-4 text-white text-xs font-semibold hidden sm:block">
              🎉 {event.title} 현장 갤러리
            </div>
          </section>

          {/* 4. 상세 내용 & 행사 개요 정보 (PDF 1~2 스타일) */}
          <section id="info" className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 pb-4 border-b border-slate-100">
                  <span>📋</span> 행사 상세 안내
                </h3>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {event.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* 관람객 유의사항 및 편의 팁 */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                    <span>💡</span> 방문 및 관람 안내 사항
                  </h4>
                  <div className="space-y-2">
                    {event.notice.map((n, idx) => (
                      <div key={idx} className="rounded-2xl bg-slate-50 p-3 border border-slate-100 text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-rose-600 font-bold shrink-0">✓</span>
                        <span>{n}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 해시태그 칩 (PDF 2 스타일) */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-600 px-3 py-1 text-xs font-bold text-slate-600 transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 좋아요 반응 인터랙션 (PDF 2 스타일) */}
              <div className="rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">해당 행사가 마음에 드시나요?</h4>
                  <p className="text-xs text-slate-500 mt-0.5">좋아요를 누르면 더 많은 방문객에게 추천됩니다!</p>
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

            {/* 우측 개요 테이블 (PDF 2 스타일) */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
                  🎪 행사 개요 정보
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">행사명</span>
                    <span>{event.title}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">기간</span>
                    <span>{event.dateRange}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">시간</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">장소</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">주최 / 주관</span>
                    <span>{event.host}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">이용요금</span>
                    <span className="text-blue-600 font-bold">{event.fee}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/map"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold py-3 shadow-md transition-all"
                  >
                    <span>📍 행사장 찾아오시는 길</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 5. 댓글 및 관람 후기 */}
          <section id="reviews" className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-lg font-black text-slate-900 pb-4 border-b border-slate-100">
              💬 행사 관람 후기 ({comments.length}건)
            </h3>

            <form onSubmit={handleAddComment} className="space-y-3">
              <textarea
                value={inputComment}
                onChange={(e) => setInputComment(e.target.value)}
                placeholder="행사 방문 소감이나 후기를 남겨주세요."
                rows={3}
                className="w-full rounded-2xl border border-slate-200 p-4 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 bg-slate-50"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 hover:bg-rose-600 text-white text-xs font-bold px-5 py-2.5 transition-colors"
                >
                  후기 등록하기
                </button>
              </div>
            </form>

            <div className="space-y-3 pt-4">
              {comments.map((comment, index) => (
                <div key={index} className="rounded-2xl bg-slate-50 p-4 border border-slate-100 text-xs sm:text-sm text-slate-700 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                    <span>방문객 후기</span>
                    <span>2026. 09. 05.</span>
                  </div>
                  <p className="leading-relaxed">{comment}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. 다른 진행 행사 */}
          <section id="other" className="pt-6 space-y-6">
            <h3 className="text-xl font-black text-slate-900">
              함께 확인하면 좋은 다른 시장 행사
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherEvents.map((other) => (
                <Link
                  key={other.id}
                  href={`/today/${other.slug}`}
                  className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all"
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
                      <span className="text-[11px] font-bold text-rose-600">{other.category}</span>
                      <h4 className="font-extrabold text-base text-slate-900 mt-1 group-hover:text-rose-600 transition-colors line-clamp-2">
                        {other.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{other.summary}</p>
                    </div>
                    <span className="text-xs font-bold text-rose-600 mt-4">행사 내용 보기 ➔</span>
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
