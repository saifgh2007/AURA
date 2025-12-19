document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        observer.observe(el);
    });

    // Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        // Handle wrapping
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    if (slides.length > 0) {
        // Event Listeners
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlideShow();
            startSlideShow(); // Reset timer
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlideShow();
            startSlideShow(); // Reset timer
        });

        // Start auto-play
        startSlideShow();
    }

    // Parallax Effect (Modified for slider container)
    const heroSlider = document.getElementById('hero-slider');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight && heroSlider) {
            heroSlider.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    });

    // Hero Title Scroll Animation - Initial zoom then scroll-based zoom
    const heroTitle = document.getElementById('hero-title');

    if (heroTitle) {
        // Set initial tiny state before animation
        heroTitle.style.transform = 'scale(0.001)';
        heroTitle.style.opacity = '0';

        // Start the animation after a brief delay
        setTimeout(() => {
            heroTitle.classList.add('initial-load');
        }, 100);

        // After initial animation completes, enable scroll-based zoom
        setTimeout(() => {
            heroTitle.classList.remove('initial-load');
            // Ensure it stays at normal visual size
            heroTitle.style.transform = 'scale(1)';
            heroTitle.style.opacity = '1';

            // Enable scroll-based zoom
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                const heroHeight = window.innerHeight;

                // Calculate scroll progress (0 to 1)
                const scrollProgress = Math.min(scrollY / (heroHeight * 0.8), 1);

                if (scrollY < heroHeight) {
                    // Zoom from 1 (normal) to 30 (massive) as user scrolls down
                    // Formula: start + (range * progress)
                    // Range = 30 - 1 = 29
                    const scale = 1 + (29 * scrollProgress);
                    const opacity = 1 - (0.8 * scrollProgress); // Fade out faster

                    heroTitle.style.transform = `scale(${scale})`;
                    heroTitle.style.opacity = opacity;
                }
            });
        }, 1300); // Wait for animation to complete (1.2s + 100ms)
    }

    // Placeholder Image Loader (Simulating lazy load or just handling the divs)
    // In a real scenario, we would replace the divs with <img> tags once we have the URLs.
    // For now, we will leave them as divs with background images set via inline style or CSS.

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Language Localization
    const translations = {
        en: {
            brand: "AURA",
            nav_about_us: "Philosophy",
            nav_philosophy: "Philosophy",
            nav_signature: "Legacy",
            nav_portfolio: "Services",
            nav_contact: "Contact Us",
            hero_title: "AURA",
            hero_subtitle: "We design life",
            hero_cta: "Discover Our Sanctuaries",
            hero_tagline: "We craft opulence rooted in authenticity and sculpted by light and serenity",
            about_title: "The Philosophy",
            about_text: "Luxury is not necessarily loud. We create a unique balance between absolute opulence in design details and static calmness in the space. We are inspired by the ancient memory of the UAE desert and sea, translated into a contemporary design language.",
            features_title: "Legacy",
            features_subtitle: "When design speaks in silence",
            legacy_intro: "We take pride in spaces where we've rearranged their emotions",
            legacy_item_1: "Luxury Residential Design",
            legacy_item_2: "Elegant Commercial Design",
            legacy_item_3: "Interior Design for Hospitality Projects",
            legacy_item_4: "Interior Design for Commercial Banks",
            legacy_item_5: "Exterior Space Design",
            feature_1_title: "The Liquid Wall",
            feature_1_desc: "Walls of cast gypsum or carved wood with organic lines inspired by desert sand, creating a dramatic play of light and shadow.",
            feature_2_title: "Light Sculpting",
            feature_2_desc: "Contemporary Mashrabiya openings that allow light to paint moving patterns throughout the day.",
            feature_3_title: "The Material Surprise",
            feature_3_desc: "Innovative use of traditional materials, such as \"Marble Carpets\" (marble flooring mimicking Bedouin rugs).",
            portfolio_title: "Services",
            services_intro: "At AURA, we don't just present a list of services... we build comprehensive design experiences that redefine the relationship between people and place. We accompany the client from the first idea to the completion of details, to create a space that pulses with serenity, light, and beauty.",
            services_subheading: "AURA Services",
            portfolio_tag_1: "Luxury Residential Villas",
            portfolio_tag_2: "Apartments & Residences",
            portfolio_tag_3: "Unique Spaces",
            portfolio_tag_4: "Offices / Commercial Projects",
            footer_tagline: "Where calmness takes root in every opulent detail.",
            contact_title: "Contact Us",
            contact_subtitle: "AURA welcomes you ... Connect with us",
            contact_btn: "Send Us Your Vision!",
            about_title_new: "Philosophy",
            about_main_text: "At AURA, we do not design walls... we design life. We believe that design is not a luxury, but the design of a life filled with serenity, light, and beauty.",
            about_values_title: "AURA Values",
            val_1_title: "Authenticity:",
            val_1_desc: "Respecting roots and the cultural identity of the place.",
            val_2_title: "Serenity:",
            val_2_desc: "Making serenity the center of the sensory experience.",
            val_3_title: "Refined Simplicity:",
            val_3_desc: "Pure aesthetics, luxurious without complexity.",
            val_4_title: "Humanity:",
            val_4_desc: "Design that places the human at the heart of the decision.",
            val_5_title: "Innovation:",
            val_5_desc: "The constant search for creative solutions that enrich the experience.",
            about_us_tagline: "We design life"
        },
        ar: {
            brand: "AURA",
            nav_about_us: "فلسفة",
            nav_philosophy: "الفلسفة",
            nav_signature: "إرث",
            nav_portfolio: "خدمات",
            nav_contact: "تواصل معنا",
            hero_title: "AURA",
            hero_subtitle: "We design life",
            hero_cta: "اكتشف ملاذاتنا",
            hero_tagline: "نصنع فخامة متجذرة بالأصالة ومنحوتة بالنور والسكينة",
            about_title: "الفلسفة",
            about_text: "الفخامة ليست بالضرورة صاخبة. نحن نحقق توازناً فريداً بين الترف المطلق في تفاصيل التصميم والهدوء الساكن في حضور المساحة. نستلهم الذاكرة العريقة لصحراء وبحر الإمارات، ونصوغها بلغة تصميم معاصرة.",
            features_title: "AURA إرث",
            features_subtitle: "حين يتحدث التصميم بصمت",
            legacy_intro: "نفتخر بمساحات أعدنا ترتيب مشاعرها",
            legacy_item_1: "تصميم سكني فاخر",
            legacy_item_2: "تصميم تجاري راقٍ",
            legacy_item_3: "تصميم داخلي للمشاريع الفندقية",
            legacy_item_4: "تصميم داخلي للبنوك التجارية",
            legacy_item_5: "تصميم المساحات الخارجية",
            feature_1_title: "الجدار السائل",
            feature_1_desc: "جدران من الجبس المصبوب أو الخشب المحفور بخطوط عضوية مستوحاة من رمال الصحراء، تخلق تلاعباً درامياً بالضوء والظل.",
            feature_2_title: "نحت الضوء",
            feature_2_desc: "فتحات مشربية معاصرة تسمح للضوء برسم أنماط متحركة طوال اليوم.",
            feature_3_title: "مفاجأة المواد",
            feature_3_desc: "استخدام مبتكر للمواد التقليدية، مثل \"سجاد الرخام\" (أرضيات رخامية تحاكي السجاد البدوي).",
            portfolio_title: "AURA خدمات",
            services_intro: "في AURA لا نعرض قائمة خدمات فحسب ... بل نبني تجارب تصميمية متكاملة تُعيد تعريف العلاقة بين الإنسان والمكان نرافق العميل من الفكرة الأولى حتى اكتمال التفاصيل، ليولد فضاء ينبض بالسكينة والضوء والجمال",
            services_subheading: "خدمات AURA",
            portfolio_tag_1: "فلل سكنية فاخرة",
            portfolio_tag_2: "شقق ومساكن",
            portfolio_tag_3: "مساحات فريدة",
            portfolio_tag_4: "مكاتب/ مشاريع تجارية",
            footer_tagline: "حيث يتجذر الهدوء في كل تفصيل مترف.",
            contact_title: "تواصل معنا",
            contact_subtitle: "AURA ترحب بكم ... تواصل معها",
            contact_btn: "أرسل لنا رؤيتك!",
            about_title_new: "AURA فلسفة",
            about_main_text: "في AURA، نحن لا نصمّم الجدران... نحن نصمم الحياة. نؤمن أن التصميم ليس رفاهية، بل تصميم حياة حياة مليئة بالسكينة والضوء والجمال.",
            about_values_title: "قيم AURA",
            val_1_title: "الأصالة:",
            val_1_desc: "احترام الجذور والهوية الثقافية للمكان.",
            val_2_title: "الهدوء:",
            val_2_desc: "جعل السكينة محور التجربة الحسية.",
            val_3_title: "البساطة الراقية:",
            val_3_desc: "جماليات نقية، فاخرة بلا تعقيد.",
            val_4_title: "الإنسانية:",
            val_4_desc: "تصميم يضع الإنسان في قلب القرار.",
            val_5_title: "الابتكار:",
            val_5_desc: "البحث الدائم عن حلول خلاّقة تُثري التجربة.",
            about_us_tagline: "We design life"
        }
    };

    const langToggleEn = document.getElementById('lang-en');
    const langToggleAr = document.getElementById('lang-ar');

    // Check localStorage or default to AR
    const currentLang = localStorage.getItem('aura_language_preference') || 'en';
    setLanguage(currentLang);

    if (langToggleEn && langToggleAr) {
        langToggleEn.addEventListener('click', () => setLanguage('en'));
        langToggleAr.addEventListener('click', () => setLanguage('ar'));
    }

    function setLanguage(lang) {
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update Toggle State
        if (lang === 'en') {
            langToggleEn.classList.add('active');
            langToggleAr.classList.remove('active');
        } else {
            langToggleAr.classList.add('active');
            langToggleEn.classList.remove('active');
        }

        // Save Preference
        localStorage.setItem('aura_language_preference', lang);
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = document.documentElement.lang === 'ar' ? "جاري الإرسال..." : "Sending...";

            const formData = new FormData(contactForm);

            fetch("https://formsubmit.co/ajax/saifgh2007@gmail.com", {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    const currentLang = document.documentElement.lang;
                    const message = currentLang === 'ar'
                        ? "شكراً لتواصلك معنا! سنقوم بالرد عليك قريباً."
                        : "Thank you for contacting us! We will get back to you soon.";
                    alert(message);
                    contactForm.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                    const currentLang = document.documentElement.lang;
                    const message = currentLang === 'ar'
                        ? "عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى."
                        : "Sorry, something went wrong. Please try again.";
                    alert(message);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalBtnText;
                });
        });
    }
});
