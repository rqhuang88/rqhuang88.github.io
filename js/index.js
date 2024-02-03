function displayWindow(contentId) {
    var contents = document.getElementsByClassName('window_css');

    // 隐藏所有内容
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // 显示特定id的内容
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    document.getElementById("shadow").style.display = "block";

    setTimeout(function (){
        document.addEventListener('click', closeWindowOnClickOutside);
    }, 30)
}

function closeWindowOnClickOutside(event) {
    var contents = document.getElementsByClassName('window_css');

    for (var i = 0; i < contents.length; i++) {
        if (contents[i].style.display === 'block'){
            var contentId = contents[i].id
        }
    }

    if (event.target.id === 'shadow') {
        hideWindow(contentId);
    }
}

function hideWindow(contentId) {
    console.log(contentId)
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'none';
    }

    document.getElementById("shadow").style.display = "none";
    document.removeEventListener('click', closeWindowOnClickOutside);
}

function copyToClipboard(contentId) {
    // 获取要复制的内容
    var contentToCopy = document.getElementById(contentId).querySelector('p');

    // 创建一个临时的textarea元素，将要复制的内容放入其中
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = contentToCopy.textContent;

    // 将textarea添加到文档中
    document.body.appendChild(tempTextArea);

    // 选择textarea中的内容
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); /* 兼容iOS */

    // 尝试执行复制命令
    document.execCommand('copy');

    // 移除临时创建的textarea
    document.body.removeChild(tempTextArea);

    // 在实际应用中，你可能需要提供用户一些反馈，告诉他们内容已被复制
    showMessagePopup();
}

function showMessagePopup() {
    var messagePopup = document.getElementById('messagePopup');
    messagePopup.textContent = 'Copy successful!';

    // 显示消息弹窗
    messagePopup.style.display = 'block';

    // 设置一定时间后自动关闭消息弹窗
    setTimeout(function() {
        messagePopup.style.display = 'none';
    }, 3000); // 3秒后关闭消息弹窗
}

function redirectToPageB(id) {
    // 使用 window.location.href 设置新的 URL，包含 id 参数
    window.location.href = "html/BibTex.html?id=" + id;
}