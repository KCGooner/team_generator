module.exports = {
    managerHtml(e) {
        return `<div class="col mb-4">
                    <div class="card">
                        <div class="card-header">
                         <h5 class="card-header">${e.name}</h5>
                         <h5 class="card-header"><i class="fas fa-glasses"></i> Manger</h5>
                        </div>
                        <div class="card-body">
                            <h6>ID: ${e.id}</h6>
                            <h6>Email: ${e.email}</h6>
                            <h6>Office#: ${e.officeNumber}</h6>
                        </div>
                    </div>
                </div>`;
    },
    engineerHtml(e) {
        return `<div class="col mb-4">
                    <div class="card">
                        <div class="card-header">
                         <h5 class="card-title">${e.name}</h5>
                         <h5 class="card-title"><i class="fas fa-glasses"></i> Engineer</h5>
                        </div>
                        <div class="card-body">
                            <h6>ID: ${e.id}</h6>
                            <h6>Email: ${e.email}</h6>
                            <h6>GitHub: ${e.github}</h6>
                        </div>
                    </div>
                </div>`;
    },
    internHtml(e) {
        return `<div class="col mb-4">
                    <div class="card">
                        <div class="card-header">
                         <h5 class="card-title">${e.name}</h5>
                         <h5 class="card-title"><i class="fas fa-glasses"> </i> Intern</h5>
                        </div>
                        <div class="card-body">
                            <h6>ID: ${e.id}</h6>
                            <h6>Email: ${e.email}</h6>
                            <h6>School: ${e.school}</h6>
                        </div>
                    </div>
                </div>`;
    },
}