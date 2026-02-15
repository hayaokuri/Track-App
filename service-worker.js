self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("habit-cache").then(cache =>
      cache.addAll(["./", "./index.html"])
    )
  );
});
