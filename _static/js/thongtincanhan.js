  const quotes = [
            "Tiền tài - Danh vọng - Địa vị - Tình duyên",
            "Hãy là phiên bản tốt nhất của chính mình!",
            "Chỉ một lần sống, hãy sống hết mình.",
            "Đừng chờ đợi, hãy tạo ra cơ hội.",
            "Đam mê là ngọn lửa dẫn lối thành công."
        ];

        let quoteIndex = 0;
        const quoteElement = document.getElementById('quote');

        function changeQuote() {
            quoteElement.style.opacity = 0;
            setTimeout(() => {
                quoteElement.textContent = quotes[quoteIndex];
                quoteIndex = (quoteIndex + 1) % quotes.length;
                quoteElement.style.opacity = 1;
            }, 500);
        }

        changeQuote();
        setInterval(changeQuote, 5000);
document.addEventListener("DOMContentLoaded", function() {
    const icons = [
        "_static/emoji/24-7.gif",
        "_static/emoji/butterfly.gif",
        "_static/emoji/devil.gif",
        "_static/emoji/flashing-dragon.gif",
        "_static/emoji/golden-dragon.gif",
        "_static/emoji/green-tick.gif",
        "_static/emoji/heart.gif",
        "_static/emoji/online.gif",
        "_static/emoji/open.gif",
        "_static/emoji/tick7colors.gif",
        "_static/emoji/VN.gif"
    ];

    // chọn random
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    // gắn vào thẻ img có id="verifiedIcon"
    document.getElementById("verifiedIcon").src = randomIcon;
});

