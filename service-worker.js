self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("habit-cache").then(cache =>
      cache.addAll([
        "./", 
        "./index.html",
        "./images/icon-192.png",  // ← 追加
        "./images/icon-512.png"   // ← 追加
      ])
    )
  );
});
