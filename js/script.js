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


document.addEventListener("DOMContentLoaded", function () {
    // 모든 order 버튼 가져오기
    var orderButtons = document.querySelectorAll(".order_button");

    // 모달 요소 가져오기
    var modal = document.getElementById("orderModal");

    // close 버튼 가져오기
    var closeButton = document.querySelector(".modal .close");

    // 모든 order 버튼에 대해 클릭 이벤트 추가
    orderButtons.forEach(function(orderButton) {
        orderButton.addEventListener("click", function () {
            modal.style.display = "block";
        });
    });

    // close 버튼 클릭 시 모달 닫기
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 모달 외부 클릭 시 모달 닫기
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
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

document.addEventListener("DOMContentLoaded", function () {
    // Modal 요소 가져오기
    var modal = document.getElementById("ticketModal");

    // book a ticket 버튼 가져오기
    var bookTicketButton = document.getElementById("bookTicket");

    // 닫기 버튼 가져오기
    var closeButton = document.getElementsByClassName("close")[0];

    // book a ticket 버튼 클릭 시 모달 열기
    bookTicketButton.addEventListener("click", function (event) {
        event.preventDefault(); // 링크의 기본 동작(페이지 이동)을 막기 위해 사용
        modal.style.display = "block";
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 모달 외부를 클릭했을 때 모달 닫기
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
