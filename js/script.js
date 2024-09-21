// section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section'); // 모든 섹션 선택

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% 이상 보일 때 애니메이션 트리거
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // 애니메이션이 완료되면 더 이상 관찰하지 않음
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// 박스텍스트 


document.addEventListener("DOMContentLoaded", function() {
    const textBox = document.querySelector('.box_text');
    const htmlContent = textBox.innerHTML;
    textBox.innerHTML = '';
    
    let isTag = false;
    let tagBuffer = '';

    htmlContent.split('').forEach((char, index) => {
        if (char === '<') {
            isTag = true;
            tagBuffer = char;
        } else if (char === '>') {
            isTag = false;
            tagBuffer += char;
            textBox.innerHTML += tagBuffer;  // 전체 태그를 추가
            tagBuffer = '';
        } else if (isTag) {
            tagBuffer += char;  // 태그 내부 문자를 버퍼에 추가
        } else {
            const span = document.createElement('span');
            if (char === ' ') {
                span.innerHTML = '&nbsp;';  // 띄어쓰기 처리
            } else {
                span.textContent = char;
            }
            span.style.setProperty('--i', index);
            textBox.appendChild(span);
        }
    });
});


// 픽업버튼 

document.querySelectorAll('.pickupbutton').forEach(function(button) {
    button.addEventListener('click', function() {
        var pickupInfo = this.nextElementSibling; // 클릭한 버튼 다음에 오는 .pickupinfo 요소를 가져옴
        
        if (pickupInfo.classList.contains('show')) {
            pickupInfo.classList.remove('show');
            setTimeout(function() {
                pickupInfo.style.display = 'none';
            }, 500); 
        } else {
            pickupInfo.style.display = 'block';
            setTimeout(function() {
                pickupInfo.classList.add('show');
            }, 10);
        }
    });
});


// 모달
// 모달 제어 코드
document.addEventListener("DOMContentLoaded", function() {
    const modals = {
        ticket: document.getElementById('ticketModal'),
        qr: document.getElementById('qrModal'),
        order: document.getElementById('orderModal')
    };

    const closeButtons = document.querySelectorAll('.close');
    const confirmButtons = document.querySelectorAll('.confirm-button');
    const cancelButtons = document.querySelectorAll('.cancel-button');

    // 모달 열기 함수
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // 모달 닫기 함수
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // bookTicket 버튼을 클릭하면 티켓 모달 열기
    document.getElementById('bookTicket').addEventListener('click', function(event) {
        event.preventDefault();
        openModal(modals.ticket);
    });

    // moreInfo 클래스를 가진 모든 요소에 이벤트 리스너 추가
    document.querySelectorAll('.moreInfo').forEach(function(moreInfoBtn) {
        moreInfoBtn.addEventListener('click', function(event) {
            event.preventDefault();  // 기본 링크 동작 방지
            openModal(modals.qr);    // qr 모달 열기
        });
    });

    // order 버튼을 클릭하면 주문 모달 열기
    document.querySelectorAll('.order_button').forEach(function(button) {
        button.addEventListener('click', function() {
            openModal(modals.order);
        });
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    // 모달 외부를 클릭하면 모달 닫기
    window.addEventListener('click', function(event) {
        Object.values(modals).forEach(modal => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // 확인 버튼 클릭 시 모달 닫기
    confirmButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    // 취소 버튼 클릭 시 모달 닫기
    cancelButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });
});




 



document.addEventListener("DOMContentLoaded", function () {
    // 모든 'scroll-to-top' 버튼에 대해 클릭 이벤트를 설정
    var scrollToTopButtons = document.querySelectorAll('.scroll-to-top');

    scrollToTopButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 부드럽게 스크롤
            });
        });
    });
});

// 링크 
document.addEventListener('DOMContentLoaded', function () {
    var searchBtn = document.querySelector('.search_btn');
    var languageBtn = document.querySelector('.language_btn');
    var searchDropdown = document.querySelector('.search_dropdown');
    var languageDropdown = document.querySelector('.language_dropdown');

    // Search 버튼 클릭 이벤트
    searchBtn.addEventListener('click', function (event) {
        event.preventDefault();
        toggleDropdown(searchDropdown);
    });

    // Language 버튼 클릭 이벤트
    languageBtn.addEventListener('click', function (event) {
        event.preventDefault();
        toggleDropdown(languageDropdown);
    });

    // 드롭다운 토글 함수
    function toggleDropdown(dropdown) {
        if (dropdown.style.display === 'block') {
            hideDropdown(dropdown);
        } else {
            showDropdown(dropdown);
        }
    }

    // 드롭다운 표시
    function showDropdown(dropdown) {
        dropdown.style.display = 'block';
        setTimeout(function () {
            dropdown.style.opacity = '1';
        }, 10); // 부드러운 전환을 위한 약간의 지연
    }

    // 드롭다운 숨기기
    function hideDropdown(dropdown) {
        dropdown.style.opacity = '0';
        setTimeout(function () {
            dropdown.style.display = 'none';
        }, 300); // 전환이 완료된 후 display를 none으로 설정
    }

    // 마우스가 드롭다운을 벗어나면 숨기기
    searchDropdown.addEventListener('mouseleave', function () {
        hideDropdown(searchDropdown);
    });

    languageDropdown.addEventListener('mouseleave', function () {
        hideDropdown(languageDropdown);
    });
});

// 링크공유

document.addEventListener('DOMContentLoaded', function() {
    const shareIcon = document.querySelector('.share-icon');
    const popup = document.querySelector('.share-popup');
    const copyButton = document.querySelector('.copy-button');
    const pageUrl = document.querySelector('.page-url');

    // 네 번째 아이콘 클릭 시 팝업 열기
    shareIcon.addEventListener('click', function(event) {
        event.preventDefault();
        pageUrl.value = window.location.href; // 현재 페이지 URL을 입력 필드에 설정

        popup.style.display = 'block'; // 팝업을 화면에 표시
    });

    // 버튼 클릭 시 URL 복사
    copyButton.addEventListener('click', function() {
        pageUrl.select(); // URL 텍스트 선택
        document.execCommand('copy'); // 클립보드에 복사
        alert('링크가 복사되었습니다: ' + pageUrl.value); // 알림 표시
    });

    // 팝업 외부 클릭 시 팝업 닫기
    document.addEventListener('click', function(event) {
        if (!popup.contains(event.target) && !event.target.closest('.share-icon')) {
            popup.style.display = 'none';
        }
    });
});





// info 코드 

document.addEventListener("DOMContentLoaded", function () {
    const infoItems = document.querySelectorAll('.info li');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // 애니메이션이 완료되면 더 이상 관찰하지 않음
            }
        });
    }, observerOptions);

    infoItems.forEach(item => {
        observer.observe(item);
    });
});

// egg
document.addEventListener("DOMContentLoaded", function () {
    const liElements = document.querySelectorAll(".egg_wrap li");

    // IntersectionObserver 설정
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // 애니메이션 완료 후 더 이상 감지하지 않음
            }
        });
    }, {
        threshold: 0.1 // 10%가 화면에 나타나면 트리거
    });

    // 모든 li 요소를 관찰
    liElements.forEach(li => {
        observer.observe(li);
    });
});
