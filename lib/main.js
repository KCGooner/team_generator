module.exports = {
    managerHtml(e) {
        return `<div class="col mb-4">
                    <div class="card">
                        <div class="card-header">
                         <h2>${e.name}</h2>
                         <h2><i class="fas fa-glasses"> </i> Manger</h2>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">ID: ${e.id}</h5>
                            <h5 class="card-title">Email: ${e.email}</h5>
                            <h5 class="card-title">Office#: ${e.officeNumber}</h5>
                        </div>
                    </div>
                </div>`;
    },
    engineerHtml(e) {
        return `<div class="col mb-4">
                    <div class="card">
                        <div class="card-header">
                         <h2>${e.name}</h2>
                         <h2><i class="fas fa-glasses"> </i> Engineer</h2>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">ID: ${e.id}</h5>
                            <h5 class="card-title">Email: ${e.email}</h5>
                            <h5 class="card-title">GitHub: ${e.github}</h5>
                        </div>
                    </div>
                </div>`;
    },
    internHtml(e) {
        return `<div class="col mb-4">
                    <div class="card">
                        <div class="card-header">
                         <h2>${e.name}</h2>
                         <h2><i class="fas fa-glasses"> </i> Intern</h2>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">ID: ${e.id}</h5>
                            <h5 class="card-title">Email: ${e.email}</h5>
                            <h5 class="card-title">school: ${e.school}</h5>
                        </div>
                    </div>
                </div>`;
    },
}