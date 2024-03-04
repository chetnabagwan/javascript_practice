const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const selectedFile = document.getElementById('selectedFile');

let uploadedFile = null;

uploadForm.addEventListener('submit', function(event) {
  event.preventDefault();
  uploadedFile = fileInput.files[0];
  displayFile();
});

function displayFile() {
  selectedFile.innerHTML = `
    <p>Selected file: ${uploadedFile.name}</p>
    <button onclick="showFileContent()">View File Content</button>
    <button onclick="deleteFile()">Delete File</button>
  `;
  selectedFile.style.display = 'block';
}

function showFileContent() {
  const reader = new FileReader();
  reader.onload = function(event) {
    const filecontent = event.target.result;
    var data = {
        'name': uploadedFile.name,
        'content': filecontent
    }
   
    localStorage.setItem('file',JSON.stringify(data));
    window.location.href = 'view_file.html';
  };
  reader.readAsText(uploadedFile);
}

function content(){
    const con = JSON.parse(localStorage.getItem('file'));
    if (con) {
      document.getElementById('fileContent').innerText = con.content;
    }
}
function deleteFile() {
  selectedFile.style.display = 'none';
  localStorage.removeItem('file');
  document.getElementById("fileinput").value=null;

}

function goBack() {
    window.location.href = 'index.html';
 
}

function previousData(){
  
    
}