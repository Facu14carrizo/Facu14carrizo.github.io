function loadSection(section) {
    const content = document.getElementById('content');
    
    let htmlContent = '';

    switch(section) {
        case 'sobre-mi':
            htmlContent = `
                <section id="sobre-mi" class="intro">
                    <div class="image-container">
                        <img src="../Assets/Yo.jpeg" alt="Mi foto" class="profile-img">
                        <img src="../Assets/BlackHole_Icon.gif" alt="Icono de Agujero Negro" class="icon-img">
                    </div>
                    <h2>Tigre, Buenos Aires, Argentina 🚩</h2>
                    <p>🪐☄✨🌌</p>

                    <h2>Sobre mí:</h2>
                    <p>¡Hola a todos! Soy un apasionado por la tecnología y busco oportunidades para aplicar mis habilidades en el desarrollo de soluciones innovadoras en equipos colaborativos. Me encanta aprender y enfrentar nuevos desafíos en el campo de la programación.</p>

                    <h2>Habilidades Técnicas</h2>
                    <ul class="skills-list">
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Python (Django)</li>
                        <li>C++</li>
                        <li>MySQL</li>
                        <li>CSS y Bootstrap</li>
                        <li>AutoDesk AutoCAD</li>
                        <li>Adobe Photoshop</li>
                        <li>Microsoft Office</li>
                        <li>FL Studio</li>
                    </ul>
                </section>`;
            break;
        
        case 'proyectos':
            htmlContent = `
                <section id="proyectos">
                    <h2>Proyectos Destacados</h2>
                    <!-- Aquí puedes agregar información sobre tus proyectos -->
                    <p>Aquí puedes incluir una breve descripción de tus proyectos más relevantes.</p>

                    <!-- Ejemplo de un proyecto -->
                    <div class="project-card">
                        <h3>Proyecto 1: Nombre del Proyecto</h3>
                        <p>Descripción breve del proyecto, tecnologías utilizadas y resultados obtenidos.</p>
                    </div>

                    <!-- Más proyectos pueden ser añadidos aquí -->
                </section>`;
            break;

        case 'hobbies':
            htmlContent = `
                <section id="hobbies">
                    <h2>Hobbies e Intereses</h2>
                    <p>Aparte de la programación, disfruto de:</p>
                    <ul class="hobbies-list">
                        <li>Ciencia ficción y lectura.</li>
                        <li>Tocar el bajo y la música.</li>
                        <li>Explorar el espacio y la astronomía.</li>
                    </ul>
                </section>`;
            break;

        case 'contacto':
            htmlContent = `
                <section id="contacto">
                    <h2>Contacto</h2>
                    <!-- Formulario de contacto -->
                    <form id="contact-form" action="#" method="post">
                        <label for="name">Nombre:</label><br />
                        <input type="text" id="name" name="name" required aria-label="Nombre"><br />

                        <label for="email">Email:</label><br />
                        <input type="email" id="email" name="email" required aria-label="Email"><br />

                        <label for="message">Mensaje:</label><br />
                        <textarea id="message" name="message" rows="4" required aria-label="Mensaje"></textarea><br />

                        <button type="submit">Enviar Mensaje</button>
                    </form>

                    <!-- Información de contacto adicional -->
                    <ul class="contact-list">
                        <li>Teléfono: (+54) 9 11 6370-4522</li>
                        <li>Email: Facu14carrizo@gmail.com</li>
                    </ul>
                </section>`;
            break;

        default:
            htmlContent = '<p>Error: Sección no encontrada.</p>';
            break;
    }

    content.innerHTML = htmlContent; // Cargar contenido dinámico
}