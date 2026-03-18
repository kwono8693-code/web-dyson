document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (email && password) {
        console.log('로그인 시도 중...');
    } else {
        alert('이메일과 비밀번호를 모두 입력해주세요.');
    }
});
})