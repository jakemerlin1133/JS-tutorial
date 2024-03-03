const book_form = document.querySelector('#book-form');


book_form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const middlename = document.querySelector('#middlename').value;
    const school = document.querySelector('#School').value;
    const block = document.querySelector('#Block').value;

    if(firstname === "" || lastname === "" || middlename === "" || school === "" || block ===""){
        const alert = document.querySelector('#alert');  
        alert.classList.remove('d-none');     
            alert.classList.add('alert-danger');
            alert.innerText = "Plese Fill the Blank";
            setTimeout((e) => document.querySelector('#alert').remove(), 3000);
             }else{
            const alert = document.querySelector('#alert');  
            alert.classList.remove('d-none');
            alert.classList.remove('alert-danger');       
            alert.classList.add('alert-success');
            alert.innerText = "Student Added", "success";

            const studentsList = document.querySelector('#student-list');
                    const row = document.createElement('tr');
                     row.innerHTML =`
                     <td>${firstname}</td>
                     <td>${lastname}</td>
                     <td>${middlename }</td>
                     <td>${school}</td>
                     <td>${block}</td>
                     <td><a href="#" class="btn btn-danger btn-sm remove">Remove</a></td>
                     `;
            
                 studentsList.appendChild(row);

                 document.querySelector('#firstname').value = "";
                 document.querySelector('#lastname').value = "";
                 document.querySelector('#middlename').value = "";
                 document.querySelector('#School').value = "";
                 document.querySelector('#Block').value = "";

                 row.querySelector('.remove').addEventListener('click', () => {
                    row.remove();
                });

                 setTimeout(() => {
                    alert.classList.add('d-none');
                    alert.innerText = "";
                }, 3000);
             }

});
























