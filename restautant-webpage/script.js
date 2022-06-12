function toggle(x) {
    x.classList.toggle("change");
    let y = document.getElementById("links");
    let z = document.getElementById("nav");
  if (y.style.display === "block") {
    y.style.display = "none";
    z.style.background= 'none';
  } else {
    y.style.display = "block";
    z.style.background= 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))';
  }
  }
  function menuToggle(x)
  { let menuList=document.getElementById('menu-list').children;
  Array.from(menuList).forEach(element => {
    element.style.display='none'
  });
    let items = document.getElementById(x);
      items.style.display='flex';
  }