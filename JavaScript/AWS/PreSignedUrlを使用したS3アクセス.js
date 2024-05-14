document.getElementById("upload-button").addEventListener("click", async () => {
  const fileInput = document.getElementById("file-input");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file.");
    return;
  }

  // 仮に設定されたPre-signed URLを取得（実際にはサーバーから取得することが一般的です）
  const presignedUrl =
    "https://your-bucket-name.s3.your-region.amazonaws.com/your-object-key?" +
    "X-Amz-Algorithm=AWS4-HMAC-SHA256&" +
    "X-Amz-Credential=your-aws-access-key-id/your-credential-scope&" +
    "X-Amz-Date=your-x-amz-date&" +
    "X-Amz-SignedHeaders=host&" +
    "X-Amz-Expires=expiration-time&" +
    "X-Amz-Signature=your-signature";

  try {
    const response = await fetch(presignedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });

    if (response.ok) {
      console.log("File was uploaded successfully.");
    } else {
      console.error(
        "Failed to upload file.",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
});
