<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // بررسی اینکه آیا فایلی آپلود شده است
    if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
        $fileTmpPath = $_FILES["image"]["tmp_name"];
        $fileName = $_FILES["image"]["name"];
        $fileSize = $_FILES["image"]["size"];
        $fileType = $_FILES["image"]["type"];

        // مسیر ذخیره‌سازی فایل
        $uploadDir = "uploads/";
        $uploadFile = $uploadDir . basename($fileName);

        // محدودیت‌های حجم فایل
        $maxFileSize = 5 * 1024 * 1024; // 5MB
        if ($fileSize > $maxFileSize) {
            echo "File is too large.";
        } else {
            // انتقال فایل به پوشه uploads
            if (move_uploaded_file($fileTmpPath, $uploadFile)) {
                echo "File uploaded successfully.";
            } else {
                echo "There was an error uploading the file.";
            }
        }
    } else {
        echo "No file uploaded or there was an upload error.";
    }

    // ذخیره توضیحات (optional)
    if (isset($_POST['description'])) {
        $description = $_POST['description'];
        echo "Description: " . htmlspecialchars($description);
    }
}
?>
