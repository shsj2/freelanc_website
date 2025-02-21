document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault(); // جلوگیری از ارسال فرم به صورت معمولی
    
    var text = document.getElementById('text').value; // گرفتن متن وارد شده
    var image = document.getElementById('image').files[0]; // گرفتن تصویر انتخاب شده
    
    if (text && image) {
        // نمایش متن وارد شده
        document.getElementById('uploaded-text').textContent = text;
        
        // نمایش تصویر آپلود شده
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('uploaded-image').src = e.target.result;
        };
        reader.readAsDataURL(image);
    }
});
