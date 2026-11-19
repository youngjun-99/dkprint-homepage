// 2026-11-19 이전 배포 번들 자리에 두는 스텁.
// 당시 index.html은 Cache-Control 없이 나가서 재방문자 브라우저에 휴리스틱 캐시로 남아 있고,
// 그 index.html이 이 파일을 요청한다. 최신 index.html을 다시 받아 한 번만 새로고침한다.
// 옛 index.html 캐시가 모두 만료된 뒤(2027-02 이후)에는 지워도 된다.
(function () {
  var KEY = "dk-stale-bundle-reload";
  var reloaded = false;
  try {
    reloaded = sessionStorage.getItem(KEY) === "1";
    sessionStorage.setItem(KEY, "1");
  } catch (e) {}
  if (reloaded) return;
  fetch(location.href, { cache: "reload", credentials: "same-origin" })
    .catch(function () {})
    .then(function () {
      location.reload();
    });
})();
