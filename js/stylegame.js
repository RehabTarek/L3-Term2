const images = [
    'https://i.pinimg.com/474x/2b/0d/3f/2b0d3fe1f577f3599fde9ea5f19dc861.jpg',
    'https://i.pinimg.com/474x/0b/c7/d4/0bc7d4dd1c6dcab57bdb7aff2424f827.jpg',
    'https://i.pinimg.com/474x/ed/6d/06/ed6d06d52800afbe147ec76e08f2b981.jpg',
    'https://i.pinimg.com/474x/24/5b/94/245b94ae2ea6e07c22cb9d0bd48b2c1c.jpg',
    'https://i.pinimg.com/474x/27/67/b6/2767b6b61fb3871459c21c92b9301cdc.jpg',
    'https://i.pinimg.com/736x/cf/13/03/cf1303246741542a9d4570d62224384b.jpg',
  ];
  
  const imageElement = document.getElementById('character-image');
  const button = document.getElementById('generate-btn');
  
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageElement.src = images[randomIndex];
  });
  AOS.init();

  function goHome() {
    window.location.href = "project.html"; // Replace with your homepage path
  }
  
  
