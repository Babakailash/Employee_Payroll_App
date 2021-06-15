window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
/*Template literal ES6 features*/
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    const innerHtml = `${headerHtml}

        <tr><!--Hard Coding only test purpose -->
        <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png">
        </td>
        <td>Kailashnath Vishwakarma</td>
        <td>Male</td>
        <td><div class="dept-label">Engineering</div>
        <div class="dept-label">Finance</div></td>
        <td>3000000</td>
        <td> 1 Nov 2019</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
        document.querySelector('#table-display').innerHTML = innerHtml;
}