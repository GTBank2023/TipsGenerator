const tips = {
    savings: [
        { imageUrl: "https://i.imgur.com/E9ljOGs.jpg", cta: "Explore our GTSave account", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/savings-account" },
        { imageUrl: "https://i.imgur.com/7tmMhBb.jpg", cta: "Explore our GTSave account", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/savings-account" },
        { imageUrl: "https://i.imgur.com/9wKaBA9.jpg", cta: "Explore our GTSave account", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/savings-account" },
        { imageUrl: "https://i.imgur.com/gHf88Xl.jpg", cta: "Explore our GTSave account", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/savings-account" },
        { imageUrl: "https://i.imgur.com/SQlnv8Z.jpg", cta: "Explore our GTTarget account", link: "#" },
        { imageUrl: "https://i.imgur.com/3N7UBSm.jpg", cta: "Explore our GTTarget account", link: "#" }
    ],
    retirement: [
        { imageUrl: "https://i.imgur.com/lO1PzKl.jpg", cta: "Learn more about our budgeting tools", link: "https://www.gtbank.co.tz/personal-banking/accounts/current-accounts/foreign-currency-account" }
    ],
    students: [
        { imageUrl: "https://i.imgur.com/q0yBKTV.jpg", cta: "Learn about our saving solution for Students", link: "#" },
        { imageUrl: "https://i.imgur.com/I6VUgV5.jpg", cta: "Learn about our saving solution for Students", link: "#" },
        { imageUrl: "https://i.imgur.com/tmyBwaW.jpg", cta: "Learn about our saving solution for Students", link: "#" }
    ],
    business: [
        { imageUrl: "https://i.imgur.com/Np8lwVi.jpg", cta: "Learn about our business account; Kinara", link: "https://www.gtbank.co.tz/business-banking/sme-banking/gt-kinara-account" },
        { imageUrl: "https://i.imgur.com/7cs3A0g.jpg", cta: "Learn about our business account; Kinara", link: "https://www.gtbank.co.tz/business-banking/sme-banking/gt-kinara-account" },
        { imageUrl: "https://i.imgur.com/zi5fGtl.jpg", cta: "Learn about our business account; Kinara", link: "https://www.gtbank.co.tz/business-banking/sme-banking/gt-kinara-account" },
        { imageUrl: "https://i.imgur.com/AcrFQqv.jpg", cta: "Learn about our business account; Kinara", link: "https://www.gtbank.co.tz/business-banking/sme-banking/gt-kinara-account" },
        { imageUrl: "https://i.imgur.com/m7ymVED.jpg", cta: "Learn about our business account; Kinara", link: "https://www.gtbank.co.tz/business-banking/sme-banking/gt-kinara-account" }
    ],
    spendToSave: [
        { imageUrl: "https://i.imgur.com/TaTReZK.jpg", cta: "Learn more about our spend to save solution; Jibakishie", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/jibakishie-account" },
        { imageUrl: "https://i.imgur.com/SQlnv8Z.jpg", cta: "Learn more about our spend to save solution; Jibakishie", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/jibakishie-account" },
        { imageUrl: "https://i.imgur.com/tmyBwaW.jpg", cta: "Learn more about our spend to save solution; Jibakishie", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/jibakishie-account" },
        { imageUrl: "https://i.imgur.com/623gItJ.jpg", cta: "Learn more about our spend to save solution; Jibakishie", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/jibakishie-account" }
    ],
    kids: [
        { imageUrl: "https://i.imgur.com/Pr8R3zF.jpg", cta: "Learn about our saving solution for Kids", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/smart-kids-save-sks" },
        { imageUrl: "https://i.imgur.com/0jKhgGy.jpg", cta: "Learn about our saving solution for Kids", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/smart-kids-save-sks" },
        { imageUrl: "https://i.imgur.com/QdbMghp.jpg", cta: "Learn about our saving solution for Kids", link: "https://www.gtbank.co.tz/personal-banking/accounts/savings-investment-accounts/smart-kids-save-sks" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("tip-modal");
    const openModalBtn = document.getElementById("open-modal-btn");
    const closeModalBtn = document.getElementsByClassName("close-btn")[0];
    const tipContent = document.getElementById("tip-content");
    const ctaContent = document.getElementById("cta");

    function getRandomCategory() {
        const categories = Object.keys(tips);
        const randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }

    function getRandomTipFromCategory(category) {
        const categoryTips = tips[category];
        const randomIndex = Math.floor(Math.random() * categoryTips.length);
        return categoryTips[randomIndex];
    }

    function showTip() {
        const category = getRandomCategory();
        const tip = getRandomTipFromCategory(category);
        tipContent.innerHTML = `<img src="${tip.imageUrl}" class="tip-image" alt="Financial Tip">`;
        ctaContent.innerHTML = `<a href="${tip.link}" target="_blank">${tip.cta}</a>`;
    }

    openModalBtn.addEventListener("click", () => {
        showTip();
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
