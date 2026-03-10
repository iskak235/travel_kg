// 1. ТУРЛАРДЫН МААЛЫМАТТАРЫ
const allTours = [
    { id: 'sary-chelek', title: "Сары-Челек көлү", price: 3000, img: "https://central-asia.live/uploads/tours/sary-chelek-view-extended-tour.jpg", desc: "Сары-Челек — Кыргызстандын эң кооз коруктарынын бири. Бул жерде 7 көл бар, алардын эң чоңу Сары-Челек. Көл жаңгак жана мөмө-жемиш токойлору менен курчалган.", feat: ["⏱ 2 күн", "🏔 Бийиктик: 1878м", "📸 Фото-тур", "🏕 Лагерь"] },
    { id: 'son-kul', title: "Соң-Көл жайлоосу", price: 3500, img: "https://cdn-0.aki.kg/st_runews/9/339739.1.1517834539.jpg", desc: "Соң-Көл — бийик тоолуу жайлоо. Бул жерде сиз көчмөн маданиятын көрүп, боз үйдө түнөп, нукура кымыз иче аласыз.", feat: ["⏱ 3 күн", "🐎 Ат тур", "🥛 Нукура кымыз", "🌌 Жылдыздуу асман"] },
    { id: 'kel-suu', title: "Көл-Суу керемети", price: 1500, img: "https://www.advantour.com/img/kyrgyzstan/lakes/kel-suu-lake.jpg", desc: "Көл-Суу — Нарындагы уникалдуу көл. Ал бийик аскалардын арасында жайгашкан. Көлдүн өңү аба ырайына жараша өзгөрүп турат.", feat: ["⏱ 2 күн", "🛶 Кайык тебүү", "🏔 Бийик тоо", "🛂 Чек ара аймагы"] },
    { id: 'ala-archa', title: "Ала-Арча капчыгайы", price: 1200, img: "https://too.kg/wp-content/uploads/ala-archa-1.jpg", desc: "Бишкектен 40 км алыстыктагы улуттук парк. Шаркыратмалар, карагайлар жана кар баскан чокулар сизди күтөт.", feat: ["⏱ 1 күн", "🚶 Хайкинг", "🌲 Токой", "🏔 Таза аба"] },
    { id: 'jeti-oguz', title: "Жети-Өгүз керемети", price: 2500, img: "https://too.kg/wp-content/uploads/jety-oguz.jpg", desc: "Ысык-Көлдөгү кызыл аскалар. Жети-Өгүз жана Жарылган жүрөк аскалары өздөрүнүн легендалары менен белгилүү.", feat: ["⏱ 1 күн", "📜 Легендалар", "🔴 Кызыл аска", "🌊 Көл жээги"] },
    { id: 'arslanbob', title: "Арсланбаб токойлору", price: 4000, img: "https://blog.itari.com.ua/wp-content/uploads/2020/02/Arslanbob-Kyrgyzstan.jpg", desc: "Дүйнөдөгү эң чоң табигый жаңгак токою. Шаркыратмалар жана кооз жаратылыш Түштүк Кыргызстандын сыймыгы.", feat: ["⏱ 3 күн", "🌰 Жаңгак токою", "🌊 Шаркыратма", "🏔 Тоо пейзажы"] },
    { id: 'tash-rabat', title: "Таш-Рабат", price: 5000, img: "https://www.advantour.com/img/kyrgyzstan/tash-rabat/tash-rabat.jpg", desc: "15-кылымга таандык кербен-сарай. Жибек Жолундагы саякатчылар үчүн курулган тарыхый эстелик.", feat: ["⏱ 2 күн", "📜 Тарых", "🧱 Архитектура", "🏔 Нарын тоолору"] },
    { id: 'sulayman-too', title: "Сулайман-Тоо (Ош)", price: 1000, img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sulayman_Too_Osh.jpg", desc: "ЮНЕСКОнун тизмесине кирген Ош шаарынын ортосундагы ыйык тоо. Анын ичинде музей жана байыркы сүрөттөр бар.", feat: ["⏱ 1 күн", "🏛 Музей", "🕌 Ыйык жер", "🏙 Ош шаары"] },
    { id: 'padysha-ata', title: "Падыша-Ата коругу", price: 2800, img: "https://turmush.kg/static/turmush/2016/06/138122.3831737e193557e48b815664ef8f0b70.jpg", desc: "Арча токойлоруна бай корук. Бул жерде таза суулар жана тынч жаратылыш сиздин эс алууңузду камсыздайт.", feat: ["⏱ 2 күн", "🌳 Корук", "🏔 Тынчтык", "📸 Фото-тур"] },
    { id: 'grigorev', title: "Григорьев капчыгайы", price: 1800, img: "https://sun9-21.userapi.com/c854124/v854124234/11388d/0V98S7uCskc.jpg", desc: "Ысык-Көлдөгү эң кооз капчыгайлардын бири. Жашыл шалбаалар, боз үйлөр жана тоо суусунун жээгиндеги эс алуу.", feat: ["⏱ 1 күн", "🏕 Пикник", "🌊 Тоо суусу", "🐎 Ат минүү"] },
    { id: 'skazka', title: '"Сказка" каньону', price: 2200, img: "https://too.kg/wp-content/uploads/skazka-1.jpg", desc: "Кызыл топурактан түзүлгөн жомокко окшогон каньон. Сүрөткө түшүү үчүн эң сонун уникалдуу жер.", feat: ["⏱ 1 күн", "🏜 Марс көрүнүшү", "🟠 Кызыл кум", "🌊 Көл жээги"] },
    { id: 'shah-fazil', title: "Шах-Фазиль", price: 3200, img: "https://kyrgyzstan.kg/wp-content/uploads/2018/11/Shah-Fazil-768x512.jpg", desc: "Орто кылымга таандык архитектуралык комплекс. Тарыхый оймо-чиймелер жана мавзолейлер сакталган жай.", feat: ["⏱ 1 күн", "🏛 Тарых", "🏺 Оймолор", "📜 Ислам тарыхы"] }
];

// 2. КАРТОЧКАЛАРДЫ АВТОМАТТЫК ТҮРДӨ ЧЫГАРУУ
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tours-container');
    if(container) {
        allTours.forEach(tour => {
            container.innerHTML += `
                <div class="lux-card">
                    <div class="card-inner">
                        <div class="card-image-box">
                            <img src="${tour.img}" alt="${tour.title}">
                            <div class="price-tag-lux">${tour.price} сом</div>
                        </div>
                        <div class="card-info-lux">
                            <h3>${tour.title}</h3>
                            <div class="card-btns">
                                <a href="javascript:void(0)" class="btn-details" onclick="openDetails('${tour.id}')">Кененирээк</a>
                                <a href="javascript:void(0)" class="btn-lux-card" onclick="openPayment('${tour.title}', ${tour.price})">Брондоо</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
});

// 3. ФУНКЦИЯЛАР (МОДАЛДАР)
function openDetails(id) {
    const tour = allTours.find(t => t.id === id);
    const featuresHtml = tour.feat.map(f => `<div class="feature-item">✔ ${f}</div>`).join('');

    document.getElementById('details-content').innerHTML = `
        <img src="${tour.img}" class="details-img" style="width:100%; border-radius:10px;">
        <div class="details-body">
            <h2>${tour.title}</h2>
            <p>${tour.desc}</p>
            <div class="details-features">${featuresHtml}</div>
            <button class="btn-pay-submit" style="margin-top: 25px;" onclick="closeDetails(); openPayment('${tour.title}', ${tour.price})">Азыр брондоо</button>
        </div>
    `;
    document.getElementById('detailsModal').style.display = 'flex';
}

function closeDetails() { document.getElementById('detailsModal').style.display = 'none'; }

function openPayment(name, price) {
    document.getElementById('paymentModal').style.display = 'flex';
    document.getElementById('tour-name-display').innerText = name;
    document.getElementById('tour-price-display').innerText = price.toLocaleString();
}

function closePayment() { document.getElementById('paymentModal').style.display = 'none'; }

// Сыртты басканда жабуу
window.onclick = function(event) {
    if (event.target.classList.contains('modal-pay-overlay')) {
        closeDetails();
        closePayment();
    }
}

// Форманы жөнөтүү
const checkoutForm = document.getElementById('checkout-form');
if(checkoutForm) {
    checkoutForm.onsubmit = function(e) {
        e.preventDefault();
        const btn = e.target.querySelector('.btn-pay-submit');
        btn.innerText = "Төлөм аткарылууда...";
        setTimeout(() => {
            alert("Төлөм ийгиликтүү өттү! Сиздин брондооңуз тастыкталды.");
            closePayment();
            btn.innerText = "Төлөө";
        }, 2000);
    };
}