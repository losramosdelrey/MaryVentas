// 1. Generar las tarjetas de producto con un bucle
        // (mucho más práctico que escribir cada bloque de HTML a mano;
        // si mañana cambian las fotos o el formato, se cambia en un solo lugar)
        const imageBasePath = '../images/banners/catalogo/productos-calzado/';

        const productImages = [
            'alpargatas_blancas_de_mujer.webp',
            'alpargatas_negras_de_mujer.webp',
            'bolso_bandolera_barmelita_benzi.webp',
            'bolso_de_viaje_con_ruedas_azul_benzi.webp',
            'bolso_de_viaje_extensible_con_ruedas_benzi.webp',
            'bolso_neceser_para_caballero_benzi.webp',
            'chancletas_2go_od_300x300.webp',
            'chancletas_de_mujer_helechos.webp',
            'chancletas_de_mujer_naranjas.webp',
            'chancletas_de_mujer_palmeras.webp',
            'chancletas_para_hombre_molser_300x300.webp',
            'chancletas_surf_300x300.webp',
            'Chancletas_TONY_300x300.webp',
            'cinto_de_nailon_con_trinquete_para_hombre.webp',
            'cinturones_automaticos_de_cuero_para_hombres.webp',
            'cinturon_automatico_de_cuero_para_hombre.webp',
            'cinturon_de_piel_cubana_para_hombre.webp',
            'cinturon_de_piel_de_vacuno_de_alta_calidad_con_hebilla.webp',
            'cinturon_largo_para_hombre_bruce.webp',
            'cinturon_para_Hombre,_cinturones_de_golf_elastico.webp',
            'cinturon_vaquero_con_borde_crudo_para_hombre.webp',
            'cinturones_de_cuero_dividido_con_costuras_cuero.webp',
            'cinturones_de_piel_dividida_con_hebilla_automatica.webp',
            'crocs_confort_300x300.webp',
            'crocs_confort_west_air_300x300.webp',
            'crocs_plataforma_para_ninas_300x300.webp',
            'demin_republic_sin_cordones_300x300.webp',
            'elegante_zapato_marron_para_hombre_con_doble_hebilla.webp',
            'estuche_para_viaje_color_azul_benzi.webp',
            'cinturon_de_piel_de_vacuno_de_alta_calidad.webp',
            'lederen_riem_heren_600x600.webp',
            'mocasines_para_caballeros_300x300.webp',
            'bolso_guardatodo_benzi.webp',
            'sandalias_conejito_kiss_300x300.webp',
            'sandalias_estilo_chic_300x300.webp',
            'sandalias_hebilla_metalica_300x300.webp',
            'sandalias_one_piece_300x300.webp',
            'shark_slides_300x300.webp',
            'splitlederen_riem_met_automatische.webp',
            'tacos_zipper_300x300.webp',
            'tenis_deportivos_para_mujer_negro_rosa.webp',
            'tenis_lescon_casuales_300x300.webp',
            'tenis_lescon_juvenil_300x300.webp',
            'tenis_unisex_lescon_300x300.webp',
            'zapatilla_blancas_britts_300x300.webp',
            'zapatillas_negras_britts_300x300.webp',
            'zapatillas_de_correr_para_mujer_negro_blanco.webp',
            'zapatillas_loven_para_mujer_negro_978.webp',
            'zapatillas_demi_republic_300x300.webp',
            'zapatillas_jgr_300x300.webp',
            'zapatillas_lescondo_300x300.webp',
            'zapatillas_ogiy_trm_300x300.webp',
            'zapatillas_para_damas_do_300x300.webp',
            'zapatillas_polo_blancas_300x300.webp',
            'zapatillas_polo_negras_300x300.webp',
            'zapatillas_walk_side_300x300.webp',
            'zapatillas_walk_way_300x300.webp',
            'zapatillas_zipper_300x300.webp',
            'zapatos_grises_de_charol_para_hombre_con_estampado.webp',
            'zapatos_henk_ter_horst_color_cofiac_con_hebilla.webp',
            'zapatos_sin_cordones_para_hombre.webp'
        ];

        // Escapa caracteres especiales (& < > ") para que el HTML generado sea válido
        function escapeHtml(str) {
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        }

        const productGrid = document.getElementById('productGrid');
        let cardsHTML = '';

        productImages.forEach((fileName, index) => {
            const num = index + 1;
            // Nombre para mostrar: quita la extensión (.webp o .web) y cambia "_" por espacios
            const displayName = fileName.replace(/\.webp?$/i, '').replace(/_/g, ' ');
            const safeDisplayName = escapeHtml(displayName);
            // Codifica los espacios del nombre de archivo y escapa el "&" para una URL/HTML válidos
            const srcPath = escapeHtml(imageBasePath + fileName.replace(/ /g, '%20'));

            cardsHTML += `
                <div class="product-card">
                    <span class="product-number">#${num}</span>
                    <div class="product-banner">
                        <img src="${srcPath}" alt="${safeDisplayName}" loading="lazy" onerror="imgError(this)">
                    </div>
                    <div class="product-info">
                        <p>${safeDisplayName}: <span class="price">$0.00 USD</span></p>
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
