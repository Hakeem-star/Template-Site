function activeFilter(e, firstClass, activeClass) {
  if (e.target.classList[0] === firstClass) {
    let groupChildren = Array.from(e.target.parentElement.childNodes);
    groupChildren.slice().forEach(ch => {
      // console.log(ch);
      ch.classList.remove(activeClass);
    });
    // console.log(e.target.parentElement, "removed");
    if (!e.target.className.includes(activeClass)) {
      e.target.classList.add(activeClass);
    }
  }
  //console.dir(e.target);
}

export default activeFilter;
