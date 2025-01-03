// Оптимизированный и адаптированный JavaScript для одностраничного сайта

document.addEventListener("DOMContentLoaded", () => {
    console.log("Winstrike Ufa website is up and running!");

    // Плавная прокрутка к секциям сайта
    document.querySelectorAll(".btn-scroll").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Настройки Swiper.js для новостей и акций
    const swiper = new Swiper(".swiper", {
        speed: 750,
        parallax: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
    });

    // Lazy animations: появление элементов при прокрутке страницы
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Убираем наблюдение после активации
            }
        });
    }, {
        threshold: 0.1, // 10% элемента должно быть видно для активации
    });

    document.querySelectorAll(".animate-on-scroll").forEach(element => {
        observer.observe(element);
    });
});

// Улучшение удобства: навигация с клавиатуры
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const sections = Array.from(document.querySelectorAll("section"));
        const currentIndex = sections.findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });

        let nextIndex = event.key === "ArrowDown" ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex >= 0 && nextIndex < sections.length) {
            sections[nextIndex].scrollIntoView({ behavior: "smooth" });
        }
    }
});
