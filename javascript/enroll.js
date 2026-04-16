document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollForm');
    const documents = document.getElementById('documents');
    const fileList = document.getElementById('fileList');


    documents.addEventListener('change', () => {
        const files = Array.from(documents.files);
        fileList.textContent = files.length > 0 ? "Selected Files: " + files.map(f => f.name).join(", ") : "";
    });


    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent page reload

        let valid = true;

        form.querySelectorAll('[required]').forEach(input => {
            if(!input.value){
                input.classList.add('invalid');
                valid = false;
            } else {
                input.classList.remove('invalid');
            }
        });

        if(valid){
            
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

            // Reset form and clear file list
            form.reset();
            fileList.textContent = "";
        }
    });
});