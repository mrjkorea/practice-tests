(function () {
  var listEl = document.getElementById("test-list");
  var statusEl = document.getElementById("list-status");

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function renderTests(tests) {
    if (!tests.length) {
      statusEl.hidden = false;
      statusEl.className = "loading";
      statusEl.textContent = "등록된 연습 테스트가 없습니다.";
      listEl.innerHTML = "";
      return;
    }

    statusEl.hidden = true;
    listEl.innerHTML = tests
      .map(function (test) {
        var badges = [];
        if (test.grade) badges.push('<span class="badge">' + escapeHtml(test.grade) + "</span>");
        if (test.subject) badges.push('<span class="badge">' + escapeHtml(test.subject) + "</span>");

        return (
          '<li class="test-card">' +
          '<a class="test-card__link" href="' +
          escapeHtml(test.url) +
          '">' +
          (badges.length ? '<div class="test-card__meta">' + badges.join("") + "</div>" : "") +
          "<h2 class=\"test-card__title\">" +
          escapeHtml(test.title) +
          "</h2>" +
          (test.subtitle
            ? '<p class="test-card__subtitle">' + escapeHtml(test.subtitle) + "</p>"
            : "") +
          '<span class="test-card__cta">테스트 시작<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>' +
          "</a></li>"
        );
      })
      .join("");
  }

  fetch("tests.json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("Failed to load tests.json");
      return res.json();
    })
    .then(renderTests)
    .catch(function () {
      statusEl.hidden = false;
      statusEl.className = "error";
      statusEl.textContent = "목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.";
      listEl.innerHTML = "";
    });
})();
