// 1. Generar las tarjetas de producto con un bucle
        // (mucho más práctico que escribir cada bloque de HTML a mano;
        // si mañana cambian las fotos o el formato, se cambia en un solo lugar)
        const imageBasePath = '../images/banners/catalogo/productos-juguetes/';

        // Cada producto tiene el nombre real del archivo (en minúsculas, sin tildes
        // ni espacios, igual que en el servidor) y un nombre de muestra legible
        // para el usuario (con mayúsculas y tildes correctas).
        const productImages = [
            { file: 'accion_y_punteria.webp', name: 'Acción y Puntería' },
            { file: 'animales_y_dinosaurios.webp', name: 'Animales y Dinosaurios' },
            { file: 'armas_para_los_chicos.webp', name: 'Armas para los Chicos' },
            { file: 'avion_alcancia.webp', name: 'Avión Alcancía' },
            { file: 'barbie_extra_mini_mattel.webp', name: 'Barbie Extra Mini Mattel' },
            { file: 'barbie_mov.webp', name: 'Barbie Mov' },
            { file: 'camion_de_traccion.webp', name: 'Camión de Tracción' },
            { file: 'carro_de_munecas.webp', name: 'Carro de Muñecas' },
            { file: 'casita_de_mascota_con_accesorios.webp', name: 'Casita de Mascota con Accesorios' },
            { file: 'casita_de_munecas.webp', name: 'Casita de Muñecas' },
            { file: 'castillo_de_muneca_accesorios.webp', name: 'Castillo de Muñeca Accesorios' },
            { file: 'castillo_de_munecas_accesorios.webp', name: 'Castillo de Muñecas Accesorios' },
            { file: 'dc_batman_24_cm.webp', name: 'DC Batman 24 cm' },
            { file: 'didacticos.webp', name: 'Didácticos' },
            { file: 'disney_princesa_elsa.webp', name: 'Disney Princesa Elsa' },
            { file: 'escopeta_lanza_dardos.webp', name: 'Escopeta Lanza Dardos' },
            { file: 'figura_articulada_stitch.webp', name: 'Figura Articulada Stitch' },
            { file: 'figuras_de_accion.webp', name: 'Figuras de Acción' },
            { file: 'muneca_modelo_morena.webp', name: 'Muñeca Modelo Morena' },
            { file: 'juegos_de_roles.webp', name: 'Juegos de Roles' },
            { file: 'llavero_engomado_stitch.webp', name: 'Llavero Engomado Stitch' },
            { file: 'marvel_ironman_24_cm.webp', name: 'Marvel Ironman 24 cm' },
            { file: 'materiales_escolares.webp', name: 'Materiales Escolares' },
            { file: 'mini_bb_reborn.webp', name: 'Mini BB Reborn' },
            { file: 'moda_infantil.webp', name: 'Moda Infantil' },
            { file: 'muneca_bebe.webp', name: 'Muñeca Bebé' },
            { file: 'munecas.webp', name: 'Muñecas' },
            { file: 'peluche_oso_romantico.webp', name: 'Peluche Oso Romántico' },
            { file: 'peluches.webp', name: 'Peluches' },
            { file: 'perrito_fisher_price.webp', name: 'Perrito Fisher Price' },
            { file: 'pistola_de_hidrogel_azul.webp', name: 'Pistola de Hidrogel Azul' },
            { file: 'pistola_de_hidrogel_verde.webp', name: 'Pistola de Hidrogel Verde' },
            { file: 'pistola_lanza_bolas.webp', name: 'Pistola Lanza Bolas' },
            { file: 'policia_accesorios.webp', name: 'Policía Accesorios' },
            { file: 'raqueta_de_tenis_masha_y_el_oso.webp', name: 'Raqueta de Tenis Masha y el Oso' },
            { file: 'set_de_4_camiones_de_bomberos.webp', name: 'Set de 4 Camiones de Bomberos' },
            { file: 'set_de_4_carros.webp', name: 'Set de 4 Carros' },
            { file: 'soldadito_accesorios.webp', name: 'Soldadito Accesorios' },
            { file: 'suiza_rosada.webp', name: 'Suiza Rosada' },
            { file: 'suiza_violeta.webp', name: 'Suiza Violeta' },
            { file: 'tiro_al_blanco_grande.webp', name: 'Tiro al Blanco Grande' },
            { file: 'vehiculos.webp', name: 'Vehículos' }
        ];

        const productGrid = document.getElementById('productGrid');
        let cardsHTML = '';

        productImages.forEach((product, index) => {
            const num = index + 1;
            const displayName = product.name;
            const srcPath = imageBasePath + product.file;

            cardsHTML += `
                <div class="product-card">
                    <span class="product-number">#${num}</span>
                    <div class="product-banner">
                        <img src="${srcPath}" alt="${displayName}" loading="lazy" onerror="imgError(this)">
                    </div>
                    <div class="product-info">
                        <p>${displayName}: <span class="price">$0.00 USD</span></p>
                    </div>
                </div>
            `;
        });

        productGrid.innerHTML = cardsHTML;

        // Si una imagen no carga (ruta o nombre incorrecto), muestra un texto en su lugar
        function imgError(img) {
            img.onerror = null;
            img.style.display = 'none';
            const fallback = document.createElement('span');
            fallback.className = 'img-fallback';
            fallback.textContent = 'Imagen no disponible';
            img.parentElement.appendChild(fallback);
        }

        // 2. Control del Menú Móvil (igual que en index.html)
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        function closeMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        }

        // 3. Animación de aparición al hacer scroll (igual que en index.html)
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => observer.observe(el));
        });
