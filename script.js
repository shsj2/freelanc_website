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
// پیش‌نمایش عکس آپلود شده
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const preview = document.getElementById('previewImage');
        preview.src = reader.result;
        preview.style.display = 'block';  // نمایش تصویر
    }
    reader.readAsDataURL(event.target.files[0]);
}
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // گرفتن فایل تصویر و توضیحات
    const imageInput = document.getElementById('imageUpload');
    const descriptionInput = document.getElementById('description');

    const file = imageInput.files[0];
    const description = descriptionInput.value;

    if (file && description) {
        // نمایش تصویر و توضیحات در بخش گالری
        const gallery = document.getElementById('gallery');

        const newItem = document.createElement('div');
        newItem.classList.add('portfolio-item');
        
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);  // ایجاد URL برای تصویر آپلود شده
        img.alt = description;

        const text = document.createElement('p');
        text.textContent = description;

        newItem.appendChild(img);
        newItem.appendChild(text);

        gallery.appendChild(newItem);

        // پاک کردن فرم بعد از آپلود
        imageInput.value = '';
        descriptionInput.value = '';
    } else {
        alert('لطفاً تصویر و توضیحات را وارد کنید.');
    }
});
