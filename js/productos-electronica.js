// 1. Generar las tarjetas de producto con un bucle
        // (mucho más práctico que escribir cada bloque de HTML a mano;
        // si mañana cambian las fotos o el formato, se cambia en un solo lugar)
        const imageBasePath = '../images/banners/catalogo/productos-electronica/';

        const productImages = [
            'aire_acondicionado_split_milexus_btu.webp',
            'aire_acondicionado_split_saxs12000.webp',
            'batera_porttil_sanmax_bpga2000.webp',
            'batera_porttil_sanmax_bpga3000.webp',
            'cafetera_electrica_4_tazas.webp',
            'cafetera_electrica_6_tazas.webp',
            'calentador_50l.webp',
            'calentador_100l.webp',
            'cocina_electrica_maxi_house.webp',
            'cocina_dual_positano_2200w.webp',
            'cocina_infrarojo_de_dos_hornillas.webp',
            'cogelador_horizontal_250l_modelo_sax250.webp',
            'cogelador_horizontal_300l_modelo_sax300.webp',
            'congelador_horizontal_170l.webp',
            'controlador_automatico_para_bomba_de_agua.webp',
            'fregona_mical_amarilla_rec.webp',
            'freidora.webp',
            'lavadora_automatica_8kg.webp',
            'lavadora_automatica_de_11kilos.webp',
            'lavadora_automatica_gris.webp',
            'lavadora_automatica_inverter_9kg.webp',
            'lavadora_secadora_10kg.webp',
            'lavadora_semiautomatica.webp',
            'lavadora_semiautomatica_8kg.webp',
            'lonchera_electrica_para_calentar_alimento.webp',
            'merenguera_de_mano.webp',
            'microonda_11_gris.webp',
            'nevera_horizontal_milexus_mlcf_piesl.webp',
            'olla_arrocera_modelo_sax15l.webp',
            'olla_multiproposito_sm5090d.webp',
            'paneles_solares_para_power_stations_120w.webp',
            'refrigerador_8.8.webp',
            'refrigerador_milexus_mlre_cuft_inox.webp',
            'regulador_de_voltaje_220v.webp',
            'sandwichera_2_rebanadas_negra.webp',
            'ventilador_de_pedestal_sanmax_16_pulgadas_con_panel_solar.webp',
            'ventilador_de_mesa_sax_ts4534.webp',
            'ventilador_solar_recargable_de_16_pulgadas_stavel.webp',
            'ventilador_de_pared_18_royal.webp'
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
