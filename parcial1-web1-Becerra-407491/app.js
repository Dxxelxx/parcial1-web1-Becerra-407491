// Contenido dinámico de la SPA
const content = document.getElementById("content");

const sections = {
  muro: `
    <h2>Muro</h2>
    <p>Aquí aparecen las publicaciones de tus amigos.</p>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="background:#f0f2f5; padding:1rem; border-radius:8px;">📢 Post 1: La vida es dura</div>
      <div style="background:#f0f2f5; padding:1rem; border-radius:8px;">📢 Post 2: La vida pasa volando 🚀</div>
    </div>
  `,
  info: `
    <h2>Información</h2>
    <p><strong>Nombre:</strong> Daniel Becerra</p>
    <p><strong>Ciudad:</strong> Bogota</p>
    <p><strong>Ocupación:</strong> Estudiante de Ingeniería</p>
    <p><strong>Amigos agregados:</strong> 250</p>
    <p><strong>Estado sentimental:</strong> Comprometido 💍</p>
  `,
  photos: `
    <h2>Fotos</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;">
      <img src="https://picsum.photos/200/200?random=1" alt="Foto 1">
      <img src="https://picsum.photos/200/200?random=2" alt="Foto 2">
      <img src="https://picsum.photos/200/200?random=3" alt="Foto 3">
      <img src="https://picsum.photos/200/200?random=4" alt="Foto 4">
      <img src="https://picsum.photos/200/200?random=5" alt="Foto 5">
      <img src="https://picsum.photos/200/200?random=6" alt="Foto 6">
    </div>
  `,
  boxes: `
    <h2>Boxes</h2>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <div style="flex:1; min-width:200px; background:#f0f2f5; padding:1rem; border-radius:8px;">📦 Box 1</div>
      <div style="flex:1; min-width:200px; background:#f0f2f5; padding:1rem; border-radius:8px;">📦 Box 2</div>
      <div style="flex:1; min-width:200px; background:#f0f2f5; padding:1rem; border-radius:8px;">📦 Box 3</div>
    </div>
  `
};

// Evento click en los botones de navegación
document.querySelectorAll(".nav button").forEach(button => {
  button.addEventListener("click", () => {
    const section = button.getAttribute("data-section");
    content.innerHTML = sections[section];
  });
});
