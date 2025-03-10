/**
* Template Name: Append
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


function openGmail(){
  let email = "sakhafbi@gmail.com";
  let subject = "Sakhâ FBI : Appel aux dons et aux partenaires "

  let gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
  window.open(gmailUrl, '_blank');

}

const translations = {
  "fr": {
      "title": "Sakhâ, Food Banking Initiative",
      "home": "Accueil",
      "about": "A propos",
      "objectifs": "Objectifs",
      "reasons": "Raisons",
      "activities" : "Activités",
      "team" : "Team",
      "contact" : "contact",
      "who_we_are" :"Qui sommes-nous ?",
      "slogant" : "Ensemble, construisons un Congo sans faim.",
      "slogant_2" :  "SAKHÂ FBI, la première banque alimentaire de l’Est de la RDC, lutte contre la faim et la malnutrition.",
      "save_as" : "S'enregistrer",
      "we_are" : "Nous sommes",
      "we_are_congo" : "Un Congo où la faim n'a pas sa place avec Sakha FBI",
      "we_are_1" : "L’Initiative Sakha est une organisation pionnière dans la lutte contre la faim et la malnutrition dans l’Est de la RDC. Première banque alimentaire officielle de la région, elle relie un monde d’abondance à un monde de besoins en collectant et redistribuant des denrées alimentaires grâce à un réseau d’acteurs locaux et internationaux.",
      "we_are_2" : "Notre mission est de réduire l’insécurité alimentaire et d’autonomiser les communautés grâce à des solutions durables, incluant l’aide alimentaire, l’éducation nutritionnelle, et la promotion de pratiques agricoles résilientes.",
      "vision": "Construire un Congo ou la faim et la manultrition n'ont plus de place.",
      "mission": "Réduire l’insécurité alimentaire en garantissant un accès équitable",
      "values": "Valeurs",
      "values_1": "Solidarité, durabilité et impact sont au coeur de nos engagements quotidiens.",
      "engagement": "Engagement social",
      "engagement_1" : "Autonomiser les communautés vulnérables pour qu'elles deviennent résilientes face à la faim.",
      "bank_title": "Banque alimentaire",
      "bank" : "C'est quoi une banque alimentaire ?",
      "bank_1" : "Une banque alimentaire est une organisation qui collecte, stocke et redistribue des denrées alimentaires aux personnes en situation d'insécurité alimentaire.",
      "bank_2" : "Elle joue un rôle d'intermédiaire entre les producteurs (agriculteurs, industries agroalimentaires, supermarchés, restaurants, etc.) et les bénéficiaires (familles vulnérables, associations caritatives, centres de nutrition, camps de réfugiés, etc.).",
      "bank_fonct_3" : "Comment fonctionne une banque alimentaire ?",
      "bank_fonct_3_1" : "Collecte des denrées : Les aliments sont récupérés auprès des agriculteurs, des entreprises agroalimentaires, des supermarchés, des restaurants et des particuliers. Il s'agit souvent de produits invendus mais encore consommables.",
      "bank_fonct_3_2" : "Stockage et gestion : Les denrées sont triées, stockées et gérées pour garantir leur sécurité alimentaire.",
      "bank_fonct_3_3" : "Distribution : Les aliments sont redistribués aux associations, ONG, centres de nutrition et bénéficiaires finaux sous forme de colis alimentaires ou de repas.",
      "helpers": "Personnes aidés",
      "quantity": "Quantité de nourriture distribuée(Kg)",
      "network" : "Réseaux communautaires crées",
      "impact": "Impact(%)",
      "object": "Objectifs",
      "object_1": "Nos objectifs pour un avenir meilleur",
      "aliment": "Alimentation pour tous",
      "aliment_1": "Augmenter le pourcentage de personnes en situation de crise alimentaire dans l’Est de la RDC qui bénéficient d’un accès rapide à une alimentation de qualité de 0% à 75% d’ici 2040.",
      "netcom": "Réseaux communautaires",
      "netcom_1": "Établir 10 réseaux communautaires de production et de distribution alimentaire dans l’est de la RDC d’ici 2030 pour améliorer la sécurité alimentaire et autonomiser les communautés locales.",
      "loseRed": "Réduction des pertes",
      "loseRed_1": "Réduire de 20 % d’ici 2035 les scores moyens quotidiens d’insécurité alimentaire et de gaspillage alimentaire, basés sur des outils d’évaluation validés, dans l’est de la RDC.",
      "women": "Femmes autonomes",
      "women_1": "Autonomiser économiquement 400 femmes chaque année pour les aider à surmonter la pauvreté et à acquérir des moyens de subsistance résilients.",
      "durable": "Agriculture durable",
      "durable_1": "Promouvoir des pratiques agricoles durables et diversifiées qui permettent aux agriculteurs de s’adapter au changement climatique, d’augmenter la production locale et de soutenir le système des banques alimentaires.",
      "reasons_2c": "Sakhâ FBI, tire sa fondation des multiples questions et raisons.",
      "filied": "Notre champ d'action",
      "filied_1": "Nous concentrons nos efforts sur les populations les plus vulnérables : les enfants souffrant de malnutrition, les mères enceintes et allaitantes, ainsi que les réfugiés. Notre objectif est de prévenir les conséquences graves de la faim et de la malnutrition, telles que les décès prématurés, le retard de croissance, les maladies chroniques, la baisse des résultats scolaires et l’improductivité.",
      "what": "Pourquoi y a-t-il de l'incécurité alimentaire ?",
      "cause": "Les causes de l’insécurité alimentaire en RDC sont multiples et varient largement selon les provinces (régions). Certaines régions :",
      "cause_1": "Les difficultés de production : fortes pluies et inondations, insuffisance de main d’œuvre, maladies des plantes, épidémies de ravageurs, manque d'accès à des semences et à des engrais de bonne qualité en quantité suffisante et accès limité aux machines.",
      "cause_2": "Dans les vastes terres arables et fertiles où la production agricole est abondante, les problèmes sont principalement dus à la violence ou à l’insécurité/au conflit, au mauvais état des routes reliant.",
      "ask": "Questions",
      "ask_1": "La lutte contre l'insécurité alimentaire ne se limite pas à la production et à la distribution des aliments. Elle implique également une réflexion sur la gestion des ressources disponibles et la réduction du gaspillage.",
      "ask_2": "Alors que des millions de personnes souffrent de la faim, une quantité considérable de nourriture est perdue ou jetée chaque jour. Comprendre les causes et les étapes de cette perte est essentiel pour mettre en place des solutions efficaces et durables.",
      "gaspillage": "Peut-on parler de gaspillage alimentaire ou de perte alimentaire ?",
      "gaspillage_1": "L’une des premières distinctions à établir est celle entre gaspillage et perte alimentaire. Ces deux phénomènes, bien que liés, n’interviennent pas au même stade de la chaîne alimentaire. Quelles sont les différences entre ces deux concepts et comment influencent-ils la disponibilité des ressources alimentaires ?",
      "qnte": "Quelle quantité de produits alimentaires est gaspillée ou perdue ?",
      "qnte_1": "La quantité de nourriture gaspillée ou perdue chaque année reste une question cruciale. Combien de tonnes de denrées alimentaires ne parviennent jamais aux consommateurs ? Quelles sont les principales causes de cette perte et comment les mesurer de manière fiable ?",
      "steps": "À quelles étapes faut-il intervenir pour s’attaquer efficacement au problème ?",
      "steps_1": "Identifier les moments clés où les pertes alimentaires surviennent est essentiel pour élaborer des stratégies de réduction efficaces. Quels sont les maillons de la chaîne d’approvisionnement où ces pertes sont les plus importantes ? Comment les acteurs impliqués peuvent-ils adapter leurs pratiques pour minimiser ces pertes et optimiser l’utilisation des ressources ?",
      "our_activities": "Nos Activités",
      "our_activities_1": "Nos activités se sont déroulées dans des hôpitaux, des orphélinats et dans des camps de réfugiés",
      "team_1": "Voici les membres de la  coordination et de l'éxécutif de Sakhâ FBI",
      "call": "Appel à l'action",
      "call_1": "Si vous êtes intéressé et que vous voulez contribuer à la vision de Sakhâ FBI en tant que partenaire(personne, ménage, supermarché, organisation,etc.) vous pouvez nous contacter ici.",
      "clique_ici": "Cliquez-ici",
      "contact_1": "Vous pouvez nous trouvez en vous référant sur ces informations.",
      "adress": "Adresse",
      "call_us": "Appelez-nous ",
      "write_us": "Ecrivez-nous",
      "if_following": "Si vous voulez nous suivre, les actions de Sakhâ Food Banking Initiative, vous pouvez nous suivre sur nos différents réseaux sociaux.",
      "link_useless": "Liens utiles",
      "serv_col": "Collecte",
      "serv_stok": "Stockage",
      "serv_con": "Concervation",
      "serv_dist": "Distribution",
      "contact_us": "Contactez-nous",
  },
  "en": {
      "title": "Sakhâ, Food Banking Initiative",
      "home": "Home",
      "about": "About",
      "objectifs": "Goals",
      "reasons": "Reasons",
      "activities" : "activities",
      "team" : "Team",
      "contact" : "contact",
      "who_we_are" :"Who are we?",
      "slogant" : "Together, let's build a hunger-free Congo.",
      "slogant_2" :  "SAKHÂ FBI, the first food bank in Eastern DRC, fights against hunger and malnutrition.",
      "save_as" : "Register",
      "we_are" : "We are",
      "we_are_congo" : "A Congo where hunger has no place with Sakha FBI",
      "we_are_1" : "The Sakha Initiative is a pioneering organization in the fight against hunger and malnutrition in Eastern DRC. As the first official food bank in the region, it connects a world of abundance to a world of needs by collecting and redistributing food through a network of local and international actors.",
      "we_are_2" : "Our mission is to reduce food insecurity and empower communities through sustainable solutions, including food aid, nutrition education, and the promotion of resilient agricultural practices.",
      "vision": "Building a Congo where hunger and malnutrition no longer exist.",
      "mission": "Reducing food insecurity by ensuring equitable access.",
      "values": "Values",
      "values_1": "Solidarity, sustainability, and impact are at the heart of our daily commitments.",
      "engagement": "Social commitment",
      "engagement_1" : "Empowering vulnerable communities to become resilient against hunger.",
      "bank_title": "Food Bank",
      "bank" : "What is a food bank?",
      "bank_1" : "A food bank is an organization that collects, stores, and redistributes food to people experiencing food insecurity.",
      "bank_2" : "It acts as an intermediary between producers (farmers, food industries, supermarkets, restaurants, etc.) and beneficiaries (vulnerable families, charitable organizations, nutrition centers, refugee camps, etc.).",
      "bank_fonct_3" : "How does a food bank work?",
      "bank_fonct_3_1" : "Food collection: Food is collected from farmers, food companies, supermarkets, restaurants, and individuals. These are often unsold but still consumable products.",
      "bank_fonct_3_2" : "Storage and management: Food is sorted, stored, and managed to ensure its safety.",
      "bank_fonct_3_3" : "Distribution: Food is redistributed to associations, NGOs, nutrition centers, and final beneficiaries in the form of food parcels or meals.",
      "helpers": "People helped",
      "quantity": "Quantity of food distributed (Kg)",
      "network" : "Community networks created",
      "impact": "Impact (%)",
      "object": "Goals",
      "object_1": "Our goals for a better future",
      "aliment": "Food for all",
      "aliment_1": "Increase the percentage of people in food crisis in Eastern DRC who have quick access to quality food from 0% to 75% by 2040.",
      "netcom": "Community networks",
      "netcom_1": "Establish 10 community-based food production and distribution networks in Eastern DRC by 2030 to improve food security and empower local communities.",
      "loseRed": "Loss reduction",
      "loseRed_1": "Reduce average daily food insecurity and food waste scores by 20% by 2035, based on validated assessment tools, in Eastern DRC.",
      "women": "Empowered women",
      "women_1": "Economically empower 400 women each year to help them overcome poverty and gain resilient livelihoods.",
      "durable": "Sustainable agriculture",
      "durable_1": "Promote sustainable and diversified agricultural practices that enable farmers to adapt to climate change, increase local production, and support the food banking system.",
      "reasons_2c": "Sakhâ FBI is founded on multiple questions and reasons.",
      "filied": "Our field of action",
      "filied_1": "We focus our efforts on the most vulnerable populations: malnourished children, pregnant and breastfeeding mothers, and refugees. Our goal is to prevent the severe consequences of hunger and malnutrition, such as premature deaths, stunted growth, chronic diseases, poor academic performance, and reduced productivity.",
      "what": "Why is there food insecurity?",
      "cause": "The causes of food insecurity in DRC are multiple and vary widely by province (region). Some regions:",
      "cause_1": "Production difficulties: heavy rains and floods, labor shortages, plant diseases, pest outbreaks, lack of access to quality seeds and fertilizers in sufficient quantities, and limited access to machinery.",
      "cause_2": "In vast, fertile arable lands where agricultural production is abundant, the main issues stem from violence or insecurity/conflict, as well as poor road conditions.",
      "ask": "Questions",
      "ask_1": "Fighting food insecurity is not just about producing and distributing food. It also involves reflecting on resource management and waste reduction.",
      "ask_2": "While millions of people suffer from hunger, a considerable amount of food is lost or wasted every day. Understanding the causes and stages of this loss is essential for implementing effective and sustainable solutions.",
      "gaspillage": "Is it food waste or food loss?",
      "gaspillage_1": "One of the first distinctions to establish is between food waste and food loss. Although related, these two phenomena occur at different stages of the food chain. What are the differences between these concepts, and how do they impact food availability?",
      "qnte": "How much food is wasted or lost?",
      "qnte_1": "The amount of food wasted or lost each year remains a critical issue. How many tons of food never reach consumers? What are the main causes of this loss, and how can they be reliably measured?",
      "steps": "At what stages should we intervene to tackle the problem effectively?",
      "steps_1": "Identifying the key moments when food losses occur is essential for developing effective reduction strategies. Which links in the supply chain experience the most significant losses? How can stakeholders adjust their practices to minimize these losses and optimize resource use?",
      "our_activities": "Our Activities",
      "our_activities_1": "Our activities have taken place in hospitals, orphanages, and refugee camps.",
      "team_1": "Here are the members of the coordination and executive team of Sakhâ FBI.",
      "call": "Call to action",
      "call_1": "If you are interested and want to contribute to Sakhâ FBI's vision as a partner (individual, household, supermarket, organization, etc.), you can contact us here.",
      "clique_ici": "Click here",
      "contact_1": "You can find us using the following information.",
      "adress": "Address",
      "call_us": "Call us",
      "write_us": "Write to us",
      "if_following": "If you want to follow Sakhâ Food Banking Initiative's actions, you can follow us on our social media platforms.",
      "link_useless": "Useful links",
      "serv_col": "Collection",
      "serv_stok": "Storage",
      "serv_con": "Preservation",
      "serv_dist": "Distribution",
      "contact_us": "Contact us",
  }
};

    // Fonction pour changer la langue
    function changeLanguage(lang) {
      document.querySelectorAll("[data-key]").forEach(element => {
          const key = element.getAttribute("data-key");
          element.textContent = translations[lang][key];
      });
  }

  // Écouteur sur le sélecteur
  document.getElementById("language-selector").addEventListener("change", function() {
      changeLanguage(this.value);
  });

  // Langue par défaut
  changeLanguage("en");
