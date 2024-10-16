// 获取按钮和 body 元素
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// 检查之前用户是否保存了模式偏好
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.innerText = "Light Mode";
}

// 切换夜间模式功能
toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // 根据当前模式改变按钮文本
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerText = "Light Mode";
        localStorage.setItem('darkMode', 'enabled'); // 保存用户偏好
    } else {
        toggleButton.innerText = "Dark Mode";
        localStorage.setItem('darkMode', 'disabled'); // 保存用户偏好
    }
});
