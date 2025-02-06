// Load language from localStorage on page load
document.addEventListener('DOMContentLoaded', (event) => {
    const language = localStorage.getItem('language') || 'en';
    setLanguage(language);
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    if (lang === 'en') {
        document.getElementById('page-title').textContent = 'Attractions - Dream Destinations';
        document.getElementById('nav-home').textContent = 'Home';
        document.getElementById('nav-attractions').textContent = 'Attractions';
        document.getElementById('nav-accommodation').textContent = 'Accommodation';
        document.getElementById('nav-cafes').textContent = 'Cafe and Restaurants';
        document.getElementById('nav-contact').textContent = 'Contact';
        document.getElementById('hero-title').textContent = 'Discover Your Dream Destinations';
        document.getElementById('cultural-attractions').textContent = 'Cultural Attractions';
        document.getElementById('natural-attractions').textContent = 'Natural Attractions';
        document.getElementById('explore-title').textContent = 'Explore Our Top Attractions';
        document.getElementById('cultural-title-1').textContent = 'Cultural Attractions';
        document.getElementById('cultural-description-1').textContent = 'Explore historical landmarks and cultural sites that tell the stories of our past.';
        document.getElementById('discover-more-1').textContent = 'Discover More';
        document.getElementById('natural-title-1').textContent = 'Natural Attractions';
        document.getElementById('natural-description-1').textContent = 'Discover breathtaking natural landscapes and stunning wildlife.';
        document.getElementById('explore-now-1').textContent = 'Explore Now';
        document.getElementById('footer-text').textContent = '© 2024 Dream Destinations. All rights reserved.';
        document.getElementById('satun-scape').textContent = 'SATUN SCAPE';
        document.getElementById('info-satun-title').textContent = 'Information About Satun Province';
        document.getElementById('general-info-title').textContent = 'General Information';
        document.getElementById('general-info-description').textContent = 'Satun is a province in southern Thailand, bordering the Andaman Sea and Malaysia. It is known for its serene beauty and rich cultural heritage.';
        document.getElementById('attractions-title').textContent = 'Top Attractions';
        document.getElementById('attraction-1').textContent = 'A stunning archipelago with crystal-clear waters and diverse marine life.';
        document.getElementById('attraction-2').textContent = 'A historic building with unique architecture and cultural significance.';
        document.getElementById('attraction-3').textContent = 'One of the largest caves in Thailand, known for its impressive stalactites and stalagmites.';
        document.getElementById('attraction-4').textContent = 'A beautiful waterfall with limestone terraces, perfect for relaxation and exploration.';
        document.getElementById('local-cuisine-title').textContent = 'Local Cuisine';
        document.getElementById('local-cuisine-description').textContent = 'Satun offers a variety of delicious local dishes, including fresh seafood, spicy curries, and unique southern Thai flavors.';
        document.getElementById('travel-tips-title').textContent = 'Travel Tips';
        document.getElementById('travel-tip-1').textContent = 'Best time to visit: November to April for the best weather conditions.';
        document.getElementById('travel-tip-2').textContent = 'Getting around: Renting a scooter or using local transport is convenient.';
        document.getElementById('travel-tip-3').textContent = 'Respect local customs: Dress modestly and be mindful of cultural norms.';
        document.getElementById('official-website').innerHTML = '<strong><i class="fas fa-globe"></i> Official Website:</strong> <a href="https://www.satun.go.th/frontpage" target="_blank">www.satun.go.th</a>';
    } else if (lang === 'zh') {
        document.getElementById('page-title').textContent = '景点 - 梦想目的地';
        document.getElementById('nav-home').textContent = '首页';
        document.getElementById('nav-attractions').textContent = '景点';
        document.getElementById('nav-accommodation').textContent = '住宿';
        document.getElementById('nav-cafes').textContent = '咖啡馆和餐厅';
        document.getElementById('nav-contact').textContent = '联系';
        document.getElementById('hero-title').textContent = '选择您的景点类别';
        document.getElementById('cultural-attractions').textContent = '文化景点';
        document.getElementById('natural-attractions').textContent = '自然景点';
        document.getElementById('explore-title').textContent = '探索我们的热门景点';
        document.getElementById('cultural-title-1').textContent = '文化景点';
        document.getElementById('cultural-description-1').textContent = '探索讲述我们过去历史的地标和文化景点。';
        document.getElementById('discover-more-1').textContent = '了解更多';
        document.getElementById('natural-title-1').textContent = '自然景点';
        document.getElementById('natural-description-1').textContent = '发现惊人的自然景观和美丽的野生动物。';
        document.getElementById('explore-now-1').textContent = '立即探索';
        document.getElementById('footer-text').textContent = '© 2024 梦想目的地。 版权所有。';
        document.getElementById('satun-scape').textContent = '沙敦风光';
        document.getElementById('info-satun-title').textContent = '关于沙敦省的信息';
        document.getElementById('general-info-title').textContent = '基本信息';
        document.getElementById('general-info-description').textContent = '沙敦是泰国南部的一个省，毗邻安达曼海和马来西亚。以其宁静的美景和丰富的文化遗产而闻名。';
        document.getElementById('attractions-title').textContent = '主要景点';
        document.getElementById('attraction-1').textContent = '一个令人惊叹的群岛，拥有清澈的海水和多样的海洋生物。';
        document.getElementById('attraction-2').textContent = '一座具有独特建筑和文化意义的历史建筑。';
        document.getElementById('attraction-3').textContent = '泰国最大的洞穴之一，以其令人印象深刻的钟乳石和石笋而闻名。';
        document.getElementById('attraction-4').textContent = '一个美丽的瀑布，拥有石灰石阶地，非常适合放松和探索。';
        document.getElementById('local-cuisine-title').textContent = '地方美食';
        document.getElementById('local-cuisine-description').textContent = '沙敦提供各种美味的当地菜肴，包括新鲜的海鲜、辛辣的咖喱和独特的南泰风味。';
        document.getElementById('travel-tips-title').textContent = '旅游提示';
        document.getElementById('travel-tip-1').textContent = '最佳访问时间：11月至4月，天气条件最佳。';
        document.getElementById('travel-tip-2').textContent = '出行方式：租一辆摩托车或使用当地交通工具非常方便。';
        document.getElementById('travel-tip-3').textContent = '尊重当地习俗：穿着得体，注意文化规范。';
        document.getElementById('official-website').innerHTML = '<strong><i class="fas fa-globe"></i> 官方网站：</strong> <a href="https://www.satun.go.th/frontpage" target="_blank">www.satun.go.th</a>';
    }
}

// Slide show functions

let slideIndex = [1, 1, 1, 1];
let slideId = ["general-info", "attractions-info", "local-cuisine-info", "travel-tips-info"];

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    if (n > slides.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[no] - 1].style.display = "block";
}

// แสดงสไลด์แรกสำหรับแต่ละกลุ่ม
for (let i = 0; i < slideId.length; i++) {
    showSlides(slideIndex[i], i);
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // ส่งข้อมูลไปยังเซิร์ฟเวอร์
    fetch('contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your message has been sent!');
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Thank you for your message!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const projectLogoInput = document.getElementById('project-logo');
    const schoolLogoInput = document.getElementById('school-logo');
    const projectLogoPreview = document.getElementById('project-logo-preview');
    const schoolLogoPreview = document.getElementById('school-logo-preview');
    
    projectLogoInput.addEventListener('change', function() {
        displayLogoPreview(this, projectLogoPreview);
    });

    schoolLogoInput.addEventListener('change', function() {
        displayLogoPreview(this, schoolLogoPreview);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Thank you for your message!');
            form.reset();
            projectLogoPreview.style.display = 'none';
            schoolLogoPreview.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
    });

    function displayLogoPreview(input, previewElement) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewElement.src = e.target.result;
                previewElement.style.display = 'block';
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
