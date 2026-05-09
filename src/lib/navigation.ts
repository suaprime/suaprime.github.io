export const goToHomeSection = (id: string) => {
  const scrollToTarget = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (window.location.hash !== "" && window.location.hash !== "#/") {
    window.location.hash = "/";
    setTimeout(scrollToTarget, 180);
    return;
  }

  scrollToTarget();
};

export const goToRouteTop = (route: string) => {
  const normalized = route.startsWith("/") ? route : `/${route}`;
  const targetHash = `#${normalized}`;

  if (window.location.hash !== targetHash) {
    window.location.hash = normalized;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
