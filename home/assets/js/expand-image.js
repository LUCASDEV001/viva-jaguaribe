function expandImage(t) {
  var e = document.createElement("div");
  e.classList.add(
    "fixed",
    "inset-0",
    "z-50",
    "bg-black",
    "bg-opacity-80",
    "flex",
    "items-center",
    "justify-center"
  );
  var n = document.createElement("img");
  (n.src = t.previousElementSibling.src),
    n.classList.add(
      "max-h-full",
      "max-w-full",
      "expandedImg",
      "transition-opacity",
      "duration-500",
      "ease-in-out"
    );
  var i = document.createElement("div");
  i.classList.add(
    "absolute",
    "md:bottom-0",
    "left-0",
    "p-4",
    "text-white",
    "bg-black",
    "bg-opacity-25",
    "w-full",
    "text-center",
    "opacity-0",
    "hover:opacity-100",
    "transition-opacity",
    "duration-300",
    "ease-in-out",
    "md:hidden"
  );
  t = t.previousElementSibling.dataset.explanation;
  i.innerText = t;
  t = document.createElement("button");
  (t.innerHTML = "&#10005;"),
    t.classList.add(
      "absolute",
      "top-0",
      "right-0",
      "m-2",
      "text-white",
      "text-3xl",
      "bg-black",
      "opacity-50",
      "hover:opacity-75",
      "focus:outline-none",
      "transition-opacity",
      "duration-300",
      "ease-in-out"
    ),
    e.appendChild(n),
    e.appendChild(i),
    e.appendChild(t),
    document.body.appendChild(e),
    requestAnimationFrame(function () {
      (n.style.opacity = "1"), (i.style.opacity = "1");
    });
  function a() {
    requestAnimationFrame(function () {
      (n.style.opacity = "0"), (i.style.opacity = "0");
    }),
      setTimeout(function () {
        document.body.removeChild(e);
      }, 500);
  }
  (e.onclick = t.onclick = a),
    (document.onkeydown = function (t) {
      "Escape" === (t = t || window.event).key && a();
    });
}
