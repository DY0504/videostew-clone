import React from 'react'

function Preview() {
  return (
    <div className="min-h-screen p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">🎬 영상 미리보기</h2>
      <video controls className="mx-auto mb-6 max-w-2xl shadow-lg">
        <source src="/sample.mp4" type="video/mp4" />
        브라우저가 비디오를 지원하지 않습니다.
      </video>
      <a
        href="/sample.mp4"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        📥 영상 다운로드
      </a>
    </div>
  )
}

export default Preview